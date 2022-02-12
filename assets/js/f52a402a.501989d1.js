"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8955],{58215:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);const l=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(87462),l=a(67294),r=a(72389),o=a(29548),i=a(86010);const p="tabItem_LplD";function u(e){var t,a,r,u=e.lazy,s=e.block,d=e.defaultValue,m=e.values,c=e.groupId,k=e.className,A=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:A.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(t=null!=d?d:null==(a=A.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=A[0])?void 0:r.props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),y=g.tabGroupChoices,b=g.setTabGroupChoices,D=(0,l.useState)(N),C=D[0],f=D[1],B=[],F=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var w=y[c];null!=w&&w!==C&&h.some((function(e){return e.value===w}))&&f(w)}var T=function(e){var t=e.currentTarget,a=B.indexOf(t),n=h[a].value;n!==C&&(F(t),f(n),null!=c&&b(c,n))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=B.indexOf(e.currentTarget)+1;a=B[n]||B[0];break;case"ArrowLeft":var l=B.indexOf(e.currentTarget)-1;a=B[l]||B[B.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},k)},h.map((function(e){var t=e.value,a=e.label,r=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return B.push(e)},onKeyDown:x,onFocus:T,onClick:T},r,{className:(0,i.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),u?(0,l.cloneElement)(A.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},A.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function s(e){var t=(0,r.Z)();return l.createElement(u,(0,n.Z)({key:String(t)},e))}},67091:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>d,metadata:()=>m,toc:()=>c,default:()=>A});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),o=a(33737),i=(a(34738),a(9877)),p=a(58215),u=["components"],s={id:"avatar",title:"Avatar"},d=void 0,m={unversionedId:"components/avatar",id:"components/avatar",title:"Avatar",description:"Avatars are found all over ui design from lists to profile screens.",source:"@site/docs/components/Avatar.mdx",sourceDirName:"components",slug:"/components/avatar",permalink:"/docs/next/components/avatar",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Avatar.mdx",tags:[],version:"current",frontMatter:{id:"avatar",title:"Avatar"},sidebar:"docs",previous:{title:"AirbnbRating",permalink:"/docs/next/components/airbnbrating"},next:{title:"Badge",permalink:"/docs/next/components/badge"}},c=[{value:"Components",id:"components",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Variants",id:"variants",children:[],level:3},{value:"Avatar with title and icon",id:"avatar-with-title-and-icon",children:[],level:3},{value:"Avatar with icon",id:"avatar-with-icon",children:[],level:3},{value:"Avatar with image",id:"avatar-with-image",children:[],level:3}],level:2},{value:"Usage",id:"usage-1",children:[],level:2},{value:"Props",id:"props",children:[{value:"Avatar",id:"avatar",children:[],level:3},{value:"Avatar.Accessory",id:"avataraccessory",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"Avatar",id:"avatar-1",children:[{value:"Component",id:"component",children:[],level:4},{value:"ImageComponent",id:"imagecomponent",children:[],level:4},{value:"activeOpacity",id:"activeopacity",children:[],level:4},{value:"avatarStyle",id:"avatarstyle",children:[],level:4},{value:"containerStyle",id:"containerstyle",children:[],level:4},{value:"icon",id:"icon",children:[],level:4},{value:"iconStyle",id:"iconstyle",children:[],level:4},{value:"imageProps",id:"imageprops",children:[],level:4},{value:"onLongPress",id:"onlongpress",children:[],level:4},{value:"onPress",id:"onpress",children:[],level:4},{value:"overlayContainerStyle",id:"overlaycontainerstyle",children:[],level:4},{value:"placeholderStyle",id:"placeholderstyle",children:[],level:4},{value:"pressableProps",id:"pressableprops",children:[],level:4},{value:"renderPlaceholderContent",id:"renderplaceholdercontent",children:[],level:4},{value:"rounded",id:"rounded",children:[],level:4},{value:"size",id:"size",children:[],level:4},{value:"source",id:"source",children:[],level:4},{value:"title",id:"title",children:[],level:4},{value:"titleStyle",id:"titlestyle",children:[],level:4}],level:3},{value:"Avatar.Accessory",id:"avataraccessory-1",children:[{value:"pressableProps",id:"pressableprops-1",children:[],level:4},{value:"style",id:"style",children:[],level:4},{value:"underlayColor",id:"underlaycolor",children:[],level:4}],level:3}],level:2}],k={toc:c};function A(e){var t=e.components,a=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Avatars are found all over ui design from lists to profile screens."),(0,r.kt)("p",null,"They are commonly used to represent a user and can contain photos, icons, or even text."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Avatar\n  size="medium"\n  rounded\n  containerStyle={{ backgroundColor: "#6733b9" }}\n  title="R"\n/>\n')),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#avataraccessory"},"Avatar.Accessory"),"\nThis is used for adding an accessory to the Avatar.\nReceives either all ",(0,r.kt)("a",{parentName:"li",href:"icon#props"},"Icon")," or ",(0,r.kt)("a",{parentName:"li",href:"image#props"},"Image")," props.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"variants"},"Variants"),(0,r.kt)(i.Z,{defaultValue:"Basic",values:[{label:"Basic",value:"Basic"},{label:"Title",value:"Title"},{label:"Icon",value:"Icon"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"Basic",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Avatar\n  size="medium"\n  rounded\n  source={{ uri: "https://randomuser.me/api/portraits/" }}\n/>\n'))),(0,r.kt)(p.Z,{value:"Title",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Avatar\n  size="medium"\n  rounded\n  source={{ uri: "https://randomuser.me/api/portraits/" }}\n  title="R"\n/>\n'))),(0,r.kt)(p.Z,{value:"Icon",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Avatar\n  size="medium"\n  rounded\n  source={{ uri: "https://randomuser.me/api/portraits/" }}\n  icon={{ name: "home" }}\n/>\n')))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"avatar-with-title-and-icon"},"Avatar with title and icon"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Avatar\n  size="medium"\n  rounded\n  source={{ uri: "https://randomuser.me/api/portraits/" }}\n  title="R"\n/>\n')),(0,r.kt)("h3",{id:"avatar-with-icon"},"Avatar with icon"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Avatar\n  size="medium"\n  rounded\n  source={{ uri: "https://randomuser.me/api/portraits/" }}\n  icon={{ name: "home" }}\n/>\n')),(0,r.kt)("h3",{id:"avatar-with-image"},"Avatar with image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Avatar\n  size="medium"\n  rounded\n  source={{ uri: "https://randomuser.me/api/portraits/" }}\n/>\n')),(0,r.kt)("h2",{id:"usage-1"},"Usage"),(0,r.kt)(o.default,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"avatar"},"Avatar"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#component"},"Component")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#imagecomponent"},"ImageComponent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#activeopacity"},"activeOpacity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#avatarstyle"},"avatarStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#icon"},"icon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#iconstyle"},"iconStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#imageprops"},"imageProps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onlongpress"},"onLongPress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onpress"},"onPress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overlaycontainerstyle"},"overlayContainerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#placeholderstyle"},"placeholderStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pressableprops"},"pressableProps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#renderplaceholdercontent"},"renderPlaceholderContent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rounded"},"rounded")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#size"},"size")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#source"},"source")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#title"},"title")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#titlestyle"},"titleStyle"))),(0,r.kt)("h3",{id:"avataraccessory"},"Avatar.Accessory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pressableprops"},"pressableProps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#style"},"style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#underlaycolor"},"underlayColor"))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"avatar-1"},"Avatar"),(0,r.kt)("h4",{id:"component"},"Component"),(0,r.kt)("p",null,"Component for enclosing element (eg: TouchableHighlight, View, etc)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"React Component"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Press handlers present then Pressable else View"))))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"imagecomponent"},"ImageComponent"),(0,r.kt)("p",null,"Custom ImageComponent for Avatar."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"React.ComponentClass"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"activeopacity"},"activeOpacity"),(0,r.kt)("p",null,"Opacity when pressed."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"avatarstyle"},"avatarStyle"),(0,r.kt)("p",null,"Style for avatar image."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ImageStyle"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,r.kt)("p",null,"Styling for outer container."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"icon"},"icon"),(0,r.kt)("p",null,"Displays an icon as the main content of the Avatar. ",(0,r.kt)("strong",{parentName:"p"},"Cannot be used alongside title"),". When used with the ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," prop it will be used as the placeholder."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AvatarIcon"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"iconstyle"},"iconStyle"),(0,r.kt)("p",null,"Extra styling for icon component."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"imageprops"},"imageProps"),(0,r.kt)("p",null,'Optional properties to pass to the avatar e.g "resizeMode".'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ImageProps(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onlongpress"},"onLongPress"),(0,r.kt)("p",null,"Callback function when long pressing component."),(0,r.kt)("p",null,"Called when a long-tap gesture is detected."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(() => void) and ((event: GestureResponderEvent) => void)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onpress"},"onPress"),(0,r.kt)("p",null,"Callback function when pressing component."),(0,r.kt)("p",null,"Called when a single tap gesture is detected."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(() => void) and ((event: GestureResponderEvent) => void)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"overlaycontainerstyle"},"overlayContainerStyle"),(0,r.kt)("p",null,"Style for the view outside image or icon."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"placeholderstyle"},"placeholderStyle"),(0,r.kt)("p",null,"Adds style to the placeholder wrapper."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"pressableprops"},"pressableProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"renderplaceholdercontent"},"renderPlaceholderContent"),(0,r.kt)("p",null,"Custom placeholder element (by default, it's the title)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"React.ReactElement<{}>"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"rounded"},"rounded"),(0,r.kt)("p",null,"Makes the avatar circular."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"size"},"size"),(0,r.kt)("p",null,"Size of the avatar."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'number or "small" or "medium" or "large" or "xlarge"'),(0,r.kt)("td",{parentName:"tr",align:null},"small")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"source"},"source"),(0,r.kt)("p",null,"Image source to be displayed on avatar."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ImageSourcePropType"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"title"},"title"),(0,r.kt)("p",null,"Renders title in the placeholder."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"titlestyle"},"titleStyle"),(0,r.kt)("p",null,"Style for the title."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"avataraccessory-1"},"Avatar.Accessory"),(0,r.kt)("h4",{id:"pressableprops-1"},"pressableProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"style"},"style"),(0,r.kt)("p",null,"Style prop inherited from TextProps and TouchableWithoutFeedbackProperties"),(0,r.kt)("p",null,"Only exist here so we can have ViewStyle or TextStyle"),(0,r.kt)("p",null,"Style"),(0,r.kt)("p",null,"Add custom styling to the accessory of avatar."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"underlaycolor"},"underlayColor"),(0,r.kt)("p",null,"The color of the underlay that will show through when the touch is active."),(0,r.kt)("p",null,"Add underlay color to the accessory of avatar."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ColorValue"),(0,r.kt)("td",{parentName:"tr",align:null},"#000")))),(0,r.kt)("hr",null))}A.isMDXComponent=!0},33737:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>u,toc:()=>s,default:()=>m});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),o=["components"],i={},p=void 0,u={unversionedId:"components/usage/Avatar",id:"components/usage/Avatar",title:"Avatar",description:"",source:"@site/docs/components/usage/Avatar.mdx",sourceDirName:"components/usage",slug:"/components/usage/Avatar",permalink:"/docs/next/components/usage/Avatar",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/Avatar.mdx",tags:[],version:"current",frontMatter:{}},s=[],d={toc:s};function m(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE Avatar","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Avatar%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20AvatarData%20%3D%20%7B%0Aimage_url%3A%20string%3B%0A%7D%3B%0A%0Aconst%20dataList%3A%20AvatarData%5B%5D%20%3D%20%5B%0A%7B%0A%20%20image_url%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2F6MWH9Xi_.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20image_url%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F36.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20image_url%3A%0A%20%20%20%20'https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2019%2F11%2F03%2F20%2F11%2Fportrait-4599553__340.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20image_url%3A%0A%20%20%20%20'https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2014%2F09%2F17%2F20%2F03%2Fprofile-449912__340.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20image_url%3A%0A%20%20%20%20'https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2020%2F09%2F18%2F05%2F58%2Flights-5580916__340.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20image_url%3A%0A%20%20%20%20'https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F11%2F21%2F12%2F42%2Fbeard-1845166_1280.jpg'%2C%0A%7D%2C%0A%5D%3B%0A%0Atype%20AvatarComponentProps%20%3D%20%7B%7D%3B%0A%0AArray.prototype.chunk%20%3D%20function%20(%20n%20)%20%7B%0A%20%20if%20(%20!this.length%20)%20%7B%0A%20%20%20%20%20%20return%20%5B%5D%3B%0A%20%20%7D%0A%20%20return%20%5B%20this.slice(%200%2C%20n%20)%20%5D.concat(%20this.slice(n).chunk(n)%20)%3B%0A%7D%3B%0A%0Aconst%20Avatars%3A%20React.FunctionComponent%3CAvatarComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EImage%20Avatars%3C%2FText%3E%0A%20%20%20%20%20%20%7BdataList.chunk(3).map((chunk%2C%20chunkIndex)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20key%3D%7BchunkIndex%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%7Bchunk.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7Bl.image_url%20%3F%20%7B%20uri%3A%20l.image_url%20%7D%20%3A%20%7B%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7B%60%24%7BchunkIndex%7D-%24%7Bi%7D%60%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EIcon%20Avatars%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'pencil'%2C%20type%3A%20'font-awesome'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'%236733b9'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'rowing'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'%2300a7f7'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'heartbeat'%2C%20type%3A%20'font-awesome'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'%23eb1561'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'extension'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'material'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'%23cdde20'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'grey'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20borderStyle%3A%20'solid'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'apartment'%2C%20type%3A%20'material'%2C%20color%3A%20'%23009688'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'grey'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20borderStyle%3A%20'solid'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'backup'%2C%20type%3A%20'material'%2C%20color%3A%20'%23ff5606'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'grey'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20borderStyle%3A%20'solid'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3ELetter%20Avatars%3C%2FText%3E%0A%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Fc%22%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'%233d4db7'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20title%3D%22P%22%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'coral'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Rd%22%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'purple'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EBadged%20Avatars%3C%2FText%3E%0A%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2040%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'adb'%2C%20type%3A%20'material'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'orange'%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar.Accessory%20size%3D%7B24%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fwomen%2F57.jpg'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Bj%22%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'grey'%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar.Accessory%20size%3D%7B23%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%0A%7D)%0A%0Aexport%20default%20Avatars%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0}}]);