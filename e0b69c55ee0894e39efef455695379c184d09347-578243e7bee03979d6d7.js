(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"9eSz":function(e,t,r){"use strict";var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),s=n(r("8OQS")),u=n(r("pVnL")),l=n(r("q1tI")),d=n(r("17x9")),c=function(e){var t=(0,u.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=_([].concat(t.fluid))),t.fixed&&(t.fixed=_([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,n=h(t||r||[]);return n&&n.src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),m=function(e){var t=c(e),r=p(t);return g[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),r&&l.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function _(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function O(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function E(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function x(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",u=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+l+o+s+r+n+t+i+a+u+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=l.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(P,(0,u.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?l.default.createElement("picture",null,a(n),s):s})),P=l.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,d=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,u.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},h,{onLoad:o,onError:d,ref:t,loading:c,draggable:f,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));P.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var j=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&v&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),(r=p(t))&&(g[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,m=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,_=e.loading,x=e.draggable,I=g||m;if(!I)return null;var j=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,u.default)({opacity:j?1:0,transition:V?"opacity "+b+"ms":"none"},s),z="boolean"==typeof y?"lightgray":y,k={transitionDelay:b+"ms"},H=(0,u.default)({opacity:this.state.imgLoaded?0:1},V&&k,s,f),C={title:t,alt:this.state.isVisible?"":r,style:H,className:p,itemProp:w},W=this.state.isHydrated?h(I):I[0];if(g)return l.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),z&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&k)}),W.base64&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:C,imageVariants:I,generateSources:E}),W.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:C,imageVariants:I,generateSources:O}),this.state.isVisible&&l.default.createElement("picture",null,S(I),l.default.createElement(P,{alt:r,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:_,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,u.default)({alt:r,title:t,loading:_},W,{imageVariants:I}))}}));if(m){var N=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete N.display,l.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},z&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:z,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},V&&k)}),W.base64&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:C,imageVariants:I,generateSources:E}),W.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:C,imageVariants:I,generateSources:O}),this.state.isVisible&&l.default.createElement("picture",null,S(I),l.default.createElement(P,{alt:r,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:_,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,u.default)({alt:r,title:t,loading:_},W,{imageVariants:I}))}}))}return null},t}(l.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),T=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function z(e){return function(t,r,n){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");d.default.checkPropTypes(((a={})[r]=e,a),t,"prop",n)}}j.propTypes={resolutions:V,sizes:T,fixed:z(d.default.oneOfType([V,d.default.arrayOf(V)])),fluid:z(d.default.oneOfType([T,d.default.arrayOf(T)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var k=j;t.default=k},mrSG:function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return a})),r.d(t,"__assign",(function(){return i})),r.d(t,"__rest",(function(){return o})),r.d(t,"__decorate",(function(){return s})),r.d(t,"__param",(function(){return u})),r.d(t,"__metadata",(function(){return l})),r.d(t,"__awaiter",(function(){return d})),r.d(t,"__generator",(function(){return c})),r.d(t,"__createBinding",(function(){return f})),r.d(t,"__exportStar",(function(){return p})),r.d(t,"__values",(function(){return h})),r.d(t,"__read",(function(){return g})),r.d(t,"__spread",(function(){return m})),r.d(t,"__spreadArrays",(function(){return y})),r.d(t,"__await",(function(){return b})),r.d(t,"__asyncGenerator",(function(){return v})),r.d(t,"__asyncDelegator",(function(){return w})),r.d(t,"__asyncValues",(function(){return S})),r.d(t,"__makeTemplateObject",(function(){return _})),r.d(t,"__importStar",(function(){return O})),r.d(t,"__importDefault",(function(){return E})),r.d(t,"__classPrivateFieldGet",(function(){return x})),r.d(t,"__classPrivateFieldSet",(function(){return I}));var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function a(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function s(e,t,r,n){var a,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(i<3?a(o):i>3?a(t,r,o):a(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}function u(e,t){return function(r,n){t(r,n,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function d(e,t,r,n){return new(r||(r=Promise))((function(a,i){function o(e){try{u(n.next(e))}catch(t){i(t)}}function s(e){try{u(n.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}u((n=n.apply(e,t||[])).next())}))}function c(e,t){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(s){i=[6,s],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function f(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function p(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,i=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)o.push(n.value)}catch(s){a={error:s}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}return o}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function y(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),a=0;for(t=0;t<r;t++)for(var i=arguments[t],o=0,s=i.length;o<s;o++,a++)n[a]=i[o];return n}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function v(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,a=r.apply(e,t||[]),i=[];return n={},o("next"),o("throw"),o("return"),n[Symbol.asyncIterator]=function(){return this},n;function o(e){a[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||s(e,t)}))})}function s(e,t){try{(r=a[e](t)).value instanceof b?Promise.resolve(r.value.v).then(u,l):d(i[0][2],r)}catch(n){d(i[0][3],n)}var r}function u(e){s("next",e)}function l(e){s("throw",e)}function d(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function w(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,a){t[n]=e[n]?function(t){return(r=!r)?{value:b(e[n](t)),done:"return"===n}:a?a(t):t}:a}}function S(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=h(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,a){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,a,(t=e[r](t)).done,t.value)}))}}}function _(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function E(e){return e&&e.__esModule?e:{default:e}}function x(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function I(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},vuIU:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=e0b69c55ee0894e39efef455695379c184d09347-578243e7bee03979d6d7.js.map