/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include <chrono>
#include <iostream>
#include <vector>

#include <fmt/format.h>

#include <logging/Checks.h>

#include <vrs/os/Time.h>

#include <vrs/DataLayout.h>
#include <vrs/DataPieces.h>
#include <vrs/RecordFileReader.h>
#include <vrs/RecordFileWriter.h>
#include <vrs/RecordFormatStreamPlayer.h>
#include <vrs/Recordable.h>
#include <vrs/StreamPlayer.h>

using namespace std;
using namespace vrs;

namespace vrs_sample_code {

/*

A VRS file is a file that contains a set of streams of records ordered by timestamp.
Each Record has:
- A StreamId to identify each instance of a device, algorithm, or "something" that produces a
  stream of records. The StreamIds must be unique per specific device instance so as to not
  confuse streams generated by other devices, possibly of the same type. Therefore, a StreamId
  combines a RecordableTypeId that describes the type of device, algorithm, or in general, producer
  of records, and an instance id, to differentiate streams coming from different devices of the same
  type.
- A (record) type: CONFIGURATION, STATE or DATA. See below for details.
  In this sample code, we only really produce DATA records for simplicity.
- A format version, so that you can recognize & handle record format changes.
  Prior to RecordFormat & DataLayout, VRS did not provide a way to describe how the data inside each
  record was organized. That responsibility lied entirely in the hands of the Recordable and the
  matching StreamPlayer for the same Type ID. With RecordFormat & DataLayout, this is now largely
  abstracted, but you still need to specify a format version.
- A timestamp, a double value, count of second, which meaning must be coherent between all
  Recordables when recording, as all the records are sorted together by timestamp, so they can be
  read in the correct order during playback.

The sample code below shows how to create & read a VRS file, with some trivial content.
Look at the sample apps for more advanced record format definitions.

*/

/// \brief Definition of some trivial metadata
///
/// Look at SampleRecordFormatDataLayout.cpp for more complex examples.
class MyMetadata : public AutoDataLayout {
 public:
  DataPieceValue<uint32_t> sensorValue{"my_sensor"};

  AutoDataLayoutEnd endLayout;
};

constexpr const char* kSampleFlavor = "team/vrs/sample";

/// Sample device recording some trivial metadata.
class RecordableDemo : public Recordable {
  /*
     A recordable represent a device or an algorithm, or any other logical component
     that needs to have some data saved in a stream a VRS file.

     A recordable can save 3 types of records:

     CONFIGURATION: how your recordable is configured as some point in time.
     Example: for a camera, it might be an exposure level, a framerate, or a resolution.

     STATE: internal state that might change as data flows.
     Example: for a position tracker, it might be the last calculated position or some
     internal representation of what is tracked, and where things are believed to be.

     DATA: whatever data your recordable produces.
     Example: for a camera, it might be image frames, for an IMU, it might be sensor data,
     for an algorithm, it might be a position.

     Every record produced by a recordable has a timestamp, which tells when that data was created.
     All records (all types) will be sorted by timestamp before being written,
     to be played back in that order, so it is critical to produce data
     with meaningful and system-coherent timestamps.
  */

  // Come up with your own data format version codes (numbers will work just fine!)
  // These numbers are completely private (no risk to collide with another Recordable)
  // You are responsible for versionning the data you save & read.

  static const uint32_t kDataRecordFormatVersion = 1;

 public:
  // declare your device's unique id in RecordableTypeId.h
  RecordableDemo() : Recordable(RecordableTypeId::SampleDeviceRecordableClass, kSampleFlavor) {
    // define your RecordFormat & DataLayout definitions for this stream
    addRecordFormat(
        Record::Type::DATA, // the type of records this definition applies to
        kDataRecordFormatVersion, // a record format version
        metadata_.getContentBlock(), // the RecordFormat definition
        {&metadata_}); // the DataLayout definition for the datalayout content block declared above.
  }

  // When appropriate, you will be requested to give the configuration of your device/module
  // Create a state record to restore the internal state of your recordable on playback
  // Note: always provide a record, even if you don't need to save anything (as shown here).
  const Record* createConfigurationRecord() override {
    // Use the same time source for ALL your records in the entire file!
    // In this sample, the record has no payload.
    double someTimeInSec = os::getTimestampSec();
    return createRecord(someTimeInSec, Record::Type::CONFIGURATION, 0);
  }

  // When appropriate, you will be requested to give the state of your device/module
  // Create a state record to restore the internal state of your recordable on playback
  // Note: always provide a record, even if you don't need to save anything (as shown here).
  const Record* createStateRecord() override {
    double someTimeInSec = os::getTimestampSec();
    return createRecord(someTimeInSec, Record::Type::STATE, 0);
  }

  // This method demonstrates how the recordable creates a metadata record
  void createData(uint32_t sensorValue) {
    metadata_.sensorValue.set(sensorValue); // Record the value we want to save in the record
    // Use the same time source for ALL your records in the entire file!
    double someTimeInSec = os::getTimestampSec();
    createRecord(
        someTimeInSec, Record::Type::DATA, kDataRecordFormatVersion, DataSource(metadata_));
  }

  // pseudocode helper function
  static bool iNeedToRecordMoreData() {
    static int count = 5000;
    return --count > 0; // arbitrary condition for our demo
  }

  // pseudocode helper function
  void createMoreRecords() {
    // call createRecord() as often as you need
    uint32_t sensorValue = static_cast<uint32_t>(rand());
    this->createData(sensorValue);
  }

 private:
  MyMetadata metadata_;
};

/// Sample ways to create a VRS file.
class RecordSample {
  /*
     VRS file creation, method #1:
     Step 1: create all the records in memory
     Step 2: write them all at once in a single big blocking call!
  */
  static void createVRSFileSynchronously() {
    RecordableDemo recordable;
    RecordFileWriter fileWriter;
    fileWriter.addRecordable(&recordable); // add all the recordables you care about

    // for each recordable, create data & setActive(true);
    recordable.setRecordableIsActive(true);
    recordable.createConfigurationRecord(); // don't forget to save your configuration
    recordable.createStateRecord(); // don't forget to save your state
    recordable.createData(123); // add all the records you need
    recordable.createData(456);

    int result = fileWriter.writeToFile("my_record_file.vrs");
    XR_CHECK(result == 0);
  }

  /*
     VRS file creation, method #2:
     Create records as data comes in, and write to disk as you go to avoid using lots of memory.

     Note: setup and stop recording from the same thread, or in a synchronized way with your own
     locking. Only the calls to writeRecordsAsync(), closeFileAsync() or waitForFileClosed() need to
     be synchronized with each other.
     Recordable objects may create records concurrently at any time after the initial setup.
     It is perfectly fine to keep creating records even after closing the file, provided old records
     get purged from memory, maybe using autoPurgeRecords().
  */
  static void createVRSFileOnTheFly() {
    RecordableDemo recordable;
    RecordFileWriter fileWriter;
    fileWriter.addRecordable(&recordable); // add all the recordables you care about
    recordable.setRecordableIsActive(true);

    // Create the file
    int result = fileWriter.createFileAsync("my_record_file.vrs");
    XR_CHECK(result == 0);

    double lastTime = os::getTimestampSec();
    while (recordable.iNeedToRecordMoreData()) {
      recordable.createMoreRecords(); // for each recordable, maybe create new records of any type
      // maybe once every second, call:
      double now = os::getTimestampSec(); // current time using your *unique* time source
      if (now - lastTime > 1) {
        result = fileWriter.writeRecordsAsync(now - 1); // Start to save data more than 1 second old
        XR_CHECK(result == 0);
        // Don't save very recent records, in case some recordable produce new records
        // with timestamps that are slightly older than the current newest record
        lastTime = now;
      }
    }
    // We're done creating new data: save all we have
    result = fileWriter.closeFileAsync(); // start to save newer records in the background
    XR_CHECK(result == 0);
    // continue your housekeeping, until you want the file to be completely done
    result = fileWriter.waitForFileClosed();
    XR_CHECK(result == 0);
  }
};

// VRS file playback

/// Sample stream player to print metadata received from a stram.
class StreamPlayerDemo : public RecordFormatStreamPlayer {
  bool onDataLayoutRead(const CurrentRecord& record, size_t blockIndex, DataLayout& readData)
      override {
    MyMetadata& myData = getExpectedLayout<MyMetadata>(readData, blockIndex);
    fmt::print(
        stdout,
        "At {:.3f}, {} record, {}:\n",
        record.timestamp,
        toString(record.recordType),
        record.streamId.getName());
    myData.printLayout(cout); // try printLayoutCompact(), or format as json using asJson()
    return true; // read next blocks, if any
  }
};

/// Simple demonstration of how to read a VRS file.
class PlaybackSample {
  /*
   * VRS File playback sample
   */
  static void readVRSFile(const string& filePath) {
    RecordFileReader reader;
    if (reader.openFile(filePath) == 0) {
      vector<unique_ptr<StreamPlayer>> streamPlayers;

      // When dealing with stream that have a recordable flavor defined,
      // rather than iterating over all the streams of the VRS file, just find the one(s) we need...
      StreamId sampleDevice =
          reader.getStreamForFlavor(RecordableTypeId::SampleDeviceRecordableClass, kSampleFlavor);
      if (sampleDevice.isValid()) {
        // The RecordFilePlayer does *not* take ownership of the stream player,
        // which allows for the same StreamPlayer object to be used for different recordables.
        // The caller of setRecordablePlayer is responsible for deleting the StreamPlayer.
        streamPlayers.emplace_back(new StreamPlayerDemo());
        reader.setStreamPlayer(sampleDevice, streamPlayers.back().get());
      }

      // Alternate method ("old" style)
      // Iterate over all the devices found in the file,
      // and hookup the ones you recognize & care for...
      const set<StreamId>& streamIds = reader.getStreams();
      for (auto id : streamIds) {
        if (id.getTypeId() == RecordableTypeId::SampleDeviceRecordableClass) {
          // The RecordFilePlayer does *not* take ownership of the stream player,
          // which allows for the same StreamPlayer object to be used for different recordables.
          // The caller of setRecordablePlayer is responsible for deleting the StreamPlayer.
          streamPlayers.emplace_back(new StreamPlayerDemo());
          reader.setStreamPlayer(id, streamPlayers.back().get());
        }
      }

      // We're ready: read all the records in order, and send them to the stream players registered
      reader.readAllRecords();
      reader.closeFile();
    }
  }
};

} // namespace vrs_sample_code
