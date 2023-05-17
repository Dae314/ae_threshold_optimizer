(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function V(){}function xe(e){return e()}function ye(){return Object.create(null)}function H(e){e.forEach(xe)}function Ee(e){return typeof e=="function"}function Oe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Le(e){return Object.keys(e).length===0}const Ne=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in Ne;function l(e,t){e.appendChild(t)}function ae(e,t,n){e.insertBefore(t,n||null)}function se(e){e.parentNode&&e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function D(e){return document.createTextNode(e)}function w(){return D(" ")}function $(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function o(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Se(e){return e===""?null:+e}function De(e){return Array.from(e.childNodes)}function ve(e,t){t=""+t,e.data!==t&&(e.data=t)}function ne(e,t){e.value=t??""}function A(e,t,n){e.classList[n?"add":"remove"](t)}let G;function K(e){G=e}function Ie(){if(!G)throw new Error("Function called outside component initialization");return G}function Pe(e){Ie().$$.on_mount.push(e)}const U=[],we=[];let W=[];const ke=[],Ae=Promise.resolve();let ce=!1;function Be(){ce||(ce=!0,Ae.then(Me))}function Re(){return Be(),Ae}function ue(e){W.push(e)}const re=new Set;let F=0;function Me(){if(F!==0)return;const e=G;do{try{for(;F<U.length;){const t=U[F];F++,K(t),Te(t.$$)}}catch(t){throw U.length=0,F=0,t}for(K(null),U.length=0,F=0;we.length;)we.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];re.has(n)||(re.add(n),n())}W.length=0}while(U.length);for(;ke.length;)ke.pop()();ce=!1,re.clear(),K(e)}function Te(e){if(e.fragment!==null){e.update(),H(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ue)}}function je(e){const t=[],n=[];W.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),W=t}const qe=new Set;function Fe(e,t){e&&e.i&&(qe.delete(e),e.i(t))}const Ue=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Ue];function We(e,t,n,r){const{fragment:s,after_update:i}=e.$$;s&&s.m(t,n),r||ue(()=>{const a=e.$$.on_mount.map(xe).filter(Ee);e.$$.on_destroy?e.$$.on_destroy.push(...a):H(a),e.$$.on_mount=[]}),i.forEach(ue)}function ze(e,t){const n=e.$$;n.fragment!==null&&(je(n.after_update),H(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ke(e,t){e.$$.dirty[0]===-1&&(U.push(e),Be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ve(e,t,n,r,s,i,a,I=[-1]){const m=G;K(e);const u=e.$$={fragment:null,ctx:[],props:i,update:V,not_equal:s,bound:ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:ye(),dirty:I,skip_bound:!1,root:t.target||m.$$.root};a&&a(u.root);let _=!1;if(u.ctx=n?n(e,t.props||{},(v,k,...B)=>{const g=B.length?B[0]:k;return u.ctx&&s(u.ctx[v],u.ctx[v]=g)&&(!u.skip_bound&&u.bound[v]&&u.bound[v](g),_&&Ke(e,v)),k}):[],u.update(),_=!0,H(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const v=De(t.target);u.fragment&&u.fragment.l(v),v.forEach(se)}else u.fragment&&u.fragment.c();t.intro&&Fe(e.$$.fragment),We(e,t.target,t.anchor,t.customElement),Me()}K(m)}class Ge{$destroy(){ze(this,1),this.$destroy=V}$on(t,n){if(!Ee(n))return V;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!Le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function He(e){let t,n,r,s,i,a,I,m,u,_,v,k,B,g,M,J,z,Q,X,x,Y,E,f,h,p,O,b,P,C,S,q,R,fe,de,pe,Z=e[2].toLocaleString("en-US")+"",le,me,T,L,_e,ee,he,N,ge,te,oe,be;return{c(){t=c("nav"),n=c("button"),n.textContent="A Comp",r=w(),s=c("button"),s.textContent="B Comp",i=w(),a=c("button"),a.textContent="C Comp",I=w(),m=c("button"),m.textContent="D Comp",u=w(),_=c("button"),_.textContent="E Comp",v=w(),k=c("main"),B=c("div"),g=c("section"),M=c("label"),J=D("Damage Samples (recommend at least "),z=D(e[4]),Q=D(" more):"),X=w(),x=c("textarea"),Y=w(),E=c("div"),f=c("section"),h=c("div"),p=c("label"),p.textContent="Remaining Stamina:",O=w(),b=c("input"),P=w(),C=c("button"),C.textContent="Refresh",S=w(),q=c("section"),R=c("p"),fe=D("Retry if damage is less than:"),de=c("br"),pe=w(),le=D(Z),me=w(),T=c("section"),L=c("button"),_e=D("Take Damage"),he=w(),N=c("button"),ge=D("Retry"),o(n,"type","button"),o(n,"class","navButton svelte-1w2sepx"),A(n,"selected",e[3]==="A"),o(s,"type","button"),o(s,"class","navButton svelte-1w2sepx"),A(s,"selected",e[3]==="B"),o(a,"type","button"),o(a,"class","navButton svelte-1w2sepx"),A(a,"selected",e[3]==="C"),o(m,"type","button"),o(m,"class","navButton svelte-1w2sepx"),A(m,"selected",e[3]==="D"),o(_,"type","button"),o(_,"class","navButton svelte-1w2sepx"),A(_,"selected",e[3]==="E"),o(t,"class","svelte-1w2sepx"),o(M,"for","sample-input"),o(M,"class","svelte-1w2sepx"),o(x,"id","sample-input"),o(x,"name","sample-input"),o(x,"class","svelte-1w2sepx"),o(g,"class","svelte-1w2sepx"),o(B,"class","col"),o(p,"for","stamina-input"),o(p,"class","svelte-1w2sepx"),o(b,"id","stamina-input"),o(b,"name","stamina-input"),o(b,"type","number"),o(b,"class","svelte-1w2sepx"),o(h,"id","stamInputArea"),o(h,"class","svelte-1w2sepx"),o(C,"type","button"),o(C,"class","svelte-1w2sepx"),o(f,"id","stamSect"),o(f,"class","svelte-1w2sepx"),o(R,"class","svelte-1w2sepx"),o(q,"class","svelte-1w2sepx"),o(L,"class","updateButton svelte-1w2sepx"),o(L,"type","button"),L.disabled=ee=e[1]<j,o(N,"class","updateButton svelte-1w2sepx"),o(N,"type","button"),N.disabled=te=e[1]<j,o(T,"id","buttonSect"),o(T,"class","svelte-1w2sepx"),o(E,"class","col"),o(k,"class","svelte-1w2sepx")},m(d,y){ae(d,t,y),l(t,n),l(t,r),l(t,s),l(t,i),l(t,a),l(t,I),l(t,m),l(t,u),l(t,_),ae(d,v,y),ae(d,k,y),l(k,B),l(B,g),l(g,M),l(M,J),l(M,z),l(M,Q),l(g,X),l(g,x),ne(x,e[0]),l(k,Y),l(k,E),l(E,f),l(f,h),l(h,p),l(h,O),l(h,b),ne(b,e[1]),l(f,P),l(f,C),l(E,S),l(E,q),l(q,R),l(R,fe),l(R,de),l(R,pe),l(R,le),l(E,me),l(E,T),l(T,L),l(L,_e),l(T,he),l(T,N),l(N,ge),oe||(be=[$(n,"click",e[10]),$(s,"click",e[11]),$(a,"click",e[12]),$(m,"click",e[13]),$(_,"click",e[14]),$(x,"input",e[15]),$(x,"blur",e[5]),$(b,"input",e[16]),$(b,"input",e[5]),$(C,"click",e[5]),$(L,"click",e[6]),$(N,"click",e[7])],oe=!0)},p(d,[y]){y&8&&A(n,"selected",d[3]==="A"),y&8&&A(s,"selected",d[3]==="B"),y&8&&A(a,"selected",d[3]==="C"),y&8&&A(m,"selected",d[3]==="D"),y&8&&A(_,"selected",d[3]==="E"),y&16&&ve(z,d[4]),y&1&&ne(x,d[0]),y&2&&Se(b.value)!==d[1]&&ne(b,d[1]),y&4&&Z!==(Z=d[2].toLocaleString("en-US")+"")&&ve(le,Z),y&2&&ee!==(ee=d[1]<j)&&(L.disabled=ee),y&2&&te!==(te=d[1]<j)&&(N.disabled=te)},i:V,o:V,d(d){d&&se(t),d&&se(v),d&&se(k),oe=!1,H(be)}}}const j=48,ie=4,Ce=30,$e=`1e9
2e9
3e9
4e9
5e9`;function Je(e,t,n){let r,s=1e3,i=$e,a,I=0,m="A";const u=localStorage.getItem(m);u&&(i=u),Pe(()=>{_()});function _(){const f=Math.min(...a),h=Math.max(...a);let p;f>=1e12?p=1e11:f>=1e9?p=1e8:f>=1e6?p=1e5:f>=1e3?p=100:p=10;const O=Math.round(f/p)*p,b=Math.round(h/p)*p,P=(b-O)/20;let C=[];for(let S=O;S<=b;S+=P)C.push(v(S));console.log(C),n(2,I=O+C.indexOf(Math.max(...C))*P),M()}function v(f){const h=a.filter(S=>S>f);if(h.length===0)return 0;const p=h.length/a.length,O=h.reduce((S,q)=>S+q)/h.length,b=p*j+(1-p)*ie,P=Math.floor(s/b);return Math.floor(p*P)*O}function k(){s>=j&&(n(1,s-=j),_())}function B(){s>=ie&&(n(1,s-=ie),_())}async function g(f){n(3,m=f);const h=localStorage.getItem(f);n(0,i=h||$e),await Re(),_()}function M(){localStorage.setItem(m,i)}const J=()=>g("A"),z=()=>g("B"),Q=()=>g("C"),X=()=>g("D"),x=()=>g("E");function Y(){i=this.value,n(0,i)}function E(){s=Se(this.value),n(1,s)}return e.$$.update=()=>{e.$$.dirty&1&&n(9,a=i.split(`
`).map(f=>Number(f))),e.$$.dirty&512&&n(4,r=a.length<=Ce?Ce-a.length:0)},[i,s,I,m,r,_,k,B,g,a,J,z,Q,X,x,Y,E]}class Qe extends Ge{constructor(t){super(),Ve(this,t,Je,He,Oe,{})}}new Qe({target:document.getElementById("app")});