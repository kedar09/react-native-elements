(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{252:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,v=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?o.a.createElement(v,c(c({ref:t},l),{},{components:n})):o.a.createElement(v,c({ref:t},l))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(252)),i={id:"overview",title:"Overview"},c={unversionedId:"overview",id:"version-2.0.4/overview",isDocsHomePage:!1,title:"Overview",description:"This section of the documentation describes the props and examples for all the",source:"@site/versioned_docs/version-2.0.4/overview.md",permalink:"/react-native-elements/docs/overview",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-2.0.4/overview.md",version:"2.0.4",sidebar:"version-2.0.4/docs",previous:{title:"Getting Started",permalink:"/react-native-elements/docs/"},next:{title:"Customization",permalink:"/react-native-elements/docs/customization"}},s=[{value:"Using React Native Elements",id:"using-react-native-elements",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section of the documentation describes the props and examples for all the\ncomponents from React Native Elements. Please take some time and explore all of the components that are at your disposal!"),Object(a.b)("h2",{id:"using-react-native-elements"},"Using React Native Elements"),Object(a.b)("p",null,"The components in this library have a single theme running through them. From\none central location, we can update the colours used in all components. While\nthis was great for the developers of the library, the actual users also needed a\nway to use this feature."),Object(a.b)("p",null,"But why stop at colours? Why not allow the props of every component to be\ndefined in one central place? And so the idea behind theming with React Native\nElements was born!"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { Button, ThemeProvider } from 'react-native-elements';\n\nconst MyApp = () => {\n  return (\n    <ThemeProvider>\n      <Button title=\"Hey!\" />\n    </ThemeProvider>\n  );\n};\n")),Object(a.b)("p",null,"To customize the theme, or use it within your own components, be sure to check\nthe docs on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-elements/docs/customization"}),"Customization"),"."))}u.isMDXComponent=!0}}]);