"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2333],{58215:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(67294);const n=function(e){var t=e.children,a=e.hidden,n=e.className;return l.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(87462),n=a(67294),r=a(72389),i=a(29548),o=a(86010);const u="tabItem_LplD";function s(e){var t,a,r,s=e.lazy,d=e.block,p=e.defaultValue,m=e.values,h=e.groupId,c=e.className,k=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,i.lx)(y,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=k[0])?void 0:r.props.value;if(null!==v&&!y.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),f=b.tabGroupChoices,g=b.setTabGroupChoices,A=(0,n.useState)(v),x=A[0],T=A[1],D=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=f[h];null!=C&&C!==x&&y.some((function(e){return e.value===C}))&&T(C)}var B=function(e){var t=e.currentTarget,a=D.indexOf(t),l=y[a].value;l!==x&&(w(t),T(l),null!=h&&g(h,l))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var l=D.indexOf(e.currentTarget)+1;a=D[l]||D[0];break;case"ArrowLeft":var n=D.indexOf(e.currentTarget)-1;a=D[n]||D[D.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},c)},y.map((function(e){var t=e.value,a=e.label,r=e.attributes;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return D.push(e)},onKeyDown:S,onFocus:B,onClick:B},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),s?(0,n.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,r.Z)();return n.createElement(s,(0,l.Z)({key:String(t)},e))}},57111:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>u,contentTitle:()=>s,metadata:()=>d,toc:()=>p,default:()=>h});var l=a(87462),n=a(63366),r=(a(67294),a(3905)),i=a(1814),o=(a(34738),a(9877),a(58215),["components"]),u={id:"text",title:"Text"},s=void 0,d={unversionedId:"components/text",id:"components/text",title:"Text",description:"Text displays words and characters of various sizes.",source:"@site/docs/components/Text.mdx",sourceDirName:"components",slug:"/components/text",permalink:"/docs/next/components/text",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Text.mdx",tags:[],version:"current",frontMatter:{id:"text",title:"Text"},sidebar:"docs",previous:{title:"TabView",permalink:"/docs/next/components/tabview"},next:{title:"Tile",permalink:"/docs/next/components/tile"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"Text",id:"text",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"Text",id:"text-1",children:[{value:"h1",id:"h1",children:[],level:4},{value:"h1Style",id:"h1style",children:[],level:4},{value:"h2",id:"h2",children:[],level:4},{value:"h2Style",id:"h2style",children:[],level:4},{value:"h3",id:"h3",children:[],level:4},{value:"h3Style",id:"h3style",children:[],level:4},{value:"h4",id:"h4",children:[],level:4},{value:"h4Style",id:"h4style",children:[],level:4},{value:"style",id:"style",children:[],level:4}],level:3}],level:2}],m={toc:p};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Text displays words and characters of various sizes."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.default,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"text"},"Text"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#h1"},"h1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#h1style"},"h1Style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#h2"},"h2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#h2style"},"h2Style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#h3"},"h3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#h3style"},"h3Style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#h4"},"h4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#h4style"},"h4Style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#style"},"style"))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"text-1"},"Text"),(0,r.kt)("h4",{id:"h1"},"h1"),(0,r.kt)("p",null,"Text with Font size 40."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"h1style"},"h1Style"),(0,r.kt)("p",null,"Styling when h1 is set."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"h2"},"h2"),(0,r.kt)("p",null,"Text with Font size 34."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"h2style"},"h2Style"),(0,r.kt)("p",null,"Styling when h2 is set."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"h3"},"h3"),(0,r.kt)("p",null,"Text with Font size 28."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"h3style"},"h3Style"),(0,r.kt)("p",null,"Styling when h3 is set."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"h4"},"h4"),(0,r.kt)("p",null,"Text with Font size 22."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"h4style"},"h4Style"),(0,r.kt)("p",null,"Styling when h3 is set."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"style"},"style"),(0,r.kt)("p",null,"Add additional styling for Text."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")))),(0,r.kt)("hr",null))}h.isMDXComponent=!0},1814:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>u,metadata:()=>s,toc:()=>d,default:()=>m});var l=a(87462),n=a(63366),r=(a(67294),a(3905)),i=["components"],o={},u=void 0,s={unversionedId:"components/usage/Text",id:"components/usage/Text",title:"Text",description:"",source:"@site/docs/components/usage/Text.mdx",sourceDirName:"components/usage",slug:"/components/usage/Text",permalink:"/docs/next/components/usage/Text",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/Text.mdx",tags:[],version:"current",frontMatter:{}},d=[],p={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE Linear Text","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Text%2C%20useTheme%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20TextComponentProps%20%3D%20%7B%7D%3B%0Aconst%20TextComponent%3A%20React.FunctionComponent%3CTextComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%7B%20theme%20%7D%20%3D%20useTheme()%3B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%3CText%0A%20%20%20%20%20%20%20%20style%3D%7Bstyles.text%7D%0A%20%20%20%20%20%20%20%20h1%0A%20%20%20%20%20%20%20%20h1Style%3D%7B%7B%20color%3A%20theme%3F.colors%3F.secondary%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Heading%201%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%0A%20%20%20%20%20%20%20%20style%3D%7Bstyles.text%7D%0A%20%20%20%20%20%20%20%20h2%0A%20%20%20%20%20%20%20%20h2Style%3D%7B%7B%20color%3A%20theme%3F.colors%3F.success%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Heading%202%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%0A%20%20%20%20%20%20%20%20style%3D%7Bstyles.text%7D%0A%20%20%20%20%20%20%20%20h3%0A%20%20%20%20%20%20%20%20h3Style%3D%7B%7B%20color%3A%20theme%3F.colors%3F.warning%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Heading%203%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%0A%20%20%20%20%20%20%20%20style%3D%7Bstyles.text%7D%0A%20%20%20%20%20%20%20%20h4%0A%20%20%20%20%20%20%20%20h4Style%3D%7B%7B%20color%3A%20theme%3F.colors%3F.primary%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Heading%204%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Aview%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0Atext%3A%20%7B%0A%20%20textAlign%3A%20'center'%2C%0A%20%20padding%3A%205%2C%0A%7D%2C%0Amore%3A%20%7B%0A%20%20marginVertical%3A%2020%2C%0A%7D%2C%0Abutton%3A%20%7B%0A%20%20width%3A%20120%2C%0A%20%20marginLeft%3A%20'auto'%2C%0A%20%20marginRight%3A%20'auto'%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20TextComponent%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0}}]);