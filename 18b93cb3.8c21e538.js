(window.webpackJsonp=window.webpackJsonp||[]).push([[20,180],{265:function(e){e.exports=JSON.parse('["2.0.4","1.2.0","1.1.0","1.0.0","0.19.1"]')},72:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(258),s=n(253),c=n(254),i=n(265),o=function(e){var t=e.version,n="next"===t?"Next":t,a=i[0]===t,r="next"===t,s=l.a.createElement("a",{href:e.baseUrl+"docs/"+(a?"":t+"/")+"overview"},"Components"),c=r?null:l.a.createElement("a",{href:"https://github.com/react-native-elements/react-native-elements/releases/tag/v"+t},"Release Notes");return l.a.createElement("tr",null,l.a.createElement("th",null,n),l.a.createElement("td",null,s),l.a.createElement("td",null,c))};function m(e){return i[0]===e?Object(c.a)("docs/overview"):Object(c.a)("docs/"+e+"/overview")}var u=function(e){var t=e.version;return l.a.createElement("a",{href:"https://github.com/react-native-elements/react-native-elements/releases/tag/v"+t,target:"_blank"},"Release Notes")},E=function(e){var t=e.version;return l.a.createElement("a",{href:m(t)},"Components")};t.default=function(e){var t=Object(s.a)().siteConfig,n=i.filter((function(e){return e.includes("beta")})),a=i.filter((function(e){return!e.includes("beta")})),c=a.length>1?a.splice(1):[];return l.a.createElement(r.a,null,l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("header",{className:"postHeader"},l.a.createElement("h1",{style:{marginTop:0}},t.title+" versions")),l.a.createElement("p",{style:{maxWidth:640}},"New versions of this project are released ever so often. You will see versions here for releases that either contain features or breaking changes. Since patch releases have no changes to the api, they aren't posted here."),l.a.createElement("section",null,l.a.createElement("h3",null,"Latest versions"),l.a.createElement("p",null,"Contains changes that are up and coming in the next feature release."),l.a.createElement("table",{className:"versions"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"next"),l.a.createElement("td",null,l.a.createElement(E,{version:"next"})))))),l.a.createElement("section",null,l.a.createElement("h3",null,"Current version (Stable)"),l.a.createElement("p",null,"This is the version that is configured automatically when you first install this project."),l.a.createElement("table",{className:"versions"},l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement(o,{key:"version_"+e,version:e,baseUrl:t.baseUrl})}))))),n.length>0&&l.a.createElement("section",null,l.a.createElement("h3",null,"Pre-release versions"),l.a.createElement("p",null,"May sometimes introduce new changes that might break existing functionality."),l.a.createElement("table",{className:"versions"},l.a.createElement("tbody",null,n.map((function(e){return l.a.createElement("tr",{key:e},l.a.createElement("th",null,e),l.a.createElement("td",null,l.a.createElement(E,{version:e})),l.a.createElement("td",null,l.a.createElement(u,{version:e})))}))))),c.length>0&&l.a.createElement("section",null,l.a.createElement("h3",null,"Past Versions"),l.a.createElement("p",null,"Here you can find documentation for previous versions of React Native Elements."),l.a.createElement("table",{className:"versions"},l.a.createElement("tbody",null,c.map((function(e){return l.a.createElement("tr",{key:e},l.a.createElement("th",null,e),l.a.createElement("td",null,l.a.createElement(E,{version:e})),l.a.createElement("td",null,l.a.createElement(u,{version:e})))})))))))}}}]);