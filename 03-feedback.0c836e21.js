!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,c=f||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,d=Math.min,g=function(){return c.Date.now()};function p(e,t,n){var r,i,a,u,l,f,s=0,c=!1,m=!1,p=!0;if("function"!=typeof e)throw new TypeError(o);function S(t){var n=r,o=i;return r=i=void 0,s=t,u=e.apply(o,n)}function O(e){return s=e,l=setTimeout(N,t),c?S(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-s>=a}function N(){var e=g();if(j(e))return h(e);l=setTimeout(N,function(e){var n=t-(e-f);return m?d(n,a-(e-s)):n}(e))}function h(e){return l=void 0,p&&r?S(e):(r=i=void 0,u)}function T(){var e=g(),n=j(e);if(r=arguments,i=this,f=e,n){if(void 0===l)return O(f);if(m)return l=setTimeout(N,t),S(f)}return void 0===l&&(l=setTimeout(N,t)),u}return t=y(t)||0,b(n)&&(c=!!n.leading,a=(m="maxWait"in n)?v(y(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=f=i=l=void 0},T.flush=function(){return void 0===l?u:h(g())},T}function b(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(b(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=b(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var f=a.test(e);return f||u.test(e)?l(e.slice(2),f?2:8):i.test(e)?NaN:+e}var S=document.querySelector(".feedback-form"),O="feedback-form-state";if(localStorage.getItem(O)){var j=localStorage.getItem(O),N=localStorage.getItem(O);console.log(JSON.parse(j).email,JSON.parse(N).message),S.elements.email.value=JSON.parse(j).email,S.elements.message.value=JSON.parse(N).message}S.addEventListener("input",(function(e){e.preventDefault();var t={email:S.elements.email.value,message:S.elements.message.value};localStorage.setItem(O,JSON.stringify(t))})),S.addEventListener("submit",(function(e){e.preventDefault();var t={email:S.elements.email.value,message:S.elements.message.value};console.log(t),S.reset(),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.0c836e21.js.map
