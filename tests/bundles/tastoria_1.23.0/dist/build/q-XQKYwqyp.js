import{l as u,j as l,K as n,b as i,k as h,C as p,c as _,W as d,y as m,_ as f,h as v}from"./q-grzRItSl.js";import{H as C}from"./q-DTQGOYfe.js";import{P as g}from"./q-4cd3cGAD.js";import{b as y}from"./q-mmDR2EFA.js";import{useRecipesDetails as D,useDuplicate as W}from"./q-K7SEXFaB.js";import{a as b}from"./q-5LSN8IXO.js";const P=({cleanup:e})=>{const[a,s,r,o]=u();o.header=l(C,{get recipe(){return r.value.recipe},onDuplicate:a,shareURL:s,[n]:{onDuplicate:n,recipe:i(t=>t.value.recipe,[r])}},3,"Ch_1"),e(()=>o.header=null)},U=()=>{h();const e=D();if(!e.value)return p("div",null,null,$localize`pages.shared.notfound`,1,"Ch_0");const a=_(y),s=b(),r=new URL(`shared/${e.value.sharedToken}`,s.url.origin),o=e.value.recipe,t=W();return d(m(()=>f(()=>Promise.resolve().then(()=>j),void 0),"s_KWfHhWD0JGo",[t,r,e,a])),l(g,{recipe:o,shareURL:r,get sharedBy(){return e.value.sharedBy},[n]:{sharedBy:i(c=>c.value.sharedBy,[e])}},3,"Ch_2")},j=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_BWz0EYUbbMA:U,s_KWfHhWD0JGo:P},Symbol.toStringTag,{value:"Module"}));export{v as _hW,U as s_BWz0EYUbbMA,P as s_KWfHhWD0JGo};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
