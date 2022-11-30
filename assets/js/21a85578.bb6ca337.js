"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30],{7522:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(9901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=o,k=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(5402),o=(n(9901),n(7522));const a={},i="BackButton",l={unversionedId:"libraries/twa-sdk/components/back-button",id:"libraries/twa-sdk/components/back-button",title:"BackButton",description:"Controls the back button displayed in the header of the Web App in the",source:"@site/docs/libraries/twa-sdk/components/back-button.md",sourceDirName:"libraries/twa-sdk/components",slug:"/libraries/twa-sdk/components/back-button",permalink:"/twa/docs/libraries/twa-sdk/components/back-button",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Components",permalink:"/twa/docs/category/components"},next:{title:"HapticFeedback",permalink:"/twa/docs/libraries/twa-sdk/components/haptic-feedback"}},c={},s=[{value:"Init",id:"init",level:2},{value:"Showing and hiding",id:"showing-and-hiding",level:2},{value:"Events",id:"events",level:2},{value:"Methods support",id:"methods-support",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"backbutton"},(0,o.kt)("inlineCode",{parentName:"h1"},"BackButton")),(0,o.kt)("p",null,"Controls the back button displayed in the header of the Web App in the\nTelegram interface. It is mostly used in case, when you want to provide a way to\ngo back in routing history or rollback some action."),(0,o.kt)("h2",{id:"init"},"Init"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {BackButton} from 'twa-sdk';  \nimport {init} from 'twa-bridge';  \n  \nconst backButton = new BackButton();  \n// or with your bridge instance.  \nconst backButton = new BackButton({bridge: init()});  \n")),(0,o.kt)("h2",{id:"showing-and-hiding"},"Showing and hiding"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Show back button.  \nbackButton.show();  \nconsole.log(backButton.isVisible); // true  \n  \n// Hide back button.  \nbackButton.hide();  \nconsole.log(backButton.isVisible); // false  \n")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"Events available for ",(0,o.kt)("a",{parentName:"p",href:"../about#events"},"listening"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"visibleChange: (isVisible: boolean) => void")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"click: () => void"))),(0,o.kt)("h2",{id:"methods-support"},"Methods support"),(0,o.kt)("p",null,"Methods available for ",(0,o.kt)("a",{parentName:"p",href:"../about#methods-support"},"support check"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"show")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hide"))))}u.isMDXComponent=!0}}]);