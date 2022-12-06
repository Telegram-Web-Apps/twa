"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3237],{7527:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ke});var r=n(9901),i=n(2865),o=n(3627),s=n(6172);const a="docs/from-authors";function u(){const{siteConfig:e}=(0,i.Z)();return r.createElement(o.Z,{noFooter:!0,description:e.tagline},r.createElement(s.l_,{to:a}))}function c(e){var t=e.replace(/\s/g,"");if(function(e){return/^#[\da-f]{6}$/i.test(e)}(t))return t;if(function(e){return/^#[\da-f]{3}$/i.test(e)}(t)){for(var n="#",r=0;r<3;r++)n+=t[1+r].repeat(2);return n}var i=t.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/)||t.match(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),\d{1,3}\)$/);if(null===i)throw new SyntaxError('Value "'.concat(e,'" does not match any of known RGB formats.'));return i.slice(1).reduce((function(e,t){var n=parseInt(t).toString(16);return e+(1===n.length?"0":"")+n}),"#")}function l(e){return e=c(e),Math.sqrt([.299,.587,.114].reduce((function(t,n,r){var i=parseInt(e.slice(1+2*r,1+2*(r+1)),16);return t+i*i*n}),0))<120}function h(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var p=function(){function e(){this.listeners={},this.globalListeners=[]}return e.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];this.globalListeners.forEach((function(n){return n.apply(void 0,h([e],t,!1))}));var r=this.listeners[e];void 0!==r&&r.forEach((function(e){return e.apply(void 0,t)}))},e.prototype.emitUnsafe=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];this.emit.apply(this,h([e],t,!1))},e.prototype.on=function(e,t){var n=this.listeners[e];void 0===n?this.listeners[e]=[t]:n.push(t)},e.prototype.off=function(e,t){var n=this.listeners[e];if(void 0!==n){var r=n.indexOf(t);r>=0&&n.splice(r,1)}},e.prototype.subscribe=function(e){this.globalListeners.push(e)},e.prototype.unsubscribe=function(e){var t=this.globalListeners.indexOf(e);t>=0&&this.globalListeners.splice(t,1)},e}();function f(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}var d=function(e){if("number"!=typeof e)throw new TypeError('Unable to parse "'.concat(e,'" as number'));return e},b=function(e){if("string"!=typeof e)throw new TypeError('Unable to parse "'.concat(e,'" as string'));return e},g=function(e){return void 0===e?e:b(e)},v=function(e){if("boolean"!=typeof e)throw new TypeError('Unable to parse "'.concat(e,'" as boolean'));return e},_=function(e){return void 0===e?void 0:v(e)},m=function(e){return void 0===e?e:c(b(e))};function y(e,t){return function(n){if(null==n){if(void 0===t)throw new TypeError("Value is empty.");return t()}var r=n;if("string"==typeof r)try{r=JSON.parse(r)}catch(e){throw new TypeError("Value is not JSON object converted to string.")}if(!f(r))throw new TypeError("Value is not JSON object.");var i={};for(var o in e){var s=e[o],a=s[0],u=s[1];try{var c=u(r[a]);void 0!==c&&(i[o]=c)}catch(e){throw new Error('Unable to parse parameter "'.concat(a,'"'),{cause:e})}}return i}}var w=function(e){if(null===e)throw new TypeError('Unable to parse value "'.concat(e,'" as string.'));return e},C=function(e){return null===e?void 0:e},E=function(e){if(null!==e&&""!==e){var t=parseInt(e),n=new Date(t.toString()===e?1e3*t:e);if("Invalid Date"!==n.toString())return n}throw new TypeError('Unable to parse value "'.concat(e,'" as Date'))};function O(e,t){return function(n){if(null==n){if(void 0===t)throw new TypeError("Value is empty.");return t()}if("string"!=typeof n&&!(n instanceof URLSearchParams))throw new TypeError("Value has unexpected type.");var r="string"==typeof n?new URLSearchParams(n):n,i={};for(var o in e){var s=e[o],a=s[0],u=s[1];try{var c=u(r.get(a));void 0!==c&&(i[o]=c)}catch(e){throw new Error('Unable to parse parameter "'.concat(a,'"'),{cause:e})}}return i}}function x(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=new Date,i=Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(r),o=r.getMilliseconds().toString();console[e].apply(console,h(["[".concat(i,".").concat("0".repeat(3-o.length)+o,"]")],t,!1))}function P(e,t){for(var n=e.split("."),r=t.split("."),i=Math.max(n.length,r.length),o=0;o<i;o++){var s=parseInt(n[o]||"0"),a=parseInt(r[o]||"0");if(s!==a)return s>a?1:-1}return 0}var k=function(){return k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},k.apply(this,arguments)};function j(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function S(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var T,V=y({height:["height",d],width:["width",function(e){return void 0===e?null:d(e)}],is_state_stable:["is_state_stable",v],is_expanded:["is_expanded",v]}),A=y({theme_params:["theme_params",function(e){if(!f(e))throw new TypeError('Unable to parse "'.concat(e,'" as Record'));return e}]}),D=y({button_id:["button_id",function(e){return null==e?void 0:b(e)}]}),U=y({slug:["slug",b],status:["status",b]}),I=y({type:["eventType",b],data:["eventData",function(e){return e}]});var B=!1;function L(e){return void 0!==e.TelegramWebviewProxy}function H(e){return"external"in e&&"function"==typeof e.external.notify}function q(){try{return window.self!==window.top}catch(e){return!0}}var W=function(){function e(e){void 0===e&&(e={});var t=this;this._boundEmitter=null,this.ee=new p,this.emit=function(e){for(var n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];t.log.apply(t,S(["log","[emit]",e],r,!1)),(n=t.ee).emit.apply(n,S([e],r,!1))},this.emitUnsafe=function(e){for(var n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];t.log.apply(t,S(["log","[emitUnsafe]",e],r,!1)),(n=t.ee).emitUnsafe.apply(n,S([e],r,!1))},this.log=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];t.debug&&x.apply(void 0,S([e,"[Bridge]"],n,!1))},this.processEvent=function(e,n){t.log("log","[processEvent]",e,n);try{switch(e){case"viewport_changed":return t.emit(e,function(e){var t=V(e),n=t.width,r=j(t,["width"]);return k(k({},r),{width:null===n?window.innerWidth:n})}(n));case"theme_changed":return t.emit(e,A(n));case"popup_closed":return null==n?t.emit(e,{}):t.emit(e,D(n));case"set_custom_style":return t.emit(e,b(n));case"main_button_pressed":case"back_button_pressed":case"settings_button_pressed":return t.emit(e);case"invoice_closed":return t.emit(e,U(n));default:return t.emitUnsafe(e,n)}}catch(e){throw t.log("error","[processEvent] error",e),e}},this.on=this.ee.on.bind(this.ee),this.off=this.ee.off.bind(this.ee),this.postEvent=function(e,n,r){var i=r||{},o=i.targetOrigin,s=void 0===o?t.targetOrigin:o,a=j(i,["targetOrigin"]);(function(e,t,n){if(void 0===t&&(t=""),void 0===n&&(n={}),q())return window.parent.postMessage(JSON.stringify({eventType:e,eventData:t}),n.targetOrigin||"https://web.telegram.org");if(L(window))return window.TelegramWebviewProxy.postEvent(e,JSON.stringify(t));if(H(window))return window.external.notify(JSON.stringify({eventType:e,eventData:t}));throw new Error("Unable to determine current environment and possible way to send event.")})(e,n,k(k({},a),{targetOrigin:s})),t.log("log","[postEvent]",e,n)},this.subscribe=this.ee.subscribe.bind(this.ee),this.unsubscribe=this.ee.unsubscribe.bind(this.ee);var n=e.debug,r=void 0!==n&&n,i=e.emitter,o=void 0===i?null:i,s=e.targetOrigin,a=void 0===s?"https://web.telegram.org":s;this.debug=r,this.targetOrigin=a,this.boundEmitter=o}return Object.defineProperty(e.prototype,"boundEmitter",{get:function(){return this._boundEmitter||null},set:function(e){null!==this._boundEmitter&&this._boundEmitter.off("message",this.processEvent),this._boundEmitter=e,null!==this._boundEmitter&&this._boundEmitter.on("message",this.processEvent)},enumerable:!1,configurable:!0}),e.prototype.bind=function(e){this.boundEmitter=e},e.prototype.unbind=function(){this.boundEmitter=null},e}();function z(e){void 0===e&&(e={});var t=e.defineReceiver,n=void 0===t||t,r=e.emitter,i=void 0===r?function(e){if(void 0===e&&(e=!1),void 0===T){var t=new p,n=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];e&&x.apply(void 0,S([t,"[Bridge]"],n,!1))};window.addEventListener("message",(function(e){var r;if(n("log","message event received",e),e instanceof MessageEvent){if(e.source!==window.parent||"string"!=typeof e.data)return n("log","event rejected",e);r=e.data}else{if(!(e instanceof CustomEvent&&f(e.detail)&&"string"==typeof e.detail.eventType&&"eventData"in e.detail))return n("warn","event was skipped",e);r=e.detail}try{var i=I(r),o=i.type,s=i.data;t.emit("message",o,s)}catch(e){n("error","event data extraction error",r,e)}})),window.addEventListener("resize",(function(){var e={width:window.innerWidth,height:window.innerHeight,is_state_stable:!0,is_expanded:!0};t.emit("message","viewport_changed",e)})),T=t}return T}():r,o=j(e,["defineReceiver","emitter"]);return n&&function(e){if(void 0===e&&(e=!1),!B||e){var t=window;[["TelegramGameProxy_receiveEvent"],["TelegramGameProxy","receiveEvent"],["Telegram","WebView","receiveEvent"]].forEach((function(e){var n=t;e.forEach((function(e,t,r){t!==r.length-1?(e in n||(n[e]={}),n=n[e]):n[e]=function(e,t){window.dispatchEvent(new CustomEvent("message",{detail:{eventType:e,eventData:t}}))}}))})),B=!0}}(),new W(k(k({},o),{emitter:i}))}function M(e,t){switch(e){case"web_app_open_tg_link":case"web_app_open_invoice":case"web_app_setup_back_button":case"web_app_set_background_color":case"web_app_set_header_color":case"web_app_trigger_haptic_feedback":return P("6.1",t)<=0;case"web_app_open_popup":return P("6.2",t)<=0;default:return!0}}var R=y({id:["id",d],isBot:["is_bot",_],firstName:["first_name",b],lastName:["last_name",g],username:["username",g],languageCode:["language_code",g],isPremium:["is_premium",_],photoUrl:["photo_url",g]},(function(){})),N=O({queryId:["query_id",C],user:["user",R],receiver:["receiver",R],chat:["chat",y({id:["id",d],title:["title",b],type:["type",b],username:["username",g],photoUrl:["photo_url",g]},(function(){}))],startParam:["start_param",C],canSendAfter:["can_send_after",function(e){if(null!==e)return E(e)}],authDate:["auth_date",E],hash:["hash",w]}),J=y({backgroundColor:["bg_color",m],buttonColor:["button_color",m],buttonTextColor:["button_text_color",m],hintColor:["hint_color",m],linkColor:["link_color",m],secondaryBackgroundColor:["secondary_bg_color",m],textColor:["text_color",m]});function $(e){return void 0===e?z():e}function G(e){var t=document.createElement("a");if(t.href=e,"http:"!==t.protocol&&"https:"!==t.protocol)throw Error("URL protocol is not supported by OS, or link has not allowed "+"protocol: ".concat(t.protocol));return t.href}function Z(e){var t=Object.entries(e).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=Array.isArray(r)?r:[r],e}),{});return function(e,n){for(var r=0;r<t[e].length;r++)if(!M(t[e][r],n))return!1;return!0}}var F=function(){function e(e){void 0===e&&(e={});var t=this;this.ee=new p,this.on=function(e,n){if("click"===e)return t.bridge.on("back_button_pressed",n);t.ee.on(e,n)},this.off=function(e,n){if("click"===e)return t.bridge.off("back_button_pressed",n);t.ee.off(e,n)};var n=e.bridge,r=e.isVisible,i=void 0!==r&&r;this.bridge=$(n),this._isVisible=i}return Object.defineProperty(e.prototype,"isVisible",{get:function(){return this._isVisible},set:function(e){this.bridge.postEvent("web_app_setup_back_button",{is_visible:e}),this._isVisible!==e&&(this._isVisible=e,this.ee.emit("visibleChange",e))},enumerable:!1,configurable:!0}),e.prototype.hide=function(){this.isVisible=!1},e.prototype.show=function(){this.isVisible=!0},e.supports=Z({show:"web_app_setup_back_button",hide:"web_app_setup_back_button"}),e}(),K=function(){function e(e){void 0===e&&(e={});var t=e.bridge;this.bridge=$(t)}return e.prototype.impactOccurred=function(e){this.bridge.postEvent("web_app_trigger_haptic_feedback",{type:"impact",impact_style:e})},e.prototype.notificationOccurred=function(e){this.bridge.postEvent("web_app_trigger_haptic_feedback",{type:"notification",notification_type:e})},e.prototype.selectionChanged=function(){this.bridge.postEvent("web_app_trigger_haptic_feedback",{type:"selection_change"})},e.supports=Z({notificationOccurred:"web_app_trigger_haptic_feedback",impactOccurred:"web_app_trigger_haptic_feedback",selectionChanged:"web_app_trigger_haptic_feedback"}),e}(),Q=function(){return Q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Q.apply(this,arguments)};function X(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Y(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((r=r.apply(e,t||[])).next())}))}function ee(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}var te=function(){function e(e,t,n){void 0===n&&(n={}),this._authDate=e,this._hash=t,this._canSendAfter=null,this._chat=null,this._queryId=null,this._receiver=null,this._startParam=null,this._user=null;var r=n.chat,i=void 0===r?null:r,o=n.user,s=void 0===o?null:o,a=n.queryId,u=void 0===a?null:a,c=n.receiver,l=void 0===c?null:c,h=n.startParam,p=void 0===h?null:h,f=n.canSendAfter,d=void 0===f?null:f;this._canSendAfter=d,this._chat=i,this._user=s,this._queryId=u,this._receiver=l,this._startParam=p}return e.fromSearchParams=function(t){var n=N(t);return new e(n.authDate,n.hash,X(n,["authDate","hash"]))},Object.defineProperty(e.prototype,"authDate",{get:function(){return this._authDate},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"canSendAfter",{get:function(){return this._canSendAfter},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"chat",{get:function(){return this._chat},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hash",{get:function(){return this._hash},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"queryId",{get:function(){return this._queryId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"receiver",{get:function(){return this._receiver},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startParam",{get:function(){return this._startParam},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"user",{get:function(){return this._user},enumerable:!1,configurable:!0}),e}();function ne(e){if(0===(e=e.trim()).length||e.length>64)throw new Error("Text has incorrect length: ".concat(e.length));return e}var re=function(){function e(e){void 0===e&&(e={});var t=this;this.ee=new p,this.on=function(e,n){if("click"===e)return t.bridge.on("main_button_pressed",n);t.ee.on(e,n)},this.off=function(e,n){if("click"===e)return t.bridge.off("main_button_pressed",n);t.ee.off(e,n)};var n=e.isProgressVisible,r=void 0!==n&&n,i=e.isVisible,o=void 0!==i&&i,s=e.isActive,a=void 0!==s&&s,u=e.bridge,l=e.text,h=e.textColor,f=e.color,d=e.autocommit,b=void 0===d||d;this.autocommit=b,this.bridge=$(u),this._color=void 0===f?"":c(f),this._textColor=void 0===h?"":c(h),this._text=void 0===l?"":ne(l),this._isProgressVisible=r,this._isVisible=o,this._isActive=a}return Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(e){e=c(e);var t=this._color;this._color=e,e!==t&&this.ee.emit("colorChange",e),this.autocommit&&this.commit()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isActive",{get:function(){return this._isActive},set:function(e){var t=this._isActive;this._isActive=e,e!==t&&this.ee.emit("activeChange",e),this.autocommit&&this.commit()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isProgressVisible",{get:function(){return this._isProgressVisible},set:function(e){var t=this._isProgressVisible;this._isProgressVisible=e,e!==t&&this.ee.emit("progressVisibleChange",e),this.autocommit&&this.commit()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isVisible",{get:function(){return this._isVisible},set:function(e){var t=this._isVisible;this._isVisible=e,e!==t&&this.ee.emit("visibleChange",e),this.autocommit&&this.commit()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(e){e=ne(e);var t=this._text;this._text=e,e!==t&&this.ee.emit("textChange",e),this.autocommit&&this.commit()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textColor",{get:function(){return this._textColor},set:function(e){e=c(e);var t=this._textColor;this._textColor=e,e!==t&&this.ee.emit("textColorChange",e),this.autocommit&&this.commit()},enumerable:!1,configurable:!0}),e.prototype.commit=function(){""!==this.text&&""!==this.color&&""!==this.textColor&&this.bridge.postEvent("web_app_setup_main_button",{is_visible:this.isVisible,is_active:this.isActive,is_progress_visible:this.isProgressVisible,text:this.text,color:this.color,text_color:this.textColor})},e.prototype.disable=function(){return this.isActive=!1,this},e.prototype.enable=function(){return this.isActive=!0,this},e.prototype.hide=function(){return this.isVisible=!1,this},e.prototype.hideProgress=function(){return this.isProgressVisible=!1,this},e.prototype.show=function(){return this.isVisible=!0,this},e.prototype.showProgress=function(){return this.isProgressVisible=!0,this},e.prototype.setText=function(e){return this.text=e,this},e.prototype.setTextColor=function(e){return this.textColor=e,this},e.prototype.setColor=function(e){return this.color=e,this},e}(),ie=function(){function e(e){void 0===e&&(e={}),this.ee=new p,this.on=this.ee.on.bind(this.ee),this.off=this.ee.off.bind(this.ee);var t=e.bridge,n=e.isOpened,r=void 0!==n&&n;this.bridge=$(t),this._isOpened=r}return Object.defineProperty(e.prototype,"isOpened",{get:function(){return this._isOpened},set:function(e){this._isOpened!==e&&(this._isOpened=e,this.ee.emit("openChange",this._isOpened))},enumerable:!1,configurable:!0}),e.prototype.hide=function(){this.isOpened=!1},e.prototype.show=function(e){var t=this;if(this._isOpened)throw new Error("Popup is already opened.");var n=function(e){var t=e.message.trim(),n=(e.title||"").trim(),r=e.buttons||[];if(n.length>64)throw new Error("Title has incorrect size: ".concat(n.length));if(0===t.length||t.length>256)throw new Error("Message has incorrect size: ".concat(t.length));if(r.length>3)throw new Error("Buttons have incorrect size: ".concat(r.length));return{title:n,message:t,buttons:0===r.length?[{type:"close",id:""}]:r.map((function(e){var t=e.id,n=void 0===t?"":t;if(n.length>64)throw new Error("Button ID has incorrect size: ".concat(n));switch(e.type){case void 0:case"default":case"destructive":if(e.text=e.text.trim(),0===e.text.length||e.text.length>64){var r=e.type||"default";throw new Error('Button text with type "'.concat(r,'" has incorrect size: ').concat(e.text.length))}}return Q(Q({},e),{id:n})}))}}(e);return this.isOpened=!0,new Promise((function(e){var r=function(n){var i=n.button_id,o=void 0===i?null:i;t.bridge.off("popup_closed",r),t.isOpened=!1,t.ee.emit("close",o),e(o)};t.ee.emit("open",n),t.bridge.on("popup_closed",r),t.bridge.postEvent("web_app_open_popup",n)}))},e.prototype.showAlert=function(e){return Y(this,void 0,void 0,(function(){return ee(this,(function(t){switch(t.label){case 0:return[4,this.show({message:e,buttons:[{type:"close"}]})];case 1:return t.sent(),[2]}}))}))},e.prototype.showConfirm=function(e){return this.show({message:e,buttons:[{type:"ok",id:"ok"},{id:"cancel",type:"cancel"}]}).then((function(e){return"ok"===e}))},e.supports=Z({show:"web_app_open_popup"}),e}(),oe=function(){function e(e){void 0===e&&(e={}),this.ee=new p,this._backgroundColor=null,this._buttonColor=null,this._buttonTextColor=null,this._hintColor=null,this._linkColor=null,this._secondaryBackgroundColor=null,this._textColor=null,this.on=this.ee.on.bind(this.ee),this.off=this.ee.off.bind(this.ee),this.assignThemeParams(e)}return e.fromJson=function(t){return new e(J(t))},e.request=function(e){return void 0===e&&(e=z()),new Promise((function(t){var n=function(r){e.off("theme_changed",n),t(J(r))};e.on("theme_changed",n),e.postEvent("web_app_request_theme")}))},e.prototype.assignThemeParams=function(e){var t=this,n=!1;return["buttonColor","buttonTextColor","linkColor","textColor","hintColor","secondaryBackgroundColor","backgroundColor"].forEach((function(r){var i=e[r];if(void 0!==i){try{i=c(i)}catch(e){throw new TypeError('Unable to convert color "'.concat(r,' to RGB."'),{cause:e})}var o="_"+r;t[o]!==i&&(t[o]=i,n=!0)}})),n},Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._backgroundColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"buttonColor",{get:function(){return this._buttonColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"buttonTextColor",{get:function(){return this._buttonTextColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hintColor",{get:function(){return this._hintColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isDark",{get:function(){var e=this.backgroundColor;return null===e||l(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"linkColor",{get:function(){return this._linkColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"secondaryBackgroundColor",{get:function(){return this._secondaryBackgroundColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textColor",{get:function(){return this._textColor},enumerable:!1,configurable:!0}),e.prototype.update=function(e){this.assignThemeParams(e)&&this.ee.emit("change")},e}();function se(e){return e<0?0:e}var ae=function(){function e(e){void 0===e&&(e={}),this.ee=new p,this.on=this.ee.on.bind(this.ee),this.off=this.ee.off.bind(this.ee);var t=e.height,n=void 0===t?0:t,r=e.width,i=void 0===r?0:r,o=e.stableHeight,s=void 0===o?0:o,a=e.isExpanded,u=void 0!==a&&a,c=e.bridge;this.bridge=$(c),this._height=se(n),this._width=se(i),this._stableHeight=se(s),this._isExpanded=u}return e.request=function(e){return void 0===e&&(e=z()),new Promise((function(t){var n=function(r){e.off("viewport_changed",n);var i=r.height,o=r.width,s=r.is_expanded,a=r.is_state_stable;t({height:i,isExpanded:s,width:o,isStateStable:a})};e.on("viewport_changed",n),e.postEvent("web_app_request_viewport")}))},Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(e){e=se(e),this._height!==e&&(this._height=e,this.ee.emit("heightChange",e))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"stableHeight",{get:function(){return this._stableHeight},set:function(e){e=se(e),this._stableHeight!==e&&(this._stableHeight=e,this.ee.emit("stableHeightChange",e))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isExpanded",{get:function(){return this._isExpanded},set:function(e){this._isExpanded!==e&&(this._isExpanded=e,this.ee.emit("expansionChange",e))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(e){e=se(e),this._width!==e&&(this._width=e,this.ee.emit("widthChange",e))},enumerable:!1,configurable:!0}),e.prototype.expand=function(){this.bridge.postEvent("web_app_expand")},Object.defineProperty(e.prototype,"isStable",{get:function(){return this._stableHeight===this._height},enumerable:!1,configurable:!0}),e.prototype.update=function(e){void 0===e&&(e={});var t=e.height,n=void 0===t?this.height:t,r=e.isExpanded,i=void 0===r?this.isExpanded:r,o=e.width,s=void 0===o?this.width:o,a=e.isStateStable,u=void 0!==a&&a;this.height=n,this.width=s,this.isExpanded=i,u&&(this.stableHeight=n)},e}();function ue(e){return"tdesktop"===e}var ce=function(){function e(e,t){void 0===t&&(t={}),this.ee=new p,this.on=this.ee.on.bind(this.ee),this.off=this.ee.off.bind(this.ee);var n=t.bridge,r=t.headerColor,i=void 0===r?"bg_color":r,o=t.backgroundColor,s=void 0===o?"#ffffff":o,a=t.isClosingConfirmationEnabled,u=void 0!==a&&a,l=t.platform,h=void 0===l?"unknown":l;this.bridge=$(n),this.version=e,this.platform=h,this._backgroundColor=c(s),this._headerColor=i,this._isClosingConfirmationEnabled=u}return Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._backgroundColor},enumerable:!1,configurable:!0}),e.prototype.close=function(){this.bridge.postEvent("web_app_close")},Object.defineProperty(e.prototype,"colorScheme",{get:function(){return l(this.backgroundColor)?"dark":"light"},enumerable:!1,configurable:!0}),e.prototype.disableClosingConfirmation=function(){this.isClosingConfirmationEnabled=!1},e.prototype.enableClosingConfirmation=function(){this.isClosingConfirmationEnabled=!0},Object.defineProperty(e.prototype,"headerColor",{get:function(){return this._headerColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isClosingConfirmationEnabled",{get:function(){return this._isClosingConfirmationEnabled},set:function(e){this.bridge.postEvent("web_app_setup_closing_behavior",{need_confirmation:e}),this._isClosingConfirmationEnabled!==e&&(this._isClosingConfirmationEnabled=e,this.ee.emit("closingConfirmationChange",e))},enumerable:!1,configurable:!0}),e.prototype.isVersionAtLeast=function(e){return P(e,this.version)>=0},Object.defineProperty(e.prototype,"isAndroid",{get:function(){return function(e){return"android"===e}(this.platform)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isDesktop",{get:function(){return ue(this.platform)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isIOS",{get:function(){return function(e){return"ios"===e}(this.platform)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isWeb",{get:function(){return function(e){return"webz"===e}(this.platform)},enumerable:!1,configurable:!0}),e.prototype.openLink=function(e){if(e=G(e),M("web_app_open_link",this.version))return this.bridge.postEvent("web_app_open_link",{url:e});window.open(e,"_blank")},e.prototype.openTelegramLink=function(e){var t=new URL(G(e)),n=t.hostname,r=t.pathname,i=t.search;if("t.me"!==n)throw new Error("URL has not allowed hostname: ".concat(n,'. Only "t.me" is allowed'));if(M("web_app_open_tg_link",this.version))return this.bridge.postEvent("web_app_open_tg_link",{path_full:r+i});window.location.href=e},e.prototype.openInvoice=function(e){var t=this,n=new URL(G(e)),r=n.hostname,i=n.pathname;if("t.me"!==r)throw new Error("Incorrect hostname: "+r);var o=i.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/);if(null===o)throw new Error('Link pathname has incorrect format. Expected to receive "/invoice/slug" or "/$slug"');return new Promise((function(e){var n=function(r){t.bridge.off("invoice_closed",n),e(r.status)};t.bridge.on("invoice_closed",n),t.bridge.postEvent("web_app_open_invoice",{slug:o[2]})}))},e.prototype.ready=function(){this.bridge.postEvent("web_app_ready")},e.prototype.sendData=function(e){var t=new Blob([e]).size;if(0===t||t>4096)throw new Error("Passed data has incorrect size: ".concat(t));this.bridge.postEvent("web_app_data_send",{data:e})},e.prototype.setBackgroundColor=function(e){e=c(e),this.bridge.postEvent("web_app_set_background_color",{color:e}),this._backgroundColor!==e&&(this._backgroundColor=e,this.ee.emit("backgroundColorChange",e))},e.prototype.setHeaderColor=function(e){this.bridge.postEvent("web_app_set_header_color",{color_key:e}),this._headerColor!==e&&(this._headerColor=e,this.ee.emit("headerColorChange",e))},e.prototype.supports=function(t){return e.supports(t,this.version)},e.supports=Z({setBackgroundColor:"web_app_set_background_color",setHeaderColor:"web_app_set_header_color",openInvoice:"web_app_open_invoice"}),e}(),le=O({version:["tgWebAppVersion",w],initData:["tgWebAppData",N],platform:["tgWebAppPlatform",w],themeParams:["tgWebAppThemeParams",J]});function he(e,t){var n=new oe(t);return e.on("theme_changed",(function(e){var t=e.theme_params;n.update(J(t))})),n}function pe(e,t,n){return Y(this,void 0,void 0,(function(){var r,i,o,s,a,u,c;return ee(this,(function(l){switch(l.label){case 0:return ue(t)?(u={width:window.innerWidth,height:window.innerHeight,isStateStable:!0,isExpanded:!0},[3,3]):[3,1];case 1:return[4,ae.request(e)];case 2:u=l.sent(),l.label=3;case 3:return i=(r=u).height,o=r.isStateStable,s=r.width,a=r.isExpanded,c=new ae(Q(Q({height:i,width:s,isExpanded:a,stableHeight:o?i:0},n),{bridge:e})),e.on("viewport_changed",(function(e){var t=e.height,n=e.is_state_stable,r=e.width,i=e.is_expanded;c.update({height:t,width:r,isStateStable:n,isExpanded:i})})),[2,c]}}))}))}function fe(e,t){var n=new ie(Q(Q({},t),{bridge:e}));return e.on("popup_closed",(function(){return n.hide()})),n}function de(e){return void 0===e&&(e=!1),Y(this,void 0,void 0,(function(){var t,n,r,i,o,s,a,u,c,l,h,p,f,d,b,g,v,_,m,y,w,C,E,O,x,P,k,j,S,T,V,A,D;return ee(this,(function(U){switch(U.label){case 0:return n={},r={},i={},o={},s={},a={},"boolean"==typeof e?t={debug:e}:(u=e.props||{},c=u.bridge,l=void 0===c?{}:c,h=u.haptic,p=void 0===h?{}:h,f=u.backButton,d=void 0===f?{}:f,b=u.mainButton,g=void 0===b?{}:b,v=u.popup,_=void 0===v?{}:v,m=u.viewport,y=void 0===m?{}:m,w=u.webApp,t=l,n=p,r=d,i=g,o=_,s=y,a=void 0===w?{}:w),C=window.location.hash.slice(1),E=z(t),O=le(C),x=O.initData,P=x.authDate,k=x.hash,j=X(x,["authDate","hash"]),S=O.version,T=O.platform,V=O.themeParams,q()&&((A=document.createElement("style")).id="__tg-iframe-style__",document.head.appendChild(A),E.on("set_custom_style",(function(e){return A.innerHTML=e})),E.postEvent("iframe_ready")),D={bridge:E,backButton:new F(Q(Q({},r),{bridge:E})),haptic:new K(Q(Q({},n),{bridge:E})),initData:new te(P,k,j),mainButton:new re(Q(Q({color:V.buttonColor,textColor:V.buttonTextColor},i),{bridge:E})),popup:fe(E,o),theme:he(E,V)},[4,pe(E,T,s)];case 1:return[2,(D.viewport=U.sent(),D.webApp=new ce(S,Q(Q({platform:T,backgroundColor:V.backgroundColor},a),{bridge:E})),D)]}}))}))}function be(e,t){var n,i=(n=(0,r.useState)(0)[1],(0,r.useCallback)((function(){return n((function(e){return(e+1)%1e6}))}),[]));(0,r.useMemo)((function(){return t}),[]).forEach((function(t){(0,r.useEffect)((function(){return e.on(t,i),function(){return e.off(t,i)}}),[e,i])}))}var ge=(0,r.createContext)({components:null,didInit:!1,error:null});ge.displayName="SDKContext";var ve=function(){return(0,r.useContext)(ge)};function _e(e){var t=ve().components;if(null===t)throw new Error('Unable to get component "'.concat(e,'" as long as SDK is not initialized.'));return t[e]}var me=ge.Provider,ye=(0,r.memo)((function(e){var t=e.children,n=e.initOptions,i=(0,r.useState)(!1),o=i[0],s=i[1],a=(0,r.useState)(null),u=a[0],c=a[1],l=(0,r.useState)(null),h=l[0],p=l[1];(0,r.useEffect)((function(){s(!0),de(n).then(p).catch(c)}),[]);var f=(0,r.useMemo)((function(){return{components:h,didInit:o,error:u}}),[o,h,u]);return r.createElement(me,{value:f},t)}));ye.displayName="SDKProvider";function we(){var e=_e("webApp");return be(e,["closingConfirmationChange","backgroundColorChange","headerColorChange"]),e}var Ce=n(6924);const Ee=()=>{const{setColorMode:e}=(0,Ce.I)(),{colorScheme:t}=we();return(0,r.useEffect)((()=>{e(t)}),[t]),r.createElement(r.Fragment,null,r.createElement(s.l_,{to:a}))},Oe=e=>{let{children:t}=e;const{components:n}=ve();return null===n?null:r.createElement(o.Z,{noFooter:!0},t)},xe=()=>r.createElement(ye,null,r.createElement(Oe,null,r.createElement(Ee,null)));var Pe=n(4401);function ke(){return Pe.Z.canUseDOM&&(q()&&document.referrer.startsWith("https://web.telegram.org/")||H(window)||L(window))?r.createElement(xe,null):r.createElement(u,null)}}}]);