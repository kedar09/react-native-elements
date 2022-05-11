"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52670,9027,68251],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),p=r,b=m["".concat(d,".").concat(p)]||m[p]||c[p]||l;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},78151:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(61804),o=["components"],d={id:"tab",title:"Tab",slug:"/tab"},s=void 0,u={unversionedId:"main/tab",id:"version-4.0.0-beta.0/main/tab",title:"Tab",description:"Tabs organize content across different screens, data sets, and other interactions.",source:"@site/versioned_docs/version-4.0.0-beta.0/main/Tab.md",sourceDirName:"main",slug:"/tab",permalink:"/docs/4.0.0-beta.0/tab",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/Tab.md",tags:[],version:"4.0.0-beta.0",frontMatter:{id:"tab",title:"Tab",slug:"/tab"},sidebar:"version-4.0.0-beta.0/docs",previous:{title:"Switch",permalink:"/docs/4.0.0-beta.0/switch"},next:{title:"TabView",permalink:"/docs/4.0.0-beta.0/tabview"}},c={},m=[{value:"Components",id:"components",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Tab",id:"tab",level:3},{value:"Tab.Item",id:"tabitem",level:3},{value:"Reference",id:"reference",level:2},{value:"Tab",id:"tab-1",level:3},{value:"disableIndicator",id:"disableindicator",level:4},{value:"indicatorStyle",id:"indicatorstyle",level:4},{value:"onChange",id:"onchange",level:4},{value:"value",id:"value",level:4},{value:"variant",id:"variant",level:4},{value:"Tab.Item",id:"tabitem-1",level:3},{value:"active",id:"active",level:4},{value:"variant",id:"variant-1",level:4}],p={toc:m};function b(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Tabs organize content across different screens, data sets, and other interactions."),(0,l.kt)("h2",{id:"components"},"Components"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tabitem"},"Tab.Item"),"\nThey are indivual item of the parent Tab.\nThey are clickable and allows users to click and change Tab.\nReceives all ",(0,l.kt)("a",{parentName:"li",href:"https://reactnativeelements.com/docs/button#props"},"Button")," props.")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(i.default,{mdxType:"Usage"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"tab"},"Tab"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disableindicator"},"disableIndicator")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#indicatorstyle"},"indicatorStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onchange"},"onChange")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#value"},"value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#variant"},"variant"))),(0,l.kt)("h3",{id:"tabitem"},"Tab.Item"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#active"},"active")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#variant"},"variant"))),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"tab-1"},"Tab"),(0,l.kt)("h4",{id:"disableindicator"},"disableIndicator"),(0,l.kt)("p",null,"Disable the indicator below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"indicatorstyle"},"indicatorStyle"),(0,l.kt)("p",null,"Additional styling for tab indicator."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"onchange"},"onChange"),(0,l.kt)("p",null,"On Index Change Callback."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"Function")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"value"},"value"),(0,l.kt)("p",null,"Child position index value."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"variant"},"variant"),(0,l.kt)("p",null,"Define the background Variant."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"primary" or "default"'),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tabitem-1"},"Tab.Item"),(0,l.kt)("h4",{id:"active"},"active"),(0,l.kt)("p",null,"Allows to define if TabItem is active."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"variant-1"},"variant"),(0,l.kt)("p",null,"Define the background Variant."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"primary" or "default"'),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null))}b.isMDXComponent=!0},61804:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(93201),o=["components"],d={},s=void 0,u={unversionedId:"main/usage/Tab/Tab",id:"version-4.0.0-beta.0/main/usage/Tab/Tab",title:"Tab",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Tab/Tab.md",sourceDirName:"main/usage/Tab",slug:"/main/usage/Tab/",permalink:"/docs/4.0.0-beta.0/main/usage/Tab/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Tab/Tab.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},c={},m=[],p={toc:m};function b(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.default,{mdxType:"Snack"}))}b.isMDXComponent=!0},93201:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={},d=void 0,s={unversionedId:"main/usage/Tab/snack/index",id:"version-4.0.0-beta.0/main/usage/Tab/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Tab/snack/index.md",sourceDirName:"main/usage/Tab/snack",slug:"/main/usage/Tab/snack/",permalink:"/docs/4.0.0-beta.0/main/usage/Tab/snack/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Tab/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},u={},c=[],m={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Tab","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tab%2C%20Text%2C%20TabView%20%7D%20from%20'react-native-elements'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bindex%2C%20setIndex%5D%20%3D%20React.useState(0)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CTab%0A%20%20%20%20%20%20%20%20value%3D%7Bindex%7D%0A%20%20%20%20%20%20%20%20onChange%3D%7B(e)%20%3D%3E%20setIndex(e)%7D%0A%20%20%20%20%20%20%20%20indicatorStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20height%3A%203%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20variant%3D%22primary%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Recent%22%0A%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'timer'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20%20%20title%3D%22favorite%22%0A%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'heart'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20%20%20title%3D%22cart%22%0A%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'cart'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTab%3E%0A%0A%20%20%20%20%20%20%3CTabView%20value%3D%7Bindex%7D%20onChange%3D%7BsetIndex%7D%20animationType%3D%22spring%22%3E%0A%20%20%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'red'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20h1%3ERecent%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'blue'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20h1%3EFavorite%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'green'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20h1%3ECart%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%3C%2FTabView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}p.isMDXComponent=!0}}]);