!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function b(e,t,n){var i,o,a,u,l,f,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,s=t,u=e.apply(r,n)}function O(e){return s=e,l=setTimeout(h,t),c?b(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-s>=a}function h(){var e=p();if(j(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return m?g(n,a-(e-s)):n}(e))}function w(e){return l=void 0,d&&i?b(e):(i=o=void 0,u)}function N(){var e=p(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===l)return O(f);if(m)return l=setTimeout(h,t),b(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=S(t)||0,y(n)&&(c=!!n.leading,a=(m="maxWait"in n)?v(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),N.cancel=function(){void 0!==l&&clearTimeout(l),s=0,i=f=o=l=void 0},N.flush=function(){return void 0===l?u:w(p())},N}function y(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=u.test(e);return r||l.test(e)?f(e.slice(2),r?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),j="feedback-form-state";if(localStorage.getItem(j)){var h=localStorage.getItem(j),w=localStorage.getItem(j);console.log(JSON.parse(h).email,JSON.parse(w).message),O.elements.email.value=JSON.parse(h).email,O.elements.message.value=JSON.parse(w).message}O.addEventListener("input",n((function(e){e.preventDefault();var t={email:O.elements.email.value,message:O.elements.message.value};localStorage.setItem(j,JSON.stringify(t))}),500)),O.addEventListener("submit",(function(e){e.preventDefault();var t={email:O.elements.email.value,message:O.elements.message.value};console.log(t),O.reset(),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.af80b6ab.js.map