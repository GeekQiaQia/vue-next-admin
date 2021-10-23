var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,n=(e,a)=>{for(var t in a||(a={}))o.call(a,t)&&s(e,t,a[t]);if(l)for(var t of l(a))d.call(a,t)&&s(e,t,a[t]);return e},r=(e,l)=>a(e,t(l));import{_ as i}from"./lodash.0c8485ed.js";import{r as u}from"./index.7fdd719e.js";import{y as c,d as p,k as m,e as f,c as v,s as _,q as b,m as k,v as y,I as j,g as w,r as g,A as T,w as I,i as V,F as x,t as P,n as h,bm as M,p as S,f as L}from"./vendor.67cd59db.js";const C={class:"task-table"},U={key:1},O={key:1},N={key:1},E=j("保存"),$=j("编辑"),z=j("删除"),D={class:"task-table__add"},q=j("+ 新增任务");var A=p({props:{data:null,status:null},emits:["updateTask","modifyTaskEdit","addProjectTask","deleteProjectTask"],setup(e,{emit:a}){function t(){a("addProjectTask")}return(l,o)=>{const d=m("el-input"),s=m("el-table-column"),n=m("el-option"),r=m("el-select"),i=m("el-tag"),u=m("el-button"),c=m("el-popconfirm"),p=m("el-table");return f(),v("div",C,[_(p,{data:e.data,style:{width:"100%"}},{default:b((()=>[_(s,{prop:"taskName",label:"任务名称"},{default:b((e=>[e.row.edit?(f(),k(d,{key:0,modelValue:e.row.taskName,"onUpdate:modelValue":a=>e.row.taskName=a},null,8,["modelValue","onUpdate:modelValue"])):(f(),v("span",U,y(e.row.taskName),1))])),_:1}),_(s,{prop:"developTime",label:"开发工时"},{default:b((e=>[e.row.edit?(f(),k(d,{key:0,modelValue:e.row.developTime,"onUpdate:modelValue":a=>e.row.developTime=a},null,8,["modelValue","onUpdate:modelValue"])):(f(),v("span",O,y(e.row.developTime),1))])),_:1}),_(s,{prop:"developMember",label:"开发人"},{default:b((e=>[e.row.edit?(f(),k(d,{key:0,modelValue:e.row.developMember,"onUpdate:modelValue":a=>e.row.developMember=a},null,8,["modelValue","onUpdate:modelValue"])):(f(),v("span",N,y(e.row.developMember),1))])),_:1}),_(s,{prop:"taskStatus",label:"任务状态"},{default:b((a=>{var t;return[a.row.edit?(f(),k(r,{key:0,modelValue:a.row.taskStatus,"onUpdate:modelValue":e=>a.row.taskStatus=e,placeholder:"选择任务状态"},{default:b((()=>[_(n,{label:"准备阶段",value:1}),_(n,{label:"开发中",value:2}),_(n,{label:"开发完成",value:3}),_(n,{label:"测试阶段",value:4}),_(n,{label:"待发布",value:5})])),_:2},1032,["modelValue","onUpdate:modelValue"])):(f(),k(i,{key:1,type:null==(t=e.status.get(`${a.row.taskStatus}`))?void 0:t.type},{default:b((()=>{var t;return[j(y(null==(t=e.status.get(`${a.row.taskStatus}`))?void 0:t.text),1)]})),_:2},1032,["type"]))]})),_:1}),_(s,{label:"操作",width:"200"},{default:b((e=>[e.row.edit?(f(),k(u,{key:0,size:"mini",type:"success",icon:"el-icon-check",onClick:t=>{return l=e.$index,o=e.row,console.log(l,o),a("updateTask",l,o),void a("modifyTaskEdit",l,!1);var l,o}},{default:b((()=>[E])),_:2},1032,["onClick"])):(f(),k(u,{key:1,size:"mini",icon:"el-icon-edit",onClick:t=>{return l=e.$index,o=e.row,console.log(l,o),void a("modifyTaskEdit",l,!0);var l,o}},{default:b((()=>[$])),_:2},1032,["onClick"])),_(c,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定删除该条记录吗？",onConfirm:t=>{return l=e.$index,e.row,void a("deleteProjectTask",l);var l}},{reference:b((()=>[_(u,{size:"mini",icon:"el-icon-delete",type:"danger"},{default:b((()=>[z])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"]),w("div",D,[_(u,{onClick:t},{default:b((()=>[q])),_:1})])])}}});A.__scopeId="data-v-105cac7b";const B=e=>(S("data-v-336ab4a0"),e=e(),L(),e),F={class:"board"},G={class:"board__info"},H=j("项目看板"),J=B((()=>w("span",null,"项目看板主要应用场景：项目的任务管理，任务进度管理等。",-1))),K={class:"board__project"},Q=B((()=>w("div",{class:"board__project-title"},"项目概览",-1))),R={class:"board__project-list"},W=["onClick"],X={class:"board__detail"},Y=B((()=>w("div",{class:"board__detail-title"},"项目详情",-1))),Z={key:0,class:"board__detail-empty"},ee={key:1,class:"board__detail-content"},ae={class:"board__detail-head"},te=B((()=>w("span",{class:"board__detail-name"},"项目名称",-1))),le=B((()=>w("span",{class:"board__detail-name"},"负责人",-1))),oe=B((()=>w("span",{class:"board__detail-name"},"开发工时",-1))),de=B((()=>w("span",{class:"board__detail-name"},"项目状态",-1))),se=B((()=>w("span",{class:"board__detail-name"},"任务总数",-1))),ne=B((()=>w("span",{class:"board__detail-name"},"任务进度",-1))),re=j("： "),ie={class:"board__detail-search"},ue=j("查询"),ce={class:"board__detail-table"};var pe=p({setup(e){const a=c({taskStatus:null,developMember:""}),t=new Map([["1",{text:"准备阶段",type:"info"}],["2",{text:"开发中",type:""}],["3",{text:"开发完成",type:"success"}],["4",{text:"测试阶段",type:"danger"}],["5",{text:"待发布",type:"warning"}]]),l=g([]),{store:o,updatedProjectInfo:d,addProjectTask:s,deleteTask:p,getProjectDetail:S,modifyTaskEdit:L}=(()=>{const e=c({data:[],target:{}});return u({url:"/api/project/list",method:"get",json:!0}).then((a=>{0===a.status&&(e.data=a.data,e.target=a.data[0])})),{store:e,updatedProjectInfo:function(a,t,l){const o=i.findIndex(e.data,["projectId",a]);e.data[o].taskList.splice(t,1,l)},addProjectTask:function(a,t){const l=i.findIndex(e.data,["projectId",a]);e.data[l].taskList.push(t)},deleteTask:function(a,t){const l=i.findIndex(e.data,["projectId",a]);e.data[l].taskList.splice(t,1)},getProjectDetail:function(a){return i.find(e.data,(e=>e.projectId===a))},modifyTaskEdit:function(a,t,l=!1){const o=i.findIndex(e.data,["projectId",a]),d=e.data[o].taskList;e.data[o].taskList=i.map(d,((e,a)=>t===a?r(n({},e),{edit:l}):e))}}})(),{data:C,target:U}=T(o);I((()=>U.value),(e=>{l.value=e.taskList}),{deep:!0});const O=V((()=>{const e=i.map(U.value.taskList,(e=>e.developMember)).filter((e=>e));return i.uniq(e)}));function N(e){const a=i.countBy(e,(e=>e.taskStatus));return i.map(Object.entries(a),(([e,a])=>{const l=t.get(e);return r(n({},l),{count:a})}))}function E(){console.log("search!",a);const e=a.taskStatus,t=a.developMember;if(e&&t){const a=i.map(U.value.taskList,(a=>{if(a.developMember===t&&a.taskStatus===e)return a})).filter((e=>e));l.value=a}else if(e){const a=i.map(U.value.taskList,(a=>{if(a.taskStatus===e)return a})).filter((e=>e));l.value=a}else if(t){const e=i.map(U.value.taskList,(e=>{if(e.developMember===t)return e})).filter((e=>e));l.value=e}else l.value=U.value.taskList}function $(e,a){const t=U.value.projectId;L(t,e,a),U.value=S(t)}function z(e,a){const t=U.value.projectId;d(t,e,a)}function D(){const e=U.value.projectId;s(e,{taskName:"",developTime:"",developMember:"",taskStatus:1,edit:!0})}function q(e){const a=U.value.projectId;p(a,e)}return(e,o)=>{const d=m("el-divider"),s=m("el-avatar"),n=m("el-col"),r=m("el-row"),i=m("el-card"),u=m("el-tag"),c=m("el-option"),p=m("el-select"),g=m("el-form-item"),T=m("el-button"),I=m("el-form");return f(),v("div",F,[w("div",G,[_(d,{"content-position":"left"},{default:b((()=>[H])),_:1}),J]),w("div",K,[Q,w("div",R,[(f(!0),v(x,null,P(M(C),((e,a)=>(f(),v("div",{key:a,class:h(["board__project-item",{"board__project-item--active":M(U).projectId===e.projectId}]),onClick:a=>{return t=e,void(U.value=t);var t}},[_(i,null,{default:b((()=>[_(r,null,{default:b((()=>[_(n,{span:5},{default:b((()=>[_(s,{class:"board__project-avatar",size:90},{default:b((()=>[j(y(e.projectName.substr(0,1)),1)])),_:2},1024)])),_:2},1024),_(n,{span:18,style:{"margin-left":"6px",color:"#7a848d"}},{default:b((()=>[w("p",null,"项目名称："+y(e.projectName),1),w("p",null,"总负责人："+y(e.principal),1),w("p",null,"开发耗时："+y(e.timeConsuming),1),w("p",null,"项目状态: "+y(e.status),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)],10,W)))),128))])]),w("div",X,[Y,_(i,{class:"board__detail-wrap"},{default:b((()=>[M(U).projectId?(f(),v("div",ee,[w("div",ae,[_(r,null,{default:b((()=>[_(n,{span:5},{default:b((()=>[te,j("："+y(M(U).projectName),1)])),_:1}),_(n,{span:5},{default:b((()=>[le,j("："+y(M(U).principal),1)])),_:1}),_(n,{span:5},{default:b((()=>[oe,j("："+y(M(U).timeConsuming),1)])),_:1}),_(n,{span:5},{default:b((()=>[de,j("："+y(M(U).status),1)])),_:1})])),_:1}),_(r,{class:"board__detail-task"},{default:b((()=>[_(n,{span:5},{default:b((()=>[se,j("："+y(M(U).taskList.length),1)])),_:1}),_(n,{span:18},{default:b((()=>[ne,re,(f(!0),v(x,null,P(N(M(U).taskList),((e,a)=>(f(),k(u,{key:a,class:"board__detail-tag",type:e.type},{default:b((()=>[j(y(e.text)+": "+y(e.count),1)])),_:2},1032,["type"])))),128))])),_:1})])),_:1})]),_(d),w("div",ie,[_(I,{inline:!0,model:M(a)},{default:b((()=>[_(g,{label:"开发人"},{default:b((()=>[_(p,{clearable:"",modelValue:M(a).developMember,"onUpdate:modelValue":o[0]||(o[0]=e=>M(a).developMember=e),placeholder:"选择任务开发者"},{default:b((()=>[(f(!0),v(x,null,P(M(O),((e,a)=>(f(),k(c,{key:a,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),_(g,{label:"任务状态"},{default:b((()=>[_(p,{clearable:"",modelValue:M(a).taskStatus,"onUpdate:modelValue":o[1]||(o[1]=e=>M(a).taskStatus=e),placeholder:"选择任务状态"},{default:b((()=>[_(c,{label:"准备阶段",value:1}),_(c,{label:"开发中",value:2}),_(c,{label:"开发完成",value:3}),_(c,{label:"测试阶段",value:4}),_(c,{label:"待发布",value:5})])),_:1},8,["modelValue"])])),_:1}),_(g,null,{default:b((()=>[_(T,{type:"primary",onClick:E},{default:b((()=>[ue])),_:1})])),_:1})])),_:1},8,["model"])]),w("div",ce,[_(A,{data:l.value,status:M(t),onUpdateTask:z,onModifyTaskEdit:$,onAddProjectTask:D,onDeleteProjectTask:q},null,8,["data","status"])])])):(f(),v("div",Z,"请选择项目，查看项目详情！！！"))])),_:1})])])}}});pe.__scopeId="data-v-336ab4a0";export{pe as default};