/*!
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor=t():e.CKEditor=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(0);function o(){}e.exports=function(){function e(e,t,n,o,u,i){if(i!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){e.exports=n(1)()},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,u,i,a,c){if(r(t),!e){var f;if(void 0===t)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,u,i,a,c],s=0;(f=new Error(t.replace(/%s/g,function(){return l[s++]}))).name="Invariant Violation"}throw f.framesToPop=1,f}}},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,a=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var f in n=Object(arguments[c]))o.call(n,f)&&(a[f]=n[f]);if(r){i=r(n);for(var l=0;l<i.length;l++)u.call(n,i[l])&&(a[i[l]]=n[i[l]])}}return a}},function(e,t,n){"use strict";var r=n(6),o=n(5),u=n(4),i=n(3),a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,f=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,s=a?Symbol.for("react.strict_mode"):60108,p=a?Symbol.for("react.profiler"):60114,d=a?Symbol.for("react.provider"):60109,y=a?Symbol.for("react.context"):60110,h=a?Symbol.for("react.async_mode"):60111,v=a?Symbol.for("react.forward_ref"):60112;a&&Symbol.for("react.timeout");var b="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);o(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function g(e,t,n){this.props=e,this.context=t,this.refs=u,this.updater=n||_}function O(){}function j(e,t,n){this.props=e,this.context=t,this.refs=u,this.updater=n||_}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=g.prototype;var w=j.prototype=new O;w.constructor=j,r(w,g.prototype),w.isPureReactComponent=!0;var S={current:null},P=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r=void 0,o={},u=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)P.call(t,r)&&!k.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var f=Array(a),l=0;l<a;l++)f[l]=arguments[l+2];o.children=f}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:c,type:e,key:u,ref:i,props:o,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var R=/\/+/g,C=[];function T(e,t,n,r){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function A(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case c:case f:u=!0}}if(u)return n(r,e,""===t?"."+I(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var a=t+I(o=e[i],i);u+=A(o,a,n,r)}else if(null===e||void 0===e?a=null:a="function"==typeof(a=b&&e[b]||e["@@iterator"])?a:null,"function"==typeof a)for(e=a.call(e),i=0;!(o=e.next()).done;)u+=A(o=o.value,a=t+I(o,i++),n,r);else"object"===o&&m("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return u}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,i.thatReturnsArgument):null!=e&&(E(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n,e={$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function q(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(R,"$&/")+"/"),t=T(t,u,r,o),null==e||A(e,"",U,t),$(t)}var D={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return q(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=T(null,null,t,n),null==e||A(e,"",M,t),$(t)},count:function(e){return null==e?0:A(e,"",i.thatReturnsNull,null)},toArray:function(e){var t=[];return q(e,t,null,i.thatReturnsArgument),t},only:function(e){return E(e)||m("143"),e}},createRef:function(){return{current:null}},Component:g,PureComponent:j,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:y,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_currentValue2:e,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:v,render:e}},Fragment:l,StrictMode:s,unstable_AsyncMode:h,unstable_Profiler:p,createElement:x,cloneElement:function(e,t,n){(null===e||void 0===e)&&m("267",e);var o=void 0,u=r({},e.props),i=e.key,a=e.ref,f=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,f=S.current),void 0!==t.key&&(i=""+t.key);var l=void 0;for(o in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)P.call(t,o)&&!k.hasOwnProperty(o)&&(u[o]=void 0===t[o]&&void 0!==l?l[o]:t[o])}if(1===(o=arguments.length-2))u.children=n;else if(1<o){l=Array(o);for(var s=0;s<o;s++)l[s]=arguments[s+2];u.children=l}return{$$typeof:c,type:e.type,key:i,ref:a,props:u,_owner:f}},createFactory:function(e){var t=x.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.4.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:S,assign:r}},N={default:D},F=N&&D||N;e.exports=F.default?F.default:F},function(e,t,n){"use strict";e.exports=n(7)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(8)),u=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.editor=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidUpdate",value:function(e){this.editor&&e.data&&this.editor.setData(e.data)}},{key:"componentDidMount",value:function(){this._initializeEditor()}},{key:"componentWillUnmount",value:function(){this._destroyEditor()}},{key:"render",value:function(){var e=this;return o.default.createElement("div",{ref:function(t){return e.domContainer=t}})}},{key:"_initializeEditor",value:function(){var e=this;this.props.editor.create(this.domContainer,this.props.config).then(function(t){e.editor=t,e.props.data&&e.editor.setData(e.props.data),e.props.onInit&&e.props.onInit(e.editor),e.editor.model.document.on("change:data",function(n){e.props.onChange&&e.props.onChange({event:n,editor:t})})}).catch(function(e){console.error(e)})}},{key:"_destroyEditor",value:function(){this.editor&&this.editor.destroy()}}]),t}();t.default=a,a.propTypes={editor:u.default.func.isRequired,data:u.default.string,config:u.default.object,onChange:u.default.func,onInit:u.default.func},a.defaultProps={data:"",config:{}}}]).default});
//# sourceMappingURL=ckeditor.js.map