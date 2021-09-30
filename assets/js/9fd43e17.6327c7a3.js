"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),v=r,m=d["".concat(c,".").concat(v)]||d[v]||u[v]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>r})},4996:(e,t,n)=>{n.d(t,{C:()=>i,Z:()=>o});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+p:p}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},9598:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>v});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=n(4996),l=["components"],c={id:"getting_started",title:"Getting Started",sidebar_label:"Getting Started"},s=void 0,p={unversionedId:"getting_started",id:"version-1.2.0/getting_started",isDocsHomePage:!0,title:"Getting Started",description:"The aim of React Native Elements is to provide an all-in-one UI kit for creating",source:"@site/versioned_docs/version-1.2.0/getting_started.md",sourceDirName:".",slug:"/",permalink:"/docs/1.2.0/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-1.2.0/getting_started.md",version:"1.2.0",frontMatter:{id:"getting_started",title:"Getting Started",sidebar_label:"Getting Started"},sidebar:"version-1.2.0/docs",next:{title:"Overview",permalink:"/docs/1.2.0/overview"}},u=[{value:"Installation",id:"installation",children:[{value:"Step 1: Install react-native-elements",id:"step-1-install-react-native-elements",children:[]},{value:"Step 2: Install react-native-vector-icons",id:"step-2-install-react-native-vector-icons",children:[]}]}],d={toc:u};function v(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The aim of React Native Elements is to provide an all-in-one UI kit for creating\napps in react native. There are many great ui components made by developers all\naround open source. React Native Elements takes the hassle of assembling these\npackages together by giving you a ready made kit with consistent api and look\nand feel."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Installing React Native Elements depends on your type of react native project."),(0,i.kt)("div",{class:"toggler"},(0,i.kt)("ul",{role:"tablist"},(0,i.kt)("li",{id:"expo",class:"button-expo","aria-selected":"false",role:"tab",tabindex:"0","aria-controls":"expo",onclick:"displayTab('expo')"},"Expo | Create React Native App"),(0,i.kt)("li",{id:"native",class:"button-native","aria-selected":"false",role:"tab",tabindex:"-1","aria-controls":"nativetab",onclick:"displayTab('native')"},"React Native CLI"))),(0,i.kt)("block",{class:"expo"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://expo.io"},"Expo")," or\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-community/create-react-native-app"},"create-react-native-app"),"\nprojects include ",(0,i.kt)("strong",{parentName:"p"},"react-native-vector-icons")," out of the box, so all you need\nto do is install ",(0,i.kt)("strong",{parentName:"p"},"react-native-elements"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add react-native-elements\n# or with npm\nnpm install react-native-elements\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," If you see the ",(0,i.kt)("inlineCode",{parentName:"p"},"UNMET PEER DEPENDENCY")," warning for\n",(0,i.kt)("strong",{parentName:"p"},"react-native-vector-icons")," like below, you can ignore it as\n",(0,i.kt)("em",{parentName:"p"},"react-native-vector-icons")," is already installed by ",(0,i.kt)("em",{parentName:"p"},"expo")," or ",(0,i.kt)("em",{parentName:"p"},"crna"),"."),(0,i.kt)("img",{alt:"React Native Vector Icons Unmet Peer Dependency",src:(0,o.Z)("img/peer-dep-error.png")})),(0,i.kt)("block",{class:"native"}),(0,i.kt)("p",null,"If your project is a standard React Native project created using\n",(0,i.kt)("inlineCode",{parentName:"p"},"react-native init")," (it should have an ios/android directory), then follow these\ninstallation instructions:"),(0,i.kt)("h3",{id:"step-1-install-react-native-elements"},"Step 1: Install react-native-elements"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add react-native-elements\n# or with npm\nnpm i react-native-elements --save\n")),(0,i.kt)("h3",{id:"step-2-install-react-native-vector-icons"},"Step 2: Install react-native-vector-icons"),(0,i.kt)("p",null,"If you have already installed ",(0,i.kt)("strong",{parentName:"p"},"react-native-vector-icons")," as a dependency for\nyour project you can skip this step. Otherwise run the following command:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Manual linking of react-native-vector-icons is not necessary if you're using ",(0,i.kt)("a",{parentName:"em",href:"mailto:react-native@0.60.0"},"react-native@0.60.0")," or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run ",(0,i.kt)("inlineCode",{parentName:"em"},"react-native unlink react-native-vector-icons")," and the process will run as expected."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# yarn\nyarn add react-native-vector-icons\n# or with npm\nnpm i --save react-native-vector-icons\n\n# link\nreact-native link react-native-vector-icons\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If you have any issues installing react-native-vector-icons, check out their\ninstallation guide\n",(0,i.kt)("a",{parentName:"em",href:"https://github.com/oblador/react-native-vector-icons#installation"},"here")," or\ndebug it using\n",(0,i.kt)("a",{parentName:"em",href:"https://github.com/react-native-elements/react-native-elements/issues/503"},"this issue"),".")))}v.isMDXComponent=!0}}]);