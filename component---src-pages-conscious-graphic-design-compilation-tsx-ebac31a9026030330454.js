(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"03vf":function(e,n,t){e.exports=t.p+"static/conscious-graphic-design-compilation-min-67530aca75409a4e1ecb758b1c0a8eda.jpg"},"61uB":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),l=t("q1tI"),d=(o=l)&&o.__esModule?o:{default:o};var c={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},s=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t.reCalculateColumnCount=t.reCalculateColumnCount.bind(t),t.reCalculateColumnCountDebounce=t.reCalculateColumnCountDebounce.bind(t);var o=void 0;return o=t.props.breakpointCols&&t.props.breakpointCols.default?t.props.breakpointCols.default:parseInt(t.props.breakpointCols)||2,t.state={columnCount:o},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),r(n,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,n=this.props.breakpointCols;"object"!==(void 0===n?"undefined":a(n))&&(n={default:parseInt(n)||2});var t=1/0,o=n.default||2;for(var i in n){var r=parseInt(i);r>0&&e<=r&&r<t&&(t=r,o=n[i])}o=Math.max(1,parseInt(o)||1),this.state.columnCount!==o&&this.setState({columnCount:o})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,n=new Array(e),t=[].concat(this.props.children||[]),o=0;o<t.length;o++){var i=o%e;n[i]||(n[i]=[]),n[i].push(t[o])}return n}},{key:"renderColumns",value:function(){var e=this.props,n=e.column,t=e.columnAttrs,o=void 0===t?{}:t,a=e.columnClassName,r=this.itemsInColumns(),l=100/r.length+"%",c=a;"string"!=typeof c&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===c&&(c="my-masonry-grid_column"));var s=i({},n,o,{style:i({},o.style,{width:l}),className:c});return r.map((function(e,n){return d.default.createElement("div",i({},s,{key:n}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,n=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),t=function(e,n){var t={};for(var o in e)n.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),o=n;return"string"!=typeof n&&(this.logDeprecated('The property "className" requires a string'),void 0===n&&(o="my-masonry-grid")),d.default.createElement("div",i({},t,{className:o}),this.renderColumns())}}]),n}(d.default.Component);s.defaultProps=c,n.default=s},IXU0:function(e,n,t){"use strict";t.r(n);var o,i,a,r,l=t("q1tI"),d=t.n(l),c=t("soUV"),s=t("hB9E"),m=t("H8eV"),w=t("zkIc"),v=t("j3OZ"),p=t("MU5H"),g=t("vOnD"),u=t("61uB"),f=t.n(u),h=t("R8uD"),b=t("9eSz"),y=t.n(b),x=t("YTdI"),C=t("vbKG"),k=t("s/Ur"),I=g.b.section.withConfig({displayName:"Books__BooksSection",componentId:"sc-1fy107r-0"})(["margin-top:1.7vw;margin-bottom:1.7vw;@media only screen and (max-width:575px){margin-top:5vw;margin-bottom:5vw;}"]),E=g.b.div.withConfig({displayName:"Books__BooksWrapper",componentId:"sc-1fy107r-1"})(["padding:5.4vw 3vw 2vw;border-bottom:0.25vw dotted white;background:white;border-radius:0.6vw;@media only screen and (max-width:575px){padding:5.4vw 5vw 5.4vw;border-radius:2.5vw;}"]),_=g.b.div.withConfig({displayName:"Books__BooksHeader",componentId:"sc-1fy107r-2"})(["display:flex;padding-bottom:5.7vw;width:100%;@media only screen and (max-width:575px){flex-direction:column;}"]),N=g.b.h2.withConfig({displayName:"Books__BooksSectionTitle",componentId:"sc-1fy107r-3"})(["color:var(--granich-black);font-size:4.55vw;letter-spacing:-0.2vw;font-weight:700;line-height:0.85;margin-right:7vw;width:25vw;min-width:25vw;@media only screen and (max-width:575px){font-size:11vw;letter-spacing:-0.7vw;line-height:1;margin-right:0;margin-bottom:4vw;width:100%;}"]),z=g.b.div.withConfig({displayName:"Books__BooksSectionText",componentId:"sc-1fy107r-4"})(["color:var(--granich-black);font-size:1.5vw;margin-top:1vw;line-height:1.55;letter-spacing:0.025vw;font-weight:500;@media only screen and (max-width:575px){font-size:3.9vw;letter-spacing:-0.08vw;}"]),T=g.b.div.withConfig({displayName:"Books__BooksList",componentId:"sc-1fy107r-5"})(["margin-bottom:7vw;:last-child{margin-bottom:0;}"]),B=g.b.div.withConfig({displayName:"Books__BooksListDescr",componentId:"sc-1fy107r-6"})(["color:var(--granich-black);font-size:1.5vw;margin-top:-1.2vw;line-height:1.55;font-weight:500;width:45vw;margin-bottom:3vw;@media only screen and (max-width:575px){font-size:3.9vw;letter-spacing:-0.08vw;width:100% !important;}"]),O=g.b.div.withConfig({displayName:"Books__BooksItemWrapper",componentId:"sc-1fy107r-7"})(['padding:1.8vw 1.8vw 2.3vw;border-radius:0.6vw;background:#f2f2f2;div[data-rmiz-wrap="visible"]{width:100%;}div[data-rmiz-wrap="hidden"]{width:100%;}@media only screen and (max-width:575px){padding:4vw 4vw 7vw;border-radius:1.7vw;}']),j=Object(g.b)((function(e){return d.a.createElement(y.a,e)})).withConfig({displayName:"Books__BooksItemImage",componentId:"sc-1fy107r-8"})(["height:17vw;width:100%;display:flex;justify-content:center;align-items:center;@media only screen and (max-width:575px){height:40vw;}"]),P=g.b.div.withConfig({displayName:"Books__BooksItemInfo",componentId:"sc-1fy107r-9"})(["color:white;display:flex;margin-top:1vw;"]),S=g.b.div.withConfig({displayName:"Books__BooksItemInfoDetails",componentId:"sc-1fy107r-10"})(["color:inherit;min-width:6.3vw;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;@media only screen and (max-width:575px){min-width:17vw;}"]),V=g.b.div.withConfig({displayName:"Books__BooksItemInfoText",componentId:"sc-1fy107r-11"})(["p{color:var(--granich-grey);font-size:1.15vw;line-height:1.35;}i{color:var(--granich-black);font-size:0.8vw;font-style:normal;display:block;margin-bottom:0.3vw;font-weight:600;}h3{color:var(--granich-black);font-size:1.17vw;margin-bottom:0.7vw;font-weight:500;}b{color:var(--granich-black);font-size:inherit;font-weight:500;}a{border-bottom:1px solid rgba(0,0,0,0.2);:hover{border-bottom:1px solid var(--granich-grey);}}@media only screen and (max-width:575px){p{font-size:3.5vw;}i{font-size:2.6vw;margin-bottom:0.5vw;}h3{font-size:3.5vw;margin-bottom:2vw;}}"]),D=g.b.div.withConfig({displayName:"Books__BooksItemNumber",componentId:"sc-1fy107r-12"})(["color:var(--granich-black);font-family:EB Garamond;font-style:italic;font-size:2.3vw;@media only screen and (max-width:575px){font-size:6.5vw;}"]),L=g.b.div.withConfig({displayName:"Books__BooksItemInfoLinks",componentId:"sc-1fy107r-13"})(["width:4vw;p{margin-top:0.5vw;font-size:0.8vw;line-height:1.3;}p:empty{display:none;}a{color:var(--granich-red);font-size:0.8vw;position:relative;display:inline;border-bottom:1px solid rgba(228,5,33,0.2);:hover{border-bottom:1px solid var(--granich-red);}}@media only screen and (max-width:575px){width:14vw;margin-bottom:0.5vw;p{margin-top:3vw;}a{font-size:2.5vw;}}"]),W={renderNode:(o={},o[C.INLINES.HYPERLINK]=function(e){return d.a.createElement("a",{href:e.data.uri,target:"_blank",rel:"noopener noreferrer"},e.content[0].value)},o)},R={default:2,575:1},G=function(e){var n=e.text,t=e.number,o=e.image,i=e.links,a=Object(k.useMediaQuery)({query:"(max-width: 575px)"}),r=Object(k.useMediaQuery)({query:"(min-width: 575px)"});return d.a.createElement(O,null,r&&d.a.createElement(x.a,null,d.a.createElement(j,{fluid:o})),a&&d.a.createElement(j,{fluid:o}),d.a.createElement(P,null,d.a.createElement(S,null,d.a.createElement(D,null,"№"+t),d.a.createElement(L,{className:"collection_link"},Object(h.documentToReactComponents)(i.json,W))),d.a.createElement(V,null,Object(h.documentToReactComponents)(n,W))))},A=function(e){var n=e.data,t=e.categoryTwo,o=(e.categoryThree,Object(l.useState)([])),i=o[0],a=o[1],r=Object(l.useState)([]),c=r[0],s=r[1];return Object(l.useEffect)((function(){var e=n.filter((function(e){return"1"===e.node.booksCategory})),t=n.filter((function(e){return"2"===e.node.booksCategory}));a(e),s(t)}),[n]),d.a.createElement(I,null,d.a.createElement(p.a,null,d.a.createElement(E,null,d.a.createElement(_,null,d.a.createElement(N,null,"Ценные книги"),d.a.createElement(z,null,"Книги я расставил в порядке приоритета",d.a.createElement("br",null),"по практической направленности")),d.a.createElement(T,null,d.a.createElement(f.a,{breakpointCols:R,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},i.map((function(e,n){return d.a.createElement(d.a.Fragment,{key:e.node.id},d.a.createElement(G,{image:e.node.booksImage.fluid,number:n+1,links:e.node.childContentfulGranichCollectionBooksBooksLinksRichTextNode,text:e.node.booksText.json}))})))),t&&d.a.createElement(T,null,d.a.createElement(B,{style:{width:"42vw"}},t),d.a.createElement(f.a,{breakpointCols:R,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},c.map((function(e,n){return d.a.createElement(d.a.Fragment,{key:e.node.id},d.a.createElement(G,{image:e.node.booksImage.fluid,number:i.length+n+1,links:e.node.childContentfulGranichCollectionBooksBooksLinksRichTextNode,text:e.node.booksText.json}))})))))))},F=g.b.section.withConfig({displayName:"Tools__ToolsSection",componentId:"sc-2nufa7-0"})(["margin-top:1.7vw;margin-bottom:1.7vw;@media only screen and (max-width:575px){margin-top:5vw;margin-bottom:5vw;}"]),M=g.b.div.withConfig({displayName:"Tools__ToolsWrapper",componentId:"sc-2nufa7-1"})([""]),q=g.b.h2.withConfig({displayName:"Tools__ToolsSectionTitle",componentId:"sc-2nufa7-2"})(["font-size:4.55vw;font-weight:700;letter-spacing:-0.2vw;margin-bottom:2.4vw;@media only screen and (max-width:575px){font-size:11vw;margin-bottom:4vw;}"]),H=g.b.div.withConfig({displayName:"Tools__ToolsList",componentId:"sc-2nufa7-3"})([""]),U=g.b.div.withConfig({displayName:"Tools__ToolsItemWrapper",componentId:"sc-2nufa7-4"})(["padding:1.6vw 1.6vw 2.3vw;border-radius:0.6vw;background:white;@media only screen and (max-width:575px){padding:4vw 4vw 7vw;border-radius:1.7vw;}"]),K=Object(g.b)((function(e){return d.a.createElement(y.a,e)})).withConfig({displayName:"Tools__ToolsItemImage",componentId:"sc-2nufa7-5"})(["height:auto;width:5.7vw;display:flex;margin-left:-0.3vw;justify-content:center;align-items:center;:hover{cursor:pointer;svg{transform:scale(1.05);}}@media only screen and (max-width:575px){width:15vw;}"]),Y=g.b.div.withConfig({displayName:"Tools__ToolsItemInfo",componentId:"sc-2nufa7-6"})(["color:white;display:flex;"]),Z=g.b.div.withConfig({displayName:"Tools__ToolsItemInfoDetails",componentId:"sc-2nufa7-7"})(["color:inherit;min-width:6.3vw;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;@media only screen and (max-width:575px){min-width:17vw;}"]),Q=g.b.div.withConfig({displayName:"Tools__ToolsItemInfoText",componentId:"sc-2nufa7-8"})(["color:inherit;margin-top:0.5vw;p{color:var(--granich-light-grey);font-size:1.15vw;line-height:1.35;margin-bottom:0.5vw;}i{color:var(--granich-black);font-size:0.8vw;font-style:normal;display:block;font-weight:600;}h3{color:var(--granich-black);font-size:1.17vw;margin-bottom:0.7vw;font-weight:500;}b{color:var(--granich-black);font-size:inherit;font-weight:500;}a{border-bottom:1px solid #dedede;:hover{border-bottom:1px solid var(--granich-grey);}}@media only screen and (max-width:575px){p{font-size:3.5vw;}i{font-size:2.6vw;margin-bottom:0.5vw;}h3{font-size:3.5vw;margin-bottom:2vw;}}"]),J=g.b.div.withConfig({displayName:"Tools__ToolsItemInfoLinks",componentId:"sc-2nufa7-9"})(["width:4.5vw;margin-bottom:0.5vw;p{margin-top:0.5vw;font-size:0.8vw;line-height:1.3;}p:empty{display:none;}a{color:var(--granich-red);font-size:0.8vw;position:relative;display:inline;border-bottom:1px solid rgba(228,5,33,0.2);:hover{border-bottom:1px solid var(--granich-red);}}@media only screen and (max-width:575px){width:13vw;margin-bottom:0.5vw;p{margin-top:1vw;}a{font-size:2.5vw;}}"]),X={renderNode:(i={},i[C.INLINES.HYPERLINK]=function(e){return d.a.createElement("a",{href:e.data.uri,rel:"noopener noreferrer",target:"_blank"},e.content[0].value)},i)},$={default:2,575:1},ee=function(e){var n=e.text,t=e.image,o=e.links;return d.a.createElement(U,null,d.a.createElement(Y,null,d.a.createElement(Z,null,d.a.createElement(K,{fluid:t}),d.a.createElement(J,{className:"collection_link"},Object(h.documentToReactComponents)(o.json,X))),d.a.createElement(Q,null,Object(h.documentToReactComponents)(n,X))))},ne=function(e){var n=e.data;return d.a.createElement(F,null,d.a.createElement(p.a,null,d.a.createElement(q,null,"Толковые инструменты"),d.a.createElement(M,null,d.a.createElement(H,null,d.a.createElement(f.a,{breakpointCols:$,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},n.map((function(e){return d.a.createElement(ee,{image:e.node.toolsImage.fluid,key:e.node.id,links:e.node.childContentfulGranichCollectionToolsToolsLinksRichTextNode,text:e.node.toolsText.json})})))))))},te=t("1eu9"),oe=t.n(te),ie=t("Wbzz"),ae=g.b.section.withConfig({displayName:"Video__VideoSection",componentId:"sc-16gg0bs-0"})(["margin-top:1.7vw;margin-bottom:1.7vw;@media only screen and (max-width:575px){margin-top:5vw;margin-bottom:5vw;}"]),re=g.b.div.withConfig({displayName:"Video__VideoWrapper",componentId:"sc-16gg0bs-1"})(["padding:5.4vw 3vw 2vw;border-bottom:0.25vw dotted white;background:white;border-radius:0.6vw;@media only screen and (max-width:575px){padding:5.4vw 5vw 5.4vw;border-radius:2.5vw;}"]),le=g.b.div.withConfig({displayName:"Video__VideoHeader",componentId:"sc-16gg0bs-2"})(["display:flex;padding-bottom:5.7vw;width:100%;@media only screen and (max-width:575px){flex-direction:column;}"]),de=g.b.h2.withConfig({displayName:"Video__VideoSectionTitle",componentId:"sc-16gg0bs-3"})(["color:var(--granich-black);font-size:4.55vw;letter-spacing:-0.2vw;font-weight:700;line-height:0.85;margin-right:2vw;width:33vw;min-width:33vw;@media only screen and (max-width:575px){font-size:11vw;letter-spacing:-0.7vw;line-height:1;margin-right:0;margin-bottom:4vw;width:100%;}"]),ce=g.b.div.withConfig({displayName:"Video__VideoSectionText",componentId:"sc-16gg0bs-4"})(["color:var(--granich-black);font-size:1.5vw;margin-top:-1.2vw;line-height:1.55;letter-spacing:0.025vw;font-weight:500;@media only screen and (max-width:575px){font-size:3.9vw;letter-spacing:-0.08vw;}"]),se=g.b.div.withConfig({displayName:"Video__VideoList",componentId:"sc-16gg0bs-5"})(["margin-bottom:7vw;:last-child{margin-bottom:0;}"]),me=g.b.div.withConfig({displayName:"Video__VideoListDescr",componentId:"sc-16gg0bs-6"})(["color:var(--granich-black);font-size:1.5vw;margin-top:-1.2vw;line-height:1.55;font-weight:500;width:45vw;margin-bottom:3vw;@media only screen and (max-width:575px){font-size:3.9vw;letter-spacing:-0.08vw;width:100% !important;}"]),we=g.b.div.withConfig({displayName:"Video__VideoItemWrapper",componentId:"sc-16gg0bs-7"})(["padding:1.8vw 1.8vw 2.3vw;border-radius:0.6vw;background:#2a2a2a;transition:transform 0.2s ease;display:block;:hover{transform:scale(1.02);cursor:pointer;}@media only screen and (max-width:575px){padding:4vw 4vw 7vw;border-radius:1.7vw;}"]),ve=g.b.a.withConfig({displayName:"Video__VideoItemWrapperLink",componentId:"sc-16gg0bs-8"})([""]),pe=Object(g.b)((function(e){return d.a.createElement(oe.a,e)})).withConfig({displayName:"Video__VideoItemImage",componentId:"sc-16gg0bs-9"})(["height:17vw;margin-bottom:1vw;display:flex;justify-content:center;align-items:center;:hover{cursor:pointer;svg{transform:scale(1.05);}}@media only screen and (max-width:575px){height:40vw;margin-bottom:5vw;}"]),ge=g.b.div.withConfig({displayName:"Video__VideoItemInfo",componentId:"sc-16gg0bs-10"})(["color:white;display:flex;"]),ue=g.b.div.withConfig({displayName:"Video__VideoItemInfoDetails",componentId:"sc-16gg0bs-11"})(["color:inherit;min-width:6.3vw;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;@media only screen and (max-width:575px){min-width:17vw;}"]),fe=g.b.div.withConfig({displayName:"Video__VideoItemInfoText",componentId:"sc-16gg0bs-12"})(["color:inherit;p{color:var(--granich-light-grey);font-size:1.15vw;line-height:1.35;}i{color:white;font-size:0.8vw;font-style:normal;display:block;margin-bottom:0.3vw;}h3{color:white;font-size:1.17vw;margin-bottom:0.7vw;font-weight:500;line-height:1.35;}b{color:white;font-size:inherit;font-weight:500;line-height:1.35;}a{text-decoration:underline;}@media only screen and (max-width:575px){p{font-size:3.5vw;}i{font-size:2.6vw;margin-bottom:0.5vw;}h3{font-size:3.5vw;margin-bottom:2vw;}}"]),he=g.b.div.withConfig({displayName:"Video__VideoItemNumber",componentId:"sc-16gg0bs-13"})(["color:var(--granich-red);font-family:EB Garamond;font-style:italic;font-size:2.3vw;@media only screen and (max-width:575px){font-size:6.5vw;}"]),be=g.b.div.withConfig({displayName:"Video__VideoItemInfoTiming",componentId:"sc-16gg0bs-14"})(['color:inherit;font-size:0.8vw;border-bottom:2px solid var(--granich-red);position:relative;padding:0 0.65vw 0.2vw;:before{content:"";width:0.35vw;height:0.35vw;background:var(--granich-red);position:absolute;top:20%;left:0;border-radius:100vw;}@media only screen and (max-width:575px){font-size:2.5vw;border-bottom:2px solid var(--granich-red);padding:0 0.8vw 1vw 2.2vw;margin-bottom:0.8vw;:before{width:1vw;height:1vw;top:20%;left:0;}}']),ye=g.b.div.withConfig({displayName:"Video__VideoIcons",componentId:"sc-16gg0bs-15"})([""]),xe=Object(g.b)((function(e){return d.a.createElement(y.a,e)})).withConfig({displayName:"Video__VideoIconImg",componentId:"sc-16gg0bs-16"})(["width:2.5vw;height:2.5vw;margin:0.2vw 0;@media only screen and (max-width:575px){width:9vw;height:9vw;margin:1vw 0;}"]),Ce={default:2,575:1},ke={renderNode:(a={},a[C.INLINES.HYPERLINK]=function(e){return d.a.createElement("a",{href:e.data.uri,rel:"noopener noreferrer",target:"_blank"},e.content[0].value)},a)},Ie=function(e){var n=e.text,t=e.number,o=e.image,i=(e.links,e.timing),a=e.videoPageLink,r=e.videoIcons,l=e.mediumIcon,c=e.behanceIcon,s=e.pdfIcon,m=e.zipIcon;return d.a.createElement(we,null,d.a.createElement(ve,{target:"_blank",href:a,rel:"noopener noreferrer"},d.a.createElement(pe,{fluid:o}),d.a.createElement(ge,null,d.a.createElement(ue,null,d.a.createElement(he,null,"№"+t),r&&d.a.createElement(ye,null,r.map((function(e,n){return d.a.createElement(d.a.Fragment,{key:n},"PDF"===e&&d.a.createElement(xe,{fluid:s}),"Behance"===e&&d.a.createElement(xe,{fluid:c}),"Medium"===e&&d.a.createElement(xe,{fluid:l}),"Zip"===e&&d.a.createElement(xe,{fluid:m}))}))),d.a.createElement(be,null,i)),d.a.createElement(fe,null,Object(h.documentToReactComponents)(n,ke)))))},Ee=function(e){var n=e.data,t=e.topDescription,o=e.categoryTwo,i=(e.categoryThree,Object(l.useState)([])),a=i[0],r=i[1],c=Object(l.useState)([]),s=c[0],m=c[1];Object(l.useEffect)((function(){var e=n.filter((function(e){return"1"===e.node.videoCategory})),t=n.filter((function(e){return"2"===e.node.videoCategory}));r(e),m(t)}),[]);var w=Object(ie.useStaticQuery)("3535629331"),v=w.videoContentIconPDFImg.childImageSharp.fluid,g=w.videoContentIconBehance.childImageSharp.fluid,u=w.videoContentIconMedium.childImageSharp.fluid,h=w.videoContentZipIcon.childImageSharp.fluid;return d.a.createElement(ae,null,d.a.createElement(p.a,null,d.a.createElement(re,null,d.a.createElement(le,null,d.a.createElement(de,null,"Ценные видеолекции"),d.a.createElement(ce,null,t)),d.a.createElement(se,null,d.a.createElement(f.a,{breakpointCols:Ce,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},a.map((function(e,n){return d.a.createElement(d.a.Fragment,{key:e.node.id},d.a.createElement(Ie,{timing:e.node.videoTiming,image:e.node.videoImagePreview.fluid,videoPageLink:e.node.videoPageLink,pdfIcon:v,behanceIcon:g,mediumIcon:u,zipIcon:h,videoIcons:e.node.videoContentIcons,number:n+1,links:e.node.childContentfulGranichCollectionVideoVideoAdditionalLinksRichTextNode,text:e.node.videoText.json}))})))),d.a.createElement(se,null,d.a.createElement(me,null,o),d.a.createElement(f.a,{breakpointCols:Ce,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},s.map((function(e,n){return d.a.createElement(d.a.Fragment,{key:e.node.id},d.a.createElement(Ie,{timing:e.node.videoTiming,image:e.node.videoImagePreview.fluid,videoPageLink:e.node.videoPageLink,pdfIcon:v,behanceIcon:g,mediumIcon:u,videoIcons:e.node.videoContentIcons,number:a.length+n+1,links:e.node.childContentfulGranichCollectionVideoVideoAdditionalLinksRichTextNode,text:e.node.videoText.json}))})))))))},_e=t("gYk3"),Ne=t.n(_e),ze=Object(g.b)((function(e){return d.a.createElement(Ne.a,e)})).withConfig({displayName:"Wishes__ArrowLinkBack",componentId:"abx6b1-0"})(["position:absolute;top:-0.1vw;right:-1.4vw;width:1vw;height:1vw;@media only screen and (max-width:575px){top:0;right:-4.7vw;width:3.1vw;height:3.1vw;}"]),Te=g.b.section.withConfig({displayName:"Wishes__WishesSection",componentId:"abx6b1-1"})([""]),Be=g.b.div.withConfig({displayName:"Wishes__WishesWrapper",componentId:"abx6b1-2"})(["background:#e8e8e8;border-radius:0.5vw;font-family:EB Garamond;font-style:italic;font-size:2.37vw;font-weight:500;text-align:center;padding:1.4vw;letter-spacing:-0.02vw;line-height:1;width:100%;margin-bottom:2vw;@media only screen and (max-width:575px){font-size:6.6vw;padding:4vw 11vw 6vw;line-height:1.1;border-radius:1.5vw;}"]),Oe=Object(g.b)((function(e){return d.a.createElement(ie.Link,e)})).withConfig({displayName:"Wishes__WishesLink",componentId:"abx6b1-3"})(['font-style:italic;font-family:EB Garamond;font-size:2.37vw;font-weight:500;display:inline-block;line-height:1;position:relative;:before{content:"";position:absolute;left:0;bottom:-0.5vw;width:100%;height:1px;background:#c0c0c0;}:hover{:before{display:none;}}@media only screen and (max-width:575px){font-size:6.6vw;:before{bottom:-2vw;}}']),je=function(){return d.a.createElement(Te,null,d.a.createElement(p.a,null,d.a.createElement(Be,null,"Приятного обучения и до встречи на"," ",d.a.createElement(Oe,{to:"/#courses"},"Курсах!",d.a.createElement(ze,null)))))},Pe={renderNode:(r={},r[C.BLOCKS.EMBEDDED_ASSET]=function(e){return d.a.createElement("img",{src:e.data.target.fields.file["en-US"].url})},r)},Se=g.b.section.withConfig({displayName:"PodborkaOffer__PodborkaOfferSection",componentId:"sc-310n0r-0"})(["margin-bottom:1.7vw;@media only screen and (max-width:575px){margin-bottom:5vw;}"]),Ve=Object(g.b)((function(e){return d.a.createElement(oe.a,e)})).withConfig({displayName:"PodborkaOffer__PodborkaOfferWrapper",componentId:"sc-310n0r-1"})(["background:white;border-radius:0.6vw;padding:2.5vw 2.7vw 4.4vw;position:relative;box-shadow:0.25vw 0.15vw 0.4vw rgba(0,0,0,0.1);background-size:auto auto;background-repeat:no-repeat;background-size:auto 100%;background-position:right;overflow:hidden;@media only screen and (max-width:575px){display:none;}"]),De=g.b.section.withConfig({displayName:"PodborkaOffer__PodborkaOfferWrapperMobile",componentId:"sc-310n0r-2"})(["display:none;@media only screen and (max-width:575px){display:block;background:white;border-radius:2.5vw;padding:7vw 1vw 6vw;box-shadow:0 0 1.8vw rgba(0,0,0,0.15);}"]),Le=Object(g.b)((function(e){return d.a.createElement(y.a,e)})).withConfig({displayName:"PodborkaOffer__PodborkaOfferMainImage",componentId:"sc-310n0r-3"})(["@media only screen and (max-width:575px){height:80vw;}"]),We=g.b.div.withConfig({displayName:"PodborkaOffer__PodborkaOfferTags",componentId:"sc-310n0r-4"})(["display:flex;margin-bottom:2.1vw;align-items:flex-start;flex-wrap:wrap;@media only screen and (max-width:575px){padding:0 3.5vw;}"]),Re=g.b.div.withConfig({displayName:"PodborkaOffer__PodborkaOfferTag",componentId:"sc-310n0r-5"})(["font-size:1.2vw;display:flex;color:var(--granich-red);border:1.5px solid var(--granich-red);padding:0.3vw 0.8vw;border-radius:100vw;margin-right:1vw;font-weight:500;align-items:center;@media only screen and (max-width:575px){font-size:3.7vw;padding:1.8vw 2.5vw 1.6vw;margin-right:3vw;white-space:nowrap;margin-bottom:3vw;line-height:1;}"]),Ge=g.b.h1.withConfig({displayName:"PodborkaOffer__PodborkaOfferTitle",componentId:"sc-310n0r-6"})(["line-height:0.8;margin-left:-0.3vw;margin:0;margin-bottom:4.25vw;p{font-size:6.5vw;letter-spacing:0.28vw;letter-spacing:0;font-family:EB Garamond;style:normal;font-weight:500;width:60%;i{display:block;letter-spacing:-0.05vw;line-height:inherit;font-style:italic;font-size:7.2vw;font-weight:inherit;font-family:EB Garamond;}}@media only screen and (max-width:575px){margin-left:0vw;margin-top:-1vw;line-height:0.9;padding:0 5vw;p{font-size:13.5vw;letter-spacing:0.1vw;width:100%;i{letter-spacing:-0.2vw;font-size:14vw;margin-top:2vw;}}}"]),Ae=g.b.div.withConfig({displayName:"PodborkaOffer__PodborkaOfferDescr",componentId:"sc-310n0r-7"})(["width:35vw;margin-bottom:2vw;margin-left:0.8vw;line-height:1.47;p{display:inline;font-size:1.55vw;font-weight:500;letter-spacing:-0.01vw;}img{display:inline;width:1.5vw;margin-bottom:-0.3vw;position:relative;left:0.2vw;}@media only screen and (max-width:575px){width:95%;padding:0 5vw;margin-bottom:5vw;margin-left:0;p{font-size:5vw;}img{width:5vw;margin-bottom:-1.2vw;left:0.5vw;}}"]),Fe=function(e){var n=e.tags,t=e.dataContentPodborka;return d.a.createElement(Se,null,d.a.createElement(p.a,null,d.a.createElement(Ve,{fluid:t.collectionOfferMainImage.fluid},d.a.createElement(We,null,n.map((function(e,n){return d.a.createElement(Re,{key:n},e)}))),d.a.createElement(Ge,null,Object(h.documentToReactComponents)(t.collectionOfferTitle.json)),d.a.createElement(Ae,null,Object(h.documentToReactComponents)(t.childContentfulGranichCollectionOfferCollectionOfferDescrWithAssetRichTextNode.json,Pe))),d.a.createElement(De,null,d.a.createElement(We,null,n.map((function(e,n){return d.a.createElement(Re,{key:n},e)}))),d.a.createElement(Ge,null,Object(h.documentToReactComponents)(t.collectionOfferTitle.json)),d.a.createElement(Le,{loading:"eager",fadeIn:!1,fluid:t.collectionOfferMainImage.fluid}),d.a.createElement(Ae,null,Object(h.documentToReactComponents)(t.childContentfulGranichCollectionOfferCollectionOfferDescrWithAssetRichTextNode.json,Pe)))))},Me=t("03vf"),qe=t.n(Me),He=t("aF/C"),Ue=t.n(He),Ke=t("GXAZ"),Ye=t.n(Ke),Ze=g.b.div.withConfig({displayName:"ContentCourseBanner__BannerSection",componentId:"sc-6ltlit-0"})(["margin-bottom:1.7vw;@media only screen and (max-width:575px){margin-bottom:5vw;}"]),Qe=g.b.div.withConfig({displayName:"ContentCourseBanner__BannerWrapper",componentId:"sc-6ltlit-1"})(["background:white;border-radius:0.6vw;padding:1.5vw 2.5vw 1.5vw 15.8vw;position:relative;display:flex;box-shadow:0.25vw 0.15vw 0.4vw rgba(0,0,0,0.1);@media only screen and (max-width:575px){padding:6vw 6.6vw 6.6vw;border-radius:2.5vw;box-shadow:0 0 1.8vw rgba(0,0,0,0.15);}"]),Je=g.b.div.withConfig({displayName:"ContentCourseBanner__BannerContentWrapper",componentId:"sc-6ltlit-2"})(["display:flex;align-items:center;width:100%;@media only screen and (max-width:575px){flex-direction:column;align-items:flex-start;}"]),Xe=Object(g.b)((function(e){return d.a.createElement(y.a,e)})).withConfig({displayName:"ContentCourseBanner__BannerImage",componentId:"sc-6ltlit-3"})(["width:9.8vw;bottom:0;left:3.1vw;@media only screen and (max-width:575px){left:auto;right:7vw;width:20vw;}"]),$e=(g.b.div.withConfig({displayName:"ContentCourseBanner__BannerCourseMobileStart",componentId:"sc-6ltlit-4"})(["display:none;margin-right:0.8vw;letter-spacing:-0.01vw;font-weight:500;@media only screen and (max-width:575px){font-size:3.7vw;line-height:1.4;display:block;}"]),g.b.a.withConfig({displayName:"ContentCourseBanner__BannerCourseButton",componentId:"sc-6ltlit-5"})(["display:inline-flex;align-items:center;color:white;background:var(--granich-red-gradient-horizontal);margin-left:auto;padding:0.8vw 1.4vw 1vw 1.4vw;letter-spacing:0.06vw;border-radius:0.3vw;font-size:1.5vw;font-weight:400;transition:all 0.2s ease;user-select:none;box-shadow:0.25vw 0.25vw 0.4vw rgba(0,0,0,0.25);letter-spacing:0.05vw;white-space:nowrap;svg{width:0.9vw;height:0.9vw;margin-left:0.5vw;margin-top:0.2vw;}:hover{transform:scale(1.05);cursor:pointer;color:white;font-size:1.5vw;font-weight:400;letter-spacing:0.05vw;}@media only screen and (max-width:575px){margin-left:0;font-size:4.3vw;padding:3vw 5vw;border-radius:1.5vw;margin-right:4.5vw;box-shadow:0.7vw 0.7vw 1.5vw rgba(0,0,0,0.3);:hover{font-size:4.3vw;transform:none;}svg{width:3vw;height:3vw;margin-left:1.2vw;margin-top:0.8vw;}}"," ",""],(function(e){return"Мастер-класс"===e.type&&"\n        padding: 0.8vw 3vw 1vw;\n        @media only screen and (max-width: 575px) {\n            padding: 3vw 10vw;\n        }\n    "}),(function(e){return e.status&&"\n        background: var(--granich-black-gradient);\n    "}))),en=g.b.div.withConfig({displayName:"ContentCourseBanner__BannerCourseButtonDevelopment",componentId:"sc-6ltlit-6"})(["display:inline-flex;color:white;background:var(--granich-black-gradient);padding:0.8vw 1.4vw 1vw 1.4vw;border-radius:0.3vw;font-size:1.5vw;font-weight:400;user-select:none;box-shadow:0.25vw 0.25vw 0.4vw rgba(0,0,0,0.25);letter-spacing:0.05vw;@media only screen and (max-width:575px){font-size:4.3vw;padding:3vw 5vw;border-radius:1.5vw;margin-right:4.5vw;box-shadow:0.7vw 0.7vw 1.5vw rgba(0,0,0,0.3);}"]),nn=g.b.div.withConfig({displayName:"ContentCourseBanner__BannerContentMain",componentId:"sc-6ltlit-7"})(["padding-right:1vw;line-height:1.45;font-size:1.4vw;font-weight:500;i{font-size:2vw;line-height:0;font-family:EB Garamond;}span{display:inline;color:var(--granich-red);position:relative;left:0.5vw;}div{display:none;}@media only screen and (max-width:575px){font-size:3.7vw;i{font-size:5vw;}span{display:none;}div{display:inline;position:relative;left:1vw;color:var(--granich-red);}margin-bottom:3vw;}"]),tn=g.b.div.withConfig({displayName:"ContentCourseBanner__BannerContentButton",componentId:"sc-6ltlit-8"})(["margin-left:auto;@media only screen and (max-width:575px){margin-left:0;display:flex;}"]),on=function(e){var n=e.data,t=e.text;return d.a.createElement(Ze,null,d.a.createElement(p.a,null,d.a.createElement(Qe,null,n.courseBannerImage&&d.a.createElement(Xe,{style:{position:"absolute"},fluid:n.courseBannerImage.fluid}),d.a.createElement(Je,null,d.a.createElement(nn,null,t),d.a.createElement(tn,null,n.courseTypeEmpty?d.a.createElement(en,null,"В разработке"):d.a.createElement(d.a.Fragment,null,"Курс"===n.courseType?d.a.createElement($e,{status:!n.courseStatus,target:"_blank",href:n.courseSlug},n.courseStatus?"Участвовать":"Узнать о наборе"," ",d.a.createElement(Ye.a,null)):d.a.createElement($e,{status:!n.courseStatus,target:"_blank",href:n.courseSlug,type:n.courseType},n.courseStatus?"Купить":"Предзаказ"," ",d.a.createElement(Ye.a,null))))))))};n.default=function(e){var n=e.data;return d.a.createElement(c.a,null,d.a.createElement(s.a,{type:"dark"}),d.a.createElement(m.a,{title:""+n.contentfulPodborka.contentTitle,ogImageVk:Ue.a,ogImage:qe.a,keywords:["подборка","осознанный","гранич","granich","графдизайн","книги","лекции","инструменты","материал","презентации"],description:"Осознанная подборка книг и лекций для старта в графическом дизайне. В ней по крупицам собран самый толковый материал.",url:"https://granich.design/"+n.contentfulPodborka.contentSlug}),d.a.createElement("div",{className:"section-top-block"}),n.contentfulPodborka.contentBannerSwitch&&d.a.createElement(v.a,{data:n.coursePodborkaBanner}),d.a.createElement(Fe,{tags:n.contentfulPodborka.contentTags,dataContentPodborka:n.offerPodborkaGraphDesign}),d.a.createElement(on,{text:d.a.createElement(d.a.Fragment,null,"Это материалы, использованные при создании"," ",d.a.createElement("i",null,"Фундамента Графдизайна"),". Их необязательно изучать, вы можете сразу же записаться на курс",d.a.createElement("span",null,"→")),data:n.graphicDesignBannerInfo}),d.a.createElement(Ee,{topDescription:"Осознанный Графдизайн — интенсивный. Чтобы успеть на курсе как можно больше, вы можете уже сейчас подготовиться, посмотрев эти видео.",categoryTwo:"Далее, лекции, которые не имеют прямого отношения к курсу.  Но если у вас есть время, то для большего охвата материала полезны ↓",data:n.videoPodborkaGraphDesign.edges}),d.a.createElement(w.a,null),d.a.createElement(A,{categoryTwo:"Далее книги более общие. Уже не столь практичные. Но толково расширяют кругозор в дизайне ↓",data:n.booksPodborkaGraphDesign.edges}),d.a.createElement(ne,{data:n.toolsPodborkaGraphDesign.edges}),d.a.createElement(je,null))}},"aF/C":function(e,n,t){e.exports=t.p+"static/conscious-graphic-design-compilation-344d85254111118d7ae91439cdc6c3ce.jpg"}}]);
//# sourceMappingURL=component---src-pages-conscious-graphic-design-compilation-tsx-ebac31a9026030330454.js.map