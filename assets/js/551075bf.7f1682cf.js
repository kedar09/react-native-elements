"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),p=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,y=u["".concat(a,".").concat(d)]||u[d]||l[d]||i;return n?o.createElement(y,s(s({ref:t},c),{},{components:n})):o.createElement(y,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var m={};for(var a in t)hasOwnProperty.call(t,a)&&(m[a]=t[a]);m.originalType=e,m.mdxType="string"==typeof e?e:r,s[1]=m;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>m,metadata:()=>p,toc:()=>l});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],m={title:"Components",sidebar_position:3},a=void 0,p={unversionedId:"customization/components",id:"version-4.0.0-rc.2/customization/components",title:"Components",description:"Using the theme in your own components",source:"@site/versioned_docs/version-4.0.0-rc.2/customization/components.mdx",sourceDirName:"customization",slug:"/customization/components",permalink:"/docs/4.0.0-rc.2/customization/components",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/customization/components.mdx",tags:[],version:"4.0.0-rc.2",sidebarPosition:3,frontMatter:{title:"Components",sidebar_position:3},sidebar:"docs",previous:{title:"ThemeProvider",permalink:"/docs/4.0.0-rc.2/customization/theming"},next:{title:"Common Pitfalls",permalink:"/docs/4.0.0-rc.2/customization/pitfall"}},c={},l=[{value:"Using the theme in your own components",id:"using-the-theme-in-your-own-components",level:3}],u={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"using-the-theme-in-your-own-components"},"Using the theme in your own components"),(0,i.kt)("p",null,"You may want to make use of the theming utilities in your own components. For this you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"withTheme")," HOC exported from this library. It adds three props to the component it wraps - theme, updateTheme and replaceTheme."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title='MyComponent.tsx'",title:"'MyComponent.tsx'"},"import { Button, createTheme, withTheme } from '@rneui/themed';\n\ntype MyCustomComponentProps = {\n  title: string;\n  titleStyle: StyleProps<TextStyle>;\n};\n\nexport const MyCustomComponent = withTheme<MyCustomComponentProps>((props) => {\n  // Access theme from props\n  const { theme, updateTheme, replaceTheme } = props;\n  // ...\n});\n\ndeclare module '@rneui/themed' {\n  export interface FullTheme {\n    MyCustomComponent: Partial<MyCustomComponentProps>;\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title='App.tsx'",title:"'App.tsx'"},"import { ThemeProvider, createTheme } from '@rneui/themed';\n\nconst myTheme = createTheme({\n  MyCustomComponent: {\n    titleStyle: {\n      color: 'red',\n    },\n  },\n});\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={myTheme}>\n      <MyCustomComponent title=\"My Component\" />\n    </ThemeProvider>\n  );\n};\n")))}d.isMDXComponent=!0}}]);