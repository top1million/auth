import{r as p,I as q,o as t,d as a,a as l,p as N,b as s,w as o,f as r,t as b,H as R,n as w,E as I,T as O,i as Q,j as Y,c as h,e as u,u as F,F as D,g as U,K as j,O as P}from"./app.68da1afe.js";import{a as z,_ as G}from"./DialogModal.5652f893.js";import{_ as $}from"./Button.64ca3b3a.js";import{_ as B}from"./Input.0751bc64.js";import{_ as E}from"./InputError.b8b84cca.js";import{_ as C}from"./SecondaryButton.af35b469.js";import{_ as W}from"./DangerButton.fce4df93.js";import{_ as J}from"./Label.24c07f87.js";import"./SectionTitle.11ce62b7.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.bc55d3d6.js";const X={class:"mt-4"},y={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(g,{emit:x}){const c=p(!1),e=q({password:"",error:"",processing:!1}),i=p(null),v=()=>{axios.get(route("password.confirmation")).then(n=>{n.data.confirmed?x("confirmed"):(c.value=!0,setTimeout(()=>i.value.focus(),250))})},_=()=>{e.processing=!0,axios.post(route("password.confirm"),{password:e.password}).then(()=>{e.processing=!1,d(),I().then(()=>x("confirmed"))}).catch(n=>{e.processing=!1,e.error=n.response.data.errors.password[0],i.value.focus()})},d=()=>{c.value=!1,e.password="",e.error=""};return(n,m)=>(t(),a("span",null,[l("span",{onClick:v},[N(n.$slots,"default")]),s(z,{show:c.value,onClose:d},{title:o(()=>[r(b(g.title),1)]),content:o(()=>[r(b(g.content)+" ",1),l("div",X,[s(B,{ref_key:"passwordInput",ref:i,modelValue:e.password,"onUpdate:modelValue":m[0]||(m[0]=T=>e.password=T),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:R(_,["enter"])},null,8,["modelValue","onKeyup"]),s(E,{message:e.error,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[s(C,{onClick:d},{default:o(()=>[r(" Cancel ")]),_:1}),s($,{class:w(["ml-3",{"opacity-25":e.processing}]),disabled:e.processing,onClick:_},{default:o(()=>[r(b(g.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},Z={key:0,class:"text-lg font-medium text-gray-900 dark:text-slate-100"},ee={key:1,class:"text-lg font-medium text-gray-900 dark:text-slate-100"},te={key:2,class:"text-lg font-medium text-gray-900 dark:text-slate-100"},oe=l("div",{class:"mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-200"},[l("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1),ae={key:3},se={key:0},re={class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-200"},ne={key:0,class:"font-semibold"},le={key:1},ce=["innerHTML"],ie={key:0,class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-200"},ue={class:"font-semibold"},de=["innerHTML"],me={key:1,class:"mt-4"},fe={key:1},pe=l("div",{class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-200"},[l("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1),_e={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-800 rounded-lg"},ve={class:"mt-5"},he={key:0},ye={key:1},Ve={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(g){const x=g,c=p(!1),e=p(!1),i=p(!1),v=p(null),_=p(null),d=p([]),n=O({code:""}),m=Q(()=>{var f;return!c.value&&((f=j().props.auth.user)==null?void 0:f.two_factor_enabled)});Y(m,()=>{m.value||(n.reset(),n.clearErrors())});const T=()=>{c.value=!0,P.post(route("two-factor.enable"),{},{preserveScroll:!0,onSuccess:()=>Promise.all([H(),L(),S()]),onFinish:()=>{c.value=!1,e.value=x.requiresConfirmation}})},H=()=>axios.get(route("two-factor.qr-code")).then(f=>{v.value=f.data.svg}),L=()=>axios.get(route("two-factor.secret-key")).then(f=>{_.value=f.data.secretKey}),S=()=>axios.get(route("two-factor.recovery-codes")).then(f=>{d.value=f.data}),K=()=>{n.post(route("two-factor.confirm"),{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{e.value=!1,v.value=null,_.value=null}})},M=()=>{axios.post(route("two-factor.recovery-codes")).then(()=>S())},V=()=>{i.value=!0,P.delete(route("two-factor.disable"),{preserveScroll:!0,onSuccess:()=>{i.value=!1,e.value=!1}})};return(f,A)=>(t(),h(G,null,{title:o(()=>[r(" Two Factor Authentication ")]),description:o(()=>[r(" Add additional security to your account using two factor authentication. ")]),content:o(()=>[m.value&&!e.value?(t(),a("h3",Z," You have enabled two factor authentication. ")):m.value&&e.value?(t(),a("h3",ee," Finish enabling two factor authentication. ")):(t(),a("h3",te," You have not enabled two factor authentication. ")),oe,m.value?(t(),a("div",ae,[v.value?(t(),a("div",se,[l("div",re,[e.value?(t(),a("p",ne," To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")):(t(),a("p",le," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))]),l("div",{class:"mt-4",innerHTML:v.value},null,8,ce),_.value?(t(),a("div",ie,[l("p",ue,[r(" Setup Key: "),l("span",{innerHTML:_.value},null,8,de)])])):u("",!0),e.value?(t(),a("div",me,[s(J,{for:"code",value:"Code"}),s(B,{id:"code",modelValue:F(n).code,"onUpdate:modelValue":A[0]||(A[0]=k=>F(n).code=k),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:R(K,["enter"])},null,8,["modelValue","onKeyup"]),s(E,{message:F(n).errors.code,class:"mt-2"},null,8,["message"])])):u("",!0)])):u("",!0),d.value.length>0&&!e.value?(t(),a("div",fe,[pe,l("div",_e,[(t(!0),a(D,null,U(d.value,k=>(t(),a("div",{key:k},b(k),1))),128))])])):u("",!0)])):u("",!0),l("div",ve,[m.value?(t(),a("div",ye,[s(y,{onConfirmed:K},{default:o(()=>[e.value?(t(),h($,{key:0,type:"button",class:w(["mr-3",{"opacity-25":c.value}]),disabled:c.value},{default:o(()=>[r(" Confirm ")]),_:1},8,["class","disabled"])):u("",!0)]),_:1}),s(y,{onConfirmed:M},{default:o(()=>[d.value.length>0&&!e.value?(t(),h(C,{key:0,class:"mr-3"},{default:o(()=>[r(" Regenerate Recovery Codes ")]),_:1})):u("",!0)]),_:1}),s(y,{onConfirmed:S},{default:o(()=>[d.value.length===0&&!e.value?(t(),h(C,{key:0,class:"mr-3"},{default:o(()=>[r(" Show Recovery Codes ")]),_:1})):u("",!0)]),_:1}),s(y,{onConfirmed:V},{default:o(()=>[e.value?(t(),h(C,{key:0,class:w({"opacity-25":i.value}),disabled:i.value},{default:o(()=>[r(" Cancel ")]),_:1},8,["class","disabled"])):u("",!0)]),_:1}),s(y,{onConfirmed:V},{default:o(()=>[e.value?u("",!0):(t(),h(W,{key:0,class:w({"opacity-25":i.value}),disabled:i.value},{default:o(()=>[r(" Disable ")]),_:1},8,["class","disabled"]))]),_:1})])):(t(),a("div",he,[s(y,{onConfirmed:T},{default:o(()=>[s($,{type:"button",class:w({"opacity-25":c.value}),disabled:c.value},{default:o(()=>[r(" Enable ")]),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Ve as default};