import{u as E}from"./SynapseConstants-41b9b1f3.js";import{j as e,a as l,F as h}from"./jsx-runtime-670450c2.js";import{u as U}from"./useShowDesktop-5e97065b.js";import{U as S}from"./UserCardListRotate-a6c75964.js";import{E as V}from"./ExpandableContent-3a056c18.js";import{r as q}from"./index-f1f749bf.js";import{B as C}from"./Button-7d415009.js";import"./sqlFunctions-5fec5cdd.js";import"./RegularExpressions-bc0adf55.js";import"./QueryFilter-49f432ba.js";import"./SynapseContext-286d21a2.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-49f10167.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./useTheme-dfe229ea.js";import"./styled-42ab246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Clear-16219090.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-dd8a6e5c.js";import"./useIsFocusVisible-83eed526.js";import"./Transition-550b3899.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./SvgIcon-74ace867.js";import"./isArray-5e3f9107.js";import"./getEndpoint-5374ab4d.js";import"./IconSvg-b84bdf52.js";import"./Box-b7ffd230.js";import"./extendSxProp-63b32eb6.js";import"./Button-86068eae.js";import"./ButtonBase-4a394d72.js";import"./emotion-react.browser.esm-e553699c.js";import"./assertThisInitialized-081f9914.js";import"./Alert-4131c431.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-95211f4d.js";import"./index-4d501b15.js";import"./ColumnType-5116adf5.js";import"./UserCardList-aebc3fc7.js";import"./UserCard-496d3551.js";import"./IconCopy-9a72c17a.js";import"./SkeletonTable-3d38f115.js";import"./times-ca4ae8e6.js";import"./toInteger-29c18843.js";import"./isSymbol-7c514724.js";import"./Skeleton-18b555b0.js";import"./ToastMessage-47a48bcd.js";import"./FullWidthAlert-9afcbd85.js";import"./Typography-81d78865.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./Overlay-b843e17b.js";import"./contains-33365353.js";import"./usePopperMarginModifiers-45f6b36e.js";import"./useWaitForDOMRef-54076dc2.js";import"./without-c3aa4bc6.js";import"./_cacheHas-d9283ff3.js";import"./use-deep-compare-effect.esm-2b920fea.js";import"./index-5d0cf067.js";function p(t){const{columnName:a,facetValues:r,...s}=t;return e("div",{children:r==null?void 0:r.map((i,o)=>{const n=r[o],m=e(S,{...s,selectedFacets:[{columnName:a,facetValues:[n],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"}]});return e(V,{title:l(h,{children:[" ",n," "]}),content:m},`UserCardListGroup-Mobile-${o}`)})})}try{p.displayName="UserCardListGroupsMobile",p.__docgenInfo={description:"",displayName:"UserCardListGroupsMobile",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}function d(t){const[a,r]=q.useState(0),{columnName:s,facetValues:i,...o}=t,n={columnName:s,facetValues:[i[a]],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"};return l("div",{className:"control-container",children:[l("div",{className:"button-container",children:[i==null?void 0:i.map((c,m)=>e("button",{className:a===m?"isSelected":"",onClick:()=>r(m),children:c},c)),e("button",{className:"gap-fill"})]}),e("div",{className:"content-container",children:e(S,{...o,selectedFacets:[n]},`UserCardListGroup-${a}`)})]})}try{d.displayName="UserCardListGroupsDesktop",d.__docgenInfo={description:"",displayName:"UserCardListGroupsDesktop",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}function y(t){const{summaryLink:a,summaryLinkText:r,...s}=t,i=U();return e("div",{className:`bootstrap-4-backport UserCardListGroups${i?"__Desktop":""}`,children:l("div",{children:[i?e(d,{...s}):e(p,{...s}),a&&r&&e("div",{className:"UserCardListGroups__summary",children:e(C,{variant:"secondary",size:"lg",className:"pill",href:a,children:r})})]})})}try{y.displayName="UserCardListGroups",y.__docgenInfo={description:"",displayName:"UserCardListGroups",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}const Fe={title:"Home Page/UserCardListGroups",component:y},u={args:{sql:"SELECT * FROM syn21781196 WHERE isFeatured='true'",columnName:"Project Title",facetValues:["Somatic Mosaicism in the brain of Tourette syndrome","Somatic Mosaicism in Schizophrenia and Control Brains","1/3-Schizophrenia Genetics and Brain Somatic Mosaicism","2/3-Schizophrenia Genetics and Brain Somatic Mosaicism","Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder","Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease","1/2-Somatic mosaicism and autism spectrum disorder","2/2-Somatic mosaicism and autism spectrum disorder","3/3-Schizophrenia Genetics and Brain Somatic Mosaicism"],size:E,useQueryResultUserData:!1,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People",count:6}};var f,L,R;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    sql: "SELECT * FROM syn21781196 WHERE isFeatured='true'",
    columnName: 'Project Title',
    facetValues: ['Somatic Mosaicism in the brain of Tourette syndrome', 'Somatic Mosaicism in Schizophrenia and Control Brains', '1/3-Schizophrenia Genetics and Brain Somatic Mosaicism', '2/3-Schizophrenia Genetics and Brain Somatic Mosaicism', 'Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder', 'Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease', '1/2-Somatic mosaicism and autism spectrum disorder', '2/2-Somatic mosaicism and autism spectrum disorder', '3/3-Schizophrenia Genetics and Brain Somatic Mosaicism'],
    size: MEDIUM_USER_CARD,
    useQueryResultUserData: false,
    summaryLinkText: 'EXPLORE ALL PEOPLE',
    summaryLink: '/Explore/People',
    count: 6
  }
}`,...(R=(L=u.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const Pe=["Demo"];export{u as Demo,Pe as __namedExportsOrder,Fe as default};
//# sourceMappingURL=UserCardListGroups.stories-537bcea2.js.map