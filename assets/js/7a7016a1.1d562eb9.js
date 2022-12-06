"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7106],{7522:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(5402),o=(n(9901),n(7522));const i={sidebar_position:3},a="Required technologies",l={unversionedId:"introduction/required-technologies",id:"introduction/required-technologies",title:"Required technologies",description:"Before starting to create application on Web Apps platform, it is important to",source:"@site/docs/introduction/required-technologies.md",sourceDirName:"introduction",slug:"/introduction/required-technologies",permalink:"/twa/docs/introduction/required-technologies",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Why",permalink:"/twa/docs/introduction/why"},next:{title:"Platforms",permalink:"/twa/docs/platforms"}},c={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"required-technologies"},"Required technologies"),(0,o.kt)("p",null,"Before starting to create application on Web Apps platform, it is important to\nknow what Web Apps is from its technical side. This will lead developer to\nlanguage and technologies selection."),(0,o.kt)("p",null,"Internally, Web Apps are usual web applications, which are displayed in WebView.\nIn other words, they are just a set of static files (mostly ",(0,o.kt)("inlineCode",{parentName:"p"},".js"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".css"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},".html"),"). So, to create Web App, it is enough to learn standard front-end\ndevelopment technologies, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JavaScript"),(0,o.kt)("li",{parentName:"ul"},"CSS"),(0,o.kt)("li",{parentName:"ul"},"HTML")),(0,o.kt)("p",null,"Really simple, isn't it? But to make much more serious and bigger applications,\nwe recommend to use more solid technologies, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeScript"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"React"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"SCSS")," etc."),(0,o.kt)("p",null,"So, if we want to create Web App, we should create standard web application with\nany technologies stack. The only 1 thing Telegram needs from developer is\napplication URL to download it from. It will be used as source for WebView, what\nwill lead to application download and display."))}u.isMDXComponent=!0}}]);