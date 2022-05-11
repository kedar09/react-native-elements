"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67795],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return t?a.createElement(h,l(l({ref:n},m),{},{components:t})):a.createElement(h,l({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},41657:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l=["components"],i={title:"React Native Elements 4.0",authors:["arpitBhalla","rneui"]},p=void 0,s={permalink:"/blog/2022/05/15/rneui-migration-guide",source:"@site/blog/2022-05-15-rneui-migration-guide.md",title:"React Native Elements 4.0",description:"React Native Elements v4 introduces many features including few new components, fully typescript support and some breaking changes whose migration is being given below.",date:"2022-05-15T00:00:00.000Z",formattedDate:"May 15, 2022",tags:[],readingTime:2.965,truncated:!1,authors:[{name:"Arpit Bhalla",title:"GSoC'21 fellow",url:"https://github.com/arpitbhalla",email:"arpitbhallay@proton.me",twitter:"arpitbhalla_",imageURL:"https://github.com/arpitbhalla.png",key:"arpitBhalla"},{name:"RNE Core Team",title:"React Native Elements",url:"http://twitter.com/rn_elements/",imageURL:"https://github.com/rneui.png",key:"rneui"}],frontMatter:{title:"React Native Elements 4.0",authors:["arpitBhalla","rneui"]},nextItem:{title:"Google Summer of Code'21 Arpit Bhalla",permalink:"/blog/2021/08/23/google-summer-of-code-arpitBhalla"}},m={authorsImageUrls:[void 0,void 0]},u=[{value:"Core changes",id:"core-changes",level:2},{value:"Colors",id:"colors",level:3},{value:"Theme",id:"theme",level:3},{value:"Pressable",id:"pressable",level:3},{value:"Components",id:"components",level:2},{value:"<code>Button</code>",id:"button",level:3},{value:"<code>ThemeProvider</code>",id:"themeprovider",level:3},{value:"<code>Tooltip</code>",id:"tooltip",level:3}],c={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/img/website/seo.png"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{className:"admonition-content"},"React Native Elements v4 introduces many features including few new components, fully typescript support and some breaking changes whose migration is being given below.")),(0,o.kt)("h2",{id:"core-changes"},"Core changes"),(0,o.kt)("p",null,"To use the v4 version, you first need to update the package names:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- import {} from 'react-native-elements'\n+ import {} from '@rneui/themed'\n")),(0,o.kt)("p",null,"You can install the packages from npm or yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @rneui/base @rneui/themed\n\n# or with yarn\nyarn add @rneui/base @rneui/themed\n")),(0,o.kt)("p",null,"You can also make ",(0,o.kt)("inlineCode",{parentName:"p"},"alias")," for package to help you with migration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-elements@npm:@rneui/themed\n")),(0,o.kt)("h3",{id:"colors"},"Colors"),(0,o.kt)("p",null,"Added a new ",(0,o.kt)("inlineCode",{parentName:"p"},"background")," color to the ",(0,o.kt)("inlineCode",{parentName:"p"},"colors")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"const colors={\n  primary: '#2e7d32',\n  secondary: '#757575',\n+ background: '#ffffff',\n}\n")),(0,o.kt)("h3",{id:"theme"},"Theme"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"const theme:FullTheme={\n  colors:{},\n+ spacing:{}\n}\n")),(0,o.kt)("h3",{id:"pressable"},"Pressable"),(0,o.kt)("p",null,"These components are now using ",(0,o.kt)("inlineCode",{parentName:"p"},"Pressable")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"Touchable")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Avatar"),(0,o.kt)("li",{parentName:"ul"},"Badge"),(0,o.kt)("li",{parentName:"ul"},"ButtonGroup"),(0,o.kt)("li",{parentName:"ul"},"CheckBox"),(0,o.kt)("li",{parentName:"ul"},"Icon"),(0,o.kt)("li",{parentName:"ul"},"Image"),(0,o.kt)("li",{parentName:"ul"},"ListItem"),(0,o.kt)("li",{parentName:"ul"},"SearchBar"),(0,o.kt)("li",{parentName:"ul"},"SpeedDial"),(0,o.kt)("li",{parentName:"ul"},"Tile")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressable"},"Pressable")," is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.")),(0,o.kt)("p",null,"This change would let you use ",(0,o.kt)("inlineCode",{parentName:"p"},"onPressIn")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"onPressOut")," APIs in components, For example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'  <CheckBox\n    title="I agree"\n    onPress={()=>{}}\n    onLongPress={()=>{}}\n+   onPressIn={()=>{}}\n+   onPressOut={()=>{}}\n    onPress={() => {}}\n  />\n')),(0,o.kt)("p",null,"and the rest of props for ",(0,o.kt)("inlineCode",{parentName:"p"},"Pressable")," can be added via ",(0,o.kt)("inlineCode",{parentName:"p"},"pressableProps")," API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"  <ButtonGroup\n+   pressableProps={{android_ripple:{radius:2}}}\n  />\n")),(0,o.kt)("p",null,"few other props (like ",(0,o.kt)("inlineCode",{parentName:"p"},"underlayColor"),") will not be supported, you can remove them."),(0,o.kt)("h2",{id:"components"},"Components"),(0,o.kt)("h3",{id:"button"},(0,o.kt)("inlineCode",{parentName:"h3"},"Button")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"  <Button\n+  size='sm',\n+  radius='md'\n+  color='primary'\n-  title='Press me'\n-  />\n+  >\n+ Press me\n+ </Button>\n")),(0,o.kt)("h3",{id:"themeprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"ThemeProvider")),(0,o.kt)("p",null,"Please make sure that ",(0,o.kt)("inlineCode",{parentName:"p"},"ThemeProvider")," is defined at the root of your application (even if you are using the default theme) and ",(0,o.kt)("inlineCode",{parentName:"p"},"NO")," useStyles or useTheme is called before ",(0,o.kt)("inlineCode",{parentName:"p"},"<ThemeProvider>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- <ThemeProvider theme={myTheme} useDark={false}>\n+ <ThemeProvider theme={myTheme}>\n     <Button title="My Button" />\n   </ThemeProvider>\n')),(0,o.kt)("p",null,"Create custom theme using ",(0,o.kt)("inlineCode",{parentName:"p"},"createTheme")," helper"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- const myTheme: FullTheme = {\n+ const myTheme = createTheme({\n-  colors: {\n+  lightColors:{\n     primary: '#f2f2f2',\n   },\n+  darkColors: {\n+   primary: '#121212',\n+  },\n+  mode: 'dark',\n};\n")),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"useDark")," is deprecated, you can switch ",(0,o.kt)("inlineCode",{parentName:"p"},"dark")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"light")," themeColors using ",(0,o.kt)("inlineCode",{parentName:"p"},"updateTheme")," function which can be access from ",(0,o.kt)("inlineCode",{parentName:"p"},"useTheme")," hook."),(0,o.kt)("p",null,"Complete example of root of our application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeProvider, Button, createTheme } from '@rneui/themed';\n\nconst myTheme = createTheme({\n  lightColors: {\n    primary: '#f2f2f2',\n  },\n  darkColors: {\n    primary: '#121212',\n  },\n  mode: 'dark',\n});\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={myTheme}>\n      <Button title=\"My Button\" />\n    </ThemeProvider>\n  );\n};\n")),(0,o.kt)("p",null,"You can use props for components while defining themes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createTheme } from '@rneui/themed';\n\nconst myTheme = createTheme({\n  Button: (buttonProps) => ({\n    titleStyle: {\n      color: buttonProps.type === 'solid' ? 'blue' : 'red',\n    },\n  }),\n});\n")),(0,o.kt)("p",null,"Thus when we use ",(0,o.kt)("inlineCode",{parentName:"p"},"type='solid'")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," component, it will use ",(0,o.kt)("inlineCode",{parentName:"p"},"titleStyle"),' will have "blue" color.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<Button type='solid'>\n")),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/customization"},"Customization")," for more details."),(0,o.kt)("h3",{id:"tooltip"},(0,o.kt)("inlineCode",{parentName:"h3"},"Tooltip")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Tooltip")," is one of core component of RNE, Since v4 this component would be stateless and would use ",(0,o.kt)("inlineCode",{parentName:"p"},"visible"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onOpen")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"onClose")," Props for its working."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'  <Tooltip\n+   visible={open}\n+   onOpen={() => {\n+      setOpen(true);\n+   }}\n+   onClose={() => {\n+      setOpen(false);\n+   }}\n    popover="Hey All"\n  />\n')),(0,o.kt)("p",null,"You can still use Tooltip as stateful component by doing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const ControlledTooltip: React.FC<TooltipProps> = (props) => {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <Tooltip\n      visible={open}\n      onOpen={() => {\n        setOpen(true);\n      }}\n      onClose={() => {\n        setOpen(false);\n      }}\n      {...props}\n    />\n  );\n};\n")))}d.isMDXComponent=!0}}]);