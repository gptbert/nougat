(window.webpackJsonp=window.webpackJsonp||[]).push([[9,11,16],{354:function(t,e,n){var r=n(358).has;t.exports=function(t){return r(t),t}},356:function(t,e,n){var r=n(4),o=n(415),c=n(358),l=c.Map,f=c.proto,d=r(f.forEach),h=r(f.entries),v=h(new l).next;t.exports=function(map,t,e){return e?o(h(map),(function(e){return t(e[1],e[0])}),v):d(map,t)}},358:function(t,e,n){var r=n(4),o=Map.prototype;t.exports={Map:Map,set:r(o.set),get:r(o.get),has:r(o.has),remove:r(o.delete),proto:o}},359:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return d}));var r=n(375),o=n(10),c=Object(o.h)("v-card__actions"),l=Object(o.h)("v-card__subtitle"),f=Object(o.h)("v-card__text"),d=Object(o.h)("v-card__title");r.a},363:function(t,e,n){"use strict";var r=n(376);e.a=r.a},377:function(t,e,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("cd9e67ea",content,!0,{sourceMap:!1})},378:function(t,e,n){"use strict";n.r(e);var r=n(1289),o=n(376),c=n(685),l=n(1287),f=n(458),d={name:"MarkdownDisplay",components:{MathpixMarkdown:f.MathpixMarkdown,MathpixLoader:f.MathpixLoader},props:{source:String,loading:Boolean},data:function(){return{renderMarkdown:!0}}},h=(n(410),n(74)),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return t.loading?e(c.a,{staticClass:"parent",attrs:{outlined:""}},[e(l.a,{staticClass:"mx-4",attrs:{type:"article, sentences, text@2, sentences, paragraph, sentences, text, paragraph, text, table-thead, table-row-divider@3, table-row, table-heading, text"}})],1):t.source?e(c.a,{staticClass:"parent overflow-y-auto",attrs:{outlined:"","max-height":"800"}},[e(r.a,{staticClass:"upright pa-1",attrs:{tile:"",icon:""},on:{click:function(e){t.renderMarkdown=!t.renderMarkdown}}},[t.renderMarkdown?e(o.a,{attrs:{large:""}},[t._v("mdi-raw")]):e(o.a,{attrs:{large:""}},[t._v("mdi-raw-off")])],1),t._v(" "),t.renderMarkdown?e("MathpixLoader",{staticClass:"serif"},[e("MathpixMarkdown",{attrs:{text:t.source}})],1):e("pre",{attrs:{id:"markdown"}},[t._v(t._s(t.source)+"\n    ")])],1):t._e()}),[],!1,null,null,null);e.default=component.exports},388:function(t,e,n){n(412)},389:function(t,e,n){"use strict";var r=n(2),o=n(354),c=n(358).remove;r({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var t,e=o(this),n=!0,r=0,l=arguments.length;r<l;r++)t=c(e,arguments[r]),n=n&&t;return!!n}})},390:function(t,e,n){"use strict";var r=n(2),o=n(73),c=n(354),l=n(356);r({target:"Map",proto:!0,real:!0,forced:!0},{every:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0);return!1!==l(map,(function(t,n){if(!e(t,n,map))return!1}),!0)}})},391:function(t,e,n){"use strict";var r=n(2),o=n(73),c=n(354),l=n(358),f=n(356),d=l.Map,h=l.set;r({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),n=new d;return f(map,(function(t,r){e(t,r,map)&&h(n,r,t)})),n}})},392:function(t,e,n){"use strict";var r=n(2),o=n(73),c=n(354),l=n(356);r({target:"Map",proto:!0,real:!0,forced:!0},{find:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),n=l(map,(function(t,n){if(e(t,n,map))return{value:t}}),!0);return n&&n.value}})},393:function(t,e,n){"use strict";var r=n(2),o=n(73),c=n(354),l=n(356);r({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),n=l(map,(function(t,n){if(e(t,n,map))return{key:n}}),!0);return n&&n.key}})},394:function(t,e,n){"use strict";var r=n(2),o=n(416),c=n(354),l=n(356);r({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(t){return!0===l(c(this),(function(e){if(o(e,t))return!0}),!0)}})},395:function(t,e,n){"use strict";var r=n(2),o=n(354),c=n(356);r({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(t){var e=c(o(this),(function(e,n){if(e===t)return{key:n}}),!0);return e&&e.key}})},396:function(t,e,n){"use strict";var r=n(2),o=n(73),c=n(354),l=n(358),f=n(356),d=l.Map,h=l.set;r({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),n=new d;return f(map,(function(t,r){h(n,e(t,r,map),t)})),n}})},397:function(t,e,n){"use strict";var r=n(2),o=n(73),c=n(354),l=n(358),f=n(356),d=l.Map,h=l.set;r({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),n=new d;return f(map,(function(t,r){h(n,r,e(t,r,map))})),n}})},398:function(t,e,n){"use strict";var r=n(2),o=n(354),c=n(161),l=n(358).set;r({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(t){for(var map=o(this),e=arguments.length,i=0;i<e;)c(arguments[i++],(function(t,e){l(map,t,e)}),{AS_ENTRIES:!0});return map}})},399:function(t,e,n){"use strict";var r=n(2),o=n(43),c=n(354),l=n(356),f=TypeError;r({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(t){var map=c(this),e=arguments.length<2,n=e?void 0:arguments[1];if(o(t),l(map,(function(r,o){e?(e=!1,n=r):n=t(n,r,o,map)})),e)throw f("Reduce of empty map with no initial value");return n}})},400:function(t,e,n){"use strict";var r=n(2),o=n(73),c=n(354),l=n(356);r({target:"Map",proto:!0,real:!0,forced:!0},{some:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0);return!0===l(map,(function(t,n){if(e(t,n,map))return!0}),!0)}})},401:function(t,e,n){"use strict";var r=n(2),o=n(43),c=n(354),l=n(358),f=TypeError,d=l.get,h=l.has,v=l.set;r({target:"Map",proto:!0,real:!0,forced:!0},{update:function(t,e){var map=c(this),n=arguments.length;o(e);var r=h(map,t);if(!r&&n<3)throw f("Updating absent value");var l=r?d(map,t):o(n>2?arguments[2]:void 0)(t,map);return v(map,t,e(l,t,map)),map}})},404:function(t,e,n){"use strict";var r={inserted:function(t,e,n){var r=e.value,o=e.options||{passive:!0};window.addEventListener("resize",r,o),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:r,options:o},e.modifiers&&e.modifiers.quiet||r()},unbind:function(t,e,n){var r;if(null===(r=t._onResize)||void 0===r?void 0:r[n.context._uid]){var o=t._onResize[n.context._uid],c=o.callback,l=o.options;window.removeEventListener("resize",c,l),delete t._onResize[n.context._uid]}}};e.a=r},405:function(t,e,n){var content=n(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("7656abb5",content,!0,{sourceMap:!1})},410:function(t,e,n){"use strict";n(377)},411:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,'@font-face{font-family:"Computer Modern";src:"assets/cmunss.otf"}@font-face{font-family:"Computer Modern";font-weight:700;src:"assets/cmunsx.otf"}@font-face{font-family:"Computer Modern";font-style:italic,oblique;src:"assets/cmunsi.otf"}@font-face{font-family:"Computer Modern";font-style:italic,oblique;font-weight:700;src:"assets/cmunbxo.otf"}.parent{height:100%;width:100%}.upright{float:right;position:sticky;right:5px;top:5px;z-index:5}#markdown{word-wrap:break-word;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap}.serif *{font-family:"Computer Modern",serif}',""]),r.locals={},t.exports=r},412:function(t,e,n){"use strict";n(413)("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n(414))},413:function(t,e,n){"use strict";var r=n(2),o=n(7),c=n(4),l=n(108),f=n(29),d=n(240),h=n(161),v=n(162),m=n(6),y=n(51),w=n(21),x=n(3),O=n(164),_=n(88),k=n(168);t.exports=function(t,e,n){var j=-1!==t.indexOf("Map"),M=-1!==t.indexOf("Weak"),C=j?"set":"add",S=o[t],$=S&&S.prototype,E=S,A={},P=function(t){var e=c($[t]);f($,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(M&&!w(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return M&&!w(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(M&&!w(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})};if(l(t,!m(S)||!(M||$.forEach&&!x((function(){(new S).entries().next()})))))E=n.getConstructor(e,t,j,C),d.enable();else if(l(t,!0)){var I=new E,z=I[C](M?{}:-0,1)!=I,V=x((function(){I.has(1)})),D=O((function(t){new S(t)})),T=!M&&x((function(){for(var t=new S,e=5;e--;)t[C](e,e);return!t.has(-0)}));D||((E=e((function(t,e){v(t,$);var n=k(new S,t,E);return y(e)||h(e,n[C],{that:n,AS_ENTRIES:j}),n}))).prototype=$,$.constructor=E),(V||T)&&(P("delete"),P("has"),j&&P("get")),(T||z)&&P(C),M&&$.clear&&delete $.clear}return A[t]=E,r({global:!0,constructor:!0,forced:E!=S},A),_(E,t),M||n.setStrong(E,t,j),E}},414:function(t,e,n){"use strict";var r=n(67),o=n(87),c=n(242),l=n(73),f=n(162),d=n(51),h=n(161),v=n(165),m=n(166),y=n(167),w=n(12),x=n(240).fastKey,O=n(53),_=O.set,k=O.getterFor;t.exports={getConstructor:function(t,e,n,v){var m=t((function(t,o){f(t,y),_(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),w||(t.size=0),d(o)||h(o,t[v],{that:t,AS_ENTRIES:n})})),y=m.prototype,O=k(e),j=function(t,e,n){var r,o,c=O(t),l=M(t,e);return l?l.value=n:(c.last=l={index:o=x(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=l),r&&(r.next=l),w?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},M=function(t,e){var n,r=O(t),o=x(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(y,{clear:function(){for(var t=O(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,w?t.size=0:this.size=0},delete:function(t){var e=this,n=O(e),r=M(e,t);if(r){var o=r.next,c=r.previous;delete n.index[r.index],r.removed=!0,c&&(c.next=o),o&&(o.previous=c),n.first==r&&(n.first=o),n.last==r&&(n.last=c),w?n.size--:e.size--}return!!r},forEach:function(t){for(var e,n=O(this),r=l(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!M(this,t)}}),c(y,n?{get:function(t){var e=M(this,t);return e&&e.value},set:function(t,e){return j(this,0===t?0:t,e)}}:{add:function(t){return j(this,t=0===t?0:t,t)}}),w&&o(y,"size",{configurable:!0,get:function(){return O(this).size}}),m},setStrong:function(t,e,n){var r=e+" Iterator",o=k(e),c=k(r);v(t,e,(function(t,e){_(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?m("keys"==e?n.key:"values"==e?n.value:[n.key,n.value],!1):(t.target=void 0,m(void 0,!0))}),n?"entries":"values",!n,!0),y(e)}}},415:function(t,e,n){var r=n(9);t.exports=function(t,e,n){for(var o,c,l=n||t.next;!(o=r(l,t)).done;)if(void 0!==(c=e(o.value)))return c}},416:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},417:function(t,e,n){"use strict";n(22),n(26),n(27),n(5),n(38),n(25),n(39);var r=n(11),o=(n(159),n(418),n(372)),c=n(160),l=n(373),f=n(158);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(f.a)(o.a,c.a,l.a).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var data=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",data)},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}})},418:function(t,e,n){var content=n(419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("f85713f8",content,!0,{sourceMap:!1})},419:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".theme--light.v-overlay{color:rgba(0,0,0,.87)}.theme--dark.v-overlay{color:#fff}.v-overlay{align-items:center;border-radius:inherit;bottom:0;display:flex;justify-content:center;left:0;pointer-events:none;position:fixed;right:0;top:0;transition:.3s cubic-bezier(.25,.8,.5,1),z-index 1ms}.v-overlay__content{position:relative}.v-overlay__scrim{border-radius:inherit;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;transition:inherit;width:100%;will-change:opacity}.v-overlay--absolute{position:absolute}.v-overlay--active{pointer-events:auto}",""]),r.locals={},t.exports=r},431:function(t,e,n){"use strict";n.r(e);var r=n(375),o=n(353),c=n(376),l=n(417),f=n(541),d=n(685),h=n(684),v=n(686),m=(n(28),n(18)),y=(n(86),n(5),{name:"ExampleCarousel",data:function(){return{model:0,items:[{url:"https://ai.facebook.com/research/publications/neural-attentive-circuits/",markdown:null,alt:"source",name:"8548088e035e4da45280494722a1f1fe",title:"Neural Attentive Circuits"},{url:"https://ai.facebook.com/research/publications/using-bifurcations-for-diversity-in-differentiable-games/",markdown:null,alt:"source",name:"4f4c5fa5cd62911d4967e9f5c48919f9",title:"Using Bifurcations for Diversity in Differentiable Games"},{url:"https://ai.facebook.com/research/publications/learning-optimal-representations-with-the-decodable-information-bottleneck/",markdown:null,name:"a59cd613b2dcd0c35e30c1cb8559cf59",alt:"source",title:"Learning Optimal Representations with the Decodable Information Bottleneck"},{url:"https://ai.facebook.com/research/publications/on-ranking-via-sorting-by-estimated-expected-utility/",markdown:null,alt:"source",name:"972b97320277bd125da8590cebaebe3c",title:"On ranking via sorting by estimated expected utility"},{url:"https://ai.facebook.com/research/publications/llama-open-and-efficient-foundation-language-models/",markdown:null,alt:"source",name:"db32c3ed9b26866af7ff6522bfcd9ec8",title:"LLaMA: Open and Efficient Foundation Language Models"},{url:"https://ai.facebook.com/research/publications/self-supervised-correspondence-estimation-via-multiview-registration/",markdown:null,alt:"source",name:"04f0a2d06e7016a334c49abb7ae2eea6",title:"Self-supervised Correspondence Estimation via Multiview Registration"},{url:"https://ai.facebook.com/research/publications/the-curious-case-of-absolute-position-embeddings/",markdown:null,alt:"source",name:"4eabc2fd679088087777aca7e6f41b97",title:"The Curious Case of Absolute Position Embeddings"}]}},methods:{emit:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$emit("loading",!0),void 0===t.paper){e.next=8;break}if(null!==t.paper.markdown){e.next=7;break}return e.next=5,t.loadFile("/examples/".concat(t.paper.name,"/doc.mmd"));case 5:t.paper.markdown=e.sent,t.$emit("loading",!1);case 7:t.$emit("change",t.paper);case 8:case"end":return e.stop()}}),e)})))()},loadFile:function(t){return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.text();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))()}},computed:{paper:{get:function(){return void 0!==this.model?this.items[this.model]:void 0},set:function(t){this.model=t}}},mounted:function(){this.emit()}}),w=(n(450),n(74)),component=Object(w.a)(y,(function(){var t=this,e=t._self._c;return e(d.a,{staticClass:"mx-auto"},[e(h.a,{staticClass:"pa-4",attrs:{"show-arrows":""},on:{change:t.emit},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.items,(function(n,h){return e(v.a,{key:h,scopedSlots:t._u([{key:"default",fn:function(h){var v=h.active,m=h.toggle;return[e(o.a,[e(d.a,{attrs:{"max-width":"200"}},[e(r.a,{staticClass:"my-4 mx-auto",attrs:{height:"141",width:"100",img:"/examples/".concat(n.name,"/thumb.jpg")},on:{click:m}},[e(f.a,{attrs:{justify:"center"}},[e(l.a,{attrs:{absolute:"",opacity:.3,value:v,color:"success"}})],1)],1),t._v(" "),e("strong",{staticClass:"text-wrap center-text"},[t._v(t._s(n.title))]),e("br"),t._v(" "),e(c.a,{staticClass:"mb-1 pr-1",attrs:{small:""}},[t._v("mdi-open-in-new")]),e("a",{attrs:{href:n.url,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(n.alt||n.name)+"\n          ")])],1)],1)]}}],null,!0)})})),1)],1)}),[],!1,null,null,null);e.default=component.exports},444:function(t,e,n){n(2)({target:"Math",stat:!0},{sign:n(246)})},445:function(t,e,n){var content=n(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("d67becdc",content,!0,{sourceMap:!1})},446:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}",""]),r.locals={},t.exports=r},447:function(t,e,n){"use strict";var r=n(2),o=n(89).findIndex,c=n(109),l="findIndex",f=!0;l in[]&&Array(1)[l]((function(){f=!1})),r({target:"Array",proto:!0,forced:f},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},448:function(t,e,n){var content=n(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("7bc1a860",content,!0,{sourceMap:!1})},449:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".v-item-group{flex:0 1 auto;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}",""]),r.locals={},t.exports=r},450:function(t,e,n){"use strict";n(405)},451:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".center-text{text-align:center}",""]),r.locals={},t.exports=r},473:function(t,e){},474:function(t,e){},475:function(t,e){},541:function(t,e,n){"use strict";n(26),n(27),n(38),n(39);var r=n(11),o=(n(5),n(63),n(64),n(32),n(22),n(23),n(47),n(388),n(41),n(389),n(390),n(391),n(392),n(393),n(394),n(395),n(396),n(397),n(398),n(399),n(400),n(401),n(42),n(25),n(241),n(0)),c=n(163),l=n(10);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return h.reduce((function(n,r){return n[t+Object(l.u)(r)]=e(),n}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},w=m("align",(function(){return{type:String,default:null,validator:y}})),x=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},O=m("justify",(function(){return{type:String,default:null,validator:x}})),_=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},k=m("alignContent",(function(){return{type:String,default:null,validator:_}})),j={align:Object.keys(w),justify:Object.keys(O),alignContent:Object.keys(k)},M={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var r=M[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var S=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},w),{},{justify:{type:String,default:null,validator:x}},O),{},{alignContent:{type:String,default:null,validator:_}},k),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=S.get(l);if(!d){var h,v;for(v in d=[],j)j[v].forEach((function(t){var e=n[t],r=C(v,t,e);r&&d.push(r)}));d.push((h={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(h,"align-".concat(n.align),n.align),Object(r.a)(h,"justify-".concat(n.justify),n.justify),Object(r.a)(h,"align-content-".concat(n.alignContent),n.alignContent),h)),S.set(l,d)}return t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},558:function(t,e,n){"use strict";n.r(e);var r=n(359),o=n(353),c=n(378),l=n(431),f={name:"Examples",components:{MarkdownDisplay:c.default,ExampleCarousel:l.default},data:function(){return{source:null,loading:!0}},methods:{showExample:function(t){void 0!==t&&(this.source=t.markdown),this.loading=!1}}},d=n(74),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e(o.a,[e(r.b,[t._v("Example Papers")]),t._v(" "),e("ExampleCarousel",{on:{change:t.showExample,loading:function(e){return t.loading=e}}}),t._v(" "),e("MarkdownDisplay",{attrs:{loading:t.loading,source:t.source}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ExampleCarousel:n(431).default,MarkdownDisplay:n(378).default})},684:function(t,e,n){"use strict";n(22),n(26),n(27),n(5),n(38),n(25),n(39),n(28),n(52),n(41),n(23),n(54),n(68),n(42);var r=n(11),o=(n(444),n(63),n(32),n(46),n(445),n(363)),c=n(432),l=(n(159),n(245),n(239),n(447),n(448),n(0)),f=n(10),d=l.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:f.i}}}),h=n(457),v=n(160),m=n(158),y=n(40);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var x=Object(m.a)(d,h.a,v.a).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,n){return t.toggleMethod(t.getValue(e,n))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.valueComparator(t.internalValue,e)};var e=this.internalValue;return Array.isArray(e)?function(n){return e.some((function(e){return t.valueComparator(e,n)}))}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(y.c)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,i){return void 0===t.value?i:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,n=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),n=this.getValue(t,e);if(this.items.splice(e,1),!(this.selectedValues.indexOf(n)<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var n=e.find((function(t){return!t.disabled}));if(n){var r=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,r))}}},updateMultiple:function(t){var e=this,n=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),r=n.findIndex((function(n){return e.valueComparator(n,t)}));this.mandatory&&r>-1&&n.length-1<1||null!=this.max&&r<0&&n.length+1>this.max||(r>-1?n.splice(r,1):n.push(t),this.internalValue=n)},updateSingle:function(t){var e=this.valueComparator(this.internalValue,t);this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}}),O=(x.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),l.default.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,n=t.width,r=t.name;if(t.mobileBreakpoint===this.mobileBreakpoint)return e;var o=parseInt(this.mobileBreakpoint,10);return!isNaN(o)?n<o:r===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(y.d)("mobile-break-point","mobile-breakpoint",this)}})),_=n(404),k=function(t){var e=t.touchstartX,n=t.touchendX,r=t.touchstartY,o=t.touchendY;t.offsetX=n-e,t.offsetY=o-r,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&n<e-16&&t.left(t),t.right&&n>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&o<r-16&&t.up(t),t.down&&o>r+16&&t.down(t))};function j(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return function(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}(t,e)},touchend:function(t){return function(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),k(e)}(t,e)},touchmove:function(t){return function(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}(t,e)}}}var M={inserted:function(t,e,n){var r=e.value,o=r.parent?t.parentElement:t,c=r.options||{passive:!0};if(o){var l=j(e.value);o._touchHandlers=Object(o._touchHandlers),o._touchHandlers[n.context._uid]=l,Object(f.q)(l).forEach((function(t){o.addEventListener(t,l[t],c)}))}},unbind:function(t,e,n){var r=e.value.parent?t.parentElement:t;if(r&&r._touchHandlers){var o=r._touchHandlers[n.context._uid];Object(f.q)(o).forEach((function(t){r.removeEventListener(t,o[t])})),delete r._touchHandlers[n.context._uid]}}};function C(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function A(t){var e=Math.abs(t);return Math.sign(t)*(e/((1/.501-2)*(1-e)+1))}function P(t,e,n,r){var o=t.clientWidth,c=n?e.content-t.offsetLeft-o:t.offsetLeft;n&&(r=-r);var l=e.wrapper+r,f=o+c,d=.4*o;return c<=r?r=Math.max(c-d,0):l<=f&&(r=Math.min(r-(l-f-d),e.content-e.wrapper)),n?-r:r}var I=Object(m.a)(x,O).extend({name:"base-slide-group",directives:{Resize:_.a,Touch:M},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"==typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!=typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return E(E({},x.options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,content=t.content,e=t.wrapper;return content>Math.abs(this.scrollOffset)+e},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$vuetify.rtl&&(t=-t);var e=t<=0?A(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+A(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform="translateX(".concat(e,"px)")}},mounted:function(){var t=this;if("undefined"!=typeof ResizeObserver){var e=new ResizeObserver((function(){t.onResize()}));e.observe(this.$el),e.observe(this.$refs.content),this.$on("hook:destroyed",(function(){e.disconnect()}))}else{var n=0;this.$on("hook:beforeUpdate",(function(){var e;n=((null===(e=t.$refs.content)||void 0===e?void 0:e.children)||[]).length})),this.$on("hook:updated",(function(){var e;n!==((null===(e=t.$refs.content)||void 0===e?void 0:e.children)||[]).length&&t.setWidths()}))}},methods:{onScroll:function(){this.$refs.wrapper.scrollLeft=0},onFocusin:function(t){if(this.isOverflowing){var e,n=C(Object(f.f)(t));try{for(n.s();!(e=n.n()).done;){var r,o=e.value,c=C(this.items);try{for(c.s();!(r=c.n()).done;){var l=r.value;if(l.$el===o)return void(this.scrollOffset=P(l.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))}}catch(t){c.e(t)}finally{c.f()}}}catch(t){n.e(t)}finally{n.f()}}},genNext:function(){var t=this,slot=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[slot])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var n="".concat(t[0].toUpperCase()).concat(t.slice(1)),r=this["has".concat(n)];return this.showArrows||r?this.$createElement(o.a,{props:{disabled:!r}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,slot=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[slot])},genTransition:function(t){return this.$createElement(c.b,[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset:function(t,e,n,r){var o=n?-1:1,c=o*r+("prev"===t?-1:1)*e.wrapper;return o*Math.max(Math.min(c,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var content=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,content.style.setProperty("transition","none"),content.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,n=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(n),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,content=t.content,e=t.wrapper,n=content.clientWidth-e.clientWidth;content.style.setProperty("transition",null),content.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-n&&(this.scrollOffset=-n):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=n&&(this.scrollOffset=n),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=function(t,e,n){var r=t.offsetLeft,o=t.clientWidth;if(n){var c=e.content-r-o/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,c))}var l=r+o/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,l))}(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=P(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){if(!t._isDestroyed){var e=t.$refs,content=e.content,n=e.wrapper;t.widths={content:content?content.clientWidth:0,wrapper:n?n.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e.a=I.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},686:function(t,e,n){"use strict";var r=n(11),o=n(384),c=n(158),l=n(40),f=n(0).default.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(r.a)({},this.activeClass,this.isActive)}),element):(Object(l.c)("v-item should only contain a single element",this),element)):(Object(l.c)("v-item is missing a default scopedSlot",this),null);var element}});Object(c.a)(f,Object(o.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e.a=Object(c.a)(f,Object(o.a)("slideGroup")).extend({name:"v-slide-item"})}}]);