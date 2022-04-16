"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[488],{58215:function(e,a,t){t.r(a);var n=t(67294);a.default=function(e){var a=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:i},a)}},55064:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var n=t(67294),i=t(79443);var o=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=t(86010),s="tabItem_vU9c",l="tabItemActive_cw6a";var d=function(e){var a,t=e.lazy,i=e.block,d=e.defaultValue,m=e.values,c=e.groupId,u=e.className,p=n.Children.toArray(e.children),f=null!=m?m:p.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=d?d:null==(a=p.find((function(e){return e.props.default})))?void 0:a.props.value,h=o(),b=h.tabGroupChoices,g=h.setTabGroupChoices,x=(0,n.useState)(v),y=x[0],w=x[1],N=[];if(null!=c){var k=b[c];null!=k&&k!==y&&f.some((function(e){return e.value===k}))&&w(k)}var C=function(e){var a=e.currentTarget,t=N.indexOf(a),n=f[t].value;w(n),null!=c&&(g(c,n),setTimeout((function(){var e,t,n,i,o,r,s,d;(e=a.getBoundingClientRect(),t=e.top,n=e.left,i=e.bottom,o=e.right,r=window,s=r.innerHeight,d=r.innerWidth,t>=0&&o<=d&&i<=s&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(l),setTimeout((function(){return a.classList.remove(l)}),2e3))}),150))},S=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.target)+1;t=N[n]||N[0];break;case"ArrowLeft":var i=N.indexOf(e.target)-1;t=N[i]||N[N.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":i},u)},f.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,className:(0,r.default)("tabs__item",s,{"tabs__item--active":y===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:S,onFocus:C,onClick:C},null!=t?t:a)}))),t?(0,n.cloneElement)(p.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},p.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==y})}))))}},85418:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),r=t(55064),s=t(58215),l=["components"],d={sidebar_position:1,title:"Overview"},m=void 0,c={unversionedId:"Overview",id:"Overview",isDocsHomePage:!1,title:"Overview",description:"VRS is a file format optimized to record and playback streams of sensor data, such as images, audio samples, and other discrete sensors (IMU, temperature, etc.), that are stored in per-device streams of time-stamped records.",source:"@site/docs/Overview.md",sourceDirName:".",slug:"/Overview",permalink:"/vrs/docs/Overview",editUrl:"https://github.com/facebookresearch/vrs/edit/main/website/docs/Overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",next:{title:"Organization",permalink:"/vrs/docs/Organization"}},u=[{value:"Appropriate Use Cases",id:"appropriate-use-cases",children:[]},{value:"Data Types and Data Conventions",id:"data-types-and-data-conventions",children:[]},{value:"Main features",id:"main-features",children:[]}],p={toc:u};function f(e){var a=e.components,t=(0,i.Z)(e,l);return(0,o.mdx)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"VRS is a ",(0,o.mdx)("strong",{parentName:"p"},"file format")," optimized to record and playback streams of sensor data, such as images, audio samples, and other discrete sensors (IMU, temperature, etc.), that are stored in per-device streams of time-stamped records."),(0,o.mdx)("p",null,"VRS was first created to record images and sensor data from early prototypes of the Quest device, to develop the device\u2019s positional tracking system, now known as ",(0,o.mdx)("a",{parentName:"p",href:"https://ai.facebook.com/blog/powered-by-ai-oculus-insight/"},"Insight"),", and Quest's hand tracking software. VRS is also the file format used by the ",(0,o.mdx)("a",{parentName:"p",href:"https://about.facebook.com/realitylabs/projectaria/"},"Aria glasses"),"."),(0,o.mdx)("h2",{id:"appropriate-use-cases"},"Appropriate Use Cases"),(0,o.mdx)("p",null,"VRS is designed to record similar looking bundles of data produced repeatedly over a period of time, in time-stamped records."),(0,o.mdx)(r.default,{mdxType:"Tabs"},(0,o.mdx)(s.default,{value:"good_cases",label:"Valid Use Cases",default:!0,mdxType:"TabItem"},"VRS is well suited to record and playback:",(0,o.mdx)("li",null,"Data produced by the cameras and sensors of a Quest device, including IMUs."),(0,o.mdx)("li",null,"Data produced by the cameras and sensors of an Aria device, including positional tracking cameras, eye tracking cameras, barometer sensors, GPS and BT beacons, multi-channel audio."),(0,o.mdx)("li",null,"Data produced in burst of activity, such as keyboard or mouse input data."),(0,o.mdx)("li",null,"TCP/IP or USB packets.")),(0,o.mdx)(s.default,{value:"bad_cases",label:"Invalid Use Cases",mdxType:"TabItem"},"VRS is not a good choice to record anything without temporal information or data format regularity, such as:",(0,o.mdx)("li",null,"A text document."),(0,o.mdx)("li",null,"A web page."),(0,o.mdx)("li",null,"A point cloud."),(0,o.mdx)("li",null,"A 3D model."),(0,o.mdx)("li",null,"A single image with annotations."))),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"While VRS is very effective at streaming very large amounts of data to disk, potentially to and from cloud storage, with real-time lossless compression, creating files potentially very large (typical VRS files range from 5 to 80 GB, but 1.5 TB VRS files exist), editing VRS files is not nearly as convenient, as the entire container typically needs to be rewritten."))),(0,o.mdx)("h2",{id:"data-types-and-data-conventions"},"Data Types and Data Conventions"),(0,o.mdx)("p",null,"VRS provides standardized methods to store images, audio, and discrete sensors data in compact and format evolution resilient records, so you can save data without having to worry too much about evolving requirements. But while VRS standardizes how to save common data types, VRS does not prescribe how to address specific use cases. Data format conventions are desirable, to enable teams working on identical or similar use cases to exchange data. However, such data format conventions are out of the scope of VRS."),(0,o.mdx)("h2",{id:"main-features"},"Main features"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"VRS files contain multiple streams of time-sorted records generated by a set of ",(0,o.mdx)("em",{parentName:"li"},"devices"),", typically one set of ",(0,o.mdx)("em",{parentName:"li"},"devices")," per stream."),(0,o.mdx)("li",{parentName:"ul"},"A file and its streams contain a set of ",(0,o.mdx)("em",{parentName:"li"},"tags"),", which are string name/value pairs that describe them."),(0,o.mdx)("li",{parentName:"ul"},"Streams may contain ",(0,o.mdx)("inlineCode",{parentName:"li"},"Configuration"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"State")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"Data")," records, each with a timestamp in a common time domain for the whole file. Typically, streams contain one ",(0,o.mdx)("inlineCode",{parentName:"li"},"Configuration")," record and one ",(0,o.mdx)("inlineCode",{parentName:"li"},"State")," record, followed by one to millions of ",(0,o.mdx)("inlineCode",{parentName:"li"},"Data")," records."),(0,o.mdx)("li",{parentName:"ul"},"Records are structured as a succession of typed content blocks. Typically, content blocks are metadata, image, audio, and custom content blocks."),(0,o.mdx)("li",{parentName:"ul"},"Metadata content blocks contain raw sensor data described once per stream, making the file format very efficient. The marginal cost of adding 1 byte of data to each metadata content block in a stream is 1 byte per record (or less when lossless compression happens)."),(0,o.mdx)("li",{parentName:"ul"},"Records can be losslessly compressed using lz4 or zstd, which are fast enough to do lossless compression during recording."),(0,o.mdx)("li",{parentName:"ul"},"Multiple threads can create records concurrently for the same file."),(0,o.mdx)("li",{parentName:"ul"},"VRS supports huge file sizes (tested with multi-terabyte use cases)."),(0,o.mdx)("li",{parentName:"ul"},"VRS supports chunked files: auto-chunking on creation and automated chunk detection for playback."),(0,o.mdx)("li",{parentName:"ul"},"Playback is optimized for timestamp ordering, which is key for network streaming."),(0,o.mdx)("li",{parentName:"ul"},"Random-access playback is fully supported in memory files and stream indexes."),(0,o.mdx)("li",{parentName:"ul"},"Customizable ",(0,o.mdx)("inlineCode",{parentName:"li"},"FileHandler")," support to implement streaming from cloud storage is not currently provided.")))}f.isMDXComponent=!0}}]);