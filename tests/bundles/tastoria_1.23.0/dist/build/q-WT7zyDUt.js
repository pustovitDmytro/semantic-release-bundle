import{M as a,d as y,c as k,W as C,C as _,k as P,y as u,j as g,L as M,_ as f,l as p,h as O}from"./q-grzRItSl.js";import{a as x}from"./q-mmDR2EFA.js";const N=t=>a(y,{children:a("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},t,{children:a("path",{d:"m7.952 16.048 8.125-8.125M16.091 16.034 7.91 7.85M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"})}))}),A=t=>a(y,{children:a("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t,{children:a("path",{fillRule:"evenodd",d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m3.293 4.293L10 13.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l6-6a1 1 0 1 0-1.414-1.414"})}))}),W='"../variables.css"',F="#00b27c",I="#c00026",L="_container_11qgk_3",R="_toast_11qgk_11",q="_icon_11qgk_22",E="_text_11qgk_25",S="_error_11qgk_29",Y="_success_11qgk_37",i={colors:W,primary_1:F,error_1:I,container:L,toast:R,icon:q,text:E,error:S,success:Y},V=t=>{const e=k(x);C(u(()=>f(()=>Promise.resolve().then(()=>h),void 0),"s_ZCYeT9dphPw",[e]));const s=u(()=>f(()=>Promise.resolve().then(()=>h),void 0),"s_fmhyHRvi4vk",[e]),n=Object.values(e.toasts);return _("div",{class:[i.container,t.class]},null,n.map(o=>P(_("div",{class:[i.toast,i[o.type]],onClick$:u(()=>f(()=>Promise.resolve().then(()=>h),void 0),"s_2CuA6WFPF6I",[s,o])},null,[_("div",null,{class:i.icon},o.type==="error"?g(N,null,3,"0P_0"):g(A,null,3,"0P_1"),1,null),_("span",null,{class:i.text},M(o,"text"),1,null)],0,o.id))),1,"0P_2")},z=()=>{const[t,e]=p();return t(e)},B=t=>{const[e]=p();delete e.toasts[t.id]};function l(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function d(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function H(t,e){const s=l(t);return isNaN(e)?d(t,NaN):(e&&s.setDate(s.getDate()+e),s)}function Z(t,e){const s=l(t);if(isNaN(e))return d(t,NaN);if(!e)return s;const n=s.getDate(),o=d(t,s.getTime());o.setMonth(s.getMonth()+e+1,0);const r=o.getDate();return n>=r?o:(s.setFullYear(o.getFullYear(),o.getMonth(),n),s)}function $(t,e){const{years:s=0,months:n=0,weeks:o=0,days:r=0,hours:c=0,minutes:w=0,seconds:D=0}=e,m=l(t),v=n||s?Z(m,n+s*12):m,b=r||o?H(v,r+o*7):v,T=w+c*60,j=(D+T*60)*1e3;return d(t,b.getTime()+j)}function J(t,e){const s=l(t),n=l(e);return s.getTime()>n.getTime()}const G=({cleanup:t,track:e})=>{const[s]=p(),n=new Date;e(()=>Object.keys(s.toasts));for(const r of Object.values(s.toasts))r.time||(r.time=n);const o=setTimeout(()=>{const r=Object.values(s.toasts).filter(c=>c.time&&J(new Date,$(c.time,{seconds:10})));for(const c of r)delete s.toasts[c.id]},1e4);t(()=>clearTimeout(o))},h=Object.freeze(Object.defineProperty({__proto__:null,_hW:O,s_2CuA6WFPF6I:z,s_ZCYeT9dphPw:G,s_fmhyHRvi4vk:B,s_wCL1uCJItwY:V},Symbol.toStringTag,{value:"Module"}));export{O as _hW,z as s_2CuA6WFPF6I,G as s_ZCYeT9dphPw,B as s_fmhyHRvi4vk,V as s_wCL1uCJItwY};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}