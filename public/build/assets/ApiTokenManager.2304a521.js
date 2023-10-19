import{T as b,r as h,d as i,b as t,w as e,a as l,e as v,o as r,f as a,u as n,F as x,g as $,t as k,n as A}from"./app.68da1afe.js";import{_ as N}from"./ActionMessage.9ec19761.js";import{_ as j,a as P}from"./DialogModal.5652f893.js";import{_ as T}from"./Button.64ca3b3a.js";import{_ as U}from"./ConfirmationModal.fc1c1dec.js";import{_ as J}from"./DangerButton.fce4df93.js";import{_ as L}from"./FormSection.27ea7cef.js";import{_ as M}from"./Input.0751bc64.js";import{_ as w}from"./Checkbox.ae3d860c.js";import{_ as z}from"./InputError.b8b84cca.js";import{_ as S}from"./Label.24c07f87.js";import{_ as C}from"./SecondaryButton.af35b469.js";import{J as E}from"./SectionBorder.35d60cd0.js";import"./SectionTitle.11ce62b7.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.bc55d3d6.js";const Y={class:"col-span-6 sm:col-span-4"},q={key:0,class:"col-span-6"},G={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},H={class:"flex items-center"},K={class:"ml-2 text-sm text-gray-600 dark:text-gray-200"},O={key:0},Q={class:"mt-10 sm:mt-0"},R={class:"space-y-6"},W={class:"flex items-center"},X={key:0,class:"text-sm text-gray-400"},Z=["onClick"],ee=["onClick"],se=l("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),te={key:0,class:"mt-4 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded font-mono text-sm text-gray-500 dark:text-slate-500"},oe={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ae={class:"flex items-center"},ne={class:"ml-2 text-sm text-gray-600 dark:text-gray-200"},$e={__name:"ApiTokenManager",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(m){const c=b({name:"",permissions:m.defaultPermissions}),d=b({permissions:[]}),y=b({}),g=h(!1),p=h(null),f=h(null),I=()=>{c.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{g.value=!0,c.reset()}})},F=u=>{d.permissions=u.abilities,p.value=u},V=()=>{d.put(route("api-tokens.update",p.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>p.value=null})},D=u=>{f.value=u},B=()=>{y.delete(route("api-tokens.destroy",f.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>f.value=null})};return(u,o)=>(r(),i("div",null,[t(L,{onSubmitted:I},{title:e(()=>[a(" Create API Token ")]),description:e(()=>[a(" API tokens allow third-party services to authenticate with our application on your behalf. ")]),form:e(()=>[l("div",Y,[t(S,{for:"name",value:"Name"}),t(M,{id:"name",modelValue:n(c).name,"onUpdate:modelValue":o[0]||(o[0]=s=>n(c).name=s),type:"text",class:"mt-1 block w-full",autofocus:""},null,8,["modelValue"]),t(z,{message:n(c).errors.name,class:"mt-2"},null,8,["message"])]),m.availablePermissions.length>0?(r(),i("div",q,[t(S,{for:"permissions",value:"Permissions"}),l("div",G,[(r(!0),i(x,null,$(m.availablePermissions,s=>(r(),i("div",{key:s},[l("label",H,[t(w,{checked:n(c).permissions,"onUpdate:checked":o[1]||(o[1]=_=>n(c).permissions=_),value:s},null,8,["checked","value"]),l("span",K,k(s),1)])]))),128))])])):v("",!0)]),actions:e(()=>[t(N,{on:n(c).recentlySuccessful,class:"mr-3"},{default:e(()=>[a(" Created. ")]),_:1},8,["on"]),t(T,{class:A({"opacity-25":n(c).processing}),disabled:n(c).processing},{default:e(()=>[a(" Create ")]),_:1},8,["class","disabled"])]),_:1}),m.tokens.length>0?(r(),i("div",O,[t(E),l("div",Q,[t(j,null,{title:e(()=>[a(" Manage API Tokens ")]),description:e(()=>[a(" You may delete any of your existing tokens if they are no longer needed. ")]),content:e(()=>[l("div",R,[(r(!0),i(x,null,$(m.tokens,s=>(r(),i("div",{key:s.id,class:"flex items-center justify-between"},[l("div",null,k(s.name),1),l("div",W,[s.last_used_ago?(r(),i("div",X," Last used "+k(s.last_used_ago),1)):v("",!0),m.availablePermissions.length>0?(r(),i("button",{key:1,class:"cursor-pointer ml-6 text-sm text-gray-400 underline",onClick:_=>F(s)}," Permissions ",8,Z)):v("",!0),l("button",{class:"cursor-pointer ml-6 text-sm text-red-500",onClick:_=>D(s)}," Delete ",8,ee)])]))),128))])]),_:1})])])):v("",!0),t(P,{show:g.value,onClose:o[3]||(o[3]=s=>g.value=!1)},{title:e(()=>[a(" API Token ")]),content:e(()=>[se,u.$page.props.jetstream.flash.token?(r(),i("div",te,k(u.$page.props.jetstream.flash.token),1)):v("",!0)]),footer:e(()=>[t(C,{onClick:o[2]||(o[2]=s=>g.value=!1)},{default:e(()=>[a(" Close ")]),_:1})]),_:1},8,["show"]),t(P,{show:p.value!=null,onClose:o[6]||(o[6]=s=>p.value=null)},{title:e(()=>[a(" API Token Permissions ")]),content:e(()=>[l("div",oe,[(r(!0),i(x,null,$(m.availablePermissions,s=>(r(),i("div",{key:s},[l("label",ae,[t(w,{checked:n(d).permissions,"onUpdate:checked":o[4]||(o[4]=_=>n(d).permissions=_),value:s},null,8,["checked","value"]),l("span",ne,k(s),1)])]))),128))])]),footer:e(()=>[t(C,{onClick:o[5]||(o[5]=s=>p.value=null)},{default:e(()=>[a(" Cancel ")]),_:1}),t(T,{class:A(["ml-3",{"opacity-25":n(d).processing}]),disabled:n(d).processing,onClick:V},{default:e(()=>[a(" Save ")]),_:1},8,["class","disabled"])]),_:1},8,["show"]),t(U,{show:f.value!=null,onClose:o[8]||(o[8]=s=>f.value=null)},{title:e(()=>[a(" Delete API Token ")]),content:e(()=>[a(" Are you sure you would like to delete this API token? ")]),footer:e(()=>[t(C,{onClick:o[7]||(o[7]=s=>f.value=null)},{default:e(()=>[a(" Cancel ")]),_:1}),t(J,{class:A(["ml-3",{"opacity-25":n(y).processing}]),disabled:n(y).processing,onClick:B},{default:e(()=>[a(" Delete ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{$e as default};
