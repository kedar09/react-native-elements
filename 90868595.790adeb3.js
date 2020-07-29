(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{168:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),c=(r(0),r(252)),i={id:"divider",title:"Divider"},o={unversionedId:"divider",id:"divider",isDocsHomePage:!1,title:"Divider",description:"Dividers are visual separators of content. Use Divider when you want to make a",source:"@site/docs/divider.md",permalink:"/react-native-elements/docs/next/divider",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/divider.md",version:"next",sidebar:"docs",previous:{title:"CheckBox",permalink:"/react-native-elements/docs/next/checkbox"},next:{title:"Header",permalink:"/react-native-elements/docs/next/header"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>style</code>",id:"style",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Dividers are visual separators of content. Use Divider when you want to make a\ndistinction between sections of content."),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { Divider } from 'react-native-elements';\n\n<Divider style={{ backgroundColor: 'blue' }} />;\n")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Also receives all\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/view#props"}),"View")," props")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#style"}),Object(c.b)("inlineCode",{parentName:"a"},"style")))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"reference"},"Reference"),Object(c.b)("h3",{id:"style"},Object(c.b)("inlineCode",{parentName:"h3"},"style")),Object(c.b)("p",null,"Style of the divider"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"style object"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{height: 1, backgroundColor: #e1e8ee}")))))}p.isMDXComponent=!0},252:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||c;return r?a.a.createElement(m,o(o({ref:t},b),{},{components:r})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);