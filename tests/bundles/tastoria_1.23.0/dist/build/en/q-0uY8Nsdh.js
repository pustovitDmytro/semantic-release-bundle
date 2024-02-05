import{l as c,j as a,K as i,V as l,y as p,_,c as n,o as m,W as d,h as u}from"./q-grzRItSl.js";import{H as O}from"./q-Qs8Yj10d.js";import{r as h,b as v}from"./q-mmDR2EFA.js";import{useOpenRecipe as R}from"./q-npDxNQoH.js";import"./q-5LSN8IXO.js";const b=({cleanup:s})=>{const[o,r,t]=c();t.header=a(O,{list:o,onOpenRecipe:r,[i]:{onOpenRecipe:i}},3,"vn_0"),s(()=>t.header=null)},W=l(p(()=>_(()=>import("./q-Dogkc32W.js"),__vite__mapDeps([])),"s_wC2GB5oqF04")),f=()=>{const s=n(h),o=n(v),r=R(),t=Object.values(s.all).map(e=>({recipe:e,isVisible:m(!0)}));return d(p(()=>_(()=>Promise.resolve().then(()=>C),void 0),"s_KnanWhPWR7s",[t,r,o])),a(W,{data:t.filter(e=>e.isVisible.value&&!e.recipe.deletedAt).map(e=>e.recipe)},3,"vn_1")},C=Object.freeze(Object.defineProperty({__proto__:null,_hW:u,s_KnanWhPWR7s:b,s_yZ7b1zQICcY:f},Symbol.toStringTag,{value:"Module"}));export{u as _hW,b as s_KnanWhPWR7s,f as s_yZ7b1zQICcY};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
