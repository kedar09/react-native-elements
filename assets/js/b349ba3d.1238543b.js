"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18356],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),A=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=A(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=A(r),m=a,u=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var A=2;A<o;A++)i[A]=r[A];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20077:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>A,toc:()=>l});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={},s=void 0,A={unversionedId:"main/usage/Header/snack/index",id:"version-4.0.0-beta.0/main/usage/Header/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Header/snack/index.md",sourceDirName:"main/usage/Header/snack",slug:"/main/usage/Header/snack/",permalink:"/docs/4.0.0-beta.0/main/usage/Header/snack/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Header/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},p={},l=[],d={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Header","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20StyleSheet%2C%0A%20%20View%2C%0A%20%20Text%2C%0A%20%20Linking%2C%0A%20%20StyleProp%2C%0A%20%20TextStyle%2C%0A%20%20ViewStyle%2C%0A%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Header%20as%20HeaderRNE%2C%20HeaderProps%2C%20Icon%20%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20TouchableOpacity%20%7D%20from%20'react-native-gesture-handler'%3B%0Aimport%20%7B%20SafeAreaProvider%20%7D%20from%20'react-native-safe-area-context'%3B%0A%0Atype%20HeaderComponentProps%20%3D%20%7B%0A%20%20title%3A%20string%3B%0A%20%20view%3F%3A%20string%3B%0A%7D%3B%0A%0Atype%20ParamList%20%3D%20%7B%0A%20%20Detail%3A%20%7B%0A%20%20%20%20openDrawer%3A%20void%3B%0A%20%20%7D%3B%0A%7D%3B%0A%0Aconst%20Header%3A%20React.FunctionComponent%3CHeaderComponentProps%3E%20%3D%20(props)%20%3D%3E%20%7B%0A%0A%20%20const%20docsNavigate%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Linking.openURL(%60https%3A%2F%2Freactnativeelements.com%2Fdocs%2F%24%7Bprops.view%7D%60)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20playgroundNavigate%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Linking.openURL(%60https%3A%2F%2Freact-native-elements.js.org%2F%23%2F%24%7Bprops.view%7D%60)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaProvider%3E%0A%20%20%20%20%20%20%3CHeaderRNE%0A%20%20%20%20%20%20%20%20leftComponent%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20icon%3A%20'menu'%2C%0A%20%20%20%20%20%20%20%20%20%20color%3A%20'%23fff'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20rightComponent%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.headerRight%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7BdocsNavigate%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22description%22%20color%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20marginLeft%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7BplaygroundNavigate%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20type%3D%22antdesign%22%20name%3D%22rocket1%22%20color%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20centerComponent%3D%7B%7B%20text%3A%20'Header'%2C%20style%3A%20styles.heading%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FSafeAreaProvider%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20headerContainer%3A%20%7B%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20backgroundColor%3A%20'%23397af8'%2C%0A%20%20%20%20marginBottom%3A%2020%2C%0A%20%20%20%20width%3A%20'100%25'%2C%0A%20%20%20%20paddingVertical%3A%2015%2C%0A%20%20%7D%2C%0A%20%20heading%3A%20%7B%0A%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20fontSize%3A%2022%2C%0A%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%7D%2C%0A%20%20headerRight%3A%20%7B%0A%20%20%20%20display%3A%20'flex'%2C%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20marginTop%3A%205%2C%0A%20%20%7D%2C%0A%20%20subheaderText%3A%20%7B%0A%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20fontSize%3A%2016%2C%0A%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Header%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0}}]);