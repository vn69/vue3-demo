import{r as c,c as N,w as T,g as d,o as r,a as m,b as v,f as t,h as A,i as n,T as L,j as S,k as s,F as U,l as B,e as F}from"./index-9bb6db20.js";const I={class:"container w-50"},K=v("h4",null,"Todo List",-1),O={class:"d-flex"},j={class:"my-2"},J={key:0,class:"my-2 d-flex"},E={__name:"TodoListView",setup(R){const y="todo-list-stoge",u=c(""),_=c("all"),e=c(JSON.parse(localStorage.getItem(y))||[]),h=c(null),k=N(()=>{switch(_.value){case"all":return e.value;case"complete":return e.value.filter(l=>l.isDone);case"uncomplete":return e.value.filter(l=>!l.isDone);default:return e.value}}),V=()=>{var o;const l=u.value.trim();if(l){const p={id:Date.now(),name:l,isDone:!1};e.value.push(p),u.value="",(o=h.value)==null||o.focus()}},g=l=>{e.value=e.value.filter(o=>o.id!==l)},w=()=>{e.value=e.value.filter(l=>!l.isDone)},C=()=>{e.value.filter(l=>l.isDone=!0)};return T(()=>e.value,()=>{localStorage.setItem(y,JSON.stringify(e.value))}),(l,o)=>{const p=d("el-input"),i=d("el-button"),x=d("el-checkbox"),f=d("el-radio-button"),D=d("el-radio-group");return r(),m("div",I,[K,v("div",O,[t(p,{onKeypress:A(V,["enter"]),ref_key:"inputRef",ref:h,class:"me-2",modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=a=>u.value=a),placeholder:"Please input"},null,8,["onKeypress","modelValue"]),t(i,{disabled:!u.value.length,onClick:V,type:"primary"},{default:n(()=>[s("Add")]),_:1},8,["disabled"])]),v("div",j,[t(L,{name:"fade"},{default:n(()=>[(r(!0),m(U,null,B(F(k),a=>(r(),m("div",{key:a.id,class:"item d-flex justify-content-between"},[t(x,{modelValue:a.isDone,"onUpdate:modelValue":b=>a.isDone=b,label:a.name,size:"large"},null,8,["modelValue","onUpdate:modelValue","label"]),t(i,{type:"danger",onClick:b=>g(a.id)},{default:n(()=>[s("delete")]),_:2},1032,["onClick"])]))),128))]),_:1})]),e.value.length?(r(),m("div",J,[t(D,{class:"me-2",modelValue:_.value,"onUpdate:modelValue":o[1]||(o[1]=a=>_.value=a)},{default:n(()=>[t(f,{label:"all"},{default:n(()=>[s("All")]),_:1}),t(f,{label:"complete"},{default:n(()=>[s("Complete")]),_:1}),t(f,{label:"uncomplete"},{default:n(()=>[s("Uncomplete")]),_:1})]),_:1},8,["modelValue"]),t(i,{type:"primary",onClick:C},{default:n(()=>[s("Check All")]),_:1}),t(i,{type:"primary",onClick:w},{default:n(()=>[s("Clear")]),_:1})])):S("",!0)])}}};export{E as default};
