"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[807],{15680:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>b,useMDXComponents:()=>d,withMDXComponents:()=>u});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){return function(t){var a=d(t.components);return r.createElement(e,o({},t,{components:a}))}},d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,p=u["".concat(i,".").concat(m)]||u[m]||f[m]||o;return a?r.createElement(p,s(s({ref:t},c),{},{components:a})):r.createElement(p,s({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var r=a(96540),n=a(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.default)(o.tabItem,i),hidden:a},t)}},11470:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var r=a(58168),n=a(96540),o=a(20053),i=a(23104),s=a(56347),l=a(57485),c=a(31682),u=a(89466);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=f({queryString:a,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=l??d;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var b=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==s&&(d(t),l(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},i,{className:(0,o.default)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=h(e);return n.createElement("div",{className:(0,o.default)("tabs-container",v.tabList)},n.createElement(y,(0,r.A)({},e,t)),n.createElement(g,(0,r.A)({},e,t)))}function w(e){const t=(0,b.default)();return n.createElement(x,(0,r.A)({key:String(t)},e))}},53689:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=a(58168),n=(a(96540),a(15680)),o=a(11470),i=a(19365);const s={sidebar_position:3,title:"File Structure"},l=void 0,c={unversionedId:"FileStructure",id:"FileStructure",title:"File Structure",description:"File Tags",source:"@site/docs/FileStructure.md",sourceDirName:".",slug:"/FileStructure",permalink:"/vrs/docs/FileStructure",draft:!1,editUrl:"https://github.com/facebookresearch/vrs/edit/main/website/docs/FileStructure.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"File Structure"},sidebar:"tutorialSidebar",previous:{title:"Organization",permalink:"/vrs/docs/Organization"},next:{title:"File Creation",permalink:"/vrs/docs/FileCreation"}},u={},d=[{value:"File Tags",id:"file-tags",level:2},{value:"Streams",id:"streams",level:2},{value:"Stream Tags",id:"stream-tags",level:2},{value:"Records",id:"records",level:2}],m={toc:d},p="wrapper";function f(e){let{components:t,...a}=e;return(0,n.mdx)(p,(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h2",{id:"file-tags"},"File Tags"),(0,n.mdx)("p",null,"VRS files contain file tags. File tags are a set of name/value pairs, both of which are text strings. File tags may be set to any text string, but VRS provides some ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/vrs/blob/main/vrs/TagConventions.h"},"tag conventions")," to represent a few common concepts in VRS."),(0,n.mdx)("h2",{id:"streams"},"Streams"),(0,n.mdx)("p",null,"VRS files contain multiple streams, each associated with a ",(0,n.mdx)("em",{parentName:"p"},"device type"),", defined by a ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/vrs/blob/main/vrs/StreamId.h"},(0,n.mdx)("inlineCode",{parentName:"a"},"RecordableTypeId"))," enum value."),(0,n.mdx)("p",null,"A subset of ",(0,n.mdx)("inlineCode",{parentName:"p"},"RecordableTypeId")," values represent generic devices, which we called \xabRecordable Class\xbb IDs. \xabRecordable Class\xbb IDs must be paired with \xabRecordable Flavor\xbb values to identify a user-specific type of device or data contained in that stream."),(0,n.mdx)("p",null,"A device type can also represent a virtual device, such as the output of a vision algorithm, or an event, such as a keyboard, mouse, or orientation event, that can be used to exercise code."),(0,n.mdx)("h2",{id:"stream-tags"},"Stream Tags"),(0,n.mdx)("p",null,"Streams also have tags, which are also a set of name/value pairs, both of which are text strings. Stream tags may be set to any string value, but VRS provides some ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/vrs/blob/main/vrs/TagConventions.h"},"tag conventions")," for streams to represent a few common concepts."),(0,n.mdx)("h2",{id:"records"},"Records"),(0,n.mdx)("p",null,"Streams contain a time-sorted sequence of records. Records have the following metadata:"),(0,n.mdx)(o.default,{mdxType:"Tabs"},(0,n.mdx)(i.default,{value:"timestamp",label:"Timestamp",default:!0,mdxType:"TabItem"},(0,n.mdx)("p",null,"Timestamps are ",(0,n.mdx)("inlineCode",{parentName:"p"},"double")," type values that count the number of seconds from a point in time, such as EPOCH, boot time, or any other fixed point."),(0,n.mdx)("admonition",{type:"note"},(0,n.mdx)("p",{parentName:"admonition"},"All records in a VRS file must use timestamps in the same time domain. VRS sorts the records in the file and in playback in that order. If your data has device-specific timestamps you need to keep, you must save those timestamps inside the records. Images and IMU samples may have their own device-specific timestamps.")),(0,n.mdx)("p",null,"Timestamps are ",(0,n.mdx)("inlineCode",{parentName:"p"},"double")," type values, to be compatible with how time is represented in the Oculus world. Frequently, devices such as cameras and IMUs use their own internal clocks or counters, which are not synchronized. Using the ",(0,n.mdx)("inlineCode",{parentName:"p"},"double")," type can now help distinguish VRS timestamps from device specific timestamps."),(0,n.mdx)("admonition",{type:"caution"},(0,n.mdx)("p",{parentName:"admonition"},"When recording audio, be aware that audio devices are de facto clocks; they produce data at a specific sample rate. If you use a system clock for your VRS records, that clock and your audio clock will drift. This will make it difficult to accurately synchronize audio data with your other data, especially images."),(0,n.mdx)("p",{parentName:"admonition"},"It\u2019s reasonably easy to establish a correspondence between your system clock and the first audio sample when you start recording. After that, the count of the audio samples produced, divided by the sample rate, determines the actual duration of time as seen by the audio device, and that duration will not match the duration of time measured by your system clock. Ten minutes after that, your system clock and the audio clock will no longer be in sync and the gap will be visually noticeable."),(0,n.mdx)("p",{parentName:"admonition"},"Therefore, be extremely careful when trying to find which audio sample corresponds to a particular image. This is very challenging to accomplish and is seldom very accurate."))),(0,n.mdx)(i.default,{value:"streamid",label:"StreamId",mdxType:"TabItem"},(0,n.mdx)("p",null,"A ",(0,n.mdx)("inlineCode",{parentName:"p"},"StreamId")," is composed of a device type ID (",(0,n.mdx)("inlineCode",{parentName:"p"},"RecordableTypeId")," enum value) and an instance ID, which is unique in the file for that device type ID. Instance IDs are generated by VRS.")),(0,n.mdx)(i.default,{value:"recordtype",label:"Record Type",mdxType:"TabItem"},(0,n.mdx)("p",null,"Records can be ",(0,n.mdx)("strong",{parentName:"p"},"Configuration"),", ",(0,n.mdx)("strong",{parentName:"p"},"State")," or ",(0,n.mdx)("strong",{parentName:"p"},"Data")," records."),(0,n.mdx)(o.default,{mdxType:"Tabs"},(0,n.mdx)(i.default,{value:"configuration",label:"Configuration Records",default:!0,mdxType:"TabItem"},(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Configuration records")," contain the settings to configure a device. For example, the resolution and exposure settings of a camera are stored in configuration records. Configuration records can also describe how an algorithm is configured."),(0,n.mdx)("p",null,"The configuration of a device is expected to be somewhat stable (does not change at every moment). However, configuration records are not meant to store parameters that never change, such as serial numbers. For parameters that cannot change (such as serial numbers), use stream tags, which can be queried directly as soon as the VRS file is open for reading.")),(0,n.mdx)(i.default,{value:"state",label:"State Records",mdxType:"TabItem"},(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"State records")," store the state of a device. They may store the internal state of an algorithm at different instants that may be the results of previous calculations that affect behaviors. For a vision algorithm, they may be tracking where features are in space at a given instant."),(0,n.mdx)("p",null,"The state of a device might be changing at any time, in particular when data is being processed. For performance reasons, we do not record each individual state. However, recording the state of a device can be important to allow it to jump back in time without having to replay the entire session."),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Note:")," Typically, state records are empty, because the internal state of a device is not commonly tracked.")),(0,n.mdx)(i.default,{value:"data",label:"Data Records",mdxType:"TabItem"},(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Data records")," contain data that flows from a device or algorithm. For cameras, it is usually images. For an IMU device, it is usually a set of sensor samples. For a vision algorithm, it might be a pose."),(0,n.mdx)("p",null,"The implementer of the device is responsible for the data format. Data records typically include metadata, such as internal counters, timestamps, and other measurements, often along a captured image or an audio sample block."),(0,n.mdx)("p",null,"Use ",(0,n.mdx)("inlineCode",{parentName:"p"},"RecordFormat")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"DataLayout")," to make your record format interoperable.")))),(0,n.mdx)(i.default,{value:"recordformatversion",label:"Record Format Version",mdxType:"TabItem"},(0,n.mdx)("p",null,"Use a record format version number (int32), to tie the record to a record format."),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"RecordFormatStreamPlayer")," objects will be able to find the record's ",(0,n.mdx)("inlineCode",{parentName:"p"},"RecordFormat")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"DataLayout")," definitions in the stream's metadata using that version number."),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"StreamPlayer")," objects can also be used to read any records, but then, interpreting the record's data correctly will have to be entirely managed by the ",(0,n.mdx)("inlineCode",{parentName:"p"},"StreamPlayer"),' object. This later option can be useful when copying records "as is", without interpreting their data.'))))}f.isMDXComponent=!0}}]);