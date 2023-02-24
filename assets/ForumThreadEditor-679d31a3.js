import{j as o,F as V,a as b}from"./jsx-runtime-670450c2.js";import{r as y}from"./index-f1f749bf.js";import{a9 as u,cI as $,ab as A,bA as f,cJ as W,cK as j,cL as G,cM as O,cN as B,cO as H,cP as z,cQ as J,cR as Y,cS as X,cT as Z,cU as D,cV as ee,b1 as ae}from"./SynapseContext-286d21a2.js";import{u as h}from"./useMutation-f5a4a2e1.js";import{u as te}from"./useInfiniteQuery-680ec775.js";import{I as L}from"./IconSvg-b84bdf52.js";import{f as se}from"./AccessRequirementList-27dfe77c.js";import{U as ne}from"./UserSearchBoxV2-617bb79a.js";import{M as R}from"./Modal-0ba8270a.js";import{s as re}from"./startCase-b2e198bb.js";import{b as ce}from"./FormLabel-897d2462.js";import{B as U}from"./Button-7d415009.js";function Fe(e,a,r,n,t,s){const{accessToken:c,keyFactory:T}=u();return te(T.getRepliesQueryKey(e,a,r,n,t),async g=>$(c,e,r,g.pageParam,n,a,t),{...s,getNextPageParam:(g,v)=>{const k=v.flatMap(m=>m.results).length;if(g.totalNumberOfResults>k)return k}})}function Ie(e,a){const{accessToken:r,keyFactory:n}=u(),t=async()=>{const s=await O(e.messageKey,r);return(await fetch(s.messageUrl,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text()};return A(n.getReplyQueryKey(e.threadId,e.id,e.messageKey),t,a)}function ie(e){const a=f(),{accessToken:r,keyFactory:n}=u();return h(t=>W(t,r),{...e,onSuccess:async(t,s,c)=>{await a.invalidateQueries(n.getAllRepliesQueryKey(t.threadId)),e!=null&&e.onSuccess&&await e.onSuccess(t,s,c)}})}function oe(e){const a=f(),{accessToken:r,keyFactory:n}=u();return h(t=>j(t,r),{...e,onSuccess:async(t,s,c)=>{await a.invalidateQueries(n.getAllRepliesQueryKey(t.threadId)),e!=null&&e.onSuccess&&await e.onSuccess(t,s,c)}})}function _e(e){const a=f(),{accessToken:r,keyFactory:n}=u();return h(t=>G(r,t.replyId),{...e,onSuccess:async(t,s,c)=>{await a.invalidateQueries(n.getAllRepliesQueryKey(s.threadId)),e!=null&&e.onSuccess&&await e.onSuccess(t,s,c)}})}function Ke(e){const{data:a,isLoading:r}=ue(e),{data:n,isLoading:t}=le(a,{enabled:!!a}),{mutate:s}=me(),{mutate:c}=fe(),T=y.useCallback(()=>{a&&(a!=null&&a.isPinned?c(a):s(a))},[c,s,a]);return{threadData:a,threadBody:n,togglePin:T,isLoading:t||r}}function ue(e,a){const{accessToken:r,keyFactory:n}=u();return A(n.getThreadQueryKey(e),()=>B(e,r),a)}function le(e,a){const{accessToken:r,keyFactory:n}=u(),t=async()=>{const s=await ee(e==null?void 0:e.messageKey,r);return(await fetch(s.messageUrl,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text()};return A(n.getThreadBodyQueryKey(e==null?void 0:e.id,e==null?void 0:e.messageKey),t,a)}function de(e){const a=f(),{accessToken:r,keyFactory:n}=u();return h(t=>H(r,t),{...e,onSuccess:async(t,s,c)=>{await a.invalidateQueries(n.getAllForumThreadsQueryKey(t.forumId)),await a.invalidateQueries(n.getThreadQueryKey(s.threadId)),e!=null&&e.onSuccess&&await e.onSuccess(t,s,c)}})}function ye(e){const a=f(),{accessToken:r,keyFactory:n}=u();return h(t=>z(r,t),{...e,onSuccess:async(t,s,c)=>{await a.invalidateQueries(n.getThreadQueryKey(s.threadId)),e!=null&&e.onSuccess&&await e.onSuccess(t,s,c)}})}function ge(e){const a=f(),{accessToken:r,keyFactory:n}=u();return h(t=>J(r,t),{...e,onSuccess:async(t,s,c)=>{await a.invalidateQueries(n.getAllForumThreadsQueryKey(t.forumId)),e!=null&&e.onSuccess&&await e.onSuccess(t,s,c)}})}function qe(e){const a=f(),{accessToken:r,keyFactory:n}=u();return h(t=>Y(r,t.id),{...e,onSuccess:async(t,s,c)=>{await a.invalidateQueries(n.getAllForumThreadsQueryKey(s.forumId)),await a.invalidateQueries(n.getThreadQueryKey(s.id)),e!=null&&e.onSuccess&&await e.onSuccess(t,s,c)}})}function Ee(e){const a=f(),{accessToken:r,keyFactory:n}=u();return h(t=>X(r,t.id),{...e,onSuccess:async(t,s,c)=>{await a.invalidateQueries(n.getAllForumThreadsQueryKey(s.forumId)),await a.invalidateQueries(n.getThreadQueryKey(s.id)),e!=null&&e.onSuccess&&await e.onSuccess(t,s,c)}})}function me(e){const a=f(),{accessToken:r,keyFactory:n}=u();return h(t=>Z(r,t.id),{...e,onSuccess:async(t,s,c)=>{await a.invalidateQueries(n.getAllForumThreadsQueryKey(s.forumId)),await a.invalidateQueries(n.getThreadQueryKey(s.id)),e!=null&&e.onSuccess&&await e.onSuccess(t,s,c)}})}function fe(e){const a=f(),{accessToken:r,keyFactory:n}=u();return h(t=>D(r,t.id),{...e,onSuccess:async(t,s,c)=>{await a.invalidateQueries(n.getAllForumThreadsQueryKey(s.forumId)),await a.invalidateQueries(n.getThreadQueryKey(s.id)),e!=null&&e.onSuccess&&await e.onSuccess(t,s,c)}})}const he=["title","bold","italic","strikethrough","code","latex","subscript","superscript","link","image"],N={title:{openSyntax:"###",closeSyntax:""},bold:{openSyntax:"**",closeSyntax:"**"},italic:{openSyntax:"_",closeSyntax:"_"},strikethrough:{openSyntax:"--",closeSyntax:"--"},code:{openSyntax:"```",closeSyntax:"```"},latex:{openSyntax:"$$\\(",closeSyntax:"\\)$$"},subscript:{openSyntax:"~",closeSyntax:"~"},superscript:{openSyntax:"^",closeSyntax:"^"},link:{openSyntax:"[",closeSyntax:"](url)"},image:{openSyntax:"![",closeSyntax:"](image-url)"}},K=({show:e,onClose:a,handleUserTag:r})=>{const n=y.useCallback((t,s)=>{t&&s&&r(s.userName),a()},[a,r]);return o(V,{children:b(R,{show:e,onHide:a,backdrop:"static",animation:!1,children:[o(R.Header,{closeButton:!0,children:o(R.Title,{children:"Find User or Team"})}),o(R.Body,{children:o(ne,{placeholder:"Search for a user or team name",onChange:n,typeFilter:ae.ALL,focusOnSelect:!0})})]})})};try{K.displayName="UserMentionModal",K.__docgenInfo={description:"",displayName:"UserMentionModal",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},handleUserTag:{defaultValue:null,description:"",name:"handleUserTag",required:!0,type:{name:"(user: string) => void"}}}}}catch{}var q=(e=>(e.WRITE="WRITE",e.PREVIEW="PREVIEW",e))(q||{});const E=({placeholder:e,text:a,setText:r})=>{const[n,t]=y.useState("WRITE"),[s,c]=y.useState(0),[T,g]=y.useState(!1),[v,k]=y.useState(!1),m=y.useRef(null);y.useEffect(()=>{const i=m.current;i&&i.setSelectionRange(s,s)},[m,s]),y.useEffect(()=>{var i;(i=m.current)==null||i.focus()},[T]);const C=i=>{const l=[],d=m.current;if(d){const p=d==null?void 0:d.selectionStart,w=a.substring(0,p),Q=a.substring(p,a.length);c(p+i.length+1),l.push(w,`${v?"":"@"}${i.replace(/\s/g,"")}`,Q)}r(l.join("")),k(!1)},F=i=>{i.key=="@"&&(k(!0),g(!0))},I=i=>{const l=m.current;if(l){const d=l.selectionStart,p=l.selectionEnd,w=a.substring(d,p),Q=a.substring(0,d),S=a.substring(p,a.length),x=N[i].openSyntax,_=N[i].closeSyntax;switch(i){case"code":{const M=[];M.push(Q,x,w,_,S),r(M.join(`\r
`)),l.focus(),c(d+x.length+2);break}case"title":case"bold":case"italic":case"strikethrough":case"latex":case"subscript":case"superscript":case"link":case"image":{const M=`${Q}${x}${w}${_}${S}`;l.focus(),c(d+x.length),r(M)}}}};return b("div",{className:"bootstrap-4-backport MarkdownEditor",children:[b("div",{className:"MarkdownEditorControls",children:[o("div",{className:"Tabs",children:Object.keys(q).map(i=>o("button",{className:"Tab",role:"tab","aria-selected":i===n,onClick:l=>{l.stopPropagation(),t(q[i])},children:i},i))}),n==="WRITE"&&b("div",{className:"MarkdownEditorControlsToolbar",children:[he.map(i=>o("button",{onClick:()=>I(i),children:o(L,{icon:i,label:re(i)})},i)),o("button",{onClick:()=>g(!0),children:o(L,{icon:"tag",label:"Mention"})})]})]}),o("div",{children:n==="WRITE"?o("textarea",{onChange:i=>r(i.target.value),style:{width:"100%"},rows:6,value:a,ref:m,placeholder:e,onKeyDown:F}):a?o(se,{markdown:a}):"Nothing to preview"}),o(K,{show:T,onClose:()=>g(!1),handleUserTag:C})]})};try{E.displayName="MarkdownEditor",E.__docgenInfo={description:"",displayName:"MarkdownEditor",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},setText:{defaultValue:null,description:"",name:"setText",required:!0,type:{name:"(text: string) => void"}}}}}catch{}const P=({initialText:e,initialTitle:a,id:r,onClose:n,isReply:t})=>{const[s,c]=y.useState(a??""),[T,g]=y.useState(e??""),{mutate:v,isLoading:k}=de({onSuccess:()=>n()}),{mutate:m,isLoading:C}=ye({onSuccess:()=>n()}),{mutate:F,isLoading:I}=ge({onSuccess:()=>n()}),{mutate:i,isLoading:l}=ie({onSuccess:()=>n()}),{mutate:d,isLoading:p}=oe({onSuccess:()=>n()}),w=C||l||I||k||p,Q=(S,x)=>{t?e?d({replyId:r,messageMarkdown:S}):i({threadId:r,messageMarkdown:S}):a?(v({title:x,threadId:r}),m({messageMarkdown:S,threadId:r})):F({forumId:r,title:x,messageMarkdown:S})};return b("div",{className:"bootstrap-4-backport",children:[!t&&o(ce,{type:"text",placeholder:"Title",value:s,onChange:S=>c(S.target.value)}),o(E,{text:T,setText:g}),b("div",{style:{display:"flex",justifyContent:"flex-end"},children:[o(U,{onClick:n,variant:"light",children:"Cancel"}),o(U,{disabled:w,onClick:()=>Q(T,s),variant:"primary",children:w?"Saving":"Save"})]})]})};try{P.displayName="ForumThreadEditor",P.__docgenInfo={description:"",displayName:"ForumThreadEditor",props:{initialTitle:{defaultValue:null,description:"",name:"initialTitle",required:!1,type:{name:"string"}},initialText:{defaultValue:null,description:"",name:"initialText",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isReply:{defaultValue:null,description:"",name:"isReply",required:!0,type:{name:"boolean"}}}}}catch{}export{P as F,_e as a,Ke as b,qe as c,Ee as d,Fe as e,Ie as u};
//# sourceMappingURL=ForumThreadEditor-679d31a3.js.map