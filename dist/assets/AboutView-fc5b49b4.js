import{d as v,r as a,c as f,o as d,a as m,b as t,t as s,u as p,e as l,f as C,F as j}from"./index-9bb6db20.js";const k=v("counter",()=>{const e=a(0),n=f(()=>e.value*2);function o(){e.value++}return{count:e,doubleCount:n,increment:o}}),_={class:""},A=t("h3",null,"Count Item",-1),g={__name:"ItemCount",props:{count:Number,obj:Object},setup(e){const n=e,o=()=>{console.log("test"),n.obj.a+=1,n.obj.b.c+=1};return(r,u)=>(d(),m("div",_,[A,t("div",null,s(e.count),1),t("button",{onClick:u[0]||(u[0]=i=>r.$emit("add"))},"Click In CPN"),t("div",null,s(e.obj),1),t("button",{onClick:o},"click")]))}},$={__name:"AboutView",setup(e){const n=k(),o=a(0),r=a({a:1,b:{c:2}}),u=p(),i=a("Wellcome");return(h,c)=>(d(),m(j,null,[t("h1",null,s(i.value),1),t("div",null,s(l(u).userAuth.data&&l(u).userAuth.data.email||"you are not login"),1),t("h2",null,s(l(n).count),1),t("button",{onClick:c[0]||(c[0]=b=>l(n).increment())},"Add"),C(g,{onAdd:c[1]||(c[1]=b=>o.value++),count:o.value,obj:r.value},null,8,["count","obj"])],64))}};export{$ as default};
