module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.languageTag=function(t){return a.fromString(t)};var r=new RegExp("^([a-z]{2,3})(-[a-z]{3})?(-[a-z]{4})?(-[a-z]{2}|[0-9]{3})?((?:-[a-z]{5,8})|(?:-[0-9][a-z0-9]{3}))?(-[0-9a-z](?:-[a-z0-9]{1,8})+)?$","i"),a=new(function(){function t(){this.instances=new Map}return t.prototype.fromString=function(t){var e=t.toLowerCase(),n=this.instances.get(e);return n||this.createFromString(e)},t.prototype.fromSubTags=function(t,e,n,r,a,o){function u(t){return t?"-"+t.toLowerCase():""}var s=t.toLowerCase()+u(e)+u(n)+u(r)+u(a)+u(o),c=this.instances.get(s);if(c)return c;var g=new i(t,e,n,r,a,o);return this.instances.set(s,g),g},t.prototype.createFromString=function(t){var e=r.exec(t);if(!e)throw"Invalid language tag "+t;function n(t,e){return t[e]?t[e].substr(1):void 0}var a=e[1],o=n(e,2),u=n(e,3),s=n(e,4),c=n(e,5),g=n(e,6),f=new i(a,o,u,s,c,g);return this.instances.set(t,f),f},t}()),i=function(){function t(t,e,n,r,a,i){function o(t,e){return t?e(t):void 0}function u(t){return t?"-"+t:""}this.language=t.toLowerCase(),this.extendedLanguage=o(e,function(t){return t.toLowerCase()}),this.script=o(n,function(t){return t[0].toUpperCase()+t.substr(1).toLowerCase()}),this.region=o(r,function(t){return t.toUpperCase()}),this.variant=o(a,function(t){return t.toLowerCase()}),this.extension=o(i,function(t){return t.toLowerCase()}),this.tag=t.toLowerCase()+u(this.extendedLanguage)+u(this.script)+u(this.region)+u(this.variant)+u(this.extension)}return t.prototype.matches=function(t){return this.language===t.language},t.prototype.matchesOneOf=function(t){var e=this;return void 0!==t.find(function(t){return e.matches(t)})},t.prototype.parent=function(){return this.extension?this.withoutExtension():this.variant?this.withoutVariant():this.region?this.withoutRegion():this.script?this.withoutScript():this.extendedLanguage?this.withoutExtendedLanguage():void 0},t.prototype.equality=function(t){if(this.language!==t.language)return 0;var e=32+(this.extension||t.extension?1:0)+(this.variant||t.variant?2:0)+(this.region||t.region?4:0)+(this.script||t.script?8:0)+(this.extendedLanguage||t.extendedLanguage?16:0);return(32+(this.extension===t.extension?1:0)+(this.variant===t.variant?2:0)+(this.region===t.region?4:0)+(this.script===t.script?8:0)+(this.extendedLanguage===t.extendedLanguage?16:0))/e},t.prototype.pickBestMatching=function(t){var e=this,n={equality:0};return t.forEach(function(t){var r=e.equality(t);r>n.equality&&(n={equality:r,other:t})}),n.other},t.prototype.withoutExtension=function(){return a.fromSubTags(this.language,this.extendedLanguage,this.script,this.region,this.variant)},t.prototype.withoutVariant=function(){return a.fromSubTags(this.language,this.extendedLanguage,this.script,this.region)},t.prototype.withoutRegion=function(){return a.fromSubTags(this.language,this.extendedLanguage,this.script)},t.prototype.withoutScript=function(){return a.fromSubTags(this.language,this.extendedLanguage)},t.prototype.withoutExtendedLanguage=function(){return a.fromSubTags(this.language)},t}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(2);var r=n(0);e.languageTag=r.languageTag;var a=n(3);e.pickPreferredLanguage=a.pickPreferredLanguage,e.preferredLanguage=a.preferredLanguage,e.setPreferredLanguage=a.setPreferredLanguage,e.selectPreferredLanguage=a.selectPreferredLanguage,e.translate=a.translate;var i=n(4);e.formats=i.formats,e.setFormats=i.setFormats,e.addFormats=i.addFormats,e.formatObject=i.formatObject,e.format=i.format,e.plural=i.plural,e.select=i.select,e.selectObject=i.selectObject},function(t,e){t.exports=require("core-js")},function(t,e,n){"use strict";var r,a=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);function u(t){return"function"==typeof t?t:function(e){return t}}var s=function(){return function(t,e){this.language=t,this.messages=e}}(),c=function(){function t(){this.messageCache=void 0}return t.prototype.messagesFor=function(t){if(this.messageCache&&this.messageCache.language===t)return this.messageCache.messages;var e=this.buildMessages(t);return this.messageCache=new s(t,e),e},t.prototype.messages=function(){return this.messagesFor(l())},t}(),g=function(t){function e(e,n){var r=t.call(this)||this;return r.base=e,r.extension=n,r}return a(e,t),e.prototype.buildMessages=function(t){return i({},this.base.messagesFor(t),this.extension.messagesFor(t))},e}(c),f=function(t){function e(e,n){void 0===n&&(n=new Map);var r=t.call(this)||this;return r.defaultMessages=e,r.translations=n,r.supportedLanguages=Array.from(n.keys()),r}return a(e,t),e.prototype.partiallySupporting=function(t,n){var r=new Map(this.translations.entries()),a=function(t){return"string"==typeof t?o.languageTag(t):t}(t);return r.set(a,u(n)),new e(this.defaultMessages,r)},e.prototype.supporting=function(t,e){return this.partiallySupporting(t,e)},e.prototype.extending=function(t){return new g(t,this)},e.prototype.buildMessages=function(t){var e=t.pickBestMatching(this.supportedLanguages);return this.buildRecursive(this.defaultMessages(t),t,e)},e.prototype.buildRecursive=function(t,e,n){if(n){var r=this.translations.get(n);if(r){var a=this.buildRecursive(t,e,n.parent());return i({},a,r(e))}return this.buildRecursive(t,e,n.parent())}return t},e}(c);function p(t,e){return e.find(function(e){return e.matchesOneOf(t)})||e[0]}e.translate=function(t){return new f(u(t))},e.pickPreferredLanguage=p;var h="undefined"!=typeof navigator&&navigator.language?o.languageTag(navigator.language):void 0;function l(){return h}function d(t){h=t}e.preferredLanguage=l,e.setPreferredLanguage=d;var v="undefined"!=typeof navigator?navigator.languages?navigator.languages:navigator.language?[navigator.language]:["en"]:["en"];e.selectPreferredLanguage=function(t,e){void 0===e&&(e=v),d(p(t.map(function(t){return o.languageTag(t)}),e.map(function(t){return o.languageTag(t)})))},e.mergeRTL=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(1===e.length)return t.extending(e[0]);var r=e.reduceRight(function(t,e){return new g(t,e)},e[0]);return t.extending(r)}},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=a(n(5));function o(t){return{minimumFractionDigits:t,maximumFractionDigits:t}}var u={number:{"#":o(0),"#.#":o(1),"#.##":o(2),"#.###":o(3),"#.####":o(4),"#.#####":o(5)}};function s(){return u}function c(t,e,n){return void 0===n&&(n=s()),new i.default(e,t.tag,n).format}function g(t,e,n){return void 0===n&&(n=s()),function(r,a,o,u,s){return new i.default(e,t.tag,n).format({1:r,2:a,3:o,4:u,5:s})}}function f(t,e,n){for(var r={},a=0,i=Object.keys(n);a<i.length;a++){var o=i[a],u=n[o];u&&(r[o]=c(t,u))}return function(t){var n=e(t),a=r[n],i=a||r.other;if(i)return i(t);throw'Selection "'+n+'" does not match any of the available options'}}e.formats=s,e.setFormats=function(t){u=t},e.addFormats=function(t){for(var e=0,n=["number","time","date"];e<n.length;e++){var a=n[e];u.hasOwnProperty(a)?u[a]=r({},u[a],t[a]):u[a]=t[a]}},e.formatObject=c,e.format=g,e.plural=function(t,e){var n=g(t,"{1, plural, "+(e.zero?"=0 {zero} ":"")+(e.one?"one {one} ":"")+(e.two?"two {two} ":"")+(e.few?"few {few} ":"")+(e.many?"many {many} ":"")+"other {other}}");return function(t){switch(n(t)){case"zero":return e.zero;case"one":return e.one;case"two":return e.two;case"few":return e.few(t);case"many":return e.many(t);default:return e.other(t)}}},e.select=function(t,e){return f(t,function(t){return t},e)},e.selectObject=f},function(t,e){t.exports=require("intl-messageformat")}]);