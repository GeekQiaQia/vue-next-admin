var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,i=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))n.call(t,a)&&s(e,a,t[a]);return e},l=(e,o)=>t(e,a(o));import{v as d}from"./index.674d1287.js";import{a as c}from"./request.628a0fff.js";import{r as p,U as f,l as u,C as v}from"./index.db4634b7.js";import{d as m,z as h,e as g,A as w,p as y,a as b,i as x,o as j,c as k,b as I,F as S,j as _,w as O,q as z,N as C}from"./vendor.543d3361.js";var P=m({name:"Home",components:{},setup(){const e=h({swiperItems:[{name:"vue-next",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c588b8ab65a74d59aa379801136df4e0~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/vuejs/docs-next-zh-cn"}]});p("point","cloud",{draw(e,t){const a=(e=>{var t;return l(i(i({},e.defaultStyle),e.style),{fontSize:e.data.size,text:e.data.text,textAlign:"center",fontFamily:e.data.font,fill:e.color||(null==(t=null==e?void 0:e.defaultStyle)?void 0:t.stroke),textBaseline:"Alphabetic"})})(e),o=t.addShape("text",{attrs:l(i({},a),{x:null==e?void 0:e.x,y:null==e?void 0:e.y})}),r=e.data;return r.rotate&&f.rotate(o,r.rotate*Math.PI/180),o}});return g((()=>{c.get("/api/auth/roles").then((e=>{console.log(e)})).catch((e=>{console.error(e)})),c.get("/api/home/swiperInfo").then((t=>{0===t.data.code&&(e.swiperItems=t.data.data)})).catch((e=>{console.error(e)})),c.get("/api/data/world-population").then((e=>{if(0===e.data.code){const{dataSets:t}=e.data.data,a=(new u.View).source(t),o=a.range("value"),r=o[0],n=o[1];a.transform({type:"tag-cloud",fields:["x","value"],size:[600,500],font:"Verdana",padding:0,timeInterval:5e3,rotate(){let e=~~(4*Math.random())%4;return 2===e&&(e=0),90*e},fontSize:e=>e.value?(e.value-r)/(n-r)*56+24:0});const s=new v({container:"container",autoFit:!1,width:600,height:500,padding:0});s.data(a.rows),s.scale({x:{nice:!1},y:{nice:!1}}),s.legend(!1),s.axis(!1),s.tooltip({showTitle:!1,showMarkers:!1}),s.coordinate().reflect("x"),s.point().position("x*y").color("CornflowerBlue").shape("cloud").tooltip("value*category"),s.interaction("element-active"),s.render()}})).catch((e=>{console.error(e)}))})),l(i({handleClickImg:e=>{window.open(e,"_blank")}},w(e)),{logo:d})}});const V=O();y("data-v-0664f8f0");const A={class:"home-container page-container"},F={class:"top-container"},M=I("div",{class:"title"},"搜索词云",-1),q={class:"page-title"},B=z("信息链接:"),E=z("Vite2.x +"),L=z("Vue3.x +"),N=z("TypeScript +"),T=z("Element Plus"),D=C('<div class="word-cloud-wrapper" data-v-0664f8f0><div class="right-bottom" data-v-0664f8f0></div><div class="word-sets" data-v-0664f8f0><div class="sets-module" data-v-0664f8f0><div id="container" data-v-0664f8f0></div></div></div></div>',1);b();const H=V(((e,t,a,o,r,n)=>{const s=x("el-carousel-item"),i=x("el-carousel"),l=x("el-link");return j(),k("div",A,[I(i,{interval:4e3,"indicator-position":"outside"},{default:V((()=>[(j(!0),k(S,null,_(e.swiperItems,(t=>(j(),k(s,{key:t},{default:V((()=>[I("img",{class:"vue-element-plus-logo",alt:t.name,src:t.itemSrc,onClick:a=>e.handleClickImg(t.targetLink)},null,8,["alt","src","onClick"])])),_:2},1024)))),128))])),_:1}),I("div",F,[M,I("div",q,[I(l,{type:"info"},{default:V((()=>[B])),_:1}),I(l,{type:"primary",href:"https://www.vitejs.net/guide/"},{default:V((()=>[E])),_:1}),I(l,{type:"success",href:"https://v3.cn.vuejs.org/"},{default:V((()=>[L])),_:1}),I(l,{type:"warning",href:"https://www.tslang.cn/"},{default:V((()=>[N])),_:1}),I(l,{type:"danger",href:"https://element-plus.gitee.io/#/zh-CN/component/link"},{default:V((()=>[T])),_:1})])]),D])}));P.render=H,P.__scopeId="data-v-0664f8f0";export default P;