import{_ as T,r as u,o as n,a as l,b as t,F as L,g as M,w as R,v as S,h as A,n as B,i as k,t as y,j as G,p as N,k as V}from"./index-8c51cf9d.js";const I="/vue3-demo/assets/cat-4932f092.jpg",K="/vue3-demo/assets/user-f89f81de.png";const i=d=>(N("data-v-9c0cab79"),d=d(),V(),d),P={class:"cat-body"},W={class:"cat-container"},j=i(()=>t("h1",{class:"text-center cat-title pt-4"},"CatGPT",-1)),D=i(()=>t("div",{class:"text-center fs-6 fst-italic"},"What if ChatGPT were a cat?",-1)),F={key:0,class:"c-content c-b-cat"},z={class:"c-wrap d-flex"},E=i(()=>t("img",{class:"me-2",src:I},null,-1)),H={class:"content"},U={key:0,class:"animation-text"},q={key:1,class:"c-content"},J={class:"c-wrap d-flex"},O=i(()=>t("img",{class:"me-2",src:K},null,-1)),Q={class:"content"},X={class:"d-flex input-box text-center align-items-center"},Y=["onKeypress"],Z=i(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[t("path",{fill:"currentColor",d:"M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"})],-1)),$=[Z],tt=i(()=>t("div",{class:"about text-center mt-2 fs-6"},[k(" This site was created by "),t("a",{href:"https://www.facebook.com/doan.relife",target:"_blank",class:"text-reset"},"Đoàn Nguyễn")],-1)),et={__name:"CatGpt",setup(d){const c=u([]),p=u(!1),_=u(""),v=u(null),m=u(null),f=(e=" meow",a)=>{const s=c.value.length-1;if(a){c.value[s].showAnimation=!1;return}c.value[s].content+=e},w=async e=>{const a=e||Math.random()*300;return new Promise(s=>setTimeout(s,a))},x=async e=>{await w(1e3),console.log(e);for(let a=0;a<e.length;a++){const s=e[a];await w(),f(" "+s)}f("",!0)};function b(e,a){return Math.random()*(a-e)+e}const g=async()=>{const e=_.value.trim().toLocaleLowerCase();if(!e||p.value)return;const a={author:"you",content:e};c.value.push(a);const s={author:"cat",content:"",showAnimation:!0};c.value.push(s);let o=[],h="";switch(e){case"meow":case"meo":h="Bắt trước là hành động của kẻ tiểu nhân!",o=h.split(" ");break;case"woof":case"gâu":h="Ngoan lắm!",o=h.split(" ");break;case"shut up":case"câm mồm":for(let r=0;r<1e3;r++)o.push("meow");o.push("meow.");break;default:const C=b(1,10);for(let r=0;r<C-1;r++)o.push("meow");o.push("meow.");break}_.value="",p.value=!0,await B(),m.value.scrollTop=m.value.scrollHeight,await x(o),p.value=!1,v.value.focus()};return(e,a)=>(n(),l("div",P,[t("div",null,[t("div",W,[j,D,t("div",{ref_key:"chatWrapRef",ref:m,class:"cat-wrap my-3"},[(n(!0),l(L,null,M(c.value,(s,o)=>(n(),l("div",{key:o},[s.author=="cat"?(n(),l("div",F,[t("div",z,[E,t("div",H,[k(y(s.content)+" ",1),s.showAnimation?(n(),l("span",U)):G("",!0)])])])):(n(),l("div",q,[t("div",J,[O,t("div",Q,y(s.content),1)])]))]))),128))],512),t("div",X,[R(t("input",{ref_key:"inputRef",ref:v,onKeypress:A(g,["enter"]),"onUpdate:modelValue":a[0]||(a[0]=s=>_.value=s),class:"w-100",type:"text",placeholder:"Type your message here"},null,40,Y),[[S,_.value]]),t("div",{onClick:g,class:"btn-icon ms-2"},$)]),tt])])]))}},at=T(et,[["__scopeId","data-v-9c0cab79"]]);export{at as default};