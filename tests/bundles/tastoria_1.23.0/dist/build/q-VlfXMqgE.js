import{l as u,y as c,_,o as d,c as b,j as r,C as l,K as s,d as E,h as I}from"./q-grzRItSl.js";import{q as f,f as w}from"./q-zkGDBpXz.js";import{B as k}from"./q-YTYDmSU9.js";import{G as z}from"./q-j7jyAGKz.js";import{a as L,L as h}from"./q-5LSN8IXO.js";import{T as v}from"./q-GF_g9cgo.js";import{a as P}from"./q-mmDR2EFA.js";import{useRedirect as $}from"./q--yq_ocOr.js";import"./q-IQTssp_s.js";import"./q-kZRfDn4W.js";import"./q-yQnnJER4.js";const T=()=>{const[n,o,t,i,a]=u();return f(c(()=>_(()=>Promise.resolve().then(()=>p),void 0),"s_bYD902tMjls",[n,t,a]),{app:o,signals:{main:i}})},X=async()=>{const[n,o,t]=u(),i=await w.signIn({email:o.value,password:t.value});n.submit(i)},C=async()=>{const[n,o,t]=u();f(c(()=>_(()=>Promise.resolve().then(()=>p),void 0),"s_ihI0IHnmX4E",[n]),{app:o,signals:{main:t}})},D=async()=>{const[n]=u(),o=await w.googleSignIn();n.submit(o)},U='"../../variables.css"',B="#1a602e",O="#c00026",V="_page_17jwd_4",M="_header_17jwd_13",R="_error_17jwd_18",x="_content_17jwd_25",A="_input_17jwd_32",G="_loginBtn_17jwd_36",Q="_footer_17jwd_42",S="_providers_17jwd_46",W="_hints_17jwd_58",Y="_signUpLink_17jwd_65",e={colors:U,primary_2:B,error_1:O,page:V,header:M,error:R,content:x,input:A,loginBtn:G,footer:Q,providers:S,hints:W,signUpLink:Y},q=()=>{const n=L(),o=$(),t=n.url.searchParams.get("email"),i=d(t||""),a=d(""),m=b(P),g=d(""),y=c(()=>_(()=>Promise.resolve().then(()=>p),void 0),"s_zVIe11ETelE",[o,m,i,g,a]),j=c(()=>_(()=>Promise.resolve().then(()=>p),void 0),"s_3vMiuQNycGQ",[o,m,g]);return r(E,{children:l("div",null,{class:e.page},[l("div",null,{class:e.header},[l("h1",null,null,$localize`pages.login.title`,1,null),l("h2",null,null,$localize`pages.login.subtitle`,1,null),l("p",null,{class:e.error},g,3,null)],1,null),l("div",null,{class:e.content},[r(v,{label:$localize`pages.login.email_key`,type:"email",value:i,get class(){return e.input},[s]:{class:s,type:s,value:s}},3,"6X_0"),r(v,{label:$localize`pages.login.password_key`,type:"password",value:a,get class(){return e.input},[s]:{class:s,type:s,value:s}},3,"6X_1"),l("div",null,{class:e.hints},r(h,{get class(){return e.signUpLink},children:$localize`pages.login.forgot_password`,href:"/forgot_password",prefetch:!0,[s]:{class:s,href:s,prefetch:s}},1,"6X_2"),1,null),r(k,{get class(){return e.loginBtn},children:$localize`pages.login.logIn_btn`,onClick:y,[s]:{class:s,onClick:s}},1,"6X_3"),l("div",null,{class:e.providers},r(z,{onClick$:j,[s]:{onClick$:s}},3,"6X_4"),1,null)],1,null),l("div",null,{class:e.footer},[$localize`pages.login.signUp_text`,r(h,{get class(){return e.signUpLink},children:$localize`pages.login.signUp_btn`,href:"/signup",prefetch:!0,[s]:{class:s,href:s,prefetch:s}},1,"6X_5")],1,null)],1,null)},1,"6X_6")},p=Object.freeze(Object.defineProperty({__proto__:null,_hW:I,s_3vMiuQNycGQ:C,s_bYD902tMjls:X,s_ihI0IHnmX4E:D,s_lbb01eDYWeI:q,s_zVIe11ETelE:T},Symbol.toStringTag,{value:"Module"}));export{I as _hW,C as s_3vMiuQNycGQ,X as s_bYD902tMjls,D as s_ihI0IHnmX4E,q as s_lbb01eDYWeI,T as s_zVIe11ETelE};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
