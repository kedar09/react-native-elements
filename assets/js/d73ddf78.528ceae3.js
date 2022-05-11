"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67172],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,v=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72360:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(86010);const a="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),o=n(67294),a=n(72389),i=n(67392),l=n(7094),c=n(12466),s=n(86010);const u="tabList_uSqn",p="tabItem_LplD";function m(e){var t,n,a,m=e.lazy,d=e.block,v=e.defaultValue,f=e.values,h=e.groupId,b=e.className,y=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===v?v:null!=(t=null!=v?v:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=y[0])?void 0:a.props.value;if(null!==x&&!k.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),O=w.tabGroupChoices,N=w.setTabGroupChoices,E=(0,o.useState)(x),T=E[0],C=E[1],I=[],j=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var _=O[h];null!=_&&_!==T&&k.some((function(e){return e.value===_}))&&C(_)}var P=function(e){var t=e.currentTarget,n=I.indexOf(t),r=k[n].value;r!==T&&(j(t),C(r),null!=h&&N(h,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;n=I[r]||I[0];break;case"ArrowLeft":var o=I.indexOf(e.currentTarget)-1;n=I[o]||I[I.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},b)},k.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return I.push(e)},onKeyDown:D,onFocus:P,onClick:P},a,{className:(0,s.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),m?(0,o.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,a.Z)();return o.createElement(m,(0,r.Z)({key:String(t)},e))}},88044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=(n(9877),n(72360),n(67711),["components"]),l={id:"listitem_checkbox",title:"ListItem.CheckBox"},c=void 0,s={unversionedId:"components/listitem_checkbox",id:"version-4.0.0-rc.2/components/listitem_checkbox",title:"ListItem.CheckBox",description:"This allows adding CheckBox to the ListItem.",source:"@site/versioned_docs/version-4.0.0-rc.2/components/ListItem.CheckBox.mdx",sourceDirName:"components",slug:"/components/listitem_checkbox",permalink:"/docs/4.0.0-rc.2/components/listitem_checkbox",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/components/ListItem.CheckBox.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"listitem_checkbox",title:"ListItem.CheckBox"},sidebar:"docs",previous:{title:"ListItem.ButtonGroup",permalink:"/docs/4.0.0-rc.2/components/listitem_buttongroup"},next:{title:"ListItem.Chevron",permalink:"/docs/4.0.0-rc.2/components/listitem_chevron"}},u={},p=[{value:"Props",id:"props",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This allows adding CheckBox to the ListItem.\nThis, Receives all ",(0,a.kt)("a",{parentName:"p",href:"checkbox#props"},"CheckBox")," props."),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Includes all ",(0,a.kt)("a",{parentName:"p",href:"checkbox#props"},"CheckBox")," props."))))}d.isMDXComponent=!0}}]);