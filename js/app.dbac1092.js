(function(e){function t(t){for(var r,u,c=t[0],i=t[1],f=t[2],l=0,p=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(p.length)p.shift()();return a.push.apply(a,f||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6985bb13"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var f=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=f;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),o=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(o["a"]);var a=n("98c9"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],i=(n("034f"),n("2877")),f={},l=Object(i["a"])(f,u,c,!1,null,null,null),s=l.exports,p=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"content"},[e._m(0),n("h2",[e._v("COMING SOON")]),n("div",{staticClass:"countdown"},[e._v(e._s(e.time))])])])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v(" KINESIS "),n("span",[e._v("INSTITUTE")])])}],h=(n("99af"),{name:"Home",data:function(){return{time:"",launchDate:new Date("Aug 20, 2020 00:00:00").getTime()}},mounted:function(){setInterval(this.tick,1e3)},methods:{tick:function(){var e=(new Date).getTime(),t=this.launchDate-e;if(t>0){var n=Math.floor(t/864e5);n<10&&(n="0"+n);var r=Math.floor(t%864e5/36e5);r<10&&(r="0"+r);var o=Math.floor(t%36e5/6e4);o<10&&(o="0"+o);var a=Math.floor(t%6e4/1e3);a<10&&(a="0"+a),this.time="".concat(n," : ").concat(r," : ").concat(o," : ").concat(a)}}}}),b=h,m=(n("bf91"),Object(i["a"])(b,d,v,!1,null,"5b5bda83",null)),g=m.exports;r["default"].use(p["a"]);var y=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],w=new p["a"]({routes:y}),_=w;r["default"].config.productionTip=!1,r["default"].use(a["a"]),new r["default"]({router:_,render:function(e){return e(s)}}).$mount("#app")},"6b99":function(e,t,n){},"85ec":function(e,t,n){},bf91:function(e,t,n){"use strict";var r=n("6b99"),o=n.n(r);o.a}});
//# sourceMappingURL=app.dbac1092.js.map