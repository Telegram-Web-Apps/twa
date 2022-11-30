"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[592],{7522:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(9901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(5402),o=(n(9901),n(7522));const i={sidebar_position:3},r="Events",s={unversionedId:"apps-communication/events",id:"apps-communication/events",title:"Events",description:"There are a lot of cases, when Telegram sends events to Web App which,",source:"@site/docs/apps-communication/events.md",sourceDirName:"apps-communication",slug:"/apps-communication/events",permalink:"/twa/docs/apps-communication/events",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Methods",permalink:"/twa/docs/apps-communication/methods"},next:{title:"Launch parameters",permalink:"/twa/docs/category/launch-parameters"}},l={},p=[{value:"Web",id:"web",level:2},{value:"Desktop, mobile and Windows Phone",id:"desktop-mobile-and-windows-phone",level:2},{value:"Available events",id:"available-events",level:2},{value:"v6.0",id:"v60",level:3},{value:"<code>invoice_closed</code>",id:"invoice_closed",level:4},{value:"<code>main_button_pressed</code>",id:"main_button_pressed",level:4},{value:"<code>popup_closed</code>",id:"popup_closed",level:4},{value:"<code>set_custom_style</code>",id:"set_custom_style",level:4},{value:"<code>theme_changed</code>",id:"theme_changed",level:4},{value:"<code>viewport_changed</code>",id:"viewport_changed",level:4},{value:"v6.1",id:"v61",level:3},{value:"<code>back_button_pressed</code>",id:"back_button_pressed",level:4},{value:"<code>settings_button_pressed</code>",id:"settings_button_pressed",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"events"},"Events"),(0,o.kt)("p",null,"There are a lot of cases, when Telegram sends events to Web App which,\nobviously, should be somehow handled. Like methods, each event has its unique\nname and payload."),(0,o.kt)("h2",{id:"web"},"Web"),(0,o.kt)("p",null,"As mentioned before, web version uses standard way of communication between\niframes. It means, parent iframe is able to send events through\n",(0,o.kt)("inlineCode",{parentName:"p"},"postMessage")," function. To handle this type of message, it is enough to\nadd ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," event listener on global ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object."),(0,o.kt)("p",null,"Native application will send event with ",(0,o.kt)("inlineCode",{parentName:"p"},"data: string")," which represents JSON\nobject converted to string. This object has the same interface as we defined in\nmethods section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface MessageJSON {\n  eventType: string;\n  eventData: any;\n}\n")),(0,o.kt)("p",null,"Simple example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"window.addEventListener('message', ({data}) => {\n  const {eventType, eventData} = JSON.parse(data);\n  console.log(eventType, eventData);\n})\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"In this code, we assumed, that ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," event is sent only by native\napplication which is not always true in real applications. Additionally, we\ndidn't check if ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," is really ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),". Don't forget to check each type and\nappropriately process incoming event.")),(0,o.kt)("h2",{id:"desktop-mobile-and-windows-phone"},"Desktop, mobile and Windows Phone"),(0,o.kt)("p",null,"Desktop, mobile and Windows Phone version of Telegram does not use method,\ndescribed in previous section. They do it in a bit unusual way. First thing\ndeveloper should know, is in case, when Telegram needs to emit event, it will\ninsert JavaScript code, which calls globally defined function. Here is an\nexample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"window.Telegram.WebView.receiveEvent('popup_closed', {button_id: 'cancel'});\n")),(0,o.kt)("p",null,"Path to this function depends on platform:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"window.TelegramGameProxy.receiveEvent")," - desktop"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"window.Telegram.WebView.receiveEvent")," - mobile"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"window.TelegramGameProxy_receiveEvent")," - Windows Phone")),(0,o.kt)("p",null,"All of these functions have the same signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type ReceiveEvent = (eventType: string, eventData: unknown) => void;\n")),(0,o.kt)("p",null,"So, solution is rather simple. To handle incoming event we should create\nfunction of this type and assign to all 3 paths."),(0,o.kt)("h2",{id:"available-events"},"Available events"),(0,o.kt)("p",null,"This section contains list of events, sent from Telegram: their names,\ndescription and parameters. Section title means minimal version, from which\nevents inside section could be sent."),(0,o.kt)("h3",{id:"v60"},"v6.0"),(0,o.kt)("h4",{id:"invoice_closed"},(0,o.kt)("inlineCode",{parentName:"h4"},"invoice_closed")),(0,o.kt)("p",null,"Invoice closed. Event contains passed\nduring ",(0,o.kt)("a",{parentName:"p",href:"methods#web_app_open_invoice"},(0,o.kt)("inlineCode",{parentName:"a"},"web_app_open_invoice"))," method\ninvocation ",(0,o.kt)("inlineCode",{parentName:"p"},"slug")," and invoice status."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type Payload = {\n  slug: string;\n  status: 'paid' | 'failed' | 'pending' | 'cancelled';\n}\n")),(0,o.kt)("h4",{id:"main_button_pressed"},(0,o.kt)("inlineCode",{parentName:"h4"},"main_button_pressed")),(0,o.kt)("p",null,"User clicked ",(0,o.kt)("a",{parentName:"p",href:"../features/main-button"},"main button"),"."),(0,o.kt)("h4",{id:"popup_closed"},(0,o.kt)("inlineCode",{parentName:"h4"},"popup_closed")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../features/popup"},"Popup")," was closed. Payload will contain ",(0,o.kt)("inlineCode",{parentName:"p"},"button_id")," property\nwhich is identifier of clicked button. In case, no button was clicked, payload\nwill be empty object ",(0,o.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type Payload = { button_id?: string }\n")),(0,o.kt)("h4",{id:"set_custom_style"},(0,o.kt)("inlineCode",{parentName:"h4"},"set_custom_style")),(0,o.kt)("p",null,"Event, which is usually sent from Telegram web version. Its payload represents\n",(0,o.kt)("inlineCode",{parentName:"p"},"<style/>")," tag html content, developer could use. Stylesheet described in\npayload will help developer to stylize app scrollbar (but he is still able to do\nit himself)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type Payload = string;\n")),(0,o.kt)("h4",{id:"theme_changed"},(0,o.kt)("inlineCode",{parentName:"h4"},"theme_changed")),(0,o.kt)("p",null,"Occurs whenever ",(0,o.kt)("a",{parentName:"p",href:"../features/theme"},"theme")," was changed in the user's Telegram\napp (including switching to night mode). ",(0,o.kt)("inlineCode",{parentName:"p"},"theme_params")," property is object with\nkey-value pairs, where key is some key name (",(0,o.kt)("inlineCode",{parentName:"p"},"bg_color"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"secondary_bg_color"),",\n...), and value is its color in ",(0,o.kt)("inlineCode",{parentName:"p"},"#RRGGBB")," format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type Payload = { theme_params: Record<string, string> };\n")),(0,o.kt)("h4",{id:"viewport_changed"},(0,o.kt)("inlineCode",{parentName:"h4"},"viewport_changed")),(0,o.kt)("p",null,"Occurs whenever ",(0,o.kt)("a",{parentName:"p",href:"../features/viewport"},"viewport")," has been changed. For example,\nwhen user started dragging application or called expansion method."),(0,o.kt)("p",null,"Pay attention to fact, that send rate of this method is not enough to smoothly\nresize application window. You should probably use stable height instead of\ncurrent one, or handle this problem in other way."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type Payload = {\n  height: number;\n  width?: number;\n  is_expanded: boolean;\n  is_state_stable: boolean;\n};\n")),(0,o.kt)("h3",{id:"v61"},"v6.1"),(0,o.kt)("h4",{id:"back_button_pressed"},(0,o.kt)("inlineCode",{parentName:"h4"},"back_button_pressed")),(0,o.kt)("p",null,"User clicked ",(0,o.kt)("a",{parentName:"p",href:"../features/back-button"},"back button"),"."),(0,o.kt)("h4",{id:"settings_button_pressed"},(0,o.kt)("inlineCode",{parentName:"h4"},"settings_button_pressed")),(0,o.kt)("p",null,"Occurs when the ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," item in context menu was pressed. Not all\napplications have this button."))}c.isMDXComponent=!0}}]);