import{i as r,K as c,o as e,d as t,a as o,F as d,g as l,t as _,e as m}from"./app.68da1afe.js";const u={key:0},p=o("div",{class:"font-medium text-red-600 dark:text-red-400"}," Whoops! Something went wrong. ",-1),h={class:"mt-3 list-disc list-inside text-sm text-red-600 dark:text-red-400"},y={__name:"ValidationErrors",setup(k){const s=r(()=>c().props.errors),a=r(()=>Object.keys(s.value).length>0);return(x,g)=>a.value?(e(),t("div",u,[p,o("ul",h,[(e(!0),t(d,null,l(s.value,(n,i)=>(e(),t("li",{key:i},_(n),1))),128))])])):m("",!0)}};export{y as _};
