import{T as N,r as p,c as g,w as a,o as d,f as i,d as U,a as n,b as o,s as k,v as P,J as B,k as b,e as w,u as s,n as x,O as j}from"./app.68da1afe.js";import{_ as F}from"./Button.64ca3b3a.js";import{_ as O}from"./FormSection.27ea7cef.js";import{_ as y}from"./Input.0751bc64.js";import{_ as f}from"./InputError.b8b84cca.js";import{_}from"./Label.24c07f87.js";import{_ as R}from"./ActionMessage.9ec19761.js";import{_ as S}from"./SecondaryButton.af35b469.js";import"./SectionTitle.11ce62b7.js";import"./_plugin-vue_export-helper.cdc0426e.js";const T={key:0,class:"col-span-6 sm:col-span-4"},z={class:"mt-2"},A=["src","alt"],D={class:"mt-2"},E={class:"col-span-6 sm:col-span-4"},J={class:"col-span-6 sm:col-span-4"},Z={__name:"UpdateProfileInformationForm",props:{user:Object},setup(u){const v=u,e=N({_method:"PUT",name:v.user.name,email:v.user.email,photo:null});p(null);const m=p(null),t=p(null),V=()=>{t.value&&(e.photo=t.value.files[0]),e.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>h()})},C=()=>{t.value.click()},$=()=>{const l=t.value.files[0];if(!l)return;const r=new FileReader;r.onload=c=>{m.value=c.target.result},r.readAsDataURL(l)},I=()=>{j.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{m.value=null,h()}})},h=()=>{var l;(l=t.value)!=null&&l.value&&(t.value.value=null)};return(l,r)=>(d(),g(O,{onSubmitted:V},{title:a(()=>[i(" Profile Information ")]),description:a(()=>[i(" Update your account's profile information and email address. ")]),form:a(()=>[l.$page.props.jetstream.managesProfilePhotos?(d(),U("div",T,[n("input",{ref_key:"photoInput",ref:t,type:"file",class:"hidden",onChange:$},null,544),o(_,{for:"photo",value:"Photo"}),k(n("div",z,[n("img",{src:u.user.profile_photo_url,alt:u.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,A)],512),[[P,!m.value]]),k(n("div",D,[n("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:B("background-image: url('"+m.value+"');")},null,4)],512),[[P,m.value]]),o(S,{class:"mt-2 mr-2",type:"button",onClick:b(C,["prevent"])},{default:a(()=>[i(" Select A New Photo ")]),_:1},8,["onClick"]),u.user.profile_photo_path?(d(),g(S,{key:0,type:"button",class:"mt-2",onClick:b(I,["prevent"])},{default:a(()=>[i(" Remove Photo ")]),_:1},8,["onClick"])):w("",!0),o(f,{message:s(e).errors.photo,class:"mt-2"},null,8,["message"])])):w("",!0),n("div",E,[o(_,{for:"name",value:"Name"}),o(y,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":r[0]||(r[0]=c=>s(e).name=c),type:"text",class:"mt-1 block w-full",autocomplete:"name"},null,8,["modelValue"]),o(f,{message:s(e).errors.name,class:"mt-2"},null,8,["message"])]),n("div",J,[o(_,{for:"email",value:"Email"}),o(y,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":r[1]||(r[1]=c=>s(e).email=c),type:"email",class:"mt-1 block w-full"},null,8,["modelValue"]),o(f,{message:s(e).errors.email,class:"mt-2"},null,8,["message"])])]),actions:a(()=>[o(R,{on:s(e).recentlySuccessful,class:"mr-3"},{default:a(()=>[i(" Saved. ")]),_:1},8,["on"]),o(F,{class:x({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:a(()=>[i(" Save ")]),_:1},8,["class","disabled"])]),_:1}))}};export{Z as default};