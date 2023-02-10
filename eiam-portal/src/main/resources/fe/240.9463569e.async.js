/*
 * eiam-portal - Employee Identity and Access Management Program
 * Copyright © 2020-2023 TopIAM (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";(self.webpackChunktopiam_portal=self.webpackChunktopiam_portal||[]).push([[240],{18876:function(Se,V,a){a.d(V,{Z:function(){return Pe}});var C=a(88222),g=a(79685),t=a(50374),W=a(36345),D=a(13782),f=g.createContext(null),h=f,E=a(23570),w=a(67846),p=[];function j($,y){var ee=g.useState(function(){if(!(0,W.Z)())return null;var R=document.createElement("div");return R}),be=(0,C.Z)(ee,1),G=be[0],re=g.useRef(!1),de=g.useContext(h),o=g.useState(p),u=(0,C.Z)(o,2),d=u[0],O=u[1],B=de||(re.current?void 0:function(R){O(function(Q){var K=[R].concat((0,E.Z)(Q));return K})});function T(){G.parentElement||document.body.appendChild(G),re.current=!0}function I(){var R;(R=G.parentElement)===null||R===void 0||R.removeChild(G),re.current=!1}return(0,w.Z)(function(){return $?de?de(T):T():I(),I},[$]),(0,w.Z)(function(){d.length&&(d.forEach(function(R){return R()}),O(p))},[d]),[G,B]}var e=a(31936),r=a(57749);function m(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var U="rc-util-locker-".concat(Date.now()),Z=0;function ce($){var y=!!$,ee=g.useState(function(){return Z+=1,"".concat(U,"_").concat(Z)}),be=(0,C.Z)(ee,1),G=be[0];(0,w.Z)(function(){if(y){var re=(0,r.Z)(),de=m();(0,e.hq)(`
html body {
  overflow-y: hidden;
  `.concat(de?"width: calc(100% - ".concat(re,"px);"):"",`
}`),G)}else(0,e.jL)(G);return function(){(0,e.jL)(G)}},[y,G])}var ve=!1;function $e($){return typeof $=="boolean"&&(ve=$),ve}var ue=function(y){return y===!1?!1:!(0,W.Z)()||!y?null:typeof y=="string"?document.querySelector(y):typeof y=="function"?y():y},ge=g.forwardRef(function($,y){var ee=$.open,be=$.autoLock,G=$.getContainer,re=$.debug,de=$.autoDestroy,o=de===void 0?!0:de,u=$.children,d=g.useState(ee),O=(0,C.Z)(d,2),B=O[0],T=O[1],I=B||ee;g.useEffect(function(){(o||ee)&&T(ee)},[ee,o]);var R=g.useState(function(){return ue(G)}),Q=(0,C.Z)(R,2),K=Q[0],Y=Q[1];g.useEffect(function(){var se=ue(G);Y(se!=null?se:null)});var le=j(I&&!K,re),ne=(0,C.Z)(le,2),oe=ne[0],ie=ne[1],ae=K!=null?K:oe;ce(be&&ee&&(0,W.Z)()&&(ae===oe||ae===document.body));var fe=null;if(u&&(0,D.Yr)(u)&&y){var Ce=u;fe=Ce.ref}var he=(0,D.x1)(fe,y);if(!I||!(0,W.Z)()||K===void 0)return null;var me=ae===!1||$e(),J=u;return y&&(J=g.cloneElement(u,{ref:he})),g.createElement(h.Provider,{value:ie},me?J:(0,t.createPortal)(J,ae))}),pe=ge,Pe=pe},95718:function(Se,V,a){var C=a(775),g=a(79685),t=a(8821),W=a(34207);function D(h){return!!(h&&h.then)}const f=h=>{const{type:E,children:w,prefixCls:p,buttonProps:j,close:e,autoFocus:r,emitEvent:m,quitOnNullishReturnValue:U,actionFn:Z}=h,ce=g.useRef(!1),ve=g.useRef(null),[$e,ue]=(0,C.Z)(!1),ge=function(){e==null||e.apply(void 0,arguments)};g.useEffect(()=>{let $=null;return r&&($=setTimeout(()=>{var y;(y=ve.current)===null||y===void 0||y.focus()})),()=>{$&&clearTimeout($)}},[]);const pe=$=>{D($)&&(ue(!0),$.then(function(){ue(!1,!0),ge.apply(void 0,arguments),ce.current=!1},y=>(ue(!1,!0),ce.current=!1,Promise.reject(y))))},Pe=$=>{if(ce.current)return;if(ce.current=!0,!Z){ge();return}let y;if(m){if(y=Z($),U&&!D(y)){ce.current=!1,ge($);return}}else if(Z.length)y=Z(e),ce.current=!1;else if(y=Z(),!y){ge();return}pe(y)};return g.createElement(t.ZP,Object.assign({},(0,W.n)(E),{onClick:Pe,loading:$e,prefixCls:p},j,{ref:ve}),w)};V.Z=f},96249:function(Se,V,a){a.d(V,{RV:function(){return f},Rk:function(){return h},Ux:function(){return w},aM:function(){return E},q3:function(){return W},qI:function(){return D}});var C=a(59067),g=a(8779),t=a(79685);const W=t.createContext({labelAlign:"right",vertical:!1,itemRef:()=>{}}),D=t.createContext(null),f=p=>{const j=(0,g.Z)(p,["prefixCls"]);return t.createElement(C.FormProvider,Object.assign({},j))},h=t.createContext({prefixCls:""}),E=t.createContext({}),w=p=>{let{children:j,status:e,override:r}=p;const m=(0,t.useContext)(E),U=(0,t.useMemo)(()=>{const Z=Object.assign({},m);return r&&delete Z.isFormItemInput,e&&(delete Z.status,delete Z.hasFeedback,delete Z.feedbackIcon),Z},[e,r,m]);return t.createElement(E.Provider,{value:U},j)}},60240:function(Se,V,a){a.d(V,{Z:function(){return Te}});var C=a(23570),g=a(138),t=a(79685),W=a(47918),D=a(91549),f=a(94587),h=a(86437),E=a(43894),w=a(68591),p=a.n(w),j=a(95795),e=a(95718),r=a(60789),m=a(13772),U=a(56865),Z=a(96249),ce=a(13205),ve=a(17568),$e=a(35632),ue=a(8821),ge=a(34207),pe=a(7266),Pe=a(49730),$=function(n,i){var s={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&i.indexOf(l)<0&&(s[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,l=Object.getOwnPropertySymbols(n);c<l.length;c++)i.indexOf(l[c])<0&&Object.prototype.propertyIsEnumerable.call(n,l[c])&&(s[l[c]]=n[l[c]]);return s};function y(n,i){return t.createElement("span",{className:`${n}-close-x`},i||t.createElement($e.Z,{className:`${n}-close-icon`}))}function ee(n){const{okText:i,okType:s="primary",cancelText:l,confirmLoading:c,onOk:M,onCancel:z,okButtonProps:L,cancelButtonProps:P,footer:x}=n;return x===void 0?t.createElement(j.Z,{componentName:"Modal",defaultLocale:(0,pe.A)()},v=>t.createElement(t.Fragment,null,t.createElement(ue.ZP,Object.assign({onClick:z},P),l||v.cancelText),t.createElement(ue.ZP,Object.assign({},(0,ge.n)(s),{loading:c,onClick:M},L),i||v.okText))):x}function be(n){const{prefixCls:i,className:s,closeIcon:l,closable:c,type:M,title:z,children:L}=n,P=$(n,["prefixCls","className","closeIcon","closable","type","title","children"]),{getPrefixCls:x}=t.useContext(U.E_),v=x(),F=i||x("modal"),[,S]=(0,Pe.Z)(F),b=`${F}-confirm`;let H={};return M?H={closable:c!=null?c:!1,title:"",footer:"",children:t.createElement(d,Object.assign({},n,{confirmPrefixCls:b,rootPrefixCls:v,content:L}))}:H={closable:c!=null?c:!0,title:z,footer:ee(n),children:L},t.createElement(m.Panel,Object.assign({prefixCls:F,className:p()(S,`${F}-pure-panel`,M&&b,M&&`${b}-${M}`,s)},P,{closeIcon:y(F,l),closable:c},H))}var G=function(n,i){var s={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&i.indexOf(l)<0&&(s[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,l=Object.getOwnPropertySymbols(n);c<l.length;c++)i.indexOf(l[c])<0&&Object.prototype.propertyIsEnumerable.call(n,l[c])&&(s[l[c]]=n[l[c]]);return s};let re;const de=n=>{re={x:n.pageX,y:n.pageY},setTimeout(()=>{re=null},100)};(0,ve.jD)()&&document.documentElement.addEventListener("click",de,!0);var u=n=>{var i;const{getPopupContainer:s,getPrefixCls:l,direction:c}=t.useContext(U.E_),M=Me=>{const{onCancel:Ee}=n;Ee==null||Ee(Me)},z=Me=>{const{onOk:Ee}=n;Ee==null||Ee(Me)},{prefixCls:L,className:P,rootClassName:x,open:v,wrapClassName:F,centered:S,getContainer:b,closeIcon:H,focusTriggerAfterClose:A=!0,visible:k,width:te=520}=n,N=G(n,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","closeIcon","focusTriggerAfterClose","visible","width"]),_=l("modal",L),X=l(),[Re,Ne]=(0,Pe.Z)(_),De=p()(F,{[`${_}-centered`]:!!S,[`${_}-wrap-rtl`]:c==="rtl"});return Re(t.createElement(ce.BR,null,t.createElement(Z.Ux,{status:!0,override:!0},t.createElement(m.default,Object.assign({width:te},N,{getContainer:b===void 0?s:b,prefixCls:_,rootClassName:p()(Ne,x),wrapClassName:De,footer:ee(Object.assign(Object.assign({},n),{onOk:z,onCancel:M})),visible:v!=null?v:k,mousePosition:(i=N.mousePosition)!==null&&i!==void 0?i:re,onClose:M,closeIcon:y(_,H),focusTriggerAfterClose:A,transitionName:(0,r.mL)(X,"zoom",n.transitionName),maskTransitionName:(0,r.mL)(X,"fade",n.maskTransitionName),className:p()(Ne,P)})))))};function d(n){const{icon:i,onCancel:s,onOk:l,close:c,okText:M,okButtonProps:z,cancelText:L,cancelButtonProps:P,confirmPrefixCls:x,rootPrefixCls:v,type:F,okCancel:S,footer:b,locale:H}=n;let A=i;if(!i&&i!==null)switch(F){case"info":A=t.createElement(E.Z,null);break;case"success":A=t.createElement(D.Z,null);break;case"error":A=t.createElement(f.Z,null);break;default:A=t.createElement(h.Z,null)}const k=n.okType||"primary",te=S!=null?S:F==="confirm",N=n.autoFocusButton===null?!1:n.autoFocusButton||"ok";return t.createElement(j.Z,{componentName:"Modal"},_=>{const X=H||_,Re=te&&t.createElement(e.Z,{actionFn:s,close:c,autoFocus:N==="cancel",buttonProps:P,prefixCls:`${v}-btn`},L||(X==null?void 0:X.cancelText));return t.createElement("div",{className:`${x}-body-wrapper`},t.createElement("div",{className:`${x}-body`},A,n.title===void 0?null:t.createElement("span",{className:`${x}-title`},n.title),t.createElement("div",{className:`${x}-content`},n.content)),b!==void 0?b:t.createElement("div",{className:`${x}-btns`},Re,t.createElement(e.Z,{type:k,actionFn:l,close:c,autoFocus:N==="ok",buttonProps:z,prefixCls:`${v}-btn`},M||(te?X==null?void 0:X.okText:X==null?void 0:X.justOkText))))})}var B=n=>{const{close:i,zIndex:s,afterClose:l,visible:c,open:M,keyboard:z,centered:L,getContainer:P,maskStyle:x,direction:v,prefixCls:F,wrapClassName:S,rootPrefixCls:b,iconPrefixCls:H,bodyStyle:A,closable:k=!1,closeIcon:te,modalRender:N,focusTriggerAfterClose:_}=n,X=`${F}-confirm`,Re=n.width||416,Ne=n.style||{},De=n.mask===void 0?!0:n.mask,Me=n.maskClosable===void 0?!1:n.maskClosable,Ee=p()(X,`${X}-${n.type}`,{[`${X}-rtl`]:v==="rtl"},n.className);return t.createElement(W.ZP,{prefixCls:b,iconPrefixCls:H,direction:v},t.createElement(u,{prefixCls:F,className:Ee,wrapClassName:p()({[`${X}-centered`]:!!n.centered},S),onCancel:()=>i==null?void 0:i({triggerCancel:!0}),open:M,title:"",footer:"",transitionName:(0,r.mL)(b,"zoom",n.transitionName),maskTransitionName:(0,r.mL)(b,"fade",n.maskTransitionName),mask:De,maskClosable:Me,maskStyle:x,style:Ne,bodyStyle:A,width:Re,zIndex:s,afterClose:l,keyboard:z,centered:L,getContainer:P,closable:k,closeIcon:te,modalRender:N,focusTriggerAfterClose:_},t.createElement(d,Object.assign({},n,{confirmPrefixCls:X}))))},I=[],R=function(n,i){var s={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&i.indexOf(l)<0&&(s[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,l=Object.getOwnPropertySymbols(n);c<l.length;c++)i.indexOf(l[c])<0&&Object.prototype.propertyIsEnumerable.call(n,l[c])&&(s[l[c]]=n[l[c]]);return s};let Q="";function K(){return Q}function Y(n){const i=document.createDocumentFragment();let s=Object.assign(Object.assign({},n),{close:z,open:!0}),l;function c(){for(var P=arguments.length,x=new Array(P),v=0;v<P;v++)x[v]=arguments[v];const F=x.some(S=>S&&S.triggerCancel);n.onCancel&&F&&n.onCancel.apply(n,[()=>{}].concat((0,C.Z)(x.slice(1))));for(let S=0;S<I.length;S++)if(I[S]===z){I.splice(S,1);break}(0,g.v)(i)}function M(P){var{okText:x,cancelText:v,prefixCls:F}=P,S=R(P,["okText","cancelText","prefixCls"]);clearTimeout(l),l=setTimeout(()=>{const b=(0,pe.A)(),{getPrefixCls:H,getIconPrefixCls:A}=(0,W.w6)(),k=H(void 0,K()),te=F||`${k}-modal`,N=A();(0,g.s)(t.createElement(B,Object.assign({},S,{prefixCls:te,rootPrefixCls:k,iconPrefixCls:N,okText:x,locale:b,cancelText:v||b.cancelText})),i)})}function z(){for(var P=arguments.length,x=new Array(P),v=0;v<P;v++)x[v]=arguments[v];s=Object.assign(Object.assign({},s),{open:!1,afterClose:()=>{typeof n.afterClose=="function"&&n.afterClose(),c.apply(this,x)}}),s.visible&&delete s.visible,M(s)}function L(P){typeof P=="function"?s=P(s):s=Object.assign(Object.assign({},s),P),M(s)}return M(s),I.push(z),{destroy:z,update:L}}function le(n){return Object.assign(Object.assign({},n),{type:"warning"})}function ne(n){return Object.assign(Object.assign({},n),{type:"info"})}function oe(n){return Object.assign(Object.assign({},n),{type:"success"})}function ie(n){return Object.assign(Object.assign({},n),{type:"error"})}function ae(n){return Object.assign(Object.assign({},n),{type:"confirm"})}function fe(n){let{rootPrefixCls:i}=n;Q=i}function Ce(){const[n,i]=t.useState([]),s=t.useCallback(l=>(i(c=>[].concat((0,C.Z)(c),[l])),()=>{i(c=>c.filter(M=>M!==l))}),[]);return[n,s]}var he=a(42615);const me=(n,i)=>{let{afterClose:s,config:l}=n;var c;const[M,z]=t.useState(!0),[L,P]=t.useState(l),{direction:x,getPrefixCls:v}=t.useContext(U.E_),F=v("modal"),S=v(),b=function(){z(!1);for(var A=arguments.length,k=new Array(A),te=0;te<A;te++)k[te]=arguments[te];const N=k.some(_=>_&&_.triggerCancel);L.onCancel&&N&&L.onCancel.apply(L,[()=>{}].concat((0,C.Z)(k.slice(1))))};t.useImperativeHandle(i,()=>({destroy:b,update:A=>{P(k=>Object.assign(Object.assign({},k),A))}}));const H=(c=L.okCancel)!==null&&c!==void 0?c:L.type==="confirm";return t.createElement(j.Z,{componentName:"Modal",defaultLocale:he.Z.Modal},A=>t.createElement(B,Object.assign({prefixCls:F,rootPrefixCls:S},L,{close:b,open:M,afterClose:s,okText:L.okText||(H?A.okText:A.justOkText),direction:x,cancelText:L.cancelText||A.cancelText})))};var J=t.forwardRef(me);let se=0;const ye=t.memo(t.forwardRef((n,i)=>{const[s,l]=Ce();return t.useImperativeHandle(i,()=>({patchElement:l}),[]),t.createElement(t.Fragment,null,s)}));function xe(){const n=t.useRef(null),[i,s]=t.useState([]);t.useEffect(()=>{i.length&&((0,C.Z)(i).forEach(z=>{z()}),s([]))},[i]);const l=t.useCallback(M=>function(L){var P;se+=1;const x=t.createRef();let v;const F=t.createElement(J,{key:`modal-${se}`,config:M(L),ref:x,afterClose:()=>{v==null||v()}});return v=(P=n.current)===null||P===void 0?void 0:P.patchElement(F),v&&I.push(v),{destroy:()=>{function S(){var b;(b=x.current)===null||b===void 0||b.destroy()}x.current?S():s(b=>[].concat((0,C.Z)(b),[S]))},update:S=>{function b(){var H;(H=x.current)===null||H===void 0||H.update(S)}x.current?b():s(H=>[].concat((0,C.Z)(H),[b]))}}},[]);return[t.useMemo(()=>({info:l(ne),success:l(oe),error:l(ie),warning:l(le),confirm:l(ae)}),[]),t.createElement(ye,{key:"modal-holder",ref:n})]}var Oe=xe;function Ie(n){return Y(le(n))}const q=u;q.useModal=Oe,q.info=function(i){return Y(ne(i))},q.success=function(i){return Y(oe(i))},q.error=function(i){return Y(ie(i))},q.warning=Ie,q.warn=Ie,q.confirm=function(i){return Y(ae(i))},q.destroyAll=function(){for(;I.length;){const i=I.pop();i&&i()}},q.config=fe,q._InternalPanelDoNotUseOrYouWillBeFired=be;var Te=q},49730:function(Se,V,a){a.d(V,{Q:function(){return h}});var C=a(87298),g=a(73069),t=a(83396),W=a(42006),D=a(42786);function f(e){return{position:e,top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0}}const h=e=>{const{componentCls:r}=e;return[{[`${r}-root`]:{[`${r}${e.antCls}-zoom-enter, ${r}${e.antCls}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${r}-mask`]:Object.assign(Object.assign({},f("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,[`${r}-hidden`]:{display:"none"}}),[`${r}-wrap`]:Object.assign(Object.assign({},f("fixed")),{overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"})}},{[`${r}-root`]:(0,C.J$)(e)}]},E=e=>{const{componentCls:r}=e;return[{[`${r}-root`]:{[`${r}-wrap`]:{zIndex:e.zIndexPopupBase,position:"fixed",inset:0,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"},[`${r}-wrap-rtl`]:{direction:"rtl"},[`${r}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[r]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax})`]:{[r]:{maxWidth:"calc(100vw - 16px)",margin:`${e.marginXS} auto`},[`${r}-centered`]:{[r]:{flex:1}}}}},{[r]:Object.assign(Object.assign({},(0,D.Wf)(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${e.margin*2}px)`,margin:"0 auto",paddingBottom:e.paddingLG,[`${r}-title`]:{margin:0,color:e.modalHeadingColor,fontWeight:e.fontWeightStrong,fontSize:e.modalHeaderTitleFontSize,lineHeight:e.modalHeaderTitleLineHeight,wordWrap:"break-word"},[`${r}-content`]:{position:"relative",backgroundColor:e.modalContentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadow,pointerEvents:"auto",padding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`},[`${r}-close`]:Object.assign({position:"absolute",top:(e.modalHeaderCloseSize-e.modalCloseBtnSize)/2,insetInlineEnd:(e.modalHeaderCloseSize-e.modalCloseBtnSize)/2,zIndex:e.zIndexPopupBase+10,padding:0,color:e.modalCloseColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalConfirmIconSize,height:e.modalConfirmIconSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"block",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:`${e.modalCloseBtnSize}px`,textAlign:"center",textTransform:"none",textRendering:"auto"},"&:hover":{color:e.modalIconHoverColor,backgroundColor:e.wireframe?"transparent":e.colorFillContent,textDecoration:"none"},"&:active":{backgroundColor:e.wireframe?"transparent":e.colorFillContentHover}},(0,D.Qy)(e)),[`${r}-header`]:{color:e.colorText,background:e.modalHeaderBg,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,marginBottom:e.marginXS},[`${r}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word"},[`${r}-footer`]:{textAlign:"end",background:e.modalFooterBg,marginTop:e.marginSM,[`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]:{marginBottom:0,marginInlineStart:e.marginXS}},[`${r}-open`]:{overflow:"hidden"}})},{[`${r}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${r}-content,
          ${r}-body,
          ${r}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${r}-confirm-body`]:{marginBottom:"auto"}}}]},w=e=>{const{componentCls:r}=e,m=`${r}-confirm`;return{[m]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${m}-body-wrapper`]:Object.assign({},(0,D.dF)()),[`${m}-body`]:{display:"flex",flexWrap:"wrap",alignItems:"center",[`${m}-title`]:{flex:"0 0 100%",display:"block",overflow:"hidden",color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.modalHeaderTitleFontSize,lineHeight:e.modalHeaderTitleLineHeight,[`+ ${m}-content`]:{marginBlockStart:e.marginXS,flexBasis:"100%",maxWidth:`calc(100% - ${e.modalConfirmIconSize+e.marginSM}px)`}},[`${m}-content`]:{color:e.colorText,fontSize:e.fontSize},[`> ${e.iconCls}`]:{flex:"none",marginInlineEnd:e.marginSM,fontSize:e.modalConfirmIconSize,[`+ ${m}-title`]:{flex:1},[`+ ${m}-title + ${m}-content`]:{marginInlineStart:e.modalConfirmIconSize+e.marginSM}}},[`${m}-btns`]:{textAlign:"end",marginTop:e.marginSM,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${m}-error ${m}-body > ${e.iconCls}`]:{color:e.colorError},[`${m}-warning ${m}-body > ${e.iconCls},
        ${m}-confirm ${m}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${m}-info ${m}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${m}-success ${m}-body > ${e.iconCls}`]:{color:e.colorSuccess},[`${r}-zoom-leave ${r}-btns`]:{pointerEvents:"none"}}},p=e=>{const{componentCls:r}=e;return{[`${r}-root`]:{[`${r}-wrap-rtl`]:{direction:"rtl",[`${r}-confirm-body`]:{direction:"rtl"}}}}},j=e=>{const{componentCls:r,antCls:m}=e,U=`${r}-confirm`;return{[r]:{[`${r}-content`]:{padding:0},[`${r}-header`]:{padding:e.modalHeaderPadding,borderBottom:`${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,marginBottom:0},[`${r}-body`]:{padding:e.modalBodyPadding},[`${r}-footer`]:{padding:`${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,borderTop:`${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,marginTop:0}},[U]:{[`${m}-modal-body`]:{padding:`${e.padding*2}px ${e.padding*2}px ${e.paddingLG}px`},[`${U}-body`]:{[`> ${e.iconCls}`]:{marginInlineEnd:e.margin,[`+ ${U}-title + ${U}-content`]:{marginInlineStart:e.modalConfirmIconSize+e.margin}}},[`${U}-btns`]:{marginTop:e.marginLG}}}};V.Z=(0,t.Z)("Modal",e=>{const r=e.padding,m=e.fontSizeHeading5,U=e.lineHeightHeading5,Z=(0,W.TS)(e,{modalBodyPadding:e.paddingLG,modalHeaderBg:e.colorBgElevated,modalHeaderPadding:`${r}px ${e.paddingLG}px`,modalHeaderBorderWidth:e.lineWidth,modalHeaderBorderStyle:e.lineType,modalHeaderTitleLineHeight:U,modalHeaderTitleFontSize:m,modalHeaderBorderColorSplit:e.colorSplit,modalHeaderCloseSize:U*m+r*2,modalContentBg:e.colorBgElevated,modalHeadingColor:e.colorTextHeading,modalCloseColor:e.colorTextDescription,modalFooterBg:"transparent",modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterPaddingVertical:e.paddingXS,modalFooterPaddingHorizontal:e.padding,modalFooterBorderWidth:e.lineWidth,modalConfirmTitleFontSize:e.fontSizeLG,modalIconHoverColor:e.colorIconHover,modalConfirmIconSize:e.fontSize*e.lineHeight,modalCloseBtnSize:e.controlHeightLG*.55});return[E(Z),w(Z),p(Z),h(Z),e.wireframe&&j(Z),(0,g._y)(Z,"zoom")]})},87298:function(Se,V,a){a.d(V,{J$:function(){return D}});var C=a(25646),g=a(55341);const t=new C.Keyframes("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),W=new C.Keyframes("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),D=function(f){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:E}=f,w=`${E}-fade`,p=h?"&":"";return[(0,g.R)(w,t,W,f.motionDurationMid,h),{[`
        ${p}${w}-enter,
        ${p}${w}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${p}${w}-leave`]:{animationTimingFunction:"linear"}}]}},13772:function(Se,V,a){a.r(V),a.d(V,{Panel:function(){return $},default:function(){return de}});var C=a(97446),g=a(88222),t=a(79685),W=a.t(t,2),D=a(18876),f=a(5543),h=a(68591),E=a.n(h),w=a(51681);function p(){var o=(0,f.Z)({},W);return o.useId}var j=0;function e(){}function r(o){var u=t.useState("ssr-id"),d=(0,g.Z)(u,2),O=d[0],B=d[1],T=p(),I=T==null?void 0:T();return t.useEffect(function(){if(!T){var R=j;j+=1,B("rc_unique_".concat(R))}},[]),o||I||O}var m=a(14754),U=a(72203),Z=a(33666);function ce(o){var u=o.prefixCls,d=o.style,O=o.visible,B=o.maskProps,T=o.motionName;return t.createElement(Z.default,{key:"mask",visible:O,motionName:T,leavedClassName:"".concat(u,"-mask-hidden")},function(I,R){var Q=I.className,K=I.style;return t.createElement("div",(0,C.Z)({ref:R,style:(0,f.Z)((0,f.Z)({},K),d),className:E()("".concat(u,"-mask"),Q)},B))})}function ve(o,u,d){var O=u;return!O&&d&&(O="".concat(o,"-").concat(d)),O}function $e(o,u){var d=o["page".concat(u?"Y":"X","Offset")],O="scroll".concat(u?"Top":"Left");if(typeof d!="number"){var B=o.document;d=B.documentElement[O],typeof d!="number"&&(d=B.body[O])}return d}function ue(o){var u=o.getBoundingClientRect(),d={left:u.left,top:u.top},O=o.ownerDocument,B=O.defaultView||O.parentWindow;return d.left+=$e(B),d.top+=$e(B,!0),d}var ge=t.memo(function(o){var u=o.children;return u},function(o,u){var d=u.shouldUpdate;return!d}),pe={width:0,height:0,overflow:"hidden",outline:"none"},Pe=t.forwardRef(function(o,u){var d=o.prefixCls,O=o.className,B=o.style,T=o.title,I=o.ariaId,R=o.footer,Q=o.closable,K=o.closeIcon,Y=o.onClose,le=o.children,ne=o.bodyStyle,oe=o.bodyProps,ie=o.modalRender,ae=o.onMouseDown,fe=o.onMouseUp,Ce=o.holderRef,he=o.visible,me=o.forceRender,J=o.width,se=o.height,ye=(0,t.useRef)(),xe=(0,t.useRef)();t.useImperativeHandle(u,function(){return{focus:function(){var s;(s=ye.current)===null||s===void 0||s.focus()},changeActive:function(s){var l=document,c=l.activeElement;s&&c===xe.current?ye.current.focus():!s&&c===ye.current&&xe.current.focus()}}});var Oe={};J!==void 0&&(Oe.width=J),se!==void 0&&(Oe.height=se);var Ie;R&&(Ie=t.createElement("div",{className:"".concat(d,"-footer")},R));var q;T&&(q=t.createElement("div",{className:"".concat(d,"-header")},t.createElement("div",{className:"".concat(d,"-title"),id:I},T)));var Te;Q&&(Te=t.createElement("button",{type:"button",onClick:Y,"aria-label":"Close",className:"".concat(d,"-close")},K||t.createElement("span",{className:"".concat(d,"-close-x")})));var n=t.createElement("div",{className:"".concat(d,"-content")},Te,q,t.createElement("div",(0,C.Z)({className:"".concat(d,"-body"),style:ne},oe),le),Ie);return t.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":T?I:null,"aria-modal":"true",ref:Ce,style:(0,f.Z)((0,f.Z)({},B),Oe),className:E()(d,O),onMouseDown:ae,onMouseUp:fe},t.createElement("div",{tabIndex:0,ref:ye,style:pe,"aria-hidden":"true"}),t.createElement(ge,{shouldUpdate:he||me},ie?ie(n):n),t.createElement("div",{tabIndex:0,ref:xe,style:pe,"aria-hidden":"true"}))}),$=Pe,y=t.forwardRef(function(o,u){var d=o.prefixCls,O=o.title,B=o.style,T=o.className,I=o.visible,R=o.forceRender,Q=o.destroyOnClose,K=o.motionName,Y=o.ariaId,le=o.onVisibleChanged,ne=o.mousePosition,oe=(0,t.useRef)(),ie=t.useState(),ae=(0,g.Z)(ie,2),fe=ae[0],Ce=ae[1],he={};fe&&(he.transformOrigin=fe);function me(){var J=ue(oe.current);Ce(ne?"".concat(ne.x-J.left,"px ").concat(ne.y-J.top,"px"):"")}return t.createElement(Z.default,{visible:I,onVisibleChanged:le,onAppearPrepare:me,onEnterPrepare:me,forceRender:R,motionName:K,removeOnLeave:Q,ref:oe},function(J,se){var ye=J.className,xe=J.style;return t.createElement($,(0,C.Z)({},o,{ref:u,title:O,ariaId:Y,prefixCls:d,holderRef:se,style:(0,f.Z)((0,f.Z)((0,f.Z)({},xe),B),he),className:E()(T,ye)}))})});y.displayName="Content";var ee=y;function be(o){var u=o.prefixCls,d=u===void 0?"rc-dialog":u,O=o.zIndex,B=o.visible,T=B===void 0?!1:B,I=o.keyboard,R=I===void 0?!0:I,Q=o.focusTriggerAfterClose,K=Q===void 0?!0:Q,Y=o.wrapStyle,le=o.wrapClassName,ne=o.wrapProps,oe=o.onClose,ie=o.afterClose,ae=o.transitionName,fe=o.animation,Ce=o.closable,he=Ce===void 0?!0:Ce,me=o.mask,J=me===void 0?!0:me,se=o.maskTransitionName,ye=o.maskAnimation,xe=o.maskClosable,Oe=xe===void 0?!0:xe,Ie=o.maskStyle,q=o.maskProps,Te=o.rootClassName,n=(0,t.useRef)(),i=(0,t.useRef)(),s=(0,t.useRef)(),l=t.useState(T),c=(0,g.Z)(l,2),M=c[0],z=c[1],L=r();function P(){(0,m.Z)(i.current,document.activeElement)||(n.current=document.activeElement)}function x(){if(!(0,m.Z)(i.current,document.activeElement)){var N;(N=s.current)===null||N===void 0||N.focus()}}function v(N){if(N)x();else{if(z(!1),J&&n.current&&K){try{n.current.focus({preventScroll:!0})}catch(_){}n.current=null}M&&(ie==null||ie())}}function F(N){oe==null||oe(N)}var S=(0,t.useRef)(!1),b=(0,t.useRef)(),H=function(){clearTimeout(b.current),S.current=!0},A=function(){b.current=setTimeout(function(){S.current=!1})},k=null;Oe&&(k=function(_){S.current?S.current=!1:i.current===_.target&&F(_)});function te(N){if(R&&N.keyCode===w.Z.ESC){N.stopPropagation(),F(N);return}T&&N.keyCode===w.Z.TAB&&s.current.changeActive(!N.shiftKey)}return(0,t.useEffect)(function(){T&&(z(!0),P())},[T]),(0,t.useEffect)(function(){return function(){clearTimeout(b.current)}},[]),t.createElement("div",(0,C.Z)({className:E()("".concat(d,"-root"),Te)},(0,U.Z)(o,{data:!0})),t.createElement(ce,{prefixCls:d,visible:J&&T,motionName:ve(d,se,ye),style:(0,f.Z)({zIndex:O},Ie),maskProps:q}),t.createElement("div",(0,C.Z)({tabIndex:-1,onKeyDown:te,className:E()("".concat(d,"-wrap"),le),ref:i,onClick:k,style:(0,f.Z)((0,f.Z)({zIndex:O},Y),{},{display:M?null:"none"})},ne),t.createElement(ee,(0,C.Z)({},o,{onMouseDown:H,onMouseUp:A,ref:s,closable:he,ariaId:L,prefixCls:d,visible:T&&M,onClose:F,onVisibleChanged:v,motionName:ve(d,ae,fe)}))))}var G=function(u){var d=u.visible,O=u.getContainer,B=u.forceRender,T=u.destroyOnClose,I=T===void 0?!1:T,R=u.afterClose,Q=t.useState(d),K=(0,g.Z)(Q,2),Y=K[0],le=K[1];return t.useEffect(function(){d&&le(!0)},[d]),!B&&I&&!Y?null:t.createElement(D.Z,{open:d||B||Y,autoDestroy:!1,getContainer:O,autoLock:d||Y},t.createElement(be,(0,C.Z)({},u,{destroyOnClose:I,afterClose:function(){R==null||R(),le(!1)}})))};G.displayName="Dialog";var re=G,de=re},57749:function(Se,V,a){a.d(V,{Z:function(){return g},o:function(){return W}});var C;function g(D){if(typeof document=="undefined")return 0;if(D||C===void 0){var f=document.createElement("div");f.style.width="100%",f.style.height="200px";var h=document.createElement("div"),E=h.style;E.position="absolute",E.top="0",E.left="0",E.pointerEvents="none",E.visibility="hidden",E.width="200px",E.height="150px",E.overflow="hidden",h.appendChild(f),document.body.appendChild(h);var w=f.offsetWidth;h.style.overflow="scroll";var p=f.offsetWidth;w===p&&(p=h.clientWidth),document.body.removeChild(h),C=w-p}return C}function t(D){var f=D.match(/^(.*)px$/),h=Number(f==null?void 0:f[1]);return Number.isNaN(h)?g():h}function W(D){if(typeof document=="undefined"||!D||!(D instanceof Element))return{width:0,height:0};var f=getComputedStyle(D,"::-webkit-scrollbar"),h=f.width,E=f.height;return{width:t(h),height:t(E)}}},72203:function(Se,V,a){a.d(V,{Z:function(){return E}});var C=a(5543),g=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,t=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,W="".concat(g," ").concat(t).split(/[\s\n]+/),D="aria-",f="data-";function h(w,p){return w.indexOf(p)===0}function E(w){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,j;p===!1?j={aria:!0,data:!0,attr:!0}:p===!0?j={aria:!0}:j=(0,C.Z)({},p);var e={};return Object.keys(w).forEach(function(r){(j.aria&&(r==="role"||h(r,D))||j.data&&h(r,f)||j.attr&&W.includes(r))&&(e[r]=w[r])}),e}}}]);
