"use strict";(self.webpackChunkmovie_finder_app=self.webpackChunkmovie_finder_app||[]).push([[709],{367:function(e,n,t){t.d(n,{CL:function(){return m},FE:function(){return d},Mc:function(){return p},j9:function(){return s},wH:function(){return h},wr:function(){return f}});var a=t(861),c=t(757),r=t.n(c),i="https://api.themoviedb.org/3",u="8c2f1cd8692a539e3bea9ae95f68229a",s="https://image.tmdb.org/t/p/original";function o(){return l.apply(this,arguments)}function l(){return l=(0,a.Z)(r().mark((function e(){var n,t,a,c=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(n,t);case 4:if(!(a=e.sent).ok){e.next=11;break}return e.next=8,a.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function f(){return o("".concat(i,"/trending/all/day?api_key=").concat(u))}function d(e){return o("".concat(i,"/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}function p(e){return o("".concat(i,"/movie/").concat(e,"?api_key=").concat(u,"&language=en-US"))}function m(e){return o("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"))}function h(e){return o("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"))}},721:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var a=t(152),c=t(791),r=t(871),i=t(367),u=function(){var e=(0,r.bx)(),n=(0,c.useState)("idle"),t=(0,a.Z)(n,2),u=t[0],s=t[1],o=(0,c.useState)(null),l=(0,a.Z)(o,2),f=l[0],d=l[1];return(0,c.useEffect)((function(){s("pending"),i.CL(e).then(d).then(s("resolved")).catch((function(e){return s("rejected")}))}),[e]),{cast:f,status:u}},s=t(35),o=t(788),l=t(832),f="CastItem_Item__uGZmP",d="CastItem_ContainerImg__PyAXp",p="CastItem_Img__axSGp",m="CastItem_Name__9-O-h",h=t(184),g=function(e){var n=e.member,t=n.profile_path,a=n.original_name,c=n.character,r=null===t?l:"".concat(i.j9).concat(t);return(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)("div",{className:d,children:(0,h.jsx)("img",{src:r,alt:a,className:p})}),(0,h.jsx)("p",{className:m,children:a}),(0,h.jsx)("p",{className:m,children:c})]})},v="CastList_CastList__5Buya",_=function(){var e,n=u(),t=n.cast,a=n.status;return"idle"===a||"pending"===a?(0,h.jsx)(s.Z,{}):"rejected"===a?(0,h.jsx)(o.Z,{}):"resolved"===a?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("hr",{}),(0,h.jsx)("ul",{className:v,children:null===t||void 0===t||null===(e=t.cast)||void 0===e?void 0:e.map((function(e){return(0,h.jsx)(g,{member:e},e.id)}))})]}):void 0},x=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(_,{})})}},788:function(e,n,t){var a=t(791),c=t(871),r=t(184);n.Z=function(){var e=(0,c.s0)();return(0,a.useEffect)((function(){setTimeout((function(){e("/",{replace:!0})}),2e3)}),[e]),(0,r.jsxs)("h1",{style:{textAlign:"center"},children:["404 Page not found",(0,r.jsx)("p",{children:"You will be automaticly redirected to the Home Page"})]})}},832:function(e,n,t){e.exports=t.p+"static/media/cast.d6f831d37cbcefcfaa1a.jpg"}}]);
//# sourceMappingURL=Cast.9eab5471.chunk.js.map