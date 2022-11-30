"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[342],{7522:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(9901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(5402),r=(n(9901),n(7522));const o={sidebar_position:1},a="twa-bridge",l={unversionedId:"libraries/twa-bridge",id:"libraries/twa-bridge",title:"twa-bridge",description:"Package which provides utilities to simplify communication between",source:"@site/docs/libraries/twa-bridge.mdx",sourceDirName:"libraries",slug:"/libraries/twa-bridge",permalink:"/twa/docs/libraries/twa-bridge",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"\ud83d\udce6 Libraries",permalink:"/twa/docs/category/-libraries"},next:{title:"twa-init-data",permalink:"/twa/docs/libraries/twa-init-data"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Init",id:"init",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Setting target origin",id:"setting-target-origin",level:2},{value:"Calling methods",id:"calling-methods",level:2},{value:"Without bridge",id:"without-bridge",level:3},{value:"Listening to events",id:"listening-to-events",level:2},{value:"Lower level control",id:"lower-level-control",level:2},{value:"<code>defineReceiver: boolean</code>",id:"definereceiver-boolean",level:3},{value:"<code>emitter: GlobalEventEmitter</code>",id:"emitter-globaleventemitter",level:3},{value:"Checking method support",id:"checking-method-support",level:2},{value:"Higher-level control",id:"higher-level-control",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=d("NpmMeta"),u=d("NpmInstall"),g={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"twa-bridge"},"twa-bridge"),(0,r.kt)("p",null,"Package which provides utilities to simplify communication between\nWeb App and Telegram native application. It also solves some across-platform\ndata difference problems to protect developers code and save their time."),(0,r.kt)(c,{pkg:"twa-bridge",mdxType:"NpmMeta"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(u,{pkg:"twa-bridge",mdxType:"NpmInstall"}),(0,r.kt)("h2",{id:"init"},"Init"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Bridge")," component has rather simple API. Its main purpose is to provide\ncommunication layer between Telegram native and client applications, so you\ncould call native methods and receive events from Telegram application."),(0,r.kt)("p",null,"To start using bridge, it is enough to use ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {init} from 'twa-bridge';\n\nconst bridge = init();\n")),(0,r.kt)("p",null,"This function will append special handler to global window object, which is\nused by Telegram native application. It is allowed to use it as many times\nas required as long as this function will just reuse once created event emitter\nand event receiving function."),(0,r.kt)("h2",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Bridge")," supports debug mode which outputs additional log messages into console.\nBy default, this mode is disabled. To enable it, it is required to pass\n",(0,r.kt)("inlineCode",{parentName:"p"},"debug: true")," while creating new ",(0,r.kt)("inlineCode",{parentName:"p"},"Bridge")," instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {init} from 'twa-bridge';\n\nconst bridge = init({debug: true});\n")),(0,r.kt)("p",null,"Or, in case when instance already exists, just change its ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," property\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {init} from 'twa-bridge';\n\nconst bridge = init();\nbridge.debug = true;\n")),(0,r.kt)("p",null,"As a result, you will see logs in console with information about called\nmethods and processes."),(0,r.kt)("h2",{id:"setting-target-origin"},"Setting target origin"),(0,r.kt)("p",null,"In case, current bridge instance is used in browser environment (iframe),\nwe use such function as ",(0,r.kt)("inlineCode",{parentName:"p"},"window.parent.postMessage")," which requires passing\ntarget origin to prevent sending events to unknown parent iframes."),(0,r.kt)("p",null,"By default, bridge uses such origin as ",(0,r.kt)("inlineCode",{parentName:"p"},"https://web.telegram.org"),". To allow\nsending events to other origins, you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"targetOrigin")," options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const unsafeBridge = init({targetOrigin: '*'});\n// or\nconst safeBridge = init({targetOrigin: 'https://myendpoint.org'});\n")),(0,r.kt)("p",null,"Additionally, you could use ",(0,r.kt)("inlineCode",{parentName:"p"},"postEvent"),"s ",(0,r.kt)("inlineCode",{parentName:"p"},"targetOrigin")," option. This will\noverride origin passed during initialization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const bridge = init({targetOrigin: '*'});\nbridge.postEvent('web_app_close', {targetOrigin: 'https://myendpoint.org'})\n")),(0,r.kt)("h2",{id:"calling-methods"},"Calling methods"),(0,r.kt)("p",null,"To call Web Apps methods, it is enough to call ",(0,r.kt)("inlineCode",{parentName:"p"},"Bridge"),"s ",(0,r.kt)("inlineCode",{parentName:"p"},"postEvent")," method.\nThis method automatically finds correct way of sending event which depends\non current environment. Let's take a look on simple example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {init} from 'twa-bridge';\n\nconst bridge = init();\n\n// Close current application.\nbridge.postEvent('web_app_close')\n")),(0,r.kt)("p",null,"Some events don't require parameters, and they can be called without additional\nsecond parameter which represents event payload. But there are some events,\nwhich have arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {init} from 'twa-bridge';\n\nconst bridge = init();\n\n// Open new popup.\nbridge.postEvent('web_app_open_popup', {\n  title: 'Web Apps Notification',\n  message: 'I love Web Apps',\n  buttons: [{type: 'ok', id: 'ok'}]\n});\n")),(0,r.kt)("h3",{id:"without-bridge"},"Without bridge"),(0,r.kt)("p",null,"This library allows calling methods without creating new Bridge instance. To\nperform this, you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"postEvent")," function which has the same\ntype as ",(0,r.kt)("inlineCode",{parentName:"p"},"bridge.postEvent")," (actually, bridge uses ",(0,r.kt)("inlineCode",{parentName:"p"},"postEvent")," function\ninternally):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {postEvent} from 'twa-bridge';\n\npostEvent('web_app_setup_back_button', {is_visible: true});\n")),(0,r.kt)("p",null,"Nevertheless, sometimes you need to handle event sent from native app which is\nemitted as a response to posted event. For example, you would like to\ncall ",(0,r.kt)("inlineCode",{parentName:"p"},"web_app_request_theme")," event. As a result, native app will emit\n",(0,r.kt)("inlineCode",{parentName:"p"},"theme_changed")," event. Using default bridge init flow, this event will\nbe captured by bridge instance. We can't say the same about bare ",(0,r.kt)("inlineCode",{parentName:"p"},"postEvent")," function,\nso, do not forget about response event (if it exists) handling process."),(0,r.kt)("h2",{id:"listening-to-events"},"Listening to events"),(0,r.kt)("p",null,"Tracking of events is rather simple thing too. For this purpose, we could\nuse such methods as ",(0,r.kt)("inlineCode",{parentName:"p"},"on")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe"),". To remove event listeners, we\nuse ",(0,r.kt)("inlineCode",{parentName:"p"},"off")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscribe"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {BridgeEventListener, init} from 'twa-bridge';\nimport {GlobalListener} from 'twa-core';\n\nconst bridge = init();\nconst listener: BridgeEventListener<'viewport_changed'> = payload => {\n  console.log('Viewport changed:', payload)\n};\nconst globalListener: GlobalListener = (event, ...args) => {\n  console.log('Event was called:', event, ...args);\n};\n\n// Add event listener.\nbridge.on('viewport_changed', listener);\n\n// Add any event listener.\nbridge.subscribe(globalListener);\n\n// Remove event listeners.\nbridge.off('viewport_changed', listener);\nbridge.unsubscribe(globalListener);\n")),(0,r.kt)("h2",{id:"lower-level-control"},"Lower level control"),(0,r.kt)("p",null,"Previously, we used such function as ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," almost without any parameters,\nbut this method supports some more additional options."),(0,r.kt)("h3",{id:"definereceiver-boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"defineReceiver: boolean")),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," sets this value as ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". It leads to call of function\nnamed ",(0,r.kt)("inlineCode",{parentName:"p"},"defineEventReceiver")," which defines global function, handling events\nfrom native application and emitting window ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," event."),(0,r.kt)("p",null,"It is safe to use this function as many times as required. This function\nwill run only once."),(0,r.kt)("p",null,"In spite of it is not recommended, you could set this option to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".\nThis will lead to not handling of events in iOS, Android and desktop\nversions of Telegram, unless some additional actions are done."),(0,r.kt)("h3",{id:"emitter-globaleventemitter"},(0,r.kt)("inlineCode",{parentName:"h3"},"emitter: GlobalEventEmitter")),(0,r.kt)("p",null,"Bridge itself is not listening to window ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," event or events sent\nfrom Telegram native application directly. It expects passing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Telegram-Web-Apps/twa/blob/master/packages/bridge/src/event-receiver/global.ts#L18"},"event emitter"),"\nthat is responsible for this kind of job."),(0,r.kt)("p",null,"This way of working with events allows us to normally subscribe to and\nunsubscribe from such events."),(0,r.kt)("p",null,"In case, this property is not passed, function will create required event\nemitter which will be shared between other ",(0,r.kt)("inlineCode",{parentName:"p"},"Bridge")," instances."),(0,r.kt)("h2",{id:"checking-method-support"},"Checking method support"),(0,r.kt)("p",null,"Bridge itself does not check if Web App method is supported by current\nversion of Web App. To check, if method is supported, you could use ",(0,r.kt)("inlineCode",{parentName:"p"},"supports"),"\nfunction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {supports} from 'twa-bridge';\n\nsupports('web_app_trigger_haptic_feedback', '6.0'); // false\nsupports('web_app_trigger_haptic_feedback', '6.1'); // true\n")),(0,r.kt)("h2",{id:"higher-level-control"},"Higher-level control"),(0,r.kt)("p",null,"As long as bridge provides only low-level control, we recommend using\n",(0,r.kt)("a",{parentName:"p",href:"twa-sdk/about"},"SDK"),", which implements bridge methods. It also provides\nadditional parameters checks, more intuitive method names and easier usage."))}m.isMDXComponent=!0}}]);