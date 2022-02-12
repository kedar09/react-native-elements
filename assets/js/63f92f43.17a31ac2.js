"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3673],{58215:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(67294);const n=function(e){var t=e.children,a=e.hidden,n=e.className;return l.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(87462),n=a(67294),r=a(72389),i=a(29548),o=a(86010);const p="tabItem_LplD";function u(e){var t,a,r,u=e.lazy,m=e.block,d=e.defaultValue,c=e.values,s=e.groupId,k=e.className,h=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=c?c:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(N,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==y&&!N.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),f=b.tabGroupChoices,v=b.setTabGroupChoices,A=(0,n.useState)(y),D=A[0],C=A[1],T=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var B=f[s];null!=B&&B!==D&&N.some((function(e){return e.value===B}))&&C(B)}var S=function(e){var t=e.currentTarget,a=T.indexOf(t),l=N[a].value;l!==D&&(w(t),C(l),null!=s&&v(s,l))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var l=T.indexOf(e.currentTarget)+1;a=T[l]||T[0];break;case"ArrowLeft":var n=T.indexOf(e.currentTarget)-1;a=T[n]||T[T.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},k)},N.map((function(e){var t=e.value,a=e.label,r=e.attributes;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return T.push(e)},onKeyDown:x,onFocus:S,onClick:S},r,{className:(0,o.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":D===t})}),null!=a?a:t)}))),u?(0,n.cloneElement)(h.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function m(e){var t=(0,r.Z)();return n.createElement(u,(0,l.Z)({key:String(t)},e))}},64030:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>p,contentTitle:()=>u,metadata:()=>m,toc:()=>d,default:()=>s});var l=a(87462),n=a(63366),r=(a(67294),a(3905)),i=a(92049),o=(a(34738),a(9877),a(58215),["components"]),p={id:"tile",title:"Tile"},u=void 0,m={unversionedId:"components/tile",id:"components/tile",title:"Tile",description:"Tiles like Cards, are a convenient way to display related content about a single subject.",source:"@site/docs/components/Tile.mdx",sourceDirName:"components",slug:"/components/tile",permalink:"/docs/next/components/tile",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Tile.mdx",tags:[],version:"current",frontMatter:{id:"tile",title:"Tile"},sidebar:"docs",previous:{title:"Text",permalink:"/docs/next/components/text"},next:{title:"Tooltip",permalink:"/docs/next/components/tooltip"}},d=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"Tile",id:"tile",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"Tile",id:"tile-1",children:[{value:"ImageComponent",id:"imagecomponent",children:[],level:4},{value:"activeOpacity",id:"activeopacity",children:[],level:4},{value:"caption",id:"caption",children:[],level:4},{value:"captionStyle",id:"captionstyle",children:[],level:4},{value:"containerStyle",id:"containerstyle",children:[],level:4},{value:"contentContainerStyle",id:"contentcontainerstyle",children:[],level:4},{value:"featured",id:"featured",children:[],level:4},{value:"height",id:"height",children:[],level:4},{value:"icon",id:"icon",children:[],level:4},{value:"iconContainerStyle",id:"iconcontainerstyle",children:[],level:4},{value:"imageContainerStyle",id:"imagecontainerstyle",children:[],level:4},{value:"imageProps",id:"imageprops",children:[],level:4},{value:"imageSrc",id:"imagesrc",children:[],level:4},{value:"overlayContainerStyle",id:"overlaycontainerstyle",children:[],level:4},{value:"title",id:"title",children:[],level:4},{value:"titleNumberOfLines",id:"titlenumberoflines",children:[],level:4},{value:"titleStyle",id:"titlestyle",children:[],level:4},{value:"width",id:"width",children:[],level:4}],level:3}],level:2}],c={toc:d};function s(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tiles like Cards, are a convenient way to display related content about a single subject."),(0,r.kt)("p",null,"Also receives all ",(0,r.kt)("a",{parentName:"p",href:"http://reactnative.dev/docs/touchablenativefeedback.html#props"},"TouchableNativeFeedback")," (Android) or ",(0,r.kt)("a",{parentName:"p",href:"http://reactnative.dev/docs/touchableopacity.html#props"},"TouchableOpacity")," (iOS) props."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.default,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"tile"},"Tile"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#imagecomponent"},"ImageComponent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#activeopacity"},"activeOpacity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#caption"},"caption")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#captionstyle"},"captionStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#contentcontainerstyle"},"contentContainerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#featured"},"featured")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#height"},"height")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#icon"},"icon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#iconcontainerstyle"},"iconContainerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#imagecontainerstyle"},"imageContainerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#imageprops"},"imageProps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#imagesrc"},"imageSrc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overlaycontainerstyle"},"overlayContainerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#title"},"title")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#titlenumberoflines"},"titleNumberOfLines")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#titlestyle"},"titleStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#width"},"width"))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"tile-1"},"Tile"),(0,r.kt)("h4",{id:"imagecomponent"},"ImageComponent"),(0,r.kt)("p",null,"Custom ImageComponent for Tile."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"Object.assign(Image, {")))),(0,r.kt)("p",null,"getSize: ImageNative.getSize,\ngetSizeWithHeaders: ImageNative.getSizeWithHeaders,\nprefetch: ImageNative.prefetch,\nabortPrefetch: ImageNative.abortPrefetch,\nqueryCache: ImageNative.queryCache,\nresolveAssetSource: ImageNative.resolveAssetSource,\n}) |"),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"activeopacity"},"activeOpacity"),(0,r.kt)("p",null,"Number passed to control opacity on press."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"caption"},"caption"),(0,r.kt)("p",null,"Text inside the tilt when tile is featured."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"React.ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"captionstyle"},"captionStyle"),(0,r.kt)("p",null,"Styling for the caption (optional); You only use this if ",(0,r.kt)("inlineCode",{parentName:"p"},"caption")," is a string."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,r.kt)("p",null,"Styling for the outer tile container."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"contentcontainerstyle"},"contentContainerStyle"),(0,r.kt)("p",null,"Styling for bottom container when not featured tile."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"featured"},"featured"),(0,r.kt)("p",null,"Changes the look of the tile."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"height"},"height"),(0,r.kt)("p",null,"Height for the tile."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"width ","*"," 0.8")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"icon"},"icon"),(0,r.kt)("p",null,"Icon Component Props."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"iconcontainerstyle"},"iconContainerStyle"),(0,r.kt)("p",null,"Styling for the outer icon container."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"imagecontainerstyle"},"imageContainerStyle"),(0,r.kt)("p",null,"Styling for the image."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"imageprops"},"imageProps"),(0,r.kt)("p",null,'Optional properties to pass to the image if provided e.g "resizeMode".'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ImageProps(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"imagesrc"},"imageSrc"),(0,r.kt)("p",null,"Source for the image."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string or ImageSourcePropType"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"overlaycontainerstyle"},"overlayContainerStyle"),(0,r.kt)("p",null,"Styling for the overlay container when using featured tile."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"title"},"title"),(0,r.kt)("p",null,"Text inside the tile."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"titlenumberoflines"},"titleNumberOfLines"),(0,r.kt)("p",null,"Number of lines for Title."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"titlestyle"},"titleStyle"),(0,r.kt)("p",null,"Styling for the title."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"width"},"width"),(0,r.kt)("p",null,"Width for the tile."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Dimensions.get('window').width")))),(0,r.kt)("hr",null))}s.isMDXComponent=!0},92049:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>u,toc:()=>m,default:()=>c});var l=a(87462),n=a(63366),r=(a(67294),a(3905)),i=["components"],o={},p=void 0,u={unversionedId:"components/usage/Tile",id:"components/usage/Tile",title:"Tile",description:"",source:"@site/docs/components/usage/Tile.mdx",sourceDirName:"components/usage",slug:"/components/usage/Tile",permalink:"/docs/next/components/usage/Tile",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/Tile.mdx",tags:[],version:"current",frontMatter:{}},m=[],d={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE Tile","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Text%2C%20Tile%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20TilesComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Tiles%3A%20React.FunctionComponent%3CTilesComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CView%20style%3D%7B%7B%20alignItems%3A%20'center'%20%7D%7D%3E%0A%20%20%20%20%20%20%3CScrollView%20style%3D%7B%7B%20paddingVertical%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EFeatured%20Tile%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CTile%0A%20%20%20%20%20%20%20%20%20%20imageSrc%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fwww.mediastorehouse.com%2Fp%2F191%2Fsunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22When%20I%20admire%20the%20wonders%20of%20a%20sunset%20or%20the%20beauty%20of%20the%20moon%2C%20my%20soul%20expands%20in%20the%20worship%20of%20the%20creator.%22%0A%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20featured%0A%20%20%20%20%20%20%20%20%20%20caption%3D%22Mahatma%20Gandhi%22%0A%20%20%20%20%20%20%20%20%20%20activeOpacity%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20width%3D%7B310%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EFeatured%20Tile%20with%20Icon%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20paddingTop%3A%2020%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTile%0A%20%20%20%20%20%20%20%20%20%20%20%20imageSrc%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fawildgeographer.files.wordpress.com%2F2015%2F02%2Fjohn_muir_glacier.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'heart'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2060%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'red'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20featured%0A%20%20%20%20%20%20%20%20%20%20%20%20activeOpacity%3D%7B0.8%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'Tile%20pressed'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B310%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20paddingTop%3A%2020%2C%20paddingBottom%3A%20100%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTile%0A%20%20%20%20%20%20%20%20%20%20%20%20imageSrc%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd6%2FHalf_Dome_from_Glacier_Point%252C_Yosemite_NP_-_Diliff.jpg%2F320px-Half_Dome_from_Glacier_Point%252C_Yosemite_NP_-_Diliff.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Half%20Dome%2C%20Yosemite%22%0A%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2020%2C%20textAlign%3A%20'center'%2C%20paddingBottom%3A%205%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20activeOpacity%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B310%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20contentContainerStyle%3D%7B%7B%20height%3A%2070%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20paddingBottom%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-between'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'green'%20%7D%7D%3EVisit%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%20%7D%7D%3EFind%20out%20More%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTile%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%0A%7D)%3B%0A%0Aexport%20default%20Tiles%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0}}]);