(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{382:function(e,t,n){"use strict";var r=n(114);t.a=r.a},386:function(e,t,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(48).default)("322289bb",content,!0,{sourceMap:!1})},387:function(e,t,n){"use strict";n.r(t);var r=n(1296),o=n(427),c=n(114),l=n(1293),d=n(452),h={name:"MarkdownDisplay",components:{MathpixMarkdown:d.MathpixMarkdown,MathpixLoader:d.MathpixLoader},props:{source:String,loading:Boolean},data:function(){return{renderMarkdown:!0}}},v=(n(407),n(73)),component=Object(v.a)(h,(function(){var e=this,t=e._self._c;return e.loading?t(c.a,{staticClass:"parent",attrs:{outlined:""}},[t(l.a,{staticClass:"mx-4",attrs:{type:"article, sentences, text@2, sentences, paragraph, sentences, text, paragraph, text, table-thead, table-row-divider@3, table-row, table-heading, text"}})],1):e.source?t(c.a,{staticClass:"parent overflow-y-auto",attrs:{outlined:"","max-height":"800"}},[t(r.a,{staticClass:"upright pa-1",attrs:{tile:"",icon:""},on:{click:function(t){e.renderMarkdown=!e.renderMarkdown}}},[e.renderMarkdown?t(o.a,{attrs:{large:""}},[e._v("mdi-raw")]):t(o.a,{attrs:{large:""}},[e._v("mdi-raw-off")])],1),e._v(" "),e.renderMarkdown?t("MathpixLoader",{staticClass:"serif"},[t("MathpixMarkdown",{attrs:{text:e.source}})],1):t("pre",{attrs:{id:"markdown"}},[e._v(e._s(e.source)+"\n    ")])],1):e._e()}),[],!1,null,null,null);t.default=component.exports},404:function(e,t,n){"use strict";var r=n(17);n(7);function o(e,t,n){var r,o=null===(r=e._observe)||void 0===r?void 0:r[n.context._uid];o&&(o.observer.unobserve(e),delete e._observe[n.context._uid])}var c={inserted:function(e,t,n){if("undefined"!=typeof window&&"IntersectionObserver"in window){var c=t.modifiers||{},l=t.value,d="object"===Object(r.a)(l)?l:{handler:l,options:{}},h=d.handler,v=d.options,f=new IntersectionObserver((function(){var r,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0,v=null===(r=e._observe)||void 0===r?void 0:r[n.context._uid];if(v){var f=l.some((function(e){return e.isIntersecting}));!h||c.quiet&&!v.init||c.once&&!f&&!v.init||h(l,d,f),f&&c.once?o(e,t,n):v.init=!0}}),v);e._observe=Object(e._observe),e._observe[n.context._uid]={init:!1,observer:f},f.observe(e)}},unbind:o};t.a=c},407:function(e,t,n){"use strict";n(386)},408:function(e,t,n){var r=n(47)((function(i){return i[1]}));r.push([e.i,'@font-face{font-family:"Computer Modern";src:"assets/cmunss.otf"}@font-face{font-family:"Computer Modern";font-weight:700;src:"assets/cmunsx.otf"}@font-face{font-family:"Computer Modern";font-style:italic,oblique;src:"assets/cmunsi.otf"}@font-face{font-family:"Computer Modern";font-style:italic,oblique;font-weight:700;src:"assets/cmunbxo.otf"}.parent{height:100%;width:100%}h1{font-size:22px}h2{font-size:20px}h3{font-size:18px}h4,h5,h6{font-size:16px}.upright{float:right;position:sticky;right:5px;top:5px;z-index:5}#markdown{word-wrap:break-word;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap}.serif *{font-family:"Computer Modern",serif}',""]),r.locals={},e.exports=r},425:function(e,t,n){"use strict";var r=n(2),o=n(165);r({target:"String",proto:!0,forced:n(166)("link")},{link:function(e){return o(this,"a","href",e)}})},450:function(e,t,n){"use strict";n(20),n(21),n(25),n(7),n(28),n(24),n(29);var r=n(6),o=(n(425),n(90),n(34),n(26),n(50),n(0)),c=(n(30),n(74),n(88),n(475),n(5)),l=80;function d(e,t){e.style.transform=t,e.style.webkitTransform=t}function h(e){return"TouchEvent"===e.constructor.name}function v(e){return"KeyboardEvent"===e.constructor.name}var f={show:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t._ripple&&t._ripple.enabled){var r=document.createElement("span"),o=document.createElement("span");r.appendChild(o),r.className="v-ripple__container",n.class&&(r.className+=" ".concat(n.class));var c=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=0,o=0;if(!v(e)){var c=t.getBoundingClientRect(),l=h(e)?e.touches[e.touches.length-1]:e;r=l.clientX-c.left,o=l.clientY-c.top}var d=0,f=.3;t._ripple&&t._ripple.circle?(f=.15,d=t.clientWidth/2,d=n.center?d:d+Math.sqrt(Math.pow(r-d,2)+Math.pow(o-d,2))/4):d=Math.sqrt(Math.pow(t.clientWidth,2)+Math.pow(t.clientHeight,2))/2;var m="".concat((t.clientWidth-2*d)/2,"px"),_="".concat((t.clientHeight-2*d)/2,"px");return{radius:d,scale:f,x:n.center?m:"".concat(r-d,"px"),y:n.center?_:"".concat(o-d,"px"),centerX:m,centerY:_}}(e,t,n),l=c.radius,f=c.scale,m=c.x,_=c.y,w=c.centerX,x=c.centerY,y="".concat(2*l,"px");o.className="v-ripple__animation",o.style.width=y,o.style.height=y,t.appendChild(r);var C=window.getComputedStyle(t);C&&"static"===C.position&&(t.style.position="relative",t.dataset.previousPosition="static"),o.classList.add("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--visible"),d(o,"translate(".concat(m,", ").concat(_,") scale3d(").concat(f,",").concat(f,",").concat(f,")")),o.dataset.activated=String(performance.now()),setTimeout((function(){o.classList.remove("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--in"),d(o,"translate(".concat(w,", ").concat(x,") scale3d(1,1,1)"))}),0)}},hide:function(e){if(e&&e._ripple&&e._ripple.enabled){var t=e.getElementsByClassName("v-ripple__animation");if(0!==t.length){var n=t[t.length-1];if(!n.dataset.isHiding){n.dataset.isHiding="true";var r=performance.now()-Number(n.dataset.activated),o=Math.max(250-r,0);setTimeout((function(){n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((function(){var t;1===e.getElementsByClassName("v-ripple__animation").length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),(null===(t=n.parentNode)||void 0===t?void 0:t.parentNode)===e&&e.removeChild(n.parentNode)}),300)}),o)}}}}};function m(e){return void 0===e||!!e}function _(e){var t={},element=e.currentTarget;if(element&&element._ripple&&!element._ripple.touched&&!e.rippleStop){if(e.rippleStop=!0,h(e))element._ripple.touched=!0,element._ripple.isTouch=!0;else if(element._ripple.isTouch)return;if(t.center=element._ripple.centered||v(e),element._ripple.class&&(t.class=element._ripple.class),h(e)){if(element._ripple.showTimerCommit)return;element._ripple.showTimerCommit=function(){f.show(e,element,t)},element._ripple.showTimer=window.setTimeout((function(){element&&element._ripple&&element._ripple.showTimerCommit&&(element._ripple.showTimerCommit(),element._ripple.showTimerCommit=null)}),l)}else f.show(e,element,t)}}function w(e){var element=e.currentTarget;if(element&&element._ripple){if(window.clearTimeout(element._ripple.showTimer),"touchend"===e.type&&element._ripple.showTimerCommit)return element._ripple.showTimerCommit(),element._ripple.showTimerCommit=null,void(element._ripple.showTimer=setTimeout((function(){w(e)})));window.setTimeout((function(){element._ripple&&(element._ripple.touched=!1)})),f.hide(element)}}function x(e){var element=e.currentTarget;element&&element._ripple&&(element._ripple.showTimerCommit&&(element._ripple.showTimerCommit=null),window.clearTimeout(element._ripple.showTimer))}var y=!1;function C(e){y||e.keyCode!==c.p.enter&&e.keyCode!==c.p.space||(y=!0,_(e))}function k(e){y=!1,w(e)}function L(e){!0===y&&(y=!1,w(e))}function O(e,t,n){var r=m(t.value);r||f.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=r;var o=t.value||{};o.center&&(e._ripple.centered=!0),o.class&&(e._ripple.class=t.value.class),o.circle&&(e._ripple.circle=o.circle),r&&!n?(e.addEventListener("touchstart",_,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",x,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",_),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",C),e.addEventListener("keyup",k),e.addEventListener("blur",L),e.addEventListener("dragstart",w,{passive:!0})):!r&&n&&M(e)}function M(e){e.removeEventListener("mousedown",_),e.removeEventListener("touchstart",_),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",x),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",C),e.removeEventListener("keyup",k),e.removeEventListener("dragstart",w),e.removeEventListener("blur",L)}var E={bind:function(e,t,n){O(e,t,!1)},unbind:function(e){delete e._ripple,M(e)},update:function(e,t){t.value!==t.oldValue&&O(e,t,m(t.oldValue))}};function T(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?T(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):T(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=o.default.extend({name:"routable",directives:{Ripple:E},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var e={};return this.to||(this.activeClass&&(e[this.activeClass]=this.isActive),this.proxyClass&&(e[this.proxyClass]=this.isActive)),e},computedRipple:function(){var e;return null!==(e=this.ripple)&&void 0!==e?e:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{generateRouteLink:function(){var e,t,n=this.exact,data=(e={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},Object(r.a)(e,this.to?"nativeOn":"on",j(j({},this.$listeners),"click"in this?{click:this.click}:void 0)),Object(r.a)(e,"ref","link"),e);if(void 0===this.exact&&(n="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var o=this.activeClass,c=this.exactActiveClass||o;this.proxyClass&&(o="".concat(o," ").concat(this.proxyClass).trim(),c="".concat(c," ").concat(this.proxyClass).trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(data.props,{to:this.to,exact:n,exactPath:this.exactPath,activeClass:o,exactActiveClass:c,append:this.append,replace:this.replace})}else"a"===(t=(this.href?"a":this.tag)||"div")&&this.href&&(data.attrs.href=this.href);return this.target&&(data.attrs.target=this.target),{tag:t,data:data}},onRouteChange:function(){var e=this;if(this.to&&this.$refs.link&&this.$route){var t="".concat(this.activeClass||""," ").concat(this.proxyClass||"").trim(),n="".concat(this.exactActiveClass||""," ").concat(this.proxyClass||"").trim()||t,path="_vnode.data.class."+(this.exact?n:t);this.$nextTick((function(){!Object(c.l)(e.$refs.link,path)===e.isActive&&e.toggle()}))}},toggle:function(){this.isActive=!this.isActive}}})},467:function(e,t){},468:function(e,t){},469:function(e,t){},475:function(e,t,n){var content=n(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(48).default)("fc402d5c",content,!0,{sourceMap:!1})},476:function(e,t,n){var r=n(47)((function(i){return i[1]}));r.push([e.i,".v-ripple__container{border-radius:inherit;contain:strict;height:100%;width:100%;z-index:0}.v-ripple__animation,.v-ripple__container{color:inherit;left:0;overflow:hidden;pointer-events:none;position:absolute;top:0}.v-ripple__animation{background:currentColor;border-radius:50%;opacity:0;will-change:transform,opacity}.v-ripple__animation--enter{opacity:0;transition:none}.v-ripple__animation--in{opacity:.25;transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .1s cubic-bezier(.4,0,.2,1)}.v-ripple__animation--out{opacity:0;transition:opacity .3s cubic-bezier(.4,0,.2,1)}",""]),r.locals={},e.exports=r}}]);