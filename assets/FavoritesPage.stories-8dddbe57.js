import{j as r,a as i}from"./jsx-runtime-670450c2.js";import{r as a}from"./index-f1f749bf.js";import{S as L}from"./Sort-9fe1b4ba.js";import{D as h}from"./EntityChildren-7cd71d6e.js";import{a4 as O,aA as b,aU as k,ai as A,ce as _}from"./index-b6876ef1.js";import{S as R}from"./LoadingScreen-df094095.js";import{a as j,d as G}from"./useFavorites-53c6bda4.js";import{I as y}from"./IconSvg-84752ba8.js";import{P as U}from"./getEndpoint-5374ab4d.js";import{E as $}from"./EntityIcon-4ba93266.js";import{T as z}from"./Tooltip-e2a21fb8.js";import{T as H}from"./Table-6b0350f2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./SynapseConstants-f1d07af3.js";import"./Button-7d415009.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-9ea72d20.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-a927bea5.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useIsFocusVisible-c754a498.js";import"./FullWidthAlert-10bb9b65.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-ace3d0f1.js";import"./index-4d501b15.js";import"./Typography-70326f55.js";import"./Fade-2c9937b4.js";import"./isArray-a82322d9.js";import"./SvgIcon-d8836e03.js";import"./IconButton-7162f347.js";import"./ButtonBase-99361597.js";import"./emotion-react.browser.esm-c209b88a.js";import"./assertThisInitialized-081f9914.js";import"./Link-ce18840d.js";import"./Button-445c67f6.js";import"./Modal-346748ce.js";import"./contains-60f9209b.js";import"./useWillUnmount-7fb15b8a.js";import"./usePrevious-9f30f8c7.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./useWaitForDOMRef-54076dc2.js";import"./useMutation-103290c7.js";import"./useInfiniteQuery-b44df835.js";function D(){const{accessToken:p}=O(),[t,u]=a.useState(void 0),[s,F]=a.useState(""),[m,N]=a.useState(void 0),[v,l]=a.useState(),{data:d,isFetching:x,isError:C,error:f}=j();a.useEffect(()=>{C&&f&&l(f)},[C,f]),a.useEffect(()=>{l(p?void 0:new Error("Please sign in to access your favorites."))},[p]);const w=(e,o)=>{const n=e.toLowerCase();return o.filter(P=>P.name.toLowerCase().indexOf(n)>=0)};a.useEffect(()=>{if(d){let e=[...d.results];t&&e.sort((o,n)=>t.direction=="DESC"?o[t.field].toLowerCase()>n[t.field].toLowerCase()?1:-1:o[t.field].toLowerCase()<n[t.field].toLowerCase()?1:-1),s&&(e=w(s,e)),N(e)}},[d,s,t]);const{mutate:I}=G(),S=e=>u&&r(L,{role:"button",style:{height:"20px"},active:(t==null?void 0:t.field)===e,direction:(t==null?void 0:t.field)===e?t.direction==="DESC"?h.DESC:h.ASC:h.DESC,onClick:()=>{const o=e===(t==null?void 0:t.field)?t.direction==="ASC"?"DESC":"ASC":"DESC";u({field:e,direction:o})}});return v?r(b,{error:v}):i("div",{className:"FavoritesPage",children:[i("div",{className:"searchInputWithIcon",children:[r(y,{icon:"searchOutlined"}),r(k.Control,{type:"search",placeholder:"Favorite Name",value:s,onChange:e=>{F(e.target.value)}})]}),m&&m.length>0&&r("div",{className:"bootstrap-4-backport",children:i(H,{striped:!0,responsive:!0,className:"FavoritesTable",children:[r("thead",{children:i("tr",{children:[r("th",{}),i("th",{children:["Name",r("span",{children:S("name")})]}),i("th",{children:["Type",r("span",{children:S("type")})]})]})}),r("tbody",{children:m.map(e=>{if(e){const o=A(e.type);return i("tr",{children:[r("td",{children:r(z,{title:"Click the star to remove this item from your favorites",enterNextDelay:300,placement:"right",children:r("a",{onClick:()=>{I(e.id)},className:"ignoreLink",children:r(y,{icon:"fav",sx:{color:"#EDC766"}})})})}),r("td",{children:r("a",{rel:"noopener noreferrer",href:`${U.PORTAL}#!Synapse:${e.id}`,children:e.name})}),i("td",{children:[r($,{type:o,style:{marginRight:"5px"}}),_(o)]})]},e.id)}else return!1})})]})}),x&&r("div",{className:"placeholder",children:r(R,{size:30})})]})}const Ue={title:"Synapse/FavoritesPage",component:D},W=p=>r(D,{}),c=W.bind({});var E,T,g;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:"args => <FavoritesPage />",...(g=(T=c.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};const $e=["Demo"];export{c as Demo,$e as __namedExportsOrder,Ue as default};
//# sourceMappingURL=FavoritesPage.stories-8dddbe57.js.map