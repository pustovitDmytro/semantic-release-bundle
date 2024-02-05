var of=Object.defineProperty;var af=(t,e,n)=>e in t?of(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Yi=(t,e,n)=>(af(t,typeof e!="symbol"?e+"":e,n),n);import{o as cf}from"./q-IQTssp_s.js";import{l as _n}from"./q-kZRfDn4W.js";import{v as lf}from"./q-yQnnJER4.js";var fa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(t,e){if(!t)throw xt(e)},xt=function(t){return new Error("Firebase Database ("+_l.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(h=64)),r.push(n[u],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||d==null)throw new df;const h=s<<2|a>>4;if(r.push(h),l!==64){const f=a<<4&240|l>>2;if(r.push(f),d!==64){const m=l<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class df extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ml=function(t){const e=pl(t);return Qs.encodeByteArray(e,!0)},ir=function(t){return ml(t).replace(/\./g,"")},sr=function(t){try{return Qs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t){return gl(void 0,t)}function gl(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ff(n)||(t[n]=gl(t[n],e[n]));return t}function ff(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=()=>_f().__FIREBASE_DEFAULTS__,mf=()=>{if(typeof process>"u"||typeof fa>"u")return;const t=fa.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sr(t[1]);return e&&JSON.parse(e)},Or=()=>{try{return pf()||mf()||gf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vl=t=>{var e,n;return(n=(e=Or())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},El=t=>{const e=vl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Il=()=>{var t;return(t=Or())===null||t===void 0?void 0:t.config},yl=t=>{var e;return(e=Or())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t,e){if(t.uid)throw new Error("The \"uid\" field is no longer supported by mockUserToken. Please use \"sub\" instead for Firebase Auth User ID.");const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ir(JSON.stringify(n)),ir(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Js(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function vf(){var t;const e=(t=Or())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ef(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function If(){const t=X();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rl(){return _l.NODE_ADMIN===!0}function yf(){try{return typeof indexedDB=="object"}catch{return!1}}function Tf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="FirebaseError";class xe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wf,Object.setPrototypeOf(this,xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pn.prototype.create)}}class Pn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Rf(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xe(i,a,r)}}function Rf(t,e){return t.replace(bf,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bf=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t){return JSON.parse(t)}function W(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=pn(sr(s[0])||""),n=pn(sr(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Sf=function(t){const e=bl(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Cf=function(t){const e=bl(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Pt(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ys(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function or(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ar(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_a(s)&&_a(o)){if(!ar(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _a(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function rn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let d=0;d<80;d++){d<40?d<20?(l=a^s&(o^a),u=1518500249):(l=s^o^a,u=1859775393):d<60?(l=s&o|a&(s|o),u=2400959708):(l=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+l+c+u+r[d]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Af(t,e){const n=new Nf(t,e);return n.subscribe.bind(n)}class Nf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Pf(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ji),i.error===void 0&&(i.error=ji),i.complete===void 0&&(i.complete=ji);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ji(){}function Xs(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,p(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nr=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(t){return t&&t._delegate?t._delegate:t}class Ye{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ar;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lf(e))try{this.getOrInitializeService({instanceIdentifier:Ze})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ze){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ze){return this.instances.has(e)}getOptions(e=Ze){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ze){return this.component?this.component.multipleInstances?e:Ze:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mf(t){return t===Ze?void 0:t}function Lf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(S||(S={}));const xf={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Uf=S.INFO,$f={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},Bf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=$f[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zs{constructor(e){this.name=e,this._logLevel=Uf,this._logHandler=Bf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Wf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ts="@firebase/app",pa="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new Zs("@firebase/app"),Hf="@firebase/app-compat",qf="@firebase/analytics-compat",Gf="@firebase/analytics",zf="@firebase/app-check-compat",Kf="@firebase/app-check",Yf="@firebase/auth",jf="@firebase/auth-compat",Qf="@firebase/database",Jf="@firebase/database-compat",Xf="@firebase/functions",Zf="@firebase/functions-compat",e_="@firebase/installations",t_="@firebase/installations-compat",n_="@firebase/messaging",r_="@firebase/messaging-compat",i_="@firebase/performance",s_="@firebase/performance-compat",o_="@firebase/remote-config",a_="@firebase/remote-config-compat",c_="@firebase/storage",l_="@firebase/storage-compat",u_="@firebase/firestore",d_="@firebase/firestore-compat",h_="firebase",f_="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="[DEFAULT]",__={[Ts]:"fire-core",[Hf]:"fire-core-compat",[Gf]:"fire-analytics",[qf]:"fire-analytics-compat",[Kf]:"fire-app-check",[zf]:"fire-app-check-compat",[Yf]:"fire-auth",[jf]:"fire-auth-compat",[Qf]:"fire-rtdb",[Jf]:"fire-rtdb-compat",[Xf]:"fire-fn",[Zf]:"fire-fn-compat",[e_]:"fire-iid",[t_]:"fire-iid-compat",[n_]:"fire-fcm",[r_]:"fire-fcm-compat",[i_]:"fire-perf",[s_]:"fire-perf-compat",[o_]:"fire-rc",[a_]:"fire-rc-compat",[c_]:"fire-gcs",[l_]:"fire-gcs-compat",[u_]:"fire-fst",[d_]:"fire-fst-compat","fire-js":"fire-js",[h_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new Map,Rs=new Map;function p_(t,e){try{t.container.addComponent(e)}catch(n){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(Rs.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;Rs.set(e,t);for(const n of cr.values())p_(n,t);return!0}function Pr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qe=new Pn("app","Firebase",m_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=f_;function Sl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ws,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qe.create("bad-app-name",{appName:String(i)});if(n||(n=Il()),!n)throw qe.create("no-options");const s=cr.get(i);if(s){if(ar(n,s.options)&&ar(r,s.config))return s;throw qe.create("duplicate-app",{appName:i})}const o=new Ff(i);for(const c of Rs.values())o.addComponent(c);const a=new g_(n,r,o);return cr.set(i,a),a}function eo(t=ws){const e=cr.get(t);if(!e&&t===ws&&Il())return Sl();if(!e)throw qe.create("no-app",{appName:t});return e}function Ie(t,e,n){var r;let i=(r=__[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(a.join(" "));return}lt(new Ye(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="firebase-heartbeat-database",E_=1,mn="firebase-heartbeat-store";let Qi=null;function Cl(){return Qi||(Qi=cf(v_,E_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mn)}}}).catch(t=>{throw qe.create("idb-open",{originalErrorMessage:t.message})})),Qi}async function I_(t){try{return await(await Cl()).transaction(mn).objectStore(mn).get(Ol(t))}catch(e){if(e instanceof xe)ct.warn(e.message);else{const n=qe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ct.warn(n.message)}}}async function ma(t,e){try{const r=(await Cl()).transaction(mn,"readwrite");await r.objectStore(mn).put(e,Ol(t)),await r.done}catch(n){if(n instanceof xe)ct.warn(n.message);else{const r=qe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ct.warn(r.message)}}}function Ol(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=1024,T_=30*24*60*60*1e3;class w_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new b_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ga();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=T_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&(await this._heartbeatsCachePromise),((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ga(),{heartbeatsToSend:r,unsentEntries:i}=R_(this._heartbeatsCache.heartbeats),s=ir(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ga(){return new Date().toISOString().substring(0,10)}function R_(t,e=y_){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),va(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),va(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class b_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yf()?Tf().then(()=>!0).catch(()=>!1):!1}async read(){return(await this._canUseIndexedDBPromise)?(await I_(this.app))||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ma(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ma(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function va(t){return ir(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t){lt(new Ye("platform-logger",e=>new Vf(e),"PRIVATE")),lt(new Ye("heartbeat",e=>new w_(e),"PRIVATE")),Ie(Ts,pa,t),Ie(Ts,pa,"esm2017"),Ie("fire-js","")}S_("");var C_="firebase",O_="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie(C_,O_,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="firebasestorage.googleapis.com",Nl="storageBucket",A_=2*60*1e3,N_=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V extends xe{constructor(e,n,r=0){super(Ji(e),`Firebase Storage: ${n} (${Ji(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,V.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ji(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var B;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(B||(B={}));function Ji(t){return"storage/"+t}function to(){const t="An unknown error occurred, please check the error payload for server response.";return new V(B.UNKNOWN,t)}function P_(t){return new V(B.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function D_(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new V(B.UNAUTHENTICATED,t)}function k_(){return new V(B.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function M_(t){return new V(B.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function L_(){return new V(B.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function F_(){return new V(B.CANCELED,"User canceled the upload/download.")}function x_(t){return new V(B.INVALID_URL,"Invalid URL '"+t+"'.")}function U_(t){return new V(B.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function $_(){return new V(B.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Nl+"' property when initializing the app?")}function B_(){return new V(B.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function V_(t){return new V(B.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function bs(t){return new V(B.INVALID_ARGUMENT,t)}function Pl(){return new V(B.APP_DELETED,"The Firebase app was deleted.")}function W_(t){return new V(B.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function on(t,e){return new V(B.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Qt(t){throw new V(B.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ae.makeFromUrl(e,n)}catch{return new ae(e,"")}if(r.path==="")return r;throw U_(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(F){F.path_=decodeURIComponent(F.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${u}/b/${i}/o${h}`,"i"),m={bucket:1,path:3},E=n===Al?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",z=new RegExp(`^https?://${E}/${i}/${y}`,"i"),U=[{regex:a,indices:c,postModify:s},{regex:f,indices:m,postModify:l},{regex:z,indices:{bucket:1,path:2},postModify:l}];for(let F=0;F<U.length;F++){const Re=U[F],be=Re.regex.exec(e);if(be){const yt=be[Re.indices.bucket];let Xe=be[Re.indices.path];Xe||(Xe=""),r=new ae(yt,Xe),Re.postModify(r);break}}if(r==null)throw x_(e);return r}}class H_{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...y){l||(l=!0,e.apply(null,y))}function d(y){i=setTimeout(()=>{i=null,t(f,c())},y)}function h(){s&&clearTimeout(s)}function f(y,...z){if(l){h();return}if(y){h(),u.call(null,y,...z);return}if(c()||o){h(),u.call(null,y,...z);return}r<64&&(r*=2);let U;a===1?(a=2,U=0):U=(r+Math.random())*1e3,d(U)}let m=!1;function E(y){m||(m=!0,h(),!l&&(i!==null?(y||(a=2),clearTimeout(i),d(0)):y||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,E(!0)},n),E}function G_(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){return t!==void 0}function K_(t){return typeof t=="object"&&!Array.isArray(t)}function Dl(t){return typeof t=="string"||t instanceof String}function Ea(t){return no()&&t instanceof Blob}function no(){return typeof Blob<"u"&&!vf()}function Ia(t,e,n,r){if(r<e)throw bs(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw bs(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function j_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(it||(it={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n,r,i,s,o,a,c,l,u,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new qn(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===it.NO_ERROR,c=s.getStatus();if(!a||Q_(c,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===it.ABORT;r(!1,new qn(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new qn(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());z_(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=to();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Pl():F_();o(c)}else{const c=L_();o(c)}};this.canceled_?n(!1,new qn(!1,null,!0)):this.backoffId_=q_(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&G_(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qn{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function X_(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Z_(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ep(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tp(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function np(t,e,n,r,i,s,o=!0){const a=j_(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return ep(l,e),X_(l,n),Z_(l,s),tp(l,r),new J_(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ip(...t){const e=rp();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(no())return new Blob(t);throw new V(B.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function sp(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t){if(typeof atob>"u")throw V_("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xi{constructor(e,n){this.data=e,this.contentType=n||null}}function ap(t,e){switch(t){case ve.RAW:return new Xi(kl(e));case ve.BASE64:case ve.BASE64URL:return new Xi(Ml(t,e));case ve.DATA_URL:return new Xi(lp(e),up(e))}throw to()}function kl(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296){if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function cp(t){let e;try{e=decodeURIComponent(t)}catch{throw on(ve.DATA_URL,"Malformed data URL.")}return kl(e)}function Ml(t,e){switch(t){case ve.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw on(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ve.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw on(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=op(e)}catch(i){throw i.message.includes("polyfill")?i:on(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Ll{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw on(ve.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=dp(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function lp(t){const e=new Ll(t);return e.base64?Ml(ve.BASE64,e.rest):cp(e.rest)}function up(t){return new Ll(t).contentType}function dp(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){let r=0,i="";Ea(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ea(this.data_)){const r=this.data_,i=sp(r,e,n);return i===null?null:new He(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new He(r,!0)}}static getBlob(...e){if(no()){const n=e.map(r=>r instanceof He?r.data_:r);return new He(ip.apply(null,n))}else{const n=e.map(o=>Dl(o)?ap(ve.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new He(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t){let e;try{e=JSON.parse(t)}catch{return null}return K_(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _p(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Fl(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t,e){return e}class te{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||pp}}let Gn=null;function mp(t){return!Dl(t)||t.length<2?t:Fl(t)}function gp(){if(Gn)return Gn;const t=[];t.push(new te("bucket")),t.push(new te("generation")),t.push(new te("metageneration")),t.push(new te("name","fullPath",!0));function e(s,o){return mp(o)}const n=new te("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new te("size");return i.xform=r,t.push(i),t.push(new te("timeCreated")),t.push(new te("updated")),t.push(new te("md5Hash",null,!0)),t.push(new te("cacheControl",null,!0)),t.push(new te("contentDisposition",null,!0)),t.push(new te("contentEncoding",null,!0)),t.push(new te("contentLanguage",null,!0)),t.push(new te("contentType",null,!0)),t.push(new te("metadata","customMetadata",!0)),Gn=t,Gn}function vp(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ae(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Ep(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return vp(r,t),r}function Ip(t,e,n){const r=hp(e);return r===null?null:Ep(t,r,n)}function yp(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Tp{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t){if(!t)throw to()}function Rp(t,e){function n(r,i){const s=Ip(t,i,e);return wp(s!==null),s}return n}function bp(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=k_():i=D_():n.getStatus()===402?i=P_(t.bucket):n.getStatus()===403?i=M_(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Sp(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Cp(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Sp(null,e)),r}function Op(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let U="";for(let F=0;F<2;F++)U=U+Math.random().toString().slice(2);return U}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Cp(e,r,i),u=yp(l,n),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,h=`\r
--`+c+"--",f=He.getBlob(d,r,h);if(f===null)throw B_();const m={name:l.fullPath},E=Y_(s,t.host,t._protocol),y="POST",z=t.maxUploadRetryTime,Q=new Tp(E,y,Rp(t,n),z);return Q.urlParams=m,Q.headers=o,Q.body=f.uploadData(),Q.errorHandler=bp(e),Q}class Ap{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=it.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=it.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=it.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Qt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Qt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Qt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Qt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Qt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Np extends Ap{initXhr(){this.xhr_.responseType="text"}}function Pp(){return new Np}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n){this._service=e,n instanceof ae?this._location=n:this._location=ae.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ut(e,n)}get root(){const e=new ae(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Fl(this._location.path)}get storage(){return this._service}get parent(){const e=fp(this._location.path);if(e===null)return null;const n=new ae(this._location.bucket,e);return new ut(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw W_(e)}}function Dp(t,e,n){t._throwIfRoot("uploadBytes");const r=Op(t.storage,t._location,gp(),new He(e,!0),n);return t.storage.makeRequestWithTokens(r,Pp).then(i=>({metadata:i,ref:t}))}function kp(t,e){const n=_p(t._location.path,e),r=new ae(t._location.bucket,n);return new ut(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t){return /^[A-Za-z]+:\/\//.test(t)}function Lp(t,e){return new ut(t,e)}function xl(t,e){if(t instanceof ro){const n=t;if(n._bucket==null)throw $_();const r=new ut(n,n._bucket);return e!=null?xl(r,e):r}else return e!==void 0?kp(t,e):t}function Fp(t,e){if(e&&Mp(e)){if(t instanceof ro)return Lp(t,e);throw bs("To use ref(service, url), the first argument must be a Storage instance.")}else return xl(t,e)}function ya(t,e){const n=e==null?void 0:e[Nl];return n==null?null:ae.makeFromBucketSpec(n,t)}function xp(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Tl(i,t.app.options.projectId))}class ro{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Al,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=A_,this._maxUploadRetryTime=N_,this._requests=new Set,i!=null?this._bucket=ae.makeFromBucketSpec(i,this._host):this._bucket=ya(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ae.makeFromBucketSpec(this._url,e):this._bucket=ya(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ia("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ia("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ut(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new H_(Pl());{const o=np(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ta="@firebase/storage",wa="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="storage";function Up(t,e,n){return t=g(t),Dp(t,e,n)}function Ra(t,e){return t=g(t),Fp(t,e)}function $p(t=eo(),e){t=g(t);const r=Pr(t,Ul).getImmediate({identifier:e}),i=El("storage");return i&&Bp(r,...i),r}function Bp(t,e,n,r={}){xp(t,e,n,r)}function Vp(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ro(n,r,i,e,gt)}function Wp(){lt(new Ye(Ul,Vp,"PUBLIC").setMultipleInstances(!0)),Ie(Ta,wa,""),Ie(Ta,wa,"esm2017")}Wp();function io(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp={PHONE:"phone",TOTP:"totp"},qp={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Gp={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},zp={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},Kp={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":"Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling \"connectAuthEmulator()\" sooner.","expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":"This operation is not supported in the environment this application is running on. \"location.protocol\" must be http, https or chrome-extension and web storage must be enabled.","popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function $l(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jp=Yp,Bl=$l,Vl=new Pn("auth","Firebase",$l()),Qp={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Zs("@firebase/auth");function Jp(t,...e){lr.logLevel<=S.WARN&&lr.warn(`Auth (${gt}): ${t}`,...e)}function er(t,...e){lr.logLevel<=S.ERROR&&lr.error(`Auth (${gt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t,...e){throw so(t,...e)}function ce(t,...e){return so(t,...e)}function Wl(t,e,n){const r=Object.assign(Object.assign({},Bl()),{[e]:n});return new Pn("auth","Firebase",r).create(e,{appName:t.name})}function Ut(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&se(t,"argument-error"),Wl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function so(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vl.create(t,...e)}function _(t,e,...n){if(!t)throw so(e,...n)}function Ee(t){const e="INTERNAL ASSERTION FAILED: "+t;throw er(e),new Error(e)}function Me(t,e){t||Ee(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oo(){return ba()==="http:"||ba()==="https:"}function ba(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oo()||Ef()||"connection"in navigator)?navigator.onLine:!0}function Zp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Me(n>e,"Short delay should be less than long delay!"),this.isMobile=Js()||wl()}get(){return Xp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t,e){Me(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=new Dn(3e4,6e4);function P(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function D(t,e,n,r,i={}){return ql(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=mt(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Hl.fetch()(Gl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function ql(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},em),e);try{const i=new rm(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw sn(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw sn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw sn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw sn(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Wl(t,u,l);se(t,u)}}catch(i){if(i instanceof xe)throw i;se(t,"network-request-failed",{message:String(i)})}}async function $e(t,e,n,r,i={}){const s=await D(t,e,n,r,i);return"mfaPendingCredential"in s&&se(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Gl(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ao(t.config,i):`${t.config.apiScheme}://${i}`}function nm(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ce(this.auth,"network-request-failed")),tm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ce(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t){return t!==void 0&&t.getResponse!==void 0}function Ca(t){return t!==void 0&&t.enterprise!==void 0}class zl{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return nm(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function im(t){return(await D(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Kl(t,e){return D(t,"GET","/v2/recaptchaConfig",P(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(t,e){return D(t,"POST","/v1/accounts:delete",e)}async function om(t,e){return D(t,"POST","/v1/accounts:update",e)}async function am(t,e){return D(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(t,e=!1){return g(t).getIdToken(e)}async function Yl(t,e=!1){const n=g(t),r=await n.getIdToken(e),i=Dr(r);_(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:an(Zi(i.auth_time)),issuedAtTime:an(Zi(i.iat)),expirationTime:an(Zi(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zi(t){return Number(t)*1e3}function Dr(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return er("JWT malformed, contained fewer than 3 sections"),null;try{const i=sr(n);return i?JSON.parse(i):(er("Failed to decode base64 JWT payload"),null)}catch(i){return er("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lm(t){const e=Dr(t);return _(e,"internal-error"),_(typeof e.exp<"u","internal-error"),_(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xe&&um(r)&&t.auth.currentUser===t&&(await t.auth.signOut()),r}}function um({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=an(this.lastLoginAt),this.creationTime=an(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Le(t,am(n,{idToken:r}));_(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fm(s.providerUserInfo):[],a=hm(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Ql(t){const e=g(t);await vn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hm(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fm(t){return t.map(e=>{var{providerId:n}=e,r=io(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(t,e){const n=await ql(t,{},async()=>{const r=mt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Gl(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pm(t,e){return D(t,"POST","/v2/accounts:revokeToken",P(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken<"u","internal-error"),_(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _m(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new En;return r&&(_(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(_(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(_(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new En,this.toJSON())}_performRefresh(){return Ee("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,e){_(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class st{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=io(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Le(this,this.stsTokenManager.getToken(this.auth,e));return _(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Yl(this,e)}reload(){return Ql(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new st(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&(await vn(this)),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Le(this,sm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,z=(l=n.createdAt)!==null&&l!==void 0?l:void 0,Q=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:F,isAnonymous:Re,providerData:be,stsTokenManager:yt}=n;_(U&&yt,e,"internal-error");const Xe=En.fromJSON(this.name,yt);_(typeof U=="string",e,"internal-error"),We(d,e.name),We(h,e.name),_(typeof F=="boolean",e,"internal-error"),_(typeof Re=="boolean",e,"internal-error"),We(f,e.name),We(m,e.name),We(E,e.name),We(y,e.name),We(z,e.name),We(Q,e.name);const jt=new st({uid:U,auth:e,email:h,emailVerified:F,displayName:d,isAnonymous:Re,photoURL:m,phoneNumber:f,tenantId:E,stsTokenManager:Xe,createdAt:z,lastLoginAt:Q});return be&&Array.isArray(be)&&(jt.providerData=be.map(C=>Object.assign({},C))),y&&(jt._redirectEventId=y),jt}static async _fromIdTokenResponse(e,n,r=!1){const i=new En;i.updateFromServerResponse(n);const s=new st({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vn(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new Map;function Ae(t){Me(t instanceof Function,"Expected a class definition");let e=Oa.get(t);return e?(Me(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Oa.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jl.type="NONE";const Ss=Jl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e,n){return`firebase:${t}:${e}:${n}`}class St{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=tr(this.userKey,i.apiKey,s),this.fullPersistenceKey=tr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?st._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new St(Ae(Ss),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ae(Ss);const o=tr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=st._fromJSON(e,u);l!==s&&(a=d),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new St(s,e,r):(s=c[0],a&&(await s._set(o,a.toJSON())),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new St(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nu(e))return"Blackberry";if(ru(e))return"Webos";if(co(e))return"Safari";if((e.includes("chrome/")||Zl(e))&&!e.includes("edge/"))return"Chrome";if(tu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xl(t=X()){return /firefox\//i.test(t)}function co(t=X()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zl(t=X()){return /crios\//i.test(t)}function eu(t=X()){return /iemobile/i.test(t)}function tu(t=X()){return /android/i.test(t)}function nu(t=X()){return /blackberry/i.test(t)}function ru(t=X()){return /webos/i.test(t)}function kr(t=X()){return /iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mm(t=X()){var e;return kr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gm(){return If()&&document.documentMode===10}function iu(t=X()){return kr(t)||tu(t)||ru(t)||nu(t)||/windows phone/i.test(t)||eu(t)}function vm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t,e=[]){let n;switch(t){case"Browser":n=Aa(X());break;case"Worker":n=`${Aa(X())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Im(t,e={}){return D(t,"GET","/v2/passwordPolicy",P(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=6;class Tm{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ym,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Na(this),this.idTokenSubscription=new Na(this),this.beforeStateQueue=new Em(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ae(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await St.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c!=null&&c.user&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?g(e):null;return n&&_(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||(await this.beforeStateQueue.runMiddleware(e)),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(await this._setRedirectUser(null)),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ae(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||(await this._updatePasswordPolicy());const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Im(this),n=new Tm(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ae(e)||this._popupRedirectResolver;_(n,this,"argument-error"),this.redirectPersistenceManager=await St.create(this,[Ae(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&(await this.queue(async()=>{})),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=su(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Jp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function L(t){return g(t)}class Na{constructor(e){this.auth=e,this.observer=null,this.addObserver=Af(n=>this.observer=n)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function lo(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ce("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Rm().appendChild(r)})}function ou(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bm="https://www.google.com/recaptcha/enterprise.js?render=",Sm="recaptcha-enterprise",Cm="NO_RECAPTCHA";class au{constructor(e){this.type=Sm,this.auth=L(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Kl(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new zl(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Ca(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(Cm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ca(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}lo(bm+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Pa(t,e,n,r=!1){const i=new au(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function In(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Pa(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Pa(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}async function Om(t){const e=L(t),n=await Kl(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new zl(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")&&new au(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t,e){const n=Pr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ar(s,e??{}))return i;se(i,"already-initialized")}return n.initialize({options:e})}function Am(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ae);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lu(t,e,n){const r=L(t);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=uu(e),{host:o,port:a}=Nm(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Pm()}function uu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Nm(t){const e=uu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Da(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Da(o)}}}function Da(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Pm(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ee("not implemented")}_getIdTokenResponse(e){return Ee("not implemented")}_linkToIdToken(e,n){return Ee("not implemented")}_getReauthenticationResolver(e){return Ee("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(t,e){return D(t,"POST","/v1/accounts:resetPassword",P(t,e))}async function Dm(t,e){return D(t,"POST","/v1/accounts:update",e)}async function km(t,e){return D(t,"POST","/v1/accounts:signUp",e)}async function Mm(t,e){return D(t,"POST","/v1/accounts:update",P(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lm(t,e){return $e(t,"POST","/v1/accounts:signInWithPassword",P(t,e))}async function Mr(t,e){return D(t,"POST","/v1/accounts:sendOobCode",P(t,e))}async function Fm(t,e){return Mr(t,e)}async function xm(t,e){return Mr(t,e)}async function Um(t,e){return Mr(t,e)}async function $m(t,e){return Mr(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bm(t,e){return $e(t,"POST","/v1/accounts:signInWithEmailLink",P(t,e))}async function Vm(t,e){return $e(t,"POST","/v1/accounts:signInWithEmailLink",P(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends $t{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Dt(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Dt(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&n!=null&&n.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return In(e,n,"signInWithPassword",Lm);case"emailLink":return Bm(e,{email:this._email,oobCode:this._password});default:se(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return In(e,r,"signUpPassword",km);case"emailLink":return Vm(e,{idToken:n,email:this._email,oobCode:this._password});default:se(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(t,e){return $e(t,"POST","/v1/accounts:signInWithIdp",P(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="http://localhost";class ye extends $t{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ye(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):se("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=io(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ye(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return De(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,De(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,De(e,n)}buildRequest(){const e={requestUri:Wm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(t,e){return D(t,"POST","/v1/accounts:sendVerificationCode",P(t,e))}async function qm(t,e){return $e(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,e))}async function Gm(t,e){const n=await $e(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,e));if(n.temporaryProof)throw sn(t,"account-exists-with-different-credential",n);return n}const zm={USER_NOT_FOUND:"user-not-found"};async function Km(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return $e(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,n),zm)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends $t{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ge({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ge({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return qm(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Gm(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Km(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ge({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jm(t){const e=nn(rn(t)).link,n=e?nn(rn(e)).deep_link_id:null,r=nn(rn(t)).deep_link_id;return(r?nn(rn(r)).link:null)||r||n||e||t}class Bt{constructor(e){var n,r,i,s,o,a;const c=nn(rn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=Ym((i=c.mode)!==null&&i!==void 0?i:null);_(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=jm(e);try{return new Bt(n)}catch{return null}}}function Qm(t){return Bt.parseLink(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt=class hu{constructor(){this.providerId=hu.PROVIDER_ID}static credential(e,n){return Dt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bt.parseLink(n);return _(r,"argument-error"),Dt._fromEmailAndCode(e,r.code,r.tenantId)}};Vt.PROVIDER_ID="password";Vt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Be{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class cn extends Wt{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return _("providerId"in n&&"signInMethod"in n,"argument-error"),ye._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return _(e.idToken||e.accessToken,"argument-error"),ye._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return cn.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return cn.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new cn(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Wt{constructor(){super("facebook.com")}static credential(e){return ye._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Se.credential(e.oauthAccessToken)}catch{return null}}}Se.FACEBOOK_SIGN_IN_METHOD="facebook.com";Se.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo=class wt extends Wt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ye._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wt.credential(n,r)}catch{return null}}};uo.GOOGLE_SIGN_IN_METHOD="google.com";uo.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends Wt{constructor(){super("github.com")}static credential(e){return ye._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ce.credential(e.oauthAccessToken)}catch{return null}}}Ce.GITHUB_SIGN_IN_METHOD="github.com";Ce.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="http://localhost";class yn extends $t{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return De(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,De(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,De(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new yn(r,s)}static _create(e,n){return new yn(e,n)}buildRequest(){return{requestUri:Jm,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="saml.";class ur extends Be{constructor(e){_(e.startsWith(Xm),"argument-error"),super(e)}static credentialFromResult(e){return ur.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return ur.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=yn.fromJSON(e);return _(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return yn._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Wt{constructor(){super("twitter.com")}static credential(e,n){return ye._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Oe.credential(n,r)}catch{return null}}}Oe.TWITTER_SIGN_IN_METHOD="twitter.com";Oe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fu(t,e){return $e(t,"POST","/v1/accounts:signUp",P(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await st._fromIdTokenResponse(e,r,i),o=ka(r);return new ue({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ka(r);return new ue({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ka(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(t){var e;const n=L(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new ue({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await fu(n,{returnSecureToken:!0}),i=await ue._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends xe{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dr.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new dr(e,n,r,i)}}function _u(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dr._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eg(t,e){const n=g(t);await Lr(!0,n,e);const{providerUserInfo:r}=await om(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=pu(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function ho(t,e,n=!1){const r=await Le(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ue._forOperation(t,"link",r)}async function Lr(t,e,n){await vn(e);const r=pu(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";_(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Le(t,_u(r,i,e,t),n);_(s.idToken,r,"internal-error");const o=Dr(s.idToken);_(o,r,"internal-error");const{sub:a}=o;return _(t.uid===a,r,"user-mismatch"),ue._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&se(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gu(t,e,n=!1){const r="signIn",i=await _u(t,r,e),s=await ue._fromIdTokenResponse(t,r,i);return n||(await t._updateCurrentUser(s.user)),s}async function Fr(t,e){return gu(L(t),e)}async function vu(t,e){const n=g(t);return await Lr(!1,n,e.providerId),ho(n,e)}async function Eu(t,e){return mu(g(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tg(t,e){return $e(t,"POST","/v1/accounts:signInWithCustomToken",P(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(t,e){const n=L(t),r=await tg(n,{token:e,returnSecureToken:!0}),i=await ue._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?fo._fromServerResponse(e,n):"totpInfo"in n?_o._fromServerResponse(e,n):se(e,"internal-error")}}class fo extends kn{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new fo(n)}}class _o extends kn{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new _o(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t,e,n){var r;_(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),_(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(_(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(_(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t){const e=L(t);e._getPasswordPolicyInternal()&&(await e._updatePasswordPolicy())}async function rg(t,e,n){const r=L(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&xr(r,i,n),await In(r,i,"getOobCode",xm)}async function ig(t,e,n){await du(g(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&po(t),r})}async function sg(t,e){await Mm(g(t),{oobCode:e})}async function Iu(t,e){const n=g(t),r=await du(n,{oobCode:e}),i=r.requestType;switch(_(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":_(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":_(r.mfaInfo,n,"internal-error");default:_(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=kn._fromServerResponse(L(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function og(t,e){const{data:n}=await Iu(g(t),e);return n.email}async function ag(t,e,n){const r=L(t),o=await In(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fu).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&po(t),c}),a=await ue._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function cg(t,e,n){return Fr(g(t),Vt.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&po(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg(t,e,n){const r=L(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){_(a.handleCodeInApp,r,"argument-error"),a&&xr(r,o,a)}s(i,n),await In(r,i,"getOobCode",Um)}function ug(t,e){const n=Bt.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function dg(t,e,n){const r=g(t),i=Vt.credentialWithLink(e,n||gn());return _(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Fr(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hg(t,e){return D(t,"POST","/v1/accounts:createAuthUri",P(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fg(t,e){const n=oo()?gn():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await hg(g(t),r);return i||[]}async function _g(t,e){const n=g(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&xr(n.auth,i,e);const{email:s}=await Fm(n.auth,i);s!==t.email&&(await t.reload())}async function pg(t,e,n){const r=g(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&xr(r.auth,s,n);const{email:o}=await $m(r.auth,s);o!==t.email&&(await t.reload())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(t,e){return D(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gg(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=g(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Le(r,mg(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function vg(t,e){return yu(g(t),e,null)}function Eg(t,e){return yu(g(t),null,e)}async function yu(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Le(t,Dm(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&t!=null&&t.idToken){const o=(n=(e=Dr(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ct(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new yg(s,i);case"github.com":return new Tg(s,i);case"google.com":return new wg(s,i);case"twitter.com":return new Rg(s,i,t.screenName||null);case"custom":case"anonymous":return new Ct(s,null);default:return new Ct(s,r,i)}}class Ct{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Tu extends Ct{constructor(e,n,r,i){super(e,n,r),this.username=i}}class yg extends Ct{constructor(e,n){super(e,"facebook.com",n)}}class Tg extends Tu{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class wg extends Ct{constructor(e,n){super(e,"google.com",n)}}class Rg extends Tu{constructor(e,n,r){super(e,"twitter.com",n,r)}}function bg(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Ig(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t,e){return g(t).setPersistence(e)}function Cg(t){return Om(t)}async function Og(t,e){return L(t).validatePassword(e)}function wu(t,e,n,r){return g(t).onIdTokenChanged(e,n,r)}function Ru(t,e,n){return g(t).beforeAuthStateChanged(e,n)}function Ag(t,e,n,r){return g(t).onAuthStateChanged(e,n,r)}function Ng(t){g(t).useDeviceLanguage()}function Pg(t,e){return g(t).updateCurrentUser(e)}function Dg(t){return g(t).signOut()}function kg(t,e){return L(t).revokeAccessToken(e)}async function Mg(t){return g(t).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new tt("enroll",e,n)}static _fromMfaPendingCredential(e){return new tt("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return tt._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return tt._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=L(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>kn._fromServerResponse(r,a));_(i.mfaPendingCredential,r,"internal-error");const o=tt._fromMfaPendingCredential(i.mfaPendingCredential);return new mo(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const u=await ue._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return _(n.user,r,"internal-error"),ue._forOperation(n.user,n.operationType,l);default:se(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function Lg(t,e){var n;const r=g(t),i=e;return _(e.customData.operationType,r,"argument-error"),_((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),mo._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",P(t,e))}function xg(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:finalize",P(t,e))}function Ug(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",P(t,e))}function $g(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:finalize",P(t,e))}function Bg(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:withdraw",P(t,e))}class go{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>kn._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new go(e)}async getSession(){return tt._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Le(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Le(this.user,Bg(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const es=new WeakMap;function Vg(t){const e=g(t);return es.has(e)||es.set(e,go._fromUser(e)),es.get(e)}const hr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hr,"1"),this.storage.removeItem(hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(){const t=X();return co(t)||kr(t)}const Hg=1e3,qg=10;class Su extends bu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Wg()&&vm(),this.fallbackToPolling=iu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gm()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qg):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Hg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Su.type="LOCAL";const Cu=Su;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou extends bu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ou.type="SESSION";const vo=Ou;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ur(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await Gg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ur.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=$r("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(){return window}function Kg(t){$().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(){return typeof $().WorkerGlobalScope<"u"&&typeof $().importScripts=="function"}async function Yg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Qg(){return Eo()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="firebaseLocalStorageDb",Jg=1,fr="firebaseLocalStorage",Nu="fbase_key";class Mn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Br(t,e){return t.transaction([fr],e?"readwrite":"readonly").objectStore(fr)}function Xg(){const t=indexedDB.deleteDatabase(Au);return new Mn(t).toPromise()}function Cs(){const t=indexedDB.open(Au,Jg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fr,{keyPath:Nu})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fr)?e(r):(r.close(),await Xg(),e(await Cs()))})})}async function Ma(t,e,n){const r=Br(t,!0).put({[Nu]:e,value:n});return new Mn(r).toPromise()}async function Zg(t,e){const n=Br(t,!1).get(e),r=await new Mn(n).toPromise();return r===void 0?null:r.value}function La(t,e){const n=Br(t,!0).delete(e);return new Mn(n).toPromise()}const ev=800,tv=3;class Pu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Eo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ur._getInstance(Qg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Yg(),!this.activeServiceWorker)return;this.sender=new zg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cs();return await Ma(e,hr,"1"),await La(e,hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ma(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Zg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>La(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Br(i,!1).getAll();return new Mn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ev)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pu.type="LOCAL";const Du=Pu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:start",P(t,e))}function rv(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:finalize",P(t,e))}function iv(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:finalize",P(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=500,ov=6e4,zn=1e12;class av{constructor(e){this.auth=e,this.counter=zn,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new cv(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||zn;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||zn;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||zn;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class cv{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;_(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=lv(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},ov)},sv))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function lv(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=ou("rcb"),uv=new Dn(3e4,6e4),dv="https://www.google.com/recaptcha/api.js?";class hv{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=$().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return _(fv(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Sa($().grecaptcha)?Promise.resolve($().grecaptcha):new Promise((r,i)=>{const s=$().setTimeout(()=>{i(ce(e,"network-request-failed"))},uv.get());$()[ts]=()=>{$().clearTimeout(s),delete $()[ts];const a=$().grecaptcha;if(!a||!Sa(a)){i(ce(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const d=c(l,u);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${dv}?${mt({onload:ts,render:"explicit",hl:n})}`;lo(o).catch(()=>{clearTimeout(s),i(ce(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=$().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function fv(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class _v{async load(e){return new av(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="recaptcha",pv={theme:"light",type:"image"};class mv{constructor(e,n,r=Object.assign({},pv)){this.parameters=r,this.type=ku,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=L(e),this.isInvisible=this.parameters.size==="invisible",_(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;_(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new _v:new hv,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){_(!this.parameters.sitekey,this.auth,"argument-error"),_(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),_(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=$()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){_(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){_(oo()&&!Eo(),this.auth,"internal-error"),await gv(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await im(this.auth);_(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return _(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function gv(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ge._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function vv(t,e,n){const r=L(t),i=await Vr(r,e,g(n));return new Io(i,s=>Fr(r,s))}async function Ev(t,e,n){const r=g(t);await Lr(!1,r,"phone");const i=await Vr(r.auth,e,g(n));return new Io(i,s=>vu(r,s))}async function Iv(t,e,n){const r=g(t),i=await Vr(r.auth,e,g(n));return new Io(i,s=>Eu(r,s))}async function Vr(t,e,n){var r;const i=await n.verify();try{_(typeof i=="string",t,"argument-error"),_(n.type===ku,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return _(o.type==="enroll",t,"internal-error"),(await Fg(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{_(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return _(a,t,"missing-multi-factor-info"),(await nv(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Hm(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function yv(t,e){await ho(g(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.providerId=ot.PROVIDER_ID,this.auth=L(e)}verifyPhoneNumber(e,n){return Vr(this.auth,e,g(n))}static credential(e,n){return Ge._fromVerification(e,n)}static credentialFromResult(e){const n=e;return ot.credentialFromTaggedObject(n)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ge._fromTokenResponse(n,r):null}}ot.PROVIDER_ID="phone";ot.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){return e?Ae(e):(_(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends $t{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return De(e,this._buildIdpRequest())}_linkToIdToken(e,n){return De(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return De(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Tv(t){return gu(t.auth,new yo(t),t.bypassAuthState)}function wv(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),mu(n,new yo(t),t.bypassAuthState)}async function Rv(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),ho(n,new yo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tv;case"linkViaPopup":case"linkViaRedirect":return Rv;case"reauthViaPopup":case"reauthViaRedirect":return wv;default:se(this.auth,"internal-error")}}resolve(e){Me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=new Dn(2e3,1e4);async function Sv(t,e,n){const r=L(t);Ut(t,e,Be);const i=vt(r,n);return new Ne(r,"signInViaPopup",e,i).executeNotNull()}async function Cv(t,e,n){const r=g(t);Ut(r.auth,e,Be);const i=vt(r.auth,n);return new Ne(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Ov(t,e,n){const r=g(t);Ut(r.auth,e,Be);const i=vt(r.auth,n);return new Ne(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Ne extends Mu{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ne.currentPopupAction&&Ne.currentPopupAction.cancel(),Ne.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){Me(this.filter.length===1,"Popup operations only handle one event");const e=$r();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ne.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bv.get())};e()}}Ne.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="pendingRedirect",nr=new Map;class Nv extends Mu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nr.get(this.auth._key());if(!e){try{const r=(await Pv(this.resolver,this.auth))?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nr.set(this.auth._key(),e)}return this.bypassAuthState||nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pv(t,e){const n=Fu(e),r=Lu(t);if(!(await r._isAvailable()))return!1;const i=(await r._get(n))==="true";return await r._remove(n),i}async function To(t,e){return Lu(t)._set(Fu(e),"true")}function Dv(t,e){nr.set(t._key(),e)}function Lu(t){return Ae(t._redirectPersistence)}function Fu(t){return tr(Av,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t,e,n){return Mv(t,e,n)}async function Mv(t,e,n){const r=L(t);Ut(t,e,Be),await r._initializationPromise;const i=vt(r,n);return await To(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Lv(t,e,n){return Fv(t,e,n)}async function Fv(t,e,n){const r=g(t);Ut(r.auth,e,Be),await r.auth._initializationPromise;const i=vt(r.auth,n);await To(i,r.auth);const s=await Uu(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function xv(t,e,n){return Uv(t,e,n)}async function Uv(t,e,n){const r=g(t);Ut(r.auth,e,Be),await r.auth._initializationPromise;const i=vt(r.auth,n);await Lr(!1,r,e.providerId),await To(i,r.auth);const s=await Uu(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function $v(t,e){return await L(t)._initializationPromise,xu(t,e,!1)}async function xu(t,e,n=!1){const r=L(t),i=vt(r,e),o=await new Nv(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Uu(t){const e=$r(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=10*60*1e3;class Vv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$u(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ce(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fa(e))}saveEventToCache(e){this.cachedEventUids.add(Fa(e)),this.lastProcessedEventTime=Date.now()}}function Fa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $u({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $u(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(t,e={}){return D(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gv=/^https?/;async function zv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hv(t);for(const n of e)try{if(Kv(n))return}catch{}se(t,"unauthorized-domain")}function Kv(t){const e=gn(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Gv.test(n))return!1;if(qv.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=new Dn(3e4,6e4);function xa(){const t=$().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jv(t){return new Promise((e,n)=>{var r,i,s;function o(){xa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xa(),n(ce(t,"network-request-failed"))},timeout:Yv.get()})}if(!((i=(r=$().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$().gapi)===null||s===void 0)&&s.load)o();else{const a=ou("iframefcb");return $()[a]=()=>{gapi.load?o():n(ce(t,"network-request-failed"))},lo(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw rr=null,e})}let rr=null;function Qv(t){return rr=rr||jv(t),rr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=new Dn(5e3,15e3),Xv="__/auth/iframe",Zv="emulator/auth/iframe",eE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nE(t){const e=t.config;_(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ao(e,Zv):`https://${t.config.authDomain}/${Xv}`,r={apiKey:e.apiKey,appName:t.name,v:gt},i=tE.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${mt(r).slice(1)}`}async function rE(t){const e=await Qv(t),n=$().gapi;return _(n,t,"internal-error"),e.open({where:document.body,url:nE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ce(t,"network-request-failed"),a=$().setTimeout(()=>{s(o)},Jv.get());function c(){$().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sE=500,oE=600,aE="_blank",cE="http://localhost";class Ua{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lE(t,e,n,r=sE,i=oE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},iE),{width:r.toString(),height:i.toString(),top:s,left:o}),l=X().toLowerCase();n&&(a=Zl(l)?aE:n),Xl(l)&&(e=e||cE,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[f,m])=>`${h}${f}=${m},`,"");if(mm(l)&&a!=="_self")return uE(e||"",a),new Ua(null);const d=window.open(e||"",a,u);_(d,t,"popup-blocked");try{d.focus()}catch{}return new Ua(d)}function uE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="__/auth/handler",hE="emulator/auth/handler",fE=encodeURIComponent("fac");async function $a(t,e,n,r,i,s){_(t.config.authDomain,t,"auth-domain-config-required"),_(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gt,eventId:i};if(e instanceof Be){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ys(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof Wt){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${fE}=${encodeURIComponent(c)}`:"";return`${_E(t)}?${mt(a).slice(1)}${l}`}function _E({config:t}){return t.emulator?ao(t,hE):`https://${t.authDomain}/${dE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="webStorageSupport";class pE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vo,this._completeRedirectFn=xu,this._overrideRedirectResult=Dv}async _openPopup(e,n,r,i){var s;Me((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await $a(e,n,r,gn(),i);return lE(e,o,$r())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await $a(e,n,r,gn(),i);return Kg(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Me(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rE(e),r=new Vv(e);return n.register("authEvent",i=>(_(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ns,{type:ns},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ns];o!==void 0&&n(!!o),se(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iu()||co()||kr()}}const Bu=pE;class Vu{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Ee("unexpected MultiFactorSessionType")}}}class wo extends Vu{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new wo(e)}_finalizeEnroll(e,n,r){return xg(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return rv(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Wu{constructor(){}static assertion(e){return wo._fromCredential(e)}}Wu.FACTOR_ID="phone";class Hu{static assertionForEnrollment(e,n){return Tn._fromSecret(e,n)}static assertionForSignIn(e,n){return Tn._fromEnrollmentId(e,n)}static async generateSecret(e){var n;const r=e;_(typeof((n=r.user)===null||n===void 0?void 0:n.auth)<"u","internal-error");const i=await Ug(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Wr._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}}Hu.FACTOR_ID="totp";class Tn extends Vu{constructor(e,n,r){super("totp"),this.otp=e,this.enrollmentId=n,this.secret=r}static _fromSecret(e,n){return new Tn(n,void 0,e)}static _fromEnrollmentId(e,n){return new Tn(n,e)}async _finalizeEnroll(e,n,r){return _(typeof this.secret<"u",e,"argument-error"),$g(e,{idToken:n,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,n){_(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const r={verificationCode:this.otp};return iv(e,{mfaPendingCredential:n,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}}class Wr{constructor(e,n,r,i,s,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=n,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,n){return new Wr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,n){var r;let i=!1;return(Kn(e)||Kn(n))&&(i=!0),i&&(Kn(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),Kn(n)&&(n=this.auth.name)),`otpauth://totp/${n}:${e}?secret=${this.secretKey}&issuer=${n}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Kn(t){return typeof t>"u"||(t==null?void 0:t.length)===0}var Ba="@firebase/auth",Va="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vE(t){lt(new Ye("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:su(t)},l=new wm(r,i,s,c);return Am(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),lt(new Ye("auth-internal",e=>{const n=L(e.getProvider("auth").getImmediate());return(r=>new mE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ie(Ba,Va,gE(t)),Ie(Ba,Va,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=5*60,IE=yl("authIdTokenMaxAge")||EE;let Wa=null;const yE=t=>async e=>{const n=e&&(await e.getIdTokenResult()),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>IE)return;const i=n==null?void 0:n.token;Wa!==i&&(Wa=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function TE(t=eo()){const e=Pr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cu(t,{popupRedirectResolver:Bu,persistence:[Du,Cu,vo]}),r=yl("authTokenSyncURL");if(r){const s=yE(r);Ru(n,s,()=>s(n.currentUser)),wu(n,o=>s(o))}const i=vl("auth");return i&&lu(n,`http://${i}`),n}vE("Browser");const wE=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:Kp,ActionCodeURL:Bt,AuthCredential:$t,AuthErrorCodes:Qp,EmailAuthCredential:Dt,EmailAuthProvider:Vt,FacebookAuthProvider:Se,FactorId:Hp,GithubAuthProvider:Ce,GoogleAuthProvider:uo,OAuthCredential:ye,OAuthProvider:cn,OperationType:zp,PhoneAuthCredential:Ge,PhoneAuthProvider:ot,PhoneMultiFactorGenerator:Wu,ProviderId:qp,RecaptchaVerifier:mv,SAMLAuthProvider:ur,SignInMethod:Gp,TotpMultiFactorGenerator:Hu,TotpSecret:Wr,TwitterAuthProvider:Oe,applyActionCode:sg,beforeAuthStateChanged:Ru,browserLocalPersistence:Cu,browserPopupRedirectResolver:Bu,browserSessionPersistence:vo,checkActionCode:Iu,confirmPasswordReset:ig,connectAuthEmulator:lu,createUserWithEmailAndPassword:ag,debugErrorMap:jp,deleteUser:Mg,fetchSignInMethodsForEmail:fg,getAdditionalUserInfo:bg,getAuth:TE,getIdToken:cm,getIdTokenResult:Yl,getMultiFactorResolver:Lg,getRedirectResult:$v,inMemoryPersistence:Ss,indexedDBLocalPersistence:Du,initializeAuth:cu,initializeRecaptchaConfig:Cg,isSignInWithEmailLink:ug,linkWithCredential:vu,linkWithPhoneNumber:Ev,linkWithPopup:Ov,linkWithRedirect:xv,multiFactor:Vg,onAuthStateChanged:Ag,onIdTokenChanged:wu,parseActionCodeURL:Qm,prodErrorMap:Bl,reauthenticateWithCredential:Eu,reauthenticateWithPhoneNumber:Iv,reauthenticateWithPopup:Cv,reauthenticateWithRedirect:Lv,reload:Ql,revokeAccessToken:kg,sendEmailVerification:_g,sendPasswordResetEmail:rg,sendSignInLinkToEmail:lg,setPersistence:Sg,signInAnonymously:Zm,signInWithCredential:Fr,signInWithCustomToken:ng,signInWithEmailAndPassword:cg,signInWithEmailLink:dg,signInWithPhoneNumber:vv,signInWithPopup:Sv,signInWithRedirect:kv,signOut:Dg,unlink:eg,updateCurrentUser:Pg,updateEmail:vg,updatePassword:Eg,updatePhoneNumber:yv,updateProfile:gg,useDeviceLanguage:Ng,validatePassword:Og,verifyBeforeUpdateEmail:pg,verifyPasswordResetCode:og},Symbol.toStringTag,{value:"Module"}));var Ha={};const qa="@firebase/database",Ga="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qu="";function RE(t){qu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),W(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:pn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ue(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bE(e)}}catch{}return new SE},nt=Gu("localStorage"),Os=Gu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Zs("@firebase/database"),CE=function(){let t=1;return function(){return t++}}(),zu=function(t){const e=Df(t),n=new Of;n.update(e);const r=n.digest();return Qs.encodeByteArray(r)},Ln=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ln.apply(null,r):typeof r=="object"?e+=W(r):e+=r,e+=" "}return e};let at=null,za=!0;const OE=function(t,e){p(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ot.logLevel=S.VERBOSE,at=Ot.log.bind(Ot),e&&Os.set("logging_enabled",!0)):typeof t=="function"?at=t:(at=null,Os.remove("logging_enabled"))},J=function(...t){if(za===!0&&(za=!1,at===null&&Os.get("logging_enabled")===!0&&OE(!0)),at){const e=Ln.apply(null,t);at(e)}},Fn=function(t){return function(...e){J(t,...e)}},As=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ln(...t);Ot.error(e)},Fe=function(...t){const e=`FIREBASE FATAL ERROR: ${Ln(...t)}`;throw Ot.error(e),new Error(e)},ie=function(...t){const e="FIREBASE WARNING: "+Ln(...t);Ot.warn(e)},AE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ie("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ku=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},NE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},kt="[MIN_NAME]",dt="[MAX_NAME]",Ht=function(t,e){if(t===e)return 0;if(t===kt||e===dt)return-1;if(e===kt||t===dt)return 1;{const n=Ka(t),r=Ka(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},PE=function(t,e){return t===e?0:t<e?-1:1},Jt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+W(e))},Ro=function(t){if(typeof t!="object"||t===null)return W(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=W(e[r]),n+=":",n+=Ro(t[e[r]]);return n+="}",n},Yu=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function oe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ju=function(t){p(!Ku(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,c;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const u=l.join("");let d="";for(c=0;c<64;c+=8){let h=parseInt(u.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},DE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},kE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ME(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const LE=new RegExp("^-?(0*)\\d{1,10}$"),FE=-2147483648,xE=2147483647,Ka=function(t){if(LE.test(t)){const e=Number(t);if(e>=FE&&e<=xE)return e}return null},qt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ie("Exception was thrown by user callback.",n),e},Math.floor(0))}},UE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ln=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ie(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(J("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e="Provided authentication credentials for the app named \""+this.appName_+"\" are invalid. This usually indicates your app was not initialized correctly. ";"credential"in this.firebaseOptions_?e+="Make sure the \"credential\" property provided to initializeApp() is authorized to access the specified \"databaseURL\" and is from the correct project.":"serviceAccount"in this.firebaseOptions_?e+="Make sure the \"serviceAccount\" property provided to initializeApp() is authorized to access the specified \"databaseURL\" and is from the correct project.":e+="Make sure the \"apiKey\" and \"databaseURL\" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.",ie(e)}}class At{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}At.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="5",Qu="v",Ju="s",Xu="r",Zu="f",ed=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,td="ls",nd="p",Ns="ac",rd="websocket",id="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n,r,i,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=nt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&nt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function VE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function od(t,e,n){p(typeof e=="string","typeof type must == string"),p(typeof n=="object","typeof params must == object");let r;if(e===rd)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===id)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);VE(t)&&(n.ns=t.namespace);const i=[];return oe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(){this.counters_={}}incrementCounter(e,n=1){Ue(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hf(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs={},is={};function So(t){const e=t.toString();return rs[e]||(rs[e]=new WE),rs[e]}function HE(t,e){const n=t.toString();return is[n]||(is[n]=e()),is[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&qt(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="start",GE="close",zE="pLPCommand",KE="pRTLPCB",ad="id",cd="pw",ld="ser",YE="cb",jE="seg",QE="ts",JE="d",XE="dframe",ud=1870,dd=30,ZE=ud-dd,eI=25e3,tI=3e4;class bt{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fn(e),this.stats_=So(n),this.urlFn=c=>(this.appCheckToken&&(c[Ns]=this.appCheckToken),od(n,id,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new qE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tI)),NE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Co((...s)=>{const[o,a,c,l,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ya)this.id=a,this.password=c;else if(o===GE)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ya]="t",r[ld]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[YE]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Qu]=bo,this.transportSessionId&&(r[Ju]=this.transportSessionId),this.lastSessionId&&(r[td]=this.lastSessionId),this.applicationId&&(r[nd]=this.applicationId),this.appCheckToken&&(r[Ns]=this.appCheckToken),typeof location<"u"&&location.hostname&&ed.test(location.hostname)&&(r[Xu]=Zu);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bt.forceAllow_=!0}static forceDisallow(){bt.forceDisallow_=!0}static isAvailable(){return bt.forceAllow_?!0:!bt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!DE()&&!kE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=W(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ml(n),i=Yu(r,ZE);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[XE]="t",r[ad]=e,r[cd]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=W(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Co{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=CE(),window[zE+this.uniqueCallbackIdentifier]=e,window[KE+this.uniqueCallbackIdentifier]=n,this.myIFrame=Co.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s="<script>document.domain=\""+document.domain+"\";</script>");const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){J("frame writing exception"),a.stack&&J(a.stack),J(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||J("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ad]=this.myID,e[cd]=this.myPW,e[ld]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+dd+r.length<=ud;){const o=this.pendingSegs.shift();r=r+"&"+jE+i+"="+o.seg+"&"+QE+i+"="+o.ts+"&"+JE+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(eI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{J("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=16384,rI=45e3;let _r=null;typeof MozWebSocket<"u"?_r=MozWebSocket:typeof WebSocket<"u"&&(_r=WebSocket);class he{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fn(this.connId),this.stats_=So(n),this.connURL=he.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Qu]=bo,typeof location<"u"&&location.hostname&&ed.test(location.hostname)&&(o[Xu]=Zu),n&&(o[Ju]=n),r&&(o[td]=r),i&&(o[Ns]=i),s&&(o[nd]=s),od(e,rd,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,nt.set("previous_websocket_failure",!0);try{let r;Rl(),this.mySock=new _r(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){he.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&_r!==null&&!he.forceDisallow_}static previouslyFailed(){return nt.isInMemoryStorage||nt.get("previous_websocket_failure")===!0}markConnectionHealthy(){nt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=pn(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=W(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Yu(n,nI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}he.responsesRequiredToBeHealthy=2;he.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[bt,he]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=he&&he.isAvailable();let r=n&&!he.previouslyFailed();if(e.webSocketOnly&&(n||ie("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[he];else{const i=this.transports_=[];for(const s of wn.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);wn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}wn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=6e4,sI=5e3,oI=10*1024,aI=100*1024,ss="t",ja="d",cI="s",Qa="r",lI="e",Ja="o",Xa="a",Za="n",ec="p",uI="h";class dI{constructor(e,n,r,i,s,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fn("c:"+this.id+":"),this.transportManager_=new wn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ln(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>aI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>oI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ss in e){const n=e[ss];n===Xa?this.upgradeIfSecondaryHealthy_():n===Qa?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ja&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Jt("t",e),r=Jt("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ec,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xa,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Za,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Jt("t",e),r=Jt("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Jt(ss,e);if(ja in e){const r=e[ja];if(n===uI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Za){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===cI?this.onConnectionShutdown_(r):n===Qa?this.onReset_(r):n===lI?As("Server Error: "+r):n===Ja?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):As("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),bo!==r&&ie("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ln(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(iI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ln(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ec,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(nt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){p(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends fd{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Js()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new pr}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=32,nc=768;class O{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function R(){return new O("")}function w(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function je(t){return t.pieces_.length-t.pieceNum_}function A(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new O(t.pieces_,e)}function _d(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function hI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function pd(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function md(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new O(e,0)}function H(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof O)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new O(n,0)}function T(t){return t.pieceNum_>=t.pieces_.length}function ne(t,e){const n=w(t),r=w(e);if(n===null)return e;if(n===r)return ne(A(t),A(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function gd(t,e){if(je(t)!==je(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function fe(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(je(t)>je(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class fI{constructor(e,n){this.errorPrefix_=n,this.parts_=pd(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Nr(this.parts_[r]);vd(this)}}function _I(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Nr(e),vd(t)}function pI(t){const e=t.parts_.pop();t.byteLength_-=Nr(e),t.parts_.length>0&&(t.byteLength_-=1)}function vd(t){if(t.byteLength_>nc)throw new Error(t.errorPrefix_+"has a key path longer than "+nc+" bytes ("+t.byteLength_+").");if(t.parts_.length>tc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+tc+") or object contains a cycle "+et(t))}function et(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends fd{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Oo}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=1e3,mI=60*5*1e3,rc=30*1e3,gI=1.3,vI=3e4,EI="server_kill",ic=3;class ke extends hd{constructor(e,n,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=ke.nextPersistentConnectionId_++,this.log_=Fn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xt,this.maxReconnectDelay_=mI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Rl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Oo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(W(s)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ar,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;ke.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ue(e,"w")){const r=Pt(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i="\".indexOn\": \""+n._queryParams.getIndex().toString()+"\"",s=n._path.toString();ie(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Cf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Sf(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+W(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):As("Unrecognized action received from server: "+W(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vI&&(this.reconnectDelay_=Xt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ke.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},l=function(d){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?J("getToken() completed but was canceled"):(J("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new dI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{ie(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(EI)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ie(d),c())}}}interrupt(e){J("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){J("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ys(this.interruptReasons_)&&(this.reconnectDelay_=Xt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Ro(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new O(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){J("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ic&&(this.reconnectDelay_=rc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){J("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ic&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+qu.replace(/\./g,"-")]=1,Js()?e["framework.cordova"]=1:wl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pr.getInstance().currentlyOnline();return ys(this.interruptReasons_)&&e}}ke.nextPersistentConnectionId_=0;ke.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new I(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new I(kt,e),i=new I(kt,n);return this.compare(r,i)!==0}minPost(){return I.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yn;class Ed extends Hr{static get __EMPTY_NODE(){return Yn}static set __EMPTY_NODE(e){Yn=e}compare(e,n){return Ht(e.name,n.name)}isDefinedOn(e){throw xt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return I.MIN}maxPost(){return new I(dt,Yn)}makePost(e,n){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new I(e,Yn)}toString(){return".key"}}const Nt=new Ed;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Y{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Y.RED,this.left=i??re.EMPTY_NODE,this.right=s??re.EMPTY_NODE}copy(e,n,r,i,s){return new Y(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return re.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Y.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Y.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Y.RED=!0;Y.BLACK=!1;class II{copy(e,n,r,i,s){return this}insert(e,n,r){return new Y(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class re{constructor(e,n=re.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new re(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Y.BLACK,null,null))}remove(e){return new re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Y.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new jn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new jn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new jn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new jn(this.root_,null,this.comparator_,!0,e)}}re.EMPTY_NODE=new II;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t,e){return Ht(t.name,e.name)}function Ao(t,e){return Ht(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps;function TI(t){Ps=t}const Id=function(t){return typeof t=="number"?"number:"+ju(t):"string:"+t},yd=function(t){if(t.isLeafNode()){const e=t.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ue(e,".sv"),"Priority must be a string or number.")}else p(t===Ps||t.isEmpty(),"priority of unexpected type.");p(t===Ps||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc;class K{constructor(e,n=K.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),yd(this.priorityNode_)}static set __childrenNodeConstructor(e){sc=e}static get __childrenNodeConstructor(){return sc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new K(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:K.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return T(e)?this:w(e)===".priority"?this.priorityNode_:K.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:K.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=w(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(p(r!==".priority"||je(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,K.__childrenNodeConstructor.EMPTY_NODE.updateChild(A(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Id(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ju(this.value_):e+=this.value_,this.lazyHash_=zu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===K.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof K.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=K.VALUE_TYPE_ORDER.indexOf(n),s=K.VALUE_TYPE_ORDER.indexOf(r);return p(i>=0,"Unknown leaf type: "+n),p(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}K.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Td,wd;function wI(t){Td=t}function RI(t){wd=t}class bI extends Hr{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ht(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return I.MIN}maxPost(){return new I(dt,new K("[PRIORITY-POST]",wd))}makePost(e,n){const r=Td(e);return new I(n,new K("[PRIORITY-POST]",r))}toString(){return".priority"}}const M=new bI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=Math.log(2);class CI{constructor(e){const n=s=>parseInt(Math.log(s)/SI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const mr=function(t,e,n,r){t.sort(e);const i=function(c,l){const u=l-c;let d,h;if(u===0)return null;if(u===1)return d=t[c],h=n?n(d):d,new Y(h,d.node,Y.BLACK,null,null);{const f=parseInt(u/2,10)+c,m=i(c,f),E=i(f+1,l);return d=t[f],h=n?n(d):d,new Y(h,d.node,Y.BLACK,m,E)}},s=function(c){let l=null,u=null,d=t.length;const h=function(m,E){const y=d-m,z=d;d-=m;const Q=i(y+1,z),U=t[y],F=n?n(U):U;f(new Y(F,U.node,E,null,Q))},f=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const E=c.nextBitIsOne(),y=Math.pow(2,c.count-(m+1));E?h(y,Y.BLACK):(h(y,Y.BLACK),h(y,Y.RED))}return u},o=new CI(t.length),a=s(o);return new re(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os;const Tt={};class Pe{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return p(Tt&&M,"ChildrenNode.ts has not been loaded"),os=os||new Pe({".priority":Tt},{".priority":M}),os}get(e){const n=Pt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof re?n:null}hasIndex(e){return Ue(this.indexSet_,e.toString())}addIndex(e,n){p(e!==Nt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(I.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=mr(r,e.getCompare()):a=Tt;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Pe(u,l)}addToIndexes(e,n){const r=or(this.indexes_,(i,s)=>{const o=Pt(this.indexSet_,s);if(p(o,"Missing index implementation for "+s),i===Tt){if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(I.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),mr(a,o.getCompare())}else return Tt;}else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new I(e.name,a))),c.insert(e,e.node)}});return new Pe(r,this.indexSet_)}removeFromIndexes(e,n){const r=or(this.indexes_,i=>{if(i===Tt)return i;{const s=n.get(e.name);return s?i.remove(new I(e.name,s)):i}});return new Pe(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zt;class v{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&yd(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zt||(Zt=new v(new re(Ao),null,Pe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zt}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Zt:n}}getChild(e){const n=w(e);return n===null?this:this.getImmediateChild(n).getChild(A(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(p(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new I(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Zt:this.priorityNode_;return new v(i,o,s)}}updateChild(e,n){const r=w(e);if(r===null)return n;{p(w(e)!==".priority"||je(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(A(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(M,(o,a)=>{n[o]=a.val(e),r++,s&&v.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Id(this.getPriority().val())+":"),this.forEachChild(M,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":zu(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new I(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new I(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new I(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,I.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,I.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xn?-1:0}withIndex(e){if(e===Nt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Nt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority())){if(this.children_.count()===n.children_.count()){const r=this.getIterator(M),i=n.getIterator(M);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;}else return!1}}resolveIndex_(e){return e===Nt?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class OI extends v{constructor(){super(new re(Ao),v.EMPTY_NODE,Pe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const xn=new OI;Object.defineProperties(I,{MIN:{value:new I(kt,v.EMPTY_NODE)},MAX:{value:new I(dt,xn)}});Ed.__EMPTY_NODE=v.EMPTY_NODE;K.__childrenNodeConstructor=v;TI(xn);RI(xn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=!0;function j(t,e=null){if(t===null)return v.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new K(n,j(e))}if(!(t instanceof Array)&&AI){const n=[];let r=!1;if(oe(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=j(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new I(o,c)))}}),n.length===0)return v.EMPTY_NODE;const s=mr(n,yI,o=>o.name,Ao);if(r){const o=mr(n,M.getCompare());return new v(s,j(e),new Pe({".priority":o},{".priority":M}))}else return new v(s,j(e),Pe.Default)}else{let n=v.EMPTY_NODE;return oe(t,(r,i)=>{if(Ue(t,r)&&r.substring(0,1)!=="."){const s=j(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(j(e))}}wI(j);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI extends Hr{constructor(e){super(),this.indexPath_=e,p(!T(e)&&w(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ht(e.name,n.name):s}makePost(e,n){const r=j(e),i=v.EMPTY_NODE.updateChild(this.indexPath_,r);return new I(n,i)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,xn);return new I(dt,e)}toString(){return pd(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI extends Hr{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ht(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return I.MIN}maxPost(){return I.MAX}makePost(e,n){const r=j(e);return new I(n,r)}toString(){return".value"}}const DI=new PI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t){return{type:"value",snapshotNode:t}}function Mt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Rn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function bn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function kI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Rn(n,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Mt(n,r)):o.trackChildChange(bn(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(M,(i,s)=>{n.hasChild(i)||r.trackChildChange(Rn(i,s))}),n.isLeafNode()||n.forEachChild(M,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(bn(i,s,o))}else r.trackChildChange(Mt(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.indexedFilter_=new No(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Sn.getStartPost_(e),this.endPost_=Sn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new I(n,r))||(r=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=v.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(v.EMPTY_NODE);const s=this;return n.forEachChild(M,(o,a)=>{s.matches(new I(o,a))||(i=i.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Sn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new I(n,r))||(r=v.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=v.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a)){if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;}else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(v.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const c=new I(n,r),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,c);if(u&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(bn(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Rn(n,d));const E=a.updateImmediateChild(n,v.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Mt(h.name,h.node)),E.updateImmediateChild(h.name,h.node)):E}}else return r.isEmpty()?e:u&&o(l,c)>=0?(s!=null&&(s.trackChildChange(Rn(l.name,l.node)),s.trackChildChange(Mt(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(l.name,v.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=M}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:kt}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:dt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===M}copy(){const e=new Po;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function LI(t){return t.loadsAllData()?new No(t.getIndex()):t.hasLimit()?new MI(t):new Sn(t)}function oc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===M?n="$priority":t.index_===DI?n="$value":t.index_===Nt?n="$key":(p(t.index_ instanceof NI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=W(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=W(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+W(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=W(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+W(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ac(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==M&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends hd{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Fn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=gr.getListenId_(e,r),a={};this.listens_[o]=a;const c=oc(e._queryParams);this.restRequest_(s+".json",c,(l,u)=>{let d=u;if(l===404&&(d=null,l=null),l===null&&this.onDataUpdate_(s,d,!1,r),Pt(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",i(h,null)}})}unlisten(e,n){const r=gr.getListenId_(e,n);delete this.listens_[r]}get(e){const n=oc(e._queryParams),r=e._path.toString(),i=new Ar;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+mt(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=pn(a.responseText)}catch{ie("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&ie("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(){return{value:null,children:new Map}}function bd(t,e,n){if(T(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=w(e);t.children.has(r)||t.children.set(r,vr());const i=t.children.get(r);e=A(e),bd(i,e,n)}}function Ds(t,e,n){t.value!==null?n(e,t.value):xI(t,(r,i)=>{const s=new O(e.toString()+"/"+r);Ds(i,s,n)})}function xI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&oe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=10*1e3,$I=30*1e3,BI=5*60*1e3;class VI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new UI(e);const r=cc+($I-cc)*Math.random();ln(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;oe(e,(i,s)=>{s>0&&Ue(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ln(this.reportStats_.bind(this),Math.floor(Math.random()*2*BI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_e||(_e={}));function Sd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Do(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ko(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=_e.ACK_USER_WRITE,this.source=Sd()}operationForChild(e){if(T(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new O(e));return new Er(R(),n,this.revert)}}else return p(w(this.path)===e,"operationForChild called for unrelated child."),new Er(A(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){this.source=e,this.path=n,this.type=_e.LISTEN_COMPLETE}operationForChild(e){return T(this.path)?new Cn(this.source,R()):new Cn(this.source,A(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=_e.OVERWRITE}operationForChild(e){return T(this.path)?new ht(this.source,R(),this.snap.getImmediateChild(e)):new ht(this.source,A(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=_e.MERGE}operationForChild(e){if(T(this.path)){const n=this.children.subtree(new O(e));return n.isEmpty()?null:n.value?new ht(this.source,R(),n.value):new On(this.source,R(),n)}else return p(w(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new On(this.source,A(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(T(e))return this.isFullyInitialized()&&!this.filtered_;const n=w(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function HI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(kI(o.childName,o.snapshotNode))}),en(t,i,"child_removed",e,r,n),en(t,i,"child_added",e,r,n),en(t,i,"child_moved",s,r,n),en(t,i,"child_changed",e,r,n),en(t,i,"value",e,r,n),i}function en(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,c)=>GI(t,a,c)),o.forEach(a=>{const c=qI(t,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function qI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function GI(t,e,n){if(e.childName==null||n.childName==null)throw xt("Should only compare child_ events.");const r=new I(e.childName,e.snapshotNode),i=new I(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t,e){return{eventCache:t,serverCache:e}}function un(t,e,n,r){return qr(new Qe(e,n,r),t.serverCache)}function Cd(t,e,n,r){return qr(t.eventCache,new Qe(e,n,r))}function Ir(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ft(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as;const zI=()=>(as||(as=new re(PE)),as);class N{constructor(e,n=zI()){this.value=e,this.children=n}static fromObject(e){let n=new N(null);return oe(e,(r,i)=>{n=n.set(new O(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:R(),value:this.value};if(T(e))return null;{const r=w(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(A(e),n);return s!=null?{path:H(new O(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(T(e))return this;{const n=w(e),r=this.children.get(n);return r!==null?r.subtree(A(e)):new N(null)}}set(e,n){if(T(e))return new N(n,this.children);{const r=w(e),s=(this.children.get(r)||new N(null)).set(A(e),n),o=this.children.insert(r,s);return new N(this.value,o)}}remove(e){if(T(e))return this.children.isEmpty()?new N(null):new N(null,this.children);{const n=w(e),r=this.children.get(n);if(r){const i=r.remove(A(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new N(null):new N(this.value,s)}else return this}}get(e){if(T(e))return this.value;{const n=w(e),r=this.children.get(n);return r?r.get(A(e)):null}}setTree(e,n){if(T(e))return n;{const r=w(e),s=(this.children.get(r)||new N(null)).setTree(A(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new N(this.value,o)}}fold(e){return this.fold_(R(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(H(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,R(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(T(e))return null;{const s=w(e),o=this.children.get(s);return o?o.findOnPath_(A(e),H(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,R(),n)}foreachOnPath_(e,n,r){if(T(e))return this;{this.value&&r(n,this.value);const i=w(e),s=this.children.get(i);return s?s.foreachOnPath_(A(e),H(n,i),r):new N(null)}}foreach(e){this.foreach_(R(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(H(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.writeTree_=e}static empty(){return new pe(new N(null))}}function dn(t,e,n){if(T(e))return new pe(new N(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ne(i,e);return s=s.updateChild(o,n),new pe(t.writeTree_.set(i,s))}else{const i=new N(n),s=t.writeTree_.setTree(e,i);return new pe(s)}}}function lc(t,e,n){let r=t;return oe(n,(i,s)=>{r=dn(r,H(e,i),s)}),r}function uc(t,e){if(T(e))return pe.empty();{const n=t.writeTree_.setTree(e,new N(null));return new pe(n)}}function ks(t,e){return Et(t,e)!=null}function Et(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ne(n.path,e)):null}function dc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(M,(r,i)=>{e.push(new I(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new I(r,i.value))}),e}function ze(t,e){if(T(e))return t;{const n=Et(t,e);return n!=null?new pe(new N(n)):new pe(t.writeTree_.subtree(e))}}function Ms(t){return t.writeTree_.isEmpty()}function Lt(t,e){return Od(R(),t.writeTree_,e)}function Od(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(p(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Od(H(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(H(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t,e){return Dd(e,t)}function KI(t,e,n,r,i){p(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=dn(t.visibleWrites,e,n)),t.lastWriteId=r}function YI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function jI(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);p(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&QI(a,r.path)?i=!1:fe(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return JI(t),!0;if(r.snap)t.visibleWrites=uc(t.visibleWrites,r.path);else{const a=r.children;oe(a,c=>{t.visibleWrites=uc(t.visibleWrites,H(r.path,c))})}return!0}else return!1}function QI(t,e){if(t.snap)return fe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&fe(H(t.path,n),e))return!0;return!1}function JI(t){t.visibleWrites=Ad(t.allWrites,XI,R()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function XI(t){return t.visible}function Ad(t,e,n){let r=pe.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)fe(n,o)?(a=ne(n,o),r=dn(r,a,s.snap)):fe(o,n)&&(a=ne(o,n),r=dn(r,R(),s.snap.getChild(a)));else if(s.children){if(fe(n,o))a=ne(n,o),r=lc(r,a,s.children);else if(fe(o,n))if(a=ne(o,n),T(a))r=lc(r,R(),s.children);else{const c=Pt(s.children,w(a));if(c){const l=c.getChild(A(a));r=dn(r,R(),l)}}}else throw xt("WriteRecord should have .snap or .children")}}return r}function Nd(t,e,n,r,i){if(!r&&!i){const s=Et(t.visibleWrites,e);if(s!=null)return s;{const o=ze(t.visibleWrites,e);if(Ms(o))return n;if(n==null&&!ks(o,R()))return null;{const a=n||v.EMPTY_NODE;return Lt(o,a)}}}else{const s=ze(t.visibleWrites,e);if(!i&&Ms(s))return n;if(!i&&n==null&&!ks(s,R()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(fe(l.path,e)||fe(e,l.path))},a=Ad(t.allWrites,o,e),c=n||v.EMPTY_NODE;return Lt(a,c)}}}function ZI(t,e,n){let r=v.EMPTY_NODE;const i=Et(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(M,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ze(t.visibleWrites,e);return n.forEachChild(M,(o,a)=>{const c=Lt(ze(s,new O(o)),a);r=r.updateImmediateChild(o,c)}),dc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ze(t.visibleWrites,e);return dc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ey(t,e,n,r,i){p(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=H(e,n);if(ks(t.visibleWrites,s))return null;{const o=ze(t.visibleWrites,s);return Ms(o)?i.getChild(n):Lt(o,i.getChild(n))}}function ty(t,e,n,r){const i=H(e,n),s=Et(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ze(t.visibleWrites,i);return Lt(o,r.getNode().getImmediateChild(n))}else return null}function ny(t,e){return Et(t.visibleWrites,e)}function ry(t,e,n,r,i,s,o){let a;const c=ze(t.visibleWrites,e),l=Et(c,R());if(l!=null)a=l;else if(n!=null)a=Lt(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=h.getNext();for(;f&&u.length<i;)d(f,r)!==0&&u.push(f),f=h.getNext();return u}else return[]}function iy(){return{visibleWrites:pe.empty(),allWrites:[],lastWriteId:-1}}function yr(t,e,n,r){return Nd(t.writeTree,t.treePath,e,n,r)}function Mo(t,e){return ZI(t.writeTree,t.treePath,e)}function hc(t,e,n,r){return ey(t.writeTree,t.treePath,e,n,r)}function Tr(t,e){return ny(t.writeTree,H(t.treePath,e))}function sy(t,e,n,r,i,s){return ry(t.writeTree,t.treePath,e,n,r,i,s)}function Lo(t,e,n){return ty(t.writeTree,t.treePath,e,n)}function Pd(t,e){return Dd(H(t.treePath,e),t.writeTree)}function Dd(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;p(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),p(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,bn(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Rn(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Mt(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,bn(r,e.snapshotNode,i.oldSnap));else throw xt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const kd=new ay;class Fo{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Qe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Lo(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ft(this.viewCache_),s=sy(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t){return{filter:t}}function ly(t,e){p(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function uy(t,e,n,r,i){const s=new oy;let o,a;if(n.type===_e.OVERWRITE){const l=n;l.source.fromUser?o=Ls(t,e,l.path,l.snap,r,i,s):(p(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!T(l.path),o=wr(t,e,l.path,l.snap,r,i,a,s))}else if(n.type===_e.MERGE){const l=n;l.source.fromUser?o=hy(t,e,l.path,l.children,r,i,s):(p(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Fs(t,e,l.path,l.children,r,i,a,s))}else if(n.type===_e.ACK_USER_WRITE){const l=n;l.revert?o=py(t,e,l.path,r,i,s):o=fy(t,e,l.path,l.affectedTree,r,i,s)}else if(n.type===_e.LISTEN_COMPLETE)o=_y(t,e,n.path,r,s);else throw xt("Unknown operation type: "+n.type);const c=s.getChanges();return dy(e,o,c),{viewCache:o,changes:c}}function dy(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ir(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Rd(Ir(e)))}}function Md(t,e,n,r,i,s){const o=e.eventCache;if(Tr(r,n)!=null)return e;{let a,c;if(T(n)){if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=ft(e),u=l instanceof v?l:v.EMPTY_NODE,d=Mo(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const l=yr(r,ft(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}}else{const l=w(n);if(l===".priority"){p(je(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const d=hc(r,n,u,c);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=A(n);let d;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=hc(r,n,o.getNode(),c);h!=null?d=o.getNode().getImmediateChild(l).updateChild(u,h):d=o.getNode().getImmediateChild(l)}else d=Lo(r,l,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),l,d,u,i,s):a=o.getNode()}}return un(e,a,o.isFullyInitialized()||T(n),t.filter.filtersNodes())}}function wr(t,e,n,r,i,s,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(T(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),f,null)}else{const f=w(n);if(!c.isCompleteForPath(n)&&je(n)>1)return e;const m=A(n),y=c.getNode().getImmediateChild(f).updateChild(m,r);f===".priority"?l=u.updatePriority(c.getNode(),y):l=u.updateChild(c.getNode(),f,y,m,kd,null)}const d=Cd(e,l,c.isFullyInitialized()||T(n),u.filtersNodes()),h=new Fo(i,d,s);return Md(t,d,n,i,h,a)}function Ls(t,e,n,r,i,s,o){const a=e.eventCache;let c,l;const u=new Fo(i,e,s);if(T(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=un(e,l,!0,t.filter.filtersNodes());else{const d=w(n);if(d===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),c=un(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=A(n),f=a.getNode().getImmediateChild(d);let m;if(T(h))m=r;else{const E=u.getCompleteChild(d);E!=null?_d(h)===".priority"&&E.getChild(md(h)).isEmpty()?m=E:m=E.updateChild(h,r):m=v.EMPTY_NODE}if(f.equals(m))c=e;else{const E=t.filter.updateChild(a.getNode(),d,m,h,u,o);c=un(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function fc(t,e){return t.eventCache.isCompleteForChild(e)}function hy(t,e,n,r,i,s,o){let a=e;return r.foreach((c,l)=>{const u=H(n,c);fc(e,w(u))&&(a=Ls(t,a,u,l,i,s,o))}),r.foreach((c,l)=>{const u=H(n,c);fc(e,w(u))||(a=Ls(t,a,u,l,i,s,o))}),a}function _c(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Fs(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;T(n)?l=r:l=new N(null).setTree(n,r);const u=e.serverCache.getNode();return l.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),m=_c(t,f,h);c=wr(t,c,new O(d),m,i,s,o,a)}}),l.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const m=e.serverCache.getNode().getImmediateChild(d),E=_c(t,m,h);c=wr(t,c,new O(d),E,i,s,o,a)}}),c}function fy(t,e,n,r,i,s,o){if(Tr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(T(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return wr(t,e,n,c.getNode().getChild(n),i,s,a,o);if(T(n)){let l=new N(null);return c.getNode().forEachChild(Nt,(u,d)=>{l=l.set(new O(u),d)}),Fs(t,e,n,l,i,s,a,o)}else return e}else{let l=new N(null);return r.foreach((u,d)=>{const h=H(n,u);c.isCompleteForPath(h)&&(l=l.set(u,c.getNode().getChild(h)))}),Fs(t,e,n,l,i,s,a,o)}}function _y(t,e,n,r,i){const s=e.serverCache,o=Cd(e,s.getNode(),s.isFullyInitialized()||T(n),s.isFiltered());return Md(t,o,n,r,kd,i)}function py(t,e,n,r,i,s){let o;if(Tr(r,n)!=null)return e;{const a=new Fo(r,e,i),c=e.eventCache.getNode();let l;if(T(n)||w(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=yr(r,ft(e));else{const d=e.serverCache.getNode();p(d instanceof v,"serverChildren would be complete if leaf node"),u=Mo(r,d)}u=u,l=t.filter.updateFullNode(c,u,s)}else{const u=w(n);let d=Lo(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=c.getImmediateChild(u)),d!=null?l=t.filter.updateChild(c,u,d,A(n),a,s):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,v.EMPTY_NODE,A(n),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=yr(r,ft(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||Tr(r,R())!=null,un(e,l,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new No(r.getIndex()),s=LI(r);this.processor_=cy(s);const o=n.serverCache,a=n.eventCache,c=i.updateFullNode(v.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(v.EMPTY_NODE,a.getNode(),null),u=new Qe(c,o.isFullyInitialized(),i.filtersNodes()),d=new Qe(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=qr(d,u),this.eventGenerator_=new WI(this.query_)}get query(){return this.query_}}function gy(t){return t.viewCache_.serverCache.getNode()}function vy(t){return Ir(t.viewCache_)}function Ey(t,e){const n=ft(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!T(e)&&!n.getImmediateChild(w(e)).isEmpty())?n.getChild(e):null}function pc(t){return t.eventRegistrations_.length===0}function Iy(t,e){t.eventRegistrations_.push(e)}function mc(t,e,n){const r=[];if(n){p(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function gc(t,e,n,r){e.type===_e.MERGE&&e.source.queryId!==null&&(p(ft(t.viewCache_),"We should always have a full cache before handling merges"),p(Ir(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=uy(t.processor_,i,e,n,r);return ly(t.processor_,s.viewCache),p(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ld(t,s.changes,s.viewCache.eventCache.getNode(),null)}function yy(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(M,(s,o)=>{r.push(Mt(s,o))}),n.isFullyInitialized()&&r.push(Rd(n.getNode())),Ld(t,r,n.getNode(),e)}function Ld(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return HI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rr;class Fd{constructor(){this.views=new Map}}function Ty(t){p(!Rr,"__referenceConstructor has already been defined"),Rr=t}function wy(){return p(Rr,"Reference.ts has not been loaded"),Rr}function Ry(t){return t.views.size===0}function xo(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return p(s!=null,"SyncTree gave us an op for an invalid query."),gc(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(gc(o,e,n,r));return s}}function xd(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=yr(n,i?r:null),c=!1;a?c=!0:r instanceof v?(a=Mo(n,r),c=!1):(a=v.EMPTY_NODE,c=!1);const l=qr(new Qe(a,c,!1),new Qe(r,i,!1));return new my(e,l)}return o}function by(t,e,n,r,i,s){const o=xd(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Iy(o,n),yy(o,n)}function Sy(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Je(t);if(i==="default")for(const[c,l]of t.views.entries())o=o.concat(mc(l,n,r)),pc(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const c=t.views.get(i);c&&(o=o.concat(mc(c,n,r)),pc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||s.push(c.query)))}return a&&!Je(t)&&s.push(new(wy())(e._repo,e._path)),{removed:s,events:o}}function Ud(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ke(t,e){let n=null;for(const r of t.views.values())n=n||Ey(r,e);return n}function $d(t,e){if(e._queryParams.loadsAllData())return zr(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Bd(t,e){return $d(t,e)!=null}function Je(t){return zr(t)!=null}function zr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br;function Cy(t){p(!br,"__referenceConstructor has already been defined"),br=t}function Oy(){return p(br,"Reference.ts has not been loaded"),br}let Ay=1;class vc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new N(null),this.pendingWriteTree_=iy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vd(t,e,n,r,i){return KI(t.pendingWriteTree_,e,n,r,i),i?$n(t,new ht(Sd(),e,n)):[]}function rt(t,e,n=!1){const r=YI(t.pendingWriteTree_,e);if(jI(t.pendingWriteTree_,e)){let s=new N(null);return r.snap!=null?s=s.set(R(),!0):oe(r.children,o=>{s=s.set(new O(o),!0)}),$n(t,new Er(r.path,s,n))}else return[]}function Un(t,e,n){return $n(t,new ht(Do(),e,n))}function Ny(t,e,n){const r=N.fromObject(n);return $n(t,new On(Do(),e,r))}function Py(t,e){return $n(t,new Cn(Do(),e))}function Dy(t,e,n){const r=$o(t,n);if(r){const i=Bo(r),s=i.path,o=i.queryId,a=ne(s,e),c=new Cn(ko(o),a);return Vo(t,s,c)}else return[]}function Wd(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Bd(o,e))){const c=Sy(o,e,n,r);Ry(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!i){const u=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,f)=>Je(f));if(u&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const f=Fy(h);for(let m=0;m<f.length;++m){const E=f[m],y=E.query,z=zd(t,E);t.listenProvider_.startListening(hn(y),An(t,y),z.hashFn,z.onComplete)}}}!d&&l.length>0&&!r&&(u?t.listenProvider_.stopListening(hn(e),null):l.forEach(h=>{const f=t.queryToTagMap.get(Kr(h));t.listenProvider_.stopListening(hn(h),f)}))}xy(t,l)}return a}function Hd(t,e,n,r){const i=$o(t,r);if(i!=null){const s=Bo(i),o=s.path,a=s.queryId,c=ne(o,e),l=new ht(ko(a),c,n);return Vo(t,o,l)}else return[]}function ky(t,e,n,r){const i=$o(t,r);if(i){const s=Bo(i),o=s.path,a=s.queryId,c=ne(o,e),l=N.fromObject(n),u=new On(ko(a),c,l);return Vo(t,o,u)}else return[]}function My(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,f)=>{const m=ne(h,i);s=s||Ke(f,m),o=o||Je(f)});let a=t.syncPointTree_.get(i);a?(o=o||Je(a),s=s||Ke(a,R())):(a=new Fd,t.syncPointTree_=t.syncPointTree_.set(i,a));let c;s!=null?c=!0:(c=!1,s=v.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,m)=>{const E=Ke(m,R());E&&(s=s.updateImmediateChild(f,E))}));const l=Bd(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=Kr(e);p(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=Uy();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const u=Gr(t.pendingWriteTree_,i);let d=by(a,e,n,u,s,c);if(!l&&!o&&!r){const h=$d(a,e);d=d.concat($y(t,e,h))}return d}function Uo(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=ne(o,e),l=Ke(a,c);if(l)return l});return Nd(i,e,s,n,!0)}function Ly(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(l,u)=>{const d=ne(l,n);r=r||Ke(u,d)});let i=t.syncPointTree_.get(n);i?r=r||Ke(i,R()):(i=new Fd,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Qe(r,!0,!1):null,a=Gr(t.pendingWriteTree_,e._path),c=xd(i,e,a,s?o.getNode():v.EMPTY_NODE,s);return vy(c)}function $n(t,e){return qd(e,t.syncPointTree_,null,Gr(t.pendingWriteTree_,R()))}function qd(t,e,n,r){if(T(t.path))return Gd(t,e,n,r);{const i=e.get(R());n==null&&i!=null&&(n=Ke(i,R()));let s=[];const o=w(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=Pd(r,o);s=s.concat(qd(a,c,l,u))}return i&&(s=s.concat(xo(i,t,r,n))),s}}function Gd(t,e,n,r){const i=e.get(R());n==null&&i!=null&&(n=Ke(i,R()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=Pd(r,o),u=t.operationForChild(o);u&&(s=s.concat(Gd(u,a,c,l)))}),i&&(s=s.concat(xo(i,t,r,n))),s}function zd(t,e){const n=e.query,r=An(t,n);return{hashFn:()=>(gy(e)||v.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Dy(t,n._path,r):Py(t,n._path);{const s=ME(i,n);return Wd(t,n,null,s)}}}}function An(t,e){const n=Kr(e);return t.queryToTagMap.get(n)}function Kr(t){return t._path.toString()+"$"+t._queryIdentifier}function $o(t,e){return t.tagToQueryMap.get(e)}function Bo(t){const e=t.indexOf("$");return p(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new O(t.substr(0,e))}}function Vo(t,e,n){const r=t.syncPointTree_.get(e);p(r,"Missing sync point for query tag that we're tracking");const i=Gr(t.pendingWriteTree_,e);return xo(r,n,i,null)}function Fy(t){return t.fold((e,n,r)=>{if(n&&Je(n))return[zr(n)];{let i=[];return n&&(i=Ud(n)),oe(r,(s,o)=>{i=i.concat(o)}),i}})}function hn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Oy())(t._repo,t._path):t}function xy(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Kr(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Uy(){return Ay++}function $y(t,e,n){const r=e._path,i=An(t,e),s=zd(t,n),o=t.listenProvider_.startListening(hn(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)p(!Je(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,d)=>{if(!T(l)&&u&&Je(u))return[zr(u).query];{let h=[];return u&&(h=h.concat(Ud(u).map(f=>f.query))),oe(d,(f,m)=>{h=h.concat(m)}),h}});for(let l=0;l<c.length;++l){const u=c[l];t.listenProvider_.stopListening(hn(u),An(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Wo(n)}node(){return this.node_}}class Ho{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=H(this.path_,e);return new Ho(this.syncTree_,n)}node(){return Uo(this.syncTree_,this.path_)}}const By=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ec=function(t,e,n){if(!t||typeof t!="object")return t;if(p(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Vy(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Wy(t[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Vy=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:p(!1,"Unexpected server value: "+t)}},Wy=function(t,e,n){t.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&p(!1,"Unexpected increment value: "+r);const i=e.node();if(p(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Hy=function(t,e,n,r){return qo(e,new Ho(n,t),r)},Kd=function(t,e,n){return qo(t,new Wo(e),n)};function qo(t,e,n){const r=t.getPriority().val(),i=Ec(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Ec(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new K(a,j(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new K(i))),o.forEachChild(M,(a,c)=>{const l=qo(c,e.getImmediateChild(a),n);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function zo(t,e){let n=e instanceof O?e:new O(e),r=t,i=w(n);for(;i!==null;){const s=Pt(r.node.children,i)||{children:{},childCount:0};r=new Go(i,r,s),n=A(n),i=w(n)}return r}function Gt(t){return t.node.value}function Yd(t,e){t.node.value=e,xs(t)}function jd(t){return t.node.childCount>0}function qy(t){return Gt(t)===void 0&&!jd(t)}function Yr(t,e){oe(t.node.children,(n,r)=>{e(new Go(n,t,r))})}function Qd(t,e,n,r){n&&!r&&e(t),Yr(t,i=>{Qd(i,e,!0,r)}),n&&r&&e(t)}function Gy(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Bn(t){return new O(t.parent===null?t.name:Bn(t.parent)+"/"+t.name)}function xs(t){t.parent!==null&&zy(t.parent,t.name,t)}function zy(t,e,n){const r=qy(n),i=Ue(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,xs(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xs(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=/[\[\].#$\/\u0000-\u001F\u007F]/,Yy=/[\[\].#$\u0000-\u001F\u007F]/,cs=10*1024*1024,Jd=function(t){return typeof t=="string"&&t.length!==0&&!Ky.test(t)},Xd=function(t){return typeof t=="string"&&t.length!==0&&!Yy.test(t)},jy=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Xd(t)},Qy=function(t,e,n,r){r&&e===void 0||Ko(Xs(t,"value"),e,n)},Ko=function(t,e,n){const r=n instanceof O?new fI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+et(r));if(typeof e=="function")throw new Error(t+"contains a function "+et(r)+" with contents = "+e.toString());if(Ku(e))throw new Error(t+"contains "+e.toString()+" "+et(r));if(typeof e=="string"&&e.length>cs/3&&Nr(e)>cs)throw new Error(t+"contains a string greater than "+cs+" utf8 bytes "+et(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(oe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Jd(o)))throw new Error(t+" contains an invalid key ("+o+") "+et(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_I(r,o),Ko(t,a,r),pI(r)}),i&&s)throw new Error(t+" contains \".value\" child "+et(r)+" in addition to actual children.")}},Zd=function(t,e,n,r){if(!(r&&n===void 0)&&!Xd(n))throw new Error(Xs(t,e)+"was an invalid path = \""+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Jy=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Zd(t,e,n,r)},Xy=function(t,e){if(w(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Zy=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!jy(n))throw new Error(Xs(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function eh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!gd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Te(t,e,n){eh(t,n),tT(t,r=>fe(r,e)||fe(e,r))}function tT(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(nT(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function nT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();at&&J("event: "+n.toString()),qt(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="repo_interrupt",iT=25;class sT{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vr(),this.transactionQueueTree_=new Go,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function oT(t,e,n){if(t.stats_=So(t.repoInfo_),t.forceRestClient_||UE())t.server_=new gr(t.repoInfo_,(r,i,s,o)=>{Ic(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>yc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{W(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new ke(t.repoInfo_,e,(r,i,s,o)=>{Ic(t,r,i,s,o)},r=>{yc(t,r)},r=>{cT(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=HE(t.repoInfo_,()=>new VI(t.stats_,t.server_)),t.infoData_=new FI,t.infoSyncTree_=new vc({startListening:(r,i,s,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=Un(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),jo(t,"connected",!1),t.serverSyncTree_=new vc({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,c)=>{const l=o(a,c);Te(t.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function aT(t){const n=t.infoData_.getNode(new O(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yo(t){return By({timestamp:aT(t)})}function Ic(t,e,n,r,i){t.dataUpdateCount++;const s=new O(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i){if(r){const c=or(n,l=>j(l));o=ky(t.serverSyncTree_,s,c,i)}else{const c=j(n);o=Hd(t.serverSyncTree_,s,c,i)}}else if(r){const c=or(n,l=>j(l));o=Ny(t.serverSyncTree_,s,c)}else{const c=j(n);o=Un(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=Qr(t,s)),Te(t.eventQueue_,a,o)}function yc(t,e){jo(t,"connected",e),e===!1&&dT(t)}function cT(t,e){oe(e,(n,r)=>{jo(t,n,r)})}function jo(t,e,n){const r=new O("/.info/"+e),i=j(n);t.infoData_.updateSnapshot(r,i);const s=Un(t.infoSyncTree_,r,i);Te(t.eventQueue_,r,s)}function th(t){return t.nextWriteId_++}function lT(t,e,n){const r=Ly(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=j(i).withIndex(e._queryParams.getIndex());My(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Un(t.serverSyncTree_,e._path,s);else{const a=An(t.serverSyncTree_,e);o=Hd(t.serverSyncTree_,e._path,s,a)}return Te(t.eventQueue_,e._path,o),Wd(t.serverSyncTree_,e,n,null,!0),s},i=>(jr(t,"get for query "+W(e)+" failed: "+i),Promise.reject(new Error(i))))}function uT(t,e,n,r,i){jr(t,"set",{path:e.toString(),value:n,priority:r});const s=Yo(t),o=j(n,r),a=Uo(t.serverSyncTree_,e),c=Kd(o,a,s),l=th(t),u=Vd(t.serverSyncTree_,e,c,l,!0);eh(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,f)=>{const m=h==="ok";m||ie("set at "+e+" failed: "+h);const E=rt(t.serverSyncTree_,l,!m);Te(t.eventQueue_,e,E),fT(t,i,h,f)});const d=oh(t,e);Qr(t,d),Te(t.eventQueue_,d,[])}function dT(t){jr(t,"onDisconnectEvents");const e=Yo(t),n=vr();Ds(t.onDisconnect_,R(),(i,s)=>{const o=Hy(i,s,t.serverSyncTree_,e);bd(n,i,o)});let r=[];Ds(n,R(),(i,s)=>{r=r.concat(Un(t.serverSyncTree_,i,s));const o=oh(t,i);Qr(t,o)}),t.onDisconnect_=vr(),Te(t.eventQueue_,R(),r)}function hT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(rT)}function jr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),J(n,...e)}function fT(t,e,n,r){e&&qt(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function nh(t,e,n){return Uo(t.serverSyncTree_,e,n)||v.EMPTY_NODE}function Qo(t,e=t.transactionQueueTree_){if(e||Jr(t,e),Gt(e)){const n=ih(t,e);p(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&_T(t,Bn(e),n)}else jd(e)&&Yr(e,n=>{Qo(t,n)})}function _T(t,e,n){const r=n.map(l=>l.currentWriteId),i=nh(t,e,r);let s=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];p(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ne(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,l=>{jr(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(rt(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Jr(t,zo(t.transactionQueueTree_,e)),Qo(t,t.transactionQueueTree_),Te(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)qt(d[h])}else{if(l==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ie("transaction at "+c.toString()+" failed: "+l);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=l}Qr(t,e)}},o)}function Qr(t,e){const n=rh(t,e),r=Bn(n),i=ih(t,n);return pT(t,i,r),r}function pT(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=ne(n,c.path);let u=!1,d;if(p(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,d=c.abortReason,i=i.concat(rt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=iT)u=!0,d="maxretry",i=i.concat(rt(t.serverSyncTree_,c.currentWriteId,!0));else{const h=nh(t,c.path,o);c.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){Ko("transaction failed: Data returned ",f,c.path);let m=j(f);typeof f=="object"&&f!=null&&Ue(f,".priority")||(m=m.updatePriority(h.getPriority()));const y=c.currentWriteId,z=Yo(t),Q=Kd(m,h,z);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=Q,c.currentWriteId=th(t),o.splice(o.indexOf(y),1),i=i.concat(Vd(t.serverSyncTree_,c.path,Q,c.currentWriteId,c.applyLocally)),i=i.concat(rt(t.serverSyncTree_,y,!0))}else u=!0,d="nodata",i=i.concat(rt(t.serverSyncTree_,c.currentWriteId,!0))}Te(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Jr(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)qt(r[a]);Qo(t,t.transactionQueueTree_)}function rh(t,e){let n,r=t.transactionQueueTree_;for(n=w(e);n!==null&&Gt(r)===void 0;)r=zo(r,n),e=A(e),n=w(e);return r}function ih(t,e){const n=[];return sh(t,e,n),n.sort((r,i)=>r.order-i.order),n}function sh(t,e,n){const r=Gt(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Yr(e,i=>{sh(t,i,n)})}function Jr(t,e){const n=Gt(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Yd(e,n.length>0?n:void 0)}Yr(e,r=>{Jr(t,r)})}function oh(t,e){const n=Bn(rh(t,e)),r=zo(t.transactionQueueTree_,e);return Gy(r,i=>{ls(t,i)}),ls(t,r),Qd(r,i=>{ls(t,i)}),n}function ls(t,e){const n=Gt(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(p(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(p(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(rt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Yd(e,void 0):n.length=s+1,Te(t.eventQueue_,Bn(e),i);for(let o=0;o<r.length;o++)qt(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function gT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ie(`Invalid query segment '${n}' in query '${t}'`)}return e}const Tc=function(t,e){const n=vT(t),r=n.namespace;n.domain==="firebase.com"&&Fe(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Fe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||AE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new sd(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new O(n.pathString)}},vT=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=mT(t.substring(u,d)));const h=gT(t.substring(Math.min(t.length,d)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+W(this.snapshot.exportVal())}}class IT{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return T(this._path)?null:_d(this._path)}get ref(){return new Ve(this._repo,this._path)}get _queryIdentifier(){const e=ac(this._queryParams),n=Ro(e);return n==="{}"?"default":n}get _queryObject(){return ac(this._queryParams)}isEqual(e){if(e=g(e),!(e instanceof Jo))return!1;const n=this._repo===e._repo,r=gd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+hI(this._path)}}class Ve extends Jo{constructor(e,n){super(e,n,new Po,!1)}get parent(){const e=md(this._path);return e===null?null:new Ve(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Nn{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new O(e),r=Us(this.ref,e);return new Nn(this._node.getChild(n),r,M)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Nn(i,Us(this.ref,r),M)))}hasChild(e){const n=new O(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Qn(t,e){return t=g(t),t._checkNotDeleted("ref"),e!==void 0?Us(t._root,e):t._root}function Us(t,e){return t=g(t),w(t._path)===null?Jy("child","path",e,!1):Zd("child","path",e,!1),new Ve(t._repo,H(t._path,e))}function wc(t,e){t=g(t),Xy("set",t._path),Qy("set",e,t._path,!1);const n=new Ar;return uT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function us(t){t=g(t);const e=new yT(()=>{}),n=new Xo(e);return lT(t._repo,t,n).then(r=>new Nn(r,new Ve(t._repo,t._path),t._queryParams.getIndex()))}class Xo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new ET("value",this,new Nn(e.snapshotNode,new Ve(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new IT(this,e,n):null}matches(e){return e instanceof Xo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Ty(Ve);Cy(Ve);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="FIREBASE_DATABASE_EMULATOR_HOST",$s={};let wT=!1;function RT(t,e,n,r){t.repoInfo_=new sd(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function bT(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Fe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),J("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Tc(s,i),a=o.repoInfo,c,l;typeof process<"u"&&Ha&&(l=Ha[TT]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=Tc(s,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new At(At.OWNER):new BE(t.name,t.options,e);Zy("Invalid Firebase Database URL",o),T(o.path)||Fe("Database URL must point to the root of a Firebase Database (not including a child path).");const d=CT(a,t,u,new $E(t.name,n));return new OT(d,t)}function ST(t,e){const n=$s[e];(!n||n[t.key]!==t)&&Fe(`Database ${e}(${t.repoInfo_}) has already been deleted.`),hT(t),delete n[t.key]}function CT(t,e,n,r){let i=$s[e.name];i||(i={},$s[e.name]=i);let s=i[t.toURLString()];return s&&Fe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new sT(t,wT,n,r),i[t.toURLString()]=s,s}class OT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(oT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ve(this._repo,R())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ST(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Fe("Cannot call "+e+" on a deleted database.")}}function ds(t=eo(),e){const n=Pr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=El("database");r&&AT(n,...r)}return n}function AT(t,e,n,r={}){t=g(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Fe("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Fe("mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the \"firebase\" package instead of \"firebase-admin\"."),s=new At(At.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Tl(r.mockUserToken,t.app.options.projectId);s=new At(o)}RT(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t){RE(gt),lt(new Ye("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return bT(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ie(qa,Ga,t),Ie(qa,Ga,"esm2017")}ke.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ke.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};NT();var Zo={},ee={},ah={},zt={};Object.defineProperty(zt,"__esModule",{value:!0});zt.getEscapedRegExp=kT;zt.getPropertyDescriptor=PT;zt.pause=DT;function PT(t,e){var n;do n=Object.getOwnPropertyDescriptor(t,e);while(!n&&(t=Object.getPrototypeOf(t)));return n}function DT(t){return new Promise(function(e){return setTimeout(e,t)})}function kT(t){var e=/[$()*+.?[\\\]^{|}]/g;return t.replace(e,"\\$&")}var q={};Object.defineProperty(q,"__esModule",{value:!0});q.isArray=UT;q.isBoolean=VT;q.isClass=FT;q.isFunction=ch;q.isGetter=HT;q.isNumber=BT;q.isObject=xT;q.isPromise=$T;q.isRegexp=qT;q.isStream=WT;q.isString=LT;q.isValue=de;var MT=zt;function LT(t){return de(t)&&Object.prototype.toString.call(t)==="[object String]"}function FT(t){return de(t)&&typeof t=="function"&&/class/i.test(t.toString())}function ch(t){return de(t)&&["[object Function]","[object AsyncFunction]"].includes(Object.prototype.toString.call(t))}function xT(t){return de(t)&&Object.prototype.toString.call(t)==="[object Object]"}function UT(t){return de(t)&&Object.prototype.toString.call(t)==="[object Array]"}function $T(t){return de(t)&&Object.prototype.toString.call(t)==="[object Promise]"}function de(t){return t!=null}function BT(t){return de(t)&&Object.prototype.toString.call(t)==="[object Number]"&&!Number.isNaN(t)}function VT(t){return de(t)&&Object.prototype.toString.call(t)==="[object Boolean]"}function WT(t){return de(t)&&ch(t.pipe)}function HT(t,e){var n;return de(t)?!!((n=(0,MT.getPropertyDescriptor)(t,e))!==null&&n!==void 0&&n.get):!1}function qT(t){return de(t)&&Object.prototype.toString.call(t)==="[object RegExp]"}var Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.existanceFilter=void 0;Z.flatten=uh;Z.groupBy=XT;Z.isUnique=QT;Z.last=JT;Z.passFilter=void 0;Z.toArray=ea;Z.uniqueFilter=ta;Z.uniqueIdenticFilter=Z.uniqueIdFilter=void 0;var Bs=q;function lh(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=GT(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,o=!1,a;return{s:function(){n=n.call(t)},n:function(){var l=n.next();return s=l.done,l},e:function(l){o=!0,a=l},f:function(){try{!s&&n.return!=null&&n.return()}finally{if(o)throw a}}}}function GT(t,e){if(t){if(typeof t=="string")return Rc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rc(t,e)}}function Rc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ea(t){return(0,Bs.isValue)(t)?(0,Bs.isArray)(t)?t:[t]:[]}function ta(t){return function(n,r,i){var s=t?i.findIndex(function(o){return t(n,o)}):i.indexOf(n);return s===r}}var zT=ta(function(t,e){return t.id===e.id});Z.uniqueIdFilter=zT;var KT=ta(function(t,e){return t===e});Z.uniqueIdenticFilter=KT;var YT=function(e){return(0,Bs.isValue)(e)};Z.existanceFilter=YT;var jT=function(){return!0};Z.passFilter=jT;function uh(t){return ea(t).reduce(function(e,n){return e.concat(Array.isArray(n)?uh(n):n)},[])}function QT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.field,r=e.ignoreEmpty,i=new Map,s=lh(t),o;try{for(s.s();!(o=s.n()).done;){var a=o.value,c=!r&&n?a[n]:a;if(!(r&&c==null)){if(i.has(c))return!1;i.set(c)}}}catch(l){s.e(l)}finally{s.f()}return!0}function JT(t){return t[t.length-1]}function XT(t,e){var n=ea(e),r={},i=lh(t),s;try{var o=function(){var c=s.value,l=n.map(function(u){return c[u]}).join(".");r[l]||(r[l]=[]),r[l].push(c)};for(i.s();!(s=i.n()).done;)o()}catch(a){i.e(a)}finally{i.f()}return r}var Vn={};Object.defineProperty(Vn,"__esModule",{value:!0});Vn.cleanUndefined=dh;Vn.clone=ZT;Vn.isEmpty=ew;var Vs=q;function dh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.cache,r=n===void 0?new Set:n;r.add(t);for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i];if(t[o]===void 0&&delete t[o],(0,Vs.isObject)(t[o])){if(r.has(t[o]))continue;dh(t[o],{cache:r})}}return t}function ZT(t){return JSON.parse(JSON.stringify(t))}function ew(t){var e=(0,Vs.isObject)(t)&&Object.keys(t).length===0,n=(0,Vs.isArray)(t)&&t.keys(t).length===0;return e||n}var Ft={};Object.defineProperty(Ft,"__esModule",{value:!0});Ft.startBenchmark=Ft.getBenchmark=void 0;var hh=q,hs,fs,_s,tw=1e6,na=5;function nw(t){var e=process.hrtime.bigint(),n=e-t,r=n/BigInt(tw);return Number(r).toFixed(na)}function rw(){return process.hrtime.bigint()}function iw(){return performance.now(),performance.now()}function sw(t){var e=performance.now()-t;return e.toFixed(na)}function ow(){return new Date}function aw(t){var e=Date.now()-t;return e.toFixed(na)}var fh=typeof process<"u"&&(0,hh.isFunction)((hs=process)===null||hs===void 0||(fs=hs.hrtime)===null||fs===void 0?void 0:fs.bigint),_h=typeof performance<"u"&&(0,hh.isFunction)((_s=performance)===null||_s===void 0?void 0:_s.now),cw=fh&&nw||_h&&sw||aw;Ft.getBenchmark=cw;var lw=fh&&rw||_h&&iw||ow;Ft.startBenchmark=lw;var _t={};Object.defineProperty(_t,"__esModule",{value:!0});_t.random=_t.Random=void 0;function uw(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function bc(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function dw(t,e,n){return e&&bc(t.prototype,e),n&&bc(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var ph=function(){function t(){uw(this,t)}return dw(t,[{key:"uniform",value:function(n,r){return Math.random()*(n-r)+r}},{key:"int",value:function(n,r){return Math.floor(this.uniform(n,r))}}]),t}();_t.Random=ph;var hw=new ph;_t.random=hw;var It={};Object.defineProperty(It,"__esModule",{value:!0});It.fill=Sw;It.getProp=gh;It.retry=Rw;It.searchFor=Cw;It.setProp=bw;var fn=q,fw=_t;function _w(t){return vw(t)||gw(t)||mw(t)||pw()}function pw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mw(t,e){if(t){if(typeof t=="string")return Sc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sc(t,e)}}function Sc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function gw(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function vw(t){if(Array.isArray(t))return t}var mh=Symbol("myrmidon_retry_aborted");function Cc(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Error("Unknown Retry Abortion");throw t[mh]=!0,t}var Ew=.5,Iw=2,yw=2;function Tw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if((0,fn.isNumber)(t))return t;if((0,fn.isFunction)(t))return t(e);if((0,fn.isObject)(t)){var n=t.randomize?fw.random.uniform(Ew,Iw):1;return Math.min(n*t.min*Math.pow(t.factor||yw,e),t.max)}}function ww(t,e,n){var r=n.retries,i=n.next;if(t[mh]||e===r)throw t;i()}function Rw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.onRetry,r=n===void 0?ww:n,i=e.retries,s=i===void 0?10:i,o=e.timeout,a=o===void 0?100:o;return new Promise(function(c,l){function u(f){try{var m=t(Cc,f);Promise.resolve(m).then(c).catch(function(E){return h(E,f)})}catch(E){h(E,f)}}function d(f){setTimeout(function(){return u(f+1)},Tw(a,f+1))}function h(f,m){try{r(f,m,{retries:s,abort:Cc,next:function(){return d(m)}})}catch(E){l(E)}}u(0)})}function gh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.delimeter,i=r===void 0?".":r;return e.split(i).reduce(function(s,o){try{return s[o]}catch{return null}},t)}function bw(t,e,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=r.delimiter,s=i===void 0?".":i,o=t;return e.split(s).forEach(function(a,c,l){var u=c===l.length-1;if(!(a in o)){if(u)return o[a]=n;var d=l[c+1],h=Number.isInteger(+d);o[a]=h?[]:{}}o=o[a]}),t}function Sw(t,e){for(var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.delimiters,i=r===void 0?["{","}"]:r,s=n.regExp,o=s||new RegExp("".concat(i[0],"(.+?)").concat(i[1]),"g"),a,c=t;(a=o.exec(t))!==null;){var l=a[1].trim();if(l){var u=gh(e,l)||"";c=c.replace(a[0],u)}}return c}function Cw(t,e){var n=(0,fn.isRegexp)(e)?e.flags:"",r=new RegExp((0,fn.isRegexp)(e)?e.source:e,n.includes("g")?n:"".concat(n,"g")),i=[],s;do if(s=r.exec(t),s){var o=s,a=_w(o),c=a[0],l=a.slice(1),u=s,d=u.index,h=u.input;i.push({full:c,captures:l,index:d,input:h})}while(s);return i}var le={};Object.defineProperty(le,"__esModule",{value:!0});le.FunctionDecorator=le.ClassMethodDecorator=le.ClassDecorator=void 0;le.getMethodDescriptor=Eh;le.rawMethodNames=le.getMethodNames=void 0;var pt=q;function Ws(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=vh(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,o=!1,a;return{s:function(){n=n.call(t)},n:function(){var l=n.next();return s=l.done,l},e:function(l){o=!0,a=l},f:function(){try{!s&&n.return!=null&&n.return()}finally{if(o)throw a}}}}function Oc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ge(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Oc(Object(n),!0).forEach(function(r){Xr(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Oc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Xr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ra(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ac(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ia(t,e,n){return e&&Ac(t.prototype,e),n&&Ac(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Hs(t){return Nw(t)||Aw(t)||vh(t)||Ow()}function Ow(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vh(t,e){if(t){if(typeof t=="string")return qs(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qs(t,e)}}function Aw(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Nw(t){if(Array.isArray(t))return qs(t)}function qs(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Pw=function t(e){return e&&e!==Object.prototype&&[].concat(Hs(Object.getOwnPropertyNames(e).filter(function(n){return(0,pt.isGetter)(e,n)||(0,pt.isFunction)(e[n])})),Hs(t(Object.getPrototypeOf(e))||[]))},Sr=function(e){return Hs(new Set(Pw(e)))};le.rawMethodNames=Sr;var Dw=function(e){return Sr(e).filter(function(n){return n!=="constructor"&&n.indexOf("_")!==0})};le.getMethodNames=Dw;function Eh(t,e){return e.hasOwnProperty(t)?Object.getOwnPropertyDescriptor(e,t):{configurable:!0,enumerable:!0,writable:!0,value:e[t]}}var Ih=function(){function t(e){var n=e.config;ra(this,t),this.config=n}return ia(t,[{key:"prepareData",value:function(n){var r=n.context,i=n.methodName;return{context:r,methodName:i,config:this.config}}},{key:"onParams",value:function(n){var r=n.params;return r}},{key:"onSuccess",value:function(n){var r=n.result;return r}},{key:"onError",value:function(n){throw n}},{key:"run",value:function(n){var r=this,i=r.config.methodName||n.name;return function(){for(var s=r.prepareData({context:this,methodName:i,config:r.config}),o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];var l=r.onParams(ge({params:a},s)),u=ge({rawParams:a,params:l},s);try{var d=n==null?void 0:n.apply(this,l);return(0,pt.isPromise)(d)?d.then(function(h){return r.onSuccess(ge({result:h},u))}).catch(function(h){return r.onError(ge({error:h},u))}):r.onSuccess(ge({result:d},u))}catch(h){r.onError(ge({error:h},u))}}}}]),t}();le.FunctionDecorator=Ih;var sa=function(){function t(e){var n=e.methodName,r=e.descriptor,i=e.config,s=e.target;ra(this,t),this.methods=["value","initializer"],this.methodName=n,this.descriptor=r,this.config=i,this.target=s,this.functionDecorator=new this.constructor.FunctionDecorator({config:this.getFunctionDecoratorConfig()})}return ia(t,[{key:"getFunctionDecoratorConfig",value:function(){return ge(ge({},this.config),{},{methodName:this.methodName})}},{key:"handle_initializer",value:function(n){var r=this.functionDecorator,i=this.target;return function(){return r.run(n.call(i))}}},{key:"handle",value:function(n){return this.functionDecorator.run(n)}},{key:"run",value:function(){var n=this,r=this.methods.filter(function(c){return n.descriptor[c]&&(0,pt.isFunction)(n.descriptor[c])}),i=Ws(r),s;try{for(i.s();!(s=i.n()).done;){var o=s.value,a=this.descriptor[o];this.descriptor[o]=(0,pt.isFunction)(this["handle_".concat(o)])?this["handle_".concat(o)](a):this.handle(a)}}catch(c){i.e(c)}finally{i.f()}return this.descriptor}}]),t}();le.ClassMethodDecorator=sa;Xr(sa,"FunctionDecorator",Ih);var yh=function(){function t(e){var n=e.config;ra(this,t),Xr(this,"_unsafeFunctionProps",["caller","callee","arguments"]),this.config=n}return ia(t,[{key:"decorate",value:function(n){return(0,pt.isClass)(n)?this.decorateClass(n):(0,pt.isFunction)(n)?this.decorateFunction(n):this.decorateClass(n)}},{key:"getFunctionDecoratorConfig",value:function(n){var r=n.target;return ge(ge({},this.config),{},{methodName:r.name})}},{key:"decorateFunction",value:function(n){var r=new this.constructor.ClassMethodDecorator.FunctionDecorator({config:this.getFunctionDecoratorConfig({target:n})}),i=r.run(n),s=Ws(Sr(n)),o;try{for(s.s();!(o=s.n()).done;){var a=o.value;this._unsafeFunctionProps.includes(a)||(this.filterMethodName(a)?i[a]=r.run(n[a]):i[a]=n[a])}}catch(c){s.e(c)}finally{s.f()}return i}},{key:"filterMethodName",value:function(n){return!this._unsafeFunctionProps.includes(n)}},{key:"getClassMethodDecoratorConfig",value:function(){return this.config}},{key:"decorateClass",value:function(n){var r=this,i=Sr(n).filter(function(u){return r.filterMethodName(u)}),s=Ws(i),o;try{for(s.s();!(o=s.n()).done;){var a=o.value,c=Eh(a,n);if(c){var l=new this.constructor.ClassMethodDecorator({methodName:a,descriptor:c,target:n,config:this.getClassMethodDecoratorConfig({methodName:a,descriptor:c,target:n})});Object.defineProperty(n,a,l.run())}}}catch(u){s.e(u)}finally{s.f()}return n}}]),t}();le.ClassDecorator=yh;Xr(yh,"ClassMethodDecorator",sa);(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=zt;Object.keys(e).forEach(function(l){l==="default"||l==="__esModule"||l in t&&t[l]===e[l]||Object.defineProperty(t,l,{enumerable:!0,get:function(){return e[l]}})});var n=q;Object.keys(n).forEach(function(l){l==="default"||l==="__esModule"||l in t&&t[l]===n[l]||Object.defineProperty(t,l,{enumerable:!0,get:function(){return n[l]}})});var r=Z;Object.keys(r).forEach(function(l){l==="default"||l==="__esModule"||l in t&&t[l]===r[l]||Object.defineProperty(t,l,{enumerable:!0,get:function(){return r[l]}})});var i=Vn;Object.keys(i).forEach(function(l){l==="default"||l==="__esModule"||l in t&&t[l]===i[l]||Object.defineProperty(t,l,{enumerable:!0,get:function(){return i[l]}})});var s=Ft;Object.keys(s).forEach(function(l){l==="default"||l==="__esModule"||l in t&&t[l]===s[l]||Object.defineProperty(t,l,{enumerable:!0,get:function(){return s[l]}})});var o=_t;Object.keys(o).forEach(function(l){l==="default"||l==="__esModule"||l in t&&t[l]===o[l]||Object.defineProperty(t,l,{enumerable:!0,get:function(){return o[l]}})});var a=It;Object.keys(a).forEach(function(l){l==="default"||l==="__esModule"||l in t&&t[l]===a[l]||Object.defineProperty(t,l,{enumerable:!0,get:function(){return a[l]}})});var c=le;Object.keys(c).forEach(function(l){l==="default"||l==="__esModule"||l in t&&t[l]===c[l]||Object.defineProperty(t,l,{enumerable:!0,get:function(){return c[l]}})})})(ah);(function(t){function e(a){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},e(a)}Object.defineProperty(t,"__esModule",{value:!0});var n={};t.default=void 0;var r=s(ah);Object.keys(r).forEach(function(a){a==="default"||a==="__esModule"||Object.prototype.hasOwnProperty.call(n,a)||a in t&&t[a]===r[a]||Object.defineProperty(t,a,{enumerable:!0,get:function(){return r[a]}})});function i(a){if(typeof WeakMap!="function")return null;var c=new WeakMap,l=new WeakMap;return(i=function(d){return d?l:c})(a)}function s(a,c){if(!c&&a&&a.__esModule)return a;if(a===null||e(a)!=="object"&&typeof a!="function")return{default:a};var l=i(c);if(l&&l.has(a))return l.get(a);var u={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in a)if(h!=="default"&&Object.prototype.hasOwnProperty.call(a,h)){var f=d?Object.getOwnPropertyDescriptor(a,h):null;f&&(f.get||f.set)?Object.defineProperty(u,h,f):u[h]=a[h]}return u.default=a,l&&l.set(a,u),u}var o=r;t.default=o})(ee);var Zr={},me={},ei={};Object.defineProperty(ei,"__esModule",{value:!0});ei.ASCII_RANGES=void 0;const kw={control:{min:0,max:31},numeric:{min:48,max:57},upperAlpha:{min:65,max:90},lowerAlpha:{min:97,max:122}};ei.ASCII_RANGES=kw;Object.defineProperty(me,"__esModule",{value:!0});me.Mask=void 0;me.isASCII=Lw;me.setProp=xw;var Mw=ei;function Lw(t,e){const{min:n,max:r}=Mw.ASCII_RANGES[t];return e<=r&&e>=n}class Fw{constructor(e,n){this.pattern=e,this.FormatChars=n,this.parse()}parse(){this._mask=[];let e=!1,n=!1;for(const r of this.pattern){if(e){this._mask.push({type:"constant",optional:n,symbol:r}),e=n=!1;continue}if(r==="\\"){e=!0;continue}if(r==="?"){n=!0;continue}const i=this.FormatChars[r];if(i){this._mask.push({type:"format",format:i,optional:n}),n=!1;continue}n=!1,this._mask.push({type:"constant",symbol:r,optional:n})}}validate(e){let n=-1;for(const r of this._mask){const i=n+1,s=e[i];let o=!1;if(r.type==="constant"&&(o=r.symbol===s),r.type==="format"&&(o=r.format(s)),!o){if(!r.optional)return{check:r,value:s};continue}n=i}if(n!==e.length-1)return{check:null,value:e[n+1]}}}me.Mask=Fw;function xw(t,e,n,{delimiter:r="."}={}){let i=t;e.split(r).forEach((s,o,a)=>{const c=o===a.length-1;if(!(s in i)){if(c)return i[s]=n;const l=a[o+1],u=Number.isInteger(+l);i[s]=u?[]:{}}i=i[s]})}var Kt={};Object.defineProperty(Kt,"__esModule",{value:!0});Kt.default=void 0;var Uw=me;function $w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Nc(t,e,n){Bw(t,e),e.set(t,n)}function Bw(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function ps(t,e){var n=Th(t,e,"get");return Vw(t,n)}function Vw(t,e){return e.get?e.get.call(t):e.value}function Pc(t,e,n){var r=Th(t,e,"set");return Ww(t,r,n),n}function Th(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function Ww(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}var Dc=new WeakMap,tn=new WeakMap;class Hw extends Error{constructor(e,n){super(),Nc(this,Dc,{writable:!0,value:void 0}),Nc(this,tn,{writable:!0,value:void 0}),$w(this,"isValidationError",!0),this.name=this.constructor.name,Pc(this,Dc,e),Pc(this,tn,n)}get errors(){return ps(this,tn)}get message(){return`Validation Failed: ${ps(this,tn).length} error(s) occured
${this.prettify}`}get prettify(){const e={};for(const n of this.errors){const r=`${n.code}: ${n.message}`;(0,Uw.setProp)(e,n.path.join("."),r)}return JSON.stringify(e,null,2)}get hash(){return{code:"VALIDATION_ERROR",details:ps(this,tn).map(e=>e.hash)}}toJSON(){return JSON.stringify(this.hash)}}Kt.default=Hw;Object.defineProperty(Zr,"__esModule",{value:!0});Zr.default=void 0;var qw=me,Gw=zw(Kt);function zw(t){return t&&t.__esModule?t:{default:t}}function Kw(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Yw extends Gw.default{constructor(...e){super(...e),Kw(this,"isAssemblerError",!0)}get prettify(){const e={};for(const n of this.errors){const r=n.error.errors[0],i=`${r.code}: ${r.message}`;(0,qw.setProp)(e,n.path.join("."),i)}return JSON.stringify(e,null,2)}}Zr.default=Yw;Object.defineProperty(Zo,"__esModule",{value:!0});var Gs=Zo.default=void 0,Rt=ee,jw=Jw(Zr),Qw=me;function Jw(t){return t&&t.__esModule?t:{default:t}}class Xw{constructor({data:e,cache:n,assembler:r}){this.data=e,this.cache=n,this.assembler=r}source(){return[{type:"source",validators:this.data.$validate,placeholder:this.data.$source}]}complex_array(e){const n=[];for(const[r,i]of Object.entries(this.data.$validate))for(const s of this.assembler.parseObject(i,{cache:this.cache})){const o=s.path||[];n.push({type:e.type,inner:{...s,path:[r,...o]},placeholder:{prefix:e.prefix},path:[]})}return n}simple_array(e){return[{type:e.type,validators:this.data.$validate,placeholder:{prefix:e.prefix},path:[]}]}placeholder(e){return[{type:"source",validators:this.data.$validate,placeholder:e.template,condition:e.if}]}constant(){return[{type:"constant",data:this.data}]}object(){const e=[];for(const[n,r]of Object.entries(this.data)){const i=this.assembler.parseObject(r,{cache:this.cache});for(const s of i){const o=s.path||[];e.push({...s,path:[n,...o]})}}return e}}class Zw{constructor({command:e,out:n,dict:r,errors:i,assembler:s}){this.command=e,this.out=n,this.dict=r,this.assembler=s,this.errors=i}run({path:e,data:n,validators:r,template:i}){let s=n;if(r)try{s=this.assembler._cottus.compile(r).validate(s)}catch(o){return this.errors.push({error:o,template:i,path:e,data:n})}return(0,Qw.setProp)(this.out,e.join("."),s)}constant(){return this.run({path:this.command.path,data:this.command.data,validators:this.command.validators})}source(){const e=(0,Rt.fill)(this.command.placeholder,this.dict),n=this.assembler._options.trim?e.trim():e,r=n===""?this.assembler._options.empty:n;return this.run({path:this.command.path,data:r,validators:this.command.validators,template:this.command.placeholder})}simple_array(){const e=Object.keys(this.dict).filter(n=>n.startsWith(this.command.placeholder.prefix));for(let n=0;;n++){const r=`${this.command.placeholder.prefix}${n}`,i=e.find(s=>s===r);if(!i)break;this.run({path:[...this.command.path,n],data:this.dict[i],validators:this.command.validators,template:r})}}complex_array(){const e=Object.keys(this.dict).filter(n=>n.startsWith(this.command.placeholder.prefix));for(let n=0;;n++){const r=`${this.command.placeholder.prefix}${n}`,i=e.filter(o=>o.startsWith(r));if(i.length===0)break;const s={};i.forEach(o=>{s[o.slice(r.length)]=this.dict[o]}),this.assembler.executeCMD({...this.command.inner,path:[...this.command.path,n,...this.command.inner.path]},{out:this.out,dict:{...this.dict,...s},errors:this.errors})}}}let eR=class{constructor(e,n,r={}){this._schema=n,this._cottus=e,this._options={trim:!0,empty:null,...r}}parse(){this._commands=this.parseObject(this._schema)}parseObject(e,{cache:n=[]}={}){const r=new Xw({data:e,cache:n,assembler:this});if(~n.indexOf(e))return[];if(n.push(e),(0,Rt.isObject)(e)){if(e.$source){const i=[];if((0,Rt.isString)(e.$source)&&i.push(...r.source()),(0,Rt.isObject)(e.$source)){const s=e.$source,o=s.type||"placeholder";if(!(0,Rt.isFunction)(r[o]))throw new Error(`Unrecognized source [${o}]`);i.push(...r[o](s))}return i}return r.object()}return r.constant()}executeCMD(e,{out:n,dict:r,errors:i}){const s=new Zw({command:e,out:n,dict:r,errors:i,assembler:this}),o=e.type;if(!(0,Rt.isFunction)(s[o]))throw new Error(`Unrecognized command [${o}]`);s[o]()}run(e){const n={},r=[];for(const i of this._commands)this.executeCMD(i,{out:n,dict:e,errors:r});if(r.length>0)throw new jw.default(this._cottus,r);return n}};Gs=Zo.default=eR;var oa={},ti={},G={},ni={},b={};Object.defineProperty(b,"__esModule",{value:!0});b.default=void 0;class tR extends Error{constructor(e){super(),this.payload=e,this.name=this.constructor.name}get hash(){const e={value:this.value,path:this.path,code:this.code,message:this.message};return this.params&&(e.payload=this.params),e}setContext({value:e,path:n}){this.value=e,this.path=n,this.hasContext=!0}}b.default=tR;Object.defineProperty(ni,"__esModule",{value:!0});ni.default=void 0;var nR=rR(b);function rR(t){return t&&t.__esModule?t:{default:t}}function kc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class iR extends nR.default{constructor(...e){super(...e),kc(this,"message","The value is required"),kc(this,"code","REQUIRED")}}ni.default=iR;var ri={};Object.defineProperty(ri,"__esModule",{value:!0});ri.default=void 0;var sR=oR(b);function oR(t){return t&&t.__esModule?t:{default:t}}function Mc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class aR extends sR.default{constructor(...e){super(...e),Mc(this,"message","The number didn't look like a valid TCP port number [0, 65535]"),Mc(this,"code","WRONG_PORT_NUMBER")}}ri.default=aR;var ii={};Object.defineProperty(ii,"__esModule",{value:!0});ii.default=void 0;var cR=lR(b);function lR(t){return t&&t.__esModule?t:{default:t}}function Lc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class uR extends cR.default{constructor(...e){super(...e),Lc(this,"message","The value have to be plain js object"),Lc(this,"code","NOT_OBJECT")}}ii.default=uR;var si={};Object.defineProperty(si,"__esModule",{value:!0});si.default=void 0;var dR=hR(b);function hR(t){return t&&t.__esModule?t:{default:t}}function Fc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class fR extends dR.default{constructor(...e){super(...e),Fc(this,"message","The value have to be plain js array"),Fc(this,"code","NOT_ARRAY")}}si.default=fR;var oi={};Object.defineProperty(oi,"__esModule",{value:!0});oi.default=void 0;var _R=pR(b);function pR(t){return t&&t.__esModule?t:{default:t}}function xc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class mR extends _R.default{constructor(...e){super(...e),xc(this,"message","The number is not a valid integer"),xc(this,"code","NOT_INTEGER")}}oi.default=mR;var ai={};Object.defineProperty(ai,"__esModule",{value:!0});ai.default=void 0;var gR=vR(b);function vR(t){return t&&t.__esModule?t:{default:t}}function Uc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class ER extends gR.default{constructor(...e){super(...e),Uc(this,"message","The value is not a number or could not be cast to a number"),Uc(this,"code","NOT_NUMBER")}}ai.default=ER;var ci={};Object.defineProperty(ci,"__esModule",{value:!0});ci.default=void 0;var IR=yR(b);function yR(t){return t&&t.__esModule?t:{default:t}}function $c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class TR extends IR.default{constructor(...e){super(...e),$c(this,"message","Format not supported"),$c(this,"code","WRONG_FORMAT")}}ci.default=TR;var li={};Object.defineProperty(li,"__esModule",{value:!0});li.default=void 0;var wR=RR(b);function RR(t){return t&&t.__esModule?t:{default:t}}function Bc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class bR extends wR.default{constructor(...e){super(...e),Bc(this,"message","The number is lower than the limit"),Bc(this,"code","TOO_LOW")}get params(){return{limit:this.payload}}}li.default=bR;var ui={};Object.defineProperty(ui,"__esModule",{value:!0});ui.default=void 0;var SR=CR(b);function CR(t){return t&&t.__esModule?t:{default:t}}function Vc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class OR extends SR.default{constructor(...e){super(...e),Vc(this,"message","The value is shorter than the limit"),Vc(this,"code","TOO_SHORT")}get params(){return{limit:this.payload}}}ui.default=OR;var di={};Object.defineProperty(di,"__esModule",{value:!0});di.default=void 0;var AR=NR(b);function NR(t){return t&&t.__esModule?t:{default:t}}function Wc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class PR extends AR.default{constructor(...e){super(...e),Wc(this,"message","The value is longer than the limit"),Wc(this,"code","TOO_LONG")}get params(){return{limit:this.payload}}}di.default=PR;var hi={};Object.defineProperty(hi,"__esModule",{value:!0});hi.default=void 0;var DR=kR(b);function kR(t){return t&&t.__esModule?t:{default:t}}function Hc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class MR extends DR.default{constructor(...e){super(...e),Hc(this,"message","The number is higher than the limit"),Hc(this,"code","TOO_HIGH")}get params(){return{limit:this.payload}}}hi.default=MR;var fi={};Object.defineProperty(fi,"__esModule",{value:!0});fi.default=void 0;var LR=FR(b);function FR(t){return t&&t.__esModule?t:{default:t}}function qc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}let xR=class extends LR.default{constructor(...e){super(...e),qc(this,"message","The value is not a string"),qc(this,"code","NOT_STRING")}};fi.default=xR;var _i={};Object.defineProperty(_i,"__esModule",{value:!0});_i.default=void 0;var UR=$R(b);function $R(t){return t&&t.__esModule?t:{default:t}}function Gc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class BR extends UR.default{constructor(...e){super(...e),Gc(this,"message","The value is not a valid base64 encoded string"),Gc(this,"code","NOT_BASE64")}}_i.default=BR;var pi={};Object.defineProperty(pi,"__esModule",{value:!0});pi.default=void 0;var VR=WR(b);function WR(t){return t&&t.__esModule?t:{default:t}}function zc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class HR extends VR.default{constructor(...e){super(...e),zc(this,"message","string can not be used as legal file path"),zc(this,"code","ILLEGAL_PATH")}}pi.default=HR;var mi={};Object.defineProperty(mi,"__esModule",{value:!0});mi.default=void 0;var qR=GR(b);function GR(t){return t&&t.__esModule?t:{default:t}}function Kc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class zR extends qR.default{constructor(...e){super(...e),Kc(this,"message","The value is invalid URL"),Kc(this,"code","INVALID_URL")}}mi.default=zR;var gi={};Object.defineProperty(gi,"__esModule",{value:!0});gi.default=void 0;var KR=YR(b);function YR(t){return t&&t.__esModule?t:{default:t}}function Yc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class jR extends KR.default{constructor(...e){super(...e),Yc(this,"message","Host not valid"),Yc(this,"code","INVALID_HOST")}}gi.default=jR;var vi={};Object.defineProperty(vi,"__esModule",{value:!0});vi.default=void 0;var QR=JR(b);function JR(t){return t&&t.__esModule?t:{default:t}}function jc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class XR extends QR.default{constructor(...e){super(...e),jc(this,"message","The value is not a boolean or could not be cast to a boolean"),jc(this,"code","NOT_BOOLEAN")}}vi.default=XR;var Ei={};Object.defineProperty(Ei,"__esModule",{value:!0});Ei.default=void 0;var ZR=eb(b);function eb(t){return t&&t.__esModule?t:{default:t}}function Qc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class tb extends ZR.default{constructor(...e){super(...e),Qc(this,"message","The value is not a valid rfc5322 email format"),Qc(this,"code","WRONG_EMAIL")}}Ei.default=tb;var Ii={};Object.defineProperty(Ii,"__esModule",{value:!0});Ii.default=void 0;var nb=rb(b);function rb(t){return t&&t.__esModule?t:{default:t}}function Jc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class ib extends nb.default{constructor(...e){super(...e),Jc(this,"message","The value is not a valid UUID v4"),Jc(this,"code","NOT_UUID")}}Ii.default=ib;var yi={};Object.defineProperty(yi,"__esModule",{value:!0});yi.default=void 0;var sb=ob(b);function ob(t){return t&&t.__esModule?t:{default:t}}function Xc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class ab extends sb.default{constructor(...e){super(...e),Xc(this,"message","The value is not allowed"),Xc(this,"code","NOT_ALLOWED_VALUE")}}yi.default=ab;var Ti={};Object.defineProperty(Ti,"__esModule",{value:!0});Ti.default=void 0;var cb=lb(b);function lb(t){return t&&t.__esModule?t:{default:t}}function Zc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class ub extends cb.default{constructor(...e){super(...e),Zc(this,"message","The value can not be parsed as time unit"),Zc(this,"code","WRONG_TIME_UNIT")}}Ti.default=ub;var wi={};Object.defineProperty(wi,"__esModule",{value:!0});wi.default=void 0;var db=hb(b);function hb(t){return t&&t.__esModule?t:{default:t}}function el(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class fb extends db.default{constructor(...e){super(...e),el(this,"message","The value can not be parsed as cron string"),el(this,"code","INVALID_CRON")}}wi.default=fb;var Ri={};Object.defineProperty(Ri,"__esModule",{value:!0});Ri.default=void 0;var _b=pb(b);function pb(t){return t&&t.__esModule?t:{default:t}}function tl(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class mb extends _b.default{constructor(...e){super(...e),tl(this,"message","The value is not a valid date"),tl(this,"code","NOT_DATE")}}Ri.default=mb;var bi={};Object.defineProperty(bi,"__esModule",{value:!0});bi.default=void 0;var gb=vb(b);function vb(t){return t&&t.__esModule?t:{default:t}}function nl(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Eb extends gb.default{constructor(...e){super(...e),nl(this,"message","Key header invalid"),nl(this,"code","BAD_ENCRYPTION_HEADER")}}bi.default=Eb;var Si={};Object.defineProperty(Si,"__esModule",{value:!0});Si.default=void 0;var Ib=yb(b);function yb(t){return t&&t.__esModule?t:{default:t}}function rl(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Tb extends Ib.default{constructor(...e){super(...e),rl(this,"message","Key footer invalid"),rl(this,"code","BAD_ENCRYPTION_FOOTER")}}Si.default=Tb;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BAD_ENCRYPTION_FOOTER",{enumerable:!0,get:function(){return jt.default}}),Object.defineProperty(t,"BAD_ENCRYPTION_HEADER",{enumerable:!0,get:function(){return Xe.default}}),Object.defineProperty(t,"ILLEGAL_PATH",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"INVALID_CRON",{enumerable:!0,get:function(){return be.default}}),Object.defineProperty(t,"INVALID_HOST",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"INVALID_URL",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(t,"NOT_ALLOWED_VALUE",{enumerable:!0,get:function(){return F.default}}),Object.defineProperty(t,"NOT_ARRAY",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"NOT_BASE64",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"NOT_BOOLEAN",{enumerable:!0,get:function(){return z.default}}),Object.defineProperty(t,"NOT_DATE",{enumerable:!0,get:function(){return yt.default}}),Object.defineProperty(t,"NOT_INTEGER",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"NOT_NUMBER",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"NOT_OBJECT",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"NOT_STRING",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"NOT_UUID",{enumerable:!0,get:function(){return U.default}}),Object.defineProperty(t,"REQUIRED",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(t,"TOO_HIGH",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"TOO_LONG",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"TOO_LOW",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"TOO_SHORT",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"WRONG_EMAIL",{enumerable:!0,get:function(){return Q.default}}),Object.defineProperty(t,"WRONG_FORMAT",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"WRONG_PORT_NUMBER",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"WRONG_TIME_UNIT",{enumerable:!0,get:function(){return Re.default}});var e=C(ni),n=C(ri),r=C(ii),i=C(si),s=C(oi),o=C(ai),a=C(ci),c=C(li),l=C(ui),u=C(di),d=C(hi),h=C(fi),f=C(_i),m=C(pi),E=C(mi),y=C(gi),z=C(vi),Q=C(Ei),U=C(Ii),F=C(yi),Re=C(Ti),be=C(wi),yt=C(Ri),Xe=C(bi),jt=C(Si);function C(Hn){return Hn&&Hn.__esModule?Hn:{default:Hn}}})(G);var k={};Object.defineProperty(k,"__esModule",{value:!0});k.default=void 0;var wb=ee;function Rb(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class wh{constructor({params:e,validator:n}){this.validator=n,this.cottus=this.validator._cottus,this.params=e}createNestedValidator(e,n){return this.cottus.compile(e,{parent:this.validator,key:n})}createValidator(e){return this.cottus.compile(e,{parent:this.validator,notLink:!0})}createChildRule(e){return new e({validator:this.validator})}run(e){const{defaultError:n,errors:r}=this.constructor;if(this.constructor.isOptional&&!(0,wb.isValue)(e))return e;try{return this.alias?this.createValidator(this.alias).validate(e):this.validate(e)}catch(s){throw n&&!(r!=null&&r.some(o=>s instanceof o))?n(s):s}}}k.default=wh;Rb(wh,"isOptional",!0);Object.defineProperty(ti,"__esModule",{value:!0});ti.default=void 0;var bb=ee,Sb=G,Cb=Ob(k);function Ob(t){return t&&t.__esModule?t:{default:t}}function Rh(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class aa extends Cb.default{validate(e){if(!(0,bb.isValue)(e))throw new Sb.REQUIRED;return e}}ti.default=aa;Rh(aa,"schema","required");Rh(aa,"isOptional",!1);var Ci={};Object.defineProperty(Ci,"__esModule",{value:!0});Ci.default=void 0;var bh=G,Ab=Nb(k);function Nb(t){return t&&t.__esModule?t:{default:t}}function Oi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Ai extends Ab.default{constructor(...e){super(...e),Oi(this,"alias",["integer",{min:0},{max:65535}])}}Ci.default=Ai;Oi(Ai,"schema","port");Oi(Ai,"errors",[bh.NOT_NUMBER]);Oi(Ai,"defaultError",()=>new bh.WRONG_PORT_NUMBER);var Ni={};Object.defineProperty(Ni,"__esModule",{value:!0});Ni.default=void 0;var Pb=ee,Db=G,kb=Mb(k);function Mb(t){return t&&t.__esModule?t:{default:t}}function Lb(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Sh extends kb.default{validate(e){if(!(0,Pb.isObject)(e))throw new Db.NOT_OBJECT;const n={};for(const r of Object.keys(this.params)){const i=this.createNestedValidator(this.params[r],r);n[r]=i.validate(e[r])}return n}}Ni.default=Sh;Lb(Sh,"schema","attributes");var Pi={};Object.defineProperty(Pi,"__esModule",{value:!0});Pi.default=void 0;var Fb=ee,xb=G,Ub=$b(k);function $b(t){return t&&t.__esModule?t:{default:t}}function Bb(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Ch extends Ub.default{validate(e){if(!(0,Fb.isArray)(e))throw new xb.NOT_ARRAY;const n=[],r=this.params;for(const i of e){const s=this.createNestedValidator(r,n.length);n.push(s.validate(i))}return n}}Pi.default=Ch;Bb(Ch,"schema","every");var Di={},Yt={};Object.defineProperty(Yt,"__esModule",{value:!0});Yt.default=void 0;var il=ee,Vb=G,Wb=Hb(k);function Hb(t){return t&&t.__esModule?t:{default:t}}function qb(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Oh extends Wb.default{validate(e){const n=(0,il.isString)(e)?Number.parseFloat(e):e;if(!(0,il.isNumber)(n))throw new Vb.NOT_NUMBER;return n}}Yt.default=Oh;qb(Oh,"schema","number");Object.defineProperty(Di,"__esModule",{value:!0});Di.default=void 0;var Gb=G,zb=Ah(Yt),Kb=Ah(k);function Ah(t){return t&&t.__esModule?t:{default:t}}function Yb(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Nh extends Kb.default{validate(e){const r=this.createChildRule(zb.default).validate(e);if(!Number.isInteger(r))throw new Gb.NOT_INTEGER;return r}}Di.default=Nh;Yb(Nh,"schema","integer");var ki={};Object.defineProperty(ki,"__esModule",{value:!0});ki.default=void 0;var ms=ee,Jn=G,jb=Qb(k);function Qb(t){return t&&t.__esModule?t:{default:t}}function Jb(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Ph extends jb.default{validate(e){const n=this.params;if((0,ms.isNumber)(e)){if(e<n)throw new Jn.TOO_LOW(n);return e}if((0,ms.isString)(e)){if(e.length<n)throw new Jn.TOO_SHORT(n);return e}if((0,ms.isArray)(e)){if(e.length<n)throw new Jn.TOO_SHORT(n);return e}throw new Jn.WRONG_FORMAT}}ki.default=Ph;Jb(Ph,"schema","min");var Mi={};Object.defineProperty(Mi,"__esModule",{value:!0});Mi.default=void 0;var gs=ee,Xn=G,Xb=Zb(k);function Zb(t){return t&&t.__esModule?t:{default:t}}function eS(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Dh extends Xb.default{validate(e){const n=this.params;if((0,gs.isNumber)(e)){if(e>n)throw new Xn.TOO_HIGH(n);return e}if((0,gs.isString)(e)){if(e.length>n)throw new Xn.TOO_LONG(n);return e}if((0,gs.isArray)(e)){if(e.length>n)throw new Xn.TOO_LONG(n);return e}throw new Xn.WRONG_FORMAT}}Mi.default=Dh;eS(Dh,"schema","max");var we={};Object.defineProperty(we,"__esModule",{value:!0});we.default=void 0;var tS=ee,nS=G,rS=iS(k);function iS(t){return t&&t.__esModule?t:{default:t}}function sS(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class kh extends rS.default{validate(e){if(!(0,tS.isString)(e))throw new nS.NOT_STRING;return e}}we.default=kh;sS(kh,"schema","string");var Wn={};Object.defineProperty(Wn,"__esModule",{value:!0});Wn.default=void 0;var oS=G,aS=Mh(we),cS=Mh(k);function Mh(t){return t&&t.__esModule?t:{default:t}}function lS(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Lh extends cS.default{validate(e){const r=this.createChildRule(aS.default).validate(e);if(!(Buffer.from(r,"base64").toString("base64")===r))throw new oS.NOT_BASE64;return r}}Wn.default=Lh;lS(Lh,"schema","base64");var Li={};Object.defineProperty(Li,"__esModule",{value:!0});Li.default=void 0;var uS=ee,sl=G,dS=ca(Wn),hS=ca(we),fS=ca(k);function ca(t){return t&&t.__esModule?t:{default:t}}function _S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Fh extends fS.default{validate(e){const r=this.createChildRule(hS.default).validate(e),i=r.trim().split(`
`),s=i[0],o=(0,uS.last)(i);if(!s.startsWith("-----BEGIN")||!s.endsWith("KEY-----"))throw new sl.BAD_ENCRYPTION_HEADER;if(!o.startsWith("-----END")||!o.endsWith("KEY-----"))throw new sl.BAD_ENCRYPTION_FOOTER;const a=i.slice(1,-2).join("");return this.createChildRule(dS.default).validate(a),r}}Li.default=Fh;_S(Fh,"schema",["encryption_key","encryptionKey"]);var Fi={};Object.defineProperty(Fi,"__esModule",{value:!0});Fi.default=void 0;var pS=G,mS=gS(k);function gS(t){return t&&t.__esModule?t:{default:t}}function vS(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const ES=new Set([1,"true",!0]),IS=new Set([0,"false",!1]);class xh extends mS.default{validate(e){if(ES.has(e))return!0;if(IS.has(e))return!1;throw new pS.NOT_BOOLEAN}}Fi.default=xh;vS(xh,"schema","boolean");var xi={};Object.defineProperty(xi,"__esModule",{value:!0});xi.default=void 0;var ol=G,vs=me,yS=Uh(we),TS=Uh(k);function Uh(t){return t&&t.__esModule?t:{default:t}}function wS(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const RS=new Set(["!","#","$","%","&","'","*","+","-","/","=","?","^","_","`","{","|","}","~"]),bS=new Set(["(",")","<","[",":","@",",",">","]",";","\\",".","\""]);function SS(t){return t>=33&&t<=90||t>=94&&t<=126}function al(t){return[...t].every((e,n)=>{const r=e.codePointAt(0);return!!((0,vs.isASCII)("numeric",r)||(0,vs.isASCII)("upperAlpha",r)||(0,vs.isASCII)("lowerAlpha",r)||RS.has(e)||e==="."&&n!==0&&n!==t.length-1)})}function CS(t){return t[0]==="\""&&t[t.length-1]==="\""?[...t.slice(1,-2)].some(n=>bS.has(n)):!1}class $h extends TS.default{validate(e){const r=this.createChildRule(yS.default).validate(e),[i,...s]=r.split("@").reverse(),o=s.reverse().join("@");if(!al(o)&&!CS(o))throw new ol.WRONG_EMAIL("LOCAL-PART");if(!al(i)&&![...i].every(a=>SS(a.codePointAt(0))))throw new ol.WRONG_EMAIL("DOMAIN-PART");return r}}xi.default=$h;wS($h,"schema","email");var Ui={};Object.defineProperty(Ui,"__esModule",{value:!0});Ui.default=void 0;var OS=G,AS=me,NS=Bh(we),PS=Bh(k);function Bh(t){return t&&t.__esModule?t:{default:t}}function DS(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const kS=new Set("0123456789abcdef"),MS={f:t=>kS.has(t),v:t=>t==="4"},LS=new AS.Mask("ffffffff-ffff-vfff-ffff-ffffffffffff",MS);class Vh extends PS.default{validate(e){const r=this.createChildRule(NS.default).validate(e);if(LS.validate(r))throw new OS.NOT_UUID;return r}}Ui.default=Vh;DS(Vh,"schema","uuid");var $i={};Object.defineProperty($i,"__esModule",{value:!0});$i.default=void 0;var FS=G,xS=US(k);function US(t){return t&&t.__esModule?t:{default:t}}function $S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Wh extends xS.default{validate(e){if(!this.params.includes(e))throw new FS.NOT_ALLOWED_VALUE;return e}}$i.default=Wh;$S(Wh,"schema","enum");var Bi={};Object.defineProperty(Bi,"__esModule",{value:!0});Bi.default=void 0;var BS=ee,VS=WS(k);function WS(t){return t&&t.__esModule?t:{default:t}}function Hh(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class la extends VS.default{validate(e){return(0,BS.isValue)(e)?e:this.params}}Bi.default=la;Hh(la,"schema","default");Hh(la,"isOptional",!1);var Vi={};Object.defineProperty(Vi,"__esModule",{value:!0});Vi.default=void 0;var cl=ee,zs=G,ll=me,HS=qh(Yt),qS=qh(k);function qh(t){return t&&t.__esModule?t:{default:t}}function GS(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function zS(t){const e=[...t].findIndex(n=>{const r=n.codePointAt(0);return(0,ll.isASCII)("upperAlpha",r)||(0,ll.isASCII)("lowerAlpha",r)});return~e?{amount:t.slice(0,e).trim(),unit:t.slice(e).trim().toLowerCase()}:{amount:t.trim()}}const Gh=1e3,KS=60,zh=KS*Gh,YS=60,Kh=YS*zh,jS=24,Wi=Kh*jS,QS=24,JS=Wi*QS,XS=30,ZS=Wi*XS,eC=365,tC=Wi*eC,Yh={words:["milliseconds","millisecond","msecs","msec","ms"],multiplier:1},nC=[{words:["years","year","yrs","yr","y"],multiplier:tC},{words:["months","month","mnth","mo","m\u2019th","m-th","mth"],multiplier:ZS},{words:["weeks","week","w"],multiplier:JS},{words:["days","day","d"],multiplier:Wi},{words:["hours","hour","hrs","hr","h"],multiplier:Kh},{words:["minutes","minute","mins","min","m"],multiplier:zh},{words:["seconds","second","secs","sec","s"],multiplier:Gh},Yh];function rC(t,e){const n=e?nC.find(r=>r.words.includes(e)):Yh;if(!n)throw new zs.WRONG_TIME_UNIT;return t*n.multiplier}class jh extends qS.default{validate(e){if((0,cl.isNumber)(e))return e;if((0,cl.isString)(e)){const n=this.createChildRule(HS.default),{amount:r,unit:i}=zS(e);if(!r)throw new zs.WRONG_TIME_UNIT;const s=n.validate(r);return rC(s,i)}throw new zs.WRONG_FORMAT}}Vi.default=jh;GS(jh,"schema",["time_unit","timeUnit"]);var Hi={};Object.defineProperty(Hi,"__esModule",{value:!0});Hi.default=void 0;var Cr=G,iC=ua(Kt),sC=ua(k),oC=ua(we);function ua(t){return t&&t.__esModule?t:{default:t}}function aC(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function cC(t){const e=[],n=[];for(const r of t.split(",")){const[i,s,...o]=r.split("/");if(!i||o.length>0)throw new Cr.INVALID_CRON("INVALID_RANGE");s&&n.push(s),i!=="*"&&e.push(...i.split("-"))}return{values:e,ranges:n}}function lC([t,e,n,r,i,...s]){if(s.length>0)throw new Cr.INVALID_CRON("EXCESSIVE_PART");const o={ranges:[]};return Object.entries({minute:t,hour:e,dayOfMonth:n,month:r,dayOfWeek:i}).forEach(([a,c])=>{if(!c)throw new Cr.INVALID_CRON({key:"REQUIRED"});const{values:l,ranges:u}=cC(c);o[a]=l,o.ranges.push(...u)}),o}const uC=["jan","feb","mar","apr","ma","jun","jul","aug","sep","oct","nov","dec"],dC=["mon","tue","wed","thu","fri","sat","sun"],hC={ranges:{every:["integer",{min:1}]},minute:{every:["integer",{min:0},{max:59}]},hour:{every:["integer",{min:0},{max:23}]},dayOfMonth:{every:["integer",{min:1},{max:31}]},month:{every:{or:[["integer",{min:1},{max:12}],["to_lower",{enum:uC}]]}},dayOfWeek:{every:{or:[["integer",{min:0},{max:6}],["to_lower",{enum:dC}]]}}};class Qh extends sC.default{validate(e){const i=this.createChildRule(oC.default).validate(e).trim().split(/\s+/),s=lC(i),o=this.createNestedValidator({attributes:hC});try{o.validate(s)}catch(a){throw a instanceof iC.default?new Cr.INVALID_CRON(a):a}return i.join(" ")}}Hi.default=Qh;aC(Qh,"schema","cron");var qi={};Object.defineProperty(qi,"__esModule",{value:!0});qi.default=void 0;var fC=ee,_C=pC(k);function pC(t){return t&&t.__esModule?t:{default:t}}function mC(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Jh extends _C.default{validate(e){const n=[];for(const r of this.params){const i=this.createValidator(r);try{return i.validate(e)}catch(s){n.push(s)}}throw(0,fC.last)(n)}}qi.default=Jh;mC(Jh,"schema","or");var Gi={};Object.defineProperty(Gi,"__esModule",{value:!0});Gi.default=void 0;var gC=Xh(we),vC=Xh(k);function Xh(t){return t&&t.__esModule?t:{default:t}}function EC(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Zh extends vC.default{validate(e){return this.createChildRule(gC.default).validate(e).toLowerCase()}}Gi.default=Zh;EC(Zh,"schema",["to_lowercase","to_lower"]);var zi={};Object.defineProperty(zi,"__esModule",{value:!0});zi.default=void 0;var IC=G,yC=TC(k);function TC(t){return t&&t.__esModule?t:{default:t}}function wC(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class ef extends yC.default{validate(e){const n=new Date(e);if(Number.isNaN(n.getTime()))throw new IC.NOT_DATE;return n}}zi.default=ef;wC(ef,"schema","date");Object.defineProperty(oa,"__esModule",{value:!0});var Ks=oa.default=void 0,RC=x(ti),bC=x(Ci),SC=x(Ni),CC=x(Pi),OC=x(Di),AC=x(Yt),NC=x(ki),PC=x(Mi),DC=x(we),kC=x(Wn),MC=x(Li),LC=x(Fi),FC=x(xi),xC=x(Ui),UC=x($i),$C=x(Bi),BC=x(Vi),VC=x(Hi),WC=x(qi),HC=x(Gi),qC=x(zi);function x(t){return t&&t.__esModule?t:{default:t}}var GC=[RC.default,bC.default,OC.default,AC.default,SC.default,CC.default,NC.default,PC.default,DC.default,kC.default,MC.default,LC.default,FC.default,xC.default,UC.default,$C.default,BC.default,VC.default,WC.default,HC.default,qC.default];Ks=oa.default=GC;var da={},Ki={};Object.defineProperty(Ki,"__esModule",{value:!0});Ki.default=void 0;var Zn=ee,zC=tf(b),ul=tf(Kt);function tf(t){return t&&t.__esModule?t:{default:t}}class KC{constructor(e,n,r){this._schema=n,this._cottus=e,this._hierarchy=[],r&&(this._hierarchy=r.parent._nestedHierarhy(r.key),r.notLink||(this.parent=r.parent))}_nestedHierarhy(e){const n=[...this._hierarchy];return(0,Zn.isValue)(e)&&n.push(e),n}get isNested(){return!!this.parent}_sendNestedErrors(e){if(this.isNested)return this.parent._receiveNestedErrors(e);this.nestedErrors.push(...e)}_receiveNestedErrors(e){if(this.isNested)return this.parent._sendNestedErrors(e);this.nestedErrors.push(...e)}parse(){this.rules=[],(0,Zn.toArray)(this._schema).forEach(e=>{let n=null,r=null;const i=(0,Zn.isString)(e),s=(0,Zn.isObject)(e)&&Object.keys(e).length===1;i&&(n=e),s&&(n=Object.keys(e)[0],r=Object.values(e)[0]);const o=this._cottus.rules[n];if(!o)throw new Error(`Rule [${n}] not found`);this.rules.push(new o({params:r,validator:this}))})}validate(e){this.nestedErrors=[];let n=e;const r=[];for(const i of this.rules)try{n=i.run(n)}catch(s){if(s instanceof zC.default){s.hasContext||s.setContext({value:n,path:this._hierarchy}),r.push(s);break}throw s}if(r.length>0){if(this.isNested)return this._sendNestedErrors(r);throw new ul.default(this._cottus,r)}if(this.nestedErrors.length>0)throw new ul.default(this._cottus,this.nestedErrors);return n}}Ki.default=KC;Object.defineProperty(da,"__esModule",{value:!0});var Ys=da.default=void 0,YC=ee,jC=QC(Ki);function QC(t){return t&&t.__esModule?t:{default:t}}let JC=class{constructor(e={}){this.rules={},this.addRules(e.rules||[])}compile(e,n){const r=new jC.default(this,e,n);return r.parse(),r}addRules(e){e.forEach(n=>{(0,YC.toArray)(n.schema).forEach(r=>this.rules[r]=n)})}addRule(e){this.addRules([e])}};Ys=da.default=JC;var XC={PUBLIC_FIREBASE_API_KEY:"AIzaSyBvEGZmsty8Qb0TDo_FjgrOWcPGWpjNCd0",PUBLIC_FIREBASE_AUTH_DOMAIN:"tastoria-7f59f.firebaseapp.com",PUBLIC_FIREBASE_PROJECT_ID:"tastoria-7f59f",PUBLIC_FIREBASE_STORAGE_BUCKET:"tastoria-7f59f.appspot.com",PUBLIC_FIREBASE_MESSAGING_SENDER_ID:"217615939634",PUBLIC_FIREBASE_APPID:"1:217615939634:web:f65b3984baa2c93320642b",PUBLIC_FIREBASE_MEASUREMENT_ID:"G-NSVDB2SDWR",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ZC=Gs.default??Gs,eO=Ks.default||Ks,tO=Ys.default||Ys,nO=new tO({rules:eO}),rO=XC,iO=t=>({apiKey:{$source:`{${t}_API_KEY}`,$validate:["required","string"]},authDomain:{$source:`{${t}_AUTH_DOMAIN}`,$validate:["required","string"]},projectId:{$source:`{${t}_PROJECT_ID}`,$validate:["required","string"]},storageBucket:{$source:`{${t}_STORAGE_BUCKET}`,$validate:["required","string"]},messagingSenderId:{$source:`{${t}_MESSAGING_SENDER_ID}`,$validate:["required","string"]},appId:{$source:`{${t}_APPID}`,$validate:["required","string"]},measurementId:{$source:`{${t}_MEASUREMENT_ID}`,$validate:["required","string"]}}),sO={firebase:iO("PUBLIC_FIREBASE")},nf=new ZC(nO,sO);nf.parse();const oO=nf.run(rO);function dl(t){return{id:t.id,title:t.title,image:t.image||null,categories:t.categories||[],tags:t.tags||[],description:t.description||null,ingredients:t.ingredients||[],steps:t.steps||[],url:t.url||null,time:t.time||{},quantity:t.quantity||null,comment:t.comment||null,language:t.language||null,version:t.version,favorite:t.favorite||!1,visits:t.visits||0,rating:t.rating||null,createdAt:t.createdAt,updatedAt:t.updatedAt,deletedAt:t.deletedAt}}function Es(t){const e=t.metadata;return{id:t.uid,email:t.email,fullName:t.displayName,avatar:t.photoURL,lastLoginAt:e.lastSignInTime,createdAt:e.creationTime}}function hl(t,e){return new sf({config:e}).decorate(t)}function aO({target:t,methodName:e,descriptor:n},r={}){return new ha({methodName:e,descriptor:n,config:r,target:t}).run()}function cO(t,e={}){if(e.classProperties)return class extends t{constructor(...n){super(...n),hl(this,e)}};hl(t.prototype,e)}class lO extends Error{constructor({type:e,original:n,code:r,message:i}){super(r),this.type=e,this.original=n,this.code=r,this.message=i}}async function OO(t,{app:e,signals:{main:n}}){try{await t()}catch(r){console.log("error:",r),console.log(1,r._message),console.log(2,r.message);const i=lf();e.toasts[i]={id:i,type:"error",text:r.message},n&&(n.value=r.message)}}class rf extends _n.FunctionDecorator{onError({error:e,config:n}){const r={type:"UnknownTastoriaError",original:e};if(e.name==="FirebaseError"){r.type=e.name;const i=Object.keys(fl).find(s=>e.message.includes(s));r.code=i?fl[i]:"FIREBASE_UNKNOWN_ERROR",r.message=hO[r.code]}throw new lO(r)}}class ha extends _n.ClassMethodDecorator{}Yi(ha,"FunctionDecorator",rf);class sf extends _n.ClassDecorator{getClassMethodDecoratorConfig(e){const{target:n}=e;return{...super.getClassMethodDecoratorConfig(e),serviceName:n.constructor.name}}}Yi(sf,"ClassMethodDecorator",ha);function uO(){return(...t)=>{const e=t[0];return(n,r,i)=>{if(r&&i)return aO({target:n,methodName:r,descriptor:i},e);if(_n.isClass(n))return cO(n,e);if(_n.isFunction(n))return new rf({config:e}).run(n)}}}const dO=uO(),fl={"auth/admin-restricted-operation":"FIREBASE_ADMIN_ONLY_OPERATION","auth/code-expired":"FIREBASE_CODE_EXPIRED","auth/email-already-in-use":"FIREBASE_EMAIL_EXISTS","auth/expired-action-code":"FIREBASE_EXPIRED_OOB_CODE","auth/internal-error":"FIREBASE_INTERNAL_ERROR","auth/invalid-user-token":"FIREBASE_INVALID_AUTH","auth/invalid-verification-code":"FIREBASE_INVALID_CODE","auth/invalid-email":"FIREBASE_INVALID_EMAIL","auth/invalid-credential":"FIREBASE_INVALID_LOGIN_CREDENTIALS","auth/invalid-action-code":"FIREBASE_INVALID_OOB_CODE","auth/wrong-password":"FIREBASE_INVALID_PASSWORD","auth/missing-verification-code":"FIREBASE_MISSING_CODE","auth/missing-verification-id":"FIREBASE_MISSING_SESSION_INFO","auth/network-request-failed":"FIREBASE_NETWORK_REQUEST_FAILED","auth/quota-exceeded":"FIREBASE_QUOTA_EXCEEDED","auth/timeout":"FIREBASE_TIMEOUT","auth/user-token-expired":"FIREBASE_TOKEN_EXPIRED","auth/too-many-requests":"FIREBASE_TOO_MANY_ATTEMPTS_TRY_LATER","auth/unverified-email":"FIREBASE_UNVERIFIED_EMAIL","auth/user-not-found":"FIREBASE_USER_DELETED","auth/user-signed-out":"FIREBASE_USER_SIGNED_OUT","auth/weak-password":"FIREBASE_WEAK_PASSWORD"},hO={FIREBASE_UNKNOWN_ERROR:"Unknown Error",FIREBASE_ADMIN_ONLY_OPERATION:"Admin Only Operation",FIREBASE_CODE_EXPIRED:"Code Expired",FIREBASE_EMAIL_EXISTS:"Email Already Exists",FIREBASE_EXPIRED_OOB_CODE:"Expired OOB Code",FIREBASE_INTERNAL_ERROR:"Internal Server Error",FIREBASE_INVALID_AUTH:"Invalid Authentication",FIREBASE_INVALID_CODE:"Invalid Code",FIREBASE_INVALID_EMAIL:"Invalid Email",FIREBASE_INVALID_LOGIN_CREDENTIALS:"Invalid Login Credentials",FIREBASE_INVALID_OOB_CODE:"Invalid OOB Code",FIREBASE_INVALID_PASSWORD:"Invalid Password",FIREBASE_MISSING_CODE:"Missing Code",FIREBASE_MISSING_SESSION_INFO:"Missing Session Info",FIREBASE_NETWORK_REQUEST_FAILED:"Network Request Failed",FIREBASE_QUOTA_EXCEEDED:"Quota Exceeded",FIREBASE_TIMEOUT:"Timeout",FIREBASE_TOKEN_EXPIRED:"Token Expired",FIREBASE_TOO_MANY_ATTEMPTS_TRY_LATER:"Too Many Attempts, Try Later",FIREBASE_UNVERIFIED_EMAIL:"Unverified Email",FIREBASE_USER_DELETED:"User Not Found",FIREBASE_USER_SIGNED_OUT:"User Signed Out",FIREBASE_WEAK_PASSWORD:"Weak Password"};var fO=function(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};const{GoogleAuthProvider:_O,getAuth:Is,signInWithPopup:pO,createUserWithEmailAndPassword:mO,signInWithEmailAndPassword:gO,sendSignInLinkToEmail:AO,isSignInWithEmailLink:NO,signInWithEmailLink:PO,EmailAuthProvider:DO,updatePassword:kO,updateProfile:vO,sendEmailVerification:EO,applyActionCode:MO}=wE;async function IO(t){const e=t.storage,n=t._location,r=new URL(`${e._protocol}://${e.host}/v0${n.fullServerUrl()}`),s=await(await fetch(r.href)).json();return`${r.href}?alt=media&token=${s.downloadTokens}`}let js=class{constructor(e){this._app=Sl(e),this._storage=$p(this._app),this._bucketName=this._app.options.storageBucket||""}getHeaders(){return{}}async getImageUrl(e,n){const r=`gs://${this._bucketName}/${e}/${n}`,i=Ra(this._storage,r);return IO(i)}async downloadImage(e,n){const r=await this.getImageUrl(e,n);return(await fetch(r)).blob()}async downloadRecipes(e){const n=ds(),r=Qn(n,`recipes/${e}`),i=await us(r);return i.exists()?Object.values(i.val()).map(s=>dl(s)):[]}async downloadRecipe(e,n){const r=ds(),i=Qn(r,`recipes/${e}/${n}`),s=await us(i);return s.exists()?dl(s.val()):null}async googleSignIn(){const e=Is(this._app),n=new _O;n.addScope("https://www.googleapis.com/auth/contacts.readonly");const r=await pO(e,n);return Es(r.user)}async signIn({email:e,password:n}){const r=Is(this._app),s=(await gO(r,e,n)).user;return Es(s)}async signUp({email:e,password:n,fullName:r},i){const s=Is(this._app),a=(await mO(s,e,n)).user,c=new URL(`/login/?email=${e}`,i.href);await vO(a,{displayName:r});const l={url:c.href,handleCodeInApp:!0};return await EO(a,l),Es(a)}onError(e){return console.error(e),null}async saveUserData(e,n){const r=ds(),i=Qn(r,`users/${e.id}`),s=await us(i);s.exists()?console.log("user",s.val()):await wc(i,e);const o=n.recipes.map(async a=>{if(!a.id)return;const c=Qn(r,`recipes/${e.id}/${a.id}`);await wc(c,a)});await Promise.all(o)}async saveImage(e,n,r){const i=Ra(this._storage,`${e.id}/${n}`);await Up(i,r)}};js=fO([dO()],js);const FO=new js(oO.firebase);export{FO as f,OO as q};