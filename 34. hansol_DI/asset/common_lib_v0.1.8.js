/**
 * @description aspen 공통 라이브러리
 * 
 * @version     v0.1.8
 * @last_update 19.11.26 18:12
 */

// polyfill v3.4.0
(function(t){function e(t){if(1/t==-1/0&&(t=0),t>Math.pow(2,32)-1)throw new RangeError("Invalid array length");var e=[];return e.length=t,e}function r(t,e){var r=arguments.length>2?arguments[2]:[];if(!1===a(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(e,r)}function n(t,e){return t[e]}function o(t,e){return e in t}function i(t){return"[object Array]"===Object.prototype.toString.call(t)}function a(t){return"function"==typeof t}function c(e){if(null===e||e===t)throw TypeError();return e}function u(t,e){return t===e}function l(t){return Boolean(t)}function f(t){var e=Number(t);return isNaN(e)?0:1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?e:(e<0?-1:1)*Math.floor(Math.abs(e))}function p(t){var e=f(t);return e<=0?0:Math.min(e,Math.pow(2,53)-1)}function s(t){return Number(t)}function h(e){if(null===e||e===t)throw TypeError();return Object(e)}function y(t,e){return h(t)[e]}function b(e,r){var n=y(e,r);if(null===n||n===t)return t;if(!1===a(n))throw new TypeError("Method not callable: "+r);return n}function v(t){var e=Number(t);return isNaN(e)||1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?0:(e<0?-1:1)*Math.floor(Math.abs(e))>>>0}function g(t){switch(typeof t){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===t?"null":"Symbol"in this&&t instanceof this.Symbol?"symbol":"object"}}function _(t){return"object"===g(t)&&"function"==typeof t&&!!t.prototype}function d(e){if("object"!==g(e))return!1;var r="Symbol"in this&&"match"in this.Symbol?n(e,this.Symbol.match):t;if(r!==t)return l(r);try{var o=e.lastIndex;return e.lastIndex=0,RegExp.prototype.exec.call(e),!0}catch(t){}finally{e.lastIndex=o}return!1}function w(e,n){if("object"!==g(e["[[Iterator]]"]))throw new Error(Object.prototype.toString.call(e["[[Iterator]]"])+"is not an Object.");var o=e["[[Iterator]]"],i=b(o,"return");if(i===t)return n;try{var a=r(i,o)}catch(t){var c=t}if(n)return n;if(c)throw c;if("object"!==g(a))throw new TypeError("Iterator's return method returned a non-object.");return n}function j(t){var e=function(t){if(arguments.length<2)var e=r(t["[[NextMethod]]"],t["[[Iterator]]"]);else e=r(t["[[NextMethod]]"],t["[[Iterator]]"],[arguments[1]]);if("object"!==g(e))throw new TypeError("bad iterator");return e}(t);return!0!==function(t){if("object"!==g(t))throw new Error(Object.prototype.toString.call(t)+"is not an Object.");return l(n(t,"done"))}(e)&&e}function m(t){if("object"!==g(t))throw new Error(Object.prototype.toString.call(t)+"is not an Object.");return n(t,"value")}function O(t,e){return g(t)===g(e)&&("number"===g(t)?!(!isNaN(t)||!isNaN(e))||(0!==t||0!==e||1/t==1/e)&&t===e:u(t,e))}function S(t,e){return g(t)===g(e)&&("number"===g(t)?!(!isNaN(t)||!isNaN(e))||1/t==1/0&&1/e==-1/0||1/t==-1/0&&1/e==1/0||t===e:u(t,e))}function E(e){var o=arguments.length>1?arguments[1]:t;if("object"===g(e)){if(arguments.length<2)var i="default";else o===String?i="string":o===Number&&(i="number");var c="function"==typeof this.Symbol&&"symbol"==typeof this.Symbol.toPrimitive?b(e,this.Symbol.toPrimitive):t;if(c!==t){var u=r(c,e,[i]);if("object"!==g(u))return u;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===i&&(i="number"),function(t,e){if("string"===e)var o=["toString","valueOf"];else o=["valueOf","toString"];for(var i=0;i<o.length;++i){var c=n(t,o[i]);if(a(c)){var u=r(c,t);if("object"!==g(u))return u}}throw new TypeError("Cannot convert to primitive.")}(e,i)}return e}function M(t){switch(g(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return M(E(t,"string"));default:return String(t)}}function P(t){return t<=65535?t:[Math.floor((t-65536)/1024)+55296,(t-65536)%1024+56320]}var T,A,N;function x(t,e,r){var n={value:r,writable:!0,enumerable:!0,configurable:!0};try{return Object.defineProperty(t,e,n),!0}catch(t){return!1}}function k(t,e,r){var n=x(t,e,r);if(!n)throw new TypeError("Cannot assign value `"+Object.prototype.toString.call(r)+"` to property `"+Object.prototype.toString.call(e)+"` on object `"+Object.prototype.toString.call(t)+"`");return n}function I(t,e){if("boolean"!==g(e))throw new Error;var r={};return x(r,"value",t),x(r,"done",e),r}function R(t,e,r){var n={value:r,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,e,n)}if(function(t){"use strict";function e(t){switch(typeof t){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";default:return null===t?"null":"object"}}function r(t){return Object.prototype.toString.call(t).replace(/^\[object *|\]$/g,"")}function n(t){return"function"==typeof t}function o(t){if(null===t||t===A)throw TypeError();return Object(t)}function i(t){return t>>0}function a(t){return t>>>0}function c(e){if(!("TYPED_ARRAY_POLYFILL_NO_ARRAY_ACCESSORS"in t)){if(e.length>N)throw RangeError("Array too large for polyfill");var r;for(r=0;r<e.length;r+=1)!function(t){Object.defineProperty(e,t,{get:function(){return e._getter(t)},set:function(r){e._setter(t,r)},enumerable:!0,configurable:!1})}(r)}}function u(t,e){var r=32-e;return t<<r>>r}function l(t,e){var r=32-e;return t<<r>>>r}function f(t){return[255&t]}function p(t){return u(t[0],8)}function s(t){return[255&t]}function h(t){return l(t[0],8)}function y(t){return[(t=C(Number(t)))<0?0:t>255?255:255&t]}function b(t){return[255&t,t>>8&255]}function v(t){return u(t[1]<<8|t[0],16)}function g(t){return[255&t,t>>8&255]}function _(t){return l(t[1]<<8|t[0],16)}function d(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function w(t){return u(t[3]<<24|t[2]<<16|t[1]<<8|t[0],32)}function j(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function m(t){return l(t[3]<<24|t[2]<<16|t[1]<<8|t[0],32)}function O(t,e,r){function n(t){var e=I(t),r=t-e;return r<.5?e:r>.5?e+1:e%2?e+1:e}var o,i,a,c=(1<<e-1)-1;if(t!=t)i=(1<<e)-1,a=L(2,r-1),o=0;else if(t===1/0||t===-1/0)i=(1<<e)-1,a=0,o=t<0?1:0;else if(0===t)i=0,a=0,o=1/t==-1/0?1:0;else if(o=t<0,(t=k(t))>=L(2,1-c)){i=W(I(R(t)/x),1023);var u=t/L(2,i);u<1&&(i-=1,u*=2),u>=2&&(i+=1,u/=2);var l=L(2,r);i+=c,(a=n(u*l)-l)/l>=1&&(i+=1,a=0),i>2*c&&(i=(1<<e)-1,a=0)}else i=0,a=n(t/L(2,1-c-r));var f,p=[];for(f=r;f;f-=1)p.push(a%2?1:0),a=I(a/2);for(f=e;f;f-=1)p.push(i%2?1:0),i=I(i/2);p.push(o?1:0),p.reverse();for(var s=p.join(""),h=[];s.length;)h.unshift(parseInt(s.substring(0,8),2)),s=s.substring(8);return h}function S(t,e,r){var n,o,i,a,c,u,l,f,p=[];for(n=0;n<t.length;++n)for(i=t[n],o=8;o;o-=1)p.push(i%2?1:0),i>>=1;return p.reverse(),a=p.join(""),c=(1<<e-1)-1,u=parseInt(a.substring(0,1),2)?-1:1,l=parseInt(a.substring(1,1+e),2),f=parseInt(a.substring(1+e),2),l===(1<<e)-1?0!==f?NaN:u*(1/0):l>0?u*L(2,l-c)*(1+f/L(2,r)):0!==f?u*L(2,-(c-1))*(f/L(2,r)):u<0?-0:0}function E(t){return S(t,11,52)}function M(t){return O(t,11,52)}function P(t){return S(t,8,23)}function T(t){return O(t,8,23)}var A=void 0,N=1e5,x=Math.LN2,k=Math.abs,I=Math.floor,R=Math.log,F=Math.max,W=Math.min,L=Math.pow,C=Math.round;!function(){var t=Object.defineProperty,e=!function(){try{return Object.defineProperty({},"x",{})}catch(t){return!1}}();t&&!e||(Object.defineProperty=function(e,r,n){if(t)try{return t(e,r,n)}catch(t){}if(e!==Object(e))throw TypeError("Object.defineProperty called on non-object");return Object.prototype.__defineGetter__&&"get"in n&&Object.prototype.__defineGetter__.call(e,r,n.get),Object.prototype.__defineSetter__&&"set"in n&&Object.prototype.__defineSetter__.call(e,r,n.set),"value"in n&&(e[r]=n.value),e})}(),function(){function u(t){if((t=i(t))<0)throw RangeError("ArrayBuffer size is not a small enough positive integer.");Object.defineProperty(this,"byteLength",{value:t}),Object.defineProperty(this,"_bytes",{value:Array(t)});for(var e=0;e<t;e+=1)this._bytes[e]=0}function l(){if(!arguments.length||"object"!=typeof arguments[0])return function(t){if((t=i(t))<0)throw RangeError("length is not a small enough positive integer.");Object.defineProperty(this,"length",{value:t}),Object.defineProperty(this,"byteLength",{value:t*this.BYTES_PER_ELEMENT}),Object.defineProperty(this,"buffer",{value:new u(this.byteLength)}),Object.defineProperty(this,"byteOffset",{value:0})}.apply(this,arguments);if(arguments.length>=1&&"object"===e(arguments[0])&&arguments[0]instanceof l)return function(t){if(this.constructor!==t.constructor)throw TypeError();var e=t.length*this.BYTES_PER_ELEMENT;Object.defineProperty(this,"buffer",{value:new u(e)}),Object.defineProperty(this,"byteLength",{value:e}),Object.defineProperty(this,"byteOffset",{value:0}),Object.defineProperty(this,"length",{value:t.length});for(var r=0;r<this.length;r+=1)this._setter(r,t._getter(r))}.apply(this,arguments);if(arguments.length>=1&&"object"===e(arguments[0])&&!(arguments[0]instanceof l)&&!(arguments[0]instanceof u||"ArrayBuffer"===r(arguments[0])))return function(t){var e=t.length*this.BYTES_PER_ELEMENT;Object.defineProperty(this,"buffer",{value:new u(e)}),Object.defineProperty(this,"byteLength",{value:e}),Object.defineProperty(this,"byteOffset",{value:0}),Object.defineProperty(this,"length",{value:t.length});for(var r=0;r<this.length;r+=1){var n=t[r];this._setter(r,Number(n))}}.apply(this,arguments);if(arguments.length>=1&&"object"===e(arguments[0])&&(arguments[0]instanceof u||"ArrayBuffer"===r(arguments[0])))return function(t,e,r){if((e=a(e))>t.byteLength)throw RangeError("byteOffset out of range");if(e%this.BYTES_PER_ELEMENT)throw RangeError("buffer length minus the byteOffset is not a multiple of the element size.");if(r===A){var n=t.byteLength-e;if(n%this.BYTES_PER_ELEMENT)throw RangeError("length of buffer minus byteOffset not a multiple of the element size");r=n/this.BYTES_PER_ELEMENT}else n=(r=a(r))*this.BYTES_PER_ELEMENT;if(e+n>t.byteLength)throw RangeError("byteOffset and length reference an area beyond the end of the buffer");Object.defineProperty(this,"buffer",{value:t}),Object.defineProperty(this,"byteLength",{value:n}),Object.defineProperty(this,"byteOffset",{value:e}),Object.defineProperty(this,"length",{value:r})}.apply(this,arguments);throw TypeError()}function O(t,e,r){var n=function(){Object.defineProperty(this,"constructor",{value:n}),l.apply(this,arguments),c(this)};"__proto__"in n?n.__proto__=l:(n.from=l.from,n.of=l.of),n.BYTES_PER_ELEMENT=t;var o=function(){};return o.prototype=S,n.prototype=new o,Object.defineProperty(n.prototype,"BYTES_PER_ELEMENT",{value:t}),Object.defineProperty(n.prototype,"_pack",{value:e}),Object.defineProperty(n.prototype,"_unpack",{value:r}),n}t.ArrayBuffer=t.ArrayBuffer||u,Object.defineProperty(l,"from",{value:function(t){return new this(t)}}),Object.defineProperty(l,"of",{value:function(){return new this(arguments)}});var S={};l.prototype=S,Object.defineProperty(l.prototype,"_getter",{value:function(t){if(arguments.length<1)throw SyntaxError("Not enough arguments");if((t=a(t))>=this.length)return A;var e,r,n=[];for(e=0,r=this.byteOffset+t*this.BYTES_PER_ELEMENT;e<this.BYTES_PER_ELEMENT;e+=1,r+=1)n.push(this.buffer._bytes[r]);return this._unpack(n)}}),Object.defineProperty(l.prototype,"get",{value:l.prototype._getter}),Object.defineProperty(l.prototype,"_setter",{value:function(t,e){if(arguments.length<2)throw SyntaxError("Not enough arguments");if(!((t=a(t))>=this.length)){var r,n,o=this._pack(e);for(r=0,n=this.byteOffset+t*this.BYTES_PER_ELEMENT;r<this.BYTES_PER_ELEMENT;r+=1,n+=1)this.buffer._bytes[n]=o[r]}}}),Object.defineProperty(l.prototype,"constructor",{value:l}),Object.defineProperty(l.prototype,"copyWithin",{value:function(t,e){var r=arguments[2],n=o(this),c=a(n.length);c=F(c,0);var u,l=i(t);u=l<0?F(c+l,0):W(l,c);var f,p,s,h=i(e);f=h<0?F(c+h,0):W(h,c),s=(p=r===A?c:i(r))<0?F(c+p,0):W(p,c);var y,b=W(s-f,c-u);for(f<u&&u<f+b?(y=-1,f=f+b-1,u=u+b-1):y=1;b>0;)n._setter(u,n._getter(f)),f+=y,u+=y,b-=1;return n}}),Object.defineProperty(l.prototype,"every",{value:function(t){if(this===A||null===this)throw TypeError();var e=Object(this),r=a(e.length);if(!n(t))throw TypeError();for(var o=arguments[1],i=0;i<r;i++)if(!t.call(o,e._getter(i),i,e))return!1;return!0}}),Object.defineProperty(l.prototype,"fill",{value:function(t){var e=arguments[1],r=arguments[2],n=o(this),c=a(n.length);c=F(c,0);var u,l,f,p=i(e);for(u=p<0?F(c+p,0):W(p,c),f=(l=r===A?c:i(r))<0?F(c+l,0):W(l,c);u<f;)n._setter(u,t),u+=1;return n}}),Object.defineProperty(l.prototype,"filter",{value:function(t){if(this===A||null===this)throw TypeError();var e=Object(this),r=a(e.length);if(!n(t))throw TypeError();for(var o=[],i=arguments[1],c=0;c<r;c++){var u=e._getter(c);t.call(i,u,c,e)&&o.push(u)}return new this.constructor(o)}}),Object.defineProperty(l.prototype,"find",{value:function(t){var e=o(this),r=a(e.length);if(!n(t))throw TypeError();for(var i=arguments.length>1?arguments[1]:A,c=0;c<r;){var u=e._getter(c),l=t.call(i,u,c,e);if(Boolean(l))return u;++c}return A}}),Object.defineProperty(l.prototype,"findIndex",{value:function(t){var e=o(this),r=a(e.length);if(!n(t))throw TypeError();for(var i=arguments.length>1?arguments[1]:A,c=0;c<r;){var u=e._getter(c),l=t.call(i,u,c,e);if(Boolean(l))return c;++c}return-1}}),Object.defineProperty(l.prototype,"forEach",{value:function(t){if(this===A||null===this)throw TypeError();var e=Object(this),r=a(e.length);if(!n(t))throw TypeError();for(var o=arguments[1],i=0;i<r;i++)t.call(o,e._getter(i),i,e)}}),Object.defineProperty(l.prototype,"indexOf",{value:function(t){if(this===A||null===this)throw TypeError();var e=Object(this),r=a(e.length);if(0===r)return-1;var n=0;if(arguments.length>0&&((n=Number(arguments[1]))!=n?n=0:0!==n&&n!==1/0&&n!==-1/0&&(n=(n>0||-1)*I(k(n)))),n>=r)return-1;for(var o=n>=0?n:F(r-k(n),0);o<r;o++)if(e._getter(o)===t)return o;return-1}}),Object.defineProperty(l.prototype,"join",{value:function(t){if(this===A||null===this)throw TypeError();for(var e=Object(this),r=a(e.length),n=Array(r),o=0;o<r;++o)n[o]=e._getter(o);return n.join(t===A?",":t)}}),Object.defineProperty(l.prototype,"lastIndexOf",{value:function(t){if(this===A||null===this)throw TypeError();var e=Object(this),r=a(e.length);if(0===r)return-1;var n=r;arguments.length>1&&((n=Number(arguments[1]))!=n?n=0:0!==n&&n!==1/0&&n!==-1/0&&(n=(n>0||-1)*I(k(n))));for(var o=n>=0?W(n,r-1):r-k(n);o>=0;o--)if(e._getter(o)===t)return o;return-1}}),Object.defineProperty(l.prototype,"map",{value:function(t){if(this===A||null===this)throw TypeError();var e=Object(this),r=a(e.length);if(!n(t))throw TypeError();var o=[];o.length=r;for(var i=arguments[1],c=0;c<r;c++)o[c]=t.call(i,e._getter(c),c,e);return new this.constructor(o)}}),Object.defineProperty(l.prototype,"reduce",{value:function(t){if(this===A||null===this)throw TypeError();var e=Object(this),r=a(e.length);if(!n(t))throw TypeError();if(0===r&&1===arguments.length)throw TypeError();var o,i=0;for(o=arguments.length>=2?arguments[1]:e._getter(i++);i<r;)o=t.call(A,o,e._getter(i),i,e),i++;return o}}),Object.defineProperty(l.prototype,"reduceRight",{value:function(t){if(this===A||null===this)throw TypeError();var e=Object(this),r=a(e.length);if(!n(t))throw TypeError();if(0===r&&1===arguments.length)throw TypeError();var o,i=r-1;for(o=arguments.length>=2?arguments[1]:e._getter(i--);i>=0;)o=t.call(A,o,e._getter(i),i,e),i--;return o}}),Object.defineProperty(l.prototype,"reverse",{value:function(){if(this===A||null===this)throw TypeError();for(var t=Object(this),e=a(t.length),r=I(e/2),n=0,o=e-1;n<r;++n,--o){var i=t._getter(n);t._setter(n,t._getter(o)),t._setter(o,i)}return t}}),Object.defineProperty(l.prototype,"set",{value:function(t,e){if(arguments.length<1)throw SyntaxError("Not enough arguments");var r,n,o,i,c,u,l,f,p,s;if("object"==typeof arguments[0]&&arguments[0].constructor===this.constructor){if(r=arguments[0],(o=a(arguments[1]))+r.length>this.length)throw RangeError("Offset plus length of array is out of range");if(f=this.byteOffset+o*this.BYTES_PER_ELEMENT,p=r.length*this.BYTES_PER_ELEMENT,r.buffer===this.buffer){for(s=[],c=0,u=r.byteOffset;c<p;c+=1,u+=1)s[c]=r.buffer._bytes[u];for(c=0,l=f;c<p;c+=1,l+=1)this.buffer._bytes[l]=s[c]}else for(c=0,u=r.byteOffset,l=f;c<p;c+=1,u+=1,l+=1)this.buffer._bytes[l]=r.buffer._bytes[u]}else{if("object"!=typeof arguments[0]||void 0===arguments[0].length)throw TypeError("Unexpected argument type(s)");if(i=a((n=arguments[0]).length),(o=a(arguments[1]))+i>this.length)throw RangeError("Offset plus length of array is out of range");for(c=0;c<i;c+=1)u=n[c],this._setter(o+c,Number(u))}}}),Object.defineProperty(l.prototype,"slice",{value:function(t,e){for(var r=o(this),n=a(r.length),c=i(t),u=c<0?F(n+c,0):W(c,n),l=e===A?n:i(e),f=l<0?F(n+l,0):W(l,n),p=f-u,s=new(0,r.constructor)(p),h=0;u<f;){var y=r._getter(u);s._setter(h,y),++u,++h}return s}}),Object.defineProperty(l.prototype,"some",{value:function(t){if(this===A||null===this)throw TypeError();var e=Object(this),r=a(e.length);if(!n(t))throw TypeError();for(var o=arguments[1],i=0;i<r;i++)if(t.call(o,e._getter(i),i,e))return!0;return!1}}),Object.defineProperty(l.prototype,"sort",{value:function(t){if(this===A||null===this)throw TypeError();for(var e=Object(this),r=a(e.length),n=Array(r),o=0;o<r;++o)n[o]=e._getter(o);for(n.sort(function(e,r){return e!=e&&r!=r?0:e!=e?1:r!=r?-1:t!==A?t(e,r):e<r?-1:e>r?1:0}),o=0;o<r;++o)e._setter(o,n[o]);return e}}),Object.defineProperty(l.prototype,"subarray",{value:function(t,e){function r(t,e,r){return t<e?e:t>r?r:t}t=i(t),e=i(e),arguments.length<1&&(t=0),arguments.length<2&&(e=this.length),t<0&&(t=this.length+t),e<0&&(e=this.length+e),t=r(t,0,this.length);var n=(e=r(e,0,this.length))-t;return n<0&&(n=0),new this.constructor(this.buffer,this.byteOffset+t*this.BYTES_PER_ELEMENT,n)}});var N=O(1,f,p),x=O(1,s,h),R=O(1,y,h),L=O(2,b,v),C=O(2,g,_),z=O(4,d,w),B=O(4,j,m),D=O(4,T,P),U=O(8,M,E);t.Int8Array=t.Int8Array||N,t.Uint8Array=t.Uint8Array||x,t.Uint8ClampedArray=t.Uint8ClampedArray||R,t.Int16Array=t.Int16Array||L,t.Uint16Array=t.Uint16Array||C,t.Int32Array=t.Int32Array||z,t.Uint32Array=t.Uint32Array||B,t.Float32Array=t.Float32Array||D,t.Float64Array=t.Float64Array||U}(),function(){function e(t,e){return n(t.get)?t.get(e):t[e]}function o(t,e,n){if(!(t instanceof ArrayBuffer||"ArrayBuffer"===r(t)))throw TypeError();if((e=a(e))>t.byteLength)throw RangeError("byteOffset out of range");if(e+(n=n===A?t.byteLength-e:a(n))>t.byteLength)throw RangeError("byteOffset and length reference an area beyond the end of the buffer");Object.defineProperty(this,"buffer",{value:t}),Object.defineProperty(this,"byteLength",{value:n}),Object.defineProperty(this,"byteOffset",{value:e})}function i(t){return function(r,n){if((r=a(r))+t.BYTES_PER_ELEMENT>this.byteLength)throw RangeError("Array index out of range");r+=this.byteOffset;for(var o=new Uint8Array(this.buffer,r,t.BYTES_PER_ELEMENT),i=[],c=0;c<t.BYTES_PER_ELEMENT;c+=1)i.push(e(o,c));return Boolean(n)===Boolean(u)&&i.reverse(),e(new t(new Uint8Array(i).buffer),0)}}function c(t){return function(r,n,o){if((r=a(r))+t.BYTES_PER_ELEMENT>this.byteLength)throw RangeError("Array index out of range");var i,c=new t([n]),l=new Uint8Array(c.buffer),f=[];for(i=0;i<t.BYTES_PER_ELEMENT;i+=1)f.push(e(l,i));Boolean(o)===Boolean(u)&&f.reverse(),new Uint8Array(this.buffer,r,t.BYTES_PER_ELEMENT).set(f)}}var u=function(){var t=new Uint16Array([4660]);return 18===e(new Uint8Array(t.buffer),0)}();Object.defineProperty(o.prototype,"getUint8",{value:i(Uint8Array)}),Object.defineProperty(o.prototype,"getInt8",{value:i(Int8Array)}),Object.defineProperty(o.prototype,"getUint16",{value:i(Uint16Array)}),Object.defineProperty(o.prototype,"getInt16",{value:i(Int16Array)}),Object.defineProperty(o.prototype,"getUint32",{value:i(Uint32Array)}),Object.defineProperty(o.prototype,"getInt32",{value:i(Int32Array)}),Object.defineProperty(o.prototype,"getFloat32",{value:i(Float32Array)}),Object.defineProperty(o.prototype,"getFloat64",{value:i(Float64Array)}),Object.defineProperty(o.prototype,"setUint8",{value:c(Uint8Array)}),Object.defineProperty(o.prototype,"setInt8",{value:c(Int8Array)}),Object.defineProperty(o.prototype,"setUint16",{value:c(Uint16Array)}),Object.defineProperty(o.prototype,"setInt16",{value:c(Int16Array)}),Object.defineProperty(o.prototype,"setUint32",{value:c(Uint32Array)}),Object.defineProperty(o.prototype,"setInt32",{value:c(Int32Array)}),Object.defineProperty(o.prototype,"setFloat32",{value:c(Float32Array)}),Object.defineProperty(o.prototype,"setFloat64",{value:c(Float64Array)}),t.DataView=t.DataView||o}()}(self),"Date"in this&&"now"in this.Date&&"getTime"in this.Date.prototype||(Date.now=function(){return(new Date).getTime()}),"Date"in this&&"toISOString"in Date.prototype||(Date.prototype.toISOString=function(){function t(t,e){return"0000".substr(0,e-(t=""+t).length)+t}var e=this;return e.getUTCFullYear()+"-"+t(e.getUTCMonth()+1,2)+"-"+t(e.getUTCDate(),2)+"T"+t(e.getUTCHours(),2)+":"+t(e.getUTCMinutes(),2)+":"+t(e.getUTCSeconds(),2)+"."+t(e.getUTCMilliseconds(),3)+"Z"}),"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(T=Object.defineProperty,A=Object.prototype.hasOwnProperty("__defineGetter__"),N="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,e,r){if(T&&(t===window||t===document||t===Element.prototype||t instanceof Element))return T(t,e,r);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(r instanceof Object))throw new TypeError("Property description must be an object");var n=String(e),o="value"in r||"writable"in r,i="get"in r&&typeof r.get,a="set"in r&&typeof r.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!A)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(N);Object.__defineGetter__.call(t,n,r.get)}else t[n]=r.value;if(a){if("function"!==a)throw new TypeError("Setter must be a function");if(!A)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(N);Object.__defineSetter__.call(t,n,r.set)}return"value"in r&&(t[n]=r.value),t}),"isArray"in Array||R(Array,"isArray",function(t){return i(t)}),"copyWithin"in Array.prototype&&function(){try{var t=function(){};t.prototype[0]="foo";var e=new t;e[1]=1,e[2]=2,e.length=3;var r=Array.prototype.copyWithin.call(e,1,0);return!(!r[0]||Object.prototype.hasOwnProperty.call(r,"0")||!Object.prototype.hasOwnProperty.call(r,"1")||"foo"!==r[0]||"foo"!==r[1]||1!==r[2]||3!==r.length)}catch(t){return!1}}()||R(Array.prototype,"copyWithin",function(e,r){"use strict";var n=arguments[2];if(null===this||this===t)throw new TypeError("Cannot call method on "+this);var i=Object(this),a=f(i.length);a<=0&&(a=0),a=a===1/0?Math.pow(2,53)-1:Math.min(a,Math.pow(2,53)-1),a=Math.max(a,0);var c,u=f(e);c=u<0?Math.max(a+u,0):Math.min(u,a);var l,p,s,h=f(r);l=h<0?Math.max(a+h,0):Math.min(h,a),s=(p=n===t?a:f(n))<0?Math.max(a+p,0):Math.min(p,a);var y,b=Math.min(s-l,a-c);for(l<c&&c<l+b?(y=-1,l=l+b-1,c=c+b-1):y=1;b>0;){var v=String(l),g=String(c);if(o(i,v)){var _=i[v];i[g]=_}else delete i[g];l+=y,c+=y,b-=1}return i}),"every"in Array.prototype||R(Array.prototype,"every",function(e){var i=h(this),c=p(n(i,"length"));if(!1===a(e))throw new TypeError(e+" is not a function");for(var u=arguments.length>1?arguments[1]:t,f=0;f<c;){var s=M(f);if(o(i,s))if(!1===l(r(e,u,[n(i,s),f,i])))return!1;f=f+1}return!0}),"fill"in Array.prototype||R(Array.prototype,"fill",function(e){for(var r=arguments[1],o=arguments[2],i=h(this),a=p(n(i,"length")),c=f(r),u=c<0?Math.max(a+c,0):Math.min(c,a),l=o===t?a:f(o),s=l<0?Math.max(a+l,0):Math.min(l,a);u<s;)i[M(u)]=e,u+=1;return i}),"find"in Array.prototype||R(Array.prototype,"find",function(e){var o=h(this),i=p(n(o,"length"));if(!1===a(e))throw new TypeError(e+" is not a function");for(var c=arguments.length>1?arguments[1]:t,u=0;u<i;){var f=n(o,M(u));if(l(r(e,c,[f,u,o])))return f;u=u+1}return t}),"findIndex"in Array.prototype||R(Array.prototype,"findIndex",function(e){var o=h(this),i=p(n(o,"length"));if(!1===a(e))throw new TypeError(e+" is not a function");for(var c=arguments.length>1?arguments[1]:t,u=0;u<i;){if(l(r(e,c,[n(o,M(u)),u,o])))return u;u+=1}return-1}),"forEach"in Array.prototype||R(Array.prototype,"forEach",function(e){var i=h(this),c=i instanceof String?i.split(""):i,u=p(n(i,"length"));if(!1===a(e))throw new TypeError(e+" is not a function");for(var l=arguments.length>1?arguments[1]:t,f=0;f<u;){var s=M(f);if(o(c,s))r(e,l,[n(c,s),f,i]);f+=1}return t}),"includes"in Array.prototype||R(Array.prototype,"includes",function(t){"use strict";var e=h(this),r=p(n(e,"length"));if(0===r)return!1;var o=f(arguments[1]);if(o>=0)var i=o;else(i=r+o)<0&&(i=0);for(;i<r;){if(S(t,n(e,M(i))))return!0;i+=1}return!1}),"indexOf"in Array.prototype||R(Array.prototype,"indexOf",function(t){var e=h(this),r=p(n(e,"length"));if(0===r)return-1;var i=f(arguments[1]);if(i>=r)return-1;if(i>=0)var a=-0===i?0:i;else(a=r+i)<0&&(a=0);for(;a<r;){if(o(e,M(a))&&t===n(e,M(a)))return a;a+=1}return-1}),"lastIndexOf"in Array.prototype||R(Array.prototype,"lastIndexOf",function(t){var e=h(this),r=p(n(e,"length"));if(0===r)return-1;var i=arguments.length>1?f(arguments[1]):r-1;if(i>=0)var a=-0===i?0:Math.min(i,r-1);else a=r+i;for(;a>=0;){if(o(e,M(a))&&t===n(e,M(a)))return a;a-=1}return-1}),"reduce"in Array.prototype||R(Array.prototype,"reduce",function(e){var i=h(this),c=i instanceof String?i.split(""):i,u=p(n(c,"length"));if(!1===a(e))throw new TypeError(e+" is not a function");var l=arguments.length>1?arguments[1]:t;if(0===u&&arguments.length<2)throw new TypeError("Reduce of empty array with no initial value");var f=0,s=t;if(arguments.length>1)s=l;else{for(var y=!1;!1===y&&f<u;){if(y=o(c,b=M(f)))s=n(c,b);f+=1}if(!1===y)throw new TypeError("Reduce of empty array with no initial value")}for(;f<u;){var b;if(y=o(c,b=M(f))){var v=n(c,b);s=r(e,t,[s,v,f,i])}f+=1}return s}),"reduceRight"in Array.prototype||R(Array.prototype,"reduceRight",function(e){var i=h(this),c=i instanceof String?i.split(""):i,u=p(n(c,"length"));if(!1===a(e))throw new TypeError(e+" is not a function");var l=arguments.length>1?arguments[1]:t;if(0===u&&arguments.length<2)throw new TypeError("Reduce of empty array with no initial value");var f=u-1,s=t;if(arguments.length>1)s=l;else{for(var y=!1;!1===y&&f>=0;){(y=o(c,b=M(f)))&&(s=n(c,b)),f-=1}if(!1===y)throw new TypeError("Reduce of empty array with no initial value")}for(;f>=0;){var b;if(y=o(c,b=M(f))){var v=n(c,b);s=r(e,t,[s,v,f,i])}f-=1}return s}),"some"in Array.prototype||R(Array.prototype,"some",function(e){var i=h(this),c=p(n(i,"length"));if(!1===a(e))throw new TypeError(e+" is not a function");for(var u=arguments.length>1?arguments[1]:t,f=0;f<c;){var s=M(f);if(o(i,s))if(l(r(e,u,[n(i,s),f,i])))return!0;f+=1}return!1}),"bind"in Function.prototype||R(Function.prototype,"bind",function(t){var e=Array,r=Object,n=e.prototype,o=function(){},i=n.slice,c=n.concat,u=n.push,l=Math.max,f=this;if(!a(f))throw new TypeError("Function.prototype.bind called on incompatible "+f);for(var p,s=i.call(arguments,1),h=l(0,f.length-s.length),y=[],b=0;b<h;b++)u.call(y,"$"+b);return p=Function("binder","return function ("+y.join(",")+"){ return binder.apply(this, arguments); }")(function(){if(this instanceof p){var e=f.apply(this,c.call(s,i.call(arguments)));return r(e)===e?e:this}return f.apply(t,c.call(s,i.call(arguments)))}),f.prototype&&(o.prototype=f.prototype,p.prototype=new o,o.prototype=null),p}),"acosh"in Math||R(Math,"acosh",function(t){return isNaN(t)?NaN:t<1?NaN:1===t?0:t===1/0?1/0:Math.log(t+Math.sqrt(t*t-1))}),"asinh"in Math||R(Math,"asinh",function(t){return isNaN(t)?NaN:0===t&&1/t==1/0?0:0===t&&1/t==-1/0?-0:t===1/0?1/0:t===-1/0?-1/0:Math.log(t+Math.sqrt(t*t+1))}),"atanh"in Math||R(Math,"atanh",function(t){return isNaN(t)?NaN:t<-1?NaN:t>1?NaN:-1===t?-1/0:1===t?1/0:0===t&&1/t==1/0?0:0===t&&1/t==-1/0?-0:Math.log((1+t)/(1-t))/2}),"cbrt"in Math||R(Math,"cbrt",function(t){if(isNaN(t))return NaN;if(0===t&&1/t==1/0)return 0;if(0===t&&1/t==-1/0)return-0;if(t===1/0)return 1/0;if(t===-1/0)return-1/0;var e=Math.pow(Math.abs(t),1/3);return t<0?-e:e}),"clz32"in Math||R(Math,"clz32",function(t){var e=v(t);return e?32-e.toString(2).length:32}),"cosh"in Math||R(Math,"cosh",function(t){return isNaN(t)?NaN:0===t&&1/t==1/0?1:0===t&&1/t==-1/0?1:t===1/0?1/0:t===-1/0?1/0:(t=Math.abs(t))>709?(e=Math.exp(.5*t))/2*e:((e=Math.exp(t))+1/e)/2;var e}),"expm1"in Math||R(Math,"expm1",function(t){return isNaN(t)?NaN:0===t&&1/t==1/0?0:0===t&&1/t==-1/0?-0:t===1/0?1/0:t===-1/0?-1:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}),"fround"in Math||R(Math,"fround",function(t){return isNaN(t)?NaN:1/t==1/0||1/t==-1/0||t===1/0||t===-1/0?t:new Float32Array([t])[0]}),"hypot"in Math||R(Math,"hypot",function(t,e){if(0===arguments.length)return 0;for(var r=0,n=0,o=0;o<arguments.length;++o){if(arguments[o]===1/0)return 1/0;if(arguments[o]===-1/0)return 1/0;var i=Math.abs(Number(arguments[o]));i>n&&(r*=Math.pow(n/i,2),n=i),0===i&&0===n||(r+=Math.pow(i/n,2))}return n*Math.sqrt(r)}),"imul"in Math||R(Math,"imul",function(t,e){var r=v(t),n=v(e),o=65535&r,i=65535&n;return o*i+((r>>>16&65535)*i+o*(n>>>16&65535)<<16>>>0)|0}),"log10"in Math||R(Math,"log10",function(t){return Math.log(t)/Math.LN10}),"log1p"in Math||R(Math,"log1p",function(t){if(-1<(t=Number(t))&&t<1){for(var e=t,r=2;r<=300;r++)e+=Math.pow(-1,r-1)*Math.pow(t,r)/r;return e}return Math.log(1+t)}),"log2"in Math||R(Math,"log2",function(t){return Math.log(t)/Math.LN2}),"sign"in Math||R(Math,"sign",function(t){t=Number(t);return isNaN(t)?NaN:1/t==-1/0?-0:1/t==1/0?0:t<0?-1:t>0?1:void 0}),"sinh"in Math||R(Math,"sinh",function(t){var e=t<0?-1:1,r=Math.abs(t);if(r<22){if(r<Math.pow(2,-28))return t;var n=Math.exp(r)-1;return r<1?e*(2*n-n*n/(n+1))/2:e*(n+n/(n+1))/2}if(r<709.7822265625)return e*Math.exp(r)/2;var o=Math.exp(.5*r);return(n=e*o/2)*o}),"tanh"in Math||R(Math,"tanh",function(t){var e;return t===1/0?1:t===-1/0?-1:((e=Math.exp(2*t))-1)/(e+1)}),"trunc"in Math||R(Math,"trunc",function(t){return t<0?Math.ceil(t):Math.floor(t)}),"isFinite"in Number||function(){var t=this;R(Number,"isFinite",function(e){return"number"===g(e)&&t.isFinite(e)})}(),"isInteger"in Number||R(Number,"isInteger",function(t){return"number"===g(t)&&!isNaN(t)&&t!==1/0&&t!==-1/0&&f(t)===t}),"isNaN"in Number||function(){var t=this;R(Number,"isNaN",function(e){return"number"===g(e)&&!!t.isNaN(e)})}(),"isSafeInteger"in Number||R(Number,"isSafeInteger",function(t){if("number"!==g(t))return!1;if(isNaN(t)||t===1/0||t===-1/0)return!1;var e=f(t);return e===t&&Math.abs(e)<=Math.pow(2,53)-1}),"parseFloat"in Number||R(Number,"parseFloat",parseFloat),"parseInt"in Number||R(Number,"parseInt",parseInt),"name"in Function.prototype&&"x"===function(){}.name||function(){var t=/^\s*function\s+([^\(\s]*)\s*/,e=Function,r=e.prototype,n=r.constructor,o=function(o){var i,a;return o===e||o===n?a="Function":o!==r&&(a=(i=(""+o).match(t))&&i[1]),a||""};Object.defineProperty(r,"name",{get:function(){var t=this,e=o(t);return t!==r&&Object.defineProperty(t,"name",{value:e,configurable:!0}),e},configurable:!0})}(),"EPSILON"in Number||Object.defineProperty(Number,"EPSILON",{enumerable:!1,configurable:!1,writable:!1,value:Math.pow(2,-52)}),"MAX_SAFE_INTEGER"in Number||Object.defineProperty(Number,"MAX_SAFE_INTEGER",{enumerable:!1,configurable:!1,writable:!1,value:Math.pow(2,53)-1}),"MIN_SAFE_INTEGER"in Number||Object.defineProperty(Number,"MIN_SAFE_INTEGER",{enumerable:!1,configurable:!1,writable:!1,value:-(Math.pow(2,53)-1)}),"freeze"in Object||R(Object,"freeze",function(t){return t}),"getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{var t={test:0};return 0===Object.getOwnPropertyDescriptor(t,"test").value}catch(t){return!1}}()||function(){function t(t){try{return t.sentinel=0,0===Object.getOwnPropertyDescriptor(t,"sentinel").value}catch(t){}}var e,r,n,o=Function.prototype.call,i=Object.prototype,a=o.bind(i.hasOwnProperty);if((n=a(i,"__defineGetter__"))&&(e=o.bind(i.__lookupGetter__),r=o.bind(i.__lookupSetter__)),Object.defineProperty){var c=t({});if("undefined"!=typeof document&&!t(document.createElement("div"))||!c)var u=Object.getOwnPropertyDescriptor}Object.getOwnPropertyDescriptor&&!u||R(Object,"getOwnPropertyDescriptor",function(t,o){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+t);if(u)try{return u.call(Object,t,o)}catch(t){}if(a(t,o)){var c={enumerable:!0,configurable:!0};if(n){var l=t.__proto__;t.__proto__=i;var f=e(t,o),p=r(t,o);if(t.__proto__=l,f||p)return f&&(c.get=f),p&&(c.set=p),c}return c.value=t[o],c.writable=!0,c}})}(),!("getOwnPropertyNames"in Object)){var F={}.toString,W="".split;R(Object,"getOwnPropertyNames",function(t){var e,r=[],n=["length","name","arguments","caller","prototype","observe","unobserve"];if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(e in t="[object String]"==F.call(t)?W.call(t,""):Object(t))Object.prototype.hasOwnProperty.call(t,e)&&r.push(e);for(var o=0,i=n.length;o<i;o++)n[o]in t&&r.push(n[o]);return r})}function L(t,e){var r=arguments[2]||{},o=function(t,e){var r=n(t,"prototype");return"object"!==g(r)&&(r=e),r}(t,e),i=Object.create(o);for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&Object.defineProperty(i,a,{configurable:!0,enumerable:!1,writable:!0,value:r[a]});return i}function C(t){var e=arguments.length>2?arguments[2]:t,n=arguments.length>1?arguments[1]:[];if(!_(t))throw new TypeError("F must be a constructor.");if(!_(e))throw new TypeError("newTarget must be a constructor.");return e===t?new(Function.prototype.bind.apply(t,[null].concat(n))):r(t,L(e,Object.prototype),n)}function z(r,o){if(1/o==-1/0&&(o=0),!1===i(r))return e(o);var a=n(r,"constructor");if("object"===g(a)&&null===(a="Symbol"in this&&"species"in this.Symbol?n(a,this.Symbol.species):t)&&(a=t),a===t)return e(o);if(!_(a))throw new TypeError("C must be a constructor");return C(a,[o])}function B(t){var e=r(arguments.length>1?arguments[1]:b(t,Symbol.iterator),t);if("object"!==g(e))throw new TypeError("bad iterator");var n=y(e,"next"),o=Object.create(null);return o["[[Iterator]]"]=e,o["[[NextMethod]]"]=n,o["[[Done]]"]=!1,o}"getPrototypeOf"in Object||R(Object,"getPrototypeOf",function(t){if(t!==Object(t))throw new TypeError("Object.getPrototypeOf called on non-object");var e=t.__proto__;return e||null===e?e:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Object.prototype:null}),"is"in Object||R(Object,"is",function(t,e){return O(t,e)}),"keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()||R(Object,"keys",function(){"use strict";var e=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,o=!n.call({toString:null},"toString"),i=n.call(function(){},"prototype"),a=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=function(t){var e=t.constructor;return e&&e.prototype===t},u={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},l=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!u["$"+t]&&e.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{c(window[t])}catch(t){return!0}}catch(t){return!0}return!1}(),f=function(t){if("undefined"==typeof window||!l)return c(t);try{return c(t)}catch(t){return!1}};return function(n){var c="[object Function]"===r.call(n),u=function(t){var e=r.call(t),n="[object Arguments]"===e;return n||(n="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===r.call(t.callee)),n}(n),l="[object String]"===r.call(n),p=[];if(n===t||null===n)throw new TypeError("Cannot convert undefined or null to object");var s=i&&c;if(l&&n.length>0&&!e.call(n,0))for(var h=0;h<n.length;++h)p.push(String(h));if(u&&n.length>0)for(var y=0;y<n.length;++y)p.push(String(y));else for(var b in n)s&&"prototype"===b||!e.call(n,b)||p.push(String(b));if(o)for(var v=f(n),g=0;g<a.length;++g)v&&"constructor"===a[g]||!e.call(n,a[g])||p.push(a[g]);return p}}()),"assign"in Object||R(Object,"assign",function(e,r){var o=h(e);if(1===arguments.length)return o;var i,a,c,u,l=Array.prototype.slice.call(arguments,1);for(i=0;i<l.length;i++){var f=l[i];for(f===t||null===f?c=[]:(u=h(f),c=Object.keys(u)),a=0;a<c.length;a++){var p,s=c[a];try{var y=Object.getOwnPropertyDescriptor(u,s);p=y!==t&&!0===y.enumerable}catch(t){p=Object.prototype.propertyIsEnumerable.call(u,s)}if(p){var b=n(u,s);o[s]=b}}}return o}),"defineProperties"in Object||R(Object,"defineProperties",function(e,r){if("object"!==g(e))throw new TypeError("Object.defineProperties called on non-object");for(var o=h(r),i=Object.keys(o),a=[],c=0;c<i.length;c++){var u=i[c],l=Object.getOwnPropertyDescriptor(o,u);if(l!==t&&l.enumerable){var f=n(o,u);a.push([u,f])}}for(c=0;c<a.length;c++){var p=a[c][0];f=a[c][1];Object.defineProperty(e,p,f)}return e}),"create"in Object||R(Object,"create",function(t,e){if("object"!==g(t)&&"null"!==g(t))throw new TypeError("Object prototype may only be an Object or null");var r=new Function("e","function Object() {}Object.prototype=e;return new Object")(t);return r.constructor.prototype=t,1 in arguments?Object.defineProperties(r,e):r}),"filter"in Array.prototype||R(Array.prototype,"filter",function(e){var i=h(this),c=p(n(i,"length"));if(!1===a(e))throw new TypeError(e+" is not a function");for(var u=arguments.length>1?arguments[1]:t,f=z(i,0),s=0,y=0;s<c;){var b=M(s);if(o(i,b)){var v=n(i,b);l(r(e,u,[v,s,i]))&&(k(f,M(y),v),y+=1)}s+=1}return f}),"map"in Array.prototype||R(Array.prototype,"map",function(e){var i=h(this),c=p(n(i,"length"));if(!1===a(e))throw new TypeError(e+" is not a function");for(var u=arguments.length>1?arguments[1]:t,l=z(i,c),f=0;f<c;){var s=M(f);if(o(i,s))k(l,s,r(e,u,[n(i,s),f,i]));f+=1}return l}),"of"in Array||R(Array,"of",function(){var t=arguments.length,r=arguments;if(_(this))var n=C(this,[t]);else n=e(t);for(var o=0;o<t;){var i=r[o];k(n,M(o),i);o=o+1}return n.length=t,n}),"seal"in Object&&function(){try{return Object.seal("1"),!0}catch(t){return!1}}||function(t){R(Object,"seal",function(e){return"object"===g(e)?e:t?t(e):e})}(Object.seal),function(){if(!Object.setPrototypeOf){var t,e,r=Object.getOwnPropertyNames,n=Object.getOwnPropertyDescriptor,o=Object.create,i=Object.defineProperty,a=Object.getPrototypeOf,c=Object.prototype,u=function(t,e){return function(t,e){return r(e).forEach(function(r){i(t,r,n(e,r))}),t}(o(e),t)};try{(t=n(c,"__proto__").set).call({},null),e=function(e,r){return t.call(e,r),e}}catch(r){(t={__proto__:null})instanceof Object?e=u:(t.__proto__=c,e=t instanceof Object?function(t,e){return t.__proto__=e,t}:function(t,e){return a(t)?(t.__proto__=e,t):u(t,e)})}R(Object,"setPrototypeOf",e)}}(),"Promise"in this||function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=100)}({100:function(t,e,r){(function(t){var e=r(5);try{t.Promise=e,window.Promise=e}catch(t){}}).call(e,r(2))},2:function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},5:function(e,r,n){(function(r){!function(){"use strict";function n(){return et[z][D]||U}function o(t){return t&&"object"==typeof t}function i(t){return"function"==typeof t}function a(t,e){return t instanceof e}function c(t,e,r){if(!e(t))throw s(r)}function u(){try{return E.apply(M,arguments)}catch(t){return J.e=t,J}}function l(t,e){return E=t,M=e,u}function f(t,e){function r(){for(var r=0;r<o;)e(n[r],n[r+1]),n[r++]=S,n[r++]=S;o=0,n.length>t&&(n.length=t)}var n=R(t),o=0;return function(t,e){n[o++]=t,n[o++]=e,2===o&&et.nextTick(r)}}function p(t,e){var r,n,o,c,u=0;if(!t)throw s(V);var f=t[et[z][B]];if(i(f))n=f.call(t);else{if(!i(t.next)){if(a(t,R)){for(r=t.length;u<r;)e(t[u],u++);return u}throw s(V)}n=t}for(;!(o=n.next()).done;)if((c=l(e)(o.value,u++))===J)throw i(n[Y])&&n[Y](),c.e;return u}function s(t){return new TypeError(t)}function h(t){return(t?"":q)+(new F).stack}function y(t,e){var r="on"+t.toLowerCase(),n=A[r];x&&x.listeners(t).length?t===Z?x.emit(t,e._v,e):x.emit(t,e):n?n({reason:e._v,promise:e}):et[t](e._v,e)}function b(t){return t&&t._s}function v(t){return b(t)?new t(Q):(e=new t(function(t,o){if(e)throw s();r=t,n=o}),c(r,i),c(n,i),e);var e,r,n}function g(t,e){var r=!1;return function(n){r||(r=!0,I&&(t[K]=h(!0)),e===L?j(t,n):w(t,e,n))}}function _(t,e){function r(t){return n.push(t.replace(/^\s+|\s+$/g,""))}var n=[];return I&&(e[K]&&r(e[K]),function t(e){e&&G in e&&(t(e._next),r(e[G]+""),t(e._p))}(e)),(t&&t.stack?t.stack:t)+("\n"+n.join("\n")).replace(tt,"")}function d(t,e){return t(e)}function w(t,e,r){var n=0,o=t._c;if(t._s===C)for(t._s=e,t._v=r,e===W&&(I&&function(t){return a(t,F)}(r)&&(r.longStack=_(r,t)),nt(t));n<o;)rt(t,t[n++]);return t}function j(t,e){if(e===t&&e)return w(t,W,s(H)),t;if(e!==P&&(i(e)||o(e))){var r=l(m)(e);if(r===J)return w(t,W,r.e),t;i(r)?(I&&b(e)&&(t._next=e),b(e)?O(t,e,r):et.nextTick(function(){O(t,e,r)})):w(t,L,e)}else w(t,L,e);return t}function m(t){return t.then}function O(t,e,r){var n=l(r,e)(function(r){e&&(e=P,j(t,r))},function(r){e&&(e=P,w(t,W,r))});n===J&&e&&(w(t,W,n.e),e=P)}var S,E,M,P=null,T="object"==typeof self,A=T?self:r,N=A.Promise,x=A.process,k=A.console,I=!1,R=Array,F=Error,W=1,L=2,C=3,z="Symbol",B="iterator",D="species",U=z+"("+D+")",Y="return",$="_uh",G="_pt",K="_st",V="Invalid argument",q="\nFrom previous ",H="Chaining cycle detected for promise",X="rejectionHandled",Z="unhandledRejection",J={e:P},Q=function(){},tt=/^.+\/node_modules\/yaku\/.+\n?/gm,et=function(t){var e,r=this;if(!o(r)||r._s!==S)throw s("Invalid this");if(r._s=C,I&&(r[G]=h()),t!==Q){if(!i(t))throw s(V);(e=l(t)(g(r,L),g(r,W)))===J&&w(r,W,e.e)}};et.default=et,function(t,e){for(var r in e)t[r]=e[r]}(et.prototype,{then:function(e,r){if(this._s===t)throw s();return function(t,e,r,n){return i(r)&&(e._onFulfilled=r),i(n)&&(t[$]&&y(X,t),e._onRejected=n),I&&(e._p=t),t[t._c++]=e,t._s!==C&&rt(t,e),e}(this,v(et.speciesConstructor(this,et)),e,r)},catch:function(t){return this.then(S,t)},finally:function(t){return this.then(function(e){return et.resolve(t()).then(function(){return e})},function(e){return et.resolve(t()).then(function(){throw e})})},_c:0,_p:P}),et.resolve=function(t){return b(t)?t:j(v(this),t)},et.reject=function(t){return w(v(this),W,t)},et.race=function(t){var e=this,r=v(e),n=function(t){w(r,L,t)},o=function(t){w(r,W,t)},i=l(p)(t,function(t){e.resolve(t).then(n,o)});return i===J?e.reject(i.e):r},et.all=function(t){function e(t){w(o,W,t)}var r,n=this,o=v(n),i=[];return(r=l(p)(t,function(t,a){n.resolve(t).then(function(t){i[a]=t,--r||w(o,L,i)},e)}))===J?n.reject(r.e):(r||w(o,L,[]),o)},et.Symbol=A[z]||{},l(function(){Object.defineProperty(et,n(),{get:function(){return this}})})(),et.speciesConstructor=function(t,e){var r=t.constructor;return r&&r[n()]||e},et.unhandledRejection=function(t,e){k&&k.error("Uncaught (in promise)",I?e.longStack:_(t,e))},et.rejectionHandled=Q,et.enableLongStackTrace=function(){I=!0},et.nextTick=T?function(t){N?new N(function(t){t()}).then(t):setTimeout(t)}:x.nextTick,et._s=1;var rt=f(999,function(t,e){var r,n;return(n=t._s!==W?e._onFulfilled:e._onRejected)===S?void w(e,t._s,t._v):(r=l(d)(n,t._v))===J?void w(e,W,r.e):void j(e,r)}),nt=f(9,function(t){(function t(e){if(e._umark)return!0;e._umark=!0;for(var r,n=0,o=e._c;n<o;)if((r=e[n++])._onRejected||t(r))return!0})(t)||(t[$]=1,y(Z,t))});try{e.exports=et}catch(t){A.Yaku=et}}()}).call(r,n(2))}}),"flags"in RegExp.prototype||Object.defineProperty(RegExp.prototype,"flags",{configurable:!0,enumerable:!1,get:function(){var t=this;if("object"!==g(t))throw new TypeError("Method called on incompatible type: must be an object.");var e="";return l(n(t,"global"))&&(e+="g"),l(n(t,"ignoreCase"))&&(e+="i"),l(n(t,"multiline"))&&(e+="m"),l(n(t,"unicode"))&&(e+="u"),l(n(t,"sticky"))&&(e+="y"),e}}),"fromCodePoint"in String&&1===String.fromCodePoint.length||R(String,"fromCodePoint",function(t){for(var e=[],r=arguments,n=arguments.length,o=[],a=0;a<n;){o=[];var c=s(r[a]);if(!1===O(c,f(c)))throw new RangeError("Invalid code point "+Object.prototype.toString.call(c));if(c<0||c>1114111)throw new RangeError("Invalid code point "+Object.prototype.toString.call(c));var u=P(c);i(u)?o=o.concat(u):o.push(u),a+=1,e.push(String.fromCharCode.apply(null,o))}return 0===n?"":e.join("")}),"codePointAt"in String.prototype||R(String.prototype,"codePointAt",function(e){var r=M(c(this)),n=f(e),o=r.length;if(n<0||n>=o)return t;var i=String.prototype.charCodeAt.call(r,n);if(i<55296||i>56319||n+1===o)return i;var a=String.prototype.charCodeAt.call(r,n+1);return a<56320||a>57343?i:function(t,e){return 1024*(t-55296)+(e-56320)+65536}(i,a)}),"endsWith"in String.prototype||R(String.prototype,"endsWith",function(e){"use strict";var r=arguments.length>1?arguments[1]:t,n=M(c(this));if(d(e))throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var o=M(e),i=n.length,a=r===t?i:f(r),u=Math.min(Math.max(a,0),i),l=o.length,p=u-l;return!(p<0)&&n.substr(p,l)===o}),"includes"in String.prototype||R(String.prototype,"includes",function(e){"use strict";var r=arguments.length>1?arguments[1]:t,n=M(c(this));if(d(e))throw new TypeError("First argument to String.prototype.includes must not be a regular expression");var o=M(e),i=f(r),a=n.length,u=Math.min(Math.max(i,0),a);return-1!==String.prototype.indexOf.call(n,o,u)}),"padEnd"in String.prototype||R(String.prototype,"padEnd",function(e){"use strict";var r=arguments.length>1?arguments[1]:t,n=M(c(this)),o=p(e),i=n.length;if(o<=i)return n;if(r===t)var a=" ";else a=M(r);if(""===a)return n;for(var u=o-i,l="",f=0;f<u;f++)l+=a;return n+(l=l.substr(0,u))}),"padStart"in String.prototype||R(String.prototype,"padStart",function(e){"use strict";var r=arguments.length>1?arguments[1]:t,n=M(c(this)),o=p(e),i=n.length;if(o<=i)return n;if(r===t)var a=" ";else a=M(r);if(""===a)return n;for(var u=o-i,l="",f=0;f<u;f++)l+=a;return(l=l.substr(0,u))+n}),"repeat"in String.prototype||R(String.prototype,"repeat",function(t){"use strict";var e=M(c(this)),r=f(t);if(r<0)throw new RangeError("Invalid count value");if(r===1/0)throw new RangeError("Invalid count value");return 0===r?"":new Array(r+1).join(e)}),"startsWith"in String.prototype||R(String.prototype,"startsWith",function(e){"use strict";var r=arguments.length>1?arguments[1]:t,n=M(c(this));if(d(e))throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");var o=M(e),i=f(r),a=n.length,u=Math.min(Math.max(i,0),a);return!(o.length+u>a)&&0===n.substr(u).indexOf(e)}),"trim"in String.prototype||R(String.prototype,"trim",function(){var t=c(this),e=M(t);return String.prototype.replace.call(e,/^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+|[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/g,"")}),"Symbol"in this&&0===this.Symbol.length||function(t,e,r){"use strict";var n,o=0,i=""+Math.random(),a="__symbol:",c=a.length,u="__symbol@@"+i,l="defineProperty",f="defineProperties",p="getOwnPropertyNames",s="getOwnPropertyDescriptor",h="propertyIsEnumerable",y=t.prototype,b=y.hasOwnProperty,v=y[h],g=y.toString,_=Array.prototype.concat,d=t.getOwnPropertyNames?t.getOwnPropertyNames(window):[],w=t[p],j=function(t){if("[object Window]"===g.call(t))try{return w(t)}catch(t){return _.call([],d)}return w(t)},m=t[s],O=t.create,S=t.keys,E=t.freeze||t,M=t[l],P=t[f],T=m(t,p),A=function(t,e,r){if(!b.call(t,u))try{M(t,u,{enumerable:!1,configurable:!1,writable:!1,value:{}})}catch(e){t[u]={}}t[u]["@@"+e]=r},N=function(){},x=function(t){return t!=u&&!b.call(W,t)},k=function(t){return t!=u&&b.call(W,t)},I=function(t){var e=""+t;return k(e)?b.call(this,e)&&this[u]["@@"+e]:v.call(this,t)},R=function(e){var r={enumerable:!1,configurable:!0,get:N,set:function(t){n(this,e,{enumerable:!1,configurable:!0,writable:!0,value:t}),A(this,e,!0)}};try{M(y,e,r)}catch(t){y[e]=r.value}return E(W[e]=M(t(e),"constructor",L))},F=function t(){var e=arguments[0];if(this instanceof t)throw new TypeError("Symbol is not a constructor");return R(a.concat(e||"",i,++o))},W=O(null),L={value:F},C=function(t){return W[t]},z=function(t,e,r){var o=""+e;return k(o)?(n(t,o,r.enumerable?function(t){var e=O(t);return e.enumerable=!1,e}(r):r),A(t,o,!!r.enumerable)):M(t,e,r),t},B=function(t){return j(t).filter(t===y?function(t){return function(e){return b.call(t,u)&&b.call(t[u],"@@"+e)}}(t):k).map(C)};T.value=z,M(t,l,T),T.value=B,M(t,"getOwnPropertySymbols",T),T.value=function(t){return j(t).filter(x)},M(t,p,T),T.value=function(t,e){var r=B(e);return r.length?S(e).concat(r).forEach(function(r){I.call(e,r)&&z(t,r,e[r])}):P(t,e),t},M(t,f,T),T.value=I,M(y,h,T),T.value=F,M(r,"Symbol",T),T.value=function(t){var e=a.concat(a,t,i);return e in y?W[e]:R(e)},M(F,"for",T),T.value=function(t){if(x(t))throw new TypeError(t+" is not a symbol");return b.call(W,t)?t.slice(2*c,-i.length):void 0},M(F,"keyFor",T),T.value=function(t,e){var r=m(t,e);return r&&k(e)&&(r.enumerable=I.call(t,e)),r},M(t,s,T),T.value=function(t,e){return 1===arguments.length||void 0===e?O(t):function(t,e){var r=O(t);return j(e).forEach(function(t){I.call(e,t)&&z(r,t,e[t])}),r}(t,e)},M(t,"create",T);var D=null===function(){return this}.call(null);T.value=D?function(){var t=g.call(this);return"[object String]"===t&&k(this)?"[object Symbol]":t}:function(){if(this===window)return"[object Null]";var t=g.call(this);return"[object String]"===t&&k(this)?"[object Symbol]":t},M(y,"toString",T),n=function(t,e,r){var n=m(y,e);delete y[e],M(t,e,r),t!==y&&M(y,e,n)}}(Object,0,this),"Symbol"in this&&"hasInstance"in this.Symbol||Object.defineProperty(Symbol,"hasInstance",{value:Symbol("hasInstance")}),"Symbol"in this&&"isConcatSpreadable"in this.Symbol||Object.defineProperty(Symbol,"isConcatSpreadable",{value:Symbol("isConcatSpreadable")}),"Symbol"in this&&"iterator"in this.Symbol||Object.defineProperty(Symbol,"iterator",{value:Symbol("iterator")}),"Symbol"in this&&"match"in this.Symbol||Object.defineProperty(Symbol,"match",{value:Symbol("match")}),"Symbol"in this&&"replace"in this.Symbol||Object.defineProperty(Symbol,"replace",{value:Symbol("replace")}),"Symbol"in this&&"search"in this.Symbol||Object.defineProperty(Symbol,"search",{value:Symbol("search")}),"Symbol"in this&&"species"in this.Symbol||Object.defineProperty(Symbol,"species",{value:Symbol("species")}),"Map"in this&&function(t){try{var e=new Map([[1,1],[2,2]]);return 0===Map.length&&2===e.size&&"Symbol"in t&&"iterator"in Symbol&&"function"==typeof e[Symbol.iterator]}catch(t){return!1}}(this)||function(e){function r(t,e){if("object"!==g(t))throw new TypeError("createMapIterator called on incompatible receiver "+Object.prototype.toString.call(t));if(!0!==t._es6Map)throw new TypeError("createMapIterator called on incompatible receiver "+Object.prototype.toString.call(t));var r=Object.create(c);return Object.defineProperty(r,"[[Map]]",{configurable:!0,enumerable:!1,writable:!0,value:t}),Object.defineProperty(r,"[[MapNextIndex]]",{configurable:!0,enumerable:!1,writable:!0,value:0}),Object.defineProperty(r,"[[MapIterationKind]]",{configurable:!0,enumerable:!1,writable:!0,value:e}),r}var n=function(){try{var e={};return Object.defineProperty(e,"t",{configurable:!0,enumerable:!1,get:function(){return!0},set:t}),!!e.t}catch(t){return!1}}(),o=Symbol("undef"),i=function e(){if(!(this instanceof e))throw new TypeError('Constructor Map requires "new"');var r=L(this,e.prototype,{_keys:[],_values:[],_size:0,_es6Map:!0});n||Object.defineProperty(r,"size",{configurable:!0,enumerable:!1,writable:!0,value:0});var o=arguments.length>0?arguments[0]:t;if(null===o||o===t)return r;var i=r.set;if(!a(i))throw new TypeError("Map.prototype.set is not a function");try{for(var c=B(o);;){var u=j(c);if(!1===u)return r;var l=m(u);if("object"!==g(l))try{throw new TypeError("Iterator value "+l+" is not an entry object")}catch(t){return w(c,t)}try{var f=l[0],p=l[1];i.call(r,f,p)}catch(t){return w(c,t)}}}catch(t){if(Array.isArray(o)||"[object Arguments]"===Object.prototype.toString.call(o)||o.callee){var s,h=o.length;for(s=0;s<h;s++)i.call(r,o[s][0],o[s][1])}}return r};Object.defineProperty(i,"prototype",{configurable:!1,enumerable:!1,writable:!1,value:{}}),n?Object.defineProperty(i,Symbol.species,{configurable:!0,enumerable:!1,get:function(){return this},set:t}):R(i,Symbol.species,i),R(i.prototype,"clear",function(){var e=this;if("object"!==g(e))throw new TypeError("Method Map.prototype.clear called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6Map)throw new TypeError("Method Map.prototype.clear called on incompatible receiver "+Object.prototype.toString.call(e));for(var r=e._keys,i=0;i<r.length;i++)e._keys[i]=o,e._values[i]=o;return this._size=0,n||(this.size=this._size),t}),R(i.prototype,"constructor",i),R(i.prototype,"delete",function(t){var e=this;if("object"!==g(e))throw new TypeError("Method Map.prototype.clear called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6Map)throw new TypeError("Method Map.prototype.clear called on incompatible receiver "+Object.prototype.toString.call(e));for(var r=e._keys,i=0;i<r.length;i++)if(e._keys[i]!==o&&S(e._keys[i],t))return this._keys[i]=o,this._values[i]=o,this._size=--this._size,n||(this.size=this._size),!0;return!1}),R(i.prototype,"entries",function(){return r(this,"key+value")}),R(i.prototype,"forEach",function(e){var r=this;if("object"!==g(r))throw new TypeError("Method Map.prototype.forEach called on incompatible receiver "+Object.prototype.toString.call(r));if(!0!==r._es6Map)throw new TypeError("Method Map.prototype.forEach called on incompatible receiver "+Object.prototype.toString.call(r));if(!a(e))throw new TypeError(Object.prototype.toString.call(e)+" is not a function.");if(arguments[1])var n=arguments[1];for(var i=r._keys,c=0;c<i.length;c++)r._keys[c]!==o&&r._values[c]!==o&&e.call(n,r._values[c],r._keys[c],r);return t}),R(i.prototype,"get",function(e){var r=this;if("object"!==g(r))throw new TypeError("Method Map.prototype.get called on incompatible receiver "+Object.prototype.toString.call(r));if(!0!==r._es6Map)throw new TypeError("Method Map.prototype.get called on incompatible receiver "+Object.prototype.toString.call(r));for(var n=r._keys,i=0;i<n.length;i++)if(r._keys[i]!==o&&S(r._keys[i],e))return r._values[i];return t}),R(i.prototype,"has",function(t){var e=this;if("object"!=typeof e)throw new TypeError("Method Map.prototype.has called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6Map)throw new TypeError("Method Map.prototype.has called on incompatible receiver "+Object.prototype.toString.call(e));for(var r=e._keys,n=0;n<r.length;n++)if(e._keys[n]!==o&&S(e._keys[n],t))return!0;return!1}),R(i.prototype,"keys",function(){return r(this,"key")}),R(i.prototype,"set",function(t,e){var r=this;if("object"!==g(r))throw new TypeError("Method Map.prototype.set called on incompatible receiver "+Object.prototype.toString.call(r));if(!0!==r._es6Map)throw new TypeError("Method Map.prototype.set called on incompatible receiver "+Object.prototype.toString.call(r));for(var i=r._keys,a=0;a<i.length;a++)if(r._keys[a]!==o&&S(r._keys[a],t))return r._values[a]=e,r;-0===t&&(t=0);var c={};return c["[[Key]]"]=t,c["[[Value]]"]=e,r._keys.push(c["[[Key]]"]),r._values.push(c["[[Value]]"]),++r._size,n||(r.size=r._size),r}),n&&Object.defineProperty(i.prototype,"size",{configurable:!0,enumerable:!1,get:function(){var t=this;if("object"!==g(t))throw new TypeError("Method Map.prototype.size called on incompatible receiver "+Object.prototype.toString.call(t));if(!0!==t._es6Map)throw new TypeError("Method Map.prototype.size called on incompatible receiver "+Object.prototype.toString.call(t));for(var e=t._keys,r=0,n=0;n<e.length;n++)t._keys[n]!==o&&(r+=1);return r},set:t}),R(i.prototype,"values",function(){return r(this,"value")}),R(i.prototype,Symbol.iterator,i.prototype.entries),"name"in i||Object.defineProperty(i,"name",{configurable:!0,enumerable:!1,writable:!1,value:"Map"});var c={};Object.defineProperty(c,"isMapIterator",{configurable:!1,enumerable:!1,writable:!1,value:!0}),R(c,"next",function(){var e=this;if("object"!==g(e))throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver "+Object.prototype.toString.call(e));if(!e.isMapIterator)throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver "+Object.prototype.toString.call(e));var r=e["[[Map]]"],n=e["[[MapNextIndex]]"],i=e["[[MapIterationKind]]"];if(r===t)return I(t,!0);if(!r._es6Map)throw new Error(Object.prototype.toString.call(r)+" has a [[MapData]] internal slot.");for(var a=r._keys.length;n<a;){var c=Object.create(null);if(c["[[Key]]"]=r._keys[n],c["[[Value]]"]=r._values[n],n+=1,e["[[MapNextIndex]]"]=n,c["[[Key]]"]!==o){if("key"===i)var u=c["[[Key]]"];else if("value"===i)u=c["[[Value]]"];else{if("key+value"!==i)throw new Error;u=[c["[[Key]]"],c["[[Value]]"]]}return I(u,!1)}}return e["[[Map]]"]=t,I(t,!0)}),R(c,Symbol.iterator,function(){return this});try{R(e,"Map",i)}catch(t){e.Map=i}}(this),"Set"in this&&function(){try{var t=new Set([1,2]);return 0===Set.length&&2===t.size&&"Symbol"in this&&"iterator"in Symbol&&"function"==typeof t[Symbol.iterator]}catch(t){return!1}}()||function(e){function r(t,e){if("object"!=typeof t)throw new TypeError("createSetIterator called on incompatible receiver "+Object.prototype.toString.call(t));if(!0!==t._es6Set)throw new TypeError("createSetIterator called on incompatible receiver "+Object.prototype.toString.call(t));var r=Object.create(u);return Object.defineProperty(r,"[[IteratedSet]]",{configurable:!0,enumerable:!1,writable:!0,value:t}),Object.defineProperty(r,"[[SetNextIndex]]",{configurable:!0,enumerable:!1,writable:!0,value:0}),Object.defineProperty(r,"[[SetIterationKind]]",{configurable:!0,enumerable:!1,writable:!0,value:e}),r}var n=function(){try{var e={};return Object.defineProperty(e,"t",{configurable:!0,enumerable:!1,get:function(){return!0},set:t}),!!e.t}catch(t){return!1}}(),o=Symbol("undef"),i=function e(){if(!(this instanceof e))throw new TypeError('Constructor Set requires "new"');var r=L(this,e.prototype,{_values:[],_size:0,_es6Set:!0});n||Object.defineProperty(r,"size",{configurable:!0,enumerable:!1,writable:!0,value:0});var o=arguments.length>0?arguments[0]:t;if(null===o||o===t)return r;var i=r.add;if(!a(i))throw new TypeError("Set.prototype.add is not a function");try{for(var c=B(o);;){var u=j(c);if(!1===u)return r;var l=m(u);try{i.call(r,l)}catch(t){return w(c,t)}}}catch(t){if(!Array.isArray(o)&&"[object Arguments]"!==Object.prototype.toString.call(o)&&!o.callee)throw t;var f,p=o.length;for(f=0;f<p;f++)i.call(r,o[f])}return r};Object.defineProperty(i,"prototype",{configurable:!1,enumerable:!1,writable:!1,value:{}}),n?Object.defineProperty(i,Symbol.species,{configurable:!0,enumerable:!1,get:function(){return this},set:t}):R(i,Symbol.species,i),R(i.prototype,"add",function(t){var e=this;if("object"!=typeof e)throw new TypeError("Method Set.prototype.add called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6Set)throw new TypeError("Method Set.prototype.add called on incompatible receiver "+Object.prototype.toString.call(e));for(var r=e._values,i=0;i<r.length;i++){var a=r[i];if(a!==o&&S(a,t))return e}return 1/t==-1/0&&(t=0),e._values.push(t),this._size=++this._size,n||(this.size=this._size),e}),R(i.prototype,"clear",function(){var e=this;if("object"!=typeof e)throw new TypeError("Method Set.prototype.clear called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6Set)throw new TypeError("Method Set.prototype.clear called on incompatible receiver "+Object.prototype.toString.call(e));for(var r=e._values,i=0;i<r.length;i++)r[i]=o;return this._size=0,n||(this.size=this._size),t}),R(i.prototype,"constructor",i),R(i.prototype,"delete",function(t){var e=this;if("object"!=typeof e)throw new TypeError("Method Set.prototype.delete called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6Set)throw new TypeError("Method Set.prototype.delete called on incompatible receiver "+Object.prototype.toString.call(e));for(var r=e._values,i=0;i<r.length;i++){var a=r[i];if(a!==o&&S(a,t))return r[i]=o,this._size=--this._size,n||(this.size=this._size),!0}return!1}),R(i.prototype,"entries",function(){return r(this,"key+value")}),R(i.prototype,"forEach",function(e){var r=this;if("object"!=typeof r)throw new TypeError("Method Set.prototype.forEach called on incompatible receiver "+Object.prototype.toString.call(r));if(!0!==r._es6Set)throw new TypeError("Method Set.prototype.forEach called on incompatible receiver "+Object.prototype.toString.call(r));if(!a(e))throw new TypeError(Object.prototype.toString.call(e)+" is not a function.");if(arguments[1])var n=arguments[1];for(var i=r._values,c=0;c<i.length;c++){var u=i[c];u!==o&&e.call(n,u,u,r)}return t}),R(i.prototype,"has",function(t){var e=this;if("object"!=typeof e)throw new TypeError("Method Set.prototype.forEach called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6Set)throw new TypeError("Method Set.prototype.forEach called on incompatible receiver "+Object.prototype.toString.call(e));for(var r=e._values,n=0;n<r.length;n++){var i=r[n];if(i!==o&&S(i,t))return!0}return!1});var c=function(){return r(this,"value")};R(i.prototype,"values",c),R(i.prototype,"keys",c),n&&Object.defineProperty(i.prototype,"size",{configurable:!0,enumerable:!1,get:function(){var t=this;if("object"!=typeof t)throw new TypeError("Method Set.prototype.size called on incompatible receiver "+Object.prototype.toString.call(t));if(!0!==t._es6Set)throw new TypeError("Method Set.prototype.size called on incompatible receiver "+Object.prototype.toString.call(t));for(var e=t._values,r=0,n=0;n<e.length;n++)e[n]!==o&&(r+=1);return r},set:t}),R(i.prototype,Symbol.iterator,c),"name"in i||Object.defineProperty(i,"name",{configurable:!0,enumerable:!1,writable:!1,value:"Set"});var u={};Object.defineProperty(u,"isSetIterator",{configurable:!1,enumerable:!1,writable:!1,value:!0}),R(u,"next",function(){var e=this;if("object"!=typeof e)throw new TypeError("Method %SetIteratorPrototype%.next called on incompatible receiver "+Object.prototype.toString.call(e));if(!e.isSetIterator)throw new TypeError("Method %SetIteratorPrototype%.next called on incompatible receiver "+Object.prototype.toString.call(e));var r=e["[[IteratedSet]]"],n=e["[[SetNextIndex]]"],i=e["[[SetIterationKind]]"];if(r===t)return I(t,!0);if(!r._es6Set)throw new Error(Object.prototype.toString.call(r)+" does not have [[SetData]] internal slot.");for(var a=r._values,c=a.length;n<c;){var u=a[n];if(n+=1,e["[[SetNextIndex]]"]=n,u!==o)return I("key+value"===i?[u,u]:u,!1)}return e["[[IteratedSet]]"]=t,I(t,!0)}),R(u,Symbol.iterator,function(){return this});try{R(e,"Set",i)}catch(t){e.Set=i}}(this),"from"in Array&&function(){try{return Array.from({length:-1/0}),!0}catch(t){return!1}}()||function(){function o(t){return"string"==typeof t||"object"==typeof t&&"[object String]"===i.call(t)}var i=Object.prototype.toString,c=String.prototype.match;R(Array,"from",function(i){var u=this,l=arguments.length>1?arguments[1]:t;if(l===t)var f=!1;else{if(!1===a(l))throw new TypeError(Object.prototype.toString.call(l)+" is not a function.");var s=arguments.length>2?arguments[2]:t;if(s!==t)var y=s;else y=t;f=!0}var v=b(i,Symbol.iterator);if(v!==t){if(_(u))var g=C(u);else g=e(0);for(var d=B(i,v),O=0;;){if(O>=Math.pow(2,53)-1)return w(d,new TypeError("Iteration count can not be greater than or equal 9007199254740991."));var S=M(O),E=j(d);if(!1===E)return g.length=O,g;var P=m(E);if(f)try{var T=r(l,y,[P,O])}catch(t){return w(d,t)}else T=P;try{k(g,S,T)}catch(t){return w(d,t)}O+=1}}if(o(i))var A=c.call(i,/[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g)||[];else A=h(i);var N=p(n(A,"length"));for(g=_(u)?C(u,[N]):e(N),O=0;O<N;){var x=n(A,S=M(O));k(g,S,T=!0===f?r(l,y,[x,O]):x),O+=1}return g.length=N,g})}(),"Symbol"in this&&"split"in this.Symbol||Object.defineProperty(Symbol,"split",{value:Symbol("split")}),"Symbol"in this&&"toPrimitive"in this.Symbol||Object.defineProperty(Symbol,"toPrimitive",{value:Symbol("toPrimitive")}),"Symbol"in this&&"toStringTag"in this.Symbol||Object.defineProperty(Symbol,"toStringTag",{value:Symbol("toStringTag")});var D,U=(D=function(t,e){if(!(this instanceof D))return new D(t,e);Object.defineProperties(this,{__list__:{writable:!0,value:t},__context__:{writable:!0,value:e},__nextIndex__:{writable:!0,value:0}}),e&&(function(t){if("function"!=typeof t)throw new TypeError(t+" is not a function")}(e.on),e.on("_add",this._onAdd.bind(this)),e.on("_delete",this._onDelete.bind(this)),e.on("_clear",this._onClear.bind(this)))},Object.defineProperties(D.prototype,Object.assign({constructor:{value:D,configurable:!0,enumerable:!1,writable:!0},_next:{value:function(){var e;if(this.__list__)return this.__redo__&&(e=this.__redo__.shift())!==t?e:this.__nextIndex__<this.__list__.length?this.__nextIndex__++:void this._unBind()},configurable:!0,enumerable:!1,writable:!0},next:{value:function(){return this._createResult(this._next())},configurable:!0,enumerable:!1,writable:!0},_createResult:{value:function(e){return e===t?{done:!0,value:t}:{done:!1,value:this._resolve(e)}},configurable:!0,enumerable:!1,writable:!0},_resolve:{value:function(t){return this.__list__[t]},configurable:!0,enumerable:!1,writable:!0},_unBind:{value:function(){this.__list__=null,delete this.__redo__,this.__context__&&(this.__context__.off("_add",this._onAdd.bind(this)),this.__context__.off("_delete",this._onDelete.bind(this)),this.__context__.off("_clear",this._onClear.bind(this)),this.__context__=null)},configurable:!0,enumerable:!1,writable:!0},toString:{value:function(){return"[object Iterator]"},configurable:!0,enumerable:!1,writable:!0}},{_onAdd:{value:function(t){if(!(t>=this.__nextIndex__)){if(++this.__nextIndex__,!this.__redo__)return void Object.defineProperty(this,"__redo__",{value:[t],configurable:!0,enumerable:!1,writable:!1});this.__redo__.forEach(function(e,r){e>=t&&(this.__redo__[r]=++e)},this),this.__redo__.push(t)}},configurable:!0,enumerable:!1,writable:!0},_onDelete:{value:function(t){var e;t>=this.__nextIndex__||(--this.__nextIndex__,this.__redo__&&(-1!==(e=this.__redo__.indexOf(t))&&this.__redo__.splice(e,1),this.__redo__.forEach(function(e,r){e>t&&(this.__redo__[r]=--e)},this)))},configurable:!0,enumerable:!1,writable:!0},_onClear:{value:function(){this.__redo__&&function(){return this.length=0,this}.call(this.__redo__),this.__nextIndex__=0},configurable:!0,enumerable:!1,writable:!0}})),Object.defineProperty(D.prototype,Symbol.iterator,{value:function(){return this},configurable:!0,enumerable:!1,writable:!0}),Object.defineProperty(D.prototype,Symbol.toStringTag,{value:"Iterator",configurable:!1,enumerable:!1,writable:!0}),D),Y=function(){var t=function(e,r){if(!(this instanceof t))return new t(e,r);U.call(this,e),r=r?String.prototype.includes.call(r,"key+value")?"key+value":String.prototype.includes.call(r,"key")?"key":"value":"value",Object.defineProperty(this,"__kind__",{value:r,configurable:!1,enumerable:!1,writable:!1})};return Object.setPrototypeOf&&Object.setPrototypeOf(t,U.prototype),t.prototype=Object.create(U.prototype,{constructor:{value:t,configurable:!0,enumerable:!1,writable:!0},_resolve:{value:function(t){return"value"===this.__kind__?this.__list__[t]:"key+value"===this.__kind__?[t,this.__list__[t]]:t},configurable:!0,enumerable:!1,writable:!0},toString:{value:function(){return"[object Array Iterator]"},configurable:!0,enumerable:!1,writable:!0}}),t}();"Symbol"in this&&"iterator"in this.Symbol&&Array.prototype.entries||R(Array.prototype,"entries",function(){var t=h(this);return new Y(t,"key+value")}),"Symbol"in this&&"iterator"in this.Symbol&&Array.prototype.keys||R(Array.prototype,"keys",function(){var t=h(this);return new Y(t,"key")}),"values"in Array.prototype||("Symbol"in this&&"iterator"in Symbol&&"function"==typeof Array.prototype[Symbol.iterator]?R(Array.prototype,"values",Array.prototype[Symbol.iterator]):R(Array.prototype,"values",function(){var t=h(this);return new Y(t,"value")})),"Symbol"in this&&"iterator"in this.Symbol&&Array.prototype[Symbol.iterator]||R(Array.prototype,Symbol.iterator,Array.prototype.values);var $=function(){var t=function(e){if(!(this instanceof t))return new t(e);e=String(e),U.call(this,e),Object.defineProperty(this,"__length__",{value:e.length,configurable:!1,enumerable:!1,writable:!1})};return Object.setPrototypeOf&&Object.setPrototypeOf(t,U),t.prototype=Object.create(U.prototype,{constructor:{value:t,configurable:!0,enumerable:!1,writable:!0},_next:{value:function(){if(this.__list__)return this.__nextIndex__<this.__length__?this.__nextIndex__++:void this._unBind()},configurable:!0,enumerable:!1,writable:!0},_resolve:{value:function(t){var e,r=this.__list__[t];return this.__nextIndex__===this.__length__?r:(e=r.charCodeAt(0))>=55296&&e<=56319?r+this.__list__[this.__nextIndex__++]:r},configurable:!0,enumerable:!1,writable:!0},toString:{value:function(){return"[object String Iterator]"},configurable:!0,enumerable:!1,writable:!0}}),t}();"Symbol"in this&&"iterator"in this.Symbol&&String.prototype[Symbol.iterator]||R(String.prototype,Symbol.iterator,function(){var t=M(c(this));return new $(t)}),"Symbol"in this&&"unscopables"in this.Symbol||Object.defineProperty(Symbol,"unscopables",{value:Symbol("unscopables")}),function(t){try{if("WeakMap"in t&&0===WeakMap.length){var e={},r=new WeakMap([[e,"test"]]);return"test"===r.get(e)&&!1===r.delete(0)}return!1}catch(t){return!1}}(this)||function(e){var o=Symbol("undef"),i=function e(){if(!(this instanceof e))throw new TypeError('Constructor WeakMap requires "new"');var o=L(this,e.prototype,{_keys:[],_values:[],_es6WeakMap:!0}),i=arguments.length>0?arguments[0]:t;if(null===i||i===t)return o;var c=n(o,"set");if(!a(c))throw new TypeError("WeakMap.prototype.set is not a function");try{for(var u=B(i);;){var l=j(u);if(!1===l)return o;var f=m(l);if("object"!==g(f))try{throw new TypeError("Iterator value "+f+" is not an entry object")}catch(t){return w(u,t)}try{r(c,o,[n(f,"0"),n(f,"1")])}catch(t){return w(u,t)}}}catch(t){if(Array.isArray(i)||"[object Arguments]"===Object.prototype.toString.call(i)||i.callee){var p,s=i.length;for(p=0;p<s;p++){r(c,o,[i[p][0],i[p][1]])}}}return o};Object.defineProperty(i,"prototype",{configurable:!1,enumerable:!1,writable:!1,value:{}}),R(i.prototype,"constructor",i),R(i.prototype,"delete",function(t){var e=this;if("object"!==g(e))throw new TypeError("Method WeakMap.prototype.clear called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6WeakMap)throw new TypeError("Method WeakMap.prototype.clear called on incompatible receiver "+Object.prototype.toString.call(e));var r=e._keys;if("object"!==g(t))return!1;for(var n=0;n<r.length;n++)if(e._keys[n]!==o&&O(e._keys[n],t))return this._keys[n]=o,this._values[n]=o,this._size=--this._size,!0;return!1}),R(i.prototype,"get",function(e){var r=this;if("object"!==g(r))throw new TypeError("Method WeakMap.prototype.get called on incompatible receiver "+Object.prototype.toString.call(r));if(!0!==r._es6WeakMap)throw new TypeError("Method WeakMap.prototype.get called on incompatible receiver "+Object.prototype.toString.call(r));var n=r._keys;if("object"!==g(e))return t;for(var i=0;i<n.length;i++)if(r._keys[i]!==o&&O(r._keys[i],e))return r._values[i];return t}),R(i.prototype,"has",function(t){var e=this;if("object"!=typeof e)throw new TypeError("Method WeakMap.prototype.has called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6WeakMap)throw new TypeError("Method WeakMap.prototype.has called on incompatible receiver "+Object.prototype.toString.call(e));var r=e._keys;if("object"!==g(t))return!1;for(var n=0;n<r.length;n++)if(e._keys[n]!==o&&O(e._keys[n],t))return!0;return!1}),R(i.prototype,"set",function(t,e){var r=this;if("object"!==g(r))throw new TypeError("Method WeakMap.prototype.set called on incompatible receiver "+Object.prototype.toString.call(r));if(!0!==r._es6WeakMap)throw new TypeError("Method WeakMap.prototype.set called on incompatible receiver "+Object.prototype.toString.call(r));var n=r._keys;if("object"!==g(t))throw new TypeError("Invalid value used as weak map key");for(var i=0;i<n.length;i++)if(r._keys[i]!==o&&O(r._keys[i],t))return r._values[i]=e,r;var a={"[[Key]]":t,"[[Value]]":e};return r._keys.push(a["[[Key]]"]),r._values.push(a["[[Value]]"]),r}),"name"in i||Object.defineProperty(i,"name",{configurable:!0,enumerable:!1,writable:!1,value:"WeakMap"});try{R(e,"WeakMap",i)}catch(t){e.WeakMap=i}}(this),function(t){try{if("WeakSet"in t&&0===WeakSet.length){var e={},r=new WeakSet([e]);return r.has(e)&&!1===r.delete(0)}return!1}catch(t){return!1}}(this)||function(e){var o=Symbol("undef"),c=function e(){if(!(this instanceof e))throw new TypeError('Constructor WeakSet requires "new"');var o=L(this,e.prototype,{_values:[],_size:0,_es6WeakSet:!0}),c=arguments.length>0?arguments[0]:t;if(null===c||c===t)return o;var u=n(o,"add");if(!a(u))throw new TypeError("WeakSet.prototype.add is not a function");try{for(var l=B(c);;){var f=j(l);if(!1===f)return o;var p=m(f);try{r(u,o,[p])}catch(t){return w(l,t)}}}catch(t){if(i(c)||"[object Arguments]"===Object.prototype.toString.call(c)||c.callee){var s,h=c.length;for(s=0;s<h;s++)r(u,o,[c[s]])}}return o};Object.defineProperty(c,"prototype",{configurable:!1,enumerable:!1,writable:!1,value:{}}),R(c.prototype,"add",function(t){var e=this;if("object"!==g(e))throw new TypeError("Method WeakSet.prototype.add called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6WeakSet)throw new TypeError("Method WeakSet.prototype.add called on incompatible receiver "+Object.prototype.toString.call(e));if("object"!==g(t))throw new TypeError("Invalid value used in weak set");for(var r=e._values,n=0;n<r.length;n++){var i=r[n];if(i!==o&&S(i,t))return e}return e._values.push(t),e}),R(c.prototype,"constructor",c),R(c.prototype,"delete",function(t){var e=this;if("object"!==g(e))throw new TypeError("Method WeakSet.prototype.delete called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6WeakSet)throw new TypeError("Method WeakSet.prototype.delete called on incompatible receiver "+Object.prototype.toString.call(e));if("object"!==g(t))return!1;for(var r=e._values,n=0;n<r.length;n++){var i=r[n];if(i!==o&&S(i,t))return r[n]=o,!0}return!1}),R(c.prototype,"has",function(t){var e=this;if("object"!==g(e))throw new TypeError("Method WeakSet.prototype.has called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6WeakSet)throw new TypeError("Method WeakSet.prototype.has called on incompatible receiver "+Object.prototype.toString.call(e));var r=e._values;if("object"!==g(t))return!1;for(var n=0;n<r.length;n++){var i=r[n];if(i!==o&&S(i,t))return!0}return!1}),"name"in c||Object.defineProperty(c,"name",{configurable:!0,enumerable:!1,writable:!1,value:"WeakSet"});try{R(e,"WeakSet",c)}catch(t){e.WeakSet=c}}(this)}).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});


/**
 * 배열을 섞음 (레퍼런스에 직접 접근 x)
 */
if (!Array.prototype.hasOwnProperty('shuffle')) {
    Object.defineProperty(Array.prototype, 'shuffle', {
        value: function() {
            var cloneArr = this.slice();  // 레퍼런스를 카피시켜서 함
            
            var currentIndex = cloneArr.length;
            var temp;
            var randomIndex;
            
            while (0 !== currentIndex) {
            	randomIndex = Math.floor(Math.random() * currentIndex);
            	currentIndex--;
            	
            	temp = cloneArr[currentIndex];
            	cloneArr[currentIndex] = cloneArr[randomIndex];
            	cloneArr[randomIndex] = temp;
            }
            
            return cloneArr;
        },
        configurable: true,
        writable: true
    });
}

/**
 * 배열을 섞음 (원소들이 원래의 자리에 있지 않고 모두 섞임)
 */
if (!Array.prototype.hasOwnProperty('derange')) {
    Object.defineProperty(Array.prototype, 'derange', {
        value: function() {
            var cloneArr = this.slice();
            
            if (cloneArr.length < 2) {
                return cloneArr;
            }
            
            var result = [];
            var idx, i, iLen;
            
            var lastMoved = false;
            
            for (i = 0, iLen = cloneArr.length - 1; i < iLen; i++) {
                if (cloneArr.length == 2 && !lastMoved) {
                    result = result.concat(cloneArr.reverse().splice(0,2))
                    break;
                }
                
                do {
                    idx = Math.random() * cloneArr.length | 0;
                } while (this.indexOf(cloneArr[idx]) === result.length)
                
                result.push(cloneArr.splice(idx, 1)[0]);
                lastMoved = lastMoved || idx === cloneArr.length;
            }
            
            if (cloneArr.length) {
                result.push(cloneArr[0]);
            }
            
            return result;
        },
        configurable: true,
        writable: true
    });
}

/**
 * 쿼리스트링을 파싱해서 key값에 해당하는 value 반환
 * 
 * @param {string} key 가져올 key 값
 * @returns {string} value key 값에 해당하는 value 값
 * 
 */
if (!String.prototype.hasOwnProperty('getValueFromQueryStr')) {
    Object.defineProperty(String.prototype, 'getValueFromQueryStr', {
        value: function(key) {
            var queryStrList = this.split('&');
            var splitData;
            
            var result = queryStrList.find(function(value) {
                splitData = value.split('=');
                if (splitData.length === 2) {
                    return splitData[0] === key;
                }
            });
            
            if (result) {
                return result.split('=')[1];
            }
        },
        configurable: true,
        writable: true
    });
}

/**
 * Date format
 * 
 * @param {string} format 날짜 포맷
 * @returns {string} formatting 된 문자열
 * 
 */
if (!Date.prototype.hasOwnProperty('format')) {
	Object.defineProperty(Date.prototype, 'format', {
        value: function(format) {
            var date = this;
    		return format.replace(/(yyyy|MM|dd|E|hh|mm|ss|ms)/g, function(item) {
    			switch (item) {
    				case "yyyy": return date.getFullYear();
    				case "MM": return date.getMonth() + 1;
    				case "dd": return date.getDate();
    				case "hh": return String(date.getHours()).padStart(2, 0);
    				case "mm": return String(date.getMinutes()).padStart(2, 0);
    				case "ss": return String(date.getSeconds()).padStart(2, 0);
    				case 'ms': return String(date.getMilliseconds()).padStart(3, 0)
    				default: return item;
    			}
    		});
        },
        configurable: true,
        writable: true
    });
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// Widget Prototype API
///////////////////////////////////////////////////////////////////////////////////////////////////////
var _wgtApi = {
/**
 * 위젯의 media를 재생
 * 
 * @param {object} param
 *        {string} param.media 실행할 media id
 *        {string} param.state 변경할 state (기본값: Play)
 *        {function} param.on[Event.param] 각 이벤트마다 실행될 함수
 * 
 */
playMedia: function(param) {
	param = param || {};
	
	if (param.media) {
		this.set('media', param.media);
		delete param.media;
	}
	
	this.changeState(param.state || 'Play');
	delete param.state;
	
	var listenerFuncs = [];
	for (var listenerFunc in param) {
	    if (listenerFunc.indexOf('on') === -1) {
	        continue;
	    }
	    
	    listenerFuncs.push(listenerFunc[param]);
	}
	
	if (listenerFuncs.length > 0) {
    	this.addEventListener(
            'media',
            function(e) {
                if (!e.param) {
                    return;
                }
                
                return ('on' + e.param.replace(/ /g , '') in param) &&
                    typeof param['on' + e.param.replace(/ /g , '')] === 'function' &&
                    param['on' + e.param.replace(/ /g , '')](e);
        	}
        );
	}
},

/**
 * 위젯의 Animation 재생
 * 
 * @param {object} param
 *        {string} param.state 변경할 state (기본값: Play)
 *        {function} param.on[Event.param] 각 이벤트마다 실행될 함수
 * 
 */
playAnimation: function(param) {
    param = param || {};
    
    this.changeState(param.state || 'Play');
    delete param.state;
    
    var listenerFuncs = [];
	for (var listenerFunc in param) {
	    if (listenerFunc.indexOf('on') === -1) {
	        continue;
	    }
	    
	    listenerFuncs.push(listenerFunc[param]);
	}
	
	if (listenerFuncs.length > 0) {
        this.addEventListener(
            'animation',
            function(e) {
                if (!e.param) {
                    return;
                }
                
                return ('on' + e.param.replace(/ /g , '') in param) &&
                    typeof param['on' + e.param.replace(/ /g , '')] === 'function' &&
                    param['on' + e.param.replace(/ /g , '')](e);
        	}
        );
	}
},

/**
 * 위젯의 가운데 좌표를 반환
 * 
 * @returns {object} obj
 *          {int} obj.x x좌표
 *          {int} obj.y y좌표
 * 
 */
getCenterPos: function() {
	return {
		x: this.get('x') + (this.get('w') / 2),
		y: this.get('y') + (this.get('h') / 2),
	}
},

/**
 * 상대 위젯의 중간 좌표로 moveTo
 * 
 * @param {Widget} parentWgt 이동할 대상 위젯
 * @param {object} param 일반 moveTo 함수의 param 값
 * 
 */
moveToCenterOfParent: function(parentWgt, param) {
	var centerPos = parentWgt.getCenterPos();
	this.moveTo(centerPos.x - (this.get('w') / 2), centerPos.y - (this.get('h') / 2), param);
},

/**
 * 위젯의 중간 좌표를 기준으로 상대 위젯 안에 위치해 있는지 확인
 * 
 * @param {Widget} areaWgt 영역 위젯
 * @returns {boolean} 영역 안에 있는지 여부
 * 
 */
// !Widget.hasOwnProperty.checkInArea &&
// if (!Widget.prototype.hasOwnProperty('checkInArea')) {
checkInArea: function(areaWgt) {
    // 중간 좌표
    var dragPos = this.getCenterPos();
    
    // 인식 영역
    var areaPos = {
    	widthLeft: areaWgt.get('x'),
    	widthRight: areaWgt.get('x') + areaWgt.get('w'),
    	heightTop: areaWgt.get('y'),
    	heightBottom: areaWgt.get('y') + areaWgt.get('h'),
    };
    
    // 좌표가 영역에 있는지 체크해서 반환
    return (dragPos.x > areaPos.widthLeft && dragPos.x < areaPos.widthRight) &&
    	(dragPos.y > areaPos.heightTop && dragPos.y < areaPos.heightBottom);
},

/**
 * 위젯 간의 충돌을 체크
 * 
 * @param {Widget} collisionWgt 충돌을 체크할 위젯
 * @returns {boolean} 충돌 여부
 * 
 */
checkCollision: function(collisionWgt) {
	return (this.get('x') <= collisionWgt.get('x') + collisionWgt.get('w') &&  	// 좌
        this.get('x') + this.get('w') >= collisionWgt.get('x')) &&          	// 우
        (this.get('y') <= collisionWgt.get('y') + collisionWgt.get('h') &&  	// 상
        this.get('y') + this.get('h') >= collisionWgt.get('y'));            	// 하
},

/**
 * 위젯 Aspen Event Listener를 추가
 * 
 * @param {string} type 이벤트 Type
 * @param {function} listener 이벤트 리스너 함수 (해당 함수의 리턴값이 true일 경우 1회용 리스너로 등록)
 * 
 */
addEventListener: function(type, listener) {
    this.local.listeners = this.local.listeners || {};
    this.local.listeners[type] = this.local.listeners[type] || [];
    this.local.listeners[type].push(listener);
},

/**
 * 위젯 Aspen Event Listener를 삭제
 * 
 * @param {string} type 이벤트 Type
 * @param {function} listener 이벤트 리스너 함수 (메모리 주소를 비교하여 삭제하기에 함수 레퍼런스 값을 넣어야 함)
 * 
 */
removeEventListener: function(type, listener) {
    this.local.listeners = this.local.listeners || {};
    this.local.listeners[type] = this.local.listeners[type] || [];
    this.local.listeners[type] = this.local.listeners[type].filter(
        function(listenerFunc) {
            // console.log('log', listenerFunc !== listener);
            return !(listenerFunc === listener);
        }
    );
},


/**
 * 위젯을 깜빡이게 함
 * 
 * @param {int} delay 딜레이 (1/1000sec)
 * @param {object} param opacityTo param 객체   @nullable
 * 
 */
blink: function(delay, param) {
    this.local.isBlink = !this.local.isBlink;
    this.opacityTo(this.local.isBlink ? 0.3 : 1, param);
    
    var wgt = this;
    this.local.blinkTimeoutId = setTimeout(function() {
        wgt.blink(delay, param);
    }, delay);
},

/**
 * 위젯 깜빡임을 멈춤
 */
stopBlink: function() {
    if (this.local.blinkTimeoutId) {
        clearTimeout(this.local.blinkTimeoutId);
        this.local.blinkTimeoutId = undefined;
    }
    
    this.local.isBlink = undefined;
    this.opacityTo(1);
},


/**
 * 드래그 시작시 관련 정보 저장
 * 
 * @param {object} pos 해당 좌표로 옮김 (마우스 좌표 등)    @nullable
 * @param {object} param moveTo param                       @nullable
 */
saveDragStart: function(pos, param) {
    this.local.dragStartPos = {
        x: this.get('x'),
        y: this.get('y')
    }
    
    typeof pos === 'object' && this.moveTo(pos.x - this.get('w') / 2, pos.y - this.get('h') / 2, param);
},

/**
 * 드래그 종료시 관련 정보를 토대로 원래 좌표로 돌려주는 함수
 */
executeDragEnd: function(param) {
    if (param && /(xrJelly|xrSpring)/g.test(param.timing)) {
        var curPos = {
            x: this.get('x'),
            y: this.get('y')
        }
        
        this.moveTo(this.local.dragStartPos.x, this.local.dragStartPos.y);
        this.moveTo(curPos.x, curPos.y, param);
    } else {
        this.moveTo(this.local.dragStartPos.x, this.local.dragStartPos.y, param);
    }
    
    delete this.local.dragStartPos;
},
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// End Widget Prototype API
///////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////
// Context API
///////////////////////////////////////////////////////////////////////////////////////////////////////

var _ctxtApi = {
/**
 * 해당 페이지의 label과 id값을 가져옴
 * 
 * @param {string} pageId 값을 가져올 page id (없을 때는 현재 실행중인 페이지로 가져옴)
 * @returns {object} pageData pageId 값에 해당하는 페이지 정보
 * 
 */
getPageData: function(pageId) {
	if (!pageId) {
		pageId = this.getPage();
	}
	
	return this.File.browse('pages').find(function(pageData) {
		return pageData.id === pageId;
	});
},
 
/**
 * 특정 범위 랜덤 값 가져오기
 * 
 * @param {int} min 최소 값
 * @param {int} max 최대 값
 * 
 * @returns {int} num 랜덤 값
 * 
 */
getRandomIntInclusive: function(min, max) {
	var num = Math.floor(Math.random() * (max - min + 1)) + min;
	return num;
},

/**
 * 오디오 개별 등록
 * 
 * @param {string} type 오디오를 분류할 타입
 * @param {object} data
 *        {string} data.id 오디오를 분류할 사용자 정의 id
 *        {string} data.media 오디오 media
 *        {string} data.playOption 오디오 옵션 @nullable
 * 
 */
registerAudio: function(type, data) {
    var audioData = this.get('$audioData') || {};
    audioData[type] = audioData[type] || [];
    audioData[type].push(data);
    // audioData[type].push({
    //     id: data.id,
    //     media: data.media,
    //     playOption: data.playOption // @nullable
    // });
    
    this.set('$audioData', audioData);
},

/**
 * 데이터 테이블로 부터 오디오 등록
 * 
 * @param {array} dataTable 오디오 데이터 테이블
 * @param {type} type 오디오를 분류할 타입
 * @param {object} indexData    해당 값이 있는 컬럼의 index
 *        {string} indexData.id 오디오를 분류할 사용자 정의 id
 *        {string} indexData.media 오디오 media
 *        {string} indexData.playOption 오디오 옵션 @nullable
 * 
 */
registerAudioFromDataTable: function(dataTable, type, indexData) {
    var _this = this;
    
	dataTable.forEach(function(value) {
	    _this.registerAudio(type, [
	        value[indexData.id],
	        value[indexData.media],
	        value[indexData.playOption] // @nullable
	    ]);
	});
},

/**
 * 오디오 소스마다 위젯을 생성하여 저장해주는 함수
 */
initAudios: function() {
    var audioData = this.get('$audioData') || {};
    var audios = this.get('$audios') || {};
    
    for (var type in audioData) {
        for (var mediaData in audioData[type]) {
            if (typeof audioData[type][mediaData] !== 'function') {
                if (!audios[type]) {
                    audios[type] = {};
                }
                
                if (!audios[type][audioData[type][mediaData][0]]) {
                    audios[type][audioData[type][mediaData][0]] = this.$W('a$audio').clone();
                    audios[type][audioData[type][mediaData][0]].set('label', audios[type][audioData[type][mediaData][0]].get('label') + '_' + type + '_' + audioData[type][mediaData][0]);
                    audios[type][audioData[type][mediaData][0]].set('media', audioData[type][mediaData][1]);
                    audios[type][audioData[type][mediaData][0]].setData('loop', audioData[type][mediaData][2] === 'loop');
                }
            }
        }
    }
    
    this.set('$audios', audios);
},

/**
 * @brief 오디오를 옵션에 따라 정지시킴
 * @param {object} options 
 *        {array<string>} options.ignoreIds 중지를 예외할 오디오 위젯들의 id list
 *        {array<string>} options.types 중지시킬 오디오 위젯들의 type
 * 
 */
 stopAudio: function(options) {
    var audios = this.get('$audios');
     
    options = options || {};
    options.ignoreIds = options.ignoreIds || [];
    
    for (var type in audios) {
        if (!options.types || (options.types && Array.isArray(options.types) && options.types.indexOf(type) !== -1)) {
            for (var id in audios[type]) {
                if (!options.ignoreIds.find(function(ignoreId) {
                    return ignoreId === id;
                })) {
                    if (audios[type][id].get('state') !== 'Stop') {  // 오디오 위젯이 많아지면 state 변환 작업이 무거워지기 때문에 Stop이 아닌 상태의 오디오만
                        audios[type][id].changeState('Stop');
                    }
                }
            }
        }
    }
},

/**
 * 해당하는 id의 오디오를 찾아 반환
 * 
 * @param {string} id 등록된 오디오의 id
 * @param {string} type 오디오의 검색 범위를 해당 type으로 제한 @nullable
 * @returns {Widget || array<Widget>} 검색된 결과를 Audio Widget으로 반환 (2개 이상 검색시 배열로 반환, 결과 값이 없으면 undefined)
 */
getAudio: function(id, type) {
    var audios = this.get('$audios');
    var findAudios = [];
    
    for (var audioType in audios) {
        if (typeof type !== 'undefined') {
            if (audioType !== type) {
                continue;
            }
        }
        
        for (var audioId in audios[audioType]) {
            audioId === id && findAudios.push(audios[audioType][audioId]);
        }
    }
    
    if (findAudios.length > 0) {
        if (findAudios.length === 1) {
            return findAudios[0];
        }
        
        return findAudios;
    }
}

}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// End Context API
///////////////////////////////////////////////////////////////////////////////////////////////////////

var addWidgetMethod = function() {
    with (this) {
        for (var api in _wgtApi) {
            if (!Widget.prototype.hasOwnProperty(api)) {
                Object.defineProperty(Widget.prototype, api, {
                    value: _wgtApi[api],
                    configurable: true,
                    writable: true
                });
            }
        }
    }
}

var addContextMethod = function() {
	with (this) {
		for (var api in _ctxtApi) {
		    if (!this.hasOwnProperty(api)) {
		        this[api] = _ctxtApi[api];
		    }
		}
	}
}

apx.addEventListener('pageBubble', function(Event, ctxt) {
    if (!ctxt.isApply) {
        ctxt.isApply = true;
        
        addWidgetMethod.apply(ctxt);
        addContextMethod.apply(ctxt);
    }
    
    if (Event.target && Event.type) {
        Event.targetLabel = Event.target.get('label');
        
        var eventName = Event.type.toLowerCase().replace(/ /g, '');
        
        ('listener' in Event.target.local) &&
        (('on' + eventName) in Event.target.local.listener) &&
        typeof Event.target.local.listener['on' + eventName] === 'function' &&
        Event.target.local.listener['on' + eventName].apply(ctxt, [Event]) &&
        delete Event.target.local.listener['on' + eventName];
        
        ('listeners' in Event.target.local) &&
        (eventName in Event.target.local.listeners) &&
        Array.isArray(Event.target.local.listeners[eventName]) &&
        (Event.target.local.listeners[eventName] =
            Event.target.local.listeners[eventName]
            .filter(
                function(listener) {
                    return typeof listener === 'function' && !listener.apply(ctxt, [Event]);
                }
            )
        );
    }
});