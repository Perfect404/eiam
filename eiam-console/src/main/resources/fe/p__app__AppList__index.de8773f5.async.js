/*
 * eiam-console - Employee Identity and Access Management Program
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
"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[6461],{43506:function(k,A,t){t.r(A),t.d(A,{default:function(){return E}});var D=t(84019),$=t.n(D),z=t(32061),h=t.n(z),R=t(76091),B=t.n(R),P=t(11880),H=t(43637),I=t(80591),L=t(82925),M=t(62119),W=t(93973),F=t(91902),X=t(8821),G=t(86977),T=t(18054),O=t(90914),U=t(79685),N=t(59787),K=t(39620),r=t.n(K),Z=t(47918),Q=t(84904),e=Z.ZP.ConfigContext;function d(v){var b=(0,U.useContext)(e),S=b.getPrefixCls,C=".".concat(S()),l=".".concat(v),u=(0,Q.l)(function(i){var c,g,s,p=i.token;return s={},r()(s,"".concat(l),(c={},r()(c,"&-content",{marginInlineStart:"15px","& > div":{marginInlineStart:"0"}}),r()(c,"&-item-content",{display:"block",flex:"none",width:"100%"}),r()(c,"".concat(C,"-avatar > img"),{objectFit:"fill"}),r()(c,"".concat(C,"-card-head"),{borderBottom:"none"}),r()(c,"".concat(C,"-card-head-title"),{padding:"24px 0",lineHeight:"32px"}),r()(c,"".concat(C,"-card-extra"),{padding:"24px 0"}),r()(c,"".concat(C,"-list-pagination"),{marginTop:"24px"}),r()(c,"".concat(C,"-avatar-lg"),{width:"48px",height:"48px",lineHeight:"48px"}),r()(c,"".concat(C,"-list-item-action"),{marginInlineStart:"15px"}),r()(c,"".concat(C,"-pro-list ").concat(C,"-pro-list-row"),{paddingLeft:"10px",paddingRight:"10px"}),r()(c,"".concat(C,"-pro-list ").concat(C,"-pro-list-row-content"),{flex:0,margin:"0"}),c)),r()(s,"@media  (max-width: ".concat(p.screenXS,"px)"),r()({},"".concat(l),(g={},r()(g,"&-content",{marginInlineStart:"0","& > div":{marginInlineStart:"0"}}),r()(g,"&-item-content",{display:"block",flex:"none",width:"100%"}),g))),r()(s,"@media  (max-width: ".concat(p.screenSM,"px)"),r()({},"".concat(l),{})),r()(s,"@media  (max-width: ".concat(p.screenMD,"px)"),r()({},"".concat(l),r()({},"&-content",{"& > div":{display:"block","&:last-child":{top:"0",width:"100%"}}}))),r()(s,"@media  (max-width: ".concat(p.screenLG,") and  @media (min-width: ").concat(p.screenMD,")"),r()({},"".concat(l),r()({},"&-content",{"& > div":{display:"block","&:last-child":{top:"0",width:"100%"}}}))),r()(s,"@media  (max-width: ".concat(p.screenXL,"px)"),r()({},"".concat(l),r()({},"&-content",{"& > div":{marginInlineStart:"24px","&:last-child":{top:"0"}}}))),r()(s,"@media  (max-width: 1400px)",r()({},"".concat(l),r()({},"&-content",{"& > div":{"&:last-child":{top:"0"}}}))),s});return{className:u}}var a=t(68591),o=t.n(a),n=t(63342),m="app-list",y=function(){var v=(0,U.useRef)(),b=d(m),S=b.className,C=function(u){return(0,n.jsx)("div",{className:o()("".concat(m,"-content")),children:(0,n.jsx)("div",{className:o()("".concat(m,"-item-content")),children:(0,n.jsx)(W.Z,{size:0,children:u.enabled?(0,n.jsx)(F.Z,{color:"#5BD8A6",children:"\u5DF2\u542F\u7528"},u.id):(0,n.jsx)(F.Z,{color:"#e54545",children:"\u672A\u542F\u7528"},u.id)},u.id)})})};return(0,n.jsx)("div",{className:S,children:(0,n.jsx)(L._z,{className:o()("".concat(m)),content:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{children:"\u7BA1\u7406\u5458\u53EF\u4EE5\u5728\u5F53\u524D\u9875\u9762\u7BA1\u7406\u5DF2\u7ECF\u6DFB\u52A0\u7684\u6240\u6709\u5E94\u7528\uFF0C\u5E94\u7528\u53EF\u4EE5\u5B9E\u73B0\u5355\u70B9\u767B\u5F55\u548C\u6570\u636E\u540C\u6B65\u80FD\u529B\u3002"})}),children:(0,n.jsx)(M.Rs,{search:{},actionRef:v,rowKey:"id",split:!0,showActions:"always",pagination:{defaultPageSize:5,size:"small"},request:P.yk,headerTitle:"\u5E94\u7528\u5217\u8868",form:{syncToUrl:function(u,i){return i==="get"?B()({},u):u}},toolBarRender:function(){return[(0,n.jsxs)(X.ZP,{type:"primary",onClick:function(){N.history.push("/app/create")},children:[(0,n.jsx)(H.Z,{}),"\u6DFB\u52A0\u5E94\u7528"]},"add")]},metas:{title:{dataIndex:"name",title:"\u5E94\u7528\u540D\u79F0",render:function(u,i){return(0,n.jsx)("span",{onClick:function(){N.history.push("/app/config?id=".concat(i.id,"&protocol=").concat(i.protocol,"&name=").concat(i.name))},children:u})}},avatar:{search:!1,render:function(u,i){return(0,n.jsx)(G.C,{shape:"square",size:45,src:i.icon},i.id)}},description:{search:!1,dataIndex:"remark"},content:{search:!1,render:function(u,i){return[(0,n.jsx)(C,B()({},i),"context")]}},actions:{render:function(u,i){return[i.enabled?(0,n.jsx)(T.Z,{title:"\u786E\u5B9A\u7981\u7528\u8BE5\u5E94\u7528\u5417\uFF1F",placement:"bottomRight",icon:(0,n.jsx)(I.Z,{style:{color:"red"}}),onConfirm:h()($()().mark(function c(){var g,s,p,x;return $()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,P._b)(i.id);case 2:if(g=f.sent,s=g.success,p=g.result,!(s&&p)){f.next=10;break}return O.ZP.success("\u64CD\u4F5C\u6210\u529F"),f.next=9,(x=v.current)===null||x===void 0?void 0:x.reload();case 9:return f.abrupt("return");case 10:case"end":return f.stop()}},c)})),okText:"\u662F",cancelText:"\u5426",children:(0,n.jsx)("a",{children:"\u7981\u7528"},"disabled")},"disabled"):(0,n.jsx)(T.Z,{title:"\u786E\u5B9A\u542F\u7528\u8BE5\u5E94\u7528\u5417\uFF1F",placement:"bottomRight",icon:(0,n.jsx)(I.Z,{}),onConfirm:h()($()().mark(function c(){var g,s,p,x;return $()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,P.Y8)(i.id);case 2:if(g=f.sent,s=g.success,p=g.result,!(s&&p)){f.next=10;break}return O.ZP.success("\u64CD\u4F5C\u6210\u529F").then(),f.next=9,(x=v.current)===null||x===void 0?void 0:x.reload();case 9:return f.abrupt("return");case 10:case"end":return f.stop()}},c)})),okText:"\u662F",cancelText:"\u5426",children:(0,n.jsx)("a",{children:"\u542F\u7528"},"enabled")},"disabled"),(0,n.jsx)("a",{onClick:function(){N.history.push("/app/config?id=".concat(i.id,"&protocol=").concat(i.protocol,"&name=").concat(i.name))},children:"\u7BA1\u7406"},"config"),(0,n.jsx)(T.Z,{title:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u6B64\u5E94\u7528\uFF1F",placement:"bottomRight",icon:(0,n.jsx)(I.Z,{style:{color:"red"}}),onConfirm:h()($()().mark(function c(){var g,s,p;return $()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,(0,P.Fq)(i.id);case 2:if(g=j.sent,s=g.success,!s){j.next=8;break}return O.ZP.success("\u64CD\u4F5C\u6210\u529F"),(p=v.current)===null||p===void 0||p.reload(),j.abrupt("return");case 8:case"end":return j.stop()}},c)})),okText:"\u662F",cancelText:"\u5426",children:(0,n.jsx)("a",{target:"_blank",style:{color:"red"},children:"\u5220\u9664"},"remove")},"delete")]}}}})})})},E=y},91902:function(k,A,t){t.d(A,{Z:function(){return Q}});var D=t(35632),$=t(68591),z=t.n($),h=t(79685),R=t(56865),B=t(78699),P=t(96721),H=t(83396),I=t(42006);function L(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}var M=t(8336),W=t(42786);const F=(e,d,a)=>{const o=L(a);return{[`${e.componentCls}-${d}`]:{color:e[`color${a}`],background:e[`color${o}Bg`],borderColor:e[`color${o}Border`]}}},X=e=>(0,M.j)(e,(d,a)=>{let{textColor:o,lightBorderColor:n,lightColor:m,darkColor:y}=a;return{[`${e.componentCls}-${d}`]:{color:o,background:m,borderColor:n,"&-inverse":{color:e.colorTextLightSolid,background:y,borderColor:y}}}}),G=e=>{const{paddingXXS:d,lineWidth:a,tagPaddingHorizontal:o,componentCls:n}=e,m=o-a,y=d-a;return{[n]:Object.assign(Object.assign({},(0,W.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:m,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${n}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${n}-close-icon`]:{marginInlineStart:y,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${n}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${n}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:m}})}};var T=(0,H.Z)("Tag",e=>{const{fontSize:d,lineHeight:a,lineWidth:o,fontSizeIcon:n}=e,m=Math.round(d*a),y=e.fontSizeSM,E=m-o*2,v=e.colorFillAlter,b=e.colorText,S=(0,I.TS)(e,{tagFontSize:y,tagLineHeight:E,tagDefaultBg:v,tagDefaultColor:b,tagIconSize:n-2*o,tagPaddingHorizontal:8});return[G(S),X(S),F(S,"success","Success"),F(S,"processing","Info"),F(S,"error","Error"),F(S,"warning","Warning")]}),O=function(e,d){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&d.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)d.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]]);return a},N=e=>{var{prefixCls:d,className:a,checked:o,onChange:n,onClick:m}=e,y=O(e,["prefixCls","className","checked","onChange","onClick"]);const{getPrefixCls:E}=h.useContext(R.E_),v=u=>{n==null||n(!o),m==null||m(u)},b=E("tag",d),[S,C]=T(b),l=z()(b,{[`${b}-checkable`]:!0,[`${b}-checkable-checked`]:o},a,C);return S(h.createElement("span",Object.assign({},y,{className:l,onClick:v})))},K=function(e,d){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&d.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)d.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]]);return a};const r=(e,d)=>{var{prefixCls:a,className:o,rootClassName:n,style:m,children:y,icon:E,color:v,onClose:b,closeIcon:S,closable:C=!1}=e,l=K(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable"]);const{getPrefixCls:u,direction:i}=h.useContext(R.E_),[c,g]=h.useState(!0);h.useEffect(()=>{"visible"in l&&g(l.visible)},[l.visible]);const s=(0,B.o2)(v)||(0,B.yT)(v),p=Object.assign({backgroundColor:v&&!s?v:void 0},m),x=u("tag",a),[j,f]=T(x),q=z()(x,{[`${x}-${v}`]:s,[`${x}-has-color`]:v&&!s,[`${x}-hidden`]:!c,[`${x}-rtl`]:i==="rtl"},o,n,f),Y=V=>{V.stopPropagation(),b==null||b(V),!V.defaultPrevented&&g(!1)},_=()=>C?S?h.createElement("span",{className:`${x}-close-icon`,onClick:Y},S):h.createElement(D.Z,{className:`${x}-close-icon`,onClick:Y}):null,ee=typeof l.onClick=="function"||y&&y.type==="a",J=E||null,ne=J?h.createElement(h.Fragment,null,J,h.createElement("span",null,y)):y,w=h.createElement("span",Object.assign({},l,{ref:d,className:q,style:p}),ne,_());return j(ee?h.createElement(P.Z,null,w):w)},Z=h.forwardRef(r);Z.CheckableTag=N;var Q=Z}}]);
