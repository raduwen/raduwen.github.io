_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},"/Xaf":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index2",function(){return n("uvZS")}])},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},u=n("lwAK"),i=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,c=p.length;i<c;i++){var s=p[i];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],f=r[s]||new Set;f.has(l)?a=!1:(f.add(l),r[s]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(u.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var y=h;t.default=y},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),u=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||u()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),u=n("PJYZ"),i=n("7W2i"),c=n("a1gu"),s=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),p=!1,d=function(e){i(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,p&&a._hasHeadManager&&(a.props.headManager.mountedInstances.add(u(a)),a.emitChange()),a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=d},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},uvZS:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),u=n.n(a),i=o.a.createElement;function c(){return i(o.a.Fragment,null,i(u.a,null,i("meta",{charset:"utf-8"}),i("title",null,"raduwen"),i("link",{rel:"stylesheet",href:"index2.css"})),i("div",{class:"center"},i("section",null,i("h1",{class:"white-edge"},i("span",{style:{color:"#256E6F"}},"\u30e9"),i("span",{style:{color:"#00226B"}},"\u30c9"),i("span",{style:{color:"#34146B"}},"\u304f"),i("span",{style:{color:"#681B6C"}},"\u3093"),i("span",{style:{color:"#691639"}},"\u306e"),i("span",{style:{color:"#6A2910"}},"\u30ce"),i("span",{style:{color:"#776228"}},"\u30fc"),i("span",{style:{color:"#556D1E"}},"\u30c8")),i("h2",null,"\u3042\u308c\u3082\u3053\u308c\u3082 \u305d\u3057\u3066 \u30aa\u30ec\u3082\u3042\u306a\u305f\u3082 \u307f\u3093\u306a\u30af\u30ba\u3060"),i("div",{class:"blue box"},i("p",null,"\u2605\u30001024x768px\u63a8\u5968\u3000\u30d5\u30a9\u30f3\u30c8\u30b5\u30a4\u30ba\u4e2d\u3000\uff12\uff14\u30d3\u30c3\u30c8\u30ab\u30e9\u30fc\u63a8\u5968\u3000\u2605 "),i("p",null,"\u5f53\u30b5\u30a4\u30c8\u306f\u90aa\u60aa\u306a\u753b\u50cf\u53ca\u3073\u5185\u5bb9\u3092\u542b\u3093\u3067\u3044\u307e\u3059\u3002"),i("p",null,"\u3042\u306a\u305f\u306f\u4eba\u9593\u5931\u683c\u306e\u866b\u3051\u3089\u4ee5\u4e0b\u3067\u3059\u304b\uff1f"),i("p",{class:"white"},i("b",{class:"medium"},"\u30fb\u30fb\u30fb--",i("a",{href:"./home/"},"\u306f\u3044"),"--",i("a",{href:"javascript:history.back()"},"\u3044\u3044\u3048"),"--\u30fb\u30fb\u30fb"),i("br",null),i("br",null),"\u30e9\u30c9\u30a6\u30a7\u30f3\u306f\u5948\u843d\u306e\u5e95\u306e\u3088\u3046\u306a\u30db\u30fc\u30e0\u30da\u30fc\u30b8\u3092\u76ee\u6307\u3057\u3066\u3044\u307e\u3059"),i("br",null),i("p",null,"\u3046\u3061\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u753b\u50cf\u3068\u304b\u3067\u6587\u53e5\u3092\u8a00\u308f\u308c\u308b\u7b4b\u5408\u3044\u306f\u306d\u3048\u3088"),i("hr",null),i("p",null,i("a",{href:"https://github.com/raduwen"},"\u7ba1\u7406\u4eba\u30fb\u30e9\u30c9\u30a6\u30a7\u30f3")))),i("section",null,i("p",{class:"gray"},"\u3042\u3093\u305f\u304c\u3001\u3069\u306e\u30d6\u30e9\u30a6\u30b6\u3067\u3053\u308c\u3092\u898b\u3066\u3044\u3088\u3046\u304c\u3001\u30aa\u30ec\u306e\u77e5\u3063\u305f\u3053\u3068\u3067\u306f\u306a\u3044")),i("section",{class:"mt-10"},i("p",null,"\u5f53\u30b5\u30a4\u30c8\u306f\u3001\u6614\u6d3b\u52d5\u3055\u308c\u3066\u3044\u305f\u300c\u304b\u305a\u307e\u3093\u306e\u30ce\u30fc\u30c8\u300d\u69d8\u306e\u30aa\u30de\u30fc\u30b8\u30e5\u3067\u3059\u3002 (",i("a",{href:"https://mixi.jp/view_bbs.pl?comm_id=483822&id=35513568"},"\u304b\u305a\u307e\u3093\u306e\u30ce\u30fc\u30c8\u4f11\u6b62"),")"))))}}},[["/Xaf",0,1]]]);