import{r as l,T as w,j as y,l as S,E as k,d as u,t as x,u as i,b as c,s as K,v as E,w as $,O as A,o as m,f as M}from"./app.68da1afe.js";import{_ as N}from"./InputError.b8b84cca.js";import{_ as T}from"./Button.64ca3b3a.js";import B from"./WaitForKey.9cd4c192.js";import{b as C,w as b,s as O}from"./index.d83b2790.js";const W={key:0},j={key:1},I={__name:"WebauthnLogin",props:{publicKey:Object,remember:Boolean},setup(h){const r=h,p=l(!0),s=l(""),a=l(!1),n=w({});y(()=>r.publicKey,t=>{s.value="",v(t)}),S(()=>{C()||(p.value=!1,s.value=b()),r.publicKey&&v(r.publicKey)});const _=(t,e)=>{switch(t){case"InvalidStateError":return"Unexpected error on login.";case"NotAllowedError":return"The operation either timed out or was not allowed.";default:return e}},f=()=>{s.value="",A.reload({only:["publicKey"]})},d=()=>{a.value=!1},v=t=>{a.value=!0,k().then(()=>O(t)).then(e=>g(e)).catch(e=>{s.value=_(e.name,e.message)})},g=t=>{n.transform(()=>({...t,remember:r.remember?"on":""})).post(route("webauthn.auth"),{preserveScroll:!0,preserveState:!0,onSuccess:()=>d(),onError:e=>{var o;s.value=(o=e.message)!=null?o:e.data.errors[0],d()}})};return(t,e)=>(m(),u("div",null,[p.value?(m(),u("div",j,[c(B,{"error-message":s.value,form:i(n),onRetry:e[0]||(e[0]=o=>f())},null,8,["error-message","form"]),c(N,{message:i(n).errors.data,class:"mt-2"},null,8,["message"]),K(c(T,{class:"ms-2",onClick:e[1]||(e[1]=o=>f())},{default:$(()=>[M(" Retry ")]),_:1},512),[[E,!a.value]])])):(m(),u("div",W,x(i(b)()),1))]))}};export{I as default};