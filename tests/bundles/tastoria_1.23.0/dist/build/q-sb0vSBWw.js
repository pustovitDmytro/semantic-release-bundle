import{l as d,C as i,m as b,W as h,j as n,K as o,z as u,d as _,y as p,_ as m,h as g}from"./q-grzRItSl.js";import{useUserAgentDetails as w,_auto_InfoBox as r,_auto_Separator as z,_auto_version as W}from"./q-3FzcUSPQ.js";import{s}from"./q-aVa3545O.js";import"./q-5LSN8IXO.js";const f=()=>{const[a]=d();a.availWidth=window.screen.availWidth,a.availHeight=window.screen.availHeight},O="/build/q-ncWs4irB.webp 200w, /build/q-FTGTsork.webp 400w, /build/q-eI_OfbIP.webp 600w, /build/q-R3OAhY0A.webp 760w",y=760,P=696,I={srcSet:O,width:y,height:P};function S(a,l,t,e){return i("img",{decoding:"async",loading:"lazy",...a},I,void 0,3,l)}const L="MIT",E=()=>{const a=w(),l=b({availWidth:0,availHeight:0}),t=["browser","engine","os"].filter(e=>a.value[e]).map(e=>{const c=a.value[e].name,v=a.value[e].version;return{label:e,name:c,value:v}});return l.availWidth&&t.push({name:$localize`pages.about.widthLabel`,value:l.availWidth.toFixed(0)}),l.availHeight&&t.push({name:$localize`pages.about.heightLabel`,value:l.availHeight.toFixed(0)}),a.value.device.vendor&&t.push({label:$localize`pages.about.deviceLabel`,name:a.value.device.vendor,value:a.value.device.model}),t.push({label:$localize`pages.about.architectureLabel`,name:a.value.cpu.architecture}),h(p(()=>m(()=>Promise.resolve().then(()=>T),void 0),"s_l5W5JXP0y9Q",[l])),n(_,{children:i("div",null,{class:s.page},[i("div",null,{class:s.paper},[i("div",null,{class:s.header},"Tastoria",3,null),i("div",null,{class:s.content},[n(r,{name:$localize`pages.about.LicenseLabel`,value:L,[o]:{value:o}},3,"OE_2"),n(z,null,3,"OE_3"),...t.map(e=>n(r,{get label(){return e.label},get name(){return e.name},get value(){return e.value},[o]:{label:u(e,"label"),name:u(e,"name"),value:u(e,"value")}},3,e.label))],1,null),i("div",null,{class:s.footer},["v.",W],3,null)],1,null),n(S,{get class(){return s.image},[o]:{class:o}},3,"OE_4")],1,null)},1,"OE_5")},T=Object.freeze(Object.defineProperty({__proto__:null,_hW:g,s_ViycXRQlp0Q:E,s_l5W5JXP0y9Q:f},Symbol.toStringTag,{value:"Module"}));export{g as _hW,E as s_ViycXRQlp0Q,f as s_l5W5JXP0y9Q};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
