import{a as _,k as h,j as b,F as u,I as k,v,_ as f,A}from"./q-9157976a.js";import{u as P,a as g,g as C,b as D}from"./q-9d0aec5c.js";const y=a=>{const e=P(),t=g(),{onClick$:o,reload:r,replaceState:n,scroll:d,...s}=(()=>a)(),i=_(()=>C({...s,reload:r},t)),l=_(()=>D(a,i,t));s["preventdefault:click"]=!!i,s.href=i||a.href;const c=l!=null?u(v(()=>f(()=>import("./q-b4c3d375.js"),["build/q-b4c3d375.js","build/q-9d0aec5c.js","build/q-9157976a.js"]),"s_eBQ0vFsFKsk")):void 0,p=u(v(()=>f(()=>Promise.resolve().then(()=>L),void 0),"s_i1Cv0pYJNR0",[e,r,n,d]));return h("a",{...s,children:b(k,null,3,"AD_0"),"data-prefetch":l,onClick$:[o,p],onFocus$:c,onMouseOver$:c,onQVisible$:c},null,0,"AD_1")},F=async(a,e)=>{const[t,o,r,n]=A();e.hasAttribute("preventdefault:click")&&(e.hasAttribute("q:nbs")?await t(location.href,{type:"popstate"}):e.href&&(e.setAttribute("aria-pressed","true"),await t(e.href,{forceReload:o,replaceState:r,scroll:n}),e.removeAttribute("aria-pressed")))},L=Object.freeze(Object.defineProperty({__proto__:null,s_8gdLBszqbaM:y,s_i1Cv0pYJNR0:F},Symbol.toStringTag,{value:"Module"}));export{y as s_8gdLBszqbaM,F as s_i1Cv0pYJNR0};
