(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0xIW":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("q1tI");t.default=function(e){r.useEffect(e,[])}},"9+Sh":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isClient="object"==typeof window,t.on=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.addEventListener.apply(e,t)},t.off=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.removeEventListener.apply(e,t)},t.isDeepEqual=n("nkPT")},Bn2n:function(e,t,n){var r=n("q1tI");function o(e){return r.createElement("svg",e,r.createElement("path",{d:"M15.31,9.5A5.81,5.81,0,1,1,9.5,3.69,5.81,5.81,0,0,1,15.31,9.5Zm-.75,0A5.06,5.06,0,1,0,9.5,14.56,5.06,5.06,0,0,0,14.56,9.5Zm-4.46,0,1.62,1.62a.28.28,0,0,1,0,.4l-.2.2a.28.28,0,0,1-.4,0L9.5,10.1,7.88,11.72a.28.28,0,0,1-.4,0l-.2-.2a.28.28,0,0,1,0-.4L8.9,9.5,7.28,7.88a.28.28,0,0,1,0-.4l.2-.2a.28.28,0,0,1,.4,0L9.5,8.9l1.62-1.62a.28.28,0,0,1,.4,0l.2.2a.28.28,0,0,1,0,.4Z"}))}o.defaultProps={id:"aa5b50b9-db4f-4252-8eb2-32777a9e4f5a","data-name":"Слой 1",viewBox:"0 0 19 19"},e.exports=o,o.default=o},TTI7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("q1tI"),o=n("9+Sh").isClient?window:null,i=function(e){return!!e.addEventListener},a=function(e){return!!e.on};t.default=function(e,t,n,u){void 0===n&&(n=o),r.useEffect((function(){if(t&&n)return i(n)?n.addEventListener(e,t,u):a(n)&&n.on(e,t,u),function(){i(n)?n.removeEventListener(e,t,u):a(n)&&n.off(e,t,u)}}),[e,t,n,JSON.stringify(u)])}},XseE:function(e,t){!function(){if("undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof HTMLElement){var e=!1;try{var t=document.createElement("div");t.addEventListener("focus",(function(e){e.preventDefault(),e.stopPropagation()}),!0),t.focus(Object.defineProperty({},"preventScroll",{get:function(){e=!0}}))}catch(n){}if(void 0===HTMLElement.prototype.nativeFocus&&!e){HTMLElement.prototype.nativeFocus=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(e){var t=window.scrollY||window.pageYOffset;this.nativeFocus(),e&&e.preventScroll&&setTimeout((function(){window.scroll(window.scrollX||window.pageXOffset,t)}),0)}}}}()},YTdI:function(e,t,n){"use strict";n("XseE");var r=n("q1tI"),o=n.n(r),i=n("i8i4"),a=n("TTI7"),u=n.n(a),l=n("pW3x"),c=n.n(l);Object.create;function f(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r}Object.create;var d=function(e){return e+"ms"},s=function(e){var t=e.height,n=e.innerHeight,r=e.innerWidth,o=e.isLoaded,i=e.isUnloading,a=e.left,u=e.originalTransform,l=e.top,c=e.transitionDuration,s=e.width,v=e.zoomMargin,p=d(c);if(!o||i){var m=f(["scale(1)","translate(0, 0)"],u?[u]:[]).join(" ");return{height:t,left:a,top:l,transform:m,WebkitTransform:m,transitionDuration:p,width:s}}var g=function(e){var t=e.height,n=e.innerHeight,r=e.innerWidth,o=e.width,i=e.zoomMargin,a=r/(o+i),u=n/(t+i);return Math.min(a,u)}({height:t,innerWidth:r,innerHeight:n,width:s,zoomMargin:v}),b=f(["scale("+g+")","translate("+(r/2-(a+s/2))/g+"px, "+(n/2-(l+t/2))/g+"px)"],u?[u]:[]).join(" ");return{height:t,left:a,top:l,transform:b,WebkitTransform:b,transitionDuration:p,width:s}},v={getBoundingClientRect:function(){return{height:0,left:0,top:0,width:0}},style:{transform:null}},p=Object(r.memo)((function(e){var t=e.children,n=e.closeText,a=void 0===n?"Unzoom Image":n,l=e.onUnload,f=e.onLoad,p=e.overlayBgColorEnd,m=void 0===p?"rgba(255, 255, 255, 0.95)":p,g=e.overlayBgColorStart,b=void 0===g?"rgba(255, 255, 255, 0)":g,h=e.parentRef,w=e.portalEl,y=void 0===w?document.body:w,E=e.scrollableEl,O=void 0===E?window:E,j=e.transitionDuration,C=void 0===j?300:j,S=e.zoomMargin,k=void 0===S?0:S,M=e.zoomZindex,T=void 0===M?2147483647:M,z=Object(r.useRef)(null),L=Object(r.useState)(0)[1],x=Object(r.useState)(!1),_=x[0],D=x[1],B=Object(r.useState)(!1),I=B[0],P=B[1],W=c()(),H=W.width,R=W.height,q=Object(r.useCallback)((function(e){e.preventDefault(),P(!0)}),[]),Z=Object(r.useCallback)((function(e){"Escape"!==e.key&&27!==e.keyCode||(e.stopPropagation(),P(!0))}),[]),A=Object(r.useCallback)((function(){L((function(e){return e+1})),I||P(!0)}),[I]);u()("keydown",Z,document),u()("scroll",A,O),Object(r.useEffect)((function(){D(!0),f(),z.current&&z.current.focus({preventScroll:!0})}),[f]),Object(r.useEffect)((function(){var e=I?setTimeout(l,C):null;return function(){e&&clearTimeout(e)}}),[I,l,C]);var U=h.current||v,F=U.getBoundingClientRect(),X=F.height,G=F.left,J=F.top,Y=F.width,K=function(e){var t=e.isLoaded,n=e.isUnloading,r=e.overlayBgColorEnd,o=e.overlayBgColorStart,i=e.transitionDuration,a=e.zoomZindex,u={backgroundColor:o,transitionDuration:d(i),zIndex:a};return t&&!n&&(u.backgroundColor=r),u}({isLoaded:_,isUnloading:I,overlayBgColorEnd:m,overlayBgColorStart:b,transitionDuration:C,zoomZindex:T}),$=s({height:X,isLoaded:_,innerHeight:R,innerWidth:H,isUnloading:I,left:G,originalTransform:U.style.transform,top:J,transitionDuration:C,width:Y,zoomMargin:k});return Object(i.createPortal)(o.a.createElement("div",{"aria-modal":!0,"data-rmiz-overlay":!0,role:"dialog",style:K},o.a.createElement("div",{"data-rmiz-modal-content":!0,style:$},t),o.a.createElement("button",{"aria-label":a,"data-rmiz-btn-close":!0,onClick:q,ref:z})),y)})),m=Object(r.memo)((function(e){var t=e.children,n=e.closeText,i=void 0===n?"Unzoom image":n,a=e.overlayBgColorEnd,u=void 0===a?"rgba(255, 255, 255, 0.95)":a,l=e.overlayBgColorStart,c=void 0===l?"rgba(255, 255, 255, 0)":l,f=e.portalEl,d=e.openText,s=void 0===d?"Zoom image":d,v=e.scrollableEl,m=e.transitionDuration,g=void 0===m?300:m,b=e.wrapElement,h=void 0===b?"div":b,w=e.wrapStyle,y=e.zoomMargin,E=void 0===y?0:y,O=e.zoomZindex,j=void 0===O?2147483647:O,C=Object(r.useState)(!1),S=C[0],k=C[1],M=Object(r.useState)(!1),T=M[0],z=M[1],L=Object(r.useRef)(null),x=Object(r.useRef)(null),_=Object(r.useCallback)((function(e){S||(e.preventDefault(),k(!0))}),[S]),D=Object(r.useCallback)((function(){z(!0)}),[]),B=Object(r.useCallback)((function(){k(!1),z(!1),x.current&&x.current.focus({preventScroll:!0})}),[]),I=S&&T?"hidden":"visible";return o.a.createElement(r.StrictMode,null,o.a.createElement(h,{"data-rmiz-wrap":I,ref:L,style:w},t,o.a.createElement("button",{"aria-label":s,"data-rmiz-btn-open":!0,onClick:_,ref:x}),"undefined"!=typeof window&&S&&o.a.createElement(p,{closeText:i,onLoad:D,onUnload:B,overlayBgColorEnd:u,overlayBgColorStart:c,parentRef:L,portalEl:f,scrollableEl:v,transitionDuration:g,zoomMargin:E,zoomZindex:j},t)))}));t.a=m},eM9k:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("mrSG"),o=n("q1tI"),i=r.__importDefault(n("n5OK"));t.default=function(e){var t=o.useRef(0),n=o.useState(e),r=n[0],a=n[1],u=o.useCallback((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){a(e)}))}),[]);return i.default((function(){cancelAnimationFrame(t.current)})),[r,u]}},n5OK:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("mrSG"),o=n("q1tI"),i=r.__importDefault(n("0xIW"));t.default=function(e){var t=o.useRef(e);t.current=e,i.default((function(){return function(){return t.current()}}))}},nkPT:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!=o--;){var a=i[o];if(("_owner"!==a||!t.$$typeof)&&!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},pW3x:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("mrSG"),o=n("q1tI"),i=r.__importDefault(n("eM9k")),a=n("9+Sh");t.default=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n=i.default({width:a.isClient?window.innerWidth:e,height:a.isClient?window.innerHeight:t}),r=n[0],u=n[1];return o.useEffect((function(){if(a.isClient){var e=function(){u({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[]),r}}}]);
//# sourceMappingURL=24a04e1c93cc05cc6dfd3ee296283a52ccbf5c8e-367485f945c6d828db90.js.map