"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[172],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(a),h=r,N=m["".concat(p,".").concat(h)]||m[h]||k[h]||l;return a?n.createElement(N,o(o({ref:t},c),{},{components:a})):n.createElement(N,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8291:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>d,toc:()=>c,default:()=>m});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),o=["components"],i={},p=void 0,d={unversionedId:"props/searchbar",id:"version-3.4.2/props/searchbar",isDocsHomePage:!1,title:"searchbar",description:"Props",source:"@site/versioned_docs/version-3.4.2/props/searchbar.md",sourceDirName:"props",slug:"/props/searchbar",permalink:"/docs/props/searchbar",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/props/searchbar.md",version:"3.4.2",frontMatter:{}},c=[{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>cancelButtonProps</code>",id:"cancelbuttonprops",children:[]},{value:"<code>cancelButtonTitle</code>",id:"cancelbuttontitle",children:[]},{value:"<code>cancelIcon</code> (<strong><code>platform=&quot;android&quot;</code> only</strong>)",id:"cancelicon-platformandroid-only",children:[]},{value:"<code>clearIcon</code>",id:"clearicon",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>inputContainerStyle</code>",id:"inputcontainerstyle",children:[]},{value:"<code>inputStyle</code>",id:"inputstyle",children:[]},{value:"<code>leftIconContainerStyle</code>",id:"lefticoncontainerstyle",children:[]},{value:"<code>lightTheme</code> (<strong><code>platform=&quot;default&quot;</code> only</strong>)",id:"lighttheme-platformdefault-only",children:[]},{value:"<code>loadingProps</code>",id:"loadingprops",children:[]},{value:"<code>onCancel</code>",id:"oncancel",children:[]},{value:"<code>onChangeText</code>",id:"onchangetext",children:[]},{value:"<code>onClear</code>",id:"onclear",children:[]},{value:"<code>placeholder</code>",id:"placeholder",children:[]},{value:"<code>placeholderTextColor</code>",id:"placeholdertextcolor",children:[]},{value:"<code>platform</code>",id:"platform",children:[]},{value:"<code>rightIconContainerStyle</code>",id:"righticoncontainerstyle",children:[]},{value:"<code>round</code> (<strong><code>platform=&quot;default&quot;</code> only</strong>)",id:"round-platformdefault-only",children:[]},{value:"<code>searchIcon</code>",id:"searchicon",children:[]},{value:"<code>showCancel</code> (<strong><code>platform=&quot;ios&quot;</code> only</strong>)",id:"showcancel-platformios-only",children:[]},{value:"<code>showLoading</code>",id:"showloading",children:[]},{value:"<code>underlineColorAndroid</code>",id:"underlinecolorandroid",children:[]},{value:"<code>value</code>",id:"value",children:[]}]}],k={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This component inherits all\n",(0,l.kt)("a",{parentName:"p",href:"/docs/props/input#props"},"React Native Elements Input props"),",\nwhich means\n",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/textinput.html"},"all native TextInput props that come with a standard React Native TextInput element"),",\nalong with the following:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cancelbuttonprops"},(0,l.kt)("inlineCode",{parentName:"a"},"cancelButtonProps"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cancelbuttontitle"},(0,l.kt)("inlineCode",{parentName:"a"},"cancelButtonTitle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cancelicon-platformandroid-only"},(0,l.kt)("inlineCode",{parentName:"a"},"cancelIcon"))," (",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},'platform="android"'),"\nonly"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#clearicon"},(0,l.kt)("inlineCode",{parentName:"a"},"clearIcon"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inputcontainerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"inputContainerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inputstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"inputStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#lefticoncontainerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"leftIconContainerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#lighttheme-platformdefault-only"},(0,l.kt)("inlineCode",{parentName:"a"},"lightTheme"))," (",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},'platform="default"'),"\nonly"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#loadingprops"},(0,l.kt)("inlineCode",{parentName:"a"},"loadingProps"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#oncancel"},(0,l.kt)("inlineCode",{parentName:"a"},"onCancel"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onchangetext"},(0,l.kt)("inlineCode",{parentName:"a"},"onChangeText"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onclear"},(0,l.kt)("inlineCode",{parentName:"a"},"onClear"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#placeholder"},(0,l.kt)("inlineCode",{parentName:"a"},"placeholder"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#placeholdertextcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"placeholderTextColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#platform"},(0,l.kt)("inlineCode",{parentName:"a"},"platform"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#righticoncontainerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"rightIconContainerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#round-platformdefault-only"},(0,l.kt)("inlineCode",{parentName:"a"},"round"))," (",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},'platform="default"')," only"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#searchicon"},(0,l.kt)("inlineCode",{parentName:"a"},"searchIcon"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#showcancel-platformios-only"},(0,l.kt)("inlineCode",{parentName:"a"},"showCancel"))," (",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},'platform="ios"')," only"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#showloading"},(0,l.kt)("inlineCode",{parentName:"a"},"showLoading"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#underlinecolorandroid"},(0,l.kt)("inlineCode",{parentName:"a"},"underlineColorAndroid")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"cancelbuttonprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"cancelButtonProps")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(iOS only)")," props passed to cancel Button"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Also receives all\n",(0,l.kt)("a",{parentName:"p",href:"http://reactnative.dev/docs/touchableopacity.html#props"},"TouchableOpacity"),"\nprops")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#buttonstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"buttonStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#buttontextstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"buttonTextStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#color"},(0,l.kt)("inlineCode",{parentName:"a"},"color"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disabled"},(0,l.kt)("inlineCode",{parentName:"a"},"disabled"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#buttondisabledstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"buttonDisabledStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#buttondisabledtextstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"buttonDisabledTextStyle")))),(0,l.kt)("h4",{id:"buttonstyle"},(0,l.kt)("inlineCode",{parentName:"h4"},"buttonStyle")),(0,l.kt)("p",null,"cancel Button styling"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("h4",{id:"buttontextstyle"},(0,l.kt)("inlineCode",{parentName:"h4"},"buttonTextStyle")),(0,l.kt)("p",null,"cancel Button Text styling"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("h4",{id:"color"},(0,l.kt)("inlineCode",{parentName:"h4"},"color")),(0,l.kt)("p",null,"cancel Button text color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string (color)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"#007aff")))),(0,l.kt)("h4",{id:"disabled"},(0,l.kt)("inlineCode",{parentName:"h4"},"disabled")),(0,l.kt)("p",null,"Prop to indicate cancel Button is disabled"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("h4",{id:"buttondisabledstyle"},(0,l.kt)("inlineCode",{parentName:"h4"},"buttonDisabledStyle")),(0,l.kt)("p",null,"Disabled cancel Button styling"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("h4",{id:"buttondisabledtextstyle"},(0,l.kt)("inlineCode",{parentName:"h4"},"buttonDisabledTextStyle")),(0,l.kt)("p",null,"Styles for the text when cancel Button is disabled"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"{ color: '#cdcdcd' }"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cancelbuttontitle"},(0,l.kt)("inlineCode",{parentName:"h3"},"cancelButtonTitle")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(iOS only)")," title of the cancel button on the right side"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"Cancel"')))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cancelicon-platformandroid-only"},(0,l.kt)("inlineCode",{parentName:"h3"},"cancelIcon")," (",(0,l.kt)("strong",{parentName:"h3"},(0,l.kt)("inlineCode",{parentName:"strong"},'platform="android"')," only"),")"),(0,l.kt)("p",null,"This props allows to override the ",(0,l.kt)("inlineCode",{parentName:"p"},"Icon")," props or use a custom component. Use\n",(0,l.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," to hide the icon."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{",(0,l.kt)("a",{parentName:"td",href:"/docs/props/icon#props"},"...Icon props"),"}",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"OR"),(0,l.kt)("br",null)," component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"clearicon"},(0,l.kt)("inlineCode",{parentName:"h3"},"clearIcon")),(0,l.kt)("p",null,"This props allows to override the ",(0,l.kt)("inlineCode",{parentName:"p"},"Icon")," props or use a custom component. Use\n",(0,l.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," to hide the icon."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{",(0,l.kt)("a",{parentName:"td",href:"/docs/props/icon#props"},"...Icon props"),"}",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"OR"),(0,l.kt)("br",null)," component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"containerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,l.kt)("p",null,"style the container of the SearchBar"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"inputcontainerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"inputContainerStyle")),(0,l.kt)("p",null,"style the container of the TextInput"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"inputstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"inputStyle")),(0,l.kt)("p",null,"style the TextInput"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lefticoncontainerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"leftIconContainerStyle")),(0,l.kt)("p",null,"style the icon container on the left side"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lighttheme-platformdefault-only"},(0,l.kt)("inlineCode",{parentName:"h3"},"lightTheme")," (",(0,l.kt)("strong",{parentName:"h3"},(0,l.kt)("inlineCode",{parentName:"strong"},'platform="default"')," only"),")"),(0,l.kt)("p",null,"change theme to light theme"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"loadingprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"loadingProps")),(0,l.kt)("p",null,"props passed to ActivityIndicator"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{ }")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"oncancel"},(0,l.kt)("inlineCode",{parentName:"h3"},"onCancel")),(0,l.kt)("p",null,"callback fired when pressing the cancel button (iOS) or the back icon (Android)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onchangetext"},(0,l.kt)("inlineCode",{parentName:"h3"},"onChangeText")),(0,l.kt)("p",null,"method to fire when text is changed"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onclear"},(0,l.kt)("inlineCode",{parentName:"h3"},"onClear")),(0,l.kt)("p",null,"method to fire when input is cleared"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"placeholder"},(0,l.kt)("inlineCode",{parentName:"h3"},"placeholder")),(0,l.kt)("p",null,"set the placeholder text"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"''")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"placeholdertextcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"placeholderTextColor")),(0,l.kt)("p",null,"set the color of the placeholder text"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"'#86939e'")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"platform"},(0,l.kt)("inlineCode",{parentName:"h3"},"platform")),(0,l.kt)("p",null,'choose the look and feel of the search bar. One of "default", "ios", "android"'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"default"')))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"righticoncontainerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"rightIconContainerStyle")),(0,l.kt)("p",null,"style the icon container on the right side"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"round-platformdefault-only"},(0,l.kt)("inlineCode",{parentName:"h3"},"round")," (",(0,l.kt)("strong",{parentName:"h3"},(0,l.kt)("inlineCode",{parentName:"strong"},'platform="default"')," only"),")"),(0,l.kt)("p",null,"change TextInput styling to rounded corners"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"searchicon"},(0,l.kt)("inlineCode",{parentName:"h3"},"searchIcon")),(0,l.kt)("p",null,"This props allows to override the ",(0,l.kt)("inlineCode",{parentName:"p"},"Icon")," props or use a custom component. Use\n",(0,l.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," to hide the icon."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{",(0,l.kt)("a",{parentName:"td",href:"/docs/props/icon#props"},"...Icon props"),"}",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"OR"),(0,l.kt)("br",null)," component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"showcancel-platformios-only"},(0,l.kt)("inlineCode",{parentName:"h3"},"showCancel")," (",(0,l.kt)("strong",{parentName:"h3"},(0,l.kt)("inlineCode",{parentName:"strong"},'platform="ios"')," only"),")"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," the cancel button will stay visible after blur events."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"showloading"},(0,l.kt)("inlineCode",{parentName:"h3"},"showLoading")),(0,l.kt)("p",null,"show the loading ActivityIndicator effect"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"underlinecolorandroid"},(0,l.kt)("inlineCode",{parentName:"h3"},"underlineColorAndroid")),(0,l.kt)("p",null,"specify other than the default transparent underline color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string (color)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"transparent")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"value"},(0,l.kt)("inlineCode",{parentName:"h3"},"value")),(0,l.kt)("p",null,"The value of the search field"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))))}m.isMDXComponent=!0}}]);