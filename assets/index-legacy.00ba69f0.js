!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=document.createElement("style");n.innerHTML=".copy-container[data-v-1794b252]{color:#000;padding:0 20px;background-color:#fafbfe}.copy-container .info[data-v-1794b252]{text-align:left;padding-left:20px;margin-bottom:20px;font-size:12px}.copy-container .section[data-v-1794b252]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.copy-container .el-row[data-v-1794b252]{margin-bottom:20px}\n",document.head.appendChild(n),System.register(["./vendor-legacy.fd567dca.js","./table-column-legacy.0f81edab.js","./checkbox-legacy.f04a5c48.js","./popover-legacy.0eba315a.js","./col-legacy.4976b2e9.js","./divider-legacy.4cf47f83.js","./index-legacy.0d93fdb5.js"],(function(n){"use strict";var r,o,i,u,c,a,l,f,s,d,p,y,v,m,b,g,h,w,x,S,E,k,C,j,O,_,T,A,P,V,L,R,D,M,U;return{setters:[function(e){e.b0,r=e.aF,o=e.N,i=e.d,u=e.b1,c=e.b2,a=e.r,l=e.c,f=e.aU,s=e.q,d=e.x,p=e.z,y=e.b3,v=e.j,m=e.h,b=e.n,g=e.i,h=e.w,w=e.t,x=e.m,S=e.a0,E=e._,k=e.L,C=e.M,j=e.aG,O=e.aE,_=e.R,T=e.ay,A=e.aw,P=e.ax,V=e.b4,L=e.b5,R=e.aP,D=e.y,M=e.aQ},function(){},function(){},function(){},function(){},function(){},function(e){U=e._}],execute:function(){var N,z={exports:{}};
/*!
       * clipboard.js v2.0.10
       * https://clipboardjs.com/
       *
       * Licensed MIT © Zeno Rocha
       */N=function(){return function(){var e={686:function(e,t,n){n.d(t,{default:function(){return E}});var r=n(279),o=n.n(r),i=n(370),u=n.n(i),c=n(817),a=n.n(c);function l(e){try{return document.execCommand(e)}catch(t){return!1}}var f=function(e){var t=a()(e);return l("cut"),t};function s(e){var t="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[t?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=e,n}var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";if("string"==typeof e){var r=s(e);t.container.appendChild(r),n=a()(r),l("copy"),r.remove()}else n=a()(e),l("copy");return n};function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.action,n=void 0===t?"copy":t,r=e.container,o=e.target,i=e.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==p(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?d(i,{container:r}):o?"cut"===n?f(o):d(o,{container:r}):void 0};function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function x(e,t){var n="data-clipboard-".concat(e);if(t.hasAttribute(n))return t.getAttribute(n)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,n,r,o=g(i);function i(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=o.call(this)).resolveOptions(t),n.listenClick(e),n}return t=i,n=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===v(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=u()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget,n=this.action(t)||"copy",r=y({action:n,container:this.container,target:this.target(t),text:this.text(t)});this.emit(r?"success":"error",{action:n,text:r,trigger:t,clearSelection:function(){t&&t.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(e){return x("action",e)}},{key:"defaultTarget",value:function(e){var t=x("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return x("text",e)}},{key:"destroy",value:function(){this.listener.destroy()}}],r=[{key:"copy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return d(e,t)}},{key:"cut",value:function(e){return f(e)}},{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}],n&&m(t.prototype,n),r&&m(t,r),i}(o()),E=S},828:function(e){if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},438:function(e,t,n){var r=n(828);function o(e,t,n,r,o){var u=i.apply(this,arguments);return e.addEventListener(n,u,o),{destroy:function(){e.removeEventListener(n,u,o)}}}function i(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=function(e,t,n,r,i){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,i)})))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,n){var r=n(879),o=n(438);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return o(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(e){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}},279:function(e){function t(){}t.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var i=0,u=r.length;i<u;i++)r[i].fn!==t&&r[i].fn._!==t&&o.push(r[i]);return o.length?n[e]=o:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}return n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(686)}().default},z.exports=N();var I=r(z.exports),F=function(e,t,n){var r=new I(t.target,{text:function(){return e}});r.on("success",(function(){var e,t;t=null!==(e=null==n?void 0:n.successTip)&&void 0!==e?e:"copy success",o({message:t,type:"success",duration:1500}),r.destroy()})),r.on("error",(function(){var e,t;t=null!==(e=null==n?void 0:n.failedTip)&&void 0!==e?e:"copy success",o({message:t,type:"error"}),r.destroy()}))};if(!I)throw new Error("you should npm install `clipboard` --save at first ");var q={beforeMount:function(){},mounted:function(e,t){var n=e,r=new I(n,{text:function(){return t.value},action:function(){return"cut"===t.arg?"cut":"copy"}});r.on("success",(function(t){console.log(t);var n=e.vClipSuccess;n&&n(t)})),r.on("error",(function(t){console.log(t);var n=e.vClipFailure;n&&n(t)})),n.vClipboard=r},beforeUpdate:function(){},updated:function(e,t){var n=e;"success"===t.arg?n.vClipSuccess=t.value:"error"===t.arg?n.vClipFailure=t.value:null!=n&&n.vClipboard&&(n.vClipboard.text=function(){return t.value},n.vClipboard.action=function(){return"cut"===t.arg?"cut":"copy"})},beforeUnmount:function(){},unmounted:function(e,t){var n=e;if("success"===t.arg)delete n.vClipSuccess;else if("error"===t.arg)delete n.vClipFailure;else{var r;null==e||null===(r=e.vClipboard)||void 0===r||r.destroy(),delete n.vClipboard}}},H=i({name:"RichText",components:{Check:u,CopyDocument:c},directives:{clip:q},setup:function(){var n=a("vue3+vite+typescirpt+ElementPlus"),r=new I(".cut-btn");l((function(){r&&r.on("success",(function(e){o({type:"success",message:"剪切成功"}),e.clearSelection()}))})),f((function(){r.destroy()}));var i=s({tableData:[{province:"上海市",city:"浦东新区",name:"王小虎1",address:"上海市普陀区金沙江路 1518 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎2",address:"上海市普陀区金沙江路 1517 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎3",address:"上海市普陀区金沙江路 1519 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎4",address:"上海市普陀区金沙江路 1516 弄",edit:!0}]});return function(n){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){t(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}({handleCopyInput:function(e,t){F(e,t,{successTip:"复制成功",failedTip:"复制失败"})},inputContent:n,handleAddRecord:function(){i.tableData.push({province:"",city:"",name:"",address:"",edit:!0})},handleEdit:function(e,t){console.log(e,t),i.tableData[e].edit=!0},handleSave:function(e,t){return console.log(e,t),function(e){return Object.keys(e).some((function(t){return""===e[t]}))}(t)?(o.warning("保存前请完善信息！"),!1):(i.tableData[e].edit=!1,i.tableData[e]=t,!0)},handleDelete:function(e,t){console.log(e,t),i.tableData.splice(e,1)}},d(i))}}),Y=function(e){return k("data-v-1794b252"),e=e(),C(),e},G={class:"copy-container"},Q={class:"info"},X=S("文本复制"),$=Y((function(){return b("span",{style:{"text-align":"left"}},"文本复制常用于多数据拼接或者长文本内容复制场景。",-1)})),B={class:"grid-content bg-purple-dark"},J={style:{"text-align":"left"}},K=Y((function(){return b("span",null,"长文本内容复制场景",-1)})),W={class:"section"},Z=S("复制"),ee={class:"grid-content bg-purple-dark"},te={style:{"text-align":"left"}},ne=Y((function(){return b("span",null,"多数据拼接复制场景",-1)})),re={key:1,class:"name-wrapper"},oe={key:1},ie={key:1},ue={key:1},ce=S(" 保存"),ae=S(" 复制"),le={style:{margin:"5px"}},fe=S("+ 新增记录");n("default",U(H,[["render",function(e,t,n,r,o,i){var u=j,c=O,a=_,l=T,f=A,s=P,d=V,k=L,C=R,U=p("check"),N=D,z=p("copy-document"),I=M,F=y("clip");return v(),m("div",G,[b("div",Q,[g(u,{"content-position":"left"},{default:h((function(){return[X]})),_:1}),$]),b("div",null,[g(s,null,{default:h((function(){return[g(f,{offset:1,span:22},{default:h((function(){return[b("div",B,[g(l,{class:"box-card"},{default:h((function(){return[b("div",J,[K,g(u)]),b("div",W,[g(c,{id:"textarea",modelValue:e.inputContent,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.inputContent=t}),style:{width:"70%",margin:"0px 20px"},type:"textarea",rows:2,placeholder:"请输入内容"},null,8,["modelValue"]),g(a,{size:"medium",type:"success",plain:"",onClick:t[1]||(t[1]=function(t){return e.handleCopyInput(e.inputContent,t)})},{default:h((function(){return[Z]})),_:1})])]})),_:1})])]})),_:1})]})),_:1}),g(s,null,{default:h((function(){return[g(f,{offset:1,span:22},{default:h((function(){return[b("div",ee,[g(l,{class:"box-card"},{default:h((function(){return[b("div",te,[ne,g(u)]),g(I,{data:e.tableData,style:{width:"100%"}},{default:h((function(){return[g(C,{label:"姓名",width:"180"},{default:h((function(e){return[g(k,{effect:"light",trigger:"hover",placement:"top"},{default:h((function(){return[b("p",null,"姓名: "+w(e.row.name),1),b("p",null,"住址: "+w(e.row.address),1)]})),reference:h((function(){return[e.row.edit?(v(),x(c,{key:0,modelValue:e.row.name,"onUpdate:modelValue":function(t){return e.row.name=t}},null,8,["modelValue","onUpdate:modelValue"])):(v(),m("div",re,[g(d,{size:"medium"},{default:h((function(){return[S(w(e.row.name),1)]})),_:2},1024)]))]})),_:2},1024)]})),_:1}),g(C,{prop:"province",label:"省份",width:"120"},{default:h((function(e){return[e.row.edit?(v(),x(c,{key:0,modelValue:e.row.province,"onUpdate:modelValue":function(t){return e.row.province=t}},null,8,["modelValue","onUpdate:modelValue"])):(v(),m("span",oe,w(e.row.province),1))]})),_:1}),g(C,{prop:"city",label:"市区",width:"120"},{default:h((function(e){return[e.row.edit?(v(),x(c,{key:0,modelValue:e.row.city,"onUpdate:modelValue":function(t){return e.row.city=t}},null,8,["modelValue","onUpdate:modelValue"])):(v(),m("span",ie,w(e.row.city),1))]})),_:1}),g(C,{prop:"address",label:"详细地址"},{default:h((function(e){return[e.row.edit?(v(),x(c,{key:0,modelValue:e.row.address,"onUpdate:modelValue":function(t){return e.row.address=t}},null,8,["modelValue","onUpdate:modelValue"])):(v(),m("span",ue,w(e.row.address),1))]})),_:1}),g(C,{label:"操作",width:"200"},{default:h((function(t){return[t.row.edit?(v(),x(a,{key:0,size:"medium",type:"success",plain:"",onClick:function(n){return e.handleSave(t.$index,t.row)}},{default:h((function(){return[g(N,null,{default:h((function(){return[g(U)]})),_:1}),ce]})),_:2},1032,["onClick"])):E((v(),x(a,{key:1,size:"medium",type:"info",plain:""},{default:h((function(){return[g(N,null,{default:h((function(){return[g(z)]})),_:1}),ae]})),_:2},1024)),[[F,"姓名:".concat(t.row.name,",详细地址:").concat(t.row.address),"copy"]])]})),_:1})]})),_:1},8,["data"]),b("div",le,[g(a,{onClick:e.handleAddRecord},{default:h((function(){return[fe]})),_:1},8,["onClick"])])]})),_:1})])]})),_:1})]})),_:1})])])}],["__scopeId","data-v-1794b252"]]))}}}))}();