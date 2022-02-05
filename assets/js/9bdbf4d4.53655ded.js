"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1390],{58215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(87462),r=a(67294),l=a(72389),i=a(29548),o=a(86010);const d="tabItem_LplD";function p(e){var t,a,l,p=e.lazy,u=e.block,m=e.defaultValue,c=e.values,s=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,i.lx)(g,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,i.UB)(),v=f.tabGroupChoices,y=f.setTabGroupChoices,A=(0,r.useState)(b),C=A[0],D=A[1],B=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var S=v[s];null!=S&&S!==C&&g.some((function(e){return e.value===S}))&&D(S)}var x=function(e){var t=e.currentTarget,a=B.indexOf(t),n=g[a].value;n!==C&&(w(t),D(n),null!=s&&y(s,n))},T=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=B.indexOf(e.currentTarget)+1;a=B[n]||B[0];break;case"ArrowLeft":var r=B.indexOf(e.currentTarget)-1;a=B[r]||B[B.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},k)},g.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return B.push(e)},onKeyDown:T,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function u(e){var t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},28918:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>d,contentTitle:()=>p,metadata:()=>u,toc:()=>m,default:()=>s});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(36576),o=(a(34738),a(9877),a(58215),["components"]),d={id:"header",title:"Header",slug:"/header"},p=void 0,u={unversionedId:"main/header",id:"main/header",title:"Header",description:"Headers are navigation components that display information and actions relating to the current screen.",source:"@site/docs/main/Header.mdx",sourceDirName:"main",slug:"/header",permalink:"/docs/next/header",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/Header.mdx",tags:[],version:"current",frontMatter:{id:"header",title:"Header",slug:"/header"},sidebar:"docs",previous:{title:"FAB",permalink:"/docs/next/fab"},next:{title:"Icon",permalink:"/docs/next/icon"}},m=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"Header",id:"header",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"Header",id:"header-1",children:[{value:"ViewComponent",id:"viewcomponent",children:[],level:4},{value:"backgroundColor",id:"backgroundcolor",children:[],level:4},{value:"backgroundImage",id:"backgroundimage",children:[],level:4},{value:"backgroundImageStyle",id:"backgroundimagestyle",children:[],level:4},{value:"barStyle",id:"barstyle",children:[],level:4},{value:"centerComponent",id:"centercomponent",children:[],level:4},{value:"centerContainerStyle",id:"centercontainerstyle",children:[],level:4},{value:"children",id:"children",children:[],level:4},{value:"containerStyle",id:"containerstyle",children:[],level:4},{value:"elevated",id:"elevated",children:[],level:4},{value:"leftComponent",id:"leftcomponent",children:[],level:4},{value:"leftContainerStyle",id:"leftcontainerstyle",children:[],level:4},{value:"linearGradientProps",id:"lineargradientprops",children:[],level:4},{value:"placement",id:"placement",children:[],level:4},{value:"rightComponent",id:"rightcomponent",children:[],level:4},{value:"rightContainerStyle",id:"rightcontainerstyle",children:[],level:4},{value:"statusBarProps",id:"statusbarprops",children:[],level:4}],level:3}],level:2}],c={toc:m};function s(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Headers are navigation components that display information and actions relating to the current screen."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")),(0,l.kt)("p",null,"Make sure that you have completed ",(0,l.kt)("a",{parentName:"p",href:"getting_started.md#step-3-setup-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,l.kt)("inlineCode",{parentName:"p"},"Header"),"."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(i.default,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"header"},"Header"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#viewcomponent"},"ViewComponent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#backgroundcolor"},"backgroundColor")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#backgroundimage"},"backgroundImage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#backgroundimagestyle"},"backgroundImageStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#barstyle"},"barStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#centercomponent"},"centerComponent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#centercontainerstyle"},"centerContainerStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#children"},"children")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#elevated"},"elevated")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#leftcomponent"},"leftComponent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#leftcontainerstyle"},"leftContainerStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#lineargradientprops"},"linearGradientProps")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#placement"},"placement")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rightcomponent"},"rightComponent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rightcontainerstyle"},"rightContainerStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#statusbarprops"},"statusBarProps"))),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"header-1"},"Header"),(0,l.kt)("h4",{id:"viewcomponent"},"ViewComponent"),(0,l.kt)("p",null,"Component for container."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"React Component"),(0,l.kt)("td",{parentName:"tr",align:null},"ImageBackground or View Component")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"backgroundcolor"},"backgroundColor"),(0,l.kt)("p",null,"Sets backgroundColor of the parent component."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"backgroundimage"},"backgroundImage"),(0,l.kt)("p",null,"Sets backgroundImage for parent component."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ImageSourcePropType"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"backgroundimagestyle"},"backgroundImageStyle"),(0,l.kt)("p",null,"Styling for backgroundImage in the main container."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ImageStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"barstyle"},"barStyle"),(0,l.kt)("p",null,"Sets the color of the status bar text."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"StatusBarStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"centercomponent"},"centerComponent"),(0,l.kt)("p",null,"Define your center component here."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"centercontainerstyle"},"centerContainerStyle"),(0,l.kt)("p",null,"Styling for container around the centerComponent."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"children"},"children"),(0,l.kt)("p",null,"Add children component to the header."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode and (Element or Element[])"),(0,l.kt)("td",{parentName:"tr",align:null},"[]")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,l.kt)("p",null,"Styling around the main container."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"elevated"},"elevated"),(0,l.kt)("p",null,"Elevation for header"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"leftcomponent"},"leftComponent"),(0,l.kt)("p",null,"Define your left component here."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"leftcontainerstyle"},"leftContainerStyle"),(0,l.kt)("p",null,"Styling for container around the leftComponent."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"lineargradientprops"},"linearGradientProps"),(0,l.kt)("p",null,"Displays a linear gradient. See ",(0,l.kt)("a",{parentName:"p",href:"#lineargradient-usage"},"usage"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"placement"},"placement"),(0,l.kt)("p",null,"Alignment for title."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"center" or "left" or "right"'),(0,l.kt)("td",{parentName:"tr",align:null},"center")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"rightcomponent"},"rightComponent"),(0,l.kt)("p",null,"Define your right component here."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"rightcontainerstyle"},"rightContainerStyle"),(0,l.kt)("p",null,"Styling for container around the rightComponent."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"statusbarprops"},"statusBarProps"),(0,l.kt)("p",null,"Accepts all props for StatusBar."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"StatusBarProps"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null))}s.isMDXComponent=!0},36576:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>d,contentTitle:()=>p,metadata:()=>u,toc:()=>m,default:()=>s});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(34263),o=["components"],d={},p=void 0,u={unversionedId:"main/usage/Header/Header",id:"main/usage/Header/Header",title:"Header",description:"\x3c!-- To show the guide to configure Header Component to a project.",source:"@site/docs/main/usage/Header/Header.mdx",sourceDirName:"main/usage/Header",slug:"/main/usage/Header/",permalink:"/docs/next/main/usage/Header/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/Header/Header.mdx",tags:[],version:"current",frontMatter:{}},m=[{value:"LinearGradient Usage",id:"lineargradient-usage",children:[],level:3}],c={toc:m};function s(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,l.kt)("a",{parentName:"p",href:"getting_started.md#step-3-setup-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,l.kt)("inlineCode",{parentName:"p"},"Header"),"."),(0,l.kt)("p",null,"Headers are navigation components that display information and actions relating\nto the current screen."),(0,l.kt)(i.default,{mdxType:"Snack"}),(0,l.kt)("h3",{id:"lineargradient-usage"},"LinearGradient Usage"),(0,l.kt)("p",null,"Using LinearGradient in React Native Elements is supported through the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient"},"react-native-linear-gradient"),"\npackage. If you're using expo or create-react-native-app then you can use\n",(0,l.kt)("inlineCode",{parentName:"p"},"linearGradientProps")," prop right out the box with no additional setup."),(0,l.kt)("p",null,"For react-native-cli users, make sure to follow the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project"},"installation instructions"),"\nand use it like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Header } from 'react-native-elements';\nimport LinearGradient from 'react-native-linear-gradient';\n\n...\n\n<Header\n  ViewComponent={LinearGradient} // Don't forget this!\n  linearGradientProps={{\n    colors: ['red', 'pink'],\n    start: { x: 0, y: 0.5 },\n    end: { x: 1, y: 0.5 },\n  }}\n/>\n")))}s.isMDXComponent=!0},34263:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>d,metadata:()=>p,toc:()=>u,default:()=>c});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={},d=void 0,p={unversionedId:"main/usage/Header/snack/index",id:"main/usage/Header/snack/index",title:"index",description:"",source:"@site/docs/main/usage/Header/snack/index.md",sourceDirName:"main/usage/Header/snack",slug:"/main/usage/Header/snack/",permalink:"/docs/next/main/usage/Header/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/Header/snack/index.md",tags:[],version:"current",frontMatter:{}},u=[],m={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Header","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20StyleSheet%2C%0A%20%20View%2C%0A%20%20Text%2C%0A%20%20Linking%2C%0A%20%20StyleProp%2C%0A%20%20TextStyle%2C%0A%20%20ViewStyle%2C%0A%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Header%20as%20HeaderRNE%2C%20HeaderProps%2C%20Icon%20%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20TouchableOpacity%20%7D%20from%20'react-native-gesture-handler'%3B%0Aimport%20%7B%20SafeAreaProvider%20%7D%20from%20'react-native-safe-area-context'%3B%0A%0Atype%20HeaderComponentProps%20%3D%20%7B%0A%20%20title%3A%20string%3B%0A%20%20view%3F%3A%20string%3B%0A%7D%3B%0A%0Atype%20ParamList%20%3D%20%7B%0A%20%20Detail%3A%20%7B%0A%20%20%20%20openDrawer%3A%20void%3B%0A%20%20%7D%3B%0A%7D%3B%0A%0Aconst%20Header%3A%20React.FunctionComponent%3CHeaderComponentProps%3E%20%3D%20(props)%20%3D%3E%20%7B%0A%0A%20%20const%20docsNavigate%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Linking.openURL(%60https%3A%2F%2Freactnativeelements.com%2Fdocs%2F%24%7Bprops.view%7D%60)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20playgroundNavigate%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Linking.openURL(%60https%3A%2F%2Freact-native-elements.js.org%2F%23%2F%24%7Bprops.view%7D%60)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaProvider%3E%0A%20%20%20%20%20%20%3CHeaderRNE%0A%20%20%20%20%20%20%20%20leftComponent%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20icon%3A%20'menu'%2C%0A%20%20%20%20%20%20%20%20%20%20color%3A%20'%23fff'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20rightComponent%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.headerRight%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7BdocsNavigate%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22description%22%20color%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20marginLeft%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7BplaygroundNavigate%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20type%3D%22antdesign%22%20name%3D%22rocket1%22%20color%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20centerComponent%3D%7B%7B%20text%3A%20'Header'%2C%20style%3A%20styles.heading%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FSafeAreaProvider%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20headerContainer%3A%20%7B%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20backgroundColor%3A%20'%23397af8'%2C%0A%20%20%20%20marginBottom%3A%2020%2C%0A%20%20%20%20width%3A%20'100%25'%2C%0A%20%20%20%20paddingVertical%3A%2015%2C%0A%20%20%7D%2C%0A%20%20heading%3A%20%7B%0A%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20fontSize%3A%2022%2C%0A%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%7D%2C%0A%20%20headerRight%3A%20%7B%0A%20%20%20%20display%3A%20'flex'%2C%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20marginTop%3A%205%2C%0A%20%20%7D%2C%0A%20%20subheaderText%3A%20%7B%0A%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20fontSize%3A%2016%2C%0A%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Header%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0}}]);