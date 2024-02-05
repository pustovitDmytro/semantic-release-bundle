import{k as d,c as l,C as c,W as m,j as u,y as v,_ as h,l as f,K as r,h as R}from"./q-grzRItSl.js";import{P as C}from"./q-4cd3cGAD.js";import{r as y,b as g}from"./q-mmDR2EFA.js";import{useRecipesDetails as D,useRemove as E,useEdit as x,useDuplicate as I}from"./q-bXo0hPas.js";import{a as P}from"./q-5LSN8IXO.js";import{H as W}from"./q-DTQGOYfe.js";const j=()=>{d();const e=D(),a=l(y);if(!e.value)return c("div",null,null,$localize`pages.recipe.notfound`,1,"uy_0");const o=a.all[e.value.recipeId];if(!o)return c("div",null,null,$localize`pages.recipe.notfound`,1,"uy_1");const i=l(g),t=P(),n=new URL(`shared/${e.value.sharedToken}`,t.url.origin),s=E(),p=x(),_=I();return m(v(()=>h(()=>Promise.resolve().then(()=>U),void 0),"s_VJICRF6WIcY",[_,p,s,o,n,i])),u(C,{recipe:o,shareURL:n},3,"uy_3")},L=({cleanup:e})=>{const[a,o,i,t,n,s]=f();s.header=u(W,{onDuplicate:a,onEdit:o,onRemove:i,recipe:t,shareURL:n,[r]:{onDuplicate:r,onEdit:r,onRemove:r}},3,"uy_2"),document.title=t.title,e(()=>s.header=null)},U=Object.freeze(Object.defineProperty({__proto__:null,_hW:R,s_VJICRF6WIcY:L,s_kt7AVuqFcpc:j},Symbol.toStringTag,{value:"Module"}));export{R as _hW,L as s_VJICRF6WIcY,j as s_kt7AVuqFcpc};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
