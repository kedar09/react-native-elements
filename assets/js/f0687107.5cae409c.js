"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},k=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),m=d(n),h=r,N=m["".concat(p,".").concat(h)]||m[h]||c[h]||l;return n?a.createElement(N,o(o({ref:t},k),{},{components:n})):a.createElement(N,o({ref:t},k))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},461:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>d,toc:()=>k,default:()=>m});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"tooltip",title:"Tooltip"},p=void 0,d={unversionedId:"tooltip",id:"version-2.3.2/tooltip",title:"Tooltip",description:"Tooltips display informative text when users tap on an element.",source:"@site/versioned_docs/version-2.3.2/tooltip.md",sourceDirName:".",slug:"/tooltip",permalink:"/docs/2.3.2/tooltip",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-2.3.2/tooltip.md",tags:[],version:"2.3.2",frontMatter:{id:"tooltip",title:"Tooltip"},sidebar:"version-2.3.2/docs",previous:{title:"Tile",permalink:"/docs/2.3.2/tile"},next:{title:"Contributing",permalink:"/docs/2.3.2/contributing"}},k=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[],level:2},{value:"Reference",id:"reference",children:[{value:"<code>backgroundColor</code>",id:"backgroundcolor",children:[],level:3},{value:"<code>containerStyle</code>",id:"containerstyle",children:[],level:3},{value:"<code>height</code>",id:"height",children:[],level:3},{value:"<code>highlightColor</code>",id:"highlightcolor",children:[],level:3},{value:"<code>onClose</code>",id:"onclose",children:[],level:3},{value:"<code>onOpen</code>",id:"onopen",children:[],level:3},{value:"<code>overlayColor</code>",id:"overlaycolor",children:[],level:3},{value:"<code>pointerColor</code>",id:"pointercolor",children:[],level:3},{value:"<code>popover</code>",id:"popover",children:[],level:3},{value:"<code>toggleOnPress</code>",id:"toggleonpress",children:[],level:3},{value:"<code>width</code>",id:"width",children:[],level:3},{value:"<code>withOverlay</code>",id:"withoverlay",children:[],level:3},{value:"<code>withPointer</code>",id:"withpointer",children:[],level:3},{value:"<code>toggleAction</code>",id:"toggleaction",children:[],level:3},{value:"<code>skipAndroidStatusBar</code>",id:"skipandroidstatusbar",children:[],level:3},{value:"<code>ModalComponent</code>",id:"modalcomponent",children:[],level:3}],level:2},{value:"Interaction methods",id:"interaction-methods",children:[{value:"<code>toggleTooltip</code> example",id:"toggletooltip-example",children:[],level:4},{value:"<code>closeOnlyOnBackdropPress</code>",id:"closeonlyonbackdroppress",children:[],level:3}],level:2}],c={toc:k};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Tooltips display informative text when users tap on an element."),(0,l.kt)("img",{alt:"tooltip example gif",width:"290",src:"/img/tooltipExample.gif"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Tooltip, Text } from 'react-native-elements';\n\n...\n\n<Tooltip popover={<Text>Info here</Text>}>\n  <Text>Press me</Text>\n</Tooltip>\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Web-platform specific note:"),(0,l.kt)("p",{parentName:"blockquote"},"You ",(0,l.kt)("strong",{parentName:"p"},"must")," pass a valid React Native ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/modal"},(0,l.kt)("inlineCode",{parentName:"a"},"Modal"))," component implementation\ninto ",(0,l.kt)("a",{parentName:"p",href:"#modalcomponent"},(0,l.kt)("inlineCode",{parentName:"a"},"ModalComponent"))," prop because ",(0,l.kt)("inlineCode",{parentName:"p"},"Modal")," component is not implemented yet in ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native-web"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport Modal from 'modal-react-native-web';\n\n...\n\n<Tooltip ModalComponent={Modal} ... />\n...\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#backgroundcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"backgroundColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#height"},(0,l.kt)("inlineCode",{parentName:"a"},"height"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#highlightcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"highlightColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onclose"},(0,l.kt)("inlineCode",{parentName:"a"},"onClose"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onopen"},(0,l.kt)("inlineCode",{parentName:"a"},"onOpen"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#overlaycolor"},(0,l.kt)("inlineCode",{parentName:"a"},"overlayColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pointercolor"},(0,l.kt)("inlineCode",{parentName:"a"},"pointerColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#popover"},(0,l.kt)("inlineCode",{parentName:"a"},"popover"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toggleonpress"},(0,l.kt)("inlineCode",{parentName:"a"},"toggleOnPress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#width"},(0,l.kt)("inlineCode",{parentName:"a"},"width"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#withoverlay"},(0,l.kt)("inlineCode",{parentName:"a"},"withOverlay"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#withpointer"},(0,l.kt)("inlineCode",{parentName:"a"},"withPointer"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toggleaction"},(0,l.kt)("inlineCode",{parentName:"a"},"toggleAction"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#skipandroidstatusbar"},(0,l.kt)("inlineCode",{parentName:"a"},"skipAndroidStatusBar"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#modalcomponent"},(0,l.kt)("inlineCode",{parentName:"a"},"ModalComponent"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#closeonlyonbackdroppress"},(0,l.kt)("inlineCode",{parentName:"a"},"closeOnlyOnBackdropPress")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"backgroundcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"backgroundColor")),(0,l.kt)("p",null,"sets backgroundColor of the tooltip and pointer."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"#617080")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"containerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,l.kt)("p",null,"Passes style object to tooltip container"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"height"},(0,l.kt)("inlineCode",{parentName:"h3"},"height")),(0,l.kt)("p",null,"Tooltip container height. Necessary in order to render the container in the\ncorrect place. Pass height according to the size of the content rendered inside\nthe container."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"40")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"highlightcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"highlightColor")),(0,l.kt)("p",null,"Color to highlight the item the tooltip is surrounding."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"transparent")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onclose"},(0,l.kt)("inlineCode",{parentName:"h3"},"onClose")),(0,l.kt)("p",null,"function which gets called on closing the tooltip."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"() => {}")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onopen"},(0,l.kt)("inlineCode",{parentName:"h3"},"onOpen")),(0,l.kt)("p",null,"function which gets called on opening the tooltip."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"() => {}")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"overlaycolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"overlayColor")),(0,l.kt)("p",null,"Color of overlay shadow when tooltip is open."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"'rgba(250, 250, 250, 0.70)'")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"pointercolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"pointerColor")),(0,l.kt)("p",null,"Color of tooltip pointer, it defaults to the\n",(0,l.kt)("a",{parentName:"p",href:"#backgroundcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"backgroundColor"))," if none is passed ."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"#backgroundcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"backgroundColor")))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"popover"},(0,l.kt)("inlineCode",{parentName:"h3"},"popover")),(0,l.kt)("p",null,"Component to be rendered as the display container."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"React.Element"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"toggleonpress"},(0,l.kt)("inlineCode",{parentName:"h3"},"toggleOnPress")),(0,l.kt)("p",null,"Flag to determine to toggle or not the tooltip on press."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"width"},(0,l.kt)("inlineCode",{parentName:"h3"},"width")),(0,l.kt)("p",null,"Tooltip container width. Necessary in order to render the container in the\ncorrect place. Pass height according to the size of the content rendered inside\nthe container."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"150")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"withoverlay"},(0,l.kt)("inlineCode",{parentName:"h3"},"withOverlay")),(0,l.kt)("p",null,"Flag to determine whether or not display overlay shadow when tooltip is open."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"withpointer"},(0,l.kt)("inlineCode",{parentName:"h3"},"withPointer")),(0,l.kt)("p",null,"Flag to determine whether or not to display the pointer."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"toggleaction"},(0,l.kt)("inlineCode",{parentName:"h3"},"toggleAction")),(0,l.kt)("p",null,"Define type of action that should trigger tooltip.\nAvailable options ",(0,l.kt)("em",{parentName:"p"},"onPress"),", ",(0,l.kt)("em",{parentName:"p"},"onLongPress")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"onPress")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"skipandroidstatusbar"},(0,l.kt)("inlineCode",{parentName:"h3"},"skipAndroidStatusBar")),(0,l.kt)("p",null,"Force skip StatusBar height when calculating element position. Pass ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if Tooltip used inside react-native Modal component."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"modalcomponent"},(0,l.kt)("inlineCode",{parentName:"h3"},"ModalComponent")),(0,l.kt)("p",null,"override React Native ",(0,l.kt)("inlineCode",{parentName:"p"},"Modal")," component (usable for web-platform)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"React Native Component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Modal")))),(0,l.kt)("h2",{id:"interaction-methods"},"Interaction methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"method"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"toggleTooltip"),(0,l.kt)("td",{parentName:"tr",align:null},"Toggles tooltip manually. (",(0,l.kt)("a",{parentName:"td",href:"#toggle-tooltip-example"},"example"),")")))),(0,l.kt)("h4",{id:"toggletooltip-example"},(0,l.kt)("inlineCode",{parentName:"h4"},"toggleTooltip")," example"),(0,l.kt)("p",null,"Store a reference to the Tooltip in your component by using the ref prop\nprovided by React (",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"see docs"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const tooltipRef = useRef(null);\n\n...\n\n<Tooltip\n  ref={tooltipRef}\n  ...\n/>\n")),(0,l.kt)("p",null,"Then you can manually trigger tooltip from anywhere for example when screen loads:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"useEffect(() => {\n  tooltipRef.current.toggleTooltip();\n}, []);\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"closeonlyonbackdroppress"},(0,l.kt)("inlineCode",{parentName:"h3"},"closeOnlyOnBackdropPress")),(0,l.kt)("p",null,"Flag to determine whether to disable auto hiding of tooltip when touching/scrolling anywhere inside the active tooltip popover container."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", Tooltip closes only when overlay backdrop is pressed (or) highlighted tooltip button is pressed.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);