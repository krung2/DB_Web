(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c6023b5b"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"af8006de"}[t]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],f.parentNode.removeChild(f),n(i)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21bb":function(t,e,n){"use strict";n("2dad")},"2dad":function(t,e,n){},4360:function(t,e,n){"use strict";var r=n("1da1"),o=(n("99af"),n("96cf"),n("2b0e")),a=n("2f62"),i=n("bc3a"),s=n.n(i);o["a"].use(a["a"]),e["a"]=new a["a"].Store({state:{posts:{},title:null,content:null,check:!1,sort:!1,token:window.localStorage.getItem("token")},mutations:{getPosts:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("http://34.64.75.208:8004/post?token=".concat(e.token));case 2:e.posts=t.sent.data.data;case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),postPost:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("http://34.64.75.208:8004/post",{title:e.title,content:e.content});case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),addLike:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("http://34.64.75.208:8004/like/".concat(n,"?token=").concat(e.token));case 2:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),setTitle:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.title=n;case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),setContent:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.content=n;case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),setToken:function(t,e){t.token=e},setCheck:function(t){t.check=!t.check},setSort:function(t){t.sort=!t.sort,!0===t.sort?t.posts.sort((function(t,e){return e.likeCount-t.likeCount})):t.posts.sort((function(t,e){return t.createdAt>e.createdAt?-1:t.createdAt<e.createdAt?1:0}))}},actions:{getPosts:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,n("getPosts");case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),postPost:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,n("postPost");case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),addLike:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.commit,r("addLike",n);case 2:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},modules:{}})},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav",attrs:{id:"nav"}},[t._m(0),n("div",{staticClass:"nav-text"},[n("router-link",{attrs:{to:"/"}},[t._v("홈")]),t._v(" | "),n("router-link",{attrs:{to:"/write"}},[t._v("글쓰기")])],1)]),n("router-view")],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-title"},[t._v(" DGSW "),n("div",{staticClass:"title-small"},[t._v("inside")])])}],i=(n("5c0b"),n("2877")),s={},c=Object(i["a"])(s,o,a,!1,null,null,null),u=c.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"card-list"},t._l(t.posts,(function(t){return n("div",{key:t.idx},[n("Card",{attrs:{post:t}})],1)})),0),n("div",{staticClass:"profile"},[n("Profile",{attrs:{message:t.sort?"좋아요순":"최근순",isLogin:!0,isFilter:!0},on:{clickFunc:t.changeSort}})],1)])},f=[],d=n("1da1"),m=(n("96cf"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"text-container"},[r("div",{staticClass:"main-text"},[t._v(t._s(t.post.title))]),t.post.isExistLike?r("img",{staticClass:"main-like",attrs:{src:n("709e")},on:{click:function(e){return t.addLike(t.post.idx)}}}):r("img",{staticClass:"main-like",attrs:{src:n("86f1")},on:{click:function(e){return t.alertLike()}}}),r("div",{staticClass:"main-num"},[t._v(t._s(t.post.likeCount))])]),r("div",{staticClass:"sub-text"},[t._v(" "+t._s(t.post.name)+" | "+t._s(t.post.createdAt.slice(0,10))+" ")]),r("div",{staticClass:"content-container"},[t._v(" "+t._s(t.post.content)+" ")])])}),v=[],h=n("4360"),g=void 0,b={name:"Card",props:["post"],computed:{isLikeFunc:function(){return g.post.isExistLike},likeFunc:function(){return g.post.likeCount}},methods:{addLike:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h["a"].dispatch("addLike",t);case 3:n.next=10;break;case 5:return n.prev=5,n.t0=n["catch"](0),console.log(n.t0),alert("오류 발생"),n.abrupt("return");case 10:e.post.isExistLike=!1,e.post.likeCount++;case 12:case"end":return n.stop()}}),n,null,[[0,5]])})))()},alertLike:function(){return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:alert("좋아요는 하루에 한번만 누를 수 있습니다"),window.location.reload();case 2:case"end":return t.stop()}}),t)})))()}}},k=b,w=(n("ff38"),Object(i["a"])(k,m,v,!1,null,null,null)),x=w.exports,y=n("5c5b"),_=n("ec26"),C={name:"Home",components:{Card:x,Profile:y["a"]},computed:{sort:function(){return h["a"].state.sort},posts:function(){return h["a"].state.posts}},created:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h["a"].dispatch("getPosts");case 2:h["a"].commit("setToken",localStorage.getItem("token")),null===h["a"].state.token&&(localStorage.setItem("token",Object(_["a"])()),h["a"].commit("setToken",localStorage.getItem("token")));case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),methods:{changeSort:function(){h["a"].commit("setSort")}}},O=C,j=(n("21bb"),Object(i["a"])(O,p,f,!1,null,null,null)),R=j.exports;r["a"].use(l["a"]);var P=[{path:"/",name:"Home",component:R},{path:"/write",name:"Write",component:function(){return n.e("about").then(n.bind(null,"ed6a"))}}],S=new l["a"]({mode:"history",base:"/",routes:P}),L=S;r["a"].config.productionTip=!1,new r["a"]({router:L,store:h["a"],render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5c5b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile-container"},[n("div",{staticClass:"login-button",on:{click:function(e){return t.clickFunc()}}},[t._v(t._s(t.message))])])},o=[],a={name:"Profile",props:{message:String,isLogin:Boolean,isFilter:Boolean},methods:{clickFunc:function(){this.$emit("clickFunc")}}},i=a,s=(n("e348"),n("2877")),c=Object(s["a"])(i,r,o,!1,null,null,null);e["a"]=c.exports},"709e":function(t,e,n){t.exports=n.p+"img/thumbs-o-up.9194c195.svg"},"86f1":function(t,e,n){t.exports=n.p+"img/thumbs-up.161df2ab.svg"},"9c0c":function(t,e,n){},b85b:function(t,e,n){},bbc1:function(t,e,n){},e348:function(t,e,n){"use strict";n("b85b")},ff38:function(t,e,n){"use strict";n("bbc1")}});
//# sourceMappingURL=app.59b4e8c7.js.map