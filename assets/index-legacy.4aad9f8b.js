!function(){var t=document.createElement("style");t.innerHTML=".board[data-v-1d34ddbe]{padding:0 20px}.board__info[data-v-1d34ddbe]{text-align:left}.board__info>span[data-v-1d34ddbe]{font-size:12px;margin-bottom:20px;display:inline-block}.board__project[data-v-1d34ddbe]{text-align:left}.board__project-title[data-v-1d34ddbe]{font-size:18px;font-weight:bold}.board__project-list[data-v-1d34ddbe]{display:flex;flex-wrap:wrap;margin-top:16px}.board__project-item[data-v-1d34ddbe]{width:50%;width:calc(50% - 200px);margin-bottom:30px;margin-left:100px;cursor:pointer;border:1px solid transparent}.board__project-item--active[data-v-1d34ddbe]{border-color:#2799c1;border-radius:4px}.board__project-avatar[data-v-1d34ddbe]{font-size:20px;background:#7d9fe3;font-weight:bold}.board__detail[data-v-1d34ddbe]{text-align:left}.board__detail-title[data-v-1d34ddbe]{font-size:18px;font-weight:bold;margin-bottom:16px}.board__detail-empty[data-v-1d34ddbe]{color:#d3d0d0;min-height:200px;line-height:200px;text-align:center}.board__detail-content[data-v-1d34ddbe]{min-height:60px}\n",document.head.appendChild(t),System.register(["./index-legacy.457b5c89.js","./vendor-legacy.6e59ef71.js"],(function(t){"use strict";var e,d,a,r,n,o,i,l,c,u,p,s,_,b,f;return{setters:[function(t){e=t.r},function(t){d=t.r,a=t.d,r=t.m,n=t.g,o=t.e,i=t.f,l=t.F,c=t.n,u=t.D,p=t.t,s=t.bk,_=t.w,b=t.p,f=t.c}],execute:function(){var v=_();b("data-v-1d34ddbe");var m={class:"board"},g={class:"board__info"},x=u("项目看板"),j=i("span",null,"项目看板主要应用场景：项目的任务管理，任务进度管理等。",-1),h={class:"board__project"},y=i("div",{class:"board__project-title"}," 项目概览 ",-1),w={class:"board__project-list"},k={class:"board__detail"},I=i("div",{class:"board__detail-title"}," 项目详情 ",-1),z={key:0,class:"board__detail-empty"},C={key:1};f();t("default",a({expose:[],setup:function(t){var a=d({}),_=function(){var t=d([]);return{data:t,getProjectInfo:function(){return e({url:"/api/project/list",method:"get",json:!0}).then((function(e){0===e.status&&(t.value=e.data)}))}}}(),b=_.getProjectInfo,f=_.data;return b(),function(t,e){var d=r("el-divider"),_=r("el-avatar"),b=r("el-col"),N=r("el-row"),P=r("el-card");return n(),o("div",m,[i("div",g,[i(d,{"content-position":"left"},{default:v((function(){return[x]})),_:1}),j]),i("div",h,[y,i("div",w,[(n(!0),o(l,null,c(s(f),(function(t,e){return n(),o("div",{key:e,class:["board__project-item",{"board__project-item--active":a.value.projectId===t.projectId}],onClick:function(e){return d=t,void(a.value=d);var d}},[i(P,null,{default:v((function(){return[i(N,null,{default:v((function(){return[i(b,{span:5},{default:v((function(){return[i(_,{class:"board__project-avatar",size:90},{default:v((function(){return[u(p(t.projectName.substr(0,1)),1)]})),_:2},1024)]})),_:2},1024),i(b,{span:18,style:{"margin-left":"6px",color:"#7a848d"}},{default:v((function(){return[i("p",null,"项目名称："+p(t.projectName),1),i("p",null,"总负责人："+p(t.principal),1),i("p",null,"开发耗时："+p(t.timeConsuming),1),i("p",null,"项目状态: "+p(t.status),1)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)],10,["onClick"])})),128))])]),i("div",k,[I,i(P,{class:"board__detail-content"},{default:v((function(){return[a.value.projectId?(n(),o("div",C," 项目名称："+p(a.value.projectName),1)):(n(),o("div",z," 请选择项目 "))]})),_:1})])])}}})).__scopeId="data-v-1d34ddbe"}}}))}();
