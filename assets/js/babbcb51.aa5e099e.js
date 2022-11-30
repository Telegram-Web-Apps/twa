"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[740],{7522:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(9901);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(f,p(p({ref:t},c),{},{components:a})):r.createElement(f,p({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5367:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(5402),n=(a(9901),a(7522));const o={sidebar_position:1},p="About",i={unversionedId:"launch-params/about",id:"launch-params/about",title:"About",description:"Web Apps should have URL to be downloaded by Telegram. It will be used as source",source:"@site/docs/launch-params/about.md",sourceDirName:"launch-params",slug:"/launch-params/about",permalink:"/twa/docs/launch-params/about",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Launch parameters",permalink:"/twa/docs/category/launch-parameters"},next:{title:"Init data",permalink:"/twa/docs/category/init-data"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"<code>tgWebAppVersion</code>",id:"tgwebappversion",level:3},{value:"<code>tgWebAppData</code>",id:"tgwebappdata",level:3},{value:"<code>tgWebAppPlatform</code>",id:"tgwebappplatform",level:3},{value:"<code>tgWebAppThemeParams</code>",id:"tgwebappthemeparams",level:3}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"about"},"About"),(0,n.kt)("p",null,"Web Apps should have URL to be downloaded by Telegram. It will be used as source\nfor WebView, which will load application."),(0,n.kt)("p",null,"Nevertheless, it is not enough for application to work correctly. In previous\ndocumentation sections we also said, that some methods or events work only\nstarting from some Web App version. But how do we determine current version?\nThis is why launch params were created."),(0,n.kt)("p",null,"Launch parameters are list of options, passed to Web App through its\nlocation. To be more accurate, ",(0,n.kt)("inlineCode",{parentName:"p"},"window")," location. List of these properties will\nbe passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"hash")," section and will have form of query parameters. So, you\ncould get them converted to string by calling ",(0,n.kt)("inlineCode",{parentName:"p"},"window.location.hash.slice(1)"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const params = window.location.hash.slice(1);\nconsole.log(params); // tgWebAppData=...&tgWebAppVersion=6.2&...\n")),(0,n.kt)("p",null,"To work with them in more appropriate way, we use already implemented class\n",(0,n.kt)("inlineCode",{parentName:"p"},"URLSearchParams"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const params = new URLSearchParams(window.location.hash.slice(1));\nconsole.log(params.get('tgWebAppVersion')); // \"6.2\"\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("h3",{id:"tgwebappversion"},(0,n.kt)("inlineCode",{parentName:"h3"},"tgWebAppVersion")),(0,n.kt)("p",null,"Contains information about current Web App version. This parameter is useful\nto check, if some ",(0,n.kt)("a",{parentName:"p",href:"../apps-communication/methods"},"Web App method")," supported."),(0,n.kt)("h3",{id:"tgwebappdata"},(0,n.kt)("inlineCode",{parentName:"h3"},"tgWebAppData")),(0,n.kt)("p",null,"Web App ",(0,n.kt)("a",{parentName:"p",href:"init-data/about"},"init data"),". Value of this parameter is query parameters\npresented as string. To make its usage easier, consider ",(0,n.kt)("inlineCode",{parentName:"p"},"URLSearchParams")," class."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Parsed example value"',title:'"Parsed',example:!0,'value"':!0},'{\n  query_id: "abcdef",\n  user: `{id: 279058397, first_name: "Vladislav", last_name: "Kibenko", username: "vdkfrost", language_code: "en", is_premium: true}`,\n  auth_date: "1669670292",\n  hash: "4975e881a0347264512f6047e1f3d698cbd2fe0bc1573",\n}\n')),(0,n.kt)("h3",{id:"tgwebappplatform"},(0,n.kt)("inlineCode",{parentName:"h3"},"tgWebAppPlatform")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../platforms"},"Platform")," identifier."),(0,n.kt)("h3",{id:"tgwebappthemeparams"},(0,n.kt)("inlineCode",{parentName:"h3"},"tgWebAppThemeParams")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../features/theme"},"Theme")," information. You could use this parameter to\nknow colors at the moment of Web App render. Keep in mind, that you are able to\nreceive theme with ",(0,n.kt)("a",{parentName:"p",href:"../apps-communication/methods#web_app_request_theme"},"method"),"\n."),(0,n.kt)("p",null,"Value of this parameter is JSON object converted to string. To receive more\nappropriate and easy to use value, use ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON.parse")," function."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Parsed example value"',title:'"Parsed',example:!0,'value"':!0},'{\n  "bg_color": "#212121",\n  "text_color": "#ffffff",\n  "hint_color": "#aaaaaa",\n  "link_color": "#8774e1",\n  "button_color": "#8774e1",\n  "button_text_color": "#ffffff",\n  "secondary_bg_color": "#0f0f0f"\n}\n')))}u.isMDXComponent=!0}}]);