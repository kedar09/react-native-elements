"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1383],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,u=c["".concat(o,".").concat(h)]||c[h]||k[h]||l;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},27891:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>d,toc:()=>k,default:()=>h});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(44996),m=["components"],o={id:"slider",title:"Slider"},p=void 0,d={unversionedId:"slider",id:"version-1.2.0/slider",title:"Slider",description:"Sliders allow users to select a value from a fixed set of options.",source:"@site/versioned_docs/version-1.2.0/slider.md",sourceDirName:".",slug:"/slider",permalink:"/docs/1.2.0/slider",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-1.2.0/slider.md",tags:[],version:"1.2.0",frontMatter:{id:"slider",title:"Slider"},sidebar:"version-1.2.0/docs",previous:{title:"SearchBar",permalink:"/docs/1.2.0/searchbar"},next:{title:"SocialIcon",permalink:"/docs/1.2.0/social_icon"}},k=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[],level:2},{value:"Reference",id:"reference",children:[{value:"<code>animateTransitions</code>",id:"animatetransitions",children:[],level:3},{value:"<code>animationConfig</code>",id:"animationconfig",children:[],level:3},{value:"<code>animationType</code>",id:"animationtype",children:[],level:3},{value:"<code>debugTouchArea</code>",id:"debugtoucharea",children:[],level:3},{value:"<code>disabled</code>",id:"disabled",children:[],level:3},{value:"<code>maximumTrackTintColor</code>",id:"maximumtracktintcolor",children:[],level:3},{value:"<code>maximumValue</code>",id:"maximumvalue",children:[],level:3},{value:"<code>minimumTrackTintColor</code>",id:"minimumtracktintcolor",children:[],level:3},{value:"<code>minimumValue</code>",id:"minimumvalue",children:[],level:3},{value:"<code>onSlidingComplete</code>",id:"onslidingcomplete",children:[],level:3},{value:"<code>onSlidingStart</code>",id:"onslidingstart",children:[],level:3},{value:"<code>onValueChange</code>",id:"onvaluechange",children:[],level:3},{value:"<code>orientation</code>",id:"orientation",children:[],level:3},{value:"<code>step</code>",id:"step",children:[],level:3},{value:"<code>style</code>",id:"style",children:[],level:3},{value:"<code>thumbStyle</code>",id:"thumbstyle",children:[],level:3},{value:"<code>thumbTintColor</code>",id:"thumbtintcolor",children:[],level:3},{value:"<code>thumbTouchSize</code>",id:"thumbtouchsize",children:[],level:3},{value:"<code>trackStyle</code>",id:"trackstyle",children:[],level:3},{value:"<code>value</code>",id:"value",children:[],level:3}],level:2}],c={toc:k};function h(e){var t=e.components,a=(0,r.Z)(e,m);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Sliders allow users to select a value from a fixed set of options."),(0,l.kt)("img",{alt:"Slider",src:(0,i.Z)("img/slider_screenshot.png")}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This component is a forked implementation of\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jeanregisser/react-native-slider"},"react-native-slider"),".")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Slider } from 'react-native-elements';\n\n<View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>\n  <Slider\n    value={this.state.value}\n    onValueChange={(value) => this.setState({ value })}\n  />\n  <Text>Value: {this.state.value}</Text>\n</View>;\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#animatetransitions"},(0,l.kt)("inlineCode",{parentName:"a"},"animateTransitions"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#animationconfig"},(0,l.kt)("inlineCode",{parentName:"a"},"animationConfig"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#animationtype"},(0,l.kt)("inlineCode",{parentName:"a"},"animationType"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#debugtoucharea"},(0,l.kt)("inlineCode",{parentName:"a"},"debugTouchArea"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disabled"},(0,l.kt)("inlineCode",{parentName:"a"},"disabled"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#maximumtracktintcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"maximumTrackTintColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#maximumvalue"},(0,l.kt)("inlineCode",{parentName:"a"},"maximumValue"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#minimumtracktintcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"minimumTrackTintColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#minimumvalue"},(0,l.kt)("inlineCode",{parentName:"a"},"minimumValue"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onslidingcomplete"},(0,l.kt)("inlineCode",{parentName:"a"},"onSlidingComplete"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onslidingstart"},(0,l.kt)("inlineCode",{parentName:"a"},"onSlidingStart"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onvaluechange"},(0,l.kt)("inlineCode",{parentName:"a"},"onValueChange"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#orientation"},(0,l.kt)("inlineCode",{parentName:"a"},"orientation"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#step"},(0,l.kt)("inlineCode",{parentName:"a"},"step"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#style"},(0,l.kt)("inlineCode",{parentName:"a"},"style"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#thumbstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"thumbStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#thumbtintcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"thumbTintColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#thumbtouchsize"},(0,l.kt)("inlineCode",{parentName:"a"},"thumbTouchSize"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#trackstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"trackStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#value"},(0,l.kt)("inlineCode",{parentName:"a"},"value")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"animatetransitions"},(0,l.kt)("inlineCode",{parentName:"h3"},"animateTransitions")),(0,l.kt)("p",null,"Set to true if you want to use the default 'spring' animation"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"animationconfig"},(0,l.kt)("inlineCode",{parentName:"h3"},"animationConfig")),(0,l.kt)("p",null,"Used to configure the animation parameters. These are the same parameters in the\n",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/animations.html"},"Animated library"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"undefined"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"animationtype"},(0,l.kt)("inlineCode",{parentName:"h3"},"animationType")),(0,l.kt)("p",null,"Set to 'spring' or 'timing' to use one of those two types of animations with the\ndefault\n",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/animations.html"},"animation properties"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"'timing'"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"debugtoucharea"},(0,l.kt)("inlineCode",{parentName:"h3"},"debugTouchArea")),(0,l.kt)("p",null,"Set this to true to visually see the thumb touch rect in green."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabled"},(0,l.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,l.kt)("p",null,"If true the user won't be able to move the slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maximumtracktintcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"maximumTrackTintColor")),(0,l.kt)("p",null,"The color used for the track to the right of the button"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"'#b3b3b3'"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maximumvalue"},(0,l.kt)("inlineCode",{parentName:"h3"},"maximumValue")),(0,l.kt)("p",null,"Initial maximum value of the slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"minimumtracktintcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"minimumTrackTintColor")),(0,l.kt)("p",null,"The color used for the track to the left of the button"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"'#3f3f3f'"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"minimumvalue"},(0,l.kt)("inlineCode",{parentName:"h3"},"minimumValue")),(0,l.kt)("p",null,"Initial minimum value of the slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onslidingcomplete"},(0,l.kt)("inlineCode",{parentName:"h3"},"onSlidingComplete")),(0,l.kt)("p",null,"Callback called when the user finishes changing the value (e.g. when the slider\nis released)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onslidingstart"},(0,l.kt)("inlineCode",{parentName:"h3"},"onSlidingStart")),(0,l.kt)("p",null,"Callback called when the user starts changing the value (e.g. when the slider is\npressed)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onvaluechange"},(0,l.kt)("inlineCode",{parentName:"h3"},"onValueChange")),(0,l.kt)("p",null,"Callback continuously called while the user is dragging the slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"orientation"},(0,l.kt)("inlineCode",{parentName:"h3"},"orientation")),(0,l.kt)("p",null,"Set the orientation of the slider."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"'horizontal'"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"step"},(0,l.kt)("inlineCode",{parentName:"h3"},"step")),(0,l.kt)("p",null,"Step value of the slider. The value should be between 0 and maximumValue -\nminimumValue)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"style"},(0,l.kt)("inlineCode",{parentName:"h3"},"style")),(0,l.kt)("p",null,"The style applied to the slider container"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"http://reactnative.dev/docs/view.html#style"},"style")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbStyle")),(0,l.kt)("p",null,"The style applied to the thumb"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"http://reactnative.dev/docs/view.html#style"},"style")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbtintcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbTintColor")),(0,l.kt)("p",null,"The color used for the thumb"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"'#343434'"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbtouchsize"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbTouchSize")),(0,l.kt)("p",null,"The size of the touch area that allows moving the thumb. The touch area has the\nsame center as the visible thumb. This allows to have a visually small thumb\nwhile still allowing the user to move it easily."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"{width: 40, height: 40}")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"trackstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"trackStyle")),(0,l.kt)("p",null,"The style applied to the track"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"http://reactnative.dev/docs/view.html#style"},"style")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"value"},(0,l.kt)("inlineCode",{parentName:"h3"},"value")),(0,l.kt)("p",null,"Initial value of the slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")))))}h.isMDXComponent=!0}}]);