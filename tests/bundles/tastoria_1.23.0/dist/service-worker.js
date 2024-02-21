/* Qwik Service Worker */
const appBundles=[["q--4QB-cqZ.js",[42]],["q--mBxzwYW.js",[42]],["q--yq_ocOr.js",[15,42]],["q-0UOJxj2n.js",[27,42],["Nsh9S0Su4Jw"]],["q-0uY8Nsdh.js",[15,42,60,62,67],["KnanWhPWR7s","yZ7b1zQICcY"]],["q-10Ifrhi6.js",[]],["q-11r6iPvB.js",[42,75],["yapVymX1VrY"]],["q-28aVp7V5.js",[15,37,42,55,60,67,75,82,83],["0CNWbNkwOdk","3zGzBz9HRCY","7jbYX0WCHdw","amoFc1H8aQo","d1rp0xY1k0o","gBrGKsUDvF8","MWqIAbaxFiI","oiYY4piAuSE","qWQDg3eBl9w","rM7E40KemPs","uQK6fcRuFB0","w9Q687LYp9U"]],["q-3FzcUSPQ.js",[15,42]],["q-3soTVYBL.js",[28,41,42,60,82,83],["xWAcIfTnMLY","Xx0JExj9X3c","zkLy9j1L0TE"]],["q-3XmEHNes.js",[27,42],["yMuYnsHcpkU"]],["q-4_9cr4K0.js",[15,21,28,42,60,82],["q0qZrjjkaxw"]],["q-4aq86koy.js",[15,42]],["q-4cd3cGAD.js",[42]],["q-5Kaidg6A.js",[15,26,42,59,60,83],["EHMO1shA4D0","JUvlWpPoQKc","SanWA9oubyM"]],["q-5LSN8IXO.js",[42]],["q-6GaSSN_Y.js",[42],["A5bZC7WO00A"]],["q-6K5VbP1Q.js",[15,42],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-6NMOoGNn.js",[42,59],["LIXjKD0XsPQ"]],["q-71GKQ3QU.js",[42]],["q-7Sb8C62i.js",[42],["7WRD905W4Mc"]],["q-8bYDCxRE.js",[15,42]],["q-8nnFPAYh.js",[42],["gO2bZtGAV4E","wQHnyzy6fm0"]],["q-90Cknd-3.js",[48]],["q-_LPxUWhA.js",[]],["q-_rwT-h9b.js",[42]],["q-atA6UO-Z.js",[15,42]],["q-aVa3545O.js",[]],["q-BTttGwnV.js",[42,82]],["q-bXo0hPas.js",[15,42]],["q-CflIK2Lp.js",[42],["NLhljWjkoRM","Un1uxNQ4y6o","Xg7VptVxStE"]],["q-cNlbHsvY.js",[],["xKhRnbZiaMA"]],["q-cTfjBiox.js",[15,42,60],["5kClkbuJccM"]],["q-D9fpdikR.js",[15,42,53,60,74],["3dS2GpIdYLw","CfLs6mTcYqk"]],["q-DbZrt5tj.js",[40,42,48,55,60,61,82,85],["O0Sc6Ea7bGc"]],["q-Dogkc32W.js",[0,15,42],["wC2GB5oqF04"]],["q-dSWIHozi.js",[1,25,42,48,55,60,82,85],["8FvSYREmv3k","ziZJtmdAT4o"]],["q-DTQGOYfe.js",[42]],["q-EA60cKcI.js",[13,15,29,37,42,60],["kt7AVuqFcpc","VJICRF6WIcY"]],["q-EoLAf2n0.js",[],["DyVc0YBIqQU"]],["q-gEe22Yf7.js",[]],["q-GF_g9cgo.js",[42]],["q-grzRItSl.js",[]],["q-HbR9Xm_D.js",[15,42]],["q-HsENjJO4.js",[0,1,42],["vkpVeOfakIU"]],["q-HVqqB4vK.js",[42],["9655VAADqxY","z7UA7HOwm0c"]],["q-i4NcBzYb.js",[40,42,48,55,60,61,82,83,85],["EGimzIijxCA","GHDEXlv2GLM"]],["q-IKgntnPE.js",[41,42,83],["8qi9dCC6XsQ","9nhSvJEOuUc","NyH5sQ7ILrI","XXjKXZPHCp4","xXK9SRHm5EQ"]],["q-IQTssp_s.js",[]],["q-irohC07n.js",[42]],["q-IVjesI-o.js",[15,42],["Rv8c3H0ZJk8"]],["q-j7jyAGKz.js",[42]],["q-jkAJwGbe.js",[12,15,41,42,48,51,55,60,82,83,85],["fSr6TWou66o","L5WjaABlSHQ","yYKEsMDQmv8","zhcPcgOzhs4"]],["q-Jxa-IOAZ.js",[42]],["q-K7SEXFaB.js",[15,42]],["q-kZRfDn4W.js",[]],["q-L4GJzSil.js",[15,42],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-LgQll1n5.js",[15,42],["8gdLBszqbaM","Osdg8FnYTw4","pIf0khHUxfY"]],["q-lLDxoa15.js",[25,42],["FYaMuzbc1xo","R5Lnjr1VGrI"]],["q-mhronzDO.js",[42]],["q-mmDR2EFA.js",[42]],["q-mXwIeF_6.js",[42,48,55,82,85]],["q-npDxNQoH.js",[15,42]],["q-OCtRM2ys.js",[15,42],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-OgELXCgK.js",[15,42],["wOIPfiQ04l4"]],["q-pCgoA2mx.js",[15,42],["a8UlZM8gC8w"]],["q-pCVLpVeC.js",[]],["q-Qs8Yj10d.js",[42]],["q-RXi5Bn95.js",[15,42,43,59,60,74],["7LsFlC7reaw","p2XblwHqQHk","pGqtajdeBpU"]],["q-RY0bj0jq.js",[1,13,42,60,75,83],["1MwhW8r60vU","GsW2zKO9C3s","NEz8XAxVocw","rcfLAHGCfM8","UDYdwI3TN2E","xKbLMuaNnWA"]],["q-S7gWs7dY.js",[15,42],["e0ssiDXoeAM"]],["q-sb0vSBWw.js",[8,15,27,42],["l5W5JXP0y9Q","ViycXRQlp0Q"]],["q-tSXeHmrt.js",[15,28,42,60,82,86],["a76qs4N3KmI"]],["q-u5sYstMB.js",[42],["rAcjzNUtu4c"]],["q-upY15Kus.js",[42]],["q-UwzTaAMR.js",[]],["q-VlfXMqgE.js",[2,15,41,42,48,51,55,60,82,83,85],["3vMiuQNycGQ","bYD902tMjls","ihI0IHnmX4E","lbb01eDYWeI","zVIe11ETelE"]],["q-WT7zyDUt.js",[42,60],["2CuA6WFPF6I","fmhyHRvi4vk","wCL1uCJItwY","ZCYeT9dphPw"]],["q-XQKYwqyp.js",[13,15,37,42,54,60],["BWz0EYUbbMA","KWfHhWD0JGo"]],["q-Y6lSBR4-.js",[42],["l3ogf80KQis"]],["q-Y7AC1y4T.js",[42],["B0Uq1favn00","bQNomzNdlis"]],["q-Yl9ZKO5u.js",[]],["q-yQnnJER4.js",[]],["q-YTYDmSU9.js",[42]],["q-Z9nMJ9-F.js",[42,53],["JOsXAtVS0aM"]],["q-zkGDBpXz.js",[48,55,82]],["q-ZtF1IhuZ.js",[15,42]]];
const libraryBundleIds=[63];
const linkBundles=[[/^\/$/,[43,68,5]],[/^\/api\/sync\/recipes\/?$/,[43,68,81]],[/^\/recipes\/create\/?$/,[43,68,21,11]],[/^\/about\/?$/,[43,68,8,3,10,71]],[/^\/import\/?$/,[43,68,61,34,46]],[/^\/login\/?$/,[43,68,2,76]],[/^\/profile\/?$/,[43,68,26,14]],[/^\/recipes\/?$/,[43,68,62,4]],[/^\/signup\/?$/,[43,68,12,52]],[/^\/recipes\/([^/]+?)\/edit\/?$/,[43,68,86,72]],[/^\/recipes\/([^/]+?)\/?$/,[43,68,29,38]],[/^\/shared\/([^/]+?)\/?$/,[43,68,54,78]],[/^(?:\/(.*))?\/?$/,[43,68,24]]];
import{o as X}from"./q-IQTssp_s.js";const L="QwikBuild",A=new Set,x=new Map,w=[],J=(n,e)=>e.filter(t=>!n.some(s=>t.endsWith(s[0]))),Z=(n,e)=>!!e&&!Y(e),Y=n=>{const e=n.headers.get("Cache-Control")||"";return e.includes("no-cache")||e.includes("max-age=0")},ee=(n,e)=>n.some(t=>e.endsWith("/"+t[0])),te=(n,e)=>n.find(t=>t[0]===e),I=(n,e)=>e.map(t=>n[t]?n[t][0]:null),se=(n,e)=>e.map(t=>n.get(t)).filter(t=>t!=null),ne=n=>{const e=new Map;for(const t of n){const s=t[2];if(s)for(const a of s)e.set(a,t[0])}return e},W=(n,e,t,s)=>new Promise((a,i)=>{const r=s.url,c=t.get(r);if(c)c.push([a,i]);else{const o=u=>{const l=t.get(r);if(l){t.delete(r);for(const[g]of l)g(u.clone())}else a(u.clone())},h=u=>{const l=t.get(r);if(l){t.delete(r);for(const[g,V]of l)V(u)}else i(u)};t.set(r,[[a,i]]),n.match(r).then(u=>{if(Z(s,u))o(u);else return e(s).then(async l=>{l.ok&&await n.put(r,l.clone()),o(l)})}).catch(u=>n.match(r).then(l=>{l?o(l):h(u)}))}}),k=(n,e,t,s,a,i=!1)=>{const r=()=>{for(;w.length>0&&x.size<6;){const o=w.shift(),h=new Request(o);A.has(o)?r():(A.add(o),W(e,t,x,h).finally(r))}},c=o=>{try{const h=te(n,o);if(h){const u=I(n,h[1]),l=new URL(o,s).href,g=w.indexOf(l);g>-1?i&&(w.splice(g,1),w.unshift(l)):i?w.unshift(l):w.push(l),u.forEach(c)}}catch(h){console.error(h)}};Array.isArray(a)&&a.forEach(c),r()},ae=(n,e,t,s,a,i,r)=>{try{k(n,s,a,i,I(n,e))}catch(c){console.error(c)}for(const c of r)try{for(const o of t){const[h,u]=o;if(h.test(c)){k(n,s,a,i,I(n,u));break}}}catch(o){console.error(o)}},re=(n,e,t,s)=>{try{const a=s.href.split("/"),i=a[a.length-1];a[a.length-1]="";const r=new URL(a.join("/"));k(n,e,t,r,[i],!0)}catch(a){console.error(a)}},ie=(n,e,t,s)=>{const a=n.fetch.bind(n),i=ne(e);n.addEventListener("fetch",r=>{const c=r.request;if(c.method==="GET"){const o=new URL(c.url);ee(e,o.pathname)&&r.respondWith(n.caches.open(L).then(h=>(re(e,h,a,o),W(h,a,x,c))))}}),n.addEventListener("message",async({data:r})=>{if(r.type==="qprefetch"&&typeof r.base=="string"){const c=await n.caches.open(L),o=new URL(r.base,n.origin);Array.isArray(r.links)&&ae(e,t,s,c,a,o,r.links),Array.isArray(r.bundles)&&k(e,c,a,o,r.bundles),Array.isArray(r.symbols)&&k(e,c,a,o,se(i,r.symbols))}}),n.addEventListener("activate",()=>{(async()=>{try{const r=await n.caches.open(L),o=(await r.keys()).map(u=>u.url),h=J(e,o);await Promise.all(h.map(u=>r.delete(u)))}catch(r){console.error(r)}})()})},ce=()=>{typeof self<"u"&&typeof appBundles<"u"&&ie(self,appBundles,libraryBundleIds,linkBundles)};try{self["workbox:core:7.0.0"]&&_()}catch{}const oe=(n,...e)=>{let t=n;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t},le=oe;class f extends Error{constructor(e,t){const s=le(e,t);super(s),this.name=e,this.details=t}}const y={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},D=n=>[y.prefix,n,y.suffix].filter(e=>e&&e.length>0).join("-"),he=n=>{for(const e of Object.keys(y))n(e)},N={updateDetails:n=>{he(e=>{typeof n[e]=="string"&&(y[e]=n[e])})},getGoogleAnalyticsName:n=>n||D(y.googleAnalytics),getPrecacheName:n=>n||D(y.precache),getPrefix:()=>y.prefix,getRuntimeName:n=>n||D(y.runtime),getSuffix:()=>y.suffix};function O(n,e){const t=e();return n.waitUntil(t),t}try{self["workbox:precaching:7.0.0"]&&_()}catch{}const ue="__WB_REVISION__";function fe(n){if(!n)throw new f("add-to-cache-list-unexpected-type",{entry:n});if(typeof n=="string"){const i=new URL(n,location.href);return{cacheKey:i.href,url:i.href}}const{revision:e,url:t}=n;if(!t)throw new f("add-to-cache-list-unexpected-type",{entry:n});if(!e){const i=new URL(t,location.href);return{cacheKey:i.href,url:i.href}}const s=new URL(t,location.href),a=new URL(t,location.href);return s.searchParams.set(ue,e),{cacheKey:s.href,url:a.href}}class de{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){const a=t.originalRequest.url;s?this.notUpdatedURLs.push(a):this.updatedURLs.push(a)}return s}}}class ye{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:s})=>{const a=(s==null?void 0:s.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return a?new Request(a,{headers:t.headers}):t},this._precacheController=e}}let m;function ge(){if(m===void 0){const n=new Response("");if("body"in n)try{new Response(n.body),m=!0}catch{m=!1}m=!1}return m}async function pe(n,e){let t=null;if(n.url&&(t=new URL(n.url).origin),t!==self.location.origin)throw new f("cross-origin-copy-response",{origin:t});const s=n.clone(),a={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=e?e(a):a,r=ge()?s.body:await s.blob();return new Response(r,i)}const we=n=>new URL(String(n),location.href).href.replace(new RegExp(`^${location.origin}`),"");function M(n,e){const t=new URL(n);for(const s of e)t.searchParams.delete(s);return t.href}async function me(n,e,t,s){const a=M(e.url,t);if(e.url===a)return n.match(e,s);const i=Object.assign(Object.assign({},s),{ignoreSearch:!0}),r=await n.keys(e,i);for(const c of r){const o=M(c.url,t);if(a===o)return n.match(c,s)}}class _e{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const Re=new Set;async function be(){for(const n of Re)await n()}function H(n){return new Promise(e=>setTimeout(e,n))}try{self["workbox:strategies:7.0.0"]&&_()}catch{}function v(n){return typeof n=="string"?new Request(n):n}class Ce{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new _e,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=v(e);if(s.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const r=await t.preloadResponse;if(r)return r}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const r of this.iterateCallbacks("requestWillFetch"))s=await r({request:s.clone(),event:t})}catch(r){if(r instanceof Error)throw new f("plugin-error-request-will-fetch",{thrownErrorMessage:r.message})}const i=s.clone();try{let r;r=await fetch(s,s.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const c of this.iterateCallbacks("fetchDidSucceed"))r=await c({event:t,request:i,response:r});return r}catch(r){throw a&&await this.runCallbacks("fetchDidFail",{error:r,event:t,originalRequest:a.clone(),request:i.clone()}),r}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=v(e);let s;const{cacheName:a,matchOptions:i}=this._strategy,r=await this.getCacheKey(t,"read"),c=Object.assign(Object.assign({},i),{cacheName:a});s=await caches.match(r,c);for(const o of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await o({cacheName:a,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=v(e);await H(0);const a=await this.getCacheKey(s,"write");if(!t)throw new f("cache-put-with-no-response",{url:we(a.url)});const i=await this._ensureResponseSafeToCache(t);if(!i)return!1;const{cacheName:r,matchOptions:c}=this._strategy,o=await self.caches.open(r),h=this.hasCallback("cacheDidUpdate"),u=h?await me(o,a.clone(),["__WB_REVISION__"],c):null;try{await o.put(a,h?i.clone():i)}catch(l){if(l instanceof Error)throw l.name==="QuotaExceededError"&&await be(),l}for(const l of this.iterateCallbacks("cacheDidUpdate"))await l({cacheName:r,oldResponse:u,newResponse:i.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const i of this.iterateCallbacks("cacheKeyWillBeUsed"))a=v(await i({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const s=this._pluginStateMap.get(t);yield i=>{const r=Object.assign(Object.assign({},i),{state:s});return t[e](r)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=await a({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&t.status!==200&&(t=void 0),t}}class K{constructor(e={}){this.cacheName=N.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s=typeof e.request=="string"?new Request(e.request):e.request,a="params"in e?e.params:void 0,i=new Ce(this,{event:t,request:s,params:a}),r=this._getResponse(i,s,t),c=this._awaitComplete(r,i,s,t);return[r,c]}async _getResponse(e,t,s){await e.runCallbacks("handlerWillStart",{event:s,request:t});let a;try{if(a=await this._handle(t,e),!a||a.type==="error")throw new f("no-response",{url:t.url})}catch(i){if(i instanceof Error){for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:i,event:s,request:t}),a)break}if(!a)throw i}for(const i of e.iterateCallbacks("handlerWillRespond"))a=await i({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let i,r;try{i=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:i}),await t.doneWaiting()}catch(c){c instanceof Error&&(r=c)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:i,error:r}),t.destroy(),r)throw r}}class p extends K{constructor(e={}){e.cacheName=N.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(p.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const a=t.params||{};if(this._fallbackToNetwork){const i=a.integrity,r=e.integrity,c=!r||r===i;s=await t.fetch(new Request(e,{integrity:e.mode!=="no-cors"?r||i:void 0})),i&&c&&e.mode!=="no-cors"&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}else throw new f("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new f("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==p.copyRedirectedCacheableResponsesPlugin&&(a===p.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);t===0?this.plugins.push(p.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}p.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:n}){return!n||n.status>=400?null:n}};p.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:n}){return n.redirected?await pe(n):n}};class Ee{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new p({cacheName:N.getPrecacheName(e),plugins:[...t,new ye({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){typeof s=="string"?t.push(s):s&&s.revision===void 0&&t.push(s.url);const{cacheKey:a,url:i}=fe(s),r=typeof s!="string"&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(i)&&this._urlsToCacheKeys.get(i)!==a)throw new f("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(i),secondEntry:a});if(typeof s!="string"&&s.integrity){if(this._cacheKeysToIntegrities.has(a)&&this._cacheKeysToIntegrities.get(a)!==s.integrity)throw new f("add-to-cache-list-conflicting-integrities",{url:i});this._cacheKeysToIntegrities.set(a,s.integrity)}if(this._urlsToCacheKeys.set(i,a),this._urlsToCacheModes.set(i,r),t.length>0){const c=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(c)}}}install(e){return O(e,async()=>{const t=new de;this.strategy.plugins.push(t);for(const[i,r]of this._urlsToCacheKeys){const c=this._cacheKeysToIntegrities.get(r),o=this._urlsToCacheModes.get(i),h=new Request(i,{integrity:c,cache:o,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:h,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}})}activate(e){return O(e,async()=>{const t=await self.caches.open(this.strategy.cacheName),s=await t.keys(),a=new Set(this._urlsToCacheKeys.values()),i=[];for(const r of s)a.has(r.url)||(await t.delete(r),i.push(r.url));return{deletedURLs:i}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new f("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let T;const Q=()=>(T||(T=new Ee),T);try{self["workbox:routing:7.0.0"]&&_()}catch{}const $="GET",U=n=>n&&typeof n=="object"?n:{handle:n};class E{constructor(e,t,s=$){this.handler=U(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=U(e)}}class ke extends E{constructor(e,t,s){const a=({url:i})=>{const r=e.exec(i.href);if(r&&!(i.origin!==location.origin&&r.index!==0))return r.slice(1)};super(a,t,s)}}class qe{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(a=>{typeof a=="string"&&(a=[a]);const i=new Request(...a);return this.handleRequest({request:i,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const a=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let c=r&&r.handler;const o=e.method;if(!c&&this._defaultHandlerMap.has(o)&&(c=this._defaultHandlerMap.get(o)),!c)return;let h;try{h=c.handle({url:s,request:e,event:t,params:i})}catch(l){h=Promise.reject(l)}const u=r&&r.catchHandler;return h instanceof Promise&&(this._catchHandler||u)&&(h=h.catch(async l=>{if(u)try{return await u.handle({url:s,request:e,event:t,params:i})}catch(g){g instanceof Error&&(l=g)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw l})),h}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const i=this._routes.get(s.method)||[];for(const r of i){let c;const o=r.match({url:e,sameOrigin:t,request:s,event:a});if(o)return c=o,(Array.isArray(c)&&c.length===0||o.constructor===Object&&Object.keys(o).length===0||typeof o=="boolean")&&(c=void 0),{route:r,params:c}}return{}}setDefaultHandler(e,t=$){this._defaultHandlerMap.set(t,U(e))}setCatchHandler(e){this._catchHandler=U(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new f("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new f("unregister-route-route-not-registered")}}let R;const ve=()=>(R||(R=new qe,R.addFetchListener(),R.addCacheListener()),R);function S(n,e,t){let s;if(typeof n=="string"){const i=new URL(n,location.href),r=({url:c})=>c.href===i.href;s=new E(r,e,t)}else if(n instanceof RegExp)s=new ke(n,e,t);else if(typeof n=="function")s=new E(n,e,t);else if(n instanceof E)s=n;else throw new f("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return ve().registerRoute(s),s}function Ue(n,e=[]){for(const t of[...n.searchParams.keys()])e.some(s=>s.test(t))&&n.searchParams.delete(t);return n}function*Ne(n,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:a}={}){const i=new URL(n,location.href);i.hash="",yield i.href;const r=Ue(i,e);if(yield r.href,t&&r.pathname.endsWith("/")){const c=new URL(r.href);c.pathname+=t,yield c.href}if(s){const c=new URL(r.href);c.pathname+=".html",yield c.href}if(a){const c=a({url:i});for(const o of c)yield o.href}}class Le extends E{constructor(e,t){const s=({request:a})=>{const i=e.getURLsToCacheKeys();for(const r of Ne(a.url,t)){const c=i.get(r);if(c){const o=e.getIntegrityForCacheKey(c);return{cacheKey:c,integrity:o}}}};super(s,e.strategy)}}function De(n){const e=Q(),t=new Le(e,n);S(t)}const Te="-precache-",Pe=async(n,e=Te)=>{const s=(await self.caches.keys()).filter(a=>a.includes(e)&&a.includes(self.registration.scope)&&a!==n);return await Promise.all(s.map(a=>self.caches.delete(a))),s};function xe(){self.addEventListener("activate",n=>{const e=N.getPrecacheName();n.waitUntil(Pe(e).then(t=>{}))})}function Ie(n){Q().precache(n)}function Se(n,e){Ie(n),De(e)}class Ke extends K{async _handle(e,t){let s=await t.cacheMatch(e),a;if(!s)try{s=await t.fetchAndCachePut(e)}catch(i){i instanceof Error&&(a=i)}if(!s)throw new f("no-response",{url:e.url,error:a});return s}}class Ae extends K{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let s,a;try{const i=[t.fetch(e)];if(this._networkTimeoutSeconds){const r=H(this._networkTimeoutSeconds*1e3);i.push(r)}if(a=await Promise.race(i),!a)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(i){i instanceof Error&&(s=i)}if(!a)throw new f("no-response",{url:e.url,error:s});return a}}try{self["workbox:background-sync:7.0.0"]&&_()}catch{}const F=3,Oe="workbox-background-sync",d="requests",b="queueName";class Me{constructor(){this._db=null}async addEntry(e){const s=(await this.getDb()).transaction(d,"readwrite",{durability:"relaxed"});await s.store.add(e),await s.done}async getFirstEntryId(){const t=await(await this.getDb()).transaction(d).store.openCursor();return t==null?void 0:t.value.id}async getAllEntriesByQueueName(e){const s=await(await this.getDb()).getAllFromIndex(d,b,IDBKeyRange.only(e));return s||new Array}async getEntryCountByQueueName(e){return(await this.getDb()).countFromIndex(d,b,IDBKeyRange.only(e))}async deleteEntry(e){await(await this.getDb()).delete(d,e)}async getFirstEntryByQueueName(e){return await this.getEndEntryFromIndex(IDBKeyRange.only(e),"next")}async getLastEntryByQueueName(e){return await this.getEndEntryFromIndex(IDBKeyRange.only(e),"prev")}async getEndEntryFromIndex(e,t){const a=await(await this.getDb()).transaction(d).store.index(b).openCursor(e,t);return a==null?void 0:a.value}async getDb(){return this._db||(this._db=await X(Oe,F,{upgrade:this._upgradeDb})),this._db}_upgradeDb(e,t){t>0&&t<F&&e.objectStoreNames.contains(d)&&e.deleteObjectStore(d),e.createObjectStore(d,{autoIncrement:!0,keyPath:"id"}).createIndex(b,b,{unique:!1})}}class Fe{constructor(e){this._queueName=e,this._queueDb=new Me}async pushEntry(e){delete e.id,e.queueName=this._queueName,await this._queueDb.addEntry(e)}async unshiftEntry(e){const t=await this._queueDb.getFirstEntryId();t?e.id=t-1:delete e.id,e.queueName=this._queueName,await this._queueDb.addEntry(e)}async popEntry(){return this._removeEntry(await this._queueDb.getLastEntryByQueueName(this._queueName))}async shiftEntry(){return this._removeEntry(await this._queueDb.getFirstEntryByQueueName(this._queueName))}async getAll(){return await this._queueDb.getAllEntriesByQueueName(this._queueName)}async size(){return await this._queueDb.getEntryCountByQueueName(this._queueName)}async deleteEntry(e){await this._queueDb.deleteEntry(e)}async _removeEntry(e){return e&&await this.deleteEntry(e.id),e}}const Be=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class q{static async fromRequest(e){const t={url:e.url,headers:{}};e.method!=="GET"&&(t.body=await e.clone().arrayBuffer());for(const[s,a]of e.headers.entries())t.headers[s]=a;for(const s of Be)e[s]!==void 0&&(t[s]=e[s]);return new q(t)}constructor(e){e.mode==="navigate"&&(e.mode="same-origin"),this._requestData=e}toObject(){const e=Object.assign({},this._requestData);return e.headers=Object.assign({},this._requestData.headers),e.body&&(e.body=e.body.slice(0)),e}toRequest(){return new Request(this._requestData.url,this._requestData)}clone(){return new q(this.toObject())}}const B="workbox-background-sync",je=60*24*7,P=new Set,j=n=>{const e={request:new q(n.requestData).toRequest(),timestamp:n.timestamp};return n.metadata&&(e.metadata=n.metadata),e};class We{constructor(e,{forceSyncFallback:t,onSync:s,maxRetentionTime:a}={}){if(this._syncInProgress=!1,this._requestsAddedDuringSync=!1,P.has(e))throw new f("duplicate-queue-name",{name:e});P.add(e),this._name=e,this._onSync=s||this.replayRequests,this._maxRetentionTime=a||je,this._forceSyncFallback=!!t,this._queueStore=new Fe(this._name),this._addSyncListener()}get name(){return this._name}async pushRequest(e){await this._addRequest(e,"push")}async unshiftRequest(e){await this._addRequest(e,"unshift")}async popRequest(){return this._removeRequest("pop")}async shiftRequest(){return this._removeRequest("shift")}async getAll(){const e=await this._queueStore.getAll(),t=Date.now(),s=[];for(const a of e){const i=this._maxRetentionTime*60*1e3;t-a.timestamp>i?await this._queueStore.deleteEntry(a.id):s.push(j(a))}return s}async size(){return await this._queueStore.size()}async _addRequest({request:e,metadata:t,timestamp:s=Date.now()},a){const r={requestData:(await q.fromRequest(e.clone())).toObject(),timestamp:s};switch(t&&(r.metadata=t),a){case"push":await this._queueStore.pushEntry(r);break;case"unshift":await this._queueStore.unshiftEntry(r);break}this._syncInProgress?this._requestsAddedDuringSync=!0:await this.registerSync()}async _removeRequest(e){const t=Date.now();let s;switch(e){case"pop":s=await this._queueStore.popEntry();break;case"shift":s=await this._queueStore.shiftEntry();break}if(s){const a=this._maxRetentionTime*60*1e3;return t-s.timestamp>a?this._removeRequest(e):j(s)}else return}async replayRequests(){let e;for(;e=await this.shiftRequest();)try{await fetch(e.request.clone())}catch{throw await this.unshiftRequest(e),new f("queue-replay-failed",{name:this._name})}}async registerSync(){if("sync"in self.registration&&!this._forceSyncFallback)try{await self.registration.sync.register(`${B}:${this._name}`)}catch{}}_addSyncListener(){"sync"in self.registration&&!this._forceSyncFallback?self.addEventListener("sync",e=>{if(e.tag===`${B}:${this._name}`){const t=async()=>{this._syncInProgress=!0;let s;try{await this._onSync({queue:this})}catch(a){if(a instanceof Error)throw s=a,s}finally{this._requestsAddedDuringSync&&!(s&&!e.lastChance)&&await this.registerSync(),this._syncInProgress=!1,this._requestsAddedDuringSync=!1}};e.waitUntil(t())}}):this._onSync({queue:this})}static get _queueNames(){return P}}class He{constructor(e,t){this.fetchDidFail=async({request:s})=>{await this._queue.pushRequest({request:s})},this._queue=new We(e,t)}}var G={DATE:"2024-02-04T21:22:56.557Z",VERSION:"1.23.0"};const Qe=G.DATE,$e=G.VERSION,z=`${$e} (${Qe})`,C=`tastoria v.${z}`;console.log(C,"service worker");try{addEventListener("install",()=>{self.skipWaiting(),console.log(C,"installed")}),addEventListener("activate",()=>{self.clients.claim(),console.log(C,"activated")});const n=[...["128","144","152","192","256"].map(e=>`images/logo_${e}.png`),"fonts/PlayfairDisplay-ExtraBoldItalic.ttf"];Se([...n.map(e=>({url:e,revision:z}))]),S(({request:e})=>e.destination==="image",new Ke({cacheName:"image"})),S(/\/api\/sync\/recipes/,new Ae({plugins:[new He("recipes_sync_queue",{maxRetentionTime:1440})]}),"POST"),xe(),ce(),console.log(C,"setup")}catch(n){console.error(C,n)}