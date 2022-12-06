"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[739],{7522:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(9901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(5402),a=(n(9901),n(7522));const i={},o="Haptic feedback",c={unversionedId:"features/haptic-feedback",id:"features/haptic-feedback",title:"Haptic feedback",description:"Native mobile applications are always filled with interactive components, which",source:"@site/docs/features/haptic-feedback.md",sourceDirName:"features",slug:"/features/haptic-feedback",permalink:"/twa/docs/features/haptic-feedback",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Closing behavior",permalink:"/twa/docs/features/closing-behavior"},next:{title:"Main button",permalink:"/twa/docs/features/main-button"}},p={},s=[],l={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"haptic-feedback"},"Haptic feedback"),(0,a.kt)("p",null,"Native mobile applications are always filled with interactive components, which\nallow user to communicate with its functionality. Such components are mostly\npopups, buttons and many others."),(0,a.kt)("p",null,"Interacting with application (clicking buttons, closing popups etc.), it is\nallowed to emit haptic notifications. Commonly, this process is called\n",(0,a.kt)("inlineCode",{parentName:"p"},"haptic feedback"),". In simple words, these events are just mobile device\nvibrations. Usage of haptic feedback can make user's experience much better."),(0,a.kt)("p",null,"There are currently 3 types of notifications which are used in separate cases.\nSee links at the end of the section for more information."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use this method carefully. Emitting haptic events too often can make an effect\non user's mobile device battery.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../apps-communication/methods#web_app_trigger_haptic_feedback"},"Web App method"))))}u.isMDXComponent=!0}}]);