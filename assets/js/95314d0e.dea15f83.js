"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8083],{91463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=n(51402),i=["components"],s={id:"bottomsheet",title:"Bottom Sheet"},p=void 0,c={unversionedId:"bottomsheet",id:"version-2.3.2/bottomsheet",title:"Bottom Sheet",description:"Overlay Modal that displays content from the bottom of the screen.",source:"@site/versioned_docs/version-2.3.2/bottomsheet.md",sourceDirName:".",slug:"/bottomsheet",permalink:"/docs/2.3.2/bottomsheet",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-2.3.2/bottomsheet.md",tags:[],version:"2.3.2",frontMatter:{id:"bottomsheet",title:"Bottom Sheet"},sidebar:"version-2.3.2/docs",previous:{title:"Badge",permalink:"/docs/2.3.2/badge"},next:{title:"Button",permalink:"/docs/2.3.2/button"}},m={},d=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>isVisible</code>",id:"isvisible",level:3},{value:"<code>modalProps</code>",id:"modalprops",level:3}],u={toc:d};function b(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Overlay Modal that displays content from the bottom of the screen."),(0,a.kt)("img",{src:(0,l.Z)("img/bottomsheet.gif"),alt:"Bottom Sheet Component"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const [isVisible, setIsVisible] = useState(false);\nconst list = [\n  { title: 'List Item 1' },\n  { title: 'List Item 2' },\n  {\n    title: 'Cancel',\n    containerStyle: { backgroundColor: 'red' },\n    titleStyle: { color: 'white' },\n    onPress: () => setIsVisible(false),\n  },\n];\n\n<BottomSheet isVisible={isVisible}>\n  {list.map((l, i) => (\n    <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>\n      <ListItem.Content>\n        <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>\n      </ListItem.Content>\n    </ListItem>\n  ))}\n</BottomSheet>;\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#isvisible"},(0,a.kt)("inlineCode",{parentName:"a"},"isVisible"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#modalprops"},(0,a.kt)("inlineCode",{parentName:"a"},"modalProps")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("h3",{id:"isvisible"},(0,a.kt)("inlineCode",{parentName:"h3"},"isVisible")),(0,a.kt)("p",null,"Is the modal component shown"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"modalprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"modalProps")),(0,a.kt)("p",null,"Additional props handed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Modal")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/modal.html#props"},"Modal Props")),(0,a.kt)("td",{parentName:"tr",align:"center"},"{}")))))}b.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,b=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);