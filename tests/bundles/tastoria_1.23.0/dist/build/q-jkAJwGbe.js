import{l as m,k as B,o as r,c as S,j as o,C as n,d as h,K as e,y as p,_,h as b}from"./q-grzRItSl.js";import{q as C,f as z}from"./q-zkGDBpXz.js";import{B as y}from"./q-YTYDmSU9.js";import{G as P}from"./q-j7jyAGKz.js";import{T as u}from"./q-GF_g9cgo.js";import{a as U}from"./q-mmDR2EFA.js";import{a as E}from"./q-5LSN8IXO.js";import{useRedirect as I}from"./q-4aq86koy.js";import"./q-IQTssp_s.js";import"./q-kZRfDn4W.js";import"./q-yQnnJER4.js";const w=()=>{const[t,l,a]=m();return C(a,{app:t,signals:{main:l}})},$='"../../variables.css"',j="#1a602e",O="#c00026",T="_page_zm4o0_4",D="_header_zm4o0_13",A="_error_zm4o0_18",W="_content_zm4o0_25",x="_input_zm4o0_32",N="_signUpBtn_zm4o0_36",Q="_providers_zm4o0_41",R="_googleBtn_zm4o0_47",s={colors:$,primary_2:j,error_1:O,page:T,header:D,error:A,content:W,input:x,signUpBtn:N,providers:Q,googleBtn:R},K=()=>{B();const t=I(),l=E(),a=r("create-user"),i=r(""),c=r(""),d=r(""),f=S(U),v=r(""),L=p(()=>_(()=>Promise.resolve().then(()=>g),void 0),"s_L5WjaABlSHQ",[f,v,p(()=>_(()=>Promise.resolve().then(()=>g),void 0),"s_zhcPcgOzhs4",[i,d,l,c,a])]),k=p(()=>_(()=>Promise.resolve().then(()=>g),void 0),"s_yYKEsMDQmv8",[t]);return o(h,{children:n("div",null,{class:s.page},[n("div",null,{class:s.header},[n("h1",null,null,$localize`pages.signup.title`,1,null),n("h2",null,null,$localize`pages.signup.subtitle`,1,null),n("p",null,{class:s.error},v,3,null)],1,null),n("div",null,{class:s.content},[a.value==="verify-email"&&n("div",null,null,$localize`pages.signup.verify_email_sent`,1,"iL_0"),a.value==="create-user"&&o(h,{children:[o(u,{label:$localize`pages.signup.email_key`,type:"email",value:i,get class(){return s.input},[e]:{class:e,type:e,value:e}},3,"iL_1"),o(u,{label:$localize`pages.signup.fullName_key`,type:"text",value:d,get class(){return s.input},[e]:{class:e,type:e,value:e}},3,"iL_2"),o(u,{label:$localize`pages.signup.password_key`,type:"password",value:c,get class(){return s.input},[e]:{class:e,type:e,value:e}},3,"iL_3"),o(y,{get class(){return s.signUpBtn},children:$localize`pages.signup.SignUp_btn`,onClick:L,[e]:{class:e,onClick:e}},1,"iL_4"),n("div",null,{class:s.providers},o(y,{icon:!0,get class(){return s.googleBtn},children:o(P,null,3,"iL_5"),onClick:k,[e]:{class:e,icon:e,onClick:e}},3,"iL_6"),1,null)]},1,"iL_7")],1,null)],1,null)},1,"iL_8")},M=async()=>{const[t,l,a,i,c]=m();await z.signUp({email:t.value,password:i.value,fullName:l.value},a.url),c.value="verify-email"},V=async()=>{const[t]=m(),l=await z.googleSignIn();console.log(`Signed In as ${l.email}`),t.submit(l)},g=Object.freeze(Object.defineProperty({__proto__:null,_hW:b,s_L5WjaABlSHQ:w,s_fSr6TWou66o:K,s_yYKEsMDQmv8:V,s_zhcPcgOzhs4:M},Symbol.toStringTag,{value:"Module"}));export{b as _hW,w as s_L5WjaABlSHQ,K as s_fSr6TWou66o,V as s_yYKEsMDQmv8,M as s_zhcPcgOzhs4};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
