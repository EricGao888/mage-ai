(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8867],{66757:function(e,n,t){"use strict";var r=t(19319),o=t(94178),i=t(67240),c="localStorage"in t.g&&t.g.localStorage?t.g.localStorage:r;function a(e,n){return 1===arguments.length?s(e):u(e,n)}function s(e){const n=c.getItem(e);return o(n)}function u(e,n){try{return c.setItem(e,JSON.stringify(n)),!0}catch(t){return!1}}a.set=u,a.get=s,a.remove=function(e){return c.removeItem(e)},a.clear=function(){return c.clear()},a.backend=function(e){return e&&(c=e),c},a.on=i.on,a.off=i.off,e.exports=a},94178:function(e){"use strict";e.exports=function(e){const n=function(e){try{return JSON.parse(e)}catch(n){return e}}(e);return void 0===n?null:n}},19319:function(e){"use strict";var n={};e.exports={getItem:function(e){return e in n?n[e]:null},setItem:function(e,t){return n[e]=t,!0},removeItem:function(e){return!!(e in n)&&delete n[e]},clear:function(){return n={},!0}}},67240:function(e,n,t){"use strict";var r=t(94178),o={};function i(e){e||(e=t.g.event);var n=o[e.key];n&&n.forEach((function(n){n(r(e.newValue),r(e.oldValue),e.url||e.uri)}))}e.exports={on:function(e,n){o[e]?o[e].push(n):o[e]=[n],t.g.addEventListener?t.g.addEventListener("storage",i,!1):t.g.attachEvent?t.g.attachEvent("onstorage",i):t.g.onstorage=i},off:function(e,n){var t=o[e];t.length>1?t.splice(t.indexOf(n),1):o[e]=[]}}},59739:function(e,n,t){"use strict";var r=t(56669);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},47329:function(e,n,t){e.exports=t(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},72454:function(e,n,t){"use strict";t.d(n,{E7:function(){return h},HS:function(){return p},Nk:function(){return d},k1:function(){return l},lm:function(){return f}});var r=t(9518),o=t(23831),i=t(73942),c=t(3055),a=t(49125),s=t(37391),u=t(90880),l=a.cd*a.iI+5*a.iI+a.cd*a.iI,d=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-ecogjt-0"})(["display:flex;flex-direction:row;height:calc(100vh - ","px);position:fixed;top:","px;width:100%;",""],c.Mz,c.Mz,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).page,";\n  ")})),f=r.default.div.withConfig({displayName:"indexstyle__VerticalNavigationStyle",componentId:"sc-ecogjt-1"})(["padding:","px;",""],a.cd*a.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).panel,";\n    border-right: 1px solid ").concat((e.theme.borders||o.Z.borders).medium,";\n  ")})),p=r.default.div.withConfig({displayName:"indexstyle__SubheaderStyle",componentId:"sc-ecogjt-2"})(["width:fit-content;padding:","px;position:relative;z-index:2;",""],a.cd*a.iI,(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme.borders||o.Z.borders).medium,";\n  ")})),h=(r.default.div.withConfig({displayName:"indexstyle__ContentStyle",componentId:"sc-ecogjt-3"})([""," overflow:auto;",""],s.w5,(function(e){return"\n    height: calc(100vh - ".concat(c.Mz+(e.heightOffset||0),"px);\n  ")})),r.default.div.withConfig({displayName:"indexstyle__NavigationItemStyle",componentId:"sc-ecogjt-4"})(["display:flex;align-items:center;justify-content:center;padding:","px;border-radius:","px;",""],a.iI,i.n_,(function(e){return e.primary&&"\n    ".concat((0,u.eR)(),"\n    background: ").concat((e.theme||o.Z).chart.backgroundPrimary,";\n    border: 1px solid ").concat((e.theme||o.Z).feature.active,";\n\n    &:hover {\n      background-color: ").concat((e.theme||o.Z).interactive.linkSecondary,";\n    }\n  ")})))},51404:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(77555),o=t(82684),i=t(93461),c=t(57384),a=t(19767),s=t(72454),u=t(28598);function l(e,n){var t=e.children;return(0,u.jsx)(s.HS,{ref:n,children:t})}var d=o.forwardRef(l),f=t(32063),p=t(34376),h=t(61519),m=t(57639),g=t(882),x=t(31866);var b=function(e){var n=e.size;return(0,u.jsxs)("svg",{width:n,height:n,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,u.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.86364 2.5H4.13636C3.68449 2.5 3.31818 2.94772 3.31818 3.5V7.5C3.31818 8.05228 3.68449 8.5 4.13636 8.5H9.86364C10.3155 8.5 10.6818 8.05228 10.6818 7.5V3.5C10.6818 2.94772 10.3155 2.5 9.86364 2.5ZM4.13636 1.5C3.23263 1.5 2.5 2.39543 2.5 3.5V7.5C2.5 8.60457 3.23263 9.5 4.13636 9.5H5.5V16.1667V16.5H4.13636C3.23263 16.5 2.5 17.3954 2.5 18.5V22.5C2.5 23.6046 3.23263 24.5 4.13636 24.5H9.86364C10.7674 24.5 11.5 23.6046 11.5 22.5V18.5C11.5 17.3954 10.7674 16.5 9.86364 16.5H6.5V16.1667C6.5 14.9394 7.61929 13.9444 9 13.9444H16C17.933 13.9444 19.5 12.5516 19.5 10.8333V9.5H21.8636C22.7674 9.5 23.5 8.60457 23.5 7.5V3.5C23.5 2.39543 22.7674 1.5 21.8636 1.5H16.1364C15.2326 1.5 14.5 2.39543 14.5 3.5V7.5C14.5 8.60457 15.2326 9.5 16.1364 9.5H18.5V10.8333C18.5 12.0606 17.3807 13.0556 16 13.0556H9C8.02066 13.0556 7.13526 13.4131 6.5 13.9893V9.5H9.86364C10.7674 9.5 11.5 8.60457 11.5 7.5V3.5C11.5 2.39543 10.7674 1.5 9.86364 1.5H4.13636ZM9.86364 17.5H6.5H5.5H4.13636C3.68449 17.5 3.31818 17.9477 3.31818 18.5V22.5C3.31818 23.0523 3.68449 23.5 4.13636 23.5H9.86364C10.3155 23.5 10.6818 23.0523 10.6818 22.5V18.5C10.6818 17.9477 10.3155 17.5 9.86364 17.5ZM16.1364 2.5H21.8636C22.3155 2.5 22.6818 2.94772 22.6818 3.5V7.5C22.6818 8.05228 22.3155 8.5 21.8636 8.5H16.1364C15.6845 8.5 15.3182 8.05228 15.3182 7.5V3.5C15.3182 2.94772 15.6845 2.5 16.1364 2.5Z",fill:"url(#paint0_linear_2738_141228)"}),(0,u.jsx)("defs",{children:(0,u.jsxs)("linearGradient",{id:"paint0_linear_2738_141228",x1:"2.5",y1:"13",x2:"23.5",y2:"13",gradientUnits:"userSpaceOnUse",children:[(0,u.jsx)("stop",{offset:"0.28125",stopColor:"#7D55EC"}),(0,u.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]})})]})},v=t(86673),y=t(19711),j=t(46261),w=t(10503),Z=t(99994),C=t(49125),k=3*C.iI;var _=function(e){var n=e.navigationItems,t=(0,p.useRouter)().pathname,r=(0,o.useMemo)((function(){return(n||[{Icon:w.rV,IconSelected:b,id:"pipelines",label:function(){return"Pipelines"},linkProps:{href:"/pipelines"}},{Icon:w.pd,IconSelected:h.Z,id:"pipeline-runs",label:function(){return"Pipelines runs"},linkProps:{href:"/pipeline-runs"}}]).map((function(e,n){var r=e.Icon,o=e.IconSelected,i=e.id,c=e.isSelected,a=e.label,l=e.linkProps,d=c?c(t):!!t.match(new RegExp("^/".concat(i,"[/]*"))),f=d&&o?o:r;return(0,u.jsx)(v.Z,{mt:n>=1?C.cd:0,children:(0,u.jsxs)(j.Z,{height:5*C.iI,label:a(),size:null,widthFitContent:!0,children:[d&&o&&(0,u.jsx)(g.Z,{backgroundGradient:Z.yr,backgroundPanel:!0,basic:!0,borderWidth:2,linkProps:l,paddingUnits:1,children:(0,u.jsx)("div",{style:{height:k,width:k},children:(0,u.jsx)(f,{muted:!0,size:k})})}),!d&&(0,u.jsx)(x.ZP,{block:!0,noHoverUnderline:!0,noPadding:!0,linkProps:l,sameColorAsText:!0,uuid:"VerticalNavigation/".concat(i),children:(0,u.jsx)(s.E7,{primary:!f,children:f?(0,u.jsx)(f,{muted:!0,size:k}):(0,u.jsx)(y.ZP,{children:"Edit"})})})]})},"button-".concat(i))}))}),[n,t]);return(0,u.jsx)(m.Z,{children:r})},O=t(41374),S=t(3055),P=t(91427),R=t(24141);var E=function(e){var n,t=e.after,l=e.afterHidden,p=e.afterWidth,h=e.before,m=e.beforeWidth,g=e.breadcrumbs,x=e.children,b=e.headerMenuItems,v=e.navigationItems,y=e.subheaderChildren,j=e.title,w=e.uuid,Z=(0,R.i)().width,C="dashboard_after_width_".concat(w),k="dashboard_before_width_".concat(w),E=(0,o.useRef)(null),A=(0,o.useState)((0,P.U2)(C,p)),T=A[0],I=A[1],H=(0,o.useState)(!1),D=H[0],N=H[1],M=(0,o.useState)((0,P.U2)(k,m)),V=M[0],B=M[1],F=(0,o.useState)(!1),z=F[0],L=F[1],W=(0,o.useState)(null),U=(W[0],W[1]),X=O.ZP.projects.list({},{revalidateOnFocus:!1}).data,Y=null===X||void 0===X?void 0:X.projects,G=[];return g?G.push.apply(G,(0,r.Z)(g)):(null===Y||void 0===Y?void 0:Y.length)>=1&&G.push.apply(G,[{label:function(){var e;return null===(e=Y[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},{bold:!0,label:function(){return j}}]),(0,o.useEffect)((function(){null===E||void 0===E||!E.current||D||z||null===U||void 0===U||U(E.current.getBoundingClientRect().width)}),[D,T,z,V,null===E||void 0===E?void 0:E.current,U,Z]),(0,o.useEffect)((function(){D||(0,P.t8)(C,T)}),[l,D,T]),(0,o.useEffect)((function(){z||(0,P.t8)(k,V)}),[z,V]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.Z,{title:j}),(0,u.jsx)(a.Z,{breadcrumbs:G,menuItems:b,project:null===Y||void 0===Y?void 0:Y[0],version:null===Y||void 0===Y||null===(n=Y[0])||void 0===n?void 0:n.version}),(0,u.jsxs)(s.Nk,{children:[0!==(null===v||void 0===v?void 0:v.length)&&(0,u.jsx)(s.lm,{children:(0,u.jsx)(_,{navigationItems:v})}),(0,u.jsx)(i.Z,{flex:1,flexDirection:"column",children:(0,u.jsxs)(f.Z,{after:t,afterHeightOffset:S.Mz,afterHidden:l,afterMousedownActive:D,afterWidth:T,before:h,beforeHeightOffset:S.Mz,beforeMousedownActive:z,beforeWidth:s.k1+(h?V:0),hideAfterCompletely:!0,leftOffset:h?s.k1:null,mainContainerRef:E,setAfterMousedownActive:N,setAfterWidth:I,setBeforeMousedownActive:L,setBeforeWidth:B,children:[y&&(0,u.jsx)(d,{children:y}),x]})})]})]})}},85307:function(e,n,t){"use strict";t.d(n,{$W:function(){return u},cl:function(){return l},cv:function(){return d},dE:function(){return s}});var r=t(9518),o=t(23831),i=t(73942),c=t(49125),a=t(37391),s=r.default.div.withConfig({displayName:"indexstyle__SectionStyle",componentId:"sc-7a1uhf-0"})(["border-radius:","px;padding:","px;",""],i.n_,c.cd*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).popup,";\n  ")})),u=r.default.div.withConfig({displayName:"indexstyle__CodeEditorStyle",componentId:"sc-7a1uhf-1"})(["padding-top:","px;",""],c.cd*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).codeTextarea,";\n  ")})),l=r.default.div.withConfig({displayName:"indexstyle__TableContainerStyle",componentId:"sc-7a1uhf-2"})(["overflow:auto;max-height:90vh;width:100%;"," "," "," "," ",""],a.w5,(function(e){return e.hideHorizontalScrollbar&&"\n    overflow-x: hidden;\n  "}),(function(e){return e.width&&"\n    width: ".concat(e.width,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,";\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")})),d=r.default.div.withConfig({displayName:"indexstyle__HeaderRowStyle",componentId:"sc-7a1uhf-3"})(["padding:","px;"," "," ",""],2*c.iI,(function(e){return"\n    background-color: ".concat((e.theme||o.Z).interactive.defaultBackground,";\n    border-bottom: ").concat(i.YF,"px ").concat(i.M8," ").concat((e.theme||o.Z).borders.medium,";\n  ")}),(function(e){return e.padding&&"\n    padding: ".concat(e.padding,"px;\n  ")}),(function(e){return e.rounded&&"\n    border-top-left-radius: ".concat(i.n_,"px;\n    border-top-right-radius: ").concat(i.n_,"px;\n  ")}))},65597:function(e,n,t){"use strict";t.d(n,{c:function(){return s},f:function(){return u}});var r=t(9518),o=t(23831),i=t(49125),c=t(73942),a=t(37391),s=r.default.div.withConfig({displayName:"Tablestyle__TableContainerStyle",componentId:"sc-8ammqd-0"})(["position:relative;overflow:auto;"," ",""],a.w5,(function(e){return e.minHeight&&"\n    min-height: ".concat(e.minHeight,"px;\n  ")})),u=r.default.div.withConfig({displayName:"Tablestyle__PopupContainerStyle",componentId:"sc-8ammqd-1"})(["position:absolute;max-height:","px;z-index:10;border-radius:","px;padding:","px;"," "," "," ",""],58*i.iI,c.TR,2*i.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||o.Z.shadow).popup,";\n    background-color: ").concat((e.theme.interactive||o.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.leftOffset&&"\n    left: ".concat(e.leftOffset,"px;\n  ")}),(function(e){return e.topOffset&&"\n    top: ".concat(e.topOffset,"px;\n  ")}),(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}))},17903:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var r=t(82394),o=t(12691),i=t.n(o),c=t(82684),a=t(67971),s=t(10919),u=t(86673),l=t(19711),d=t(46261),f=t(9518),p=t(23831),h=t(49125),m=f.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-0"})(["contain:size;width:100%;",""],(function(e){return(e.columnBorders||e.borderCollapseSeparate)&&"\n    border-collapse: separate;\n  "})),g=f.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-1"})(["",""],(function(e){return!e.noHover&&"\n    &:hover {\n      background: ".concat((e.theme.interactive||p.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),x=(0,f.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(e){return!e.alignTop&&"\n    vertical-align: middle;\n  "}),(function(e){return e.alignTop&&"\n    vertical-align: top;\n  "}),(function(e){return!e.noBorder&&"\n    border-bottom: 1px solid ".concat((e.theme.borders||p.Z.borders).light,";\n  ")}),(function(e){return e.compact&&"\n    padding: ".concat(h.iI/2,"px ").concat(h.iI,"px;\n  ")}),(function(e){return!e.compact&&"\n    padding: ".concat(h.iI,"px ").concat(2*h.iI,"px;\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,";\n  ")})),b=f.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-2"})([""," "," "," ",""],x,(function(e){return e.columnBorders&&"\n    border: 1px solid ".concat((e.theme.borders||p.Z.borders).light,";\n    border-right: none;\n  ")}),(function(e){return e.columnBorders&&e.last&&"\n    border-right: 1px solid ".concat((e.theme.borders||p.Z.borders).light,";\n  ")}),(function(e){return e.sticky&&"\n    background-color: ".concat((e.theme||p.Z).background.panel,";\n    border-bottom: 1px solid ").concat((e.theme.borders||p.Z.borders).medium,";\n    z-index: 1;\n    position: sticky;\n    top: 0;\n\n    &:first-child {\n      left: 0;\n      z-index: 2;\n    }\n  ")})),v=f.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-3"})([""," "," "," "," "," ",""],x,(function(e){return e.columnBorders&&"\n    border-left: 1px solid ".concat((e.theme.borders||p.Z.borders).light,";\n  ")}),(function(e){return e.columnBorders&&e.last&&"\n    border-right: 1px solid ".concat((e.theme.borders||p.Z.borders).light,";\n  ")}),(function(e){return e.stickyFirstColumn&&"\n    background-color: ".concat((e.theme||p.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    left: 0;\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||p.Z.interactive).activeBorder,";\n  ")}),(function(e){return e.wrapColumns&&"\n    white-space: break-spaces;\n  "})),y=t(28598);function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Z=function(e){var n=e.alignTop,t=e.borderCollapseSeparate,r=e.buildLinkProps,o=e.columnBorders,f=e.columnFlex,p=e.columnMaxWidth,h=e.columns,x=void 0===h?[]:h,j=e.compact,Z=e.isSelectedRow,C=e.noBorder,k=e.noHeader,_=e.onClickRow,O=e.rows,S=e.stickyFirstColumn,P=e.stickyHeader,R=e.uuid,E=e.wrapColumns,A=(0,c.useMemo)((function(){return f.reduce((function(e,n){return e+(n||0)}),0)}),f),T=(0,c.useCallback)((function(e){if(f[e]){var n=Math.round(f[e]/A*100);return"".concat(n,"%")}return null}),[]),I=(0,c.useMemo)((function(){return null===O||void 0===O?void 0:O.map((function(e,t){var a=null===r||void 0===r?void 0:r(t),u=e.map((function(r,i){return(0,y.jsx)(v,{alignTop:n,columnBorders:o,compact:j,last:i===e.length-1,maxWidth:null===p||void 0===p?void 0:p(i),noBorder:C,selected:null===Z||void 0===Z?void 0:Z(t),stickyFirstColumn:S&&0===i,width:T(i),wrapColumns:E,children:r},"".concat(R,"-row-").concat(t,"-cell-").concat(i))})),l=(0,y.jsx)(g,{noHover:!(a||_),onClick:_?function(){return _(t)}:null,children:u},"".concat(R,"-row-").concat(t));return a?(0,c.createElement)(i(),w(w({},a),{},{key:"".concat(R,"-row-link-").concat(t),passHref:!0}),(0,y.jsx)(s.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:l})):l}))}),[n,r,T,p,x,j,Z,C,_,O]);return(0,y.jsxs)(m,{borderCollapseSeparate:t,columnBorders:o,children:[(null===x||void 0===x?void 0:x.length)>=1&&!k&&(0,y.jsx)(g,{noHover:!0,children:x.map((function(e,n){return(0,y.jsx)(b,{columnBorders:o,compact:j,last:n===x.length-1,noBorder:C,sticky:P,children:(0,y.jsxs)(a.Z,{alignItems:"center",children:[(0,y.jsx)(l.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:e.label?e.label():e.uuid}),e.tooltipMessage&&(0,y.jsx)(u.Z,{ml:"4px",children:(0,y.jsx)(d.Z,{appearBefore:!0,label:(0,y.jsx)(l.ZP,{leftAligned:!0,children:e.tooltipMessage}),lightBackground:!0,primary:!0})})]})},"".concat(R,"-col-").concat(e.uuid,"-").concat(n))}))}),I]})}},86422:function(e,n,t){"use strict";t.d(n,{$W:function(){return d},DA:function(){return l},HX:function(){return h},J8:function(){return p},Qj:function(){return m},Ut:function(){return v},V4:function(){return b},VZ:function(){return f},dO:function(){return u},f2:function(){return x},iZ:function(){return g},t6:function(){return c},tf:function(){return s}});var r,o,i,c,a=t(82394);!function(e){e.PYTHON="python",e.R="r",e.SQL="sql",e.YAML="yaml"}(c||(c={}));var s,u=(r={},(0,a.Z)(r,c.PYTHON,"PY"),(0,a.Z)(r,c.R,"R"),(0,a.Z)(r,c.SQL,"SQL"),(0,a.Z)(r,c.YAML,"YAML"),r);!function(e){e.CHART="chart",e.DATA_EXPORTER="data_exporter",e.DATA_LOADER="data_loader",e.DBT="dbt",e.SCRATCHPAD="scratchpad",e.SENSOR="sensor",e.TRANSFORMER="transformer"}(s||(s={}));var l,d=[s.CHART,s.DATA_EXPORTER,s.DATA_LOADER,s.SCRATCHPAD,s.SENSOR,s.TRANSFORMER],f=[s.DATA_EXPORTER,s.DATA_LOADER],p=[s.DATA_EXPORTER,s.DATA_LOADER,s.TRANSFORMER],h=[s.DATA_EXPORTER,s.DATA_LOADER,s.DBT,s.TRANSFORMER],m=[s.CHART,s.SCRATCHPAD,s.SENSOR],g=[s.SCRATCHPAD];!function(e){e.EXECUTED="executed",e.FAILED="failed",e.NOT_EXECUTED="not_executed",e.UPDATED="updated"}(l||(l={}));var x=[s.DATA_EXPORTER,s.TRANSFORMER],b=(o={},(0,a.Z)(o,s.DATA_EXPORTER,"Data exporter"),(0,a.Z)(o,s.DATA_LOADER,"Data loader"),(0,a.Z)(o,s.SCRATCHPAD,"Scratchpad"),(0,a.Z)(o,s.SENSOR,"Sensor"),(0,a.Z)(o,s.TRANSFORMER,"Transformer"),o),v=[s.DATA_LOADER,s.TRANSFORMER,s.DATA_EXPORTER];i={},(0,a.Z)(i,s.DATA_EXPORTER,"DE"),(0,a.Z)(i,s.DATA_LOADER,"DL"),(0,a.Z)(i,s.SCRATCHPAD,"SP"),(0,a.Z)(i,s.SENSOR,"SR"),(0,a.Z)(i,s.TRANSFORMER,"TF")},70902:function(e,n,t){"use strict";var r=t(82394),o=t(26304),i=t(82684),c=t(9518),a=t(69898),s=t(23831),u=t(28598),l=["checked","onCheck"];function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=c.default.label.withConfig({displayName:"ToggleSwitch__ToggleSwitchStyle",componentId:"sc-179r5zs-0"})([""," position:relative;display:inline-block;width:","px;min-width:","px;height:",'px;& input[type="checkbox"]{display:none;}& span{position:absolute;cursor:',";background-color:",";border-radius:13px;",';top:0;right:0;bottom:0;left:0;transition:background-color 0.2s ease;}& span::before{position:absolute;content:"";left:2px;top:2px;width:22px;height:22px;background-color:#787A85;border-radius:50%;transition:transform 0.3s ease;}& input[type="checkbox"]:checked + span::before{transform:translateX(20px);}',""],a.p,46,46,26,(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?s.Z.monotone.white:s.Z.monotone.black}),(function(e){return e.disabled&&"border: 1px solid ".concat(s.Z.monotone.grey200)}),(function(e){return!e.disabled&&'\n    & input[type="checkbox"]:checked + span {\n      background-color: #6AA1E0;\n    }\n\n    & input[type="checkbox"]:checked + span::before {\n      background-color: '.concat(s.Z.monotone.white,";\n    }\n  ")})),h=function(e,n){var t=e.checked,r=e.onCheck,i=(0,o.Z)(e,l);return(0,u.jsx)(a.Z,f(f({},i),{},{input:(0,u.jsxs)(p,f(f({},i),{},{noBackground:!0,noBorder:!0,children:[(0,u.jsx)("input",{checked:t,type:"checkbox"}),(0,u.jsx)("span",{onClick:function(){return r((function(e){return!e}))}})]})),noBackground:!0,ref:n}))};n.Z=i.forwardRef(h)},61519:function(e,n,t){"use strict";var r=t(28598);n.Z=function(e){var n=e.size;return(0,r.jsxs)("svg",{width:n,height:n,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 3H9V9H3V3ZM10 2V9H17V16H24V24H17H16H10H9H2V17V16V10V9V2H10ZM16 23V17H10V23H16ZM17 23H23V17H17V23ZM16 16V10H10V16H16ZM9 10V16H3V10H9ZM9 17V23H3V17H9Z",fill:"url(#paint0_linear_2738_140355)"}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"paint0_linear_2738_140355",x1:"2",y1:"13",x2:"24",y2:"13",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{offset:"0.28125",stopColor:"#7D55EC"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]})})]})}},48438:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return I}});var r=t(12757),o=t(82684),i=t(83455),c=t(60328),a=t(47999),s=t(57722),u=t(67971),l=t(87372),d=t(31866),f=t(86673),p=t(17903),h=t(19711),m=t(82944),g=t(70902),x=t(41374),b=t(10503),v=t(86422),y=t(73899),j=t(99994),w=t(85307),Z=t(49125),C=t(96510),k=t(90211),_=t(28598);var O=function(e){var n=e.fetchInstances,t=e.instanceType,c=(0,o.useState)(),a=c[0],O=c[1],S=(0,o.useState)(),P=S[0],R=S[1],E=(0,o.useState)(),A=E[0],T=E[1],I=(0,o.useState)(null),H=I[0],D=I[1],N=(0,o.useState)(),M=N[0],V=N[1],B=(0,o.useState)(),F=B[0],z=B[1],L=(0,i.Db)(x.ZP.instances.clusters.useCreate(t),{onSuccess:function(e){return(0,C.wD)(e,{callback:function(e){e.success?(n(),O(!1)):R(e.error_message)},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),W=(0,r.Z)(L,2),U=W[0],X=W[1].isLoading,Y=[[(0,_.jsx)(h.ZP,{bold:!0,color:y.cM,children:"Instance name"}),(0,_.jsx)(m.Z,{label:"ecs"===t?"Spaces will be replaced by underscores":"Spaces will be replaced by hyphens",monospace:!0,onChange:function(e){e.preventDefault(),V(e.target.value)},placeholder:"Name your new instance",value:M})]];return"k8s"===t&&Y.push([(0,_.jsx)(h.ZP,{bold:!0,color:y.cM,children:"Service account name (optional)"}),(0,_.jsx)(m.Z,{label:"Name of service account to be attached to stateful set",monospace:!0,onChange:function(e){e.preventDefault(),z(e.target.value)},placeholder:"Service account name",value:F})]),(0,_.jsx)(_.Fragment,{children:a?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l.Z,{default:!0,level:5,monospace:!0,children:"Configure new instance"}),(0,_.jsx)(p.Z,{columnFlex:[null,3],rows:Y}),"k8s"===t&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f.Z,{mt:1,children:(0,_.jsxs)(u.Z,{alignItems:"center",children:[(0,_.jsx)(h.ZP,{default:!0,monospace:!0,children:"Configure container"}),(0,_.jsx)(f.Z,{ml:1}),(0,_.jsx)(g.Z,{checked:A,onCheck:function(){return T((function(e){return!e}))}})]})}),A&&(0,_.jsx)(f.Z,{mt:1,children:(0,_.jsx)(w.$W,{children:(0,_.jsx)(s.Z,{autoHeight:!0,language:v.t6.YAML,onChange:function(e){D(e)},tabSize:2,value:H||void 0,width:"100%"})})})]}),X&&(0,_.jsx)(f.Z,{mt:1,children:(0,_.jsx)(h.ZP,{small:!0,warning:!0,children:"This may take up to a few minutes... Once the service is created, it may take another 5-10 minutes for the service to be accessible."})}),!X&&P&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f.Z,{mt:1,children:(0,_.jsx)(h.ZP,{small:!0,danger:!0,children:"Failed to create instance, see error below."})}),(0,_.jsx)(f.Z,{mt:1,children:(0,_.jsx)(h.ZP,{small:!0,danger:!0,children:P})})]}),(0,_.jsx)(f.Z,{my:2,children:(0,_.jsxs)(u.Z,{children:[(0,_.jsx)(d.ZP,{background:y.a$,bold:!0,inline:!0,loading:X,onClick:function(){return U({instance:{name:(e=M,"ecs"===t?(0,k.We)(e,"_"):(0,k.We)(e,"-")),service_account_name:F,container_config:A&&H}});var e},uuid:"EnvironmentListPage/new",children:"Create"}),(0,_.jsx)(f.Z,{ml:1}),(0,_.jsx)(d.ZP,{bold:!0,inline:!0,onClick:function(){return O(!1)},uuid:"EnvironmentListPage/cancel",children:"Cancel"})]})})]}):(0,_.jsx)(d.ZP,{background:j.eW,beforeElement:(0,_.jsx)(b.mm,{size:2.5*Z.iI}),bold:!0,inline:!0,onClick:function(){V((0,k.Y6)()),O(!0)},uuid:"EnvironmentListPage/new_instance",children:"Create new instance"})})},S=t(51404),P=t(62084),R=t(73942),E=t(65597),A=t(72454);function T(e){var n=e.fetchInstances,t=e.instance,s=e.instanceType,l=(0,o.useRef)(null),d=(0,o.useState)(),p=d[0],m=d[1],g=(0,o.useState)(),v=g[0],y=g[1],j=t.name,w=t.task_arn,k={};w&&(k.task_arn=w);var O=(0,i.Db)(x.ZP.instances.clusters.useUpdate(s,j),{onSuccess:function(e){return(0,C.wD)(e,{callback:function(){n(),m(!1)},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),S=(0,r.Z)(O,1)[0],R=(0,i.Db)(x.ZP.instances.clusters.useDelete(s,j,k),{onSuccess:function(e){return(0,C.wD)(e,{callback:function(){n(),m(!1)},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),A=(0,r.Z)(R,1)[0],T=(0,o.useMemo)((function(){var e=t.status,n=[{label:function(){return(0,_.jsx)(h.ZP,{children:"Delete instance"})},onClick:function(){return y(!0)},uuid:"delete_instance"}];return"STOPPED"===e?n.unshift({label:function(){return(0,_.jsx)(h.ZP,{children:"Resume instance"})},onClick:function(){return S({instance:{action:"resume",name:t.name,task_arn:t.task_arn}})},uuid:"resume_instance"}):"RUNNING"===e&&n.unshift({label:function(){return(0,_.jsx)(h.ZP,{children:"Stop instance"})},onClick:function(){return S({instance:{action:"stop",name:t.name,task_arn:t.task_arn}})},uuid:"stop_instance"}),n}),[t]);return(0,_.jsx)(_.Fragment,{children:"ecs"===s&&(0,_.jsxs)("div",{ref:l,style:{position:"relative",zIndex:"1"},children:[(0,_.jsx)(c.Z,{iconOnly:!0,onClick:function(){return m(!p)},children:(0,_.jsx)(b.mH,{size:2*Z.iI})}),(0,_.jsx)(a.Z,{disableEscape:!0,onClickOutside:function(){m(!1),y(!1)},open:p,children:v?(0,_.jsxs)(E.f,{leftOffset:30*-Z.iI,topOffset:3*-Z.iI,width:30*Z.iI,children:[(0,_.jsx)(h.ZP,{children:"Are you sure you want to delete"}),(0,_.jsx)(h.ZP,{children:"this instance? You may not be"}),(0,_.jsx)(h.ZP,{children:"able to recover your data."}),(0,_.jsx)(f.Z,{mt:1}),(0,_.jsxs)(u.Z,{children:[(0,_.jsx)(c.Z,{danger:!0,onClick:A,children:"Confirm"}),(0,_.jsx)(f.Z,{ml:1}),(0,_.jsx)(c.Z,{default:!0,onClick:function(){return y(!1)},children:"Cancel"})]})]}):(0,_.jsx)(P.Z,{items:T,left:25*-Z.iI,open:p,parentRef:l,topOffset:3*-Z.iI,uuid:"Manage/more_actions",width:25*Z.iI})})]})})}var I=function(){var e,n=(0,o.useState)(),t=(n[0],n[1],x.ZP.status.list().data),r=(null===t||void 0===t||null===(e=t.status)||void 0===e?void 0:e.instance_type)||"ecs",i=x.ZP.instances.clusters.list(r,{},{refreshInterval:3e3,revalidateOnFocus:!0}),a=i.data,s=i.mutate,u=(0,o.useMemo)((function(){var e;return null===a||void 0===a||null===(e=a.instances)||void 0===e?void 0:e.filter((function(e){return e.name}))}),[a]);return(0,_.jsx)(S.Z,{afterWidth:A.k1,beforeWidth:A.k1,breadcrumbs:[{bold:!0,label:function(){return"Manage (".concat(r,")")}}],navigationItems:[],subheaderChildren:(0,_.jsx)(O,{fetchInstances:s,instanceType:r}),title:"Manage",uuid:"Manage/index",children:(0,_.jsx)(p.Z,{columns:[{uuid:"Status"},{uuid:"Instance Name"},{uuid:"Type"},{uuid:"Public IP address"},{uuid:"Open"},{label:function(){return""},uuid:"Actions"}],columnFlex:[2,4,2,3,1,null],rows:null===u||void 0===u?void 0:u.map((function(e){var n=e.ip,t=e.name,o=e.status,i=e.type,a="http://".concat(n);return"ecs"===r&&(a="http://".concat(n,":6789")),[(0,_.jsx)(c.Z,{borderRadius:R.D7,danger:"STOPPED"===o,default:"PROVISIONING"===o,notClickable:!0,padding:"6px",primary:"RUNNING"===o,warning:"PENDING"===o,children:(0,k.vg)(o)}),(0,_.jsx)(h.ZP,{children:t}),(0,_.jsx)(h.ZP,{children:(0,k.vg)(i)}),(0,_.jsx)(h.ZP,{children:n}),(0,_.jsx)(c.Z,{iconOnly:!0,onClick:function(){return window.open(a)},children:(0,_.jsx)(b.M0,{size:2*Z.iI})}),(0,_.jsx)(T,{fetchInstances:s,instance:e,instanceType:r})]}))})})}},13157:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage",function(){return t(48438)}])}},function(e){e.O(0,[4259,2212,7689,8789,1374,714,4247,7343,9898,7117,9774,2888,179],(function(){return n=13157,e(e.s=n);var n}));var n=e.O();_N_E=n}]);