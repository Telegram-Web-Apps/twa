"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[390],{7522:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(5402),o=(n(9901),n(7522));const i={sidebar_position:2},a="Why",s={unversionedId:"introduction/why",id:"introduction/why",title:"Why",description:"As we mentioned in previous section, Web Apps are add-on for Telegram Bots.",source:"@site/docs/introduction/why.md",sourceDirName:"introduction",slug:"/introduction/why",permalink:"/twa/docs/introduction/why",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Web Apps",permalink:"/twa/docs/introduction/web-apps"},next:{title:"Required technologies",permalink:"/twa/docs/introduction/required-technologies"}},c={},l=[{value:"Conclusion",id:"conclusion",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"why"},"Why"),(0,o.kt)("p",null,"As we mentioned in previous section, Web Apps are add-on for Telegram Bots.\nTelegram Bots is also known technology which provides functionality for wide\nlist of use-cases. You could create bot to buy a ticket in cinema, make him tell\nuser jokes, generate random number etc. In other words, bot can do whatever\ndeveloper think about."),(0,o.kt)("p",null,'The problem is, visual part of bots is not that good and functional as it could\nbe. Their current implementation is "console-like" which is more appropriate for\ndevelopers, not common users. That\'s the time for Web Apps to show up.'),(0,o.kt)("p",null,"Using Web Apps, developers are allowed to create more user-friendly interfaces,\nwhich are commonly used by usual users. With this technology, developer is still\nable to communicate with bot behind Web App, but, additionally, he can provide\nsome more flexible interface to interact with."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Web Apps are usually used when standard bot interface is not enough. Create Web\nApp when you want to make user life easier, when displaying several buttons is\nnot even close to functionality, you want to provide."))}p.isMDXComponent=!0}}]);