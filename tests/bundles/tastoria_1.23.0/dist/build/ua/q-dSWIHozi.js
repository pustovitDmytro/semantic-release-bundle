import{l,k as c,c as m,R as d,j as n,y as _,_ as u,K as s,C as v,i as p}from"./q-grzRItSl.js";import{f as R}from"./q-zkGDBpXz.js";import{L as f}from"./q-_rwT-h9b.js";import{p as a,s as i}from"./q--mBxzwYW.js";import{s as g}from"./q-mmDR2EFA.js";import"./q-IQTssp_s.js";import"./q-kZRfDn4W.js";import"./q-yQnnJER4.js";const j=async()=>{const[e,o]=l(),r=e.userId||o.user.value.id,t=await R.downloadImage(r,e.src);return URL.createObjectURL(t)},y=e=>{if(c(),!e.src)return a;const o=m(g),r=d(_(()=>u(()=>Promise.resolve().then(()=>b),void 0),"s_8FvSYREmv3k",[e,o]));return n(p,{onPending:()=>n(f,{get class(){return i.loader},[s]:{class:s}},3,"Wq_1"),onRejected:()=>a,onResolved:t=>v("img",{class:[i.image,e.class],src:t},{crossOrigin:"anonymous"},null,3,"Wq_2"),value:r,[s]:{onPending:s,onRejected:s,onResolved:s,value:s}},3,"Wq_3")},b=Object.freeze(Object.defineProperty({__proto__:null,s_8FvSYREmv3k:j,s_ziZJtmdAT4o:y},Symbol.toStringTag,{value:"Module"}));export{j as s_8FvSYREmv3k,y as s_ziZJtmdAT4o};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
