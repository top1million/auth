import{r as t,l as n,o as d,d as l}from"./app.68da1afe.js";const i=["value"],f={__name:"Input",props:{modelValue:String},emits:["update:modelValue"],setup(r,{expose:u}){const e=t(null);return n(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),u({focus:()=>e.value.focus()}),(a,o)=>(d(),l("input",{ref_key:"input",ref:e,class:"dark:bg-gray-900 border-gray-300 dark:border-gray-600 focus:border-indigo-300 focus:dark:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:shadow-gray-700",value:r.modelValue,onInput:o[0]||(o[0]=s=>a.$emit("update:modelValue",s.target.value))},null,40,i))}};export{f as _};
