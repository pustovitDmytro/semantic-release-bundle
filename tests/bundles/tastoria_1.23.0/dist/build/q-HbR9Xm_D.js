import{V as a,S as c,y as r,_ as u}from"./q-grzRItSl.js";import{G as i}from"./q-5LSN8IXO.js";const f=i(c("s_fgtOcmtL8oI")),y=i(c("s_V2ihaXLGifY"));function p(o,e=1e3){let t;return(...s)=>{t||o.apply(null,s),clearTimeout(t),t=setTimeout(()=>{t=void 0},e)}}async function d(o,e){const t=await fetch("/api/sync/recipes",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(Object.values(e))}),{implement:s}=await t.json();s.forEach(n=>{["UPDATE_LOCAL","ADD_LOCAL"].includes(n.type)&&(e[n.recipe.id]=n.recipe)})}const m=p((o,e)=>d(o,e)),S=i(c("s_6fOr8kSQFnw")),L=a(r(()=>u(()=>import("./q-RXi5Bn95.js"),__vite__mapDeps([])),"s_p2XblwHqQHk"));export{m as _auto_debouncedSync,L as default,S as useRecipes,f as useSession,y as useSettings};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
