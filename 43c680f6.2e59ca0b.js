(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(252)),c=n(254),b={id:"header",title:"Header"},i={unversionedId:"header",id:"version-0.19.1/header",isDocsHomePage:!1,title:"Header",description:"Headers are navigation components that display information and actions relating",source:"@site/versioned_docs/version-0.19.1/header.md",permalink:"/react-native-elements/docs/0.19.1/header",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-0.19.1/header.md",version:"0.19.1",sidebar:"version-0.19.1/docs",previous:{title:"Forms",permalink:"/react-native-elements/docs/0.19.1/forms"},next:{title:"Icon",permalink:"/react-native-elements/docs/0.19.1/icon"}},l=[{value:"Usage",id:"usage",children:[{value:"Default components",id:"default-components",children:[]},{value:"Custom components passed in through props",id:"custom-components-passed-in-through-props",children:[]},{value:"Mixed components",id:"mixed-components",children:[]},{value:"Custom components passed in as children",id:"custom-components-passed-in-as-children",children:[]}]},{value:"Component precedence",id:"component-precedence",children:[]},{value:"Header customisability",id:"header-customisability",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>statusBarProps</code>",id:"statusbarprops",children:[]},{value:"<code>leftComponent</code>",id:"leftcomponent",children:[]},{value:"<code>centerComponent</code>",id:"centercomponent",children:[]},{value:"<code>rightComponent</code>",id:"rightcomponent",children:[]},{value:"<code>backgroundColor</code>",id:"backgroundcolor",children:[]},{value:"<code>outerContainerStyles</code>",id:"outercontainerstyles",children:[]},{value:"<code>innerContainerStyles</code>",id:"innercontainerstyles",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Headers are navigation components that display information and actions relating\nto the current screen."),Object(o.b)("img",{alt:"Header",src:Object(c.a)("img/header.png")}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"default-components"},"Default components"),Object(o.b)("p",null,"For quick setup we provide default components, which are React Native Elements Icon for left/right buttons and React Native Text for title. You can customize them with configuration objects passed in as props."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"<Header\n  leftComponent={{ icon: 'menu', color: '#fff' }}\n  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}\n  rightComponent={{ icon: 'home', color: '#fff' }}\n/>\n")),Object(o.b)("h3",{id:"custom-components-passed-in-through-props"},"Custom components passed in through props"),Object(o.b)("p",null,"You can pass in your custom components like this too."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"<Header\n  leftComponent={<MyCustomLeftComponent />}\n  centerComponent={<MyCustomCenterComponent />}\n  rightComponent={<MyCustomRightComponent />}\n/>\n")),Object(o.b)("h3",{id:"mixed-components"},"Mixed components"),Object(o.b)("p",null,"You can also mix the content, for example you can have default components defined by configuration combined with custom components. Passing a render function that returns a React Element is valid too."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"<Header\n  leftComponent={<MyCustomLeftComponent />}\n  centerComponent={this.renderCenterComponent()}\n  rightComponent={{ icon: 'home', style: { color: '#fff' } }}\n/>\n")),Object(o.b)("h3",{id:"custom-components-passed-in-as-children"},"Custom components passed in as children"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"<Header>\n  <MyCustomLeftComponent />\n  <MyCustomCenterComponent />\n  <MyCustomRightComponent />\n</Header>\n")),Object(o.b)("h2",{id:"component-precedence"},"Component precedence"),Object(o.b)("p",null,"Components defined through props take precedence over components passed in as children, so in this case only the left component with icon set to menu will be rendered."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"<Header leftComponent={{ icon: 'menu' }}>\n  <MyCustomLeftComponent />\n  <MyCustomCenterComponent />\n  <MyCustomRightComponent />\n</Header>\n")),Object(o.b)("h2",{id:"header-customisability"},"Header customisability"),Object(o.b)("p",null,"We wanted the Header to be as customisable as possible, so you are free to try different combinations of props. For example, if you want to change the left, center, or right component's layout, you can adjust the ",Object(o.b)("inlineCode",{parentName:"p"},"innerContainerStyles")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"<Header\n  statusBarProps={{ barStyle: 'light-content' }}\n  leftComponent={<MyCustomLeftComponent />}\n  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}\n  outerContainerStyles={{ backgroundColor: '#3D6DCC' }}\n  innerContainerStyles={{ justifyContent: 'space-around' }}\n/>\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#statusbarprops"}),Object(o.b)("inlineCode",{parentName:"a"},"statusBarProps"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#leftcomponent"}),Object(o.b)("inlineCode",{parentName:"a"},"leftComponent"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#centercomponent"}),Object(o.b)("inlineCode",{parentName:"a"},"centerComponent"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#rightcomponent"}),Object(o.b)("inlineCode",{parentName:"a"},"rightComponent"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#backgroundcolor"}),Object(o.b)("inlineCode",{parentName:"a"},"backgroundColor"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#outercontainerstyles"}),Object(o.b)("inlineCode",{parentName:"a"},"outerContainerStyles"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#innercontainerstyles"}),Object(o.b)("inlineCode",{parentName:"a"},"innerContainerStyles")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"reference"},"Reference"),Object(o.b)("h3",{id:"statusbarprops"},Object(o.b)("inlineCode",{parentName:"h3"},"statusBarProps")),Object(o.b)("p",null,"accepts all props for StatusBar"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"object (props)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"none")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"leftcomponent"},Object(o.b)("inlineCode",{parentName:"h3"},"leftComponent")),Object(o.b)("p",null,"define your left component here"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"configuration object for default component (icon: string, ...props for React Native Elements Icon) or a valid React Element"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"none")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"centercomponent"},Object(o.b)("inlineCode",{parentName:"h3"},"centerComponent")),Object(o.b)("p",null,"define your center component here"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"configuration object for default component (text: string, ...props for React Native Text component) valid React Element"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"none")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"rightcomponent"},Object(o.b)("inlineCode",{parentName:"h3"},"rightComponent")),Object(o.b)("p",null,"define your right component here"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"configuration object for default component (icon: string, ...props for React Native Elements Icon component) or a valid React Element"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"none")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"backgroundcolor"},Object(o.b)("inlineCode",{parentName:"h3"},"backgroundColor")),Object(o.b)("p",null,"sets backgroundColor of the parent component"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"string"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"none")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"outercontainerstyles"},Object(o.b)("inlineCode",{parentName:"h3"},"outerContainerStyles")),Object(o.b)("p",null,"styling for outer container"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/react-native-elements/react-native-elements/blob/1f06e20e7742b87be696cf3921979afdfdd87315/src/header/Header.js#L91"}),"source"))))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"innercontainerstyles"},Object(o.b)("inlineCode",{parentName:"h3"},"innerContainerStyles")),Object(o.b)("p",null,"styling for inner container"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/react-native-elements/react-native-elements/blob/1f06e20e7742b87be696cf3921979afdfdd87315/src/header/Header.js#L85"}),"source"))))))}s.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,u=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?a.a.createElement(u,b(b({ref:t},l),{},{components:n})):a.a.createElement(u,b({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},253:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},254:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(253),a=n(255);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,b=void 0!==c&&c,i=o.absolute,l=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(b)return t+n;var p=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+p:p}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},255:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);