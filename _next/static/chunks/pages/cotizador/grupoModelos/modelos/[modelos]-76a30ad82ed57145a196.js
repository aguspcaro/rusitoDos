(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[249],{3290:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(5893),o=r(7294),a=r(6353),c=r(6998),i=r.n(c),s=r(6939),u=r(6782),l=r(4396),f=r(2809);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){return(0,n.jsx)("svg",p(p({width:14,height:26,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:(0,n.jsx)("path",{d:"M1.823 1c2.143 3.429 4.715 7.429 9.429 12-3.143 2.095-8.143 8-9.429 12",stroke:"#fff",strokeWidth:3.2})}))},h=r(6090),m=r.n(h),_=function(e){var t=e.item,r=e.active;return(0,n.jsx)("div",{className:m().wrapper,children:(0,n.jsxs)("button",{className:"".concat(m().button," ").concat(r&&m().activeItem),children:[(0,n.jsx)(u.Z,{text:t,className:"textoh4",color:" ".concat(r?"#FFFFFF":"#1F1E48"," ")}),r&&(0,n.jsx)("div",{className:m().iconAling,children:(0,n.jsx)(v,{})})]})})},b=(0,o.memo)(_),g=r(1664),j=r(1163),x=function(e){var t=e.handleBackArrow,r=e.item,c=e.search,f=e.title,d=e.subtitle,p=e.href,v=e.shortWrap,h=e.data,m=(0,o.useState)(""),_=m[0],x=(m[1],(0,j.useRouter)()),y=x.pathname.includes("year"),w=x.pathname.includes("grupoModelos");return(0,n.jsxs)("section",{className:"".concat(i().wrapper," ").concat(v&&i().shortWrap),children:[(0,n.jsx)("div",{className:i().headerWrap,children:(0,n.jsx)(a.Z,{onClick:t,step:"1",active:!0})}),(0,n.jsx)("div",{children:(0,n.jsx)(s.Z,{})}),(0,n.jsx)("div",{children:(0,n.jsx)(u.Z,{className:"h1AsistMobile",text:f,color:"#1F1E48"})}),c&&(0,n.jsx)("div",{className:i().inputWrap,children:(0,n.jsx)(l.Z,{label:"Marcas",value:_,placeholder:"Marcas",data:h})}),d&&(0,n.jsx)("div",{children:(0,n.jsx)(u.Z,{className:"textoh4",text:d,color:"#1F1E48"})}),(0,n.jsx)("div",{className:"".concat(i().itemWrap," ").concat(v&&i().shortWrapItem),children:null===r||void 0===r?void 0:r.map((function(e,t){return(0,n.jsx)(g.default,{href:"".concat(p).concat(w||y?e.id:""),children:(0,n.jsx)("div",{className:"".concat(i().item," ").concat(v&&i().shortItem),children:(0,n.jsx)(b,{item:e.descripcion,active:!1})})},t)}))})]})}},5255:function(e,t,r){"use strict";r.d(t,{h:function(){return o}});var n=r(9669),o=r.n(n)().create({baseURL:"https://sandbox.sis.rus.com.ar/api-rus/"});o.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers={Authorization:t}),e}))},2167:function(e,t,r){"use strict";var n=r(3848);t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},c=r(1063),i=r(4651),s=r(7426);var u={};function l(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),r=n(t,2),a=r[0],i=r[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,_=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,j=s.useIntersection({rootMargin:"200px"}),x=n(j,2),y=x[0],w=x[1],M=a.default.useCallback((function(e){y(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,y]);a.default.useEffect((function(){var e=w&&r&&c.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,n=u[d+"%"+p+(t?"%"+t:"")];e&&!n&&l(o,d,p,{locale:t})}),[p,d,w,b,r,o]);var O={ref:M,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:s,scroll:i}))}(e,o,d,p,h,m,_,b)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var I="undefined"!==typeof b?b:o&&o.locale,E=o&&o.isLocaleDomain&&c.getDomainLocale(p,I,o&&o.locales,o&&o.domainLocales);O.href=E||c.addBasePath(c.addLocale(p,I,o&&o.defaultLocale))}return a.default.cloneElement(t,O)};t.default=f},7426:function(e,t,r){"use strict";var n=r(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,s=o.useRef(),u=o.useState(!1),l=n(u,2),f=l[0],d=l[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=r(7294),a=r(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},9457:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(5893),o=r(4362),a=r(8767),c=r(5255);function i(e,t){var r=(0,a.useQuery)([o.i.model,e,t],(function(){return function(e){var t=e.id,r=e.year;return c.h.get("/vehiculos/modelos",{params:{IdGrupoModelo:t,"A\xf1o":r}})}({id:e,year:t})}),{enabled:!!e&&!!t});return{data:r.data,isLoading:r.isLoading}}var s=r(1163),u=r(3290),l=function(){var e=(0,s.useRouter)(),t=i(e.query.modelos,"2020"),r=t.data;t.isLoading;return(0,n.jsx)(u.Z,{title:"Eleg\xed la versi\xf3n de tu moto",item:null===r||void 0===r?void 0:r.data.dtoList,href:"/cotizador/codigoGuarda/",shortWrap:!0,handleBackArrow:function(){e.push("/cotizador/grupoModelos/modelos/")}})}},4362:function(e,t,r){"use strict";var n;r.d(t,{i:function(){return n}}),function(e){e.groupModel="groupModel",e.model="model"}(n||(n={}))},5845:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cotizador/grupoModelos/modelos/[modelos]",function(){return r(9457)}])},6090:function(e){e.exports={wrapper:"ItemTap_wrapper__1uc6v",button:"ItemTap_button__2N2M7",activeItem:"ItemTap_activeItem__3n-Q8",iconAling:"ItemTap_iconAling__1A59X"}},6998:function(e){e.exports={wrapper:"ManualForm_wrapper__1yJOa",shortWrap:"ManualForm_shortWrap__1YWn-",headerWrap:"ManualForm_headerWrap__2Gi2-",inputWrap:"ManualForm_inputWrap__2ewWS",brief:"ManualForm_brief__o1BoS",itemWrap:"ManualForm_itemWrap__KRDTD",shortWrapItem:"ManualForm_shortWrapItem__2svIX",item:"ManualForm_item__3sZex",shortItem:"ManualForm_shortItem__1PlAV"}},1664:function(e,t,r){e.exports=r(2167)}},function(e){e.O(0,[437,507,774,888,179],(function(){return t=5845,e(e.s=t);var t}));var t=e.O();_N_E=t}]);