import{l as m,V as L,y as u,_ as c,c as r,o as A,W as O,C as l,L as g,j as p,K as n,h as x}from"./q-grzRItSl.js";import{B as z}from"./q-YTYDmSU9.js";import{s as E,a as P}from"./q-mmDR2EFA.js";import{l as $}from"./q-mhronzDO.js";import{useSignOut as B,useChangeLanguage as C}from"./q-atA6UO-Z.js";import"./q-5LSN8IXO.js";const S=async()=>{const[o]=m();o.submit()},V=async({track:o})=>{const[s,t,a]=m();o(()=>a.value),a.value!==s.language&&await t.submit({language:a.value})},W=L(u(()=>c(()=>import("./q-HVqqB4vK.js"),__vite__mapDeps([])),"s_z7UA7HOwm0c")),k='"../../variables.css"',j="#1a602e",D="#2e2d32",M="_page_15fn5_4",T="_header_15fn5_13",H="_footer_15fn5_18",I="_content_15fn5_32",R="_infoBox_15fn5_39",X="_infoLabel_15fn5_43",w="_button_15fn5_50",e={colors:k,primary_2:j,text_1:D,page:M,header:T,footer:H,content:I,infoBox:R,infoLabel:X,button:w},K=()=>{const o=r(E),s=r(P),{email:t,fullName:a,lastLoginAt:v}=o.user.value,b=[{label:$localize`pages.profile.email_key`,value:t},{label:$localize`pages.profile.fullName_key`,value:a},{label:$localize`pages.profile.lastLoginAt_key`,value:v}],_=A(s.language),h=B(),d=C(),y=u(()=>c(()=>Promise.resolve().then(()=>f),void 0),"s_SanWA9oubyM",[h]);return O(u(()=>c(()=>Promise.resolve().then(()=>f),void 0),"s_EHMO1shA4D0",[s,d,_])),l("div",null,{class:e.page},[l("div",null,{class:e.header},l("h1",null,null,$localize`pages.profile.title`,1,null),1,null),l("div",null,{class:e.content},[l("h2",null,null,$localize`pages.profile.personal_info_title`,1,null),...b.map(i=>l("div",null,{class:e.infoBox},[l("span",null,{class:e.infoLabel},g(i,"label"),1,null),l("span",null,{class:e.infoValue},g(i,"value"),1,null)],1,i.label)),l("h2",null,null,$localize`pages.profile.settings_title`,1,null),l("div",null,{class:e.infoBox},[l("span",null,{class:e.infoLabel},$localize`pages.profile.language_key`,1,null),p(W,{get class(){return e.infoValue},options:$,value:_,[n]:{class:n,options:n,value:n}},3,"cX_0")],1,null)],1,null),l("div",null,{class:e.footer},p(z,{get class(){return e.button},children:$localize`pages.profile.sign_out_btn`,onClick:y,[n]:{class:n,onClick:n}},1,"cX_1"),1,null)],1,"cX_2")},f=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_EHMO1shA4D0:V,s_JUvlWpPoQKc:K,s_SanWA9oubyM:S},Symbol.toStringTag,{value:"Module"}));export{x as _hW,V as s_EHMO1shA4D0,K as s_JUvlWpPoQKc,S as s_SanWA9oubyM};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
