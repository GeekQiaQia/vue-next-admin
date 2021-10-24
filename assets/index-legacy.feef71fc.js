!function(){function t(t,a){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==a)return;var n,r,o=[],l=!0,u=!1;try{for(a=a.call(t);!(l=(n=a.next()).done)&&(o.push(n.value),!e||o.length!==e);l=!0);}catch(i){u=!0,r=i}finally{try{l||null==a.return||a.return()}finally{if(u)throw r}}return o}(t,a)||function(t,a){if(!t)return;if("string"==typeof t)return e(t,a);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,a)}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function a(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var o=document.createElement("style");o.innerHTML=".task-table[data-v-2f66a94a]{margin-top:16px}.task-table__add[data-v-2f66a94a]{margin-top:16px;text-align:center}.board[data-v-c41e2c84]{padding:0 20px}.board__info[data-v-c41e2c84]{text-align:left}.board__info>span[data-v-c41e2c84]{font-size:12px;margin-bottom:20px;display:inline-block}.board__project[data-v-c41e2c84]{text-align:left}.board__project-title[data-v-c41e2c84]{font-size:18px;font-weight:bold}.board__project-list[data-v-c41e2c84]{display:flex;flex-wrap:wrap;margin-top:16px}.board__project-item[data-v-c41e2c84]{width:50%;width:calc(50% - 100px);margin-bottom:30px;margin-left:50px;cursor:pointer;border:1px solid transparent;max-width:700px;min-width:500px}.board__project-item--active[data-v-c41e2c84]{border-color:#2799c1;border-radius:4px}.board__project-avatar[data-v-c41e2c84]{font-size:20px;background:#7d9fe3;font-weight:bold}.board__detail[data-v-c41e2c84]{text-align:left}.board__detail-head[data-v-c41e2c84]{color:#706e6e}.board__detail-search[data-v-c41e2c84]{margin-top:60px;text-align:left}.board__detail-title[data-v-c41e2c84]{font-size:18px;font-weight:bold;margin-bottom:16px}.board__detail-empty[data-v-c41e2c84]{color:#d3d0d0;line-height:200px;text-align:center}.board__detail-wrap[data-v-c41e2c84]{min-height:200px}.board__detail-name[data-v-c41e2c84]{font-weight:bold}.board__detail-tag[data-v-c41e2c84]{margin-left:16px}.board__detail-task[data-v-c41e2c84]{margin-top:30px}\n",document.head.appendChild(o),System.register(["./lodash-legacy.7d39c2c9.js","./index-legacy.0ae6afae.js","./vendor-legacy.5aaa7420.js"],(function(e){"use strict";var a,r,o,l,u,i,d,c,s,f,p,v,m,b,_,k,y,g,j,w,x,h,I;return{setters:[function(t){a=t._},function(t){r=t.r},function(t){o=t.y,l=t.d,u=t.k,i=t.e,d=t.c,c=t.s,s=t.q,f=t.m,p=t.v,v=t.I,m=t.g,b=t.r,_=t.A,k=t.w,y=t.i,g=t.F,j=t.t,w=t.n,x=t.bm,h=t.p,I=t.f}],execute:function(){var T={class:"task-table"},V={key:1},O={key:1},S={key:1},P=v("保存"),L=v("编辑"),M=v("删除"),C={class:"task-table__add"},U=v("+ 新增任务"),E=l({props:{data:null,status:null},emits:["updateTask","modifyTaskEdit","addProjectTask","deleteProjectTask"],setup:function(t,e){var a=e.emit;function r(){a("addProjectTask")}return function(e,o){var l=u("el-input"),b=u("el-table-column"),_=u("el-option"),k=u("el-select"),y=u("el-tag"),g=u("el-button"),j=u("el-popconfirm"),w=u("el-table");return i(),d("div",T,[c(w,{data:t.data,style:{width:"100%"}},{default:s((function(){return[c(b,{prop:"taskName",label:"任务名称"},{default:s((function(t){return[t.row.edit?(i(),f(l,{key:0,modelValue:t.row.taskName,"onUpdate:modelValue":function(e){return t.row.taskName=e}},null,8,["modelValue","onUpdate:modelValue"])):(i(),d("span",V,p(t.row.taskName),1))]})),_:1}),c(b,{prop:"developTime",label:"开发工时"},{default:s((function(t){return[t.row.edit?(i(),f(l,{key:0,modelValue:t.row.developTime,"onUpdate:modelValue":function(e){return t.row.developTime=e}},null,8,["modelValue","onUpdate:modelValue"])):(i(),d("span",O,p(t.row.developTime),1))]})),_:1}),c(b,{prop:"developMember",label:"开发人"},{default:s((function(t){return[t.row.edit?(i(),f(l,{key:0,modelValue:t.row.developMember,"onUpdate:modelValue":function(e){return t.row.developMember=e}},null,8,["modelValue","onUpdate:modelValue"])):(i(),d("span",S,p(t.row.developMember),1))]})),_:1}),c(b,{prop:"taskStatus",label:"任务状态"},{default:s((function(e){var a;return[e.row.edit?(i(),f(k,{key:0,modelValue:e.row.taskStatus,"onUpdate:modelValue":function(t){return e.row.taskStatus=t},placeholder:"选择任务状态"},{default:s((function(){return[c(_,{label:"准备阶段",value:"preparation"}),c(_,{label:"开发中",value:"development"}),c(_,{label:"开发完成",value:"completed"}),c(_,{label:"测试阶段",value:"test"}),c(_,{label:"待发布",value:"released"})]})),_:2},1032,["modelValue","onUpdate:modelValue"])):(i(),f(y,{key:1,type:null===(a=t.status.get("".concat(e.row.taskStatus)))||void 0===a?void 0:a.type},{default:s((function(){var a;return[v(p(null===(a=t.status.get("".concat(e.row.taskStatus)))||void 0===a?void 0:a.text),1)]})),_:2},1032,["type"]))]})),_:1}),c(b,{label:"操作",width:"200"},{default:s((function(t){return[t.row.edit?(i(),f(g,{key:0,size:"mini",type:"success",icon:"el-icon-check",onClick:function(e){return function(t){console.log(t);var e=t.taskId;a("updateTask",e,n(n({},t),{},{edit:!1}))}(t.row)}},{default:s((function(){return[P]})),_:2},1032,["onClick"])):(i(),f(g,{key:1,size:"mini",icon:"el-icon-edit",onClick:function(e){return function(t){console.log(t);var e=t.taskId;a("modifyTaskEdit",e,!0)}(t.row)}},{default:s((function(){return[L]})),_:2},1032,["onClick"])),c(j,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定删除该条记录吗？",onConfirm:function(e){return n=t.row,r=n.taskId,void a("deleteProjectTask",r);var n,r}},{reference:s((function(){return[c(g,{size:"mini",icon:"el-icon-delete",type:"danger"},{default:s((function(){return[M]})),_:1})]})),_:2},1032,["onConfirm"])]})),_:1})]})),_:1},8,["data"]),m("div",C,[c(g,{onClick:r},{default:s((function(){return[U]})),_:1})])])}}});E.__scopeId="data-v-2f66a94a";var z=function(t){return h("data-v-c41e2c84"),t=t(),I(),t},A={class:"board"},N={class:"board__info"},D=v("项目看板"),q=z((function(){return m("span",null,"项目看板主要应用场景：项目的任务管理，任务进度管理等。",-1)})),B={class:"board__project"},F=z((function(){return m("div",{class:"board__project-title"},"项目概览",-1)})),H={class:"board__project-list"},$=["onClick"],G={class:"board__detail"},J=z((function(){return m("div",{class:"board__detail-title"},"项目详情",-1)})),K={key:0,class:"board__detail-empty"},Q={key:1,class:"board__detail-content"},R={class:"board__detail-head"},W=z((function(){return m("span",{class:"board__detail-name"},"项目名称",-1)})),X=z((function(){return m("span",{class:"board__detail-name"},"负责人",-1)})),Y=z((function(){return m("span",{class:"board__detail-name"},"开发工时",-1)})),Z=z((function(){return m("span",{class:"board__detail-name"},"项目状态",-1)})),tt=z((function(){return m("span",{class:"board__detail-name"},"任务总数",-1)})),et=z((function(){return m("span",{class:"board__detail-name"},"任务进度",-1)})),at=v("： "),nt={class:"board__detail-search"},rt=v("查询"),ot={class:"board__detail-table"};e("default",l({setup:function(e){var l=o({taskStatus:null,developMember:""}),h=new Map([["preparation",{text:"准备阶段",type:"info"}],["development",{text:"开发中",type:""}],["completed",{text:"开发完成",type:"success"}],["test",{text:"测试阶段",type:"danger"}],["released",{text:"待发布",type:"warning"}]]),I=b([]),T=function(){var t=o({data:[],target:{}});return r({url:"/api/project/list",method:"get",json:!0}).then((function(e){0===e.status&&(t.data=e.data,t.target=e.data[0])})),{store:t,updatedProjectInfo:function(e,n,r){var o=a.findIndex(t.data,["projectId",e]),l=t.data[o].taskList,u=a.map(l,(function(t,e){return t.taskId===n?r:t}));t.data[o].taskList=u},addProjectTask:function(e,n){var r=a.findIndex(t.data,["projectId",e]),o=t.data[r].taskList;t.data[r].taskList=a.concat(o,n,[])},deleteTask:function(e,n){var r=a.findIndex(t.data,["projectId",e]),o=t.data[r].taskList,l=a.map(o,(function(t,e){if(t.taskId!==n)return t})).filter((function(t){return t}));t.data[r].taskList=l},getProjectDetail:function(e){return a.find(t.data,(function(t){return t.projectId===e}))},modifyTaskEdit:function(e,r){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=a.findIndex(t.data,["projectId",e]),u=t.data[l].taskList,i=a.map(u,(function(t,e){return t.taskId===r?n(n({},t),{},{edit:o}):t}));t.data[l].taskList=i}}}(),V=T.store,O=T.updatedProjectInfo,S=T.addProjectTask,P=T.deleteTask,L=T.modifyTaskEdit,M=_(V),C=M.data,U=M.target;k((function(){return U.value}),(function(t){I.value=t.taskList}),{deep:!0});var z=y((function(){var e=a.countBy(U.value.taskList,(function(t){return t.taskStatus}));return a.map(Object.entries(e),(function(e){var a=t(e,2),r=a[0],o=a[1];return n(n({},h.get(r)),{},{count:o})}))})),lt=y((function(){var t=a.map(U.value.taskList,(function(t){return t.developMember})).filter((function(t){return t}));return a.uniq(t)}));function ut(){console.log("search!",l);var t=l.taskStatus,e=l.developMember;if(t&&e){var n=a.map(U.value.taskList,(function(a){if(a.developMember===e&&a.taskStatus===t)return a})).filter((function(t){return t}));I.value=n}else if(t){var r=a.map(U.value.taskList,(function(e){if(e.taskStatus===t)return e})).filter((function(t){return t}));I.value=r}else if(e){var o=a.map(U.value.taskList,(function(t){if(t.developMember===e)return t})).filter((function(t){return t}));I.value=o}else I.value=U.value.taskList}function it(t,e){var a=U.value.projectId;L(a,t,e)}function dt(t,e){var a=U.value.projectId;O(a,t,e)}function ct(){var t=U.value.projectId,e={taskName:"",developTime:"",developMember:"",taskStatus:"preparation",edit:!0,taskId:Date.now()};S(t,e)}function st(t){var e=U.value.projectId;P(e,t)}return function(t,e){var a=u("el-divider"),n=u("el-avatar"),r=u("el-col"),o=u("el-row"),b=u("el-card"),_=u("el-tag"),k=u("el-option"),y=u("el-select"),T=u("el-form-item"),V=u("el-button"),O=u("el-form");return i(),d("div",A,[m("div",N,[c(a,{"content-position":"left"},{default:s((function(){return[D]})),_:1}),q]),m("div",B,[F,m("div",H,[(i(!0),d(g,null,j(x(C),(function(t,e){return i(),d("div",{key:e,class:w(["board__project-item",{"board__project-item--active":x(U).projectId===t.projectId}]),onClick:function(e){return a=t,void(U.value=a);var a}},[c(b,null,{default:s((function(){return[c(o,null,{default:s((function(){return[c(r,{span:5},{default:s((function(){return[c(n,{class:"board__project-avatar",size:90},{default:s((function(){return[v(p(t.projectName.substr(0,1)),1)]})),_:2},1024)]})),_:2},1024),c(r,{span:18,style:{"margin-left":"6px",color:"#7a848d"}},{default:s((function(){return[m("p",null,"项目名称："+p(t.projectName),1),m("p",null,"总负责人："+p(t.principal),1),m("p",null,"开发耗时："+p(t.timeConsuming),1),m("p",null,"项目状态: "+p(t.status),1)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)],10,$)})),128))])]),m("div",G,[J,c(b,{class:"board__detail-wrap"},{default:s((function(){return[x(U).projectId?(i(),d("div",Q,[m("div",R,[c(o,null,{default:s((function(){return[c(r,{span:5},{default:s((function(){return[W,v("："+p(x(U).projectName),1)]})),_:1}),c(r,{span:5},{default:s((function(){return[X,v("："+p(x(U).principal),1)]})),_:1}),c(r,{span:5},{default:s((function(){return[Y,v("："+p(x(U).timeConsuming),1)]})),_:1}),c(r,{span:5},{default:s((function(){return[Z,v("："+p(x(U).status),1)]})),_:1})]})),_:1}),c(o,{class:"board__detail-task"},{default:s((function(){return[c(r,{span:5},{default:s((function(){return[tt,v("："+p(x(U).taskList.length),1)]})),_:1}),c(r,{span:18},{default:s((function(){return[et,at,(i(!0),d(g,null,j(x(z),(function(t,e){return i(),f(_,{key:e,class:"board__detail-tag",type:t.type},{default:s((function(){return[v(p(t.text)+": "+p(t.count),1)]})),_:2},1032,["type"])})),128))]})),_:1})]})),_:1})]),c(a),m("div",nt,[c(O,{inline:!0,model:x(l)},{default:s((function(){return[c(T,{label:"开发人"},{default:s((function(){return[c(y,{clearable:"",modelValue:x(l).developMember,"onUpdate:modelValue":e[0]||(e[0]=function(t){return x(l).developMember=t}),placeholder:"选择任务开发者"},{default:s((function(){return[(i(!0),d(g,null,j(x(lt),(function(t,e){return i(),f(k,{key:e,label:t,value:t},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),c(T,{label:"任务状态"},{default:s((function(){return[c(y,{clearable:"",modelValue:x(l).taskStatus,"onUpdate:modelValue":e[1]||(e[1]=function(t){return x(l).taskStatus=t}),placeholder:"选择任务状态"},{default:s((function(){return[c(k,{label:"准备阶段",value:"preparation"}),c(k,{label:"开发中",value:"development"}),c(k,{label:"开发完成",value:"completed"}),c(k,{label:"测试阶段",value:"test"}),c(k,{label:"待发布",value:"released"})]})),_:1},8,["modelValue"])]})),_:1}),c(T,null,{default:s((function(){return[c(V,{type:"primary",onClick:ut},{default:s((function(){return[rt]})),_:1})]})),_:1})]})),_:1},8,["model"])]),m("div",ot,[c(E,{data:I.value,status:x(h),onUpdateTask:dt,onModifyTaskEdit:it,onAddProjectTask:ct,onDeleteProjectTask:st},null,8,["data","status"])])])):(i(),d("div",K,"请选择项目，查看项目详情！！！"))]})),_:1})])])}}})).__scopeId="data-v-c41e2c84"}}}))}();
