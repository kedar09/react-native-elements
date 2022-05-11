"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46103],{4118:(e,t,n)=>{n.d(t,{Z:()=>Z});var a=n(63366),r=n(67294),l=n(86010),i=n(6998),o=n(39960),c=n(95999);const s="sidebar_TMXw",m="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",d="sidebarItem_spIe",v="sidebarItemLink_eqrF",g="sidebarItemLinkActive_XZSJ";function f(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:v,activeClassName:g},e.title))})))))}var p=n(13102);function h(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function E(e){return r.createElement(p.Zo,{component:h,props:e})}var b=n(87524);function N(e){var t=e.sidebar,n=(0,b.i)();return null!=t&&t.items.length?"mobile"===n?r.createElement(E,{sidebar:t}):r.createElement(f,{sidebar:t}):null}var _=["sidebar","toc","children"];function Z(e){var t=e.sidebar,n=e.toc,o=e.children,c=(0,a.Z)(e,_),s=t&&t.items.length>0;return r.createElement(i.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(N,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&r.createElement("div",{className:"col col--2"},n))))}},26244:(e,t,n)=>{n.d(t,{Z:()=>Z});var a=n(67294),r=n(86010),l=n(95999),i=n(39960),o=n(44996),c=n(88824),s=n(18780),m=n(16810),u=n(86753);const d="blogPostTitle_rzP5",v="blogPostData_Zg1s",g="blogPostDetailsFull_h6_j";var f=n(20062);function p(e){return e.href?a.createElement(i.Z,e):a.createElement(a.Fragment,null,e.children)}function h(e){var t=e.author,n=t.name,r=t.title,l=t.url,i=t.imageURL,o=t.email,c=l||o&&"mailto:"+o||void 0;return a.createElement("div",{className:"avatar margin-bottom--sm"},i&&a.createElement(p,{href:c,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:i,alt:n})),n&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(p,{href:c,itemProp:"url"},a.createElement("span",{itemProp:"name"},n))),r&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const E="authorCol_FlmR",b="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function _(e){var t=e.authors,n=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return a.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",l?b:"row")},t.map((function(e,t){var i;return a.createElement("div",{className:(0,r.Z)(!l&&"col col--6",l?N:E),key:t},a.createElement(h,{author:Object.assign({},e,{imageURL:null!=(i=n.authorsImageUrls[t])?i:e.imageURL})}))})))}function Z(e){var t,n,p=(n=(0,c.c)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=(0,o.C)().withBaseUrl,E=e.children,b=e.frontMatter,N=e.assets,Z=e.metadata,L=e.truncated,k=e.isBlogPostPage,y=void 0!==k&&k,C=Z.date,P=Z.formattedDate,x=Z.permalink,I=Z.tags,H=Z.readingTime,w=Z.title,T=Z.editUrl,A=Z.authors,F=null!=(t=N.image)?t:b.image,O=!y&&L,M=I.length>0,R=y?"h1":"h2";return a.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},a.createElement("header",null,a.createElement(R,{className:d,itemProp:"headline"},y?w:a.createElement(i.Z,{itemProp:"url",to:x},w)),a.createElement("div",{className:(0,r.Z)(v,"margin-vert--md")},a.createElement("time",{dateTime:C,itemProp:"datePublished"},P),void 0!==H&&a.createElement(a.Fragment,null," \xb7 ",p(H))),a.createElement(_,{authors:A,assets:N})),F&&a.createElement("meta",{itemProp:"image",content:h(F,{absolute:!0})}),a.createElement("div",{id:y?s.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},a.createElement(m.Z,null,E)),(M||L)&&a.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",y&&g)},M&&a.createElement("div",{className:(0,r.Z)("col",{"col--9":O})},a.createElement(f.Z,{tags:I})),y&&T&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(u.Z,{editUrl:T})),O&&a.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":M})},a.createElement(i.Z,{to:Z.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:w})},a.createElement("b",null,a.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},39360:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(67294),r=n(4118),l=n(26244),i=n(87462),o=n(95999),c=n(71750);function s(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(c.Z,(0,i.Z)({},n,{subLabel:a.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(c.Z,(0,i.Z)({},t,{subLabel:a.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var m=n(10833),u=n(35281),d=n(51575),v=n(86010);function g(e){var t,n=e.content,r=n.assets,l=n.metadata,i=l.title,o=l.description,c=l.date,s=l.tags,u=l.authors,d=l.frontMatter,v=d.keywords,g=null!=(t=r.image)?t:d.image;return a.createElement(m.d,{title:i,description:o,keywords:v,image:g},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:c}),u.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((function(e){return e.label})).join(",")}))}function f(e){var t=e.content,n=e.sidebar,i=t.assets,o=t.metadata,c=o.nextItem,m=o.prevItem,u=o.frontMatter,v=u.hide_table_of_contents,g=u.toc_min_heading_level,f=u.toc_max_heading_level;return a.createElement(r.Z,{sidebar:n,toc:!v&&t.toc&&t.toc.length>0?a.createElement(d.Z,{toc:t.toc,minHeadingLevel:g,maxHeadingLevel:f}):void 0},a.createElement(l.Z,{frontMatter:u,assets:i,metadata:o,isBlogPostPage:!0},a.createElement(t,null)),(c||m)&&a.createElement(s,{nextItem:c,prevItem:m}))}function p(e){return a.createElement(m.FG,{className:(0,v.Z)(u.k.wrapper.blogPages,u.k.page.blogPostPage)},a.createElement(g,e),a.createElement(f,e))}},51575:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(63366),l=n(67294),i=n(86010),o=n(90721);const c="tableOfContents_cNA8";var s=["className"];function m(e){var t=e.className,n=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},90721:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),r=n(63366),l=n(67294);function i(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}const o=l.memo(i);var c=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,c);n>=0?t[n].children.push(l):a.push(l)})),a}function m(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=m({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}var u=n(86668);function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function v(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function g(){var e=(0,l.useRef)(0),t=(0,u.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function f(e){var t=(0,l.useRef)(void 0),n=g();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=v(o,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,i=void 0===n?"table-of-contents table-of-contents__left-border":n,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,v=e.linkActiveClassName,g=void 0===v?void 0:v,h=e.minHeadingLevel,E=e.maxHeadingLevel,b=(0,r.Z)(e,p),N=(0,u.L)(),_=null!=h?h:N.tableOfContents.minHeadingLevel,Z=null!=E?E:N.tableOfContents.maxHeadingLevel,L=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return m({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:_,maxHeadingLevel:Z});return f((0,l.useMemo)((function(){if(d&&g)return{linkClassName:d,linkActiveClassName:g,minHeadingLevel:_,maxHeadingLevel:Z}}),[d,g,_,Z])),l.createElement(o,(0,a.Z)({toc:L,className:i,linkClassName:d},b))}},88824:(e,t,n)=>{n.d(t,{c:()=>s});var a=n(67294),r=n(52263),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,r.Z)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:i(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),o}var t,n}),[e])}function s(){var e=c();return{selectMessage:function(t,n){return function(e,t,n){var a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms+"), but the message contains "+a.length+": "+e);var r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}}},22365:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(87462),r=n(63366),l=n(67294),i=n(10407),o=n(86010),c=n(95999),s=n(52263),m=n(91262),u=n(66412);const d="playgroundContainer_TGbA",v="playgroundHeader_qwyd",g="playgroundEditor_PvJ1",f="playgroundPreview_bb8I",p="toggleIcon_OnrQ";var h=n(72389),E=n(5434),b=["children","transformCode"];function N(e){var t=e.children;return l.createElement("div",{className:(0,o.Z)(v)},t)}function _(){return l.createElement("div",null,"Loading...")}function Z(){var e=(0,h.Z)();return l.createElement(i.uz,{key:String(e),className:g})}function L(){var e=l.useState(!1),t=e[0],n=e[1],a=function(){n((function(e){return!e}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:f},l.createElement(m.Z,{fallback:l.createElement(_,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(i.i5,null),l.createElement(i.IF,null),l.createElement("div",{className:(0,o.Z)(p)},l.createElement(E.xoN,{onClick:a})," "))}))),t&&l.createElement(l.Fragment,null," ",l.createElement(N,null,l.createElement(c.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),l.createElement(Z,null)))}function k(e){var t=e.children,n=e.transformCode,o=(0,r.Z)(e,b),c=((0,s.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,u.p)());return l.createElement("div",{className:d},l.createElement(i.nu,(0,a.Z)({code:t.replace(/\n$/,""),transformCode:n||function(e){return e},theme:c},o),l.createElement(l.Fragment,null,l.createElement(L,null))))}},56922:(e,t,n)=>{n.d(t,{Z:()=>u});var a,r=n(81880),l=n(67294),i=n(20750),o=n(67711),c=n(79527),s=n(97288),m=n(83279);console.log(c.Button),(0,i.info)(a||(a=(0,r.Z)(["YO"])));const u=Object.assign({React:l,LinearGradient:m.Z},o,c,s,l)}}]);