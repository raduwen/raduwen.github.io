_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{BNKi:function(e,t,n){"use strict";var r=n("nKUr");t.a=()=>Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"\xa9 raduwen.tech"})})},H0SL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("cMU6")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},b0Xd:function(e,t,n){"use strict";var r=n("nKUr");t.a=()=>Object(r.jsx)("img",{src:"/logo.gif",width:"332px",height:"32px",alt:"\u30e9\u30c9\u30a6\u30a7\u30f3\u306e\u30e9\u30dc"})},cMU6:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),c=n("YFqc"),s=n.n(c),o=n("b0Xd"),i=n("BNKi");t.default=()=>Object(r.jsxs)("div",{style:{textAlign:"center",margin:0,display:"flex",flexFlow:"column",minHeight:"100vh"},children:[Object(r.jsx)("header",{children:Object(r.jsx)("div",{style:{marginTop:"64px",marginBottom:"32px"},children:Object(r.jsx)(o.a,{})})}),Object(r.jsxs)("main",{style:{flex:1},children:[Object(r.jsx)("h1",{style:{color:"red",fontSize:"1.5rem"},children:"\u30e9\u30c9\u30a6\u30a7\u30f3\u306e\u30e9\u30dc"}),Object(r.jsxs)("p",{children:["\u3069\u3063\u304b\u3067\u307f\u305f\u3053\u3068\u3042\u308b\uff1f",Object(r.jsx)("br",{}),"\u305d\u3046\u3058\u3083\u3088\u3002\u30ef\u30b7\u306f\u3042\u306e\u30b5\u30a4\u30c8\u306e\u30d5\u30a1\u30f3\u306a\u306e\u3058\u3083\u3088\u3002"]}),Object(r.jsx)("p",{style:{fontSize:"1.0rem"},children:Object(r.jsx)(s.a,{href:"/top",children:Object(r.jsx)("a",{children:Object(r.jsx)("strong",{children:"\u5165\u5834"})})})}),Object(r.jsxs)("p",{children:[Object(r.jsx)("a",{href:"https://bbs.jpnkn.com/raduwen/",target:"_blank",children:"\u63b2\u793a\u677f"}),Object(r.jsx)("br",{}),Object(r.jsxs)("strike",{children:[Object(r.jsx)("a",{target:"_blank",children:"\u30b9\u30bf\u30f3\u30d7\u30ad\u30e3\u30b9\u30c8"}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("a",{href:"https://www.twitch.tv/raduwen",target:"_blank",children:"Twitch"}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("a",{href:"https://www.youtube.com/channel/UC9qkQ8wBNtykTaLrNHh_IJQ/",target:"_blank",children:"YouTube"}),"(\u7279\u306b\u4f55\u3082\u306a\u3044\u304b\u3082)",Object(r.jsx)("br",{})]})]})]}),Object(r.jsx)("footer",{style:{height:"auto",padding:"32px 0"},children:Object(r.jsx)(i.a,{})})]})},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var s=c(n("q1tI")),o=n("elyg"),i=n("nOHt"),l=n("vNVm");const a={};function u(e,t,n,r){if(!e)return;if(!(0,o.isLocalURL)(t))return;e.prefetch(t,n,r).catch((e=>{0}));const c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;a[t+"%"+n+(c?"%"+c:"")]=!0}var f=function(e){const t=!1!==e.prefetch,n=(0,i.useRouter)(),c=n&&n.pathname||"/",f=s.default.useMemo((()=>{const t=(0,o.resolveHref)(c,e.href,!0),n=r(t,2),s=n[0],i=n[1];return{href:s,as:e.as?(0,o.resolveHref)(c,e.as):i||s}}),[c,e.href,e.as]),d=f.href,h=f.as;let p=e.children,j=e.replace,b=e.shallow,x=e.scroll,O=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));const g=s.Children.only(p),v=g&&"object"===typeof g&&g.ref,w=(0,l.useIntersection)({rootMargin:"200px"}),y=r(w,2),m=y[0],_=y[1],k=s.default.useCallback((e=>{m(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,m]);(0,s.useEffect)((()=>{const e=_&&t&&(0,o.isLocalURL)(d),r="undefined"!==typeof O?O:n&&n.locale,c=a[d+"%"+h+(r?"%"+r:"")];e&&!c&&u(n,d,h,{locale:r})}),[h,d,_,O,t,n]);const E={ref:k,onClick:e=>{g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,s,i,l){("A"!==e.currentTarget.nodeName||!function(e){const t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:s,locale:l,scroll:i}).then((e=>{e&&i&&document.body.focus()})))}(e,n,d,h,j,b,x,O)},onMouseEnter:e=>{(0,o.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(n,d,h,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){const e="undefined"!==typeof O?O:n&&n.locale,t=(0,o.getDomainLocale)(h,e,n&&n.locales,n&&n.domainLocales);E.href=t||(0,o.addBasePath)((0,o.addLocale)(h,e,n&&n.defaultLocale))}return s.default.cloneElement(g,E)};t.default=f},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),c=n("TqRt");t.__esModule=!0,t.useIntersection=function({rootMargin:e,disabled:t}){const n=t||!i,c=(0,s.useRef)(),a=(0,s.useState)(!1),u=r(a,2),f=u[0],d=u[1],h=(0,s.useCallback)((t=>{c.current&&(c.current(),c.current=void 0),n||f||t&&t.tagName&&(c.current=function(e,t,n){const r=function(e){const t=e.rootMargin||"";let n=l.get(t);if(n)return n;const r=new Map,c=new IntersectionObserver((e=>{e.forEach((e=>{const t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,s=r.observer,o=r.elements;return o.set(e,t),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),l.delete(c))}}(t,(e=>e&&d(e)),{rootMargin:e}))}),[n,e,f]);return(0,s.useEffect)((()=>{i||f||(0,o.default)((()=>d(!0)))}),[f]),[h,f]};var s=n("q1tI"),o=c(n("0G5g"));const i="undefined"!==typeof IntersectionObserver;const l=new Map}},[["H0SL",0,1,2]]]);