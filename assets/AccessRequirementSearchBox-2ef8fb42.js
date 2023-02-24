import{j as P}from"./jsx-runtime-670450c2.js";import{_ as le}from"./extends-98964cd2.js";import{r as a}from"./index-f1f749bf.js";import{_ as fe,h as ce,a as y,u as Se,S as me,d as ve}from"./Select-40119e12.esm-4575fd99.js";import{f as p,c as ge}from"./toConsumableArray-85fcc1b5.js";import"./index-96c5f47c.js";import{a9 as he,cd as Oe,cf as _e}from"./SynapseContext-286d21a2.js";import{a as Ie}from"./useAccessRequirements-dcef1aec.js";import{S as ye}from"./Skeleton-18b555b0.js";var Ce=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function Ae(t){var r=t.defaultOptions,e=r===void 0?!1:r,d=t.cacheOptions,l=d===void 0?!1:d,f=t.loadOptions;t.options;var i=t.isLoading,C=i===void 0?!1:i,h=t.onInputChange,n=t.filterOption,O=n===void 0?null:n,u=fe(t,Ce),S=u.inputValue,o=a.useRef(void 0),_=a.useRef(!1),F=a.useState(Array.isArray(e)?e:void 0),$=p(F,2),H=$[0],E=$[1],J=a.useState(typeof S<"u"?S:""),N=p(J,2),j=N[0],A=N[1],K=a.useState(e===!0),w=p(K,2),Q=w[0],m=w[1],U=a.useState(void 0),B=p(U,2),L=B[0],V=B[1],X=a.useState([]),D=p(X,2),Y=D[0],x=D[1],Z=a.useState(!1),k=p(Z,2),ee=k[0],I=k[1],te=a.useState({}),M=p(te,2),v=M[0],T=M[1],ae=a.useState(void 0),G=p(ae,2),ne=G[0],se=G[1],re=a.useState(void 0),W=p(re,2),oe=W[0],ie=W[1];l!==oe&&(T({}),ie(l)),e!==ne&&(E(Array.isArray(e)?e:void 0),se(e)),a.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var b=a.useCallback(function(g,c){if(!f)return c();var s=f(g,c);s&&typeof s.then=="function"&&s.then(c,function(){return c()})},[f]);a.useEffect(function(){e===!0&&b(j,function(g){_.current&&(E(g||[]),m(!!o.current))})},[]);var ue=a.useCallback(function(g,c){var s=ce(g,c,h);if(!s){o.current=void 0,A(""),V(""),x([]),m(!1),I(!1);return}if(l&&v[s])A(s),V(s),x(v[s]),m(!1),I(!1);else{var de=o.current={};A(s),m(!0),I(!L),b(s,function(q){_&&de===o.current&&(o.current=void 0,m(!1),V(s),x(q||[]),I(!1),T(q?y(y({},v),{},ge({},s,q)):v))})}},[l,b,L,v,h]),pe=ee?[]:j&&L?Y:H||[];return y(y({},u),{},{options:pe,isLoading:Q||C,onInputChange:ue,filterOption:O})}var Le=a.forwardRef(function(t,r){var e=Ae(t),d=Se(e);return a.createElement(me,le({ref:r},d))});function R(t,r){return t.toString()===r?r:`${r} (${t})`}const Ve={Control:t=>P(ve.Control,{...t,className:`form-control ${t.className??""}`})};function z(t){const{inputId:r,initialId:e,onChange:d,placeholder:l}=t,{accessToken:f}=he(),{data:i,isLoading:C}=Ie(e,{enabled:!!e});async function h(n){var S;const O=parseInt(n);let u;return O&&(u=[await Oe(f,O)]),u||(u=(S=await _e(f,{nameContains:n}))==null?void 0:S.results),(u==null?void 0:u.map(o=>({id:o.id.toString(),value:o.id.toString(),label:R(o.id,o.name)})))??[]}return e&&C?P(ye,{width:"100%"}):P(Le,{className:"bootstrap-4-backport",defaultInputValue:e?R(e,(i==null?void 0:i.name)??e.toString()):void 0,defaultOptions:e?[{id:e,value:e,label:R(e,(i==null?void 0:i.name)??e.toString())}]:!0,inputId:r,cacheOptions:!0,isClearable:!0,styles:{control:n=>({...n,display:"flex !important"}),input:n=>({...n,input:{gridArea:"1 / 2 / 4 / 4 !important"}})},components:Ve,loadOptions:h,onChange:n=>{d(n==null?void 0:n.id.toString())},placeholder:l})}try{z.displayName="AccessRequirementSearchBox",z.__docgenInfo={description:"",displayName:"AccessRequirementSearchBox",props:{inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},initialId:{defaultValue:null,description:"",name:"initialId",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(accessRequirementId?: string | undefined) => void"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}export{z as A};
//# sourceMappingURL=AccessRequirementSearchBox-2ef8fb42.js.map