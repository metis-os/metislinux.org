const d={};function D(e){d.context=e}function Et(){return{...d.context,id:`${d.context.id}${d.context.count++}-`,count:0}}const _t=(e,t)=>e===t,fe=Symbol("solid-proxy"),or=Symbol("solid-track"),St=Symbol("solid-dev-component"),de={equals:_t};let Xe=et;const $=1,K=2,Ye={owned:null,cleanups:null,context:null,owner:null},Ee={};var y=null;let f=null,v=null,T=null,L=null,ge=0;const[lr,Ve]=N(!1);function Le(e,t){const n=v,s=y,r=e.length===0,i=r?Ye:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},l=r?e:()=>e(()=>R(()=>G(i)));y=i,v=null;try{return V(l,!0)}finally{v=n,y=s}}function N(e,t){t=t?Object.assign({},de,t):de;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(f&&f.running&&f.sources.has(n)?r=r(n.tValue):r=r(n.value)),Ze(n,r));return[Qe.bind(n),s]}function Ie(e,t,n){const s=ye(e,t,!0,$);ne(s)}function q(e,t,n){const s=ye(e,t,!1,$);ne(s)}function xt(e,t,n){Xe=$t;const s=ye(e,t,!1,$),r=Y&&we(y,Y.id);r&&(s.suspense=r),s.user=!0,L?L.push(s):ne(s)}function x(e,t,n){n=n?Object.assign({},de,n):de;const s=ye(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,ne(s),Qe.bind(s)}function At(e,t,n){let s,r,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,r=e,i=t||{}):(s=e,r=t,i=n||{});let l=null,o=Ee,c=null,a=!1,u=!1,m="initialValue"in i,g=typeof s=="function"&&x(s);const w=new Set,[_,b]=(i.storage||N)(i.initialValue),[O,k]=N(void 0),[I,H]=N(void 0,{equals:!1}),[F,j]=N(m?"ready":"unresolved");if(d.context){c=`${d.context.id}${d.context.count++}`;let h;i.ssrLoadFrom==="initial"?o=i.initialValue:d.load&&(h=d.load(c))&&(o=h[0])}function W(h,p,A,M){return l===h&&(l=null,m=!0,(h===o||p===o)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(M,{value:p})),o=Ee,f&&h&&a?(f.promises.delete(h),a=!1,V(()=>{f.running=!0,re(p,A)},!1)):re(p,A)),p}function re(h,p){V(()=>{p===void 0&&b(()=>h),j(p!==void 0?"errored":"ready"),k(p);for(const A of w.keys())A.decrement();w.clear()},!1)}function se(){const h=Y&&we(y,Y.id),p=_(),A=O();if(A!==void 0&&!l)throw A;return v&&!v.user&&h&&Ie(()=>{I(),l&&(h.resolved&&f&&a?f.promises.add(l):w.has(h)||(h.increment(),w.add(h)))}),p}function S(h=!0){if(h!==!1&&u)return;u=!1;const p=g?g():s;if(a=f&&f.running,p==null||p===!1){W(l,R(_));return}f&&l&&f.promises.delete(l);const A=o!==Ee?o:R(()=>r(p,{value:_(),refetching:h}));return typeof A!="object"||!(A&&"then"in A)?(W(l,A,void 0,p),A):(l=A,u=!0,queueMicrotask(()=>u=!1),V(()=>{j(m?"refreshing":"pending"),H()},!1),A.then(M=>W(A,M,void 0,p),M=>W(A,void 0,rt(M),p)))}return Object.defineProperties(se,{state:{get:()=>F()},error:{get:()=>O()},loading:{get(){const h=F();return h==="pending"||h==="refreshing"}},latest:{get(){if(!m)return se();const h=O();if(h&&!l)throw h;return _()}}}),g?Ie(()=>S(!1)):S(!1),[se,{refetch:S,mutate:b}]}function cr(e){return V(e,!1)}function R(e){if(v===null)return e();const t=v;v=null;try{return e()}finally{v=t}}function ze(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return l=>{let o;if(s){o=Array(e.length);for(let a=0;a<e.length;a++)o[a]=e[a]()}else o=e();if(i){i=!1;return}const c=R(()=>t(o,r,l));return r=o,c}}function ar(e){xt(()=>R(e))}function pe(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function ur(){return v}function Je(){return y}function Pt(e,t){const n=y,s=v;y=e,v=null;try{return V(t,!0)}catch(r){Oe(r)}finally{y=n,v=s}}function Ct(e){if(f&&f.running)return e(),f.done;const t=v,n=y;return Promise.resolve().then(()=>{v=t,y=n;let s;return Y&&(s=f||(f={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(r=>s.resolve=r)),s.running=!0),V(e,!1),v=y=null,s?s.done:void 0})}function Lt(e){L.push.apply(L,e),e.length=0}function te(e,t){const n=Symbol("context");return{id:n,Provider:Rt(n),defaultValue:e}}function J(e){let t;return(t=we(y,e.id))!==void 0?t:e.defaultValue}function Te(e){const t=x(e),n=x(()=>Ae(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let Y;function Tt(){return Y||(Y=te({}))}function Qe(){const e=f&&f.running;if(this.sources&&(!e&&this.state||e&&this.tState))if(!e&&this.state===$||e&&this.tState===$)ne(this);else{const t=T;T=null,V(()=>me(this),!1),T=t}if(v){const t=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(t)):(v.sources=[this],v.sourceSlots=[t]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return e&&f.sources.has(this)?this.tValue:this.value}function Ze(e,t,n){let s=f&&f.running&&f.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(f){const r=f.running;(r||!n&&f.sources.has(e))&&(f.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&V(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=f&&f.running;l&&f.disposed.has(i)||((l&&!i.tState||!l&&!i.state)&&(i.pure?T.push(i):L.push(i),i.observers&&tt(i)),l?i.tState=$:i.state=$)}if(T.length>1e6)throw T=[],new Error},!1)}return t}function ne(e){if(!e.fn)return;G(e);const t=y,n=v,s=ge;v=y=e,De(e,f&&f.running&&f.sources.has(e)?e.tValue:e.value,s),f&&!f.running&&f.sources.has(e)&&queueMicrotask(()=>{V(()=>{f&&(f.running=!0),v=y=e,De(e,e.tValue,s),v=y=null},!1)}),v=n,y=t}function De(e,t,n){let s;try{s=e.fn(t)}catch(r){return e.pure&&(f&&f.running?(e.tState=$,e.tOwned&&e.tOwned.forEach(G),e.tOwned=void 0):(e.state=$,e.owned&&e.owned.forEach(G),e.owned=null)),e.updatedAt=n+1,Oe(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ze(e,s,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function ye(e,t,n,s=$,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return f&&f.running&&(i.state=0,i.tState=s),y===null||y!==Ye&&(f&&f.running&&y.pure?y.tOwned?y.tOwned.push(i):y.tOwned=[i]:y.owned?y.owned.push(i):y.owned=[i]),i}function he(e){const t=f&&f.running;if(!t&&e.state===0||t&&e.tState===0)return;if(!t&&e.state===K||t&&e.tState===K)return me(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ge);){if(t&&f.disposed.has(e))return;(!t&&e.state||t&&e.tState)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let r=e,i=n[s+1];for(;(r=r.owner)&&r!==i;)if(f.disposed.has(r))return}if(!t&&e.state===$||t&&e.tState===$)ne(e);else if(!t&&e.state===K||t&&e.tState===K){const r=T;T=null,V(()=>me(e,n[0]),!1),T=r}}}function V(e,t){if(T)return e();let n=!1;t||(T=[]),L?n=!0:L=[],ge++;try{const s=e();return Ot(n),s}catch(s){n||(L=null),T=null,Oe(s)}}function Ot(e){if(T&&(et(T),T=null),e)return;let t;if(f){if(!f.promises.size&&!f.queue.size){const s=f.sources,r=f.disposed;L.push.apply(L,f.effects),t=f.resolve;for(const i of L)"tState"in i&&(i.state=i.tState),delete i.tState;f=null,V(()=>{for(const i of r)G(i);for(const i of s){if(i.value=i.tValue,i.owned)for(let l=0,o=i.owned.length;l<o;l++)G(i.owned[l]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}Ve(!1)},!1)}else if(f.running){f.running=!1,f.effects.push.apply(f.effects,L),L=null,Ve(!0);return}}const n=L;L=null,n.length&&V(()=>Xe(n),!1),t&&t()}function et(e){for(let t=0;t<e.length;t++)he(e[t])}function $t(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:he(s)}for(d.context&&D(),t=0;t<n;t++)he(e[t])}function me(e,t){const n=f&&f.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(!n&&r.state===$||n&&r.tState===$?r!==t&&(!r.updatedAt||r.updatedAt<ge)&&he(r):(!n&&r.state===K||n&&r.tState===K)&&me(r,t))}}function tt(e){const t=f&&f.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!t&&!s.state||t&&!s.tState)&&(t?s.tState=K:s.state=K,s.pure?T.push(s):L.push(s),s.observers&&tt(s))}}function G(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(f&&f.running&&e.pure){if(e.tOwned){for(t=0;t<e.tOwned.length;t++)G(e.tOwned[t]);delete e.tOwned}nt(e,!0)}else if(e.owned){for(t=0;t<e.owned.length;t++)G(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0,e.context=null}function nt(e,t){if(t||(e.tState=0,f.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)nt(e.owned[n])}function rt(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Oe(e){throw e=rt(e),e}function we(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:we(e.owner,t):void 0}function Ae(e){if(typeof e=="function"&&!e.length)return Ae(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=Ae(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Rt(e,t){return function(s){let r;return q(()=>r=R(()=>(y.context={[e]:s.value},Te(()=>s.children))),void 0),r}}let st=!1;function kt(){st=!0}function E(e,t){if(st&&d.context){const n=d.context;D(Et());const s=R(()=>e(t||{}));return D(n),s}return R(()=>e(t||{}))}function ae(){return!0}const Pe={get(e,t,n){return t===fe?n:e.get(t)},has(e,t){return t===fe?!0:e.has(t)},set:ae,deleteProperty:ae,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ae,deleteProperty:ae}},ownKeys(e){return e.keys()}};function _e(e){return(e=typeof e=="function"?e():e)?e:{}}function Me(...e){let t=!1;for(let s=0;s<e.length;s++){const r=e[s];t=t||!!r&&fe in r,e[s]=typeof r=="function"?(t=!0,x(r)):r}if(t)return new Proxy({get(s){for(let r=e.length-1;r>=0;r--){const i=_e(e[r])[s];if(i!==void 0)return i}},has(s){for(let r=e.length-1;r>=0;r--)if(s in _e(e[r]))return!0;return!1},keys(){const s=[];for(let r=0;r<e.length;r++)s.push(...Object.keys(_e(e[r])));return[...new Set(s)]}},Pe);const n={};for(let s=e.length-1;s>=0;s--)if(e[s]){const r=Object.getOwnPropertyDescriptors(e[s]);for(const i in r)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const o=(e[l]||{})[i];if(o!==void 0)return o}}})}return n}function it(e,...t){const n=new Set(t.flat());if(fe in e){const r=t.map(i=>new Proxy({get(l){return i.includes(l)?e[l]:void 0},has(l){return i.includes(l)&&l in e},keys(){return i.filter(l=>l in e)}},Pe));return r.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},Pe)),r}const s=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(s).filter(r=>!n.has(r))),t.map(r=>{const i={};for(let l=0;l<r.length;l++){const o=r[l];o in e&&Object.defineProperty(i,o,s[o]?s[o]:{get(){return e[o]},set(){return!0},enumerable:!0})}return i})}function P(e){let t,n;const s=r=>{const i=d.context;if(i){const[o,c]=N();(n||(n=e())).then(a=>{D(i),c(()=>a.default),D()}),t=o}else if(!t){const[o]=At(()=>(n||(n=e())).then(c=>c.default));t=o}let l;return x(()=>(l=t())&&R(()=>{if(!i)return l(r);const o=d.context;D(i);const c=l(r);return D(o),c}))};return s.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),s}let Nt=0;function Vt(){const e=d.context;return e?`${e.id}${e.count++}`:`cl-${Nt++}`}function ot(e){let t=!1;const n=e.keyed,s=x(()=>e.when,void 0,{equals:(r,i)=>t?r===i:!r==!i});return x(()=>{const r=s();if(r){const i=e.children,l=typeof i=="function"&&i.length>0;return t=n||l,l?R(()=>i(r)):i}return e.fallback},void 0,void 0)}const It=te();function Dt(e){let t=0,n,s,r,i,l;const[o,c]=N(!1),a=Tt(),u={increment:()=>{++t===1&&c(!0)},decrement:()=>{--t===0&&c(!1)},inFallback:o,effects:[],resolved:!1},m=Je();if(d.context&&d.load){const _=d.context.id+d.context.count;let b=d.load(_);if(b&&(r=b[0])&&r!=="$$f"){(typeof r!="object"||!("then"in r))&&(r=Promise.resolve(r));const[O,k]=N(void 0,{equals:!1});i=O,r.then(I=>{if(I||d.done)return I&&(l=I),k();d.gather(_),D(s),k(),D()})}}const g=J(It);g&&(n=g.register(u.inFallback));let w;return pe(()=>w&&w()),E(a.Provider,{value:u,get children(){return x(()=>{if(l)throw l;if(s=d.context,i)return i(),i=void 0;s&&r==="$$f"&&D();const _=x(()=>e.children);return x(b=>{const O=u.inFallback(),{showContent:k=!0,showFallback:I=!0}=n?n():{};if((!O||r&&r!=="$$f")&&k)return u.resolved=!0,w&&w(),w=s=r=void 0,Lt(u.effects),_();if(I)return w?b:Le(H=>(w=H,s&&(D({id:s.id+"f",count:0}),s=void 0),e.fallback),m)})})}})}const Mt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],jt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Mt]),qt=new Set(["innerHTML","textContent","innerText","children"]),Ht=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),je=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Ft=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Bt=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Ut={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Kt(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,c=t[r-1].nextSibling,a=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const u=i<s?o?n[o-1].nextSibling:n[i-o]:c;for(;o<i;)e.insertBefore(n[o++],u)}else if(i===o)for(;l<r;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const u=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],u),t[r]=n[i]}else{if(!a){a=new Map;let m=o;for(;m<i;)a.set(n[m],m++)}const u=a.get(t[l]);if(u!=null)if(o<u&&u<i){let m=l,g=1,w;for(;++m<r&&m<i&&!((w=a.get(t[m]))==null||w!==u+g);)g++;if(g>u-o){const _=t[l];for(;o<u;)e.insertBefore(n[o++],_)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const qe="_$DX_DELEGATE";function Gt(e,t,n,s={}){let r;return Le(i=>{r=i,t===document?e():lt(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function ce(e,t,n){const s=document.createElement("template");if(s.innerHTML=e,t&&s.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${s.innerHTML}

${e}. Is your HTML properly formed?`;let r=s.content.firstChild;return n&&(r=r.firstChild),r}function $e(e,t=window.document){const n=t[qe]||(t[qe]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,ct))}}function Re(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Wt(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Xt(e,t){t==null?e.removeAttribute("class"):e.className=t}function Yt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n)}function zt(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,l;for(i=0,l=r.length;i<l;i++){const o=r[i];!o||o==="undefined"||t[o]||(He(e,o,!1),delete n[o])}for(i=0,l=s.length;i<l;i++){const o=s[i],c=!!t[o];!o||o==="undefined"||n[o]===c||!c||(He(e,o,!0),n[o]=c)}return n}function Jt(e,t,n){if(!t)return n?Re(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function z(e,t={},n,s){const r={};return s||q(()=>r.children=ee(e,t.children,r.children)),q(()=>t.ref&&t.ref(e)),q(()=>Qt(e,t,n,!0,r,!0)),r}function lt(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return ee(e,t,s,n);q(r=>ee(e,t(),r,n),s)}function Qt(e,t,n,s,r={},i=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=Fe(e,l,null,r[l],n,i)}for(const l in t){if(l==="children"){s||ee(e,t.children);continue}const o=t[l];r[l]=Fe(e,l,o,r[l],n,i)}}function Zt(e,t,n={}){d.completed=globalThis._$HY.completed,d.events=globalThis._$HY.events,d.load=globalThis._$HY.load,d.gather=r=>Ue(t,r),d.registry=new Map,d.context={id:n.renderId||"",count:0},Ue(t,n.renderId);const s=Gt(e,t,[...t.childNodes],n);return d.context=null,s}function Z(e){let t,n;if(!d.context||!(t=d.registry.get(n=nn()))){if(d.context&&console.warn("Unable to find DOM nodes for hydration key:",n),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+n);return e.cloneNode(!0)}return d.completed&&d.completed.add(t),d.registry.delete(n),t}function fr(e){let t=e,n=0,s=[];if(d.context)for(;t;){if(t.nodeType===8){const r=t.nodeValue;if(r==="#")n++;else if(r==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function en(){d.events&&!d.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=d;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;ct(s),t.shift()}}),d.events.queued=!0)}function tn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function He(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function Fe(e,t,n,s,r,i){let l,o,c;if(t==="style")return Jt(e,n,s);if(t==="classList")return zt(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const a=t.slice(3);s&&e.removeEventListener(a,s),n&&e.addEventListener(a,n)}else if(t.slice(0,10)==="oncapture:"){const a=t.slice(10);s&&e.removeEventListener(a,s,!0),n&&e.addEventListener(a,n,!0)}else if(t.slice(0,2)==="on"){const a=t.slice(2).toLowerCase(),u=Ft.has(a);if(!u&&s){const m=Array.isArray(s)?s[0]:s;e.removeEventListener(a,m)}(u||n)&&(Yt(e,a,n,u),u&&$e([a]))}else if((c=qt.has(t))||!r&&(je[t]||(o=jt.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?Xt(e,n):l&&!o&&!c?e[tn(t)]=n:e[je[t]||t]=n;else{const a=r&&t.indexOf(":")>-1&&Ut[t.split(":")[0]];a?Wt(e,a,t,n):Re(e,Ht[t]||t,n)}return n}function ct(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),d.registry&&!d.done&&(d.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function ee(e,t,n,s,r){for(d.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(d.context)return n;if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=Q(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(d.context)return n;n=Q(e,n,s)}else{if(i==="function")return q(()=>{let o=t();for(;typeof o=="function";)o=o();n=ee(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(Ce(o,t,n,r))return q(()=>n=ee(e,o,n,s,!0)),()=>n;if(d.context){if(!o.length)return n;for(let a=0;a<o.length;a++)if(o[a].parentNode)return n=o}if(o.length===0){if(n=Q(e,n,s),l)return n}else c?n.length===0?Be(e,o,s):Kt(e,n,o):(n&&Q(e),Be(e,o));n=o}else if(t instanceof Node){if(d.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=Q(e,n,s,t);Q(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Ce(e,t,n,s){let r=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],c=n&&n[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))r=Ce(e,o,c)||r;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();r=Ce(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||r}else e.push(o),r=!0;else{const a=String(o);a==="<!>"?c&&c.nodeType===8&&e.push(c):c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return r}function Be(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function Q(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const c=o.parentNode===e;!i&&!l?c?e.replaceChild(r,o):e.insertBefore(r,n):c&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}function Ue(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const r=n[s],i=r.getAttribute("data-hk");(!t||i.startsWith(t))&&!d.registry.has(i)&&d.registry.set(i,r)}}function nn(){const e=d.context;return`${e.id}${e.count++}`}function rn(e){return d.context?void 0:e.children}function sn(){}const at=!1,on="http://www.w3.org/2000/svg";function ln(e,t=!1){return t?document.createElementNS(on,e):document.createElement(e)}const cn=(...e)=>(kt(),Zt(...e));function dr(e){const[t,n]=it(e,["component"]),s=x(()=>t.component);return x(()=>{const r=s();switch(typeof r){case"function":return Object.assign(r,{[St]:!0}),R(()=>r(n));case"string":const i=Bt.has(r),l=d.context?Z():ln(r,i);return z(l,n,i),l}})}const an="modulepreload",un=function(e,t){return new URL(e,t).href},Ke={},C=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=un(i,s),i in Ke)return;Ke[i]=!0;const l=i.endsWith(".css"),o=l?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const m=r[u];if(m.href===i&&(!l||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${o}`))return;const a=document.createElement("link");if(a.rel=l?"stylesheet":an,l||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),l)return new Promise((u,m)=>{a.addEventListener("load",u),a.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function fn(e,t){e&&t&&cn(e,t)}const ke=te(),dn=["title","meta"],Ge=e=>e.tag+(e.name?`.${e.name}"`:""),hn=e=>{if(!d.context){const r=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(r,i=>i.parentNode.removeChild(i))}const t=new Map;function n(r){if(r.ref)return r.ref;let i=document.querySelector(`[data-sm="${r.id}"]`);return i?(i.tagName.toLowerCase()!==r.tag&&(i.parentNode&&i.parentNode.removeChild(i),i=document.createElement(r.tag)),i.removeAttribute("data-sm")):i=document.createElement(r.tag),i}const s={addClientTag:r=>{let i=Ge(r);if(dn.indexOf(r.tag)!==-1){t.has(i)||t.set(i,[]);let o=t.get(i),c=o.length;o=[...o,r],t.set(i,o);{let a=n(r);r.ref=a,z(a,r.props);let u=null;for(var l=c-1;l>=0;l--)if(o[l]!=null){u=o[l];break}a.parentNode!=document.head&&document.head.appendChild(a),u&&u.ref&&document.head.removeChild(u.ref)}return c}{let o=n(r);r.ref=o,z(o,r.props),o.parentNode!=document.head&&document.head.appendChild(o)}return-1},removeClientTag:(r,i)=>{const l=Ge(r);if(r.ref){const o=t.get(l);if(o){if(r.ref.parentNode){r.ref.parentNode.removeChild(r.ref);for(let c=i-1;c>=0;c--)o[c]!=null&&document.head.appendChild(o[c].ref)}o[i]=null,t.set(l,o)}else r.ref.parentNode&&r.ref.parentNode.removeChild(r.ref)}}};return E(ke.Provider,{value:s,get children(){return e.children}})},ut=(e,t)=>{const n=Vt();if(!J(ke))throw new Error("<MetaProvider /> should be in the tree");return mn({tag:e,props:t,id:n,get name(){return t.name||t.property}}),null};function mn(e){const{addClientTag:t,removeClientTag:n,addServerTag:s}=J(ke);q(()=>{{let r=t(e);pe(()=>n(e,r))}})}const gn=e=>ut("title",e),Se=e=>ut("meta",e);function pn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function yn([e,t],n,s){return[n?()=>n(e()):e,s?r=>t(s(r)):t]}function wn(e){try{return document.querySelector(e)}catch{return null}}function bn(e,t){const n=wn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function vn(e,t,n,s){let r=!1;const i=o=>typeof o=="string"?{value:o}:o,l=yn(N(i(e()),{equals:(o,c)=>o.value===c.value}),void 0,o=>(!r&&t(o),o));return n&&pe(n((o=e())=>{r=!0,l[1](i(o)),r=!1})),{signal:l,utils:s}}function En(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:N({value:""})};return e}function _n(){return vn(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"",e):window.history.pushState(s,"",e),bn(window.location.hash.slice(1),n)},e=>pn(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Sn(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,i){if(n)return!(n=!1);const l={to:r,options:i,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const o of e)o.listener({...l,from:o.location,retry:c=>{c&&(n=!0),o.navigate(r,i)}});return!l.defaultPrevented}return{subscribe:t,confirm:s}}const xn=/^(?:[a-z0-9]+:)?\/\//i,An=/^\/+|(\/)\/+$/g;function X(e,t=!1){const n=e.replace(An,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ue(e,t,n){if(xn.test(t))return;const s=X(e),r=n&&X(n);let i="";return!r||t.startsWith("/")?i=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?i=s+r:i=r,(i||"/")+X(t,!i)}function Pn(e,t){if(e==null)throw new Error(t);return e}function ft(e,t){return X(e).replace(/\/*(\*.*)?$/g,"")+X(t)}function Cn(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function Ln(e,t,n){const[s,r]=e.split("/*",2),i=s.split("/").filter(Boolean),l=i.length;return o=>{const c=o.split("/").filter(Boolean),a=c.length-l;if(a<0||a>0&&r===void 0&&!t)return null;const u={path:l?"":"/",params:{}},m=g=>n===void 0?void 0:n[g];for(let g=0;g<l;g++){const w=i[g],_=c[g],b=w[0]===":",O=b?w.slice(1):w;if(b&&xe(_,m(O)))u.params[O]=_;else if(b||!xe(_,w))return null;u.path+=`/${_}`}if(r){const g=a?c.slice(-a).join("/"):"";if(xe(g,m(r)))u.params[r]=g;else return null}return u}}function xe(e,t){const n=s=>s.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Tn(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,i)=>r+(i.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function dt(e){const t=new Map,n=Je();return new Proxy({},{get(s,r){return t.has(r)||Pt(n,()=>t.set(r,x(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function ht(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return ht(s).reduce((i,l)=>[...i,...r.map(o=>o+l)],[])}const On=100,mt=te(),be=te(),ve=()=>Pn(J(mt),"Make sure your app is wrapped in a <Router />");let le;const Ne=()=>le||J(be)||ve().base,$n=e=>{const t=Ne();return x(()=>t.resolvePath(e()))},Rn=e=>{const t=ve();return x(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},gt=()=>ve().location;function kn(e,t="",n){const{component:s,data:r,children:i}=e,l=!i||Array.isArray(i)&&!i.length,o={key:e,element:s?()=>E(s,{}):()=>{const{element:c}=e;return c===void 0&&n?E(n,{}):c},preload:e.component?s.preload:e.preload,data:r};return pt(e.path).reduce((c,a)=>{for(const u of ht(a)){const m=ft(t,u),g=l?m:m.split("/*",1)[0];c.push({...o,originalPath:u,pattern:g,matcher:Ln(g,!l,e.matchFilters)})}return c},[])}function Nn(e,t=0){return{routes:e,score:Tn(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const i=e[r],l=i.matcher(n);if(!l)return null;s.unshift({...l,route:i})}return s}}}function pt(e){return Array.isArray(e)?e:[e]}function yt(e,t="",n,s=[],r=[]){const i=pt(e);for(let l=0,o=i.length;l<o;l++){const c=i[l];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const a=kn(c,t,n);for(const u of a){s.push(u);const m=Array.isArray(c.children)&&c.children.length===0;if(c.children&&!m)yt(c.children,u.pattern,n,s,r);else{const g=Nn([...s],r.length);r.push(g)}s.pop()}}}return s.length?r:r.sort((l,o)=>o.score-l.score)}function Vn(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function In(e,t){const n=new URL("http://sar"),s=x(c=>{const a=e();try{return new URL(a,n)}catch{return console.error(`Invalid path ${a}`),c}},n,{equals:(c,a)=>c.href===a.href}),r=x(()=>s().pathname),i=x(()=>s().search,!0),l=x(()=>s().hash),o=x(()=>"");return{get pathname(){return r()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:dt(ze(i,()=>Cn(s())))}}function Dn(e,t="",n,s){const{signal:[r,i],utils:l={}}=En(e),o=l.parsePath||(S=>S),c=l.renderPath||(S=>S),a=l.beforeLeave||Sn(),u=ue("",t),m=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!r().value&&i({value:u,replace:!0,scroll:!1});const[g,w]=N(!1),_=async S=>{w(!0);try{await Ct(S)}finally{w(!1)}},[b,O]=N(r().value),[k,I]=N(r().state),H=In(b,k),F=[],j={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(S){return ue(u,S)}};if(n)try{le=j,j.data=n({data:void 0,params:{},location:H,navigate:re(j)})}finally{le=void 0}function W(S,h,p){R(()=>{if(typeof h=="number"){h&&(l.go?a.confirm(h,p)&&l.go(h):console.warn("Router integration does not support relative routing"));return}const{replace:A,resolve:M,scroll:B,state:ie}={replace:!1,resolve:!0,scroll:!0,...p},U=M?S.resolvePath(h):ue("",h);if(U===void 0)throw new Error(`Path '${h}' is not a routable path`);if(F.length>=On)throw new Error("Too many redirects");const oe=b();if((U!==oe||ie!==k())&&!at){if(a.confirm(U,p)){const vt=F.push({value:oe,replace:A,scroll:B,state:k()});_(()=>{O(U),I(ie)}).then(()=>{F.length===vt&&se({value:U,state:ie})})}}})}function re(S){return S=S||J(be)||j,(h,p)=>W(S,h,p)}function se(S){const h=F[0];h&&((S.value!==h.value||S.state!==h.state)&&i({...S,replace:h.replace,scroll:h.scroll}),F.length=0)}q(()=>{const{value:S,state:h}=r();R(()=>{S!==b()&&_(()=>{O(S),I(h)})})});{let S=function(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const p=h.composedPath().find(oe=>oe instanceof Node&&oe.nodeName.toUpperCase()==="A");if(!p||!p.hasAttribute("link"))return;const A=p.href;if(p.target||!A&&!p.hasAttribute("state"))return;const M=(p.getAttribute("rel")||"").split(/\s+/);if(p.hasAttribute("download")||M&&M.includes("external"))return;const B=new URL(A);if(B.origin!==window.location.origin||u&&B.pathname&&!B.pathname.toLowerCase().startsWith(u.toLowerCase()))return;const ie=o(B.pathname+B.search+B.hash),U=p.getAttribute("state");h.preventDefault(),W(j,ie,{resolve:!1,replace:p.hasAttribute("replace"),scroll:!p.hasAttribute("noscroll"),state:U&&JSON.parse(U)})};$e(["click"]),document.addEventListener("click",S),pe(()=>document.removeEventListener("click",S))}return{base:j,out:m,location:H,isRouting:g,renderPath:c,parsePath:o,navigatorFactory:re,beforeLeave:a}}function Mn(e,t,n,s,r){const{base:i,location:l,navigatorFactory:o}=e,{pattern:c,element:a,preload:u,data:m}=s().route,g=x(()=>s().path);u&&u();const w={parent:t,pattern:c,get child(){return n()},path:g,params:r,data:t.data,outlet:a,resolvePath(_){return ue(i.path(),_,g())}};if(m)try{le=w,w.data=m({data:t.data,params:r,location:l,navigate:o(w)})}finally{le=void 0}return w}const jn=ce("<a link></a>",2),qn=e=>{const{source:t,url:n,base:s,data:r,out:i}=e,l=t||_n(),o=Dn(l,s,r);return E(mt.Provider,{value:o,get children(){return e.children}})},Hn=e=>{const t=ve(),n=Ne(),s=Te(()=>e.children),r=x(()=>yt(s(),ft(n.pattern,e.base||""),wt)),i=x(()=>Vn(r(),t.location.pathname)),l=dt(()=>{const u=i(),m={};for(let g=0;g<u.length;g++)Object.assign(m,u[g].params);return m});t.out&&t.out.matches.push(i().map(({route:u,path:m,params:g})=>({originalPath:u.originalPath,pattern:u.pattern,path:m,params:g})));const o=[];let c;const a=x(ze(i,(u,m,g)=>{let w=m&&u.length===m.length;const _=[];for(let b=0,O=u.length;b<O;b++){const k=m&&m[b],I=u[b];g&&k&&I.route.key===k.route.key?_[b]=g[b]:(w=!1,o[b]&&o[b](),Le(H=>{o[b]=H,_[b]=Mn(t,_[b-1]||n,()=>a()[b+1],()=>i()[b],l)}))}return o.splice(u.length).forEach(b=>b()),g&&w?g:(c=_[0],_)}));return E(ot,{get when(){return a()&&c},children:u=>E(be.Provider,{value:u,get children(){return u.outlet()}})})},wt=()=>{const e=Ne();return E(ot,{get when(){return e.child},children:t=>E(be.Provider,{value:t,get children(){return t.outlet()}})})};function hr(e){e=Me({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=it(e,["href","state","class","activeClass","inactiveClass","end"]),n=$n(()=>e.href),s=Rn(n),r=gt(),i=x(()=>{const l=n();if(l===void 0)return!1;const o=X(l.split(/[?#]/,1)[0]).toLowerCase(),c=X(r.pathname).toLowerCase();return e.end?o===c:c.startsWith(o)});return(()=>{const l=Z(jn);return z(l,Me(t,{get href(){return s()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i(),[e.activeClass]:i(),...t.classList}},get["aria-current"](){return i()?"page":void 0}}),!1,!1),en(),l})()}const Fn=[{component:P(()=>C(()=>import("./(index)-bd371587.js"),["./(index)-bd371587.js","./docs-892869df.js","./utils-e95f56b3.js","./docs-ec6eb359.css","./(index)-1553321f.css"],import.meta.url)),path:"",children:[{component:P(()=>C(()=>import("./_...404_-21896ce3.js"),[],import.meta.url)),path:"/*404"},{component:P(()=>C(()=>import("./docs-892869df.js"),["./docs-892869df.js","./utils-e95f56b3.js","./docs-ec6eb359.css"],import.meta.url)),path:"/docs",children:[{component:P(()=>C(()=>import("./contribute-a2770471.js"),["./contribute-a2770471.js","./index-8098ba96.js"],import.meta.url)),path:"/contribute"},{component:P(()=>C(()=>import("./donate-d17e70ed.js"),["./donate-d17e70ed.js","./index-8098ba96.js"],import.meta.url)),path:"/donate"},{component:P(()=>C(()=>import("./old-contribute-3b639368.js"),["./old-contribute-3b639368.js","./index-8098ba96.js"],import.meta.url)),path:"/old-contribute"},{component:P(()=>C(()=>import("./theinit-839f1461.js"),["./theinit-839f1461.js","./index-8098ba96.js"],import.meta.url)),path:"/theinit"},{component:P(()=>C(()=>import("./beginner-019ef840.js"),["./beginner-019ef840.js","./index-8098ba96.js"],import.meta.url)),path:"/install/beginner"},{component:P(()=>C(()=>import("./cli-install-fe3c051d.js"),["./cli-install-fe3c051d.js","./index-8098ba96.js"],import.meta.url)),path:"/install/cli-install"},{component:P(()=>C(()=>import("./welcome-300b0d50.js"),["./welcome-300b0d50.js","./index-8098ba96.js"],import.meta.url)),path:"/install/welcome"},{component:P(()=>C(()=>import("./bspwm-78c600ef.js"),["./bspwm-78c600ef.js","./index-8098ba96.js"],import.meta.url)),path:"/keybindings/bspwm"},{component:P(()=>C(()=>import("./dwm-78c600ef.js"),["./dwm-78c600ef.js","./index-8098ba96.js"],import.meta.url)),path:"/keybindings/dwm"},{component:P(()=>C(()=>import("./utilities-469b95f9.js"),["./utilities-469b95f9.js","./index-8098ba96.js"],import.meta.url)),path:"/walkthrough/utilities"},{component:P(()=>C(()=>import("./window-manager-ea4431fb.js"),["./window-manager-ea4431fb.js","./index-8098ba96.js"],import.meta.url)),path:"/walkthrough/window-manager"},{component:P(()=>C(()=>import("./boot-with-usb-8b579cb3.js"),["./boot-with-usb-8b579cb3.js","./index-8098ba96.js"],import.meta.url)),path:"/install/boot-iso/boot-with-usb"}]},{component:P(()=>C(()=>import("./index-7b6feac0.js"),["./index-7b6feac0.js","./index-d845196e.css"],import.meta.url)),path:"/"},{component:P(()=>C(()=>import("./(items)-3d3bbf54.js"),["./(items)-3d3bbf54.js","./utils-e95f56b3.js"],import.meta.url)),path:"/news",children:[{component:P(()=>C(()=>import("./metis_V2.0-dbdc4d6c.js").then(e=>e._),["./metis_V2.0-dbdc4d6c.js","./index-8098ba96.js"],import.meta.url)),path:"/metis_V2.0"}]},{component:P(()=>C(()=>import("./index-715b7e08.js"),["./index-715b7e08.js","./metis_V2.0-dbdc4d6c.js","./index-8098ba96.js"],import.meta.url)),path:"/news/"}]}],Bn=()=>Fn,bt=te({}),Un=Hn,mr=wt,gr=gt,Kn="$FETCH";$e(["click"]);const Gn=!1,Wn=!1;function Xn(){return J(bt),[E(sn,{}),"<!>",Wn,E(rn,{get children(){return at}}),Gn]}function Yn(e){return z(document.documentElement,e,!1,!0),e.children}function zn(e){return z(document.head,e,!1,!0),e.children}function Jn(e){{let t=Te(()=>e.children);return z(document.body,e,!1,!0),lt(document.body,()=>{let n=t();if(n){if(Array.isArray(n)){let s=n.filter(r=>!!r);return s.length?s:null}return n}return null},null,[...document.body.childNodes]),document.body}}const Qn="";const Zn=ce('<link rel="icon" type="image/svg+xml">',1),er=ce('<link rel="preconnect" href="https://fonts.googleapis.com">',1),tr=ce('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">',1),nr=ce('<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet">',1);function rr(){return E(Yn,{lang:"en",get children(){return[E(zn,{get children(){return[E(Se,{name:"description",content:"Metis Linux a powerful lightweight linux distro based on Artix"}),(()=>{const e=Z(Zn);return Re(e,"href",Qn+"/logo.png"),e})(),Z(er),Z(tr),Z(nr),E(gn,{children:"METIS Linux"}),E(Se,{charset:"utf-8"}),E(Se,{name:"viewport",content:"width=device-width, initial-scale=1"})]}}),E(Jn,{get children(){return[E(Dt,{get children(){return E(Un,{get children(){return E(Bn,{})}})}}),E(Xn,{})]}})]}})}const We=Object.values(Object.assign({}))[0],sr=We?We.default:void 0,ir=()=>{let e={get request(){},get clientAddress(){},get locals(){},get prevUrl(){},get responseHeaders(){},get tags(){},get env(){},get routerContext(){},setStatusCode(n){},getStatusCode(){},$type:Kn,fetch};function t(n){return E(qn,n)}return E(bt.Provider,{value:e,get children(){return E(hn,{get children(){return E(t,{get base(){return"./"},data:sr,get children(){return E(rr,{})}})}})}})};document.documentElement.className=localStorage.theme||"light";fn(()=>E(ir,{}),document);export{fe as $,hr as A,dr as D,mr as O,bt as S,gn as T,fr as a,E as b,N as c,$e as d,Qn as e,q as f,Z as g,Xt as h,lt as i,x as j,xt as k,J as l,ot as m,ar as n,pe as o,ze as p,gr as q,en as r,Re as s,ce as t,gt as u,Me as v,or as w,ur as x,cr as y,te as z};
