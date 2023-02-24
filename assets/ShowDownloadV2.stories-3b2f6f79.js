import{j as o,F as c,a as D}from"./jsx-runtime-670450c2.js";import{r as _}from"./index-f1f749bf.js";import{T as y}from"./SynapseTableConstants-942d2b0b.js";import{a9 as N,aq as S}from"./SynapseContext-286d21a2.js";import{u as x}from"./useDownloadList-8d4d3297.js";import{I as E}from"./IconSvg-b84bdf52.js";import{T}from"./Clear-16219090.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-49f10167.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./useTheme-dfe229ea.js";import"./styled-42ab246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Transition-550b3899.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useForkRef-dd8a6e5c.js";import"./isArray-5e3f9107.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-41b9b1f3.js";import"./SvgIcon-74ace867.js";import"./Box-b7ffd230.js";import"./extendSxProp-63b32eb6.js";import"./Button-86068eae.js";import"./ButtonBase-4a394d72.js";import"./emotion-react.browser.esm-e553699c.js";import"./assertThisInitialized-081f9914.js";import"./useIsFocusVisible-83eed526.js";import"./Button-7d415009.js";import"./Alert-4131c431.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-95211f4d.js";import"./index-4d501b15.js";import"./useMutation-f5a4a2e1.js";import"./useInfiniteQuery-680ec775.js";import"./isHostComponent-fa76b8d9.js";function i({to:n,className:f=""}){const{accessToken:t}=N(),s=S(),h="Click to view items in your download cart.",{data:e,isLoading:w,isError:m,error:a}=x();if(_.useEffect(()=>{m&&a&&t&&s(a)},[m,a,s,t]),!t||w)return o(c,{});const p=(e==null?void 0:e.totalNumberOfFiles)??0;if(p===0)return o(c,{});const g=o(T,{title:h,placement:"bottom",enterNextDelay:y,children:D("span",{children:[o("span",{className:"SRC-primary-text-color",children:o(E,{icon:"cart"})}),o("span",{className:"download-cart-size",children:p})]})});return o("a",{className:`Download-Link v2 ${f}`,href:n,rel:"noopener noreferrer",children:g})}try{i.displayName="ShowDownloadV2",i.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"ShowDownloadV2",props:{to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const uo={title:"Download/ShowDownloadV2",component:i},r={args:{to:"/#/Other%20Components?id=downloadcartpage"}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    to: '/#/Other%20Components?id=downloadcartpage'
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const fo=["Demo"];export{r as Demo,fo as __namedExportsOrder,uo as default};
//# sourceMappingURL=ShowDownloadV2.stories-3b2f6f79.js.map