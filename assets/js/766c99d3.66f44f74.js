"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77073,89679],{27035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(62341),c=["components"],s={},u=void 0,p={unversionedId:"main/usage/Switch/Switch",id:"version-4.0.0-beta.0/main/usage/Switch/Switch",title:"Switch",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Switch/Switch.md",sourceDirName:"main/usage/Switch",slug:"/main/usage/Switch/",permalink:"/docs/4.0.0-beta.0/main/usage/Switch/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Switch/Switch.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},l={},m=[],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.default,{mdxType:"Snack"}))}f.isMDXComponent=!0},62341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>l});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],c={},s=void 0,u={unversionedId:"main/usage/Switch/snack/index",id:"version-4.0.0-beta.0/main/usage/Switch/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Switch/snack/index.md",sourceDirName:"main/usage/Switch/snack",slug:"/main/usage/Switch/snack/",permalink:"/docs/4.0.0-beta.0/main/usage/Switch/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Switch/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},p={},l=[],m={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"snack-player","data-snack-name":"RNE Switch","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Switch%20%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20SwitchComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SwitchComponent%3A%20React.FunctionComponent%3CSwitchComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bchecked%2C%20setChecked%5D%20%3D%20useState(false)%3B%0A%0A%20%20const%20toggleSwitch%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setChecked(!checked)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%3CSwitch%0A%20%20%20%20%20%20%20%20value%3D%7Bchecked%7D%0A%20%20%20%20%20%20%20%20onValueChange%3D%7B(value)%20%3D%3E%20setChecked(value)%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20view%3A%20%7B%0A%20%20%20%20margin%3A%2010%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20SwitchComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);