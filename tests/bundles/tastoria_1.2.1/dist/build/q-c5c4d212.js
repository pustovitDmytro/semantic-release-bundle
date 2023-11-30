/**
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
 *//**
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
 */const Is=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},xo=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[r++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[r++],a=t[r++],o=t[r++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=t[r++],a=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Es={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,o=a?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|o>>4;let f=(o&15)<<2|u>>6,m=u&63;c||(m=64,a||(f=64)),n.push(r[l],r[h],r[f],r[m])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Is(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xo(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const s=r[t.charAt(i++)],o=i<t.length?r[t.charAt(i)]:0;++i;const u=i<t.length?r[t.charAt(i)]:64;++i;const h=i<t.length?r[t.charAt(i)]:64;if(++i,s==null||o==null||u==null||h==null)throw new Ho;const f=s<<2|o>>4;if(n.push(f),u!==64){const m=o<<4&240|u>>2;if(n.push(m),h!==64){const O=u<<6&192|h;n.push(O)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ho extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wo=function(t){const e=Is(t);return Es.encodeByteArray(e,!0)},Tt=function(t){return Wo(t).replace(/\./g,"")},ys=function(t){try{return Es.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Go=()=>qo().__FIREBASE_DEFAULTS__,zo=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ko=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ys(t[1]);return e&&JSON.parse(e)},vn=()=>{try{return Go()||zo()||Ko()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ts=t=>{var e,r;return(r=(e=vn())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},Yo=t=>{const e=Ts(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),n]:[e.substring(0,r),n]},ws=()=>{var t;return(t=vn())===null||t===void 0?void 0:t.config},Os=t=>{var e;return(e=vn())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class jo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function Jo(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},n=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),o="";return[Tt(JSON.stringify(r)),Tt(JSON.stringify(a)),o].join(".")}/**
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
 */function D(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(D())}function Qo(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ec(){const t=D();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tc(){try{return typeof indexedDB=="object"}catch{return!1}}function rc(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(r){e(r)}})}/**
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
 */const nc="FirebaseError";class se extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=nc,Object.setPrototypeOf(this,se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,st.prototype.create)}}class st{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?ic(s,n):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new se(i,o,n)}}function ic(t,e){return t.replace(sc,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const sc=/\{\$([^}]+)}/g;function ac(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wt(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const s=t[i],a=e[i];if(ei(s)&&ei(a)){if(!wt(s,a))return!1}else if(s!==a)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function ei(t){return t!==null&&typeof t=="object"}/**
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
 */function Le(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ze(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ke(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}function oc(t,e){const r=new cc(t,e);return r.subscribe.bind(r)}class cc{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");uc(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=Vr),i.error===void 0&&(i.error=Vr),i.complete===void 0&&(i.complete=Vr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uc(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function Vr(){}/**
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
 */function p(t){return t&&t._delegate?t._delegate:t}class Ie{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const me="[DEFAULT]";/**
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
 */class lc{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new jo;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hc(e))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=me){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=me){return this.instances.has(e)}getOptions(e=me){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);n===o&&a.resolve(i)}return i}onInit(e,r){var n;const i=this.normalizeInstanceIdentifier(r),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:dc(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=me){return this.component?this.component.multipleInstances?e:me:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dc(t){return t===me?void 0:t}function hc(t){return t.instantiationMode==="EAGER"}/**
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
 */class fc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new lc(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var v;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(v||(v={}));const pc={debug:v.DEBUG,verbose:v.VERBOSE,info:v.INFO,warn:v.WARN,error:v.ERROR,silent:v.SILENT},mc=v.INFO,_c={[v.DEBUG]:"log",[v.VERBOSE]:"log",[v.INFO]:"info",[v.WARN]:"warn",[v.ERROR]:"error"},gc=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=_c[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bs{constructor(e){this.name=e,this._logLevel=mc,this._logHandler=gc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in v))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,v.DEBUG,...e),this._logHandler(this,v.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,v.VERBOSE,...e),this._logHandler(this,v.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,v.INFO,...e),this._logHandler(this,v.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,v.WARN,...e),this._logHandler(this,v.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,v.ERROR,...e),this._logHandler(this,v.ERROR,...e)}}const vc=(t,e)=>e.some(r=>t instanceof r);let ti,ri;function Ic(){return ti||(ti=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ec(){return ri||(ri=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rs=new WeakMap,nn=new WeakMap,As=new WeakMap,xr=new WeakMap,In=new WeakMap;function yc(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{r(ue(t.result)),i()},a=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(r=>{r instanceof IDBCursor&&Rs.set(r,t)}).catch(()=>{}),In.set(e,t),e}function Tc(t){if(nn.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{r(),i()},a=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});nn.set(t,e)}let sn={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return nn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||As.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ue(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wc(t){sn=t(sn)}function Oc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(Hr(this),e,...r);return As.set(n,e.sort?e.sort():[e]),ue(n)}:Ec().includes(t)?function(...e){return t.apply(Hr(this),e),ue(Rs.get(this))}:function(...e){return ue(t.apply(Hr(this),e))}}function bc(t){return typeof t=="function"?Oc(t):(t instanceof IDBTransaction&&Tc(t),vc(t,Ic())?new Proxy(t,sn):t)}function ue(t){if(t instanceof IDBRequest)return yc(t);if(xr.has(t))return xr.get(t);const e=bc(t);return e!==t&&(xr.set(t,e),In.set(e,t)),e}const Hr=t=>In.get(t);function Rc(t,e,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),o=ue(a);return n&&a.addEventListener("upgradeneeded",c=>{n(ue(a.result),c.oldVersion,c.newVersion,ue(a.transaction),c)}),r&&a.addEventListener("blocked",c=>r(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const Ac=["get","getKey","getAll","getAllKeys","count"],Pc=["put","add","delete","clear"],Wr=new Map;function ni(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wr.get(e))return Wr.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=Pc.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Ac.includes(r)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(o.shift())),(await Promise.all([u[r](...o),i&&c.done]))[0]};return Wr.set(e,s),s}wc(t=>({...t,get:(e,r,n)=>ni(e,r)||t.get(e,r,n),has:(e,r)=>!!ni(e,r)||t.has(e,r)}));/**
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
 */class Nc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Sc(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function Sc(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const an="@firebase/app",ii="0.9.23";/**
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
 */const Ee=new bs("@firebase/app"),Dc="@firebase/app-compat",Cc="@firebase/analytics-compat",kc="@firebase/analytics",Mc="@firebase/app-check-compat",Lc="@firebase/app-check",Uc="@firebase/auth",$c="@firebase/auth-compat",Fc="@firebase/database",Bc="@firebase/database-compat",Vc="@firebase/functions",xc="@firebase/functions-compat",Hc="@firebase/installations",Wc="@firebase/installations-compat",qc="@firebase/messaging",Gc="@firebase/messaging-compat",zc="@firebase/performance",Kc="@firebase/performance-compat",Yc="@firebase/remote-config",jc="@firebase/remote-config-compat",Jc="@firebase/storage",Xc="@firebase/storage-compat",Qc="@firebase/firestore",Zc="@firebase/firestore-compat",eu="firebase",tu="10.6.0";/**
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
 */const on="[DEFAULT]",ru={[an]:"fire-core",[Dc]:"fire-core-compat",[kc]:"fire-analytics",[Cc]:"fire-analytics-compat",[Lc]:"fire-app-check",[Mc]:"fire-app-check-compat",[Uc]:"fire-auth",[$c]:"fire-auth-compat",[Fc]:"fire-rtdb",[Bc]:"fire-rtdb-compat",[Vc]:"fire-fn",[xc]:"fire-fn-compat",[Hc]:"fire-iid",[Wc]:"fire-iid-compat",[qc]:"fire-fcm",[Gc]:"fire-fcm-compat",[zc]:"fire-perf",[Kc]:"fire-perf-compat",[Yc]:"fire-rc",[jc]:"fire-rc-compat",[Jc]:"fire-gcs",[Xc]:"fire-gcs-compat",[Qc]:"fire-fst",[Zc]:"fire-fst-compat","fire-js":"fire-js",[eu]:"fire-js-all"};/**
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
 */const Ot=new Map,cn=new Map;function nu(t,e){try{t.container.addComponent(e)}catch(r){Ee.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Ce(t){const e=t.name;if(cn.has(e))return Ee.debug(`There were multiple attempts to register component ${e}.`),!1;cn.set(e,t);for(const r of Ot.values())nu(r,t);return!0}function En(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const iu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},le=new st("app","Firebase",iu);/**
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
 */class su{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw le.create("app-deleted",{appName:this._name})}}/**
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
 */const Ue=tu;function Ps(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:on,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw le.create("bad-app-name",{appName:String(i)});if(r||(r=ws()),!r)throw le.create("no-options");const s=Ot.get(i);if(s){if(wt(r,s.options)&&wt(n,s.config))return s;throw le.create("duplicate-app",{appName:i})}const a=new fc(i);for(const c of cn.values())a.addComponent(c);const o=new su(r,n,a);return Ot.set(i,o),o}function Ns(t=on){const e=Ot.get(t);if(!e&&t===on&&ws())return Ps();if(!e)throw le.create("no-app",{appName:t});return e}function de(t,e,r){var n;let i=(n=ru[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ee.warn(o.join(" "));return}Ce(new Ie(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const au="firebase-heartbeat-database",ou=1,Qe="firebase-heartbeat-store";let qr=null;function Ss(){return qr||(qr=Rc(au,ou,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qe)}}}).catch(t=>{throw le.create("idb-open",{originalErrorMessage:t.message})})),qr}async function cu(t){try{return await(await Ss()).transaction(Qe).objectStore(Qe).get(Ds(t))}catch(e){if(e instanceof se)Ee.warn(e.message);else{const r=le.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ee.warn(r.message)}}}async function si(t,e){try{const n=(await Ss()).transaction(Qe,"readwrite");await n.objectStore(Qe).put(e,Ds(t)),await n.done}catch(r){if(r instanceof se)Ee.warn(r.message);else{const n=le.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Ee.warn(n.message)}}}function Ds(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uu=1024,lu=30*24*60*60*1e3;class du{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new fu(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ai();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=lu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=ai(),{heartbeatsToSend:n,unsentEntries:i}=hu(this._heartbeatsCache.heartbeats),s=Tt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ai(){return new Date().toISOString().substring(0,10)}function hu(t,e=uu){const r=[];let n=t.slice();for(const i of t){const s=r.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),oi(r)>e){s.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),oi(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class fu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tc()?rc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return si(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return si(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function oi(t){return Tt(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function pu(t){Ce(new Ie("platform-logger",e=>new Nc(e),"PRIVATE")),Ce(new Ie("heartbeat",e=>new du(e),"PRIVATE")),de(an,ii,t),de(an,ii,"esm2017"),de("fire-js","")}pu("");var mu="firebase",_u="10.6.0";/**
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
 */de(mu,_u,"app");/**
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
 */const Cs="firebasestorage.googleapis.com",ks="storageBucket",gu=2*60*1e3,vu=10*60*1e3;/**
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
 */class H extends se{constructor(e,r,n=0){super(Gr(e),`Firebase Storage: ${r} (${Gr(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,H.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var x;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(x||(x={}));function Gr(t){return"storage/"+t}function Iu(){const t="An unknown error occurred, please check the error payload for server response.";return new H(x.UNKNOWN,t)}function Eu(){return new H(x.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yu(){return new H(x.CANCELED,"User canceled the upload/download.")}function Tu(t){return new H(x.INVALID_URL,"Invalid URL '"+t+"'.")}function wu(t){return new H(x.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ou(){return new H(x.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ks+"' property when initializing the app?")}function un(t){return new H(x.INVALID_ARGUMENT,t)}function Ms(){return new H(x.APP_DELETED,"The Firebase app was deleted.")}function bu(t){return new H(x.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class F{constructor(e,r){this.bucket=e,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,r){let n;try{n=F.makeFromUrl(e,r)}catch{return new F(e,"")}if(n.path==="")return n;throw wu(e)}static makeFromUrl(e,r){let n=null;const i="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const a="(/(.*))?$",o=new RegExp("^gs://"+i+a,"i"),c={bucket:1,path:3};function u(S){S.path_=decodeURIComponent(S.path)}const l="v[A-Za-z0-9_]+",h=r.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${l}/b/${i}/o${f}`,"i"),O={bucket:1,path:3},N=r===Cs?"(?:storage.googleapis.com|storage.cloud.google.com)":r,P="([^?#]*)",Y=new RegExp(`^https?://${N}/${i}/${P}`,"i"),$=[{regex:o,indices:c,postModify:s},{regex:m,indices:O,postModify:u},{regex:Y,indices:{bucket:1,path:2},postModify:u}];for(let S=0;S<$.length;S++){const j=$[S],J=j.regex.exec(e);if(J){const Ae=J[j.indices.bucket];let pe=J[j.indices.path];pe||(pe=""),n=new F(Ae,pe),j.postModify(n);break}}if(n==null)throw Tu(e);return n}}class Ru{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Au(t,e,r){let n=1,i=null,s=null,a=!1,o=0;function c(){return o===2}let u=!1;function l(...P){u||(u=!0,e.apply(null,P))}function h(P){i=setTimeout(()=>{i=null,t(m,c())},P)}function f(){s&&clearTimeout(s)}function m(P,...Y){if(u){f();return}if(P){f(),l.call(null,P,...Y);return}if(c()||a){f(),l.call(null,P,...Y);return}n<64&&(n*=2);let $;o===1?(o=2,$=0):$=(n+Math.random())*1e3,h($)}let O=!1;function N(P){O||(O=!0,f(),!u&&(i!==null?(P||(o=2),clearTimeout(i),h(0)):P||(o=1)))}return h(0),s=setTimeout(()=>{a=!0,N(!0)},r),N}function Pu(t){t(!1)}/**
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
 */function Nu(t){return t!==void 0}function ci(t,e,r,n){if(n<e)throw un(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>r)throw un(`Invalid value for '${t}'. Expected ${r} or less.`)}function Su(t){const e=encodeURIComponent;let r="?";for(const n in t)if(t.hasOwnProperty(n)){const i=e(n)+"="+e(t[n]);r=r+i+"&"}return r=r.slice(0,-1),r}/**
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
 */var bt;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(bt||(bt={}));/**
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
 */function Du(t,e){const r=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return r||i||s}/**
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
 */class Cu{constructor(e,r,n,i,s,a,o,c,u,l,h,f=!0){this.url_=e,this.method_=r,this.headers_=n,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,O)=>{this.resolve_=m,this.reject_=O,this.start_()})}start_(){const e=(n,i)=>{if(i){n(!1,new ht(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=o=>{const c=o.loaded,u=o.lengthComputable?o.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const o=s.getErrorCode()===bt.NO_ERROR,c=s.getStatus();if(!o||Du(c,this.additionalRetryCodes_)&&this.retry){const l=s.getErrorCode()===bt.ABORT;n(!1,new ht(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;n(!0,new ht(u,s))})},r=(n,i)=>{const s=this.resolve_,a=this.reject_,o=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(o,o.getResponse());Nu(c)?s(c):s()}catch(c){a(c)}else if(o!==null){const c=Iu();c.serverResponse=o.getErrorText(),this.errorCallback_?a(this.errorCallback_(o,c)):a(c)}else if(i.canceled){const c=this.appDelete_?Ms():yu();a(c)}else{const c=Eu();a(c)}};this.canceled_?r(!1,new ht(!1,null,!0)):this.backoffId_=Au(e,r,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Pu(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ht{constructor(e,r,n){this.wasSuccessCode=e,this.connection=r,this.canceled=!!n}}function ku(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Mu(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Lu(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Uu(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $u(t,e,r,n,i,s,a=!0){const o=Su(t.urlParams),c=t.url+o,u=Object.assign({},t.headers);return Lu(u,e),ku(u,r),Mu(u,s),Uu(u,n),new Cu(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,a)}/**
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
 */function Fu(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Bu(t,e){const r=e.split("/").filter(n=>n.length>0).join("/");return t.length===0?r:t+"/"+r}function Vu(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ye{constructor(e,r){this._service=e,r instanceof F?this._location=r:this._location=F.makeFromUrl(r,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,r){return new ye(e,r)}get root(){const e=new F(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Vu(this._location.path)}get storage(){return this._service}get parent(){const e=Fu(this._location.path);if(e===null)return null;const r=new F(this._location.bucket,e);return new ye(this._service,r)}_throwIfRoot(e){if(this._location.path==="")throw bu(e)}}function xu(t,e){const r=Bu(t._location.path,e),n=new F(t._location.bucket,r);return new ye(t.storage,n)}/**
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
 */function Hu(t){return/^[A-Za-z]+:\/\//.test(t)}function Wu(t,e){return new ye(t,e)}function Ls(t,e){if(t instanceof yn){const r=t;if(r._bucket==null)throw Ou();const n=new ye(r,r._bucket);return e!=null?Ls(n,e):n}else return e!==void 0?xu(t,e):t}function qu(t,e){if(e&&Hu(e)){if(t instanceof yn)return Wu(t,e);throw un("To use ref(service, url), the first argument must be a Storage instance.")}else return Ls(t,e)}function ui(t,e){const r=e==null?void 0:e[ks];return r==null?null:F.makeFromBucketSpec(r,t)}function Gu(t,e,r,n={}){t.host=`${e}:${r}`,t._protocol="http";const{mockUserToken:i}=n;i&&(t._overrideAuthToken=typeof i=="string"?i:Jo(i,t.app.options.projectId))}class yn{constructor(e,r,n,i,s){this.app=e,this._authProvider=r,this._appCheckProvider=n,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Cs,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gu,this._maxUploadRetryTime=vu,this._requests=new Set,i!=null?this._bucket=F.makeFromBucketSpec(i,this._host):this._bucket=ui(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=F.makeFromBucketSpec(this._url,e):this._bucket=ui(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ci("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ci("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const r=await e.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ye(this,e)}_makeRequest(e,r,n,i,s=!0){if(this._deleted)return new Ru(Ms());{const a=$u(e,this._appId,n,i,r,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,r){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,r,n,i).getPromise()}}const li="@firebase/storage",di="0.11.2";/**
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
 */const Us="storage";function hi(t,e){return t=p(t),qu(t,e)}function zu(t=Ns(),e){t=p(t);const n=En(t,Us).getImmediate({identifier:e}),i=Yo("storage");return i&&Ku(n,...i),n}function Ku(t,e,r,n={}){Gu(t,e,r,n)}function Yu(t,{instanceIdentifier:e}){const r=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new yn(r,n,i,e,Ue)}function ju(){Ce(new Ie(Us,Yu,"PUBLIC").setMultipleInstances(!0)),de(li,di,""),de(li,di,"esm2017")}ju();function Tn(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}/**
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
 */const Ju={PHONE:"phone",TOTP:"totp"},Xu={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Qu={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},Zu={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},el={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function tl(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function $s(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rl=tl,Fs=$s,Bs=new st("auth","Firebase",$s()),nl={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type"};/**
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
 */const Rt=new bs("@firebase/auth");function il(t,...e){Rt.logLevel<=v.WARN&&Rt.warn(`Auth (${Ue}): ${t}`,...e)}function vt(t,...e){Rt.logLevel<=v.ERROR&&Rt.error(`Auth (${Ue}): ${t}`,...e)}/**
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
 */function M(t,...e){throw wn(t,...e)}function L(t,...e){return wn(t,...e)}function Vs(t,e,r){const n=Object.assign(Object.assign({},Fs()),{[e]:r});return new st("auth","Firebase",n).create(e,{appName:t.name})}function $e(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&M(t,"argument-error"),Vs(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wn(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return Bs.create(t,...e)}function d(t,e,...r){if(!t)throw wn(e,...r)}function G(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vt(e),new Error(e)}function ne(t,e){t||G(e)}/**
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
 */function Ze(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function On(){return fi()==="http:"||fi()==="https:"}function fi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function sl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(On()||Qo()||"connection"in navigator)?navigator.onLine:!0}function al(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class at{constructor(e,r){this.shortDelay=e,this.longDelay=r,ne(r>e,"Short delay should be less than long delay!"),this.isMobile=Xo()||Zo()}get(){return sl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bn(t,e){ne(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
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
 */class xs{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;G("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;G("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;G("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ol={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cl=new at(3e4,6e4);function I(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function E(t,e,r,n,i={}){return Hs(t,i,async()=>{let s={},a={};n&&(e==="GET"?a=n:s={body:JSON.stringify(n)});const o=Le(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),xs.fetch()(Ws(t,t.config.apiHost,r,o),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Hs(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},ol),e);try{const i=new ll(t),s=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ye(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,u]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ye(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Ye(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw Ye(t,"user-disabled",a);const l=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Vs(t,l,u);M(t,l)}}catch(i){if(i instanceof se)throw i;M(t,"network-request-failed",{message:String(i)})}}async function ae(t,e,r,n,i={}){const s=await E(t,e,r,n,i);return"mfaPendingCredential"in s&&M(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ws(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?bn(t.config,i):`${t.config.apiScheme}://${i}`}function ul(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ll{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(L(this.auth,"network-request-failed")),cl.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ye(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=L(t,e,n);return i.customData._tokenResponse=r,i}/**
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
 */function pi(t){return t!==void 0&&t.getResponse!==void 0}function mi(t){return t!==void 0&&t.enterprise!==void 0}class qs{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===e)return ul(r.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function dl(t){return(await E(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Gs(t,e){return E(t,"GET","/v2/recaptchaConfig",I(t,e))}/**
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
 */async function hl(t,e){return E(t,"POST","/v1/accounts:delete",e)}async function fl(t,e){return E(t,"POST","/v1/accounts:update",e)}async function pl(t,e){return E(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function je(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
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
 */function ml(t,e=!1){return p(t).getIdToken(e)}async function zs(t,e=!1){const r=p(t),n=await r.getIdToken(e),i=kt(n);d(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:je(zr(i.auth_time)),issuedAtTime:je(zr(i.iat)),expirationTime:je(zr(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function zr(t){return Number(t)*1e3}function kt(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return vt("JWT malformed, contained fewer than 3 sections"),null;try{const i=ys(r);return i?JSON.parse(i):(vt("Failed to decode base64 JWT payload"),null)}catch(i){return vt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _l(t){const e=kt(t);return d(e,"internal-error"),d(typeof e.exp<"u","internal-error"),d(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ie(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof se&&gl(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function gl({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ks{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=je(this.lastLoginAt),this.creationTime=je(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function et(t){var e;const r=t.auth,n=await t.getIdToken(),i=await ie(t,pl(r,{idToken:n}));d(i==null?void 0:i.users.length,r,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?El(s.providerUserInfo):[],o=Il(t.providerData,a),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ks(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Ys(t){const e=p(t);await et(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Il(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function El(t){return t.map(e=>{var{providerId:r}=e,n=Tn(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function yl(t,e){const r=await Hs(t,{},async()=>{const n=Le({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=Ws(t,i,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",xs.fetch()(a,{method:"POST",headers:o,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Tl(t,e){return E(t,"POST","/v2/accounts:revokeToken",I(t,e))}/**
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
 */class tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){d(e.idToken,"internal-error"),d(typeof e.idToken<"u","internal-error"),d(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_l(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return d(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:s}=await yl(e,r);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:s}=r,a=new tt;return n&&(d(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(d(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(d(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tt,this.toJSON())}_performRefresh(){return G("not implemented")}}/**
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
 */function ce(t,e){d(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ge{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,s=Tn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ks(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const r=await ie(this,this.stsTokenManager.getToken(this.auth,e));return d(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return zs(this,e)}reload(){return Ys(this)}_assign(e){this!==e&&(d(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new ge(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){d(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await et(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ie(this,hl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,s,a,o,c,u,l;const h=(n=r.displayName)!==null&&n!==void 0?n:void 0,f=(i=r.email)!==null&&i!==void 0?i:void 0,m=(s=r.phoneNumber)!==null&&s!==void 0?s:void 0,O=(a=r.photoURL)!==null&&a!==void 0?a:void 0,N=(o=r.tenantId)!==null&&o!==void 0?o:void 0,P=(c=r._redirectEventId)!==null&&c!==void 0?c:void 0,Y=(u=r.createdAt)!==null&&u!==void 0?u:void 0,Re=(l=r.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:$,emailVerified:S,isAnonymous:j,providerData:J,stsTokenManager:Ae}=r;d($&&Ae,e,"internal-error");const pe=tt.fromJSON(this.name,Ae);d(typeof $=="string",e,"internal-error"),ce(h,e.name),ce(f,e.name),d(typeof S=="boolean",e,"internal-error"),d(typeof j=="boolean",e,"internal-error"),ce(m,e.name),ce(O,e.name),ce(N,e.name),ce(P,e.name),ce(Y,e.name),ce(Re,e.name);const qe=new ge({uid:$,auth:e,email:f,emailVerified:S,displayName:h,isAnonymous:j,photoURL:O,phoneNumber:m,tenantId:N,stsTokenManager:pe,createdAt:Y,lastLoginAt:Re});return J&&Array.isArray(J)&&(qe.providerData=J.map(g=>Object.assign({},g))),P&&(qe._redirectEventId=P),qe}static async _fromIdTokenResponse(e,r,n=!1){const i=new tt;i.updateFromServerResponse(r);const s=new ge({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await et(s),s}}/**
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
 */const _i=new Map;function ee(t){ne(t instanceof Function,"Expected a class definition");let e=_i.get(t);return e?(ne(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_i.set(t,e),e)}/**
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
 */class js{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}js.type="NONE";const ln=js;/**
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
 */function It(t,e,r){return`firebase:${t}:${e}:${r}`}class Se{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=It(this.userKey,i.apiKey,s),this.fullPersistenceKey=It("persistence",i.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ge._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new Se(ee(ln),e,n);const i=(await Promise.all(r.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ee(ln);const a=It(n,e.config.apiKey,e.name);let o=null;for(const u of r)try{const l=await u._get(a);if(l){const h=ge._fromJSON(e,l);u!==s&&(o=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Se(s,e,n):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(r.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new Se(s,e,n))}}/**
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
 */function gi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Js(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ea(e))return"Blackberry";if(ta(e))return"Webos";if(Rn(e))return"Safari";if((e.includes("chrome/")||Xs(e))&&!e.includes("edge/"))return"Chrome";if(Zs(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Js(t=D()){return/firefox\//i.test(t)}function Rn(t=D()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xs(t=D()){return/crios\//i.test(t)}function Qs(t=D()){return/iemobile/i.test(t)}function Zs(t=D()){return/android/i.test(t)}function ea(t=D()){return/blackberry/i.test(t)}function ta(t=D()){return/webos/i.test(t)}function Mt(t=D()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wl(t=D()){var e;return Mt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ol(){return ec()&&document.documentMode===10}function ra(t=D()){return Mt(t)||Zs(t)||ta(t)||ea(t)||/windows phone/i.test(t)||Qs(t)}function bl(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function na(t,e=[]){let r;switch(t){case"Browser":r=gi(D());break;case"Worker":r=`${gi(D())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Ue}/${n}`}/**
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
 */class Rl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=s=>new Promise((a,o)=>{try{const c=e(s);a(c)}catch(c){o(c)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function Al(t,e={}){return E(t,"GET","/v2/passwordPolicy",I(t,e))}/**
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
 */const Pl=6;class Nl{constructor(e){var r,n,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=a.minPasswordLength)!==null&&r!==void 0?r:Pl,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,n,i,s,a,o;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(r=c.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),c}validatePasswordLengthOptions(e,r){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=e.length>=n),i&&(r.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,r,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Sl{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vi(this),this.idTokenSubscription=new vi(this),this.beforeStateQueue=new Rl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=ee(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Se.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var r;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return d(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await et(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=al()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?p(e):null;return r&&d(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&d(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ee(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Al(this),r=new Nl(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new st("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await Tl(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&ee(e)||this._popupRedirectResolver;d(r,this,"argument-error"),this.redirectPersistenceManager=await Se.create(this,[ee(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const s=typeof r=="function"?r:r.next.bind(r);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(d(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof r=="function"){const c=e.addObserver(r,n,i);return()=>{a=!0,c()}}else{const c=e.addObserver(r);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return d(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=na(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&il(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function T(t){return p(t)}class vi{constructor(e){this.auth=e,this.observer=null,this.addObserver=oc(r=>this.observer=r)}get next(){return d(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Dl(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function An(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const s=L("internal-error");s.customData=i,r(s)},n.type="text/javascript",n.charset="UTF-8",Dl().appendChild(n)})}function ia(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Cl="https://www.google.com/recaptcha/enterprise.js?render=",kl="recaptcha-enterprise",Ml="NO_RECAPTCHA";class sa{constructor(e){this.type=kl,this.auth=T(e)}async verify(e="verify",r=!1){async function n(s){if(!r){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{Gs(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const u=new qs(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,a(u.siteKey)}}).catch(c=>{o(c)})})}function i(s,a,o){const c=window.grecaptcha;mi(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{a(u)}).catch(()=>{a(Ml)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{n(this.auth).then(o=>{if(!r&&mi(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}An(Cl+o).then(()=>{i(o,s,a)}).catch(c=>{a(c)})}}).catch(o=>{a(o)})})}}async function Ii(t,e,r,n=!1){const i=new sa(t);let s;try{s=await i.verify(r)}catch{s=await i.verify(r,!0)}const a=Object.assign({},e);return n?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function rt(t,e,r,n){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ii(t,e,r,r==="getOobCode");return n(t,s)}else return n(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ii(t,e,r,r==="getOobCode");return n(t,a)}else return Promise.reject(s)})}async function Ll(t){const e=T(t),r=await Gs(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new qs(r);e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,n.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")&&new sa(e).verify()}/**
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
 */function aa(t,e){const r=En(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),s=r.getOptions();if(wt(s,e??{}))return i;M(i,"already-initialized")}return r.initialize({options:e})}function Ul(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(ee);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function oa(t,e,r){const n=T(t);d(n._canInitEmulator,n,"emulator-config-failed"),d(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(r!=null&&r.disableWarnings),s=ca(e),{host:a,port:o}=$l(e),c=o===null?"":`:${o}`;n.config.emulator={url:`${s}//${a}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Fl()}function ca(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $l(t){const e=ca(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Ei(n.substr(s.length+1))}}else{const[s,a]=n.split(":");return{host:s,port:Ei(a)}}}function Ei(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Fl(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fe{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return G("not implemented")}_getIdTokenResponse(e){return G("not implemented")}_linkToIdToken(e,r){return G("not implemented")}_getReauthenticationResolver(e){return G("not implemented")}}/**
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
 */async function ua(t,e){return E(t,"POST","/v1/accounts:resetPassword",I(t,e))}async function Bl(t,e){return E(t,"POST","/v1/accounts:update",e)}async function Vl(t,e){return E(t,"POST","/v1/accounts:signUp",e)}async function xl(t,e){return E(t,"POST","/v1/accounts:update",I(t,e))}/**
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
 */async function Hl(t,e){return ae(t,"POST","/v1/accounts:signInWithPassword",I(t,e))}async function Lt(t,e){return E(t,"POST","/v1/accounts:sendOobCode",I(t,e))}async function Wl(t,e){return Lt(t,e)}async function ql(t,e){return Lt(t,e)}async function Gl(t,e){return Lt(t,e)}async function zl(t,e){return Lt(t,e)}/**
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
 */async function Kl(t,e){return ae(t,"POST","/v1/accounts:signInWithEmailLink",I(t,e))}async function Yl(t,e){return ae(t,"POST","/v1/accounts:signInWithEmailLink",I(t,e))}/**
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
 */class ke extends Fe{constructor(e,r,n,i=null){super("password",n),this._email=e,this._password=r,this._tenantId=i}static _fromEmailAndPassword(e,r){return new ke(e,r,"password")}static _fromEmailAndCode(e,r,n=null){return new ke(e,r,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rt(e,r,"signInWithPassword",Hl);case"emailLink":return Kl(e,{email:this._email,oobCode:this._password});default:M(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":const n={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rt(e,n,"signUpPassword",Vl);case"emailLink":return Yl(e,{idToken:r,email:this._email,oobCode:this._password});default:M(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function re(t,e){return ae(t,"POST","/v1/accounts:signInWithIdp",I(t,e))}/**
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
 */const jl="http://localhost";class z extends Fe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new z(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):M("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,s=Tn(r,["providerId","signInMethod"]);if(!n||!i)return null;const a=new z(n,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const r=this.buildRequest();return re(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,re(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,re(e,r)}buildRequest(){const e={requestUri:jl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Le(r)}return e}}/**
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
 */async function Jl(t,e){return E(t,"POST","/v1/accounts:sendVerificationCode",I(t,e))}async function Xl(t,e){return ae(t,"POST","/v1/accounts:signInWithPhoneNumber",I(t,e))}async function Ql(t,e){const r=await ae(t,"POST","/v1/accounts:signInWithPhoneNumber",I(t,e));if(r.temporaryProof)throw Ye(t,"account-exists-with-different-credential",r);return r}const Zl={USER_NOT_FOUND:"user-not-found"};async function ed(t,e){const r=Object.assign(Object.assign({},e),{operation:"REAUTH"});return ae(t,"POST","/v1/accounts:signInWithPhoneNumber",I(t,r),Zl)}/**
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
 */class he extends Fe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,r){return new he({verificationId:e,verificationCode:r})}static _fromTokenResponse(e,r){return new he({phoneNumber:e,temporaryProof:r})}_getIdTokenResponse(e){return Xl(e,this._makeVerificationRequest())}_linkToIdToken(e,r){return Ql(e,Object.assign({idToken:r},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ed(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:r,verificationId:n,verificationCode:i}=this.params;return e&&r?{temporaryProof:e,phoneNumber:r}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:r,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return!n&&!r&&!i&&!s?null:new he({verificationId:r,verificationCode:n,phoneNumber:i,temporaryProof:s})}}/**
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
 */function td(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rd(t){const e=ze(Ke(t)).link,r=e?ze(Ke(e)).deep_link_id:null,n=ze(Ke(t)).deep_link_id;return(n?ze(Ke(n)).link:null)||n||r||e||t}class Be{constructor(e){var r,n,i,s,a,o;const c=ze(Ke(e)),u=(r=c.apiKey)!==null&&r!==void 0?r:null,l=(n=c.oobCode)!==null&&n!==void 0?n:null,h=td((i=c.mode)!==null&&i!==void 0?i:null);d(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=c.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const r=rd(e);try{return new Be(r)}catch{return null}}}function nd(t){return Be.parseLink(t)}/**
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
 */class fe{constructor(){this.providerId=fe.PROVIDER_ID}static credential(e,r){return ke._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const n=Be.parseLink(r);return d(n,"argument-error"),ke._fromEmailAndCode(e,n.code,n.tenantId)}}fe.PROVIDER_ID="password";fe.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class oe{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ve extends oe{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Je extends Ve{static credentialFromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;return d("providerId"in r&&"signInMethod"in r,"argument-error"),z._fromParams(r)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return d(e.idToken||e.accessToken,"argument-error"),z._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Je.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Je.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:s,nonce:a,providerId:o}=e;if(!n&&!i&&!r&&!s||!o)return null;try{return new Je(o)._credential({idToken:r,accessToken:n,nonce:a,pendingToken:s})}catch{return null}}}/**
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
 */class X extends Ve{constructor(){super("facebook.com")}static credential(e){return z._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return X.credential(e.oauthAccessToken)}catch{return null}}}X.FACEBOOK_SIGN_IN_METHOD="facebook.com";X.PROVIDER_ID="facebook.com";/**
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
 */let Pn=class Pe extends Ve{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return z._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return Pe.credential(r,n)}catch{return null}}};Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
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
 */class Q extends Ve{constructor(){super("github.com")}static credential(e){return z._fromParams({providerId:Q.PROVIDER_ID,signInMethod:Q.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Q.credentialFromTaggedObject(e)}static credentialFromError(e){return Q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Q.credential(e.oauthAccessToken)}catch{return null}}}Q.GITHUB_SIGN_IN_METHOD="github.com";Q.PROVIDER_ID="github.com";/**
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
 */const id="http://localhost";class nt extends Fe{constructor(e,r){super(e,e),this.pendingToken=r}_getIdTokenResponse(e){const r=this.buildRequest();return re(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,re(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,re(e,r)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:s}=r;return!n||!i||!s||n!==i?null:new nt(n,s)}static _create(e,r){return new nt(e,r)}buildRequest(){return{requestUri:id,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const sd="saml.";class At extends oe{constructor(e){d(e.startsWith(sd),"argument-error"),super(e)}static credentialFromResult(e){return At.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return At.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const r=nt.fromJSON(e);return d(r,"argument-error"),r}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:r,providerId:n}=e;if(!r||!n)return null;try{return nt._create(n,r)}catch{return null}}}/**
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
 */class Z extends Ve{constructor(){super("twitter.com")}static credential(e,r){return z._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return Z.credential(r,n)}catch{return null}}}Z.TWITTER_SIGN_IN_METHOD="twitter.com";Z.PROVIDER_ID="twitter.com";/**
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
 */async function la(t,e){return ae(t,"POST","/v1/accounts:signUp",I(t,e))}/**
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
 */class B{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const s=await ge._fromIdTokenResponse(e,n,i),a=yi(n);return new B({user:s,providerId:a,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=yi(n);return new B({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function yi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function ad(t){var e;const r=T(t);if(await r._initializationPromise,!((e=r.currentUser)===null||e===void 0)&&e.isAnonymous)return new B({user:r.currentUser,providerId:null,operationType:"signIn"});const n=await la(r,{returnSecureToken:!0}),i=await B._fromIdTokenResponse(r,"signIn",n,!0);return await r._updateCurrentUser(i.user),i}/**
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
 */class Pt extends se{constructor(e,r,n,i){var s;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Pt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new Pt(e,r,n,i)}}function da(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pt._fromErrorAndOperation(t,s,e,n):s})}/**
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
 */function ha(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function od(t,e){const r=p(t);await Ut(!0,r,e);const{providerUserInfo:n}=await fl(r.auth,{idToken:await r.getIdToken(),deleteProvider:[e]}),i=ha(n||[]);return r.providerData=r.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(r.phoneNumber=null),await r.auth._persistUserIfCurrent(r),r}async function Nn(t,e,r=!1){const n=await ie(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return B._forOperation(t,"link",n)}async function Ut(t,e,r){await et(e);const n=ha(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";d(n.has(r)===t,e.auth,i)}/**
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
 */async function fa(t,e,r=!1){const{auth:n}=t,i="reauthenticate";try{const s=await ie(t,da(n,i,e,t),r);d(s.idToken,n,"internal-error");const a=kt(s.idToken);d(a,n,"internal-error");const{sub:o}=a;return d(t.uid===o,n,"user-mismatch"),B._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&M(n,"user-mismatch"),s}}/**
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
 */async function pa(t,e,r=!1){const n="signIn",i=await da(t,n,e),s=await B._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(s.user),s}async function $t(t,e){return pa(T(t),e)}async function ma(t,e){const r=p(t);return await Ut(!1,r,e.providerId),Nn(r,e)}async function _a(t,e){return fa(p(t),e)}/**
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
 */async function cd(t,e){return ae(t,"POST","/v1/accounts:signInWithCustomToken",I(t,e))}/**
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
 */async function ud(t,e){const r=T(t),n=await cd(r,{token:e,returnSecureToken:!0}),i=await B._fromIdTokenResponse(r,"signIn",n);return await r._updateCurrentUser(i.user),i}/**
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
 */class ot{constructor(e,r){this.factorId=e,this.uid=r.mfaEnrollmentId,this.enrollmentTime=new Date(r.enrolledAt).toUTCString(),this.displayName=r.displayName}static _fromServerResponse(e,r){return"phoneInfo"in r?Sn._fromServerResponse(e,r):"totpInfo"in r?Dn._fromServerResponse(e,r):M(e,"internal-error")}}class Sn extends ot{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,r){return new Sn(r)}}class Dn extends ot{constructor(e){super("totp",e)}static _fromServerResponse(e,r){return new Dn(r)}}/**
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
 */function Ft(t,e,r){var n;d(((n=r.url)===null||n===void 0?void 0:n.length)>0,t,"invalid-continue-uri"),d(typeof r.dynamicLinkDomain>"u"||r.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=r.url,e.dynamicLinkDomain=r.dynamicLinkDomain,e.canHandleCodeInApp=r.handleCodeInApp,r.iOS&&(d(r.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=r.iOS.bundleId),r.android&&(d(r.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=r.android.installApp,e.androidMinimumVersionCode=r.android.minimumVersion,e.androidPackageName=r.android.packageName)}/**
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
 */async function Cn(t){const e=T(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ld(t,e,r){const n=T(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};r&&Ft(n,i,r),await rt(n,i,"getOobCode",ql)}async function dd(t,e,r){await ua(p(t),{oobCode:e,newPassword:r}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Cn(t),n})}async function hd(t,e){await xl(p(t),{oobCode:e})}async function ga(t,e){const r=p(t),n=await ua(r,{oobCode:e}),i=n.requestType;switch(d(i,r,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":d(n.newEmail,r,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":d(n.mfaInfo,r,"internal-error");default:d(n.email,r,"internal-error")}let s=null;return n.mfaInfo&&(s=ot._fromServerResponse(T(r),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:s},operation:i}}async function fd(t,e){const{data:r}=await ga(p(t),e);return r.email}async function pd(t,e,r){const n=T(t),a=await rt(n,{returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",la).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Cn(t),c}),o=await B._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(o.user),o}function md(t,e,r){return $t(p(t),fe.credential(e,r)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Cn(t),n})}/**
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
 */async function _d(t,e,r){const n=T(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(a,o){d(o.handleCodeInApp,n,"argument-error"),o&&Ft(n,a,o)}s(i,r),await rt(n,i,"getOobCode",Gl)}function gd(t,e){const r=Be.parseLink(e);return(r==null?void 0:r.operation)==="EMAIL_SIGNIN"}async function vd(t,e,r){const n=p(t),i=fe.credentialWithLink(e,r||Ze());return d(i._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),$t(n,i)}/**
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
 */async function Id(t,e){return E(t,"POST","/v1/accounts:createAuthUri",I(t,e))}/**
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
 */async function Ed(t,e){const r=On()?Ze():"http://localhost",n={identifier:e,continueUri:r},{signinMethods:i}=await Id(p(t),n);return i||[]}async function yd(t,e){const r=p(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Ft(r.auth,i,e);const{email:s}=await Wl(r.auth,i);s!==t.email&&await t.reload()}async function Td(t,e,r){const n=p(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};r&&Ft(n.auth,s,r);const{email:a}=await zl(n.auth,s);a!==t.email&&await t.reload()}/**
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
 */async function wd(t,e){return E(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Od(t,{displayName:e,photoURL:r}){if(e===void 0&&r===void 0)return;const n=p(t),s={idToken:await n.getIdToken(),displayName:e,photoUrl:r,returnSecureToken:!0},a=await ie(n,wd(n.auth,s));n.displayName=a.displayName||null,n.photoURL=a.photoUrl||null;const o=n.providerData.find(({providerId:c})=>c==="password");o&&(o.displayName=n.displayName,o.photoURL=n.photoURL),await n._updateTokensIfNecessary(a)}function bd(t,e){return va(p(t),e,null)}function Rd(t,e){return va(p(t),null,e)}async function va(t,e,r){const{auth:n}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),r&&(s.password=r);const a=await ie(t,Bl(n,s));await t._updateTokensIfNecessary(a,!0)}/**
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
 */function Ad(t){var e,r;if(!t)return null;const{providerId:n}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!n&&(t!=null&&t.idToken)){const a=(r=(e=kt(t.idToken))===null||e===void 0?void 0:e.firebase)===null||r===void 0?void 0:r.sign_in_provider;if(a){const o=a!=="anonymous"&&a!=="custom"?a:null;return new De(s,o)}}if(!n)return null;switch(n){case"facebook.com":return new Pd(s,i);case"github.com":return new Nd(s,i);case"google.com":return new Sd(s,i);case"twitter.com":return new Dd(s,i,t.screenName||null);case"custom":case"anonymous":return new De(s,null);default:return new De(s,n,i)}}class De{constructor(e,r,n={}){this.isNewUser=e,this.providerId=r,this.profile=n}}class Ia extends De{constructor(e,r,n,i){super(e,r,n),this.username=i}}class Pd extends De{constructor(e,r){super(e,"facebook.com",r)}}class Nd extends Ia{constructor(e,r){super(e,"github.com",r,typeof(r==null?void 0:r.login)=="string"?r==null?void 0:r.login:null)}}class Sd extends De{constructor(e,r){super(e,"google.com",r)}}class Dd extends Ia{constructor(e,r,n){super(e,"twitter.com",r,n)}}function Cd(t){const{user:e,_tokenResponse:r}=t;return e.isAnonymous&&!r?{providerId:null,isNewUser:!1,profile:null}:Ad(r)}/**
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
 */function kd(t,e){return p(t).setPersistence(e)}function Md(t){return Ll(t)}async function Ld(t,e){return T(t).validatePassword(e)}function Ea(t,e,r,n){return p(t).onIdTokenChanged(e,r,n)}function ya(t,e,r){return p(t).beforeAuthStateChanged(e,r)}function Ud(t,e,r,n){return p(t).onAuthStateChanged(e,r,n)}function $d(t){p(t).useDeviceLanguage()}function Fd(t,e){return p(t).updateCurrentUser(e)}function Bd(t){return p(t).signOut()}function Vd(t,e){return T(t).revokeAccessToken(e)}async function xd(t){return p(t).delete()}/**
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
 */class _e{constructor(e,r,n){this.type=e,this.credential=r,this.user=n}static _fromIdtoken(e,r){return new _e("enroll",e,r)}static _fromMfaPendingCredential(e){return new _e("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var r,n;if(e!=null&&e.multiFactorSession){if(!((r=e.multiFactorSession)===null||r===void 0)&&r.pendingCredential)return _e._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((n=e.multiFactorSession)===null||n===void 0)&&n.idToken)return _e._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class kn{constructor(e,r,n){this.session=e,this.hints=r,this.signInResolver=n}static _fromError(e,r){const n=T(e),i=r.customData._serverResponse,s=(i.mfaInfo||[]).map(o=>ot._fromServerResponse(n,o));d(i.mfaPendingCredential,n,"internal-error");const a=_e._fromMfaPendingCredential(i.mfaPendingCredential);return new kn(a,s,async o=>{const c=await o._process(n,a);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(r.operationType){case"signIn":const l=await B._fromIdTokenResponse(n,r.operationType,u);return await n._updateCurrentUser(l.user),l;case"reauthenticate":return d(r.user,n,"internal-error"),B._forOperation(r.user,r.operationType,u);default:M(n,"internal-error")}})}async resolveSignIn(e){const r=e;return this.signInResolver(r)}}function Hd(t,e){var r;const n=p(t),i=e;return d(e.customData.operationType,n,"argument-error"),d((r=i.customData._serverResponse)===null||r===void 0?void 0:r.mfaPendingCredential,n,"argument-error"),kn._fromError(n,i)}/**
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
 */function Wd(t,e){return E(t,"POST","/v2/accounts/mfaEnrollment:start",I(t,e))}function qd(t,e){return E(t,"POST","/v2/accounts/mfaEnrollment:finalize",I(t,e))}function Gd(t,e){return E(t,"POST","/v2/accounts/mfaEnrollment:start",I(t,e))}function zd(t,e){return E(t,"POST","/v2/accounts/mfaEnrollment:finalize",I(t,e))}function Kd(t,e){return E(t,"POST","/v2/accounts/mfaEnrollment:withdraw",I(t,e))}class Mn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(r=>{r.mfaInfo&&(this.enrolledFactors=r.mfaInfo.map(n=>ot._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new Mn(e)}async getSession(){return _e._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,r){const n=e,i=await this.getSession(),s=await ie(this.user,n._process(this.user.auth,i,r));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const r=typeof e=="string"?e:e.uid,n=await this.user.getIdToken();try{const i=await ie(this.user,Kd(this.user.auth,{idToken:n,mfaEnrollmentId:r}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==r),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Kr=new WeakMap;function Yd(t){const e=p(t);return Kr.has(e)||Kr.set(e,Mn._fromUser(e)),Kr.get(e)}const Nt="__sak";/**
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
 */class Ta{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Nt,"1"),this.storage.removeItem(Nt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function jd(){const t=D();return Rn(t)||Mt(t)}const Jd=1e3,Xd=10;class wa extends Ta{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jd()&&bl(),this.fallbackToPolling=ra(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const n=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!r)return}const i=()=>{const a=this.storage.getItem(n);!r&&this.localCache[n]===a||this.notifyListeners(n,a)},s=this.storage.getItem(n);Ol()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Xd):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},Jd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}wa.type="LOCAL";const Oa=wa;/**
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
 */class ba extends Ta{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}ba.type="SESSION";const Ln=ba;/**
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
 */function Qd(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class Bt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new Bt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:s}=r.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(a).map(async u=>u(r.origin,s)),c=await Qd(o);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bt.receivers=[];/**
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
 */function Vt(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class Zd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const u=Vt("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(f.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:r},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function b(){return window}function eh(t){b().location.href=t}/**
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
 */function Un(){return typeof b().WorkerGlobalScope<"u"&&typeof b().importScripts=="function"}async function th(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nh(){return Un()?self:null}/**
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
 */const Ra="firebaseLocalStorageDb",ih=1,St="firebaseLocalStorage",Aa="fbase_key";class ct{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function xt(t,e){return t.transaction([St],e?"readwrite":"readonly").objectStore(St)}function sh(){const t=indexedDB.deleteDatabase(Ra);return new ct(t).toPromise()}function dn(){const t=indexedDB.open(Ra,ih);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(St,{keyPath:Aa})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(St)?e(n):(n.close(),await sh(),e(await dn()))})})}async function Ti(t,e,r){const n=xt(t,!0).put({[Aa]:e,value:r});return new ct(n).toPromise()}async function ah(t,e){const r=xt(t,!1).get(e),n=await new ct(r).toPromise();return n===void 0?null:n.value}function wi(t,e){const r=xt(t,!0).delete(e);return new ct(r).toPromise()}const oh=800,ch=3;class Pa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dn(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>ch)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Un()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bt._getInstance(nh()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await th(),!this.activeServiceWorker)return;this.sender=new Zd(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dn();return await Ti(e,Nt,"1"),await wi(e,Nt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ti(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>ah(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>wi(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xt(i,!1).getAll();return new ct(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pa.type="LOCAL";const Na=Pa;/**
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
 */function uh(t,e){return E(t,"POST","/v2/accounts/mfaSignIn:start",I(t,e))}function lh(t,e){return E(t,"POST","/v2/accounts/mfaSignIn:finalize",I(t,e))}function dh(t,e){return E(t,"POST","/v2/accounts/mfaSignIn:finalize",I(t,e))}/**
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
 */const hh=500,fh=6e4,ft=1e12;class ph{constructor(e){this.auth=e,this.counter=ft,this._widgets=new Map}render(e,r){const n=this.counter;return this._widgets.set(n,new mh(e,this.auth.name,r||{})),this.counter++,n}reset(e){var r;const n=e||ft;(r=this._widgets.get(n))===null||r===void 0||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||ft;return((r=this._widgets.get(n))===null||r===void 0?void 0:r.getResponse())||""}async execute(e){var r;const n=e||ft;return(r=this._widgets.get(n))===null||r===void 0||r.execute(),""}}class mh{constructor(e,r,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;d(i,"argument-error",{appName:r}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=_h(50);const{callback:e,"expired-callback":r}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,r)try{r()}catch{}this.isVisible&&this.execute()},fh)},hh))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function _h(t){const e=[],r="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<t;n++)e.push(r.charAt(Math.floor(Math.random()*r.length)));return e.join("")}/**
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
 */const Yr=ia("rcb"),gh=new at(3e4,6e4),vh="https://www.google.com/recaptcha/api.js?";class Ih{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=b().grecaptcha)===null||e===void 0)&&e.render)}load(e,r=""){return d(Eh(r),e,"argument-error"),this.shouldResolveImmediately(r)&&pi(b().grecaptcha)?Promise.resolve(b().grecaptcha):new Promise((n,i)=>{const s=b().setTimeout(()=>{i(L(e,"network-request-failed"))},gh.get());b()[Yr]=()=>{b().clearTimeout(s),delete b()[Yr];const o=b().grecaptcha;if(!o||!pi(o)){i(L(e,"internal-error"));return}const c=o.render;o.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=r,n(o)};const a=`${vh}?${Le({onload:Yr,render:"explicit",hl:r})}`;An(a).catch(()=>{clearTimeout(s),i(L(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var r;return!!(!((r=b().grecaptcha)===null||r===void 0)&&r.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Eh(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class yh{async load(e){return new ph(e)}clearedOneInstance(){}}/**
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
 */const Sa="recaptcha",Th={theme:"light",type:"image"};class wh{constructor(e,r,n=Object.assign({},Th)){this.parameters=n,this.type=Sa,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=T(e),this.isInvisible=this.parameters.size==="invisible",d(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof r=="string"?document.getElementById(r):r;d(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new yh:new Ih,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),r=this.getAssertedRecaptcha(),n=r.getResponse(e);return n||new Promise(i=>{const s=a=>{a&&(this.tokenChangeListeners.delete(s),i(a))};this.tokenChangeListeners.add(s),this.isInvisible&&r.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){d(!this.parameters.sitekey,this.auth,"argument-error"),d(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),d(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return r=>{if(this.tokenChangeListeners.forEach(n=>n(r)),typeof e=="function")e(r);else if(typeof e=="string"){const n=b()[e];typeof n=="function"&&n(r)}}}assertNotDestroyed(){d(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const r=document.createElement("div");e.appendChild(r),e=r}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){d(On()&&!Un(),this.auth,"internal-error"),await Oh(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await dl(this.auth);d(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return d(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Oh(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class $n{constructor(e,r){this.verificationId=e,this.onConfirmation=r}confirm(e){const r=he._fromVerification(this.verificationId,e);return this.onConfirmation(r)}}async function bh(t,e,r){const n=T(t),i=await Ht(n,e,p(r));return new $n(i,s=>$t(n,s))}async function Rh(t,e,r){const n=p(t);await Ut(!1,n,"phone");const i=await Ht(n.auth,e,p(r));return new $n(i,s=>ma(n,s))}async function Ah(t,e,r){const n=p(t),i=await Ht(n.auth,e,p(r));return new $n(i,s=>_a(n,s))}async function Ht(t,e,r){var n;const i=await r.verify();try{d(typeof i=="string",t,"argument-error"),d(r.type===Sa,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const a=s.session;if("phoneNumber"in s)return d(a.type==="enroll",t,"internal-error"),(await Wd(t,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{d(a.type==="signin",t,"internal-error");const o=((n=s.multiFactorHint)===null||n===void 0?void 0:n.uid)||s.multiFactorUid;return d(o,t,"missing-multi-factor-info"),(await uh(t,{mfaPendingCredential:a.credential,mfaEnrollmentId:o,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:a}=await Jl(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return a}}finally{r._reset()}}async function Ph(t,e){await Nn(p(t),e)}/**
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
 */class ve{constructor(e){this.providerId=ve.PROVIDER_ID,this.auth=T(e)}verifyPhoneNumber(e,r){return Ht(this.auth,e,p(r))}static credential(e,r){return he._fromVerification(e,r)}static credentialFromResult(e){const r=e;return ve.credentialFromTaggedObject(r)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:r,temporaryProof:n}=e;return r&&n?he._fromTokenResponse(r,n):null}}ve.PROVIDER_ID="phone";ve.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Oe(t,e){return e?ee(e):(d(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fn extends Fe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return re(e,this._buildIdpRequest())}_linkToIdToken(e,r){return re(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return re(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Nh(t){return pa(t.auth,new Fn(t),t.bypassAuthState)}function Sh(t){const{auth:e,user:r}=t;return d(r,e,"internal-error"),fa(r,new Fn(t),t.bypassAuthState)}async function Dh(t){const{auth:e,user:r}=t;return d(r,e,"internal-error"),Nn(r,new Fn(t),t.bypassAuthState)}/**
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
 */class Da{constructor(e,r,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:r,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nh;case"linkViaPopup":case"linkViaRedirect":return Dh;case"reauthViaPopup":case"reauthViaRedirect":return Sh;default:M(this.auth,"internal-error")}}resolve(e){ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ch=new at(2e3,1e4);async function kh(t,e,r){const n=T(t);$e(t,e,oe);const i=Oe(n,r);return new te(n,"signInViaPopup",e,i).executeNotNull()}async function Mh(t,e,r){const n=p(t);$e(n.auth,e,oe);const i=Oe(n.auth,r);return new te(n.auth,"reauthViaPopup",e,i,n).executeNotNull()}async function Lh(t,e,r){const n=p(t);$e(n.auth,e,oe);const i=Oe(n.auth,r);return new te(n.auth,"linkViaPopup",e,i,n).executeNotNull()}class te extends Da{constructor(e,r,n,i,s){super(e,r,i,s),this.provider=n,this.authWindow=null,this.pollId=null,te.currentPopupAction&&te.currentPopupAction.cancel(),te.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return d(e,this.auth,"internal-error"),e}async onExecution(){ne(this.filter.length===1,"Popup operations only handle one event");const e=Vt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(L(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(L(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,te.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(L(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ch.get())};e()}}te.currentPopupAction=null;/**
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
 */const Uh="pendingRedirect",Et=new Map;class $h extends Da{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=Et.get(this.auth._key());if(!e){try{const n=await Fh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}Et.set(this.auth._key(),e)}return this.bypassAuthState||Et.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fh(t,e){const r=ka(e),n=Ca(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}async function Bn(t,e){return Ca(t)._set(ka(e),"true")}function Bh(t,e){Et.set(t._key(),e)}function Ca(t){return ee(t._redirectPersistence)}function ka(t){return It(Uh,t.config.apiKey,t.name)}/**
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
 */function Vh(t,e,r){return xh(t,e,r)}async function xh(t,e,r){const n=T(t);$e(t,e,oe),await n._initializationPromise;const i=Oe(n,r);return await Bn(i,n),i._openRedirect(n,e,"signInViaRedirect")}function Hh(t,e,r){return Wh(t,e,r)}async function Wh(t,e,r){const n=p(t);$e(n.auth,e,oe),await n.auth._initializationPromise;const i=Oe(n.auth,r);await Bn(i,n.auth);const s=await La(n);return i._openRedirect(n.auth,e,"reauthViaRedirect",s)}function qh(t,e,r){return Gh(t,e,r)}async function Gh(t,e,r){const n=p(t);$e(n.auth,e,oe),await n.auth._initializationPromise;const i=Oe(n.auth,r);await Ut(!1,n,e.providerId),await Bn(i,n.auth);const s=await La(n);return i._openRedirect(n.auth,e,"linkViaRedirect",s)}async function zh(t,e){return await T(t)._initializationPromise,Ma(t,e,!1)}async function Ma(t,e,r=!1){const n=T(t),i=Oe(n,e),a=await new $h(n,i,r).execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}async function La(t){const e=Vt(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const Kh=10*60*1e3;class Yh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jh(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!Ua(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(L(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oi(e))}saveEventToCache(e){this.cachedEventUids.add(Oi(e)),this.lastProcessedEventTime=Date.now()}}function Oi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ua({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ua(t);default:return!1}}/**
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
 */async function Jh(t,e={}){return E(t,"GET","/v1/projects",e)}/**
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
 */const Xh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qh=/^https?/;async function Zh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Jh(t);for(const r of e)try{if(ef(r))return}catch{}M(t,"unauthorized-domain")}function ef(t){const e=Ze(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&a.hostname===n}if(!Qh.test(r))return!1;if(Xh.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const tf=new at(3e4,6e4);function bi(){const t=b().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function rf(t){return new Promise((e,r)=>{var n,i,s;function a(){bi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bi(),r(L(t,"network-request-failed"))},timeout:tf.get()})}if(!((i=(n=b().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=b().gapi)===null||s===void 0)&&s.load)a();else{const o=ia("iframefcb");return b()[o]=()=>{gapi.load?a():r(L(t,"network-request-failed"))},An(`https://apis.google.com/js/api.js?onload=${o}`).catch(c=>r(c))}}).catch(e=>{throw yt=null,e})}let yt=null;function nf(t){return yt=yt||rf(t),yt}/**
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
 */const sf=new at(5e3,15e3),af="__/auth/iframe",of="emulator/auth/iframe",cf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lf(t){const e=t.config;d(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?bn(e,of):`https://${t.config.authDomain}/${af}`,n={apiKey:e.apiKey,appName:t.name,v:Ue},i=uf.get(t.config.apiHost);i&&(n.eid=i);const s=t._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${Le(n).slice(1)}`}async function df(t){const e=await nf(t),r=b().gapi;return d(r,t,"internal-error"),e.open({where:document.body,url:lf(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cf,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const a=L(t,"network-request-failed"),o=b().setTimeout(()=>{s(a)},sf.get());function c(){b().clearTimeout(o),i(n)}n.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const hf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ff=500,pf=600,mf="_blank",_f="http://localhost";class Ri{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gf(t,e,r,n=ff,i=pf){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const c=Object.assign(Object.assign({},hf),{width:n.toString(),height:i.toString(),top:s,left:a}),u=D().toLowerCase();r&&(o=Xs(u)?mf:r),Js(u)&&(e=e||_f,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[m,O])=>`${f}${m}=${O},`,"");if(wl(u)&&o!=="_self")return vf(e||"",o),new Ri(null);const h=window.open(e||"",o,l);d(h,t,"popup-blocked");try{h.focus()}catch{}return new Ri(h)}function vf(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const If="__/auth/handler",Ef="emulator/auth/handler",yf=encodeURIComponent("fac");async function Ai(t,e,r,n,i,s){d(t.config.authDomain,t,"auth-domain-config-required"),d(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:Ue,eventId:i};if(e instanceof oe){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",ac(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))a[l]=h}if(e instanceof Ve){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(a.scopes=l.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const l of Object.keys(o))o[l]===void 0&&delete o[l];const c=await t._getAppCheckToken(),u=c?`#${yf}=${encodeURIComponent(c)}`:"";return`${Tf(t)}?${Le(o).slice(1)}${u}`}function Tf({config:t}){return t.emulator?bn(t,Ef):`https://${t.authDomain}/${If}`}/**
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
 */const jr="webStorageSupport";class wf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ln,this._completeRedirectFn=Ma,this._overrideRedirectResult=Bh}async _openPopup(e,r,n,i){var s;ne((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Ai(e,r,n,Ze(),i);return gf(e,a,Vt())}async _openRedirect(e,r,n,i){await this._originValidation(e);const s=await Ai(e,r,n,Ze(),i);return eh(s),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:s}=this.eventManagers[r];return i?Promise.resolve(i):(ne(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await df(e),n=new Yh(e);return r.register("authEvent",i=>(d(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(jr,{type:jr},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jr];a!==void 0&&r(!!a),M(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Zh(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return ra()||Rn()||Mt()}}const $a=wf;class Fa{constructor(e){this.factorId=e}_process(e,r,n){switch(r.type){case"enroll":return this._finalizeEnroll(e,r.credential,n);case"signin":return this._finalizeSignIn(e,r.credential);default:return G("unexpected MultiFactorSessionType")}}}class Vn extends Fa{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Vn(e)}_finalizeEnroll(e,r,n){return qd(e,{idToken:r,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,r){return lh(e,{mfaPendingCredential:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ba{constructor(){}static assertion(e){return Vn._fromCredential(e)}}Ba.FACTOR_ID="phone";class Va{static assertionForEnrollment(e,r){return it._fromSecret(e,r)}static assertionForSignIn(e,r){return it._fromEnrollmentId(e,r)}static async generateSecret(e){var r;const n=e;d(typeof((r=n.user)===null||r===void 0?void 0:r.auth)<"u","internal-error");const i=await Gd(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Wt._fromStartTotpMfaEnrollmentResponse(i,n.user.auth)}}Va.FACTOR_ID="totp";class it extends Fa{constructor(e,r,n){super("totp"),this.otp=e,this.enrollmentId=r,this.secret=n}static _fromSecret(e,r){return new it(r,void 0,e)}static _fromEnrollmentId(e,r){return new it(r,e)}async _finalizeEnroll(e,r,n){return d(typeof this.secret<"u",e,"argument-error"),zd(e,{idToken:r,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,r){d(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const n={verificationCode:this.otp};return dh(e,{mfaPendingCredential:r,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Wt{constructor(e,r,n,i,s,a,o){this.sessionInfo=a,this.auth=o,this.secretKey=e,this.hashingAlgorithm=r,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,r){return new Wt(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,r)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,r){var n;let i=!1;return(pt(e)||pt(r))&&(i=!0),i&&(pt(e)&&(e=((n=this.auth.currentUser)===null||n===void 0?void 0:n.email)||"unknownuser"),pt(r)&&(r=this.auth.name)),`otpauth://totp/${r}:${e}?secret=${this.secretKey}&issuer=${r}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function pt(t){return typeof t>"u"||(t==null?void 0:t.length)===0}var Pi="@firebase/auth",Ni="1.4.0";/**
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
 */class Of{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){d(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bf(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Rf(t){Ce(new Ie("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;d(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:a,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:na(t)},u=new Sl(n,i,s,c);return Ul(u,r),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),Ce(new Ie("auth-internal",e=>{const r=T(e.getProvider("auth").getImmediate());return(n=>new Of(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),de(Pi,Ni,bf(t)),de(Pi,Ni,"esm2017")}/**
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
 */const Af=5*60,Pf=Os("authIdTokenMaxAge")||Af;let Si=null;const Nf=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>Pf)return;const i=r==null?void 0:r.token;Si!==i&&(Si=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Sf(t=Ns()){const e=En(t,"auth");if(e.isInitialized())return e.getImmediate();const r=aa(t,{popupRedirectResolver:$a,persistence:[Na,Oa,Ln]}),n=Os("authTokenSyncURL");if(n){const s=Nf(n);ya(r,s,()=>s(r.currentUser)),Ea(r,a=>s(a))}const i=Ts("auth");return i&&oa(r,`http://${i}`),r}Rf("Browser");const Df=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:el,ActionCodeURL:Be,AuthCredential:Fe,AuthErrorCodes:nl,EmailAuthCredential:ke,EmailAuthProvider:fe,FacebookAuthProvider:X,FactorId:Ju,GithubAuthProvider:Q,GoogleAuthProvider:Pn,OAuthCredential:z,OAuthProvider:Je,OperationType:Zu,PhoneAuthCredential:he,PhoneAuthProvider:ve,PhoneMultiFactorGenerator:Ba,ProviderId:Xu,RecaptchaVerifier:wh,SAMLAuthProvider:At,SignInMethod:Qu,TotpMultiFactorGenerator:Va,TotpSecret:Wt,TwitterAuthProvider:Z,applyActionCode:hd,beforeAuthStateChanged:ya,browserLocalPersistence:Oa,browserPopupRedirectResolver:$a,browserSessionPersistence:Ln,checkActionCode:ga,confirmPasswordReset:dd,connectAuthEmulator:oa,createUserWithEmailAndPassword:pd,debugErrorMap:rl,deleteUser:xd,fetchSignInMethodsForEmail:Ed,getAdditionalUserInfo:Cd,getAuth:Sf,getIdToken:ml,getIdTokenResult:zs,getMultiFactorResolver:Hd,getRedirectResult:zh,inMemoryPersistence:ln,indexedDBLocalPersistence:Na,initializeAuth:aa,initializeRecaptchaConfig:Md,isSignInWithEmailLink:gd,linkWithCredential:ma,linkWithPhoneNumber:Rh,linkWithPopup:Lh,linkWithRedirect:qh,multiFactor:Yd,onAuthStateChanged:Ud,onIdTokenChanged:Ea,parseActionCodeURL:nd,prodErrorMap:Fs,reauthenticateWithCredential:_a,reauthenticateWithPhoneNumber:Ah,reauthenticateWithPopup:Mh,reauthenticateWithRedirect:Hh,reload:Ys,revokeAccessToken:Vd,sendEmailVerification:yd,sendPasswordResetEmail:ld,sendSignInLinkToEmail:_d,setPersistence:kd,signInAnonymously:ad,signInWithCredential:$t,signInWithCustomToken:ud,signInWithEmailAndPassword:md,signInWithEmailLink:vd,signInWithPhoneNumber:bh,signInWithPopup:kh,signInWithRedirect:Vh,signOut:Bd,unlink:od,updateCurrentUser:Fd,updateEmail:bd,updatePassword:Rd,updatePhoneNumber:Ph,updateProfile:Od,useDeviceLanguage:$d,validatePassword:Ld,verifyBeforeUpdateEmail:Td,verifyPasswordResetCode:fd},Symbol.toStringTag,{value:"Module"}));var xn={},k={},xa={},xe={};Object.defineProperty(xe,"__esModule",{value:!0});xe.getEscapedRegExp=Mf;xe.getPropertyDescriptor=Cf;xe.pause=kf;function Cf(t,e){var r;do r=Object.getOwnPropertyDescriptor(t,e);while(!r&&(t=Object.getPrototypeOf(t)));return r}function kf(t){return new Promise(function(e){return setTimeout(e,t)})}function Mf(t){var e=/[$()*+.?[\\\]^{|}]/g;return t.replace(e,"\\$&")}var R={};Object.defineProperty(R,"__esModule",{value:!0});R.isArray=Bf;R.isBoolean=Hf;R.isClass=$f;R.isFunction=Ha;R.isGetter=qf;R.isNumber=xf;R.isObject=Ff;R.isPromise=Vf;R.isRegexp=Gf;R.isStream=Wf;R.isString=Uf;R.isValue=V;var Lf=xe;function Uf(t){return V(t)&&Object.prototype.toString.call(t)==="[object String]"}function $f(t){return V(t)&&typeof t=="function"&&/class/i.test(t.toString())}function Ha(t){return V(t)&&["[object Function]","[object AsyncFunction]"].includes(Object.prototype.toString.call(t))}function Ff(t){return V(t)&&Object.prototype.toString.call(t)==="[object Object]"}function Bf(t){return V(t)&&Object.prototype.toString.call(t)==="[object Array]"}function Vf(t){return V(t)&&Object.prototype.toString.call(t)==="[object Promise]"}function V(t){return t!=null}function xf(t){return V(t)&&Object.prototype.toString.call(t)==="[object Number]"&&!Number.isNaN(t)}function Hf(t){return V(t)&&Object.prototype.toString.call(t)==="[object Boolean]"}function Wf(t){return V(t)&&Ha(t.pipe)}function qf(t,e){var r;return V(t)?!!((r=(0,Lf.getPropertyDescriptor)(t,e))!==null&&r!==void 0&&r.get):!1}function Gf(t){return V(t)&&Object.prototype.toString.call(t)==="[object RegExp]"}var C={};Object.defineProperty(C,"__esModule",{value:!0});C.existanceFilter=void 0;C.flatten=qa;C.groupBy=Zf;C.isUnique=Xf;C.last=Qf;C.passFilter=void 0;C.toArray=Hn;C.uniqueFilter=Wn;C.uniqueIdenticFilter=C.uniqueIdFilter=void 0;var hn=R;function Wa(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=zf(t))||e&&t&&typeof t.length=="number"){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(u){throw u},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,a=!1,o;return{s:function(){r=r.call(t)},n:function(){var u=r.next();return s=u.done,u},e:function(u){a=!0,o=u},f:function(){try{!s&&r.return!=null&&r.return()}finally{if(a)throw o}}}}function zf(t,e){if(t){if(typeof t=="string")return Di(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Di(t,e)}}function Di(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Hn(t){return(0,hn.isValue)(t)?(0,hn.isArray)(t)?t:[t]:[]}function Wn(t){return function(r,n,i){var s=t?i.findIndex(function(a){return t(r,a)}):i.indexOf(r);return s===n}}var Kf=Wn(function(t,e){return t.id===e.id});C.uniqueIdFilter=Kf;var Yf=Wn(function(t,e){return t===e});C.uniqueIdenticFilter=Yf;var jf=function(e){return(0,hn.isValue)(e)};C.existanceFilter=jf;var Jf=function(){return!0};C.passFilter=Jf;function qa(t){return Hn(t).reduce(function(e,r){return e.concat(Array.isArray(r)?qa(r):r)},[])}function Xf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.field,n=e.ignoreEmpty,i=new Map,s=Wa(t),a;try{for(s.s();!(a=s.n()).done;){var o=a.value,c=!n&&r?o[r]:o;if(!(n&&c==null)){if(i.has(c))return!1;i.set(c)}}}catch(u){s.e(u)}finally{s.f()}return!0}function Qf(t){return t[t.length-1]}function Zf(t,e){var r=Hn(e),n={},i=Wa(t),s;try{var a=function(){var c=s.value,u=r.map(function(l){return c[l]}).join(".");n[u]||(n[u]=[]),n[u].push(c)};for(i.s();!(s=i.n()).done;)a()}catch(o){i.e(o)}finally{i.f()}return n}var ut={};Object.defineProperty(ut,"__esModule",{value:!0});ut.cleanUndefined=Ga;ut.clone=ep;ut.isEmpty=tp;var fn=R;function Ga(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.cache,n=r===void 0?new Set:r;n.add(t);for(var i=0,s=Object.keys(t);i<s.length;i++){var a=s[i];if(t[a]===void 0&&delete t[a],(0,fn.isObject)(t[a])){if(n.has(t[a]))continue;Ga(t[a],{cache:n})}}return t}function ep(t){return JSON.parse(JSON.stringify(t))}function tp(t){var e=(0,fn.isObject)(t)&&Object.keys(t).length===0,r=(0,fn.isArray)(t)&&t.keys(t).length===0;return e||r}var Me={};Object.defineProperty(Me,"__esModule",{value:!0});Me.startBenchmark=Me.getBenchmark=void 0;var za=R,Jr,Xr,Qr,rp=1e6,qn=5;function np(t){var e=process.hrtime.bigint(),r=e-t,n=r/BigInt(rp);return Number(n).toFixed(qn)}function ip(){return process.hrtime.bigint()}function sp(){return performance.now(),performance.now()}function ap(t){var e=performance.now()-t;return e.toFixed(qn)}function op(){return new Date}function cp(t){var e=Date.now()-t;return e.toFixed(qn)}var Ka=typeof process<"u"&&(0,za.isFunction)((Jr=process)===null||Jr===void 0||(Xr=Jr.hrtime)===null||Xr===void 0?void 0:Xr.bigint),Ya=typeof performance<"u"&&(0,za.isFunction)((Qr=performance)===null||Qr===void 0?void 0:Qr.now),up=Ka&&np||Ya&&ap||cp;Me.getBenchmark=up;var lp=Ka&&ip||Ya&&sp||op;Me.startBenchmark=lp;var Te={};Object.defineProperty(Te,"__esModule",{value:!0});Te.random=Te.Random=void 0;function dp(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ci(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function hp(t,e,r){return e&&Ci(t.prototype,e),r&&Ci(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var ja=function(){function t(){dp(this,t)}return hp(t,[{key:"uniform",value:function(r,n){return Math.random()*(r-n)+n}},{key:"int",value:function(r,n){return Math.floor(this.uniform(r,n))}}]),t}();Te.Random=ja;var fp=new ja;Te.random=fp;var be={};Object.defineProperty(be,"__esModule",{value:!0});be.fill=Ap;be.getProp=Xa;be.retry=bp;be.searchFor=Pp;be.setProp=Rp;var Xe=R,pp=Te;function mp(t){return Ip(t)||vp(t)||gp(t)||_p()}function _p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gp(t,e){if(t){if(typeof t=="string")return ki(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ki(t,e)}}function ki(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function vp(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ip(t){if(Array.isArray(t))return t}var Ja=Symbol("myrmidon_retry_aborted");function Mi(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Error("Unknown Retry Abortion");throw t[Ja]=!0,t}var Ep=.5,yp=2,Tp=2;function wp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if((0,Xe.isNumber)(t))return t;if((0,Xe.isFunction)(t))return t(e);if((0,Xe.isObject)(t)){var r=t.randomize?pp.random.uniform(Ep,yp):1;return Math.min(r*t.min*Math.pow(t.factor||Tp,e),t.max)}}function Op(t,e,r){var n=r.retries,i=r.next;if(t[Ja]||e===n)throw t;i()}function bp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.onRetry,n=r===void 0?Op:r,i=e.retries,s=i===void 0?10:i,a=e.timeout,o=a===void 0?100:a;return new Promise(function(c,u){function l(m){try{var O=t(Mi,m);Promise.resolve(O).then(c).catch(function(N){return f(N,m)})}catch(N){f(N,m)}}function h(m){setTimeout(function(){return l(m+1)},wp(o,m+1))}function f(m,O){try{n(m,O,{retries:s,abort:Mi,next:function(){return h(O)}})}catch(N){u(N)}}l(0)})}function Xa(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.delimeter,i=n===void 0?".":n;return e.split(i).reduce(function(s,a){try{return s[a]}catch{return null}},t)}function Rp(t,e,r){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=n.delimiter,s=i===void 0?".":i,a=t;return e.split(s).forEach(function(o,c,u){var l=c===u.length-1;if(!(o in a)){if(l)return a[o]=r;var h=u[c+1],f=Number.isInteger(+h);a[o]=f?[]:{}}a=a[o]}),t}function Ap(t,e){for(var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.delimiters,i=n===void 0?["{","}"]:n,s=r.regExp,a=s||new RegExp("".concat(i[0],"(.+?)").concat(i[1]),"g"),o,c=t;(o=a.exec(t))!==null;){var u=o[1].trim();if(u){var l=Xa(e,u)||"";c=c.replace(o[0],l)}}return c}function Pp(t,e){var r=(0,Xe.isRegexp)(e)?e.flags:"",n=new RegExp((0,Xe.isRegexp)(e)?e.source:e,r.includes("g")?r:"".concat(r,"g")),i=[],s;do if(s=n.exec(t),s){var a=s,o=mp(a),c=o[0],u=o.slice(1),l=s,h=l.index,f=l.input;i.push({full:c,captures:u,index:h,input:f})}while(s);return i}var U={};Object.defineProperty(U,"__esModule",{value:!0});U.FunctionDecorator=U.ClassMethodDecorator=U.ClassDecorator=void 0;U.getMethodDescriptor=Za;U.rawMethodNames=U.getMethodNames=void 0;var we=R;function pn(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=Qa(t))||e&&t&&typeof t.length=="number"){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(u){throw u},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,a=!1,o;return{s:function(){r=r.call(t)},n:function(){var u=r.next();return s=u.done,u},e:function(u){a=!0,o=u},f:function(){try{!s&&r.return!=null&&r.return()}finally{if(a)throw o}}}}function Li(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function q(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Li(Object(r),!0).forEach(function(n){qt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Li(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function qt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Gn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ui(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function zn(t,e,r){return e&&Ui(t.prototype,e),r&&Ui(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function mn(t){return Dp(t)||Sp(t)||Qa(t)||Np()}function Np(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qa(t,e){if(t){if(typeof t=="string")return _n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _n(t,e)}}function Sp(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Dp(t){if(Array.isArray(t))return _n(t)}function _n(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Cp=function t(e){return e&&e!==Object.prototype&&[].concat(mn(Object.getOwnPropertyNames(e).filter(function(r){return(0,we.isGetter)(e,r)||(0,we.isFunction)(e[r])})),mn(t(Object.getPrototypeOf(e))||[]))},Dt=function(e){return mn(new Set(Cp(e)))};U.rawMethodNames=Dt;var kp=function(e){return Dt(e).filter(function(r){return r!=="constructor"&&r.indexOf("_")!==0})};U.getMethodNames=kp;function Za(t,e){return e.hasOwnProperty(t)?Object.getOwnPropertyDescriptor(e,t):{configurable:!0,enumerable:!0,writable:!0,value:e[t]}}var eo=function(){function t(e){var r=e.config;Gn(this,t),this.config=r}return zn(t,[{key:"prepareData",value:function(r){var n=r.context,i=r.methodName;return{context:n,methodName:i,config:this.config}}},{key:"onParams",value:function(r){var n=r.params;return n}},{key:"onSuccess",value:function(r){var n=r.result;return n}},{key:"onError",value:function(r){throw r}},{key:"run",value:function(r){var n=this,i=n.config.methodName||r.name;return function(){for(var s=n.prepareData({context:this,methodName:i,config:n.config}),a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];var u=n.onParams(q({params:o},s)),l=q({rawParams:o,params:u},s);try{var h=r==null?void 0:r.apply(this,u);return(0,we.isPromise)(h)?h.then(function(f){return n.onSuccess(q({result:f},l))}).catch(function(f){return n.onError(q({error:f},l))}):n.onSuccess(q({result:h},l))}catch(f){n.onError(q({error:f},l))}}}}]),t}();U.FunctionDecorator=eo;var Kn=function(){function t(e){var r=e.methodName,n=e.descriptor,i=e.config,s=e.target;Gn(this,t),this.methods=["value","initializer"],this.methodName=r,this.descriptor=n,this.config=i,this.target=s,this.functionDecorator=new this.constructor.FunctionDecorator({config:this.getFunctionDecoratorConfig()})}return zn(t,[{key:"getFunctionDecoratorConfig",value:function(){return q(q({},this.config),{},{methodName:this.methodName})}},{key:"handle_initializer",value:function(r){var n=this.functionDecorator,i=this.target;return function(){return n.run(r.call(i))}}},{key:"handle",value:function(r){return this.functionDecorator.run(r)}},{key:"run",value:function(){var r=this,n=this.methods.filter(function(c){return r.descriptor[c]&&(0,we.isFunction)(r.descriptor[c])}),i=pn(n),s;try{for(i.s();!(s=i.n()).done;){var a=s.value,o=this.descriptor[a];this.descriptor[a]=(0,we.isFunction)(this["handle_".concat(a)])?this["handle_".concat(a)](o):this.handle(o)}}catch(c){i.e(c)}finally{i.f()}return this.descriptor}}]),t}();U.ClassMethodDecorator=Kn;qt(Kn,"FunctionDecorator",eo);var to=function(){function t(e){var r=e.config;Gn(this,t),qt(this,"_unsafeFunctionProps",["caller","callee","arguments"]),this.config=r}return zn(t,[{key:"decorate",value:function(r){return(0,we.isClass)(r)?this.decorateClass(r):(0,we.isFunction)(r)?this.decorateFunction(r):this.decorateClass(r)}},{key:"getFunctionDecoratorConfig",value:function(r){var n=r.target;return q(q({},this.config),{},{methodName:n.name})}},{key:"decorateFunction",value:function(r){var n=new this.constructor.ClassMethodDecorator.FunctionDecorator({config:this.getFunctionDecoratorConfig({target:r})}),i=n.run(r),s=pn(Dt(r)),a;try{for(s.s();!(a=s.n()).done;){var o=a.value;this._unsafeFunctionProps.includes(o)||(this.filterMethodName(o)?i[o]=n.run(r[o]):i[o]=r[o])}}catch(c){s.e(c)}finally{s.f()}return i}},{key:"filterMethodName",value:function(r){return!this._unsafeFunctionProps.includes(r)}},{key:"getClassMethodDecoratorConfig",value:function(){return this.config}},{key:"decorateClass",value:function(r){var n=this,i=Dt(r).filter(function(l){return n.filterMethodName(l)}),s=pn(i),a;try{for(s.s();!(a=s.n()).done;){var o=a.value,c=Za(o,r);if(c){var u=new this.constructor.ClassMethodDecorator({methodName:o,descriptor:c,target:r,config:this.getClassMethodDecoratorConfig({methodName:o,descriptor:c,target:r})});Object.defineProperty(r,o,u.run())}}}catch(l){s.e(l)}finally{s.f()}return r}}]),t}();U.ClassDecorator=to;qt(to,"ClassMethodDecorator",Kn);(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=xe;Object.keys(e).forEach(function(u){u==="default"||u==="__esModule"||u in t&&t[u]===e[u]||Object.defineProperty(t,u,{enumerable:!0,get:function(){return e[u]}})});var r=R;Object.keys(r).forEach(function(u){u==="default"||u==="__esModule"||u in t&&t[u]===r[u]||Object.defineProperty(t,u,{enumerable:!0,get:function(){return r[u]}})});var n=C;Object.keys(n).forEach(function(u){u==="default"||u==="__esModule"||u in t&&t[u]===n[u]||Object.defineProperty(t,u,{enumerable:!0,get:function(){return n[u]}})});var i=ut;Object.keys(i).forEach(function(u){u==="default"||u==="__esModule"||u in t&&t[u]===i[u]||Object.defineProperty(t,u,{enumerable:!0,get:function(){return i[u]}})});var s=Me;Object.keys(s).forEach(function(u){u==="default"||u==="__esModule"||u in t&&t[u]===s[u]||Object.defineProperty(t,u,{enumerable:!0,get:function(){return s[u]}})});var a=Te;Object.keys(a).forEach(function(u){u==="default"||u==="__esModule"||u in t&&t[u]===a[u]||Object.defineProperty(t,u,{enumerable:!0,get:function(){return a[u]}})});var o=be;Object.keys(o).forEach(function(u){u==="default"||u==="__esModule"||u in t&&t[u]===o[u]||Object.defineProperty(t,u,{enumerable:!0,get:function(){return o[u]}})});var c=U;Object.keys(c).forEach(function(u){u==="default"||u==="__esModule"||u in t&&t[u]===c[u]||Object.defineProperty(t,u,{enumerable:!0,get:function(){return c[u]}})})})(xa);(function(t){function e(o){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},e(o)}Object.defineProperty(t,"__esModule",{value:!0});var r={};t.default=void 0;var n=s(xa);Object.keys(n).forEach(function(o){o==="default"||o==="__esModule"||Object.prototype.hasOwnProperty.call(r,o)||o in t&&t[o]===n[o]||Object.defineProperty(t,o,{enumerable:!0,get:function(){return n[o]}})});function i(o){if(typeof WeakMap!="function")return null;var c=new WeakMap,u=new WeakMap;return(i=function(h){return h?u:c})(o)}function s(o,c){if(!c&&o&&o.__esModule)return o;if(o===null||e(o)!=="object"&&typeof o!="function")return{default:o};var u=i(c);if(u&&u.has(o))return u.get(o);var l={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in o)if(f!=="default"&&Object.prototype.hasOwnProperty.call(o,f)){var m=h?Object.getOwnPropertyDescriptor(o,f):null;m&&(m.get||m.set)?Object.defineProperty(l,f,m):l[f]=o[f]}return l.default=o,u&&u.set(o,l),l}var a=n;t.default=a})(k);var Gt={},W={},zt={};Object.defineProperty(zt,"__esModule",{value:!0});zt.ASCII_RANGES=void 0;const Mp={control:{min:0,max:31},numeric:{min:48,max:57},upperAlpha:{min:65,max:90},lowerAlpha:{min:97,max:122}};zt.ASCII_RANGES=Mp;Object.defineProperty(W,"__esModule",{value:!0});W.Mask=void 0;W.isASCII=Up;W.setProp=Fp;var Lp=zt;function Up(t,e){const{min:r,max:n}=Lp.ASCII_RANGES[t];return e<=n&&e>=r}class $p{constructor(e,r){this.pattern=e,this.FormatChars=r,this.parse()}parse(){this._mask=[];let e=!1,r=!1;for(const n of this.pattern){if(e){this._mask.push({type:"constant",optional:r,symbol:n}),e=r=!1;continue}if(n==="\\"){e=!0;continue}if(n==="?"){r=!0;continue}const i=this.FormatChars[n];if(i){this._mask.push({type:"format",format:i,optional:r}),r=!1;continue}r=!1,this._mask.push({type:"constant",symbol:n,optional:r})}}validate(e){let r=-1;for(const n of this._mask){const i=r+1,s=e[i];let a=!1;if(n.type==="constant"&&(a=n.symbol===s),n.type==="format"&&(a=n.format(s)),!a){if(!n.optional)return{check:n,value:s};continue}r=i}if(r!==e.length-1)return{check:null,value:e[r+1]}}}W.Mask=$p;function Fp(t,e,r,{delimiter:n="."}={}){let i=t;e.split(n).forEach((s,a,o)=>{const c=a===o.length-1;if(!(s in i)){if(c)return i[s]=r;const u=o[a+1],l=Number.isInteger(+u);i[s]=l?[]:{}}i=i[s]})}var He={};Object.defineProperty(He,"__esModule",{value:!0});He.default=void 0;var Bp=W;function Vp(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function $i(t,e,r){xp(t,e),e.set(t,r)}function xp(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Zr(t,e){var r=ro(t,e,"get");return Hp(t,r)}function Hp(t,e){return e.get?e.get.call(t):e.value}function Fi(t,e,r){var n=ro(t,e,"set");return Wp(t,n,r),r}function ro(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}function Wp(t,e,r){if(e.set)e.set.call(t,r);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=r}}var Bi=new WeakMap,Ge=new WeakMap;class qp extends Error{constructor(e,r){super(),$i(this,Bi,{writable:!0,value:void 0}),$i(this,Ge,{writable:!0,value:void 0}),Vp(this,"isValidationError",!0),this.name=this.constructor.name,Fi(this,Bi,e),Fi(this,Ge,r)}get errors(){return Zr(this,Ge)}get message(){return`Validation Failed: ${Zr(this,Ge).length} error(s) occured
${this.prettify}`}get prettify(){const e={};for(const r of this.errors){const n=`${r.code}: ${r.message}`;(0,Bp.setProp)(e,r.path.join("."),n)}return JSON.stringify(e,null,2)}get hash(){return{code:"VALIDATION_ERROR",details:Zr(this,Ge).map(e=>e.hash)}}toJSON(){return JSON.stringify(this.hash)}}He.default=qp;Object.defineProperty(Gt,"__esModule",{value:!0});Gt.default=void 0;var Gp=W,zp=Kp(He);function Kp(t){return t&&t.__esModule?t:{default:t}}function Yp(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class jp extends zp.default{constructor(...e){super(...e),Yp(this,"isAssemblerError",!0)}get prettify(){const e={};for(const r of this.errors){const n=r.error.errors[0],i=`${n.code}: ${n.message}`;(0,Gp.setProp)(e,r.path.join("."),i)}return JSON.stringify(e,null,2)}}Gt.default=jp;Object.defineProperty(xn,"__esModule",{value:!0});var no=xn.default=void 0,Ne=k,Jp=Qp(Gt),Xp=W;function Qp(t){return t&&t.__esModule?t:{default:t}}class Zp{constructor({data:e,cache:r,assembler:n}){this.data=e,this.cache=r,this.assembler=n}source(){return[{type:"source",validators:this.data.$validate,placeholder:this.data.$source}]}complex_array(e){const r=[];for(const[n,i]of Object.entries(this.data.$validate))for(const s of this.assembler.parseObject(i,{cache:this.cache})){const a=s.path||[];r.push({type:e.type,inner:{...s,path:[n,...a]},placeholder:{prefix:e.prefix},path:[]})}return r}simple_array(e){return[{type:e.type,validators:this.data.$validate,placeholder:{prefix:e.prefix},path:[]}]}placeholder(e){return[{type:"source",validators:this.data.$validate,placeholder:e.template,condition:e.if}]}constant(){return[{type:"constant",data:this.data}]}object(){const e=[];for(const[r,n]of Object.entries(this.data)){const i=this.assembler.parseObject(n,{cache:this.cache});for(const s of i){const a=s.path||[];e.push({...s,path:[r,...a]})}}return e}}class em{constructor({command:e,out:r,dict:n,errors:i,assembler:s}){this.command=e,this.out=r,this.dict=n,this.assembler=s,this.errors=i}run({path:e,data:r,validators:n,template:i}){let s=r;if(n)try{s=this.assembler._cottus.compile(n).validate(s)}catch(a){return this.errors.push({error:a,template:i,path:e,data:r})}return(0,Xp.setProp)(this.out,e.join("."),s)}constant(){return this.run({path:this.command.path,data:this.command.data,validators:this.command.validators})}source(){const e=(0,Ne.fill)(this.command.placeholder,this.dict),r=this.assembler._options.trim?e.trim():e,n=r===""?this.assembler._options.empty:r;return this.run({path:this.command.path,data:n,validators:this.command.validators,template:this.command.placeholder})}simple_array(){const e=Object.keys(this.dict).filter(r=>r.startsWith(this.command.placeholder.prefix));for(let r=0;;r++){const n=`${this.command.placeholder.prefix}${r}`,i=e.find(s=>s===n);if(!i)break;this.run({path:[...this.command.path,r],data:this.dict[i],validators:this.command.validators,template:n})}}complex_array(){const e=Object.keys(this.dict).filter(r=>r.startsWith(this.command.placeholder.prefix));for(let r=0;;r++){const n=`${this.command.placeholder.prefix}${r}`,i=e.filter(a=>a.startsWith(n));if(i.length===0)break;const s={};i.forEach(a=>{s[a.slice(n.length)]=this.dict[a]}),this.assembler.executeCMD({...this.command.inner,path:[...this.command.path,r,...this.command.inner.path]},{out:this.out,dict:{...this.dict,...s},errors:this.errors})}}}class tm{constructor(e,r,n={}){this._schema=r,this._cottus=e,this._options={trim:!0,empty:null,...n}}parse(){this._commands=this.parseObject(this._schema)}parseObject(e,{cache:r=[]}={}){const n=new Zp({data:e,cache:r,assembler:this});if(~r.indexOf(e))return[];if(r.push(e),(0,Ne.isObject)(e)){if(e.$source){const i=[];if((0,Ne.isString)(e.$source)&&i.push(...n.source()),(0,Ne.isObject)(e.$source)){const s=e.$source,a=s.type||"placeholder";if(!(0,Ne.isFunction)(n[a]))throw new Error(`Unrecognized source [${a}]`);i.push(...n[a](s))}return i}return n.object()}return n.constant()}executeCMD(e,{out:r,dict:n,errors:i}){const s=new em({command:e,out:r,dict:n,errors:i,assembler:this}),a=e.type;if(!(0,Ne.isFunction)(s[a]))throw new Error(`Unrecognized command [${a}]`);s[a]()}run(e){const r={},n=[];for(const i of this._commands)this.executeCMD(i,{out:r,dict:e,errors:n});if(n.length>0)throw new Jp.default(this._cottus,n);return r}}no=xn.default=tm;var Yn={},Kt={},A={},Yt={},_={};Object.defineProperty(_,"__esModule",{value:!0});_.default=void 0;class rm extends Error{constructor(e){super(),this.payload=e,this.name=this.constructor.name}get hash(){const e={value:this.value,path:this.path,code:this.code,message:this.message};return this.params&&(e.payload=this.params),e}setContext({value:e,path:r}){this.value=e,this.path=r,this.hasContext=!0}}_.default=rm;Object.defineProperty(Yt,"__esModule",{value:!0});Yt.default=void 0;var nm=im(_);function im(t){return t&&t.__esModule?t:{default:t}}function Vi(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class sm extends nm.default{constructor(...e){super(...e),Vi(this,"message","The value is required"),Vi(this,"code","REQUIRED")}}Yt.default=sm;var jt={};Object.defineProperty(jt,"__esModule",{value:!0});jt.default=void 0;var am=om(_);function om(t){return t&&t.__esModule?t:{default:t}}function xi(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class cm extends am.default{constructor(...e){super(...e),xi(this,"message","The number didn't look like a valid TCP port number [0, 65535]"),xi(this,"code","WRONG_PORT_NUMBER")}}jt.default=cm;var Jt={};Object.defineProperty(Jt,"__esModule",{value:!0});Jt.default=void 0;var um=lm(_);function lm(t){return t&&t.__esModule?t:{default:t}}function Hi(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class dm extends um.default{constructor(...e){super(...e),Hi(this,"message","The value have to be plain js object"),Hi(this,"code","NOT_OBJECT")}}Jt.default=dm;var Xt={};Object.defineProperty(Xt,"__esModule",{value:!0});Xt.default=void 0;var hm=fm(_);function fm(t){return t&&t.__esModule?t:{default:t}}function Wi(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class pm extends hm.default{constructor(...e){super(...e),Wi(this,"message","The value have to be plain js array"),Wi(this,"code","NOT_ARRAY")}}Xt.default=pm;var Qt={};Object.defineProperty(Qt,"__esModule",{value:!0});Qt.default=void 0;var mm=_m(_);function _m(t){return t&&t.__esModule?t:{default:t}}function qi(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class gm extends mm.default{constructor(...e){super(...e),qi(this,"message","The number is not a valid integer"),qi(this,"code","NOT_INTEGER")}}Qt.default=gm;var Zt={};Object.defineProperty(Zt,"__esModule",{value:!0});Zt.default=void 0;var vm=Im(_);function Im(t){return t&&t.__esModule?t:{default:t}}function Gi(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class Em extends vm.default{constructor(...e){super(...e),Gi(this,"message","The value is not a number or could not be cast to a number"),Gi(this,"code","NOT_NUMBER")}}Zt.default=Em;var er={};Object.defineProperty(er,"__esModule",{value:!0});er.default=void 0;var ym=Tm(_);function Tm(t){return t&&t.__esModule?t:{default:t}}function zi(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class wm extends ym.default{constructor(...e){super(...e),zi(this,"message","Format not supported"),zi(this,"code","WRONG_FORMAT")}}er.default=wm;var tr={};Object.defineProperty(tr,"__esModule",{value:!0});tr.default=void 0;var Om=bm(_);function bm(t){return t&&t.__esModule?t:{default:t}}function Ki(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class Rm extends Om.default{constructor(...e){super(...e),Ki(this,"message","The number is lower than the limit"),Ki(this,"code","TOO_LOW")}get params(){return{limit:this.payload}}}tr.default=Rm;var rr={};Object.defineProperty(rr,"__esModule",{value:!0});rr.default=void 0;var Am=Pm(_);function Pm(t){return t&&t.__esModule?t:{default:t}}function Yi(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class Nm extends Am.default{constructor(...e){super(...e),Yi(this,"message","The value is shorter than the limit"),Yi(this,"code","TOO_SHORT")}get params(){return{limit:this.payload}}}rr.default=Nm;var nr={};Object.defineProperty(nr,"__esModule",{value:!0});nr.default=void 0;var Sm=Dm(_);function Dm(t){return t&&t.__esModule?t:{default:t}}function ji(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class Cm extends Sm.default{constructor(...e){super(...e),ji(this,"message","The value is longer than the limit"),ji(this,"code","TOO_LONG")}get params(){return{limit:this.payload}}}nr.default=Cm;var ir={};Object.defineProperty(ir,"__esModule",{value:!0});ir.default=void 0;var km=Mm(_);function Mm(t){return t&&t.__esModule?t:{default:t}}function Ji(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class Lm extends km.default{constructor(...e){super(...e),Ji(this,"message","The number is higher than the limit"),Ji(this,"code","TOO_HIGH")}get params(){return{limit:this.payload}}}ir.default=Lm;var sr={};Object.defineProperty(sr,"__esModule",{value:!0});sr.default=void 0;var Um=$m(_);function $m(t){return t&&t.__esModule?t:{default:t}}function Xi(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}let Fm=class extends Um.default{constructor(...e){super(...e),Xi(this,"message","The value is not a string"),Xi(this,"code","NOT_STRING")}};sr.default=Fm;var ar={};Object.defineProperty(ar,"__esModule",{value:!0});ar.default=void 0;var Bm=Vm(_);function Vm(t){return t&&t.__esModule?t:{default:t}}function Qi(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class xm extends Bm.default{constructor(...e){super(...e),Qi(this,"message","The value is not a valid base64 encoded string"),Qi(this,"code","NOT_BASE64")}}ar.default=xm;var or={};Object.defineProperty(or,"__esModule",{value:!0});or.default=void 0;var Hm=Wm(_);function Wm(t){return t&&t.__esModule?t:{default:t}}function Zi(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class qm extends Hm.default{constructor(...e){super(...e),Zi(this,"message","string can not be used as legal file path"),Zi(this,"code","ILLEGAL_PATH")}}or.default=qm;var cr={};Object.defineProperty(cr,"__esModule",{value:!0});cr.default=void 0;var Gm=zm(_);function zm(t){return t&&t.__esModule?t:{default:t}}function es(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class Km extends Gm.default{constructor(...e){super(...e),es(this,"message","The value is invalid URL"),es(this,"code","INVALID_URL")}}cr.default=Km;var ur={};Object.defineProperty(ur,"__esModule",{value:!0});ur.default=void 0;var Ym=jm(_);function jm(t){return t&&t.__esModule?t:{default:t}}function ts(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class Jm extends Ym.default{constructor(...e){super(...e),ts(this,"message","Host not valid"),ts(this,"code","INVALID_HOST")}}ur.default=Jm;var lr={};Object.defineProperty(lr,"__esModule",{value:!0});lr.default=void 0;var Xm=Qm(_);function Qm(t){return t&&t.__esModule?t:{default:t}}function rs(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class Zm extends Xm.default{constructor(...e){super(...e),rs(this,"message","The value is not a boolean or could not be cast to a boolean"),rs(this,"code","NOT_BOOLEAN")}}lr.default=Zm;var dr={};Object.defineProperty(dr,"__esModule",{value:!0});dr.default=void 0;var e_=t_(_);function t_(t){return t&&t.__esModule?t:{default:t}}function ns(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class r_ extends e_.default{constructor(...e){super(...e),ns(this,"message","The value is not a valid rfc5322 email format"),ns(this,"code","WRONG_EMAIL")}}dr.default=r_;var hr={};Object.defineProperty(hr,"__esModule",{value:!0});hr.default=void 0;var n_=i_(_);function i_(t){return t&&t.__esModule?t:{default:t}}function is(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class s_ extends n_.default{constructor(...e){super(...e),is(this,"message","The value is not a valid UUID v4"),is(this,"code","NOT_UUID")}}hr.default=s_;var fr={};Object.defineProperty(fr,"__esModule",{value:!0});fr.default=void 0;var a_=o_(_);function o_(t){return t&&t.__esModule?t:{default:t}}function ss(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class c_ extends a_.default{constructor(...e){super(...e),ss(this,"message","The value is not allowed"),ss(this,"code","NOT_ALLOWED_VALUE")}}fr.default=c_;var pr={};Object.defineProperty(pr,"__esModule",{value:!0});pr.default=void 0;var u_=l_(_);function l_(t){return t&&t.__esModule?t:{default:t}}function as(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class d_ extends u_.default{constructor(...e){super(...e),as(this,"message","The value can not be parsed as time unit"),as(this,"code","WRONG_TIME_UNIT")}}pr.default=d_;var mr={};Object.defineProperty(mr,"__esModule",{value:!0});mr.default=void 0;var h_=f_(_);function f_(t){return t&&t.__esModule?t:{default:t}}function os(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class p_ extends h_.default{constructor(...e){super(...e),os(this,"message","The value can not be parsed as cron string"),os(this,"code","INVALID_CRON")}}mr.default=p_;var _r={};Object.defineProperty(_r,"__esModule",{value:!0});_r.default=void 0;var m_=__(_);function __(t){return t&&t.__esModule?t:{default:t}}function cs(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class g_ extends m_.default{constructor(...e){super(...e),cs(this,"message","The value is not a valid date"),cs(this,"code","NOT_DATE")}}_r.default=g_;var gr={};Object.defineProperty(gr,"__esModule",{value:!0});gr.default=void 0;var v_=I_(_);function I_(t){return t&&t.__esModule?t:{default:t}}function us(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class E_ extends v_.default{constructor(...e){super(...e),us(this,"message","Key header invalid"),us(this,"code","BAD_ENCRYPTION_HEADER")}}gr.default=E_;var vr={};Object.defineProperty(vr,"__esModule",{value:!0});vr.default=void 0;var y_=T_(_);function T_(t){return t&&t.__esModule?t:{default:t}}function ls(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class w_ extends y_.default{constructor(...e){super(...e),ls(this,"message","Key footer invalid"),ls(this,"code","BAD_ENCRYPTION_FOOTER")}}vr.default=w_;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BAD_ENCRYPTION_FOOTER",{enumerable:!0,get:function(){return qe.default}}),Object.defineProperty(t,"BAD_ENCRYPTION_HEADER",{enumerable:!0,get:function(){return pe.default}}),Object.defineProperty(t,"ILLEGAL_PATH",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"INVALID_CRON",{enumerable:!0,get:function(){return J.default}}),Object.defineProperty(t,"INVALID_HOST",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"INVALID_URL",{enumerable:!0,get:function(){return N.default}}),Object.defineProperty(t,"NOT_ALLOWED_VALUE",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"NOT_ARRAY",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"NOT_BASE64",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"NOT_BOOLEAN",{enumerable:!0,get:function(){return Y.default}}),Object.defineProperty(t,"NOT_DATE",{enumerable:!0,get:function(){return Ae.default}}),Object.defineProperty(t,"NOT_INTEGER",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"NOT_NUMBER",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"NOT_OBJECT",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"NOT_STRING",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"NOT_UUID",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"REQUIRED",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(t,"TOO_HIGH",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"TOO_LONG",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"TOO_LOW",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"TOO_SHORT",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"WRONG_EMAIL",{enumerable:!0,get:function(){return Re.default}}),Object.defineProperty(t,"WRONG_FORMAT",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"WRONG_PORT_NUMBER",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"WRONG_TIME_UNIT",{enumerable:!0,get:function(){return j.default}});var e=g(Yt),r=g(jt),n=g(Jt),i=g(Xt),s=g(Qt),a=g(Zt),o=g(er),c=g(tr),u=g(rr),l=g(nr),h=g(ir),f=g(sr),m=g(ar),O=g(or),N=g(cr),P=g(ur),Y=g(lr),Re=g(dr),$=g(hr),S=g(fr),j=g(pr),J=g(mr),Ae=g(_r),pe=g(gr),qe=g(vr);function g(dt){return dt&&dt.__esModule?dt:{default:dt}}})(A);var y={};Object.defineProperty(y,"__esModule",{value:!0});y.default=void 0;var O_=k;function b_(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class io{constructor({params:e,validator:r}){this.validator=r,this.cottus=this.validator._cottus,this.params=e}createNestedValidator(e,r){return this.cottus.compile(e,{parent:this.validator,key:r})}createValidator(e){return this.cottus.compile(e,{parent:this.validator,notLink:!0})}createChildRule(e){return new e({validator:this.validator})}run(e){const{defaultError:r,errors:n}=this.constructor;if(this.constructor.isOptional&&!(0,O_.isValue)(e))return e;try{return this.alias?this.createValidator(this.alias).validate(e):this.validate(e)}catch(s){throw r&&!(n!=null&&n.some(a=>s instanceof a))?r(s):s}}}y.default=io;b_(io,"isOptional",!0);Object.defineProperty(Kt,"__esModule",{value:!0});Kt.default=void 0;var R_=k,A_=A,P_=N_(y);function N_(t){return t&&t.__esModule?t:{default:t}}function so(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class jn extends P_.default{validate(e){if(!(0,R_.isValue)(e))throw new A_.REQUIRED;return e}}Kt.default=jn;so(jn,"schema","required");so(jn,"isOptional",!1);var Ir={};Object.defineProperty(Ir,"__esModule",{value:!0});Ir.default=void 0;var ao=A,S_=D_(y);function D_(t){return t&&t.__esModule?t:{default:t}}function Er(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class yr extends S_.default{constructor(...e){super(...e),Er(this,"alias",["integer",{min:0},{max:65535}])}}Ir.default=yr;Er(yr,"schema","port");Er(yr,"errors",[ao.NOT_NUMBER]);Er(yr,"defaultError",()=>new ao.WRONG_PORT_NUMBER);var Tr={};Object.defineProperty(Tr,"__esModule",{value:!0});Tr.default=void 0;var C_=k,k_=A,M_=L_(y);function L_(t){return t&&t.__esModule?t:{default:t}}function U_(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class oo extends M_.default{validate(e){if(!(0,C_.isObject)(e))throw new k_.NOT_OBJECT;const r={};for(const n of Object.keys(this.params)){const i=this.createNestedValidator(this.params[n],n);r[n]=i.validate(e[n])}return r}}Tr.default=oo;U_(oo,"schema","attributes");var wr={};Object.defineProperty(wr,"__esModule",{value:!0});wr.default=void 0;var $_=k,F_=A,B_=V_(y);function V_(t){return t&&t.__esModule?t:{default:t}}function x_(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class co extends B_.default{validate(e){if(!(0,$_.isArray)(e))throw new F_.NOT_ARRAY;const r=[],n=this.params;for(const i of e){const s=this.createNestedValidator(n,r.length);r.push(s.validate(i))}return r}}wr.default=co;x_(co,"schema","every");var Or={},We={};Object.defineProperty(We,"__esModule",{value:!0});We.default=void 0;var ds=k,H_=A,W_=q_(y);function q_(t){return t&&t.__esModule?t:{default:t}}function G_(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class uo extends W_.default{validate(e){const r=(0,ds.isString)(e)?Number.parseFloat(e):e;if(!(0,ds.isNumber)(r))throw new H_.NOT_NUMBER;return r}}We.default=uo;G_(uo,"schema","number");Object.defineProperty(Or,"__esModule",{value:!0});Or.default=void 0;var z_=A,K_=lo(We),Y_=lo(y);function lo(t){return t&&t.__esModule?t:{default:t}}function j_(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class ho extends Y_.default{validate(e){const n=this.createChildRule(K_.default).validate(e);if(!Number.isInteger(n))throw new z_.NOT_INTEGER;return n}}Or.default=ho;j_(ho,"schema","integer");var br={};Object.defineProperty(br,"__esModule",{value:!0});br.default=void 0;var en=k,mt=A,J_=X_(y);function X_(t){return t&&t.__esModule?t:{default:t}}function Q_(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class fo extends J_.default{validate(e){const r=this.params;if((0,en.isNumber)(e)){if(e<r)throw new mt.TOO_LOW(r);return e}if((0,en.isString)(e)){if(e.length<r)throw new mt.TOO_SHORT(r);return e}if((0,en.isArray)(e)){if(e.length<r)throw new mt.TOO_SHORT(r);return e}throw new mt.WRONG_FORMAT}}br.default=fo;Q_(fo,"schema","min");var Rr={};Object.defineProperty(Rr,"__esModule",{value:!0});Rr.default=void 0;var tn=k,_t=A,Z_=eg(y);function eg(t){return t&&t.__esModule?t:{default:t}}function tg(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class po extends Z_.default{validate(e){const r=this.params;if((0,tn.isNumber)(e)){if(e>r)throw new _t.TOO_HIGH(r);return e}if((0,tn.isString)(e)){if(e.length>r)throw new _t.TOO_LONG(r);return e}if((0,tn.isArray)(e)){if(e.length>r)throw new _t.TOO_LONG(r);return e}throw new _t.WRONG_FORMAT}}Rr.default=po;tg(po,"schema","max");var K={};Object.defineProperty(K,"__esModule",{value:!0});K.default=void 0;var rg=k,ng=A,ig=sg(y);function sg(t){return t&&t.__esModule?t:{default:t}}function ag(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class mo extends ig.default{validate(e){if(!(0,rg.isString)(e))throw new ng.NOT_STRING;return e}}K.default=mo;ag(mo,"schema","string");var lt={};Object.defineProperty(lt,"__esModule",{value:!0});lt.default=void 0;var og=A,cg=_o(K),ug=_o(y);function _o(t){return t&&t.__esModule?t:{default:t}}function lg(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class go extends ug.default{validate(e){const n=this.createChildRule(cg.default).validate(e);if(!(Buffer.from(n,"base64").toString("base64")===n))throw new og.NOT_BASE64;return n}}lt.default=go;lg(go,"schema","base64");var Ar={};Object.defineProperty(Ar,"__esModule",{value:!0});Ar.default=void 0;var dg=k,hs=A,hg=Jn(lt),fg=Jn(K),pg=Jn(y);function Jn(t){return t&&t.__esModule?t:{default:t}}function mg(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class vo extends pg.default{validate(e){const n=this.createChildRule(fg.default).validate(e),i=n.trim().split(`
`),s=i[0],a=(0,dg.last)(i);if(!s.startsWith("-----BEGIN")||!s.endsWith("KEY-----"))throw new hs.BAD_ENCRYPTION_HEADER;if(!a.startsWith("-----END")||!a.endsWith("KEY-----"))throw new hs.BAD_ENCRYPTION_FOOTER;const o=i.slice(1,-2).join("");return this.createChildRule(hg.default).validate(o),n}}Ar.default=vo;mg(vo,"schema",["encryption_key","encryptionKey"]);var Pr={};Object.defineProperty(Pr,"__esModule",{value:!0});Pr.default=void 0;var _g=A,gg=vg(y);function vg(t){return t&&t.__esModule?t:{default:t}}function Ig(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const Eg=new Set([1,"true",!0]),yg=new Set([0,"false",!1]);class Io extends gg.default{validate(e){if(Eg.has(e))return!0;if(yg.has(e))return!1;throw new _g.NOT_BOOLEAN}}Pr.default=Io;Ig(Io,"schema","boolean");var Nr={};Object.defineProperty(Nr,"__esModule",{value:!0});Nr.default=void 0;var fs=A,rn=W,Tg=Eo(K),wg=Eo(y);function Eo(t){return t&&t.__esModule?t:{default:t}}function Og(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const bg=new Set(["!","#","$","%","&","'","*","+","-","/","=","?","^","_","`","{","|","}","~"]),Rg=new Set(["(",")","<","[",":","@",",",">","]",";","\\",".",'"']);function Ag(t){return t>=33&&t<=90||t>=94&&t<=126}function ps(t){return[...t].every((e,r)=>{const n=e.codePointAt(0);return!!((0,rn.isASCII)("numeric",n)||(0,rn.isASCII)("upperAlpha",n)||(0,rn.isASCII)("lowerAlpha",n)||bg.has(e)||e==="."&&r!==0&&r!==t.length-1)})}function Pg(t){return t[0]==='"'&&t[t.length-1]==='"'?[...t.slice(1,-2)].some(r=>Rg.has(r)):!1}class yo extends wg.default{validate(e){const n=this.createChildRule(Tg.default).validate(e),[i,...s]=n.split("@").reverse(),a=s.reverse().join("@");if(!ps(a)&&!Pg(a))throw new fs.WRONG_EMAIL("LOCAL-PART");if(!ps(i)&&![...i].every(o=>Ag(o.codePointAt(0))))throw new fs.WRONG_EMAIL("DOMAIN-PART");return n}}Nr.default=yo;Og(yo,"schema","email");var Sr={};Object.defineProperty(Sr,"__esModule",{value:!0});Sr.default=void 0;var Ng=A,Sg=W,Dg=To(K),Cg=To(y);function To(t){return t&&t.__esModule?t:{default:t}}function kg(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const Mg=new Set("0123456789abcdef"),Lg={f:t=>Mg.has(t),v:t=>t==="4"},Ug=new Sg.Mask("ffffffff-ffff-vfff-ffff-ffffffffffff",Lg);class wo extends Cg.default{validate(e){const n=this.createChildRule(Dg.default).validate(e);if(Ug.validate(n))throw new Ng.NOT_UUID;return n}}Sr.default=wo;kg(wo,"schema","uuid");var Dr={};Object.defineProperty(Dr,"__esModule",{value:!0});Dr.default=void 0;var $g=A,Fg=Bg(y);function Bg(t){return t&&t.__esModule?t:{default:t}}function Vg(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class Oo extends Fg.default{validate(e){if(!this.params.includes(e))throw new $g.NOT_ALLOWED_VALUE;return e}}Dr.default=Oo;Vg(Oo,"schema","enum");var Cr={};Object.defineProperty(Cr,"__esModule",{value:!0});Cr.default=void 0;var xg=k,Hg=Wg(y);function Wg(t){return t&&t.__esModule?t:{default:t}}function bo(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class Xn extends Hg.default{validate(e){return(0,xg.isValue)(e)?e:this.params}}Cr.default=Xn;bo(Xn,"schema","default");bo(Xn,"isOptional",!1);var kr={};Object.defineProperty(kr,"__esModule",{value:!0});kr.default=void 0;var ms=k,gn=A,_s=W,qg=Ro(We),Gg=Ro(y);function Ro(t){return t&&t.__esModule?t:{default:t}}function zg(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Kg(t){const e=[...t].findIndex(r=>{const n=r.codePointAt(0);return(0,_s.isASCII)("upperAlpha",n)||(0,_s.isASCII)("lowerAlpha",n)});return~e?{amount:t.slice(0,e).trim(),unit:t.slice(e).trim().toLowerCase()}:{amount:t.trim()}}const Ao=1e3,Yg=60,Po=Yg*Ao,jg=60,No=jg*Po,Jg=24,Mr=No*Jg,Xg=24,Qg=Mr*Xg,Zg=30,ev=Mr*Zg,tv=365,rv=Mr*tv,So={words:["milliseconds","millisecond","msecs","msec","ms"],multiplier:1},nv=[{words:["years","year","yrs","yr","y"],multiplier:rv},{words:["months","month","mnth","mo","m’th","m-th","mth"],multiplier:ev},{words:["weeks","week","w"],multiplier:Qg},{words:["days","day","d"],multiplier:Mr},{words:["hours","hour","hrs","hr","h"],multiplier:No},{words:["minutes","minute","mins","min","m"],multiplier:Po},{words:["seconds","second","secs","sec","s"],multiplier:Ao},So];function iv(t,e){const r=e?nv.find(n=>n.words.includes(e)):So;if(!r)throw new gn.WRONG_TIME_UNIT;return t*r.multiplier}class Do extends Gg.default{validate(e){if((0,ms.isNumber)(e))return e;if((0,ms.isString)(e)){const r=this.createChildRule(qg.default),{amount:n,unit:i}=Kg(e);if(!n)throw new gn.WRONG_TIME_UNIT;const s=r.validate(n);return iv(s,i)}throw new gn.WRONG_FORMAT}}kr.default=Do;zg(Do,"schema",["time_unit","timeUnit"]);var Lr={};Object.defineProperty(Lr,"__esModule",{value:!0});Lr.default=void 0;var Ct=A,sv=Qn(He),av=Qn(y),ov=Qn(K);function Qn(t){return t&&t.__esModule?t:{default:t}}function cv(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function uv(t){const e=[],r=[];for(const n of t.split(",")){const[i,s,...a]=n.split("/");if(!i||a.length>0)throw new Ct.INVALID_CRON("INVALID_RANGE");s&&r.push(s),i!=="*"&&e.push(...i.split("-"))}return{values:e,ranges:r}}function lv([t,e,r,n,i,...s]){if(s.length>0)throw new Ct.INVALID_CRON("EXCESSIVE_PART");const a={ranges:[]};return Object.entries({minute:t,hour:e,dayOfMonth:r,month:n,dayOfWeek:i}).forEach(([o,c])=>{if(!c)throw new Ct.INVALID_CRON({key:"REQUIRED"});const{values:u,ranges:l}=uv(c);a[o]=u,a.ranges.push(...l)}),a}const dv=["jan","feb","mar","apr","ma","jun","jul","aug","sep","oct","nov","dec"],hv=["mon","tue","wed","thu","fri","sat","sun"],fv={ranges:{every:["integer",{min:1}]},minute:{every:["integer",{min:0},{max:59}]},hour:{every:["integer",{min:0},{max:23}]},dayOfMonth:{every:["integer",{min:1},{max:31}]},month:{every:{or:[["integer",{min:1},{max:12}],["to_lower",{enum:dv}]]}},dayOfWeek:{every:{or:[["integer",{min:0},{max:6}],["to_lower",{enum:hv}]]}}};class Co extends av.default{validate(e){const i=this.createChildRule(ov.default).validate(e).trim().split(/\s+/),s=lv(i),a=this.createNestedValidator({attributes:fv});try{a.validate(s)}catch(o){throw o instanceof sv.default?new Ct.INVALID_CRON(o):o}return i.join(" ")}}Lr.default=Co;cv(Co,"schema","cron");var Ur={};Object.defineProperty(Ur,"__esModule",{value:!0});Ur.default=void 0;var pv=k,mv=_v(y);function _v(t){return t&&t.__esModule?t:{default:t}}function gv(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class ko extends mv.default{validate(e){const r=[];for(const n of this.params){const i=this.createValidator(n);try{return i.validate(e)}catch(s){r.push(s)}}throw(0,pv.last)(r)}}Ur.default=ko;gv(ko,"schema","or");var $r={};Object.defineProperty($r,"__esModule",{value:!0});$r.default=void 0;var vv=Mo(K),Iv=Mo(y);function Mo(t){return t&&t.__esModule?t:{default:t}}function Ev(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class Lo extends Iv.default{validate(e){return this.createChildRule(vv.default).validate(e).toLowerCase()}}$r.default=Lo;Ev(Lo,"schema",["to_lowercase","to_lower"]);var Fr={};Object.defineProperty(Fr,"__esModule",{value:!0});Fr.default=void 0;var yv=A,Tv=wv(y);function wv(t){return t&&t.__esModule?t:{default:t}}function Ov(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class Uo extends Tv.default{validate(e){const r=new Date(e);if(Number.isNaN(r.getTime()))throw new yv.NOT_DATE;return r}}Fr.default=Uo;Ov(Uo,"schema","date");Object.defineProperty(Yn,"__esModule",{value:!0});var $o=Yn.default=void 0,bv=w(Kt),Rv=w(Ir),Av=w(Tr),Pv=w(wr),Nv=w(Or),Sv=w(We),Dv=w(br),Cv=w(Rr),kv=w(K),Mv=w(lt),Lv=w(Ar),Uv=w(Pr),$v=w(Nr),Fv=w(Sr),Bv=w(Dr),Vv=w(Cr),xv=w(kr),Hv=w(Lr),Wv=w(Ur),qv=w($r),Gv=w(Fr);function w(t){return t&&t.__esModule?t:{default:t}}var zv=[bv.default,Rv.default,Nv.default,Sv.default,Av.default,Pv.default,Dv.default,Cv.default,kv.default,Mv.default,Lv.default,Uv.default,$v.default,Fv.default,Bv.default,Vv.default,xv.default,Hv.default,Wv.default,qv.default,Gv.default];$o=Yn.default=zv;var Zn={},Br={};Object.defineProperty(Br,"__esModule",{value:!0});Br.default=void 0;var gt=k,Kv=Fo(_),gs=Fo(He);function Fo(t){return t&&t.__esModule?t:{default:t}}class Yv{constructor(e,r,n){this._schema=r,this._cottus=e,this._hierarchy=[],n&&(this._hierarchy=n.parent._nestedHierarhy(n.key),n.notLink||(this.parent=n.parent))}_nestedHierarhy(e){const r=[...this._hierarchy];return(0,gt.isValue)(e)&&r.push(e),r}get isNested(){return!!this.parent}_sendNestedErrors(e){if(this.isNested)return this.parent._receiveNestedErrors(e);this.nestedErrors.push(...e)}_receiveNestedErrors(e){if(this.isNested)return this.parent._sendNestedErrors(e);this.nestedErrors.push(...e)}parse(){this.rules=[],(0,gt.toArray)(this._schema).forEach(e=>{let r=null,n=null;const i=(0,gt.isString)(e),s=(0,gt.isObject)(e)&&Object.keys(e).length===1;i&&(r=e),s&&(r=Object.keys(e)[0],n=Object.values(e)[0]);const a=this._cottus.rules[r];if(!a)throw new Error(`Rule [${r}] not found`);this.rules.push(new a({params:n,validator:this}))})}validate(e){this.nestedErrors=[];let r=e;const n=[];for(const i of this.rules)try{r=i.run(r)}catch(s){if(s instanceof Kv.default){s.hasContext||s.setContext({value:r,path:this._hierarchy}),n.push(s);break}throw s}if(n.length>0){if(this.isNested)return this._sendNestedErrors(n);throw new gs.default(this._cottus,n)}if(this.nestedErrors.length>0)throw new gs.default(this._cottus,this.nestedErrors);return r}}Br.default=Yv;Object.defineProperty(Zn,"__esModule",{value:!0});var Bo=Zn.default=void 0,jv=k,Jv=Xv(Br);function Xv(t){return t&&t.__esModule?t:{default:t}}class Qv{constructor(e={}){this.rules={},this.addRules(e.rules||[])}compile(e,r){const n=new Jv.default(this,e,r);return n.parse(),n}addRules(e){e.forEach(r=>{(0,jv.toArray)(r.schema).forEach(n=>this.rules[n]=r)})}addRule(e){this.addRules([e])}}Bo=Zn.default=Qv;const Zv=new Bo({rules:$o}),eI={PUBLIC_FIREBASE_USER_ID:"email@mail.com",PUBLIC_FIREBASE_API_KEY:"eOmvXLQmjH46LuL4",PUBLIC_FIREBASE_AUTH_DOMAIN:"tastoria-XXXXX.firebaseapp.com",PUBLIC_FIREBASE_PROJECT_ID:"tastoria-XXXXX",PUBLIC_FIREBASE_STORAGE_BUCKET:"tastoria-XXXXX.appspot.com",PUBLIC_FIREBASE_MESSAGING_SENDER_ID:"124404020435",PUBLIC_FIREBASE_APPID:"1:124404020435:web:708552964a014d4a",PUBLIC_FIREBASE_MEASUREMENT_ID:"G-NSVDB2SDWR",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},tI=t=>({apiKey:{$source:`{${t}_API_KEY}`,$validate:["required","string"]},authDomain:{$source:`{${t}_AUTH_DOMAIN}`,$validate:["required","string"]},projectId:{$source:`{${t}_PROJECT_ID}`,$validate:["required","string"]},storageBucket:{$source:`{${t}_STORAGE_BUCKET}`,$validate:["required","string"]},messagingSenderId:{$source:`{${t}_MESSAGING_SENDER_ID}`,$validate:["required","string"]},appId:{$source:`{${t}_APPID}`,$validate:["required","string"]},measurementId:{$source:`{${t}_MEASUREMENT_ID}`,$validate:["required","string"]}}),rI={firebase:tI("PUBLIC_FIREBASE")},Vo=new no(Zv,rI);Vo.parse();const nI=Vo.run(eI),{GoogleAuthProvider:iI,getAuth:sI,signInWithPopup:aI}=Df;async function vs(t){const e=t.storage,r=t._location,n=new URL(`${e._protocol}://${e.host}/v0${r.fullServerUrl()}`),s=await(await fetch(n.href)).json();return`${n.href}?alt=media&token=${s.downloadTokens}`}function oI(t){const e=t.metadata;return{id:t.uid,email:t.email,fullName:t.displayName,avatar:t.photoURL,lastLoginAt:e.lastSignInTime,createdAt:e.creationTime}}class cI{constructor(e){this._app=Ps(e),this._userId="email@mail.com",this._storage=zu(this._app),this._bucketName=this._app.options.storageBucket||""}getHeaders(){return{}}async getImageUrl(e){const r=`gs://${this._bucketName}/${this._userId}/images/${e}`,n=hi(this._storage,r);return vs(n)}async downloadImage(e){const r=await this.getImageUrl(e);return(await fetch(r)).blob()}async downloadData(){const e=`gs://${this._bucketName}/${this._userId}/data.json`,r=hi(this._storage,e),n=await vs(r);return(await fetch(n)).json()}async signIn(){const e=sI(this._app),r=new iI;r.addScope("https://www.googleapis.com/auth/contacts.readonly");const n=await aI(e,r);return oI(n.user)}onError(e){return console.error(e),null}}const lI=new cI(nI.firebase);export{lI as f};
