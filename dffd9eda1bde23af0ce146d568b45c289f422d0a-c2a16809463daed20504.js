(self.webpackChunkprimenon_github_io=self.webpackChunkprimenon_github_io||[]).push([[561],{1628:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(1883);var o=()=>r.createElement("nav",{className:"navbar"},r.createElement("ul",{className:"navbar__ul"},r.createElement("li",{className:"navbar__li"},r.createElement(a.Link,{to:"/"},"Home")),r.createElement("li",{className:"navbar__li"},r.createElement(a.Link,{to:"/about"},"About"))));var u=e=>{let{location:t,title:n,children:u}=e;const i="/"===t.pathname;let c;return c=i?r.createElement(a.Link,{to:"/",className:"header-link-home"},n):r.createElement(a.Link,{className:"header-link-home",to:"/"},n),r.createElement("div",{className:"global-wrapper","data-is-root-path":i},r.createElement("header",{className:"global-header"},c),r.createElement(o,null),r.createElement("main",null,u),r.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},9357:function(e,t,n){"use strict";var r=n(7294),a=n(1883),o=n(7896);const u=e=>{var t,n,u,i,c,l,f,s,d;let{description:m,title:p,children:v,topFlag:x}=e;const{site:b}=(0,a.useStaticQuery)("650872877"),{pathname:g}=(0,o.useLocation)(),E=m||b.siteMetadata.description,h=null===(t=b.siteMetadata)||void 0===t?void 0:t.title,y=(null===(n=b.siteMetadata)||void 0===n?void 0:n.siteUrl)+"/"+(null===(u=b.siteMetadata)||void 0===u?void 0:u.image),j=(null===(i=b.siteMetadata)||void 0===i?void 0:i.siteUrl)+g||(null===(c=b.siteMetadata)||void 0===c?void 0:c.siteUrl),w=x?"website":"article";return r.createElement(r.Fragment,null,r.createElement("title",null,p?p+" | "+h:""+h),r.createElement("meta",{name:"description",content:E}),r.createElement("meta",{property:"og:title",content:h?p+" | "+h:p}),r.createElement("meta",{property:"og:site_name",content:h}),r.createElement("meta",{property:"og:description",content:E}),r.createElement("meta",{property:"og:type",content:w}),r.createElement("meta",{property:"og:image",content:y||""}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:site",content:(null===(l=b.siteMetadata)||void 0===l||null===(f=l.social)||void 0===f?void 0:f.twitter)||""}),r.createElement("meta",{name:"twitter:creator",content:(null===(s=b.siteMetadata)||void 0===s||null===(d=s.social)||void 0===d?void 0:d.twitter)||""}),r.createElement("meta",{name:"twitter:url",content:j}),r.createElement("meta",{name:"twitter:title",content:p}),r.createElement("meta",{name:"twitter:description",content:E}),r.createElement("meta",{name:"twitter:image",content:y||""}),v)};u.defaultProps={topFlag:!1},t.Z=u},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},9932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}},2663:function(e){e.exports=function(e,t,n,r){var a=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++a]);++a<o;)n=t(n,e[a],a,e);return n}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,n){var r=n(2705),a=n(9607),o=n(2333),u=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":u&&u in Object(e)?a(e):o(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,n){var r=n(2705),a=n(9932),o=n(1469),u=n(3448),i=r?r.prototype:void 0,c=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return a(t,e)+"";if(u(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},5393:function(e,t,n){var r=n(2663),a=n(3816),o=n(8748),u=RegExp("['’]","g");e.exports=function(e){return function(t){return r(o(a(t).replace(u,"")),e,"")}}},9389:function(e,t,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),a=Object.prototype,o=a.hasOwnProperty,u=a.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(c){}var a=u.call(e);return r&&(t?e[i]=n:delete e[i]),a}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},2757:function(e){var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+a+"]",u="\\d+",i="[\\u2700-\\u27bf]",c="["+n+"]",l="[^\\ud800-\\udfff"+a+u+t+n+r+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+r+"]",m="(?:"+c+"|"+l+")",p="(?:"+d+"|"+l+")",v="(?:['’](?:d|ll|m|re|s|t|ve))?",x="(?:['’](?:D|LL|M|RE|S|T|VE))?",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",g="[\\ufe0e\\ufe0f]?",E=g+b+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,s].join("|")+")"+g+b+")*"),h="(?:"+[i,f,s].join("|")+")"+E,y=RegExp([d+"?"+c+"+"+v+"(?="+[o,d,"$"].join("|")+")",p+"+"+x+"(?="+[o,d+m,"$"].join("|")+")",d+"?"+m+"+"+v,d+"+"+x,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",u,h].join("|"),"g");e.exports=function(e){return e.match(y)||[]}},3816:function(e,t,n){var r=n(9389),a=n(9833),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=a(e))&&e.replace(o,r).replace(u,"")}},1469:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),a=n(7005);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},1804:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}},8748:function(e,t,n){var r=n(9029),a=n(3157),o=n(9833),u=n(2757);e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?a(e)?u(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=dffd9eda1bde23af0ce146d568b45c289f422d0a-c2a16809463daed20504.js.map