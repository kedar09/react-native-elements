"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67259],{83700:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>p,metadata:()=>m,toc:()=>k});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),o=a(51402),i=["components"],p={id:"icon",title:"Icon"},c=void 0,m={unversionedId:"icon",id:"version-1.2.0/icon",title:"Icon",description:"Icons are visual indicators usually used to describe action or intent.",source:"@site/versioned_docs/version-1.2.0/icon.md",sourceDirName:".",slug:"/icon",permalink:"/docs/1.2.0/icon",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-1.2.0/icon.md",tags:[],version:"1.2.0",frontMatter:{id:"icon",title:"Icon"},sidebar:"version-1.2.0/docs",previous:{title:"Header",permalink:"/docs/1.2.0/header"},next:{title:"Image",permalink:"/docs/1.2.0/image"}},d={},k=[{value:"Available Icon Sets",id:"available-icon-sets",level:2},{value:"Custom Icon Fonts",id:"custom-icon-fonts",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>size</code>",id:"size",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>iconStyle</code>",id:"iconstyle",level:3},{value:"<code>Component</code>",id:"component",level:3},{value:"<code>disabled</code>",id:"disabled",level:3},{value:"<code>disabledStyle</code>",id:"disabledstyle",level:3},{value:"<code>onPress</code>",id:"onpress",level:3},{value:"<code>onLongPress</code>",id:"onlongpress",level:3},{value:"<code>underlayColor</code>",id:"underlaycolor",level:3},{value:"<code>reverse</code>",id:"reverse",level:3},{value:"<code>raised</code>",id:"raised",level:3},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>reverseColor</code>",id:"reversecolor",level:3}],s={toc:k};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Icons are visual indicators usually used to describe action or intent."),(0,l.kt)("img",{alt:"Icon",src:(0,o.Z)("img/icons.png")}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Hint: use ",(0,l.kt)("strong",{parentName:"p"},"reverse")," to make your icon look like a button")),(0,l.kt)("h2",{id:"available-icon-sets"},"Available Icon Sets"),(0,l.kt)("p",null,"The icon sets in React Native Elements are made possible through\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons"},"react-native-vector-icons"),"."),(0,l.kt)("p",null,"The current list of available icons sets are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://material.io/tools/icons"},"material")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://materialdesignicons.com/"},"material-community")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://fontawesome.io/icons/"},"font-awesome")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://octicons.github.com/"},"octicon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://ionicons.com/"},"ionicon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://zurb.com/playground/foundation-icon-fonts-3"},"foundation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://evil-icons.io/"},"evilicon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://simplelineicons.com/"},"simple-line-icon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://weloveiconfonts.com/"},"zocial")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.entypo.com/"},"entypo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://feathericons.com/"},"feather")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://beta.ant.design/components/icon/"},"antdesign"))),(0,l.kt)("h2",{id:"custom-icon-fonts"},"Custom Icon Fonts"),(0,l.kt)("p",null,"Register your own custom icons by calling\n",(0,l.kt)("inlineCode",{parentName:"p"},"registerCustomIconType('customid', customFont)"),". Create a custom font by\nfollowing the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons#custom-fonts"}," instructions for creating a custom font here"),".\nAlso, you can use ",(0,l.kt)("a",{parentName:"p",href:"http://fontello.com/"},"Fontello")," to generate custom icon\nfonts."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Icon } from 'react-native-elements'\n\n<Icon\n  name='rowing' />\n\n<Icon\n  name='g-translate'\n  color='#00aced' />\n\n<Icon\n  name='sc-telegram'\n  type='evilicon'\n  color='#517fa4'\n/>\n\n<Icon\n  reverse\n  name='ios-american-football'\n  type='ionicon'\n  color='#517fa4'\n/>\n\n<Icon\n  raised\n  name='heartbeat'\n  type='font-awesome'\n  color='#f50'\n  onPress={() => console.log('hello')} />\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#color"},(0,l.kt)("inlineCode",{parentName:"a"},"color"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Component"},(0,l.kt)("inlineCode",{parentName:"a"},"Component"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disabled"},(0,l.kt)("inlineCode",{parentName:"a"},"disabled"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disabledstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"disabledStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onpress"},(0,l.kt)("inlineCode",{parentName:"a"},"onPress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#iconstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"iconStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#name"},(0,l.kt)("inlineCode",{parentName:"a"},"name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onlongpress"},(0,l.kt)("inlineCode",{parentName:"a"},"onLongPress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#raised"},(0,l.kt)("inlineCode",{parentName:"a"},"raised"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#reverse"},(0,l.kt)("inlineCode",{parentName:"a"},"reverse"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#reversecolor"},(0,l.kt)("inlineCode",{parentName:"a"},"reverseColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#size"},(0,l.kt)("inlineCode",{parentName:"a"},"size"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#type"},(0,l.kt)("inlineCode",{parentName:"a"},"type"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#underlaycolor"},(0,l.kt)("inlineCode",{parentName:"a"},"underlayColor")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"name"},(0,l.kt)("inlineCode",{parentName:"h3"},"name")),(0,l.kt)("p",null,"name of icon (required)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"type"},(0,l.kt)("inlineCode",{parentName:"h3"},"type")),(0,l.kt)("p",null,"type of icon set. ",(0,l.kt)("a",{parentName:"p",href:"#available-icon-sets"},"Supported sets here"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"material")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"size"},(0,l.kt)("inlineCode",{parentName:"h3"},"size")),(0,l.kt)("p",null,"size of icon (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"26")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"color"},(0,l.kt)("inlineCode",{parentName:"h3"},"color")),(0,l.kt)("p",null,"color of icon (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"black")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"iconstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"iconStyle")),(0,l.kt)("p",null,"additional styling to icon (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited style")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"component"},(0,l.kt)("inlineCode",{parentName:"h3"},"Component")),(0,l.kt)("p",null,"update React Native Component (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"React Native component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"View if no onPress method is defined, TouchableHighlight if onPress method is defined")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabled"},(0,l.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,l.kt)("p",null,"Disables onPress events (optional). Only works when ",(0,l.kt)("inlineCode",{parentName:"p"},"onPress")," has a handler."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabledstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"disabledStyle")),(0,l.kt)("p",null,"Style for the button when disabled (optional). Only works when ",(0,l.kt)("inlineCode",{parentName:"p"},"onPress")," has a\nhandler."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"{{ backgroundColor: '#D1D5D8' }}"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onpress"},(0,l.kt)("inlineCode",{parentName:"h3"},"onPress")),(0,l.kt)("p",null,"onPress method for button (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onlongpress"},(0,l.kt)("inlineCode",{parentName:"h3"},"onLongPress")),(0,l.kt)("p",null,"onLongPress method for button (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"underlaycolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"underlayColor")),(0,l.kt)("p",null,"underlayColor for press event"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"icon color")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"reverse"},(0,l.kt)("inlineCode",{parentName:"h3"},"reverse")),(0,l.kt)("p",null,"reverses color scheme (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"raised"},(0,l.kt)("inlineCode",{parentName:"h3"},"raised")),(0,l.kt)("p",null,"adds box shadow to button (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"containerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,l.kt)("p",null,"add styling to container holding icon (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"reversecolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"reverseColor")),(0,l.kt)("p",null,"specify reverse icon color (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"white")))))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=c(a),s=r,u=k["".concat(p,".").concat(s)]||k[s]||d[s]||l;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"}}]);