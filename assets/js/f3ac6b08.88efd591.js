"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83369],{51010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),l=r(51402),o=["components"],c={id:"card",title:"Card"},d=void 0,p={unversionedId:"card",id:"version-2.3.2/card",title:"Card",description:"Cards are a great way to display information, usually containing content and",source:"@site/versioned_docs/version-2.3.2/card.md",sourceDirName:".",slug:"/card",permalink:"/docs/2.3.2/card",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-2.3.2/card.md",tags:[],version:"2.3.2",frontMatter:{id:"card",title:"Card"},sidebar:"version-2.3.2/docs",previous:{title:"ButtonGroup",permalink:"/docs/2.3.2/button_group"},next:{title:"CheckBox",permalink:"/docs/2.3.2/checkbox"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Child Components",id:"child-components",level:2},{value:"Card.Divider",id:"carddivider",level:3},{value:"Card.Title",id:"cardtitle",level:3},{value:"Card.Image",id:"cardimage",level:3},{value:"Card.FeaturedTitle",id:"cardfeaturedtitle",level:3},{value:"Card.FeaturedSubtitle",id:"cardfeaturedsubtitle",level:3},{value:"Reference",id:"reference",level:2},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>wrapperStyle</code>",id:"wrapperstyle",level:3}],m={toc:u};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cards are a great way to display information, usually containing content and\nactions about a single subject. Cards can contain images, buttons, text and\nmore."),(0,i.kt)("img",{alt:"Card Component",src:(0,l.Z)("img/card.png")}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const users = [\n {\n    name: 'brynn',\n    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'\n },\n ... // more users here\n]\n\nimport { View, Text, Image } from 'react-native'\nimport { Card, ListItem, Button, Icon } from 'react-native-elements'\n\n// implemented without image with header\n<Card>\n  <Card.Title>CARD WITH DIVIDER</Card.Title>\n  <Card.Divider/>\n  {\n    users.map((u, i) => {\n      return (\n        <View key={i} style={styles.user}>\n          <Image\n            style={styles.image}\n            resizeMode=\"cover\"\n            source={{ uri: u.avatar }}\n          />\n          <Text style={styles.name}>{u.name}</Text>\n        </View>\n      );\n    })\n  }\n</Card>\n\n// implemented without image without header, using ListItem component\n <Card containerStyle={{padding: 0}} >\n  {\n    users.map((u, i) => {\n      return (\n        <ListItem\n          key={i}\n          roundAvatar\n          title={u.name}\n          leftAvatar={{ source: { uri: u.avatar } }}\n        />\n      );\n    })\n  }\n</Card>\n\n\n// implemented with Text and Button as children\n<Card>\n  <Card.Title>HELLO WORLD</Card.Title>\n  <Card.Divider/>\n  <Card.Image source={require('../images/pic2.jpg')} />\n  <Text style={{marginBottom: 10}}>\n      The idea with React Native Elements is more about component structure than actual design.\n  </Text>\n  <Button\n    icon={<Icon name='code' color='#ffffff' />}\n    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}\n    title='VIEW NOW' />\n</Card>\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#containerstyle"},(0,i.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#wrapperstyle"},(0,i.kt)("inlineCode",{parentName:"a"},"wrapperStyle")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"child-components"},"Child Components"),(0,i.kt)("h3",{id:"carddivider"},"Card.Divider"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Receives all ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.3.2/divider#props"},"Divider")," props.")),(0,i.kt)("h3",{id:"cardtitle"},"Card.Title"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Receives all ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.3.2/text#props"},"Text")," props.")),(0,i.kt)("h3",{id:"cardimage"},"Card.Image"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Receives all ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.3.2/image#props"},"Image")," props.")),(0,i.kt)("h3",{id:"cardfeaturedtitle"},"Card.FeaturedTitle"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Receives all ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.3.2/text#props"},"Text")," props.")),(0,i.kt)("h3",{id:"cardfeaturedsubtitle"},"Card.FeaturedSubtitle"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Receives all ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.3.2/text#props"},"Text")," props.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("h3",{id:"containerstyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,i.kt)("p",null,"outer container style (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"wrapperstyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"wrapperStyle")),(0,i.kt)("p",null,"inner container style (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"none")))))}k.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,k=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);