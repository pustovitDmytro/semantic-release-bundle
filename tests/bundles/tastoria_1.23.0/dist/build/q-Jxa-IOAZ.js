import{V as i,y as p,_ as o}from"./q-grzRItSl.js";class l{constructor(t){this.multiplier=75,this.increment=74,this.modulus=65537,this.last=t*this.modulus}next(){return this.last=(this.multiplier*this.last+this.increment)%this.modulus,this.last/this.modulus}}function e(r,t,a){return r*(a-t)+t}function x(r){const t=new l(r),a={eyeSpread:e(t.next(),-2,4),mouthSpread:e(t.next(),-1,3),isMouthOpen:t.next()<.5,faceRotate:e(t.next(),-10,10),faceTranslateX:e(t.next(),-4,4),wrapperTranslateX:e(t.next(),-4,4),wrapperRotate:e(t.next(),30,60),faceTranslateY:e(t.next(),2,8),wrapperTranslateY:e(t.next(),0,7),wrapperScale:e(t.next(),1,1.5)},s=t.next()<.25,n=!s&&t.next()<1/3;return s&&(a.faceTranslateX=e(t.next(),-7,2),a.wrapperRotate=e(t.next(),30,90),a.wrapperTranslateX=e(t.next(),-7,2)),n&&(a.faceTranslateX=e(t.next(),-2,7),a.wrapperRotate=e(t.next(),0,60),a.wrapperTranslateX=e(t.next(),-2,7)),a}const u=i(p(()=>o(()=>import("./q-Z9nMJ9-F.js"),__vite__mapDeps([])),"s_JOsXAtVS0aM"));export{u as A,x as p};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
