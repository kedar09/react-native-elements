"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90993],{40959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>y,frontMatter:()=>m,metadata:()=>u,toc:()=>h});var r=n(83117),o=n(80102),a=n(67294),i=n(3905),l={primary:"#2089dc",secondary:"#ca71eb",background:"#ffffff",white:"#ffffff",black:"#242424",grey0:"#393e42",grey1:"#43484d",grey2:"#5e6977",grey3:"#86939e",grey4:"#bdc6cf",grey5:"#e1e8ee",greyOutline:"#bbb",searchBg:"#303337",success:"#52c41a",error:"#ff190c",warning:"#faad14",disabled:"hsl(208, 8%, 90%)"},c=function(){return a.createElement("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"}},Object.entries(l).map((function(e){var t=e[0],n=e[1];return a.createElement("div",null,a.createElement("div",{style:{background:n,width:"80px",height:"70px",display:"block",borderRadius:"6px"}}),a.createElement("small",null,t))})))},s=["components"],m={title:"Color",sidebar_position:1},p=void 0,u={unversionedId:"customization/color",id:"customization/color",title:"Color",description:"The Theme Object",source:"@site/docs/customization/color.mdx",sourceDirName:"customization",slug:"/customization/color",permalink:"/docs/next/customization/color",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/customization/color.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Color",sidebar_position:1},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/customizing"},next:{title:"ThemeProvider",permalink:"/docs/next/customization/theming"}},d={},h=[{value:"The Theme Object",id:"the-theme-object",level:3},{value:"Using the respective platform&#39;s native colors",id:"using-the-respective-platforms-native-colors",level:3}],f={toc:h};function y(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"the-theme-object"},"The Theme Object"),(0,i.kt)("p",null,"By default, the theme object looks like this. You can add whatever values you\nwant to the theme, and they will be merged with the default. By default the\nplatform colors aren't used anywhere. These native colors are added for\nyour convenience."),(0,i.kt)(c,{mdxType:"Palette"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"interface theme {\n  colors: {\n    primary;\n    secondary;\n    background;\n    white;\n    black;\n    grey0;\n    grey1;\n    grey2;\n    grey3;\n    grey4;\n    grey5;\n    greyOutline;\n    searchBg;\n    success;\n    error;\n    warning;\n    divider;\n    platform: {\n      ios: {\n        primary;\n        secondary;\n        grey;\n        searchBg;\n        success;\n        error;\n        warning;\n      };\n      android: {\n        // Same as ios\n      };\n      web: {\n        // Same as ios\n      };\n    };\n  };\n}\n")),(0,i.kt)("p",null,"Setting styles in the theme is as simple as using the name of the component, as\na key and the props you want to change as the value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeProvider, createTheme } from '@rneui/themed';\n\nconst theme = createTheme({\n  lightColors: {\n    primary: '#e7e7e8',\n  },\n  darkColors: {\n    primary: '#000',\n  },\n});\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      {/* ... */}\n      {/* ... */}\n    </ThemeProvider>\n  );\n};\n")),(0,i.kt)("h3",{id:"using-the-respective-platforms-native-colors"},"Using the respective platform's native colors"),(0,i.kt)("p",null,"You may want to style your app using the native color palette. You can do this\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"colors")," object and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Platform")," API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Platform } from 'react-native';\nimport { Button, lightColors, createTheme, ThemeProvider } from '@rneui/themed';\n\nconst theme = createTheme({\n  lightColors: {\n    ...Platform.select({\n      default: lightColors.platform.android,\n      ios: lightColors.platform.ios,\n    }),\n  },\n});\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      {/* This button's color will now be the default iOS / Android blue. */}\n      <Button title=\"My Button\" />\n    </ThemeProvider>\n  );\n};\n")),(0,i.kt)("hr",null))}y.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);