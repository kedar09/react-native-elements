"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12850],{84897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),s=["components"],i={id:"testing",title:"Testing"},p=void 0,u={unversionedId:"testing",id:"version-1.2.0/testing",title:"Testing",description:"We are using tests to make sure components keep their functionality between versions and edits.",source:"@site/versioned_docs/version-1.2.0/testing.md",sourceDirName:".",slug:"/testing",permalink:"/docs/1.2.0/testing",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-1.2.0/testing.md",tags:[],version:"1.2.0",frontMatter:{id:"testing",title:"Testing"},sidebar:"version-1.2.0/docs",previous:{title:"Contributing",permalink:"/docs/1.2.0/contributing"},next:{title:"Label Guide",permalink:"/docs/1.2.0/labels"}},l={},c=[{value:"Snapshot Testing",id:"snapshot-testing",level:2},{value:"Functional Testing",id:"functional-testing",level:2}],h={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are using tests to make sure components keep their functionality between versions and edits.\nThey're many testing libraries for JavaScript and React Native, depending on what type of testing you're doing."),(0,a.kt)("p",null,"The type of tests we use on React Native Elements are ",(0,a.kt)("a",{parentName:"p",href:"#snapshot-testing"},"Snapshot"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"#functional-testing"},"Functional")," tests."),(0,a.kt)("h2",{id:"snapshot-testing"},"Snapshot Testing"),(0,a.kt)("p",null,"Snapshot testing sounds exactly like what it does! It takes snapshot of the structure of a rendered\ncomponent the props, and their values and saves it. Whenever a change is made it'll compare it to the original snapshot -\njust to be super sure the change you wanted to make had the desired outcome.\nIf the outcomes is what you expected, then you need to ",(0,a.kt)("strong",{parentName:"p"},"update the snapshot"),", so that your changes will be the new\nstandard to compare to for changes in the future."),(0,a.kt)("p",null,"To update the snapshots run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn test -u\n\n# npm\nnpm run test -u\n")),(0,a.kt)("p",null,"For Snapshot Testing, we use ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest"),"."),(0,a.kt)("p",null,"You can read more about snapshot testing ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/snapshot-testing.html"},"here"),"."),(0,a.kt)("h2",{id:"functional-testing"},"Functional Testing"),(0,a.kt)("p",null,"Functional tests ensures that a component functions the way it should(",(0,a.kt)("em",{parentName:"p"},"simplified"),"). This is important\nfor making changes to components, as it makes sure we don't break how something worked previously."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"If a user touches on a button in the button group, then the button selected should be highlighted\nand the previous one un-highlighted.\n")),(0,a.kt)("p",null,"For Functional Testing, we use ",(0,a.kt)("a",{parentName:"p",href:"http://airbnb.io/enzyme/"},"Enzyme"),"."),(0,a.kt)("p",null,"You can read more about functional testing ",(0,a.kt)("a",{parentName:"p",href:"https://www.guru99.com/functional-testing.html"},"here"),"."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(p,".").concat(d)]||h[d]||c[d]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);