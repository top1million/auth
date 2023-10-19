import{r as c,T as M,i as T,l as A,E as B,d as r,t as k,u as p,b as n,f as u,w as h,e as f,a as t,F as R,g as F,o,y as U}from"./app.68da1afe.js";import{_ as w}from"./SecondaryButton.af35b469.js";import{_ as V}from"./Button.64ca3b3a.js";import W from"./RegisterKey.4bf14cdd.js";import D from"./DeleteKeyModal.0959db0b.js";import j from"./UpdateKey.13bee926.js";import{b as I,w as K,a as L}from"./index.d83b2790.js";import"./Label.24c07f87.js";import"./Input.0751bc64.js";import"./InputError.b8b84cca.js";import"./WaitForKey.9cd4c192.js";import"./ConfirmationModal.fc1c1dec.js";import"./Modal.bc55d3d6.js";import"./DangerButton.fce4df93.js";const O={key:0},q={key:1,class:"p-6 sm:px-20 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800"},z={key:2,class:"p-6 sm:px-20 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800"},G={key:3,class:"p-6 sm:px-20 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800"},H=t("h1",{class:"font-semibold text-xl text-gray-900 dark:text-slate-100 leading-tight mb-8"}," Manage your Webauthn Keys ",-1),J={key:0,class:"dark:text-gray-100 text-lg bg-teal-50 dark:bg-teal-800 border-t-2 border-teal-200 dark:border-teal-500 rounded-b mb-4 px-4 py-8 shadow-md"},P={class:"shadow dark:shadow-gray-700 overflow-hidden border-b border-gray-200 dark:border-gray-800 sm:rounded-lg"},Q={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-800"},X=t("thead",{class:"bg-gray-50 dark:bg-slate-800"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider"}," Name "),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider hidden md:block"}," Last use "),t("th",{scope:"col",class:"relative px-6 py-3"},[t("span",{class:"sr-only"},"Actions")])])],-1),Y={class:"bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-800"},Z={key:0},ee=t("td",{colspan:"3",class:"px-6 py-4 whitespace-nowrap text-center"},[t("em",null,"No keys registered yet")],-1),te=[ee],ae={class:"px-6 py-4 whitespace-nowrap"},se={class:"text-sm font-medium text-gray-900 dark:text-slate-100"},re={class:"px-6 py-4 whitespace-nowrap time hidden md:block"},oe={class:"text-sm text-gray-500 dark:text-gray-300"},ne={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},ie={class:"mt-8 text-2xl"},fe={__name:"WebauthnKeys",props:{webauthnKeys:Array,publicKey:Object},setup(g){const y=g,v=c(!0),i=c(""),m=c(!1),d=M({name:""}),b=c(null),l=c(null),C=T(()=>l.value>0?y.webauthnKeys.find(s=>s.id===l.value).name:"");A(()=>{I()||(v.value=!1,i.value=K()),y.publicKey&&(x(),B().then(()=>_(y.publicKey)))});const S=(s,e)=>{switch(s){case"InvalidStateError":return"This key is already registered. It\u2019s not necessary to register it again.";case"NotAllowedError":return"The operation either timed out or was not allowed.";default:return e}},x=()=>{i.value="",m.value=!0},$=()=>{i.value="",d.clearErrors()},_=s=>{L(s).then(e=>N(e)).catch(e=>{i.value=S(e.name,e.message)})},N=s=>{d.transform(e=>({...e,...s})).post(route("webauthn.store"),{preserveScroll:!0,preserveState:!0,onSuccess:()=>{m.value=!1,d.reset()},onError:e=>{var a;i.value=(a=e.email)!=null?a:e.data.errors.webauthn}})};return(s,e)=>(o(),r("div",null,[v.value?m.value?(o(),r("div",q,[n(W,{"error-message":i.value,form:p(d),name:p(d).name,"onUpdate:name":e[0]||(e[0]=a=>p(d).name=a),onStart:$,onStop:e[1]||(e[1]=a=>m.value=!1),onRegister:_},null,8,["error-message","form","name"])])):l.value>0?(o(),r("div",z,[n(j,{keyid:l.value,"name-update":C.value,onClose:e[2]||(e[2]=a=>l.value=null)},null,8,["keyid","name-update"])])):(o(),r("div",G,[H,g.webauthnKeys.length>0?(o(),r("p",J,[u(" Try "),n(p(U),{href:s.route("logout"),method:"post",class:"underline"},{default:h(()=>[u("logging out")]),_:1},8,["href"]),u(" and logging back in without password, just using your registered key! ")])):f("",!0),t("div",P,[t("table",Q,[X,t("tbody",Y,[g.webauthnKeys.length===0?(o(),r("tr",Z,te)):f("",!0),(o(!0),r(R,null,F(g.webauthnKeys,a=>(o(),r("tr",{key:a.id},[t("td",ae,[t("strong",se,k(a.name),1)]),t("td",re,[t("span",oe,k(a.last_active),1)]),t("td",ne,[n(w,{class:"pointer text-indigo-400 dark:text-indigo-600 hover:text-indigo-600 hover:dark:text-indigo-400",href:"",onClick:E=>l.value=a.id},{default:h(()=>[u(" Update ")]),_:2},1032,["onClick"]),n(w,{class:"ml-2 pointer text-indigo-400 dark:text-indigo-600 hover:text-indigo-600 hover:dark:text-indigo-400",onClick:E=>b.value=a.id},{default:h(()=>[u(" Delete ")]),_:2},1032,["onClick"])])]))),128))])])]),t("div",ie,[n(V,{type:"button",onClick:x},{default:h(()=>[u(" Register a new key ")]),_:1})])])):(o(),r("div",O,k(p(K)()),1)),n(D,{keyid:b.value,onClose:e[3]||(e[3]=a=>b.value=null)},null,8,["keyid"])]))}};export{fe as default};
