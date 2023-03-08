import{j as t,a as r,F as k}from"./jsx-runtime-670450c2.js";import{r as V,h as w}from"./SynapseConstants-41b9b1f3.js";import{aS as h,cj as z,an as G,aE as P}from"./SynapseContext-3d6f4701.js";import{u as K}from"./useEntity-3534aa5c.js";import{b as Q}from"./useGetQueryResultBundle-19269b6c.js";import{U as C}from"./UserCard-4d2c9697.js";import{f as y}from"./DateFormatter-cfd8096f.js";import{C as M}from"./ConditionalWrapper-1e5f9ce7.js";import{d as u}from"./dayjs.min-e0adaab4.js";import{B as H}from"./Box-5df43b07.js";import{B as J}from"./Breadcrumbs-54965023.js";import{S as N}from"./Skeleton-1377209b.js";import{T as d}from"./Typography-0df81c96.js";import{T as f}from"./Clear-b4ccb838.js";import{I as b}from"./FullWidthAlert-89ce8092.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-9cd95192.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-df5bc5e3.js";import"./extends-98964cd2.js";import"./styled-1b6f4d44.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-b2c92aa4.js";import"./Transition-955f7fb7.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useForkRef-dd8a6e5c.js";import"./isArray-5e3f9107.js";import"./getEndpoint-5374ab4d.js";import"./SvgIcon-36e6768e.js";import"./IconSvg-03399efa.js";import"./Button-41488909.js";import"./ButtonBase-4feee6fc.js";import"./emotion-react.browser.esm-0771b2df.js";import"./assertThisInitialized-4a7b3b26.js";import"./useIsFocusVisible-83eed526.js";import"./Button-a16e56e5.js";import"./Alert-4bfa1ee7.js";import"./hook-3d9ea2b9.js";import"./createWithBsPrefix-d1384812.js";import"./divWithClassName-f0cd5fab.js";import"./index-4d501b15.js";import"./useMutation-e842287b.js";import"./useInfiniteQuery-4894bbfc.js";import"./pick-ab7e3dd5.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./_baseClone-3ca9cb28.js";import"./_baseSlice-cf92e063.js";import"./IconCopy-9a72c17a.js";import"./SkeletonTable-d98e81eb.js";import"./times-23e595c8.js";import"./toInteger-67b97e96.js";import"./ToastMessage-37d46070.js";import"./assertThisInitialized-081f9914.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./Overlay-907d5d0f.js";import"./contains-33365353.js";import"./usePopperMarginModifiers-5c87d941.js";import"./useWaitForDOMRef-c561e186.js";import"./utc-8a3e1a17.js";import"./extendSxProp-c6163236.js";import"./index-1aacdabe.js";import"./isHostComponent-fa76b8d9.js";function X(){return t(d,{variant:"breadcrumb1",sx:{color:"grey.700"},children:"/"})}function g(T){var _;const{entityId:p,versionNumber:m}=T,i=`${p}${m?`.${m}`:""}`,{data:e}=K(p,m),{data:c}=Q({entityId:p,query:{sql:`SELECT * FROM ${i} LIMIT 0`},partMask:V,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"},{enabled:!!(e&&h(e))}),x=(_=c==null?void 0:c.responseBody)==null?void 0:_.lastUpdatedOn,o=e?z(G(e.concreteType)):"",F="This is the user who created this Dataset. This may not be the same person who generated the files in this Dataset, or who originally uploaded these files to Synapse.",q=r(k,{children:[r("p",{children:["This is when the configuration of this ",o," was last changed."]}),t("p",{children:"Configuration changes may be triggered by (for example):"}),r("ul",{children:[r("li",{children:["Editing the name of the ",o]}),r("li",{children:["Updating the schema used by the ",o]})]}),r("p",{children:["This does NOT reflect changes to the data displayed in the the"," ",o,"."]})]}),R=`This is when the configuration of this ${o} was last changed.`,W=`When data changes, the ${o} is rebuilt to reflect those changes. This is the last time changes were made to the data.`,B=`${i}-createdByTooltip`,I=`${i}-modifiedByTooltip`,S=`${i}-lastUpdatedTooltip`,l={width:"16px",height:"16px",ml:"4px",verticalAlign:"text-bottom"};return t(H,{sx:{bgcolor:"grey.100",py:"10px"},children:r(J,{separator:t(X,{}),sx:{"& .MuiBreadcrumbs-ol":{justifyContent:"center"}},children:[t(M,{condition:!e,wrapper:N,children:r(d,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":B,children:[o," created by"," ",t(C,{ownerId:e==null?void 0:e.createdBy,size:w})," on"," ",y(u(e==null?void 0:e.createdOn)),e&&P(e)&&t(f,{id:B,title:F,children:t(b,{sx:l})})]})}),t(M,{condition:!e,wrapper:N,children:r(d,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":I,children:[e&&h(e)?"Configuration":o," last modified by"," ",t(C,{ownerId:e==null?void 0:e.modifiedBy,size:w})," on"," ",y(u(e==null?void 0:e.modifiedOn)),e&&h(e)&&t(f,{id:I,title:q,"aria-label":R,children:t(b,{sx:l})})]})}),x&&r(d,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":S,children:[o," last rebuilt on ",y(u(x)),t(f,{title:W,id:S,children:t(b,{sx:l})})]})]})})}try{g.displayName="CreatedByModifiedBy",g.__docgenInfo={description:"",displayName:"CreatedByModifiedBy",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const ht={title:"Synapse/EntityPage/CreatedByModifiedBy",component:g},a={args:{entityId:"syn36695878",versionNumber:1}},s={args:{entityId:"syn35197546"}},n={args:{entityId:"syn26302617"}};var v,E,D;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    entityId: 'syn36695878',
    versionNumber: 1
  }
}`,...(D=(E=a.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var U,L,O;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    entityId: 'syn35197546'
  }
}`,...(O=(L=s.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var $,A,j;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    entityId: 'syn26302617'
  }
}`,...(j=(A=n.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};const yt=["File","Table","Dataset"];export{n as Dataset,a as File,s as Table,yt as __namedExportsOrder,ht as default};
//# sourceMappingURL=CreatedByModifiedBy.stories-55b4d1c2.js.map