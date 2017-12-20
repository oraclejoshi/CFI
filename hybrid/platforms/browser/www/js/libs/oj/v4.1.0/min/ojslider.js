/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","jqueryui-amd/widgets/draggable","ojs/ojtouchproxy"],function(a,g){(function(){a.hb("oj.ojSlider",g.oj.editableValue,{defaultElement:"\x3cinput\x3e",version:"1.0.1",widgetEventPrefix:"oj",options:{max:100,min:0,orientation:"horizontal",readOnly:!1,disabled:!1,step:1,type:"fromMin",value:0,rawValue:void 0},mpa:5,A7a:null,Dsa:null,Kh:function(){return"rtl"===a.T.lj()},qc:function(){this._super();this.Gna=!1;this.element.is("INPUT")?(this.Gna=!0,this.element[0].style&&
(this.OYa=this.element[0].style.cssText),this.Ena=this.element.css("display"),this.element.css("display","none"),this.ji=this.Fc?g(this.Fc):g(this.element).wrap("\x3cdiv\x3e \x3c/div\x3e").parent()):this.ji=this.element;this.Oha()},Oha:function(){this.epa=[];this.$k=null;var a="oj-slider ",a=this.$e()?a+"oj-slider-vertical":a+"oj-slider-horizontal",a=a+" oj-component oj-form-control";this.options.hX&&(a+=" oj-read-only");this.options.disabled&&(a+=" oj-disabled");this.ji.removeClass();this.ji.addClass(a);
this.Lh="range"===this.options.type?!0:!1;this.dha();this.oKa();this.FJa();this.hIa();this.jKa();this.sKa();this.rF();this.Yp()},Xha:function(a){var b=this.ji.find(".oj-slider-thumb");b.attr("aria-labelledby",a);1<b.length&&g(b[1]).attr("aria-labelledby",String(a))},Kf:function(){this._super();this.wA();var c;this.Fc&&(c=this.uuid+"_Label",(c=a.ia.CM(this.widget(),c))&&this.element.attr("aria-labelledby",c));if(this.Fc&&(c=this.element.attr("aria-labelledby"),void 0!==c&&null!==c)){this.Xha(c);return}if(c=
this.CDa()){var b=c.attr("id");b||(b=c.attr("for"));0<b.length&&this.Xha(b)}else if(b=this.Fc?this.ji.attr("aria-label"):this.element.attr("aria-label"))c=this.ji.find(".oj-slider-thumb"),c.attr("aria-label",b)},CDa:function(){var a=this.AMa();if(null!==a&&0!==a.length)return a;a=this.zMa();return null!==a&&0!==a.length?a:null},zMa:function(){var a;a=this.element.prop("id");if(void 0!==a){var b=g("label[for\x3d'"+a+"']");if(0<b.length)return b;a="span[for\x3d'"+a+"']";if(0!==g(a).length)return g(a)}return null},
AMa:function(){var a=this.element.attr("aria-labelledby");if(void 0===a&&this.Fc){var b=this.ji.attr("aria-labelledby");if(b&&null!==document.getElementById(b))return g(document.getElementById(b))}if(void 0!==a){b=g("label[id\x3d'"+a+"']");if(0<b.length)return b;a=g("span[id\x3d'"+a+"']");if(0<a.length)return a}return null},widget:function(){return this.ji},Pk:function(a){this.Dsa=a},Ui:function(){return this.Dsa},uR:function(){if(this.Fc)return this.ji[0].id||this.ji.uniqueId(),this.ji[0].id;this.element[0].id||
this.element.uniqueId();return this.element[0].id},y3:function(a){return this.uR()+"-thumb"+a},bka:function(){return this.uR()+"-barValue"},CMa:function(){return this.uR()+"-barBack"},rOa:function(){return this.uR()+"-sliderWrapper"},sKa:function(){var a,b,d="",e="class\x3d'oj-slider-thumb ui-state-default' tabindex\x3d'0' role\x3d'slider'"+("aria-valuemin \x3d '"+this.He()+"' ")+("aria-valuemax \x3d '"+this.Og()+"' ")+"\x3e\x3c/span\x3e",f=[];b=this.Lh?2:1;for(a=0;a<b;a++)d="\x3cspan "+("id\x3d'"+
this.y3(a)+"' ")+e,f.push(d);this.ak=g(f.join("")).appendTo(this.Yr);this.tn=this.ak.eq(0);this.iqa()},iqa:function(){var a=this;this.ak.each(function(){g(this).data("oj-slider-thumb-index");a.$e()&&g(this).attr("aria-orientation","vertical");a.options.disabled?(g(this).attr("aria-disabled","true"),g(this).removeAttr("tabindex")):g(this).removeAttr("aria-disabled");a.options.readOnly?g(this).attr("title","read only"):g(this).removeAttr("title")})},oKa:function(){var a=this.rOa(),b=this.ji.find("#"+
a);b.length&&b.remove();this.Yr=g("\x3cdiv\x3e\x3c/div\x3e");g(this.Yr).attr("id",a);this.Yr.addClass("oj-slider-container");this.element.after(this.Yr);this.Yr[0].style.cssText=this.OYa},FJa:function(){var a=this.CMa(),b=this.ji.find("#"+a);b.length&&b.remove();this.Of=g("\x3cdiv\x3e\x3c/div\x3e");g(this.Of).attr("id",a);this.Of.addClass("oj-slider-bar");this.Yr.append(this.Of);var d=this;this.Of.on("mousedown"+d.eventNamespace,function(a){d.Nqa(a);d.GK(a);d.uJ().focus()})},hIa:function(){this.options.type&&
(null==this.options.value?(this.options.value=this.Lh?[this.He(),this.Og()]:this.He(),this.option("value",this.options.value,{_context:{ld:!0,mb:!0}})):this.Lh&&2!==this.options.value.length&&(this.options.value=[0<this.options.value.length?this.options.value[0]:this.He(),this.Og()],this.option("value",this.options.value,{_context:{ld:!0,mb:!0}})))},jKa:function(){var a=this.options,b="";if(a.type){this.od=g("\x3cdiv\x3e\x3c/div\x3e");g(this.od).attr("id",this.bka());this.Yr.append(this.od);var b=
"oj-slider-range oj-slider-bar-value",d=this;this.od.on("mousedown"+d.eventNamespace,function(a){d.Nqa(a);d.GK(a);d.uJ().focus()});this.od=this.Yr.find("#"+this.bka());var e="";"fromMin"===a.type?e=" oj-slider-range-min":"fromMax"===a.type&&(e=" oj-slider-range-max");this.od.addClass(b+e)}else this.od&&this.od.remove(),this.od=null},d7:function(c){this.RL=a.dh.p8(c)},v7:function(c){a.dh.naa(c)},Yp:function(){this.Uq()&&this.xg(this.ji);this.ak.toArray().forEach(function(a){a=g(a);this.wz(a);this._on(a,
this.bZa);this.d7(a);this._focusable({element:a,applyHighlight:!0})},this)},_GetMessagingLauncherElement:function(){return this.ji},ze:function(){return this.uJ()},Sia:function(){this.ak.toArray().forEach(function(a){a=g(a);this.v7(a)},this);this.NKa();this.od&&this.od.remove();this.Yr&&this.Yr.remove();this.Fc?(this.ji.removeUniqueId(),this.sz(this.ji)):(this.element.removeUniqueId(),this.sz(this.element))},BZa:function(){a.T.unwrap(this.element,this.ji);this.element.css("display",this.Ena);this.fD(this.element)},
_destroy:function(){this.Sia();this.BZa();return this._super()},Nqa:function(a){var b,d,e=this.options,f=0,h=this;this.Hha=this.tn;if(e.disabled||e.readOnly)return!1;b=this.PNa({x:a.pageX,y:a.pageY});d=this.Og()-this.He()+1;this.Lh&&this.ak.each(function(a){var c=Math.abs(b-h.Uk(a));if(d>c||d===c&&(a===h.ZSa||h.Uk(a)===e.min))d=c,this.Hha=g(this),f=a});this.$k=f;if(!this.Hha)return!0;this.ak.hasClass("ui-state-hover")||this.Xr(a,f,b);this.uJ().addClass("oj-active").focus();this.od.addClass("oj-active");
return!0},zRa:function(a,b){var d=this.options;if(d.disabled||d.readOnly)return!1;b.removeClass("oj-focus-highlight");b.addClass("oj-active").focus();this.od.addClass("oj-active");return!0},KTa:function(a,b){var d=this.vla(b);this.Xr(a,this.$k,d,!0);d=100*this.Jka(b);this.Lh?this.dsa(d,this.$k):this.asa(d);return!1},GK:function(a,b){this.ak.removeClass("oj-active");this.od.removeClass("oj-active");var d=this.vla(b);this.Xr(a,this.$k,d);this.an(a,this.$k,!1);this.$k=null;return!1},$e:function(){return"vertical"===
this.options.orientation},xla:function(a){1<a&&(a=1);0>a&&(a=0);this.$e()&&(a=1-a);return a},PNa:function(a){var b=this.kNa(a);a=this.Og()-this.He();this.Kh()&&!this.$e()&&(b=1-b);return this.un(this.He()+b*a)},kNa:function(a){var b;this.$e()?(b=this.Of.height(),a=a.y-this.Of.offset().top):(b=this.Of.width(),a=a.x-this.Of.offset().left);return 0===b?1:b=this.xla(a/b)},uJ:function(){return this.Lh?g(this.ak[this.$k]):this.tn},Jka:function(a){var b;(b=a)||(b=this.uJ());this.$e()?(a=b.outerHeight()/
2,a=b.offset().top+a,b=this.Of.height(),a-=this.Of.offset().top):(a=b.outerWidth()/2,a=b.offset().left+a,b=this.Of.width(),a-=this.Of.offset().left);return 0===b?1:b=this.xla(a/b)},vla:function(a){var b;a=this.Jka(a);b=this.Og()-this.He();this.Kh()&&!this.$e()&&(a=1-a);return this.un(this.He()+a*b)},SNa:function(a){return this.Uk(a?0:1)},KNa:function(a,b,d){return 2===this.options.value.length&&(0===a&&b>d||1===a&&b<d)?d:b},Xr:function(a,b,d,e){var f;this.Lh?(f=this.SNa(b),d=this.KNa(b,d,f),d!==this.Uk(b)&&
this.RXa(a,b,d,e)):d!==this.YR()&&(this.dYa(a,d,e),e||this.Gna&&this.element.val(d))},dYa:function(a,b,d){this.OK=this.un(b);this.Y()||this.Ym(this.OK,a);d||(this.Y()&&(this.options.rawValue=this.OK),this.ic(this.OK,a),this.rF())},an:function(a,b,d){this.Lh?(this.Boa=this.LNa(b,this.epa[b]),this.Y()||this.Ym(this.Boa,a),d||this.ic(this.Boa,a)):(this.Y()||this.Ym(this.OK,a),d||this.ic(this.OK,a));this.ZSa=b},LNa:function(a,b){var d,e;d=this.options.value.slice();for(e=0;e<d.length;e+=1)d[e]=this.un(d[e]);
a===this.$k&&(d[a]=b);return d},YR:function(){return this.lma()},Uk:function(a){return this.GOa(a)},RXa:function(a,b,d,e){this.epa[b]=this.un(d);this.an(a,b,e);e||this.rF()},_setOption:function(a,b,d){var e;if("value"===a)if(Array.isArray(b))if(isNaN(b[0]))this.Lh=!1,e=this.Pr(a,b[0]),this.KI(e,this.He(),this.Og());else{this.Lh=!0;e=b;for(var f=0;f<e.length;f+=1)this.KI(e[f],this.He(),this.Og())}else this.Lh=!1,e=this.Y()?b:this.Pr(a,b),this.KI(e,this.He(),this.Og());"max"===a||"min"===a?(e=this.Y()?
b:this.Pr(a,b),"min"===a?(this.K0(e,this.Og()),this.Lh?(this.Uk(0)<e&&this._super("value",[e,this.Uk(1)],d),this.Uk(1)<e&&this._super("value",[this.Uk(0),e],d)):this.YR()<e&&this._super("value",e,d)):"max"===a&&(this.K0(this.He(),e),this.Lh?(this.Uk(0)>e&&this._super("value",[e,this.Uk(1)],d),this.Uk(1)>e&&this._super("value",[this.Uk(0),e],d)):this.YR()>e&&this._super("value",e,d))):e="step"===a?this.GE(b):b;this._super(a,e,d);"readOnly"===a&&(this.options.hX=e);"disabled"===a&&(this.options.disabled=
e);switch(a){case "disabled":this.iqa();this.options.disabled?this.XKa():this.wA();break;case "value":this.rF();this.wA();break;case "min":case "max":this.dha();this.rF();this.wA();break;case "orientation":case "readonly":case "step":case "type":this.hVa()}},hVa:function(){this.Sia();this.Oha();this.Kf()},lma:function(){var a=this.options.value;return a=this.un(a)},GOa:function(a){return this.un(this.options.value[a])},un:function(a){if(a<=this.He())return this.He();if(a>=this.Og())return this.Og();
var b=0<this.options.step?this.options.step:1,d=(a-this.He())%b;a-=d;2*Math.abs(d)>=b&&(a+=0<d?b:-b);return parseFloat(a.toFixed(5))},dha:function(){var a=this.He();this.max=0!==(this.options.max-a)/this.options.step%1?this.options.max-(this.options.max-a)%this.options.step+this.options.step:this.options.max},He:function(){return this.options.min},Og:function(){return this.max},Kka:function(){var a;a=0<this.options.step?(this.Og()-this.He())/this.options.step:100;a=(this.$e()?this.Of.height():this.Of.width())/
a;1>a&&(a=1);return this.$e()?[1,a]:[a,1]},z3:function(a){return(this.Uk(a)-this.He())/(this.Og()-this.He())},rF:function(){var a,b,d,e;this.Lh?this.ak.toArray().forEach(function(b,h){var k=g(b);a=100*this.z3(h);this.Kh()&&!this.$e()&&(a=100-a);this.$e()?k.css({top:100-a+"%"}):k.css({left:a+"%"});k.hasClass("oj-active")||(k.attr("aria-valuenow",this.Uk(h)),k.attr("aria-valuemin",d),k.attr("aria-valuemax",e));this.dsa(a,h)},this):(b=this.lma(),d=this.He(),e=this.Og(),a=e!==d?(b-d)/(e-d)*100:0,this.Kh()&&
!this.$e()&&(a=100-a),this.$e()?this.tn.css({top:100-a+"%"}):this.tn.css({left:a+"%"}),g(this.tn).hasClass("oj-active")||(g(this.tn).attr("aria-valuenow",b),g(this.tn).attr("aria-valuemin",d),g(this.tn).attr("aria-valuemax",e)),this.asa(a))},asa:function(a){var b=this.options.type;this.$e()?("fromMin"===b&&this.od.css({height:a+"%"}),"fromMax"===b&&this.od.css({height:100-a+"%"})):this.Kh()?("fromMin"===b&&this.od.css({width:100-a+"%"}),"fromMax"===b&&this.od.css({width:a+"%"})):("fromMin"===b&&this.od.css({width:a+
"%"}),"fromMax"===b&&this.od.css({width:100-a+"%"}))},dsa:function(a,b){var d=this.od.attr("id");if(0===b)switch(d=100*this.z3(1),this.options.type){case "fromMin":this.$e()?this.od.css({height:a+"%"}):this.od.css({width:a+"%"});break;case "range":this.$e()?(this.od.css({top:100-d+"%"}),this.od.css({height:d-a+"%"})):this.Kh()?(this.od.css({left:100-d+"%"}),this.od.css({width:d-(100-a)+"%"})):(this.od.css({left:a+"%"}),this.od.css({width:d-a+"%"}))}else{var e=100*this.z3(0);switch(this.options.type){case "fromMax":this.$e()?
this.od.css({height:100-a+"%"}):this.od.css({width:100-a+"%"});break;case "range":this.$e()?document.getElementById(d)&&(this.od.css({top:100-a+"%"}),this.od.css({height:a-e+"%"})):this.Kh()?document.getElementById(d)&&(this.od.css({left:a+"%"}),this.od.css({width:-a+100-e+"%"})):document.getElementById(d)&&this.od.css({width:a-parseInt(document.getElementById(d).style.left,10)+"%"})}}},bZa:{keydown:function(a){var b,d,e,f=g(a.target).data("oj-slider-thumb-index");this.$k=f;switch(a.keyCode){case g.ui.keyCode.HOME:case g.ui.keyCode.END:case g.ui.keyCode.PAGE_UP:case g.ui.keyCode.PAGE_DOWN:case g.ui.keyCode.UP:case g.ui.keyCode.RIGHT:case g.ui.keyCode.DOWN:case g.ui.keyCode.LEFT:a.preventDefault(),
g(a.target).addClass("oj-active")}e=this.options.step;b=this.Lh?d=this.Uk(f):d=this.YR();switch(a.keyCode){case g.ui.keyCode.HOME:d=this.He();break;case g.ui.keyCode.END:d=this.Og();break;case g.ui.keyCode.PAGE_UP:d=this.un(b+(this.Og()-this.He())/this.mpa);break;case g.ui.keyCode.PAGE_DOWN:d=this.un(b-(this.Og()-this.He())/this.mpa);break;case g.ui.keyCode.UP:if(b===this.Og())return;d=this.un(b+e);break;case g.ui.keyCode.RIGHT:if(!this.Kh()||this.$e()){if(b===this.Og())return;b+=e}else{if(b===this.He())return;
b-=e}d=this.un(b);break;case g.ui.keyCode.DOWN:if(b===this.He())return;d=this.un(b-e);break;case g.ui.keyCode.LEFT:if(!this.Kh()||this.$e()){if(b===this.He())return;b-=e}else{if(b===this.Og())return;b+=e}d=this.un(b)}this.Xr(a,f,d)},keyup:function(a){switch(a.keyCode){case g.ui.keyCode.HOME:case g.ui.keyCode.END:case g.ui.keyCode.PAGE_UP:case g.ui.keyCode.PAGE_DOWN:case g.ui.keyCode.UP:case g.ui.keyCode.RIGHT:case g.ui.keyCode.DOWN:case g.ui.keyCode.LEFT:var b=g(a.target).data("oj-slider-thumb-index");
this.$k=b;this.an(a,b,!1);g(a.target).removeClass("oj-active");this.rF(!0);this.$k=null}}},Ah:function(c,b){var d=this.options,e=this;this._superApply(arguments);a.ia.xs([{Aa:"disabled",jf:!0},{Aa:"value"},{Aa:"title"},{Aa:"min"},{Aa:"max"},{Aa:"step"}],b,this,function(a){for(var b=["value","step","min","max"],c=0;c<b.length;c++){var f=b[c],g=f in a?a[f]:d[f];null!=g&&("step"===f?a[f]=e.GE(g):"min"===f||"max"===f?a[f]=e.Pr(f,g):"value"===f&&(Array.isArray(g)?a[f]=g:a[f]=e.Pr(f,g)))}});if(!this.Y()&&
void 0===d.value)throw Error(this.R("noValue"));this.K0(d.min,d.max);if(Array.isArray(d.value))for(var f=0;f<d.value.length;f+=1)this.KI(d.value[f],d.min,d.max);else this.KI(d.value,d.min,d.max)},KI:function(a,b,d){if(null!=b&&a<b)throw Error(this.R("valueRange"));if(null!=d&&a>d)throw Error(this.R("valueRange"));},K0:function(a,b){if(null!=a&&null!=b&&a>b)throw Error(this.R("maxMin"));},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;return"oj-slider-thumb-0"===
a?this.widget().find(".oj-slider-thumb")[0]:"oj-slider-thumb-1"===a?this.widget().find(".oj-slider-thumb")[1]:"oj-slider-bar"===a||"oj-slider-bar-value"===a?this.widget().find("."+a)[0]:null},getSubIdByNode:function(a){if(null!=a){if(a.id===this.y3(0)&&g(a).hasClass("oj-slider-thumb"))return{subId:"oj-slider-thumb-0"};if(a.id===this.y3(1)&&g(a).hasClass("oj-slider-thumb"))return{subId:"oj-slider-thumb-1"};if(g(a).hasClass("oj-slider-bar"))return{subId:"oj-slider-bar"};if(g(a).hasClass("oj-slider-bar-value"))return{subId:"oj-slider-bar-value"}}return null},
_GetDefaultStyleClass:function(){return"oj-slider"},Pr:function(a,b){var d;d=null!==b?+b:b;if(isNaN(d))throw Error(this.R("optionNum",{option:a}));return d},GE:function(a){if(null===a)return 1;a=this.Pr("step",a);if(0>=a)throw Error(this.R("invalidStep"));if(null===a||0>=a)a=1;return a},H7a:function(){return this.Of.offset().left+this.Of.width()},R7a:function(){return this.Of.offset().left},eha:function(a){var b=this.Kka(),d=a[0].style,e=this;a.draggable({axis:this.$e()?"y":"x",grid:b,disabled:!1,
start:function(b){a[0]===g(e.ak)[0]?e.$k=0:a[0]===g(e.ak)[1]&&(e.$k=1);e.zRa(b,a)},drag:function(b,h){var k=h.position;e.$e()?(d.left="",k.left=""):(d.top="",k.top="");e.KTa(b,a);e.$e()?(0>k.top&&(k.top=0),k.top>e.Of.height()&&(k.top=e.Of.height())):(0>k.left&&(k.left=0),k.left>e.Of.width()&&(k.left=e.Of.width()));if(e.Lh){var l;l=0===e.$k?g(e.ak[1]):g(e.ak[0]);if(e.$e()){var m=a.outerHeight()/2,p=e.Of.offsetParent().offset().top;l=l.offset().top+m-p}else m=a.outerWidth()/2,p=e.Of.offsetParent().offset().left,
l=l.offset().left+m-p;0===e.$k?e.$e()?k.top<l&&(k.top=l):e.Kh()?k.left<l&&(k.left=l):k.left>l&&(k.left=l):e.$e()?k.top>l&&(k.top=l):e.Kh()?k.left>l&&(k.left=l):k.left<l&&(k.left=l)}},stop:function(b){this.style.width="";this.style.height="";e.GK(b,a)}})},wA:function(){this.options.disabled||(this.Lh?this.ak.toArray().forEach(function(a){a=g(a);this.eha(a)},this):this.eha(this.tn))},XKa:function(){this.Lh?this.ak.toArray().forEach(function(a){a=g(a);a.is(".ui-draggable")&&a.draggable("disable")},this):
this.tn.is(".ui-draggable")&&this.tn.draggable("disable")},NKa:function(){this.Lh?this.ak.toArray().forEach(function(a){a=g(a);a.is(".ui-draggable")&&a.draggable("destroy")},this):this.tn.is(".ui-draggable")&&this.tn.draggable("destroy")}})})();a.J.Ua("oj-slider","editableValue",{properties:{max:{type:"number"},min:{type:"number"},orientation:{type:"string",enumValues:["horizontal","vertical"]},step:{type:"number"},type:{type:"string",enumValues:["single","fromMin","fromMax"]},value:{type:"number",
writeback:!0}},methods:{},extension:{Dj:"input",Xa:"ojSlider"}});a.J.register("oj-slider",{metadata:a.J.getMetadata("oj-slider")})});