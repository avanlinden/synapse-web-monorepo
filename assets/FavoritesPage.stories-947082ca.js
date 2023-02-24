import{j as r,a as i}from"./jsx-runtime-670450c2.js";import{r as a}from"./index-f1f749bf.js";import{S as L}from"./Sort-9fe1b4ba.js";import{D as f}from"./EntityChildren-7cd71d6e.js";import{a9 as O,aF as P,an as k,cj as b}from"./SynapseContext-286d21a2.js";import{S as j}from"./LoadingScreen-d5c05336.js";import{a as A,d as R}from"./useFavorites-669d4959.js";import{I as y}from"./IconSvg-b84bdf52.js";import{P as _}from"./getEndpoint-5374ab4d.js";import{E as G}from"./EntityIcon-028250c2.js";import{F as $}from"./Form-4a4de212.js";import{T as z}from"./Clear-16219090.js";import{T as H}from"./Table-6b0350f2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-49f10167.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./useTheme-dfe229ea.js";import"./styled-42ab246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Transition-550b3899.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useForkRef-dd8a6e5c.js";import"./isArray-5e3f9107.js";import"./SynapseConstants-41b9b1f3.js";import"./SvgIcon-74ace867.js";import"./Box-b7ffd230.js";import"./extendSxProp-63b32eb6.js";import"./Button-86068eae.js";import"./ButtonBase-4a394d72.js";import"./emotion-react.browser.esm-e553699c.js";import"./assertThisInitialized-081f9914.js";import"./useIsFocusVisible-83eed526.js";import"./Button-7d415009.js";import"./Alert-4131c431.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-95211f4d.js";import"./index-4d501b15.js";import"./Modal-0ba8270a.js";import"./contains-33365353.js";import"./useWillUnmount-7fb15b8a.js";import"./usePrevious-9f30f8c7.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./useWaitForDOMRef-54076dc2.js";import"./Typography-81d78865.js";import"./useMutation-f5a4a2e1.js";import"./useInfiniteQuery-680ec775.js";import"./FormLabel-897d2462.js";import"./Col-1f1afacc.js";import"./FormGroup-08e5002f.js";import"./isHostComponent-fa76b8d9.js";function U(){const{accessToken:h}=O(),[t,u]=a.useState(void 0),[s,g]=a.useState(""),[p,F]=a.useState(void 0),[v,c]=a.useState(),{data:l,isFetching:N,isError:C,error:d}=A();a.useEffect(()=>{C&&d&&c(d)},[C,d]),a.useEffect(()=>{c(h?void 0:new Error("Please sign in to access your favorites."))},[h]);const x=(e,o)=>{const n=e.toLowerCase();return o.filter(I=>I.name.toLowerCase().indexOf(n)>=0)};a.useEffect(()=>{if(l){let e=[...l.results];t&&e.sort((o,n)=>t.direction=="DESC"?o[t.field].toLowerCase()>n[t.field].toLowerCase()?1:-1:o[t.field].toLowerCase()<n[t.field].toLowerCase()?1:-1),s&&(e=x(s,e)),F(e)}},[l,s,t]);const{mutate:w}=R(),S=e=>u&&r(L,{role:"button",style:{height:"20px"},active:(t==null?void 0:t.field)===e,direction:(t==null?void 0:t.field)===e?t.direction==="DESC"?f.DESC:f.ASC:f.DESC,onClick:()=>{const o=e===(t==null?void 0:t.field)?t.direction==="ASC"?"DESC":"ASC":"DESC";u({field:e,direction:o})}});return v?r(P,{error:v}):i("div",{className:"FavoritesPage",children:[i("div",{className:"searchInputWithIcon",children:[r(y,{icon:"searchOutlined"}),r($.Control,{type:"search",placeholder:"Favorite Name",value:s,onChange:e=>{g(e.target.value)}})]}),p&&p.length>0&&r("div",{className:"bootstrap-4-backport",children:i(H,{striped:!0,responsive:!0,className:"FavoritesTable",children:[r("thead",{children:i("tr",{children:[r("th",{}),i("th",{children:["Name",r("span",{children:S("name")})]}),i("th",{children:["Type",r("span",{children:S("type")})]})]})}),r("tbody",{children:p.map(e=>{if(e){const o=k(e.type);return i("tr",{children:[r("td",{children:r(z,{title:"Click the star to remove this item from your favorites",enterNextDelay:300,placement:"right",children:r("a",{onClick:()=>{w(e.id)},className:"ignoreLink",children:r(y,{icon:"fav",sx:{color:"#EDC766"}})})})}),r("td",{children:r("a",{rel:"noopener noreferrer",href:`${_.PORTAL}#!Synapse:${e.id}`,children:e.name})}),i("td",{children:[r(G,{type:o,style:{marginRight:"5px"}}),b(o)]})]},e.id)}else return!1})})]})}),N&&r("div",{className:"placeholder",children:r(j,{size:30})})]})}const Je={title:"Synapse/FavoritesPage",component:U},m={};var E,T,D;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const Ke=["Demo"];export{m as Demo,Ke as __namedExportsOrder,Je as default};
//# sourceMappingURL=FavoritesPage.stories-947082ca.js.map