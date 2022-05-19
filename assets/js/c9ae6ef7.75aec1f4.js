(self.webpackChunk=self.webpackChunk||[]).push([[96713],{94137:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(67294),o=a(17030),i=a(54236),r=a(40318),s=a(62290);const c=function(){var e=(0,r.Z)({componentName:"Switch",props:{color:{value:o.defaultTheme.colors.primary,type:s.n.String,description:"Color"},value:{value:!1,type:s.n.Boolean,description:"Value",stateful:!0},onValueChange:{value:"() => setValue(!value)",propHook:{what:"!value",into:"value"},type:s.n.Function,description:"Function called when switch state is changed."}},scope:{Switch:o.Switch},imports:{"@rneui/base":{named:["Switch"]}}});return n.createElement(n.Fragment,null,n.createElement(i.Z,{params:e}))}},54236:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var n=a(87462),o=a(67294),i=a(91262),r=a(18421),s=a(77356),c=a(41652),l=a(24309),p=a(16042),d=a(20346),m=a(30650);const h=function(e){var t=e.params,a=e.containerStyle,h=void 0===a?{}:a;return o.createElement(i.Z,{fallback:o.createElement(o.Fragment,null,"Loading...")},(function(){return o.createElement(d.X9.Provider,null,o.createElement(d.PK,{initialMetrics:m.o},o.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},h)},o.createElement(r.Z,(0,n.Z)({},t.compilerProps,{minHeight:62,placeholder:s.Z}))),o.createElement(c.Z,{msg:t.errorProps.msg,isPopup:!0}),o.createElement(l.Z,t.knobProps),o.createElement(c.Z,t.errorProps),o.createElement(p.E,t.actions)))}))}},38037:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>w,frontMatter:()=>d,metadata:()=>h,toc:()=>v});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=(a(9877),a(72360),["components"]),s={toc:[]};function c(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"snack-player","data-snack-name":"RNE Switch","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Switch%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20SwitchComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SwitchComponent%3A%20React.FunctionComponent%3CSwitchComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bchecked%2C%20setChecked%5D%20%3D%20useState(false)%3B%0A%0Aconst%20toggleSwitch%20%3D%20()%20%3D%3E%20%7B%0A%20%20setChecked(!checked)%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%3CSwitch%0A%20%20%20%20%20%20value%3D%7Bchecked%7D%0A%20%20%20%20%20%20onValueChange%3D%7B(value)%20%3D%3E%20setChecked(value)%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Aview%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20SwitchComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0;var l=a(94137),p=["components"],d={id:"switch",title:"Switch"},m=void 0,h={unversionedId:"components/switch",id:"version-4.0.0-rc.3/components/switch",title:"Switch",description:"Switch represents user's decision of a process and indicates whether a state is on/off.",source:"@site/versioned_docs/version-4.0.0-rc.3/components/Switch.mdx",sourceDirName:"components",slug:"/components/switch",permalink:"/docs/components/switch",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/components/Switch.mdx",tags:[],version:"4.0.0-rc.3",frontMatter:{id:"switch",title:"Switch"},sidebar:"docs",previous:{title:"SpeedDial.Action",permalink:"/docs/components/speeddial_action"},next:{title:"Tab",permalink:"/docs/components/tab"}},u={},v=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],k={toc:v};function w(e){var t=e.components,a=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Switch represents user's decision of a process and indicates whether a state is on/off.\nSwitch is a controlled component that requires an ",(0,i.kt)("inlineCode",{parentName:"p"},"onValueChange")," to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," prop.\nThis renders a ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," value. React native elements provide you with additional ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"color")," support in the Switch Button.\nThis component inherits ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/switch.html"},"all native Switch props that come with a standard React Native Switch element"),"."),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Switch } from "@rneui/themed";\n')),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(c,{mdxType:"Usage"}),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Includes all ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props."))),(0,i.kt)("div",{class:"table-responsive"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"color")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"primary")),(0,i.kt)("td",{parentName:"tr",align:null},"The color of the Switch component."))))),(0,i.kt)("h2",{id:"playground"},"Playground"),(0,i.kt)(l.Z,{mdxType:"Play"}))}w.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);