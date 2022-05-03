"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81734],{29065:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>A,toc:()=>u});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={},c=void 0,A={unversionedId:"component_usage/Slider",id:"version-4.0.0-rc.1/component_usage/Slider",title:"Slider",description:"",source:"@site/versioned_docs/version-4.0.0-rc.1/component_usage/Slider.mdx",sourceDirName:"component_usage",slug:"/component_usage/Slider",permalink:"/docs/4.0.0-rc.1/component_usage/Slider",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.1/component_usage/Slider.mdx",tags:[],version:"4.0.0-rc.1",frontMatter:{}},s={},u=[],D={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},D,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Slider","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Slider%2C%20Text%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20SlidersComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Sliders%3A%20React.FunctionComponent%3CSlidersComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bvalue%2C%20setValue%5D%20%3D%20useState(0)%3B%0Aconst%20%5BvertValue%2C%20setVertValue%5D%20%3D%20useState(0)%3B%0A%0Aconst%20interpolate%20%3D%20(start%3A%20number%2C%20end%3A%20number)%20%3D%3E%20%7B%0A%20%20let%20k%20%3D%20(value%20-%200)%20%2F%2010%3B%20%2F%2F%200%20%3D%3Emin%20%20%26%26%2010%20%3D%3E%20MAX%0A%20%20return%20Math.ceil((1%20-%20k)%20*%20start%20%2B%20k%20*%20end)%20%25%20256%3B%0A%7D%3B%0A%0Aconst%20color%20%3D%20()%20%3D%3E%20%7B%0A%20%20let%20r%20%3D%20interpolate(255%2C%200)%3B%0A%20%20let%20g%20%3D%20interpolate(0%2C%20255)%3B%0A%20%20let%20b%20%3D%20interpolate(0%2C%200)%3B%0A%20%20return%20%60rgb(%24%7Br%7D%2C%24%7Bg%7D%2C%24%7Bb%7D)%60%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Slider%3C%2FText%3E%0A%0A%20%20%20%20%3CView%20style%3D%7B%5Bstyles.contentView%5D%7D%3E%0A%20%20%20%20%20%20%3CSlider%0A%20%20%20%20%20%20%20%20value%3D%7Bvalue%7D%0A%20%20%20%20%20%20%20%20onValueChange%3D%7BsetValue%7D%0A%20%20%20%20%20%20%20%20maximumValue%3D%7B10%7D%0A%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%0A%20%20%20%20%20%20%20%20step%3D%7B1%7D%0A%20%20%20%20%20%20%20%20allowTouchTrack%0A%20%20%20%20%20%20%20%20trackStyle%3D%7B%7B%20height%3A%205%2C%20backgroundColor%3A%20'transparent'%20%7D%7D%0A%20%20%20%20%20%20%20%20thumbStyle%3D%7B%7B%20height%3A%2020%2C%20width%3A%2020%2C%20backgroundColor%3A%20'transparent'%20%7D%7D%0A%20%20%20%20%20%20%20%20thumbProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20children%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22heartbeat%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22font-awesome%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20reverse%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20bottom%3A%2020%2C%20right%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%7Bcolor()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20)%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20paddingTop%3A%2020%20%7D%7D%3EValue%3A%20%7Bvalue%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EVertical%20Slider%3C%2FText%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.verticalContent%7D%3E%0A%20%20%20%20%20%20%3CSlider%0A%20%20%20%20%20%20%20%20value%3D%7BvertValue%7D%0A%20%20%20%20%20%20%20%20onValueChange%3D%7BsetVertValue%7D%0A%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%0A%20%20%20%20%20%20%20%20minimumValue%3D%7B20%7D%0A%20%20%20%20%20%20%20%20step%3D%7B1%7D%0A%20%20%20%20%20%20%20%20orientation%3D%22vertical%22%0A%20%20%20%20%20%20%20%20thumbStyle%3D%7B%7B%20height%3A%2020%2C%20width%3A%2016%2C%20backgroundColor%3A%20'transparent'%20%7D%7D%0A%20%20%20%20%20%20%20%20thumbProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20children%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22heartbeat%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22font-awesome%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20reverse%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20bottom%3A%2020%2C%20right%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23f50%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20)%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CText%20style%3D%7B%7B%20paddingLeft%3A%2025%20%7D%7D%3EValue%3A%20%7BvertValue%7D%3C%2FText%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AcontentView%3A%20%7B%0A%20%20padding%3A%2020%2C%0A%20%20width%3A%20'100%25'%2C%0A%20%20justifyContent%3A%20'center'%2C%0A%20%20alignItems%3A%20'stretch'%2C%0A%7D%2C%0AverticalContent%3A%20%7B%0A%20%20padding%3A%2020%2C%0A%20%20flex%3A%201%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20height%3A%20500%2C%0A%20%20justifyContent%3A%20'center'%2C%0A%20%20alignItems%3A%20'stretch'%2C%0A%7D%2C%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%0A%7D)%3B%0A%0Aexport%20default%20Sliders%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),A=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=A(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},D=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),D=A(r),p=a,d=D["".concat(c,".").concat(p)]||D[p]||u[p]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=D;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var A=2;A<o;A++)i[A]=r[A];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}D.displayName="MDXCreateElement"}}]);