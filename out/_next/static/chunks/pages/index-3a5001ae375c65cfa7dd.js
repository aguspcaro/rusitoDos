(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6272:function(e,t,r){"use strict";var n=r(2809),a=r(5893),o=r(427),c=r(7294),l=r(6298),s=r.n(l);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=c.forwardRef((function(e,t){var r=e.children,n=e.layout,c=void 0===n?"dark-blue":n,l=e.disabled,i=e.center,p=(0,o.Z)(e,["children","layout","disabled","center"]);return(0,a.jsx)("div",{className:" ".concat(s().wrapper," "),children:(0,a.jsx)("button",u(u({},p),{},{disabled:l,ref:t,className:" ".concat(s().button," ").concat(s()[c]," ").concat(l&&s().disabled," ").concat(i&&s().center),children:r}))})}));t.Z=c.memo(p)},6782:function(e,t,r){"use strict";var n=r(2809),a=r(5893),o=r(427),c=r(7294),l=r(6420),s=r.n(l);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.text,r=e.className,n=e.as,c=void 0===n?"p":n,l=e.fontFamily,i=e.color,p=(0,o.Z)(e,["text","className","as","fontFamily","color"]);return(0,a.jsx)("div",{className:s().wrapper,children:(0,a.jsx)(c,u(u({},p),{},{style:{fontFamily:l,color:i},className:"".concat(r&&s()[r]),children:t}))})};t.Z=(0,c.memo)(p)},1199:function(e,t,r){"use strict";var n=r(5893),a=r(2809),o=r(427),c=r(7294),l=r(8133),s=r.n(l);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=(0,c.forwardRef)((function(e,t){var r=e.label,a=e.value,l=(e.className,e.statusMessage),i=e.placeholder,p=e.inputChange,_=e.onChange,d=e.disabled,f=void 0!==d&&d,b=(0,o.Z)(e,["label","value","className","statusMessage","placeholder","inputChange","onChange","disabled"]),h=(0,c.useState)(!1),m=h[0],x=h[1];return(0,n.jsxs)("div",{className:" ".concat(s().wrapper," "),children:[(0,n.jsxs)("div",{className:" ".concat(f?s().disabled:s().inputBackground," ").concat(l&&m?s().errorBorder:""," ").concat(m?s().activeBorder:""),children:[(0,n.jsx)("label",{className:"".concat(s().label,"  ").concat(!m&&s().labelNotClicked," ").concat(a&&s().labelWithValue),children:r}),(0,n.jsx)("div",{className:" ".concat(s().inputWrap," "),children:(0,n.jsx)("input",u(u({},b),{},{className:" ".concat(s().input," ").concat(r?s().labelPlaceholder:""),value:a,placeholder:m?i:"",ref:t,onChange:function(e){null===p||void 0===p||p(e),null===_||void 0===_||_(e)},onClick:function(){x(!m)}}))})]}),l&&(0,n.jsxs)("p",{className:s().statusMessage,children:[" ",l," "]})]})}));t.Z=(0,c.memo)(p)},5255:function(e,t,r){"use strict";r.d(t,{h:function(){return a}});var n=r(9669),a=r.n(n)().create({baseURL:"https://sandbox.sis.rus.com.ar/api-rus/"});a.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers={Authorization:t}),e}))},6866:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(2809),a=r(5893),o=r(809),c=r.n(o),l=r(266),s=r(397),i=r(9008),u=r(7294),p=r(2283),_=r(1163),d=r(5255),f=r(8767),b=(0,r(4671).Z)((function(e,t){return{token:"",setToken:function(t){e({token:t})}}})),h=function(){b().setToken;var e=(0,f.useMutation)((function(e){return function(e){return d.h.post("login/token",e)}(e)}),{onSuccess:function(e){localStorage.setItem("token",e.data.message),localStorage}}),t=e.isLoading;return[e.mutateAsync,t]},m=r(6272),x=r(6782),j=r(1199);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){return(0,a.jsxs)("svg",O(O({width:315,height:335,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[(0,a.jsx)("path",{d:"M131.487 99.454c25.491 0 33.272-26.15 33.229-36.839l16.915-17.903 16.985 16.524s-.485 21.153 6.918 31.06c7.769 10.4 51.455-3.364 52.896 30.188 1.441 33.553-24.264.309-27.172 3.217-7.423 7.423-99.064 26.742-118.798 22.94-19.734-3.802-15.287-49.187 19.027-49.187z",fill:"#1F1E48"}),(0,a.jsx)("path",{d:"M139.249 112.94c10.284-.748 27.371-10.143 28.353-45.392l.859 3.219c1.673 31.599-18.311 49.013-20.589 52.478-5.889 2.273-11.576-3.728-8.99-9.487l.367-.818z",fill:"#9E9EB8"}),(0,a.jsx)("circle",{cx:181.379,cy:39.524,r:8.375,fill:"#1F1E48"}),(0,a.jsx)("circle",{cx:181.087,cy:39.06,r:8.84,stroke:"#1F1E48",strokeWidth:.868}),(0,a.jsx)("path",{d:"M197.765 62.832c0 14.092 10.035 33.174 28.471 26.512",stroke:"#1F1E48",strokeWidth:1.23}),(0,a.jsx)("path",{d:"M167.824 57.345c.212-7.553 6.395-13.566 13.951-13.566 7.48 0 13.629 5.898 13.943 13.371l.378 9.008-.181 27.036c-.008 1.211.099 2.42.319 3.611l.691 3.736c1.683 9.108-5.309 17.511-14.572 17.511-9.271 0-16.233-8.468-14.439-17.565l.638-3.24c.293-1.483.403-2.996.329-4.505l-1.303-26.584.246-8.813z",fill:"#fff"}),(0,a.jsx)("path",{d:"M183.296 80.988c-8.434 0-11.999-5.575-11.999-10.528",stroke:"#1F1E48",strokeWidth:1.23,strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M200.915 75.63c.421-4.994-14.043-6.873-17.534-12.798l-1.863 9.132c.618 1.017 7.169 5.592 9.848 6.327 2.678.734 9.258.786 9.549-2.66z",fill:"#fff"}),(0,a.jsx)("path",{d:"M183.381 62.832c3.491 5.925 17.955 7.804 17.534 12.799-.291 3.446-6.871 3.394-9.549 2.66-2.679-.735-7.716-2.66-9.848-6.327",stroke:"#1F1E48",strokeWidth:1.23,strokeLinejoin:"round"}),(0,a.jsx)("ellipse",{cx:176.197,cy:59.18,rx:2.042,ry:2.456,transform:"rotate(4.15 176.197 59.18)",fill:"#1F1E48"}),(0,a.jsx)("ellipse",{cx:188.464,cy:59.141,rx:1.464,ry:1.852,fill:"#1F1E48"}),(0,a.jsx)("path",{d:"M198.629 61.305l.033-3.3c.097-9.55-7.676-17.313-17.225-17.203-9.54.11-17.128 8.033-16.827 17.568l.138 4.349c1.929-2.482 4.828-4.758 9.54-6.114 4.632-1.334 6.886-5.31 8.018-9.867 1.133 4.557 3.387 8.533 8.019 9.867 3.799 1.093 6.42 2.785 8.304 4.7z",fill:"#1F1E48"}),(0,a.jsx)("path",{d:"M165.506 61.64c0 14.091-10.056 35.967-26.107 30.755-15.618-8.374-27.51-6.73-27.51 10.993",stroke:"#1F1E48",strokeWidth:1.23}),(0,a.jsx)("path",{d:"M167.632 101.732c-54.663 4.67-84.353 33.188-85.443 42.473l3.423 84.956c-3.425 23.402-6.809 90.584-3.423 92.466 29.623 16.448 51.481 10.392 89.794 10.016 18.606-.182 27.173-1.778 41.302 0 37.357 4.69 62.826-8.349 61.515-20.874-.883-8.447 16.207-128.355 16.028-142.341 0 0-4.945-27.077-8.962-35.216-4.547-9.211-42.414-30.699-84.631-32.201-3.493 4.502-5.965 7.906-15.158 7.906-8.675 0-10.943-3.097-14.445-7.185z",fill:"#FECE46"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M84.003 188.527a.7.7 0 01.769.624c1.478 14.201 2.009 24.951 2.07 32.624.06 7.655-.345 12.287-.756 14.228a.7.7 0 11-1.37-.29c.378-1.784.787-6.287.726-13.926-.06-7.622-.588-18.327-2.063-32.491a.7.7 0 01.624-.769z",fill:"#1F1E48"}),(0,a.jsx)("path",{d:"M175.819 172.376c-5.31 4.478-7.685 7.141-8.956 11.267-1.319-2.121-3.843-2.345-6.745-4.022-8.749-5.084-23.474-8.155-34.366-13.528-1.232-.608-2.607.385-2.218 1.703 1.267 4.291 4.389 11.721 11.467 15.84 9.193 5.339 18.813 5.465 23.614 7.931 4.698 2.384 6.137 5.578 7.228 7.272l.002.007c.002.017.026.024.031.007.723-2.534 5.618-11.265 12.988-15.21 9.749-5.325 16.047-5.742 26.974-13.552 9.022-6.496 12.985-16.531 14.608-22.361.418-1.504-1.305-2.439-2.494-1.427-14.246 12.125-31.108 16.755-42.133 26.073z",fill:"#fff"}),(0,a.jsx)("path",{d:"M165.022 211.821c2.165-30.404 30.581-51.965 60.445-45.864 29.864 6.101 47.546 37.08 37.612 65.897l-7.258 21.058c-4.248 12.322-16.973 19.585-29.743 16.976l-41.938-8.568c-12.77-2.609-21.626-14.281-20.701-27.282l1.583-22.217z",fill:"#FE6933"}),(0,a.jsx)("mask",{id:"prefix__a",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:163,y:164,width:103,height:107,children:(0,a.jsx)("path",{d:"M165.022 211.821c2.165-30.404 30.581-51.965 60.445-45.864 29.864 6.101 47.546 37.08 37.612 65.897l-7.258 21.058c-4.248 12.322-16.973 19.585-29.743 16.976l-41.938-8.568c-12.77-2.609-21.626-14.281-20.701-27.282l1.583-22.217z",fill:"#FE6933"})}),(0,a.jsxs)("g",{mask:"url(#prefix__a)",children:[(0,a.jsx)("path",{d:"M160.277 211.599l-5.736 46.584 1.728.644a196.22 196.22 0 0061.318 12.236l12.123-45.417c1.33-4.837-.864-9.97-5.261-12.385-16.603-9.119-35.681-13.052-54.53-11.175a10.777 10.777 0 00-9.642 9.513z",fill:"#D65729"}),(0,a.jsx)("path",{d:"M208.933 158.625a52.013 52.013 0 0124.965 4.932l.628.297a46.924 46.924 0 00-27.851 41.619l-.021.8-12.086-4.192-13.508-1.037.022-.8a46.925 46.925 0 0127.851-41.619z",fill:"#FAAA8D"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M224.19 213.734c-16.508-9.067-35.477-12.977-54.217-11.112a10.239 10.239 0 00-9.159 9.038l-4.684 41.435-1.073-.121 4.685-41.435a11.316 11.316 0 0110.124-9.99c18.959-1.888 38.146 2.068 54.844 11.239 4.613 2.534 6.918 7.921 5.521 13.001l-11.071 40.268-1.041-.286 11.072-40.269c1.262-4.593-.822-9.472-5.001-11.768z",fill:"#1F1E48"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M162.816 233.829l1.323-18.054 1.076.078-1.322 18.055c-.926 12.639 7.676 24.001 20.093 26.537l12.034 2.459-.216 1.057-12.034-2.458c-12.948-2.645-21.919-14.493-20.954-27.674zM264.249 226.136c5.644-27.625-12.175-54.595-39.801-60.239l.216-1.057c28.21 5.763 46.406 33.303 40.643 61.512l-.158.77-1.057-.216.157-.77z",fill:"#1F1E48"})]}),(0,a.jsx)("path",{d:"M308.392 198.613l-46.709 15.304-10.09-44.673a33.349 33.349 0 011.864-20.455l2.72-6.363a19.526 19.526 0 0113.338-11.298c10.174-2.476 20.491 3.515 23.384 13.579l15.493 53.906z",fill:"#FECE46"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M253.812 176.625a.701.701 0 01.749.649c1.497 20.903 4.876 28.883 8.59 35.712a.7.7 0 11-1.23.669c-3.825-7.033-7.248-15.214-8.757-36.281a.701.701 0 01.648-.749z",fill:"#1F1E48"}),(0,a.jsx)("path",{d:"M307.573 198.369l-45.368 14.413a31.416 31.416 0 01-30.173 17.747l-22.074-1.308c-12.945.521-23.366-6.12-34.216-.529-4.16 1.235-4.575 6.92-3.133 9.215-15.851 4.058-15.911 14.907-6.953 17.584-3.732.744-9.008 15.332 3.243 14.928-3.324 2.39-5.693 12.75 20.457 9.408 5.546-.852 12.48-.762 19.059-.768 13.582 2.049 61.846 13.393 80.926 7.426 28.352-9.171 31.021-55.934 18.438-87.598l-.206-.518z",fill:"#fff"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M307.323 197.99a.701.701 0 01.882.45c6.91 21.325 7.611 37.701 5.962 49.832-1.649 12.135-5.645 19.986-8.073 24.259-4.629 8.147-10.503 12.716-18.741 15.173-11.416 3.406-23.588 1.715-35.196.103l-1.143-.159c-6.271-.87-12.545-2.239-18.788-3.602a543.488 543.488 0 00-8.287-1.765c-8.996-1.822-17.952-3.174-26.95-2.6-2.861.182-5.52.51-7.808.913-8.135 1.429-14.032 1.068-17.76-.37-1.87-.721-3.241-1.731-4.044-2.972-.814-1.257-1.005-2.691-.611-4.143.187-.69.504-1.38.944-2.059-5.01.084-8.79-5.438-6.501-10.997.61-1.483 1.639-2.957 3.157-4.339a.693.693 0 01-.498-.045c-2.384-1.167-3.96-2.496-4.757-3.976-.817-1.517-.769-3.1-.098-4.618.659-1.491 1.915-2.922 3.529-4.247 1.622-1.332 3.646-2.59 5.9-3.722a48.993 48.993 0 013.446-1.564.7.7 0 01-.451-.405c-1.063-2.569-.665-4.802.819-6.56 1.438-1.703 3.834-2.888 6.649-3.614 5.624-1.451 13.3-1.167 19.75.96 1.883.196 4.004.403 6.108.609l.054.005c2.098.205 4.176.408 5.972.595l26.25.095a.701.701 0 01-.005 1.4l-26.286-.095c-.023 0-.046-.002-.069-.004-1.8-.187-3.888-.391-6.002-.598l-.051-.005c-2.13-.208-4.285-.419-6.191-.617a.695.695 0 01-.149-.032c-6.231-2.072-13.669-2.341-19.031-.958-2.689.694-4.76 1.778-5.929 3.163-1.123 1.329-1.472 3.001-.596 5.121a.7.7 0 01-.041.619c3.496-1.367 7.288-2.437 10.924-3.053 5.146-.872 10.109-.858 13.49.628a.7.7 0 11-.563 1.282c-2.996-1.317-7.622-1.389-12.693-.53-5.041.855-10.396 2.607-14.776 4.808-2.19 1.101-4.12 2.305-5.64 3.554-1.528 1.254-2.602 2.52-3.137 3.731-.523 1.183-.533 2.306.049 3.388.602 1.118 1.885 2.279 4.14 3.383a.7.7 0 01.336.906c1.605-1.357 3.703-2.614 6.363-3.69 5.592-2.263 13.72-3.75 25.163-3.683a.7.7 0 11-.008 1.4c-11.333-.066-19.264 1.41-24.63 3.581-5.366 2.171-8.114 5.013-9.204 7.659-2.175 5.285 2.031 10.001 6.463 8.892 1.474-1.54 3.596-2.98 6.281-4.189 4.768-2.145 11.444-3.627 19.872-3.657a.701.701 0 01.005 1.4c-8.276.03-14.75 1.485-19.302 3.534-4.589 2.065-7.097 4.669-7.705 6.911-.296 1.092-.15 2.112.435 3.015.596.92 1.685 1.776 3.372 2.427 3.386 1.306 8.988 1.707 17.014.297a73.06 73.06 0 017.962-.931c9.187-.586 18.289.796 27.317 2.624 2.8.567 5.588 1.176 8.37 1.783 6.218 1.357 12.403 2.708 18.619 3.571l1.067.148c11.693 1.624 23.58 3.264 34.68-.047 7.884-2.352 13.469-6.684 17.924-14.524 2.374-4.178 6.286-11.856 7.903-23.755 1.618-11.903.945-28.066-5.907-49.212a.7.7 0 01.45-.882z",fill:"#1F1E48"}),(0,a.jsx)("path",{d:"M57.078 2.531c5.861-.496 6.622 9.526 7.656 31.311C71.79 15.685 78.163 6.13 81.92 7.525c5.212 1.925 5.366 16.338-7.326 42.64 11.132-12.781 21.625-10.708 22.902-8.426 2.445 6.886-1.15 9.918-11.012 19.78-6.06 8.124-14.121 15.084-14.998 14.484L59.91 116.324c-5.168 14.74-.477 17.942 12.669 21.214l-5.035 62.855c-30.363 2.864-64.224-10.582-65.333-49.317-1.11-38.735 38.115-81.433 38.115-81.433-6.32-6.776-4.937-11.735-2.696-19.479-9.888-23.012-15.161-27.912-7.44-32.548 5.53-3.319 13.092 5.841 20.098 21.162-1.336-19.61-3.162-35.468 6.79-36.247z",fill:"#fff"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M71.404 53.878c-1.515-.419-3.564-.32-5.827.242-2.25.557-4.646 1.554-6.824 2.856-2.181 1.303-4.114 2.895-5.463 4.624-1.35 1.732-2.076 3.552-1.957 5.341a.7.7 0 01-1.397.093c-.15-2.244.77-4.395 2.25-6.294 1.482-1.901 3.562-3.6 5.849-4.966 2.288-1.368 4.812-2.42 7.205-3.013 2.17-.538 4.288-.711 6.041-.351 5.81-8.707 9.546-17.497 11.573-24.985 2.067-7.64 2.33-13.819 1.3-17.172-.517-1.689-1.28-2.427-2.07-2.557-.838-.137-2.109.33-3.816 2.04-3.374 3.378-7.826 10.992-12.941 24.414-.095.249-.19.465-.285.637-.076.137-.219.374-.459.51a.801.801 0 01-1.059-.232c-.137-.185-.198-.413-.233-.568-.146-.66-.183-1.963-.197-3.568-.007-.742-.008-1.568-.009-2.457-.003-3.057-.008-6.863-.235-10.624-.295-4.886-.96-9.542-2.401-12.331-.716-1.384-1.558-2.184-2.523-2.43-.964-.245-2.267.007-4.034 1.23-.58.401-1.11 1.08-1.578 2.046-.465.962-.849 2.166-1.158 3.562-.617 2.793-.916 6.267-1.02 9.913-.196 6.907.308 14.32.603 18.67l.047.688a.725.725 0 01-.12.475.706.706 0 01-1.087.106.926.926 0 01-.137-.174 2.095 2.095 0 01-.07-.122c-.081-.153-.197-.4-.335-.704-.084-.184-.18-.395-.285-.63-.255-.562-.572-1.263-.949-2.073-1.068-2.29-2.6-5.398-4.447-8.407-1.853-3.02-3.993-5.89-6.262-7.743-2.267-1.852-4.525-2.588-6.735-1.685-1.1.45-1.803 1.192-2.219 2.169-.426 1-.564 2.28-.448 3.79.234 3.029 1.474 6.764 3.052 10.493 1.572 3.715 3.452 7.359 4.925 10.197l.149.286c.67 1.292 1.252 2.413 1.663 3.272.22.46.4.862.52 1.184.06.16.11.318.143.462.027.121.064.325.017.536a.713.713 0 01-.016.061l-1.136 3.566a14.716 14.716 0 003.084 14.31c.807.898.857 2.244.118 3.198L25.887 90.274a112.66 112.66 0 00-18.746 36.364l-2.496 8.261c-10.167 33.652 16.141 67.195 51.247 65.34l.074 1.398c-36.074 1.907-63.108-32.562-52.661-67.143l2.496-8.261A114.05 114.05 0 0124.78 89.417l14.324-18.51c.324-.42.302-1.01-.052-1.405a16.116 16.116 0 01-3.377-15.672l1.099-3.449a2.522 2.522 0 00-.085-.264 13.705 13.705 0 00-.47-1.067c-.401-.837-.973-1.938-1.65-3.24l-.143-.278c-1.471-2.835-3.375-6.523-4.971-10.296-1.591-3.758-2.906-7.666-3.158-10.93-.127-1.635.009-3.164.555-4.447.557-1.306 1.526-2.322 2.977-2.916 2.894-1.183 5.699-.106 8.151 1.897 2.451 2.002 4.689 5.03 6.57 8.095 1.886 3.075 3.444 6.237 4.522 8.547l.075.162c-.275-4.361-.57-10.263-.41-15.846.105-3.682.407-7.257 1.052-10.175.323-1.46.736-2.778 1.265-3.87.528-1.09 1.192-1.999 2.04-2.587 1.927-1.334 3.654-1.823 5.177-1.436 1.52.387 2.62 1.593 3.421 3.144 1.593 3.082 2.261 8.016 2.555 12.89.23 3.807.235 7.673.238 10.733.002.88.002 1.694.009 2.42.004.537.012 1.017.024 1.438 4.919-12.655 9.278-20.123 12.76-23.609 1.778-1.781 3.49-2.684 5.033-2.431 1.593.26 2.613 1.672 3.182 3.528 1.147 3.738.8 10.233-1.288 17.947-1.75 6.466-4.742 13.86-9.2 21.341 1.85-1.75 4.213-3.885 6.75-5.75 2.764-2.032 5.806-3.797 8.659-4.343 1.438-.275 2.86-.246 4.18.243 1.327.492 2.495 1.43 3.451 2.875l.018.028.005.009c.602 1.044 1.219 2.782 1.129 4.66-.093 1.913-.923 3.952-3.177 5.485-1.192.81-3.011 2.76-5.192 5.307a367.151 367.151 0 00-3.835 4.585 544.82 544.82 0 01-3.195 3.836c-2.42 2.87-4.835 5.612-6.92 7.543-1.04.964-2.025 1.752-2.91 2.252-.605.342-1.253.6-1.878.61L58.18 123.06c-1.523 5.102 1.506 10.446 6.666 11.76l-.346 1.357c-5.93-1.51-9.413-7.653-7.662-13.518l14.083-47.165a.7.7 0 01.91-.457c.22.08.666.047 1.448-.395.745-.42 1.638-1.124 2.648-2.06 2.015-1.866 4.381-4.55 6.801-7.419 1.053-1.249 2.12-2.539 3.17-3.806 1.342-1.622 2.654-3.207 3.867-4.623 2.149-2.51 4.091-4.617 5.468-5.553 1.854-1.262 2.492-2.876 2.565-4.396.075-1.545-.438-3.009-.933-3.875-.81-1.218-1.748-1.942-2.758-2.316-1.022-.379-2.173-.421-3.43-.18-2.538.485-5.373 2.096-8.093 4.095-2.704 1.988-5.224 4.306-7.128 6.125-.434.415-.84.808-1.21 1.166-.432.418-.813.786-1.126 1.08-.292.276-.546.507-.745.668a2.632 2.632 0 01-.304.217c-.05.03-.122.068-.208.097a.783.783 0 01-.459.016zM49.39 39.298v-.006.006z",fill:"#1F1E48"}),(0,a.jsx)("path",{d:"M77.139 131.764l-12.263 2.763L55.228 201l1.627.45a85.01 85.01 0 0045.32 0l1.626-.45v-78.801l-13.515 5.459a85.034 85.034 0 01-13.147 4.106z",fill:"#FECE46"})]}))},g=r(9954),k=r.n(g);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(){var e=(0,u.useState)(""),t=e[0],r=e[1],n=(0,u.useState)(""),o=(n[0],n[1]),d=b().token,f=h(),v=(0,s.Z)(f,2),O=v[0],g=(v[1],(0,_.useRouter)()),w=(0,p.cI)(),N=w.register,P=w.handleSubmit,C=w.formState.errors,M=function(e){r(e.target.value)},T=function(e){localStorage.setItem("firstName",JSON.stringify(e.firstName))};(0,u.useEffect)((function(){(function(){var e=(0,l.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,localStorage.getItem("firstName");case 3:t=e.sent,r=null!==t?JSON.parse(t):"",o(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var B=function(){var e=(0,l.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(t);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return(0,a.jsxs)("div",{className:k().container,children:[(0,a.jsxs)(i.default,{children:[(0,a.jsx)("title",{children:"Rus web"}),(0,a.jsx)("meta",{name:"R\xedo Uruguay Seguros",content:"Generated by create next app"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("main",{className:k().mainWrap,children:[(0,a.jsx)("div",{className:k().mainTitleWrap,children:(0,a.jsx)(x.Z,{className:"h1AsistMobile",text:"\xa1Hola! Soy Ale, te voy a ayudar a elegir el seguro ideal para vos."})}),(0,a.jsx)(y,{}),(0,a.jsx)(x.Z,{className:"textoh4",text:"\xbfC\xf3mo te llam\xe1s?"}),(0,a.jsxs)("form",{onSubmit:P((function(e){T(e)})),className:k().mainForm,children:[(0,a.jsx)("div",{className:k().mainInputWrap,children:(0,a.jsx)(j.Z,E(E({},N("firstName",{required:!0,minLength:3,pattern:/^([^0-9]*)$/})),{},{name:"firstName",label:"Nombre",placeholder:"Tu nombre",value:t,onChange:function(){var e=(0,l.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),statusMessage:function(){var e;switch(null===C||void 0===C||null===(e=C.firstName)||void 0===e?void 0:e.type){case"minLength":return"Se necesitan m\xednimo 3 caract\xe9res";case"required":return"Este campo es obligatorio";case"pattern":return"Solo se admiten letras"}return""}(),autoComplete:"off"}))}),(0,a.jsx)("div",{className:k().mainButtonWrap,children:(0,a.jsx)(m.Z,{children:"Continuar",onClick:function(){d||B({password:"cambiar",userName:"99999933"}),g.push({pathname:"/cotizador"})},disabled:!(t.length>2)})})]})]})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6866)}])},6298:function(e){e.exports={wrapper:"Button_wrapper__1ieqx",button:"Button_button__n-Bt3",center:"Button_center__3HbnS","primary-blue":"Button_primary-blue__1HEYY","dark-blue":"Button_dark-blue__2qWX1","light-blue":"Button_light-blue__21dEu","black-tres":"Button_black-tres__1beN9","white-cuatro":"Button_white-cuatro__2qdkh","light-blue-dos":"Button_light-blue-dos__35crv","light-blue-tres":"Button_light-blue-tres__3vQLH","light-blue-cuatro":"Button_light-blue-cuatro__LPgyj","border-black-tres":"Button_border-black-tres__NqI_b","border-dark-blue":"Button_border-dark-blue__2lcth","border-blue":"Button_border-blue__iNLpj","text-black-tres":"Button_text-black-tres__38IUT","text-dark-blue":"Button_text-dark-blue__105eO","text-blue":"Button_text-blue__T_zaY",disabled:"Button_disabled__NgzN6"}},6420:function(e){e.exports={wrapper:"CustomText_wrapper__2aL0M",h1AsistDesktop:"CustomText_h1AsistDesktop__PLbZd",h2AsistDesktop:"CustomText_h2AsistDesktop__oSxp8",b1AsistDesktop:"CustomText_b1AsistDesktop__1E2bL",h1AsistMobile:"CustomText_h1AsistMobile__3P5Oa",h2AsistMobile:"CustomText_h2AsistMobile__1dDhw",b1AsistMobile:"CustomText_b1AsistMobile__3ofRe",d1:"CustomText_d1__3j9Hc",textoh1:"CustomText_textoh1__1X2hF",textoh2:"CustomText_textoh2__2UeMU",textoh3:"CustomText_textoh3__1zJQ1",textoh4:"CustomText_textoh4__37ih_",textoh5:"CustomText_textoh5__1InOp",textoh6:"CustomText_textoh6__3rrJ_",st1:"CustomText_st1__2q2Dt",st2:"CustomText_st2__P7oBs",st3:"CustomText_st3__2FUWu",b1:"CustomText_b1__e3TwD",b2:"CustomText_b2__1N3SF",b3:"CustomText_b3__3Ll1R",link1:"CustomText_link1__3a_Td",link2:"CustomText_link2__3AX3u",link3:"CustomText_link3__QSA3c",tiny1:"CustomText_tiny1__3olW4",tiny2:"CustomText_tiny2__2DjEH"}},8133:function(e){e.exports={wrapper:"Input_wrapper__2SB9m",inputBackground:"Input_inputBackground__xJ2UB",activeBorder:"Input_activeBorder__3tZAz",errorBorder:"Input_errorBorder__2u-fG",disabled:"Input_disabled__1bB-L",label:"Input_label__2tuxZ",labelNotClicked:"Input_labelNotClicked__18MFJ",labelWithValue:"Input_labelWithValue__2S4Af",inputWrap:"Input_inputWrap__3HBTR",input:"Input_input__2ACH_",statusMessage:"Input_statusMessage__e1d50"}},9954:function(e){e.exports={container:"Home_container__3sao-",mainWrap:"Home_mainWrap__2D-Uf",mainTitleWrap:"Home_mainTitleWrap__3h-0G",mainForm:"Home_mainForm__umGpa",mainInputWrap:"Home_mainInputWrap__1F7Td",mainButtonWrap:"Home_mainButtonWrap__1EExN",code:"Home_code__2X25X"}}},function(e){e.O(0,[437,814,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);