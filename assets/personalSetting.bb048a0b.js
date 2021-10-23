var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,l,s)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[l]=s,c=(e,a)=>{for(var l in a||(a={}))t.call(a,l)&&o(e,l,a[l]);if(s)for(var l of s(a))r.call(a,l)&&o(e,l,a[l]);return e};import{d as i,h as n,r as u,y as d,b as p,A as m,E as v,k as f,e as g,c as b,s as h,q as y,g as k,p as w,f as _,I as V}from"./vendor.67cd59db.js";import{S as F}from"./index.f7ed281a.js";import{_ as S}from"./index.7fdd719e.js";var j=i({name:"PersonalSetting",setup(){const e=n(),s=u("left"),t=u(),r=d({userSwitch:!1,sysSwitch:!0,taskSwitch:!0}),o=d({email:"",nickname:"",desc:"",mobile:""}),i=u(),f=u(!1),g={email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],nickname:{required:!0,message:"请输入昵称",trigger:["blur","change"]},desc:{required:!0,message:"请输入个人简介",trigger:["blur","change"]},mobile:{required:!0,validator:(e,a,l)=>{if(""===a)l(new Error("手机号码不可为空哦"));else{/^1[3-9]\d{9}$/.test(a)?l():l(new Error("请输入正确的手机号码"))}},trigger:["blur","change"]}};p((()=>{}));return b=c({handleBack:()=>{e.go(-1)},tabPosition:s,settingFormRef:t,settingForm:o,submitForm:()=>{t.value.validate((async e=>{if(e){try{f.value=!0;const e=c({},o),a=await F.postSetBasicInfo(e);console.log(a),f.value=!1,v({type:"success",message:a.data.message})}catch(a){console.error(a)}return!0}return!1}))},resetForm:()=>{t.value.resetFields()},handleAvatarSuccess:(e,a)=>{i.value=URL.createObjectURL(a.raw)},beforeAvatarUpload:e=>{if(!/(gif|png|jpg|jpeg)$/i.test(e.type))return v({message:"上传头像图片只能是gif|png|jpg|jpeg 格式!",type:"warning"}),!1;const a=e.size/1024/1024<2;return a||v.error("上传头像图片大小不能超过 2MB!"),a},rules:g,imageUrl:i},m(r)),a(b,l({updateLoading:f}));var b}});const U=e=>(w("data-v-7c5182d4"),e=e(),_(),e),x={class:"PersonalSetting"},O={class:"grid-content bg-purple-dark"},P={class:"card-header"},q=U((()=>k("i",{class:"el-icon-arrow-left"},null,-1))),A=V("返回"),B=U((()=>k("span",null,"个人设置",-1))),C=U((()=>k("div",null,null,-1))),E=U((()=>k("div",{class:"set-title"},[k("span",null,"基本设置")],-1))),I={class:"set-info"},L={class:"form-info"},R=V("更新基本信息"),z=V("重置"),$={class:"avatar"},D=U((()=>k("div",{class:"preview"},[k("span",null,"头像"),k("img",{src:S})],-1))),M=U((()=>k("i",{class:"el-icon-upload"},null,-1))),G=V("更换头像"),H=U((()=>k("div",{class:"set-title"},[k("span",null,"安全设置")],-1))),J=U((()=>k("div",{class:"secure-item"},[k("div",{class:"secure-info"},[k("span",{class:"secure-key"},"账户密码"),k("span",{class:"secure-value"},"当前密码强度：强")]),k("div",{class:"opera-btn"},[k("span",null,"修改")])],-1))),K=U((()=>k("div",{class:"secure-item"},[k("div",{class:"secure-info"},[k("span",{class:"secure-key"},"密保手机"),k("span",{class:"secure-value"},"已绑定手机：138****2234")]),k("div",{class:"opera-btn"},[k("span",null,"修改")])],-1))),N=U((()=>k("div",{class:"secure-item"},[k("div",{class:"secure-info"},[k("span",{class:"secure-key"},"绑定邮箱"),k("span",{class:"secure-value"},"已绑定邮箱：geek****@outlook.com")]),k("div",{class:"opera-btn"},[k("span",null,"修改")])],-1))),Q=U((()=>k("div",{class:"set-title"},[k("span",null,"新消息通知")],-1))),T={class:"secure-item"},W=U((()=>k("div",{class:"secure-info"},[k("span",{class:"secure-key"},"账户密码"),k("span",{class:"secure-value"},"用户信息将以系统内部渠道通知")],-1))),X={class:"secure-item"},Y=U((()=>k("div",{class:"secure-info"},[k("span",{class:"secure-key"},"系统消息"),k("span",{class:"secure-value"},"系统消息将以系统内部渠道通知")],-1))),Z={class:"secure-item"},ee=U((()=>k("div",{class:"secure-info"},[k("span",{class:"secure-key"},"代办任务"),k("span",{class:"secure-value"},"代办任务将以系统内部渠道通知")],-1)));j.render=function(e,a,l,s,t,r){const o=f("el-button"),c=f("el-input"),i=f("el-form-item"),n=f("el-form"),u=f("el-upload"),d=f("el-tab-pane"),p=f("el-switch"),m=f("el-tooltip"),v=f("el-tabs"),w=f("el-card"),_=f("el-col"),V=f("el-row");return g(),b("div",x,[h(V,null,{default:y((()=>[h(_,{offset:1,span:22},{default:y((()=>[k("div",O,[h(w,{class:"box-card"},{header:y((()=>[k("div",P,[h(o,{class:"button",type:"text",onClick:e.handleBack},{default:y((()=>[q,A])),_:1},8,["onClick"]),B,C])])),default:y((()=>[h(v,{"tab-position":e.tabPosition},{default:y((()=>[h(d,{label:"基本设置"},{default:y((()=>[E,k("div",I,[k("div",L,[h(n,{ref:"settingFormRef",model:e.settingForm,rules:e.rules,"label-width":"100px",class:"demo-ruleForm"},{default:y((()=>[h(i,{label:"邮箱",prop:"email"},{default:y((()=>[h(c,{modelValue:e.settingForm.email,"onUpdate:modelValue":a[0]||(a[0]=a=>e.settingForm.email=a),placeholder:"请输入邮箱"},null,8,["modelValue"])])),_:1}),h(i,{label:"昵称",prop:"nickname"},{default:y((()=>[h(c,{modelValue:e.settingForm.nickname,"onUpdate:modelValue":a[1]||(a[1]=a=>e.settingForm.nickname=a),placeholder:"请输入昵称",maxlength:"10"},null,8,["modelValue"])])),_:1}),h(i,{label:"个人简介",prop:"desc"},{default:y((()=>[h(c,{modelValue:e.settingForm.desc,"onUpdate:modelValue":a[2]||(a[2]=a=>e.settingForm.desc=a),type:"textarea",placeholder:"个人简介",maxlength:"120"},null,8,["modelValue"])])),_:1}),h(i,{label:"联系电话",prop:"mobile"},{default:y((()=>[h(c,{modelValue:e.settingForm.mobile,"onUpdate:modelValue":a[3]||(a[3]=a=>e.settingForm.mobile=a),placeholder:"请输入11位大陆手机号码"},null,8,["modelValue"])])),_:1}),h(i,null,{default:y((()=>[h(o,{type:"primary",loading:e.updateLoading,onClick:a[4]||(a[4]=a=>e.submitForm())},{default:y((()=>[R])),_:1},8,["loading"]),h(o,{onClick:a[5]||(a[5]=a=>e.resetForm())},{default:y((()=>[z])),_:1})])),_:1})])),_:1},8,["model","rules"])]),k("div",$,[D,h(u,{class:"avatar-uploader",action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload},{default:y((()=>[h(o,{style:{"margin-left":"10px"},size:"small",type:"success"},{default:y((()=>[M,G])),_:1})])),_:1},8,["on-success","before-upload"])])])])),_:1}),h(d,{label:"安全设置"},{default:y((()=>[H,J,K,N])),_:1}),h(d,{label:"新消息通知"},{default:y((()=>[Q,k("div",T,[W,h(m,{content:"是否开启用户信息: ",placement:"top"},{default:y((()=>[h(p,{modelValue:e.userSwitch,"onUpdate:modelValue":a[6]||(a[6]=a=>e.userSwitch=a),"active-color":"#13ce66","inactive-color":"#ff4949","active-value":!0,"inactive-value":!1},null,8,["modelValue"])])),_:1})]),k("div",X,[Y,h(m,{content:"是否开启系统消息: ",placement:"top"},{default:y((()=>[h(p,{modelValue:e.sysSwitch,"onUpdate:modelValue":a[7]||(a[7]=a=>e.sysSwitch=a),"active-color":"#13ce66","inactive-color":"#ff4949","active-value":!0,"inactive-value":!1},null,8,["modelValue"])])),_:1})]),k("div",Z,[ee,h(m,{content:"是否开启代办任务消息: ",placement:"top"},{default:y((()=>[h(p,{modelValue:e.taskSwitch,"onUpdate:modelValue":a[8]||(a[8]=a=>e.taskSwitch=a),"active-color":"#13ce66","inactive-color":"#ff4949","active-value":!0,"inactive-value":!1},null,8,["modelValue"])])),_:1})])])),_:1})])),_:1},8,["tab-position"])])),_:1})])])),_:1})])),_:1})])},j.__scopeId="data-v-7c5182d4";export{j as default};