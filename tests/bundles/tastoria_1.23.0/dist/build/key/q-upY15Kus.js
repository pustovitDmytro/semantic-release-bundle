import{V as u,y as a,_ as g}from"./q-grzRItSl.js";function _(t,n){let e=BigInt(0);return[...t].map(o=>n.indexOf(o)).forEach((o,s)=>{const i=BigInt(t.length-s-1);e+=BigInt(o)*BigInt(BigInt(n.length)**i)}),e}const c=[..."abcdefghijklmnopqrstuvwxyz",..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",..."0123456789"],r=Number.MAX_SAFE_INTEGER;function I(t){const n=_(t,c);return Number(n%BigInt(r))/r}const d=u(a(()=>g(()=>import("./q-D9fpdikR.js"),__vite__mapDeps([])),"s_CfLs6mTcYqk"));export{d as H,I as g};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
