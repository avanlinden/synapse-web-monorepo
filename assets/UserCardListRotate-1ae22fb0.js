import{a as v,j as c}from"./jsx-runtime-670450c2.js";import{r as p}from"./index-f1f749bf.js";import{g as A,p as N}from"./sqlFunctions-cb15b508.js";import{a9 as T,au as V}from"./SynapseContext-3d6f4701.js";import{C as k}from"./ColumnType-5116adf5.js";import{U as w}from"./UserCardList-19230f4f.js";import{L as x,i as O}from"./SynapseConstants-41b9b1f3.js";import{L as b}from"./UserCard-4d2c9697.js";import{a as F}from"./use-deep-compare-effect.esm-2b920fea.js";import{B as M}from"./Button-a16e56e5.js";const Q="sage_rotate_uids",B=3,J=(e=[],s=B,r)=>{let o=[],t=[];const i=localStorage.getItem(r);if(i!=null&&(o=JSON.parse(i)),o.length){const a=e.filter(n=>!o.includes(n));if(a.length>=s)return t=a.slice(0,s),localStorage.setItem(r,JSON.stringify(o.concat(t))),t;{localStorage.removeItem(r);const n=e.slice(0,s-a.length);return localStorage.setItem(r,JSON.stringify(n)),a.concat(n)}}else return t=e.slice(0,s),localStorage.setItem(r,JSON.stringify(t)),t},I=({sql:e,count:s,useQueryResultUserData:r=!1,size:o=x,summaryLink:t,summaryLinkText:i,selectedFacets:a,searchParams:n,sqlOperator:f})=>{const{accessToken:y}=T(),[d,L]=p.useState([]),[U,E]=p.useState(),[m,g]=p.useState();let R=!0;const C=`${Q}-${e}-${JSON.stringify(a)}`;return F(()=>(async function(){g(!0);const _=A(n,f),D=N(e),S=await V({partMask:O,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:D,query:{sql:e,additionalFilters:_,selectedFacets:a}},y),{queryResult:u}=S;if(u!=null&&u.queryResults.rows){const q=u.queryResults.headers.findIndex(l=>l.columnType===k.USERID),h=u.queryResults.rows.map(l=>l.values[q]).filter(l=>l!==null);if(R){const l=J(h,s,C);L(l),r&&E(S),g(!1)}}else console.log("UserCardListRotate: Error getting data")}(),()=>{R=!1}),[e,a,s,y,n,f]),v("div",{className:"UserCardListRotate bootstrap-4-backport",children:[m&&c(b,{}),!m&&d.length===0&&c("p",{className:"font-italic",children:"No one was found."}),!m&&d.length>0&&c(w,{list:d,size:o,data:U}),t&&i&&c("div",{className:"UserCardListRotate__summary",children:c(M,{className:"pill",variant:"secondary",size:"lg",href:t,children:i})})]})};try{I.displayName="UserCardListRotate",I.__docgenInfo={description:"",displayName:"UserCardListRotate",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:{value:"false"},description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"LARGE USER CARD"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},selectedFacets:{defaultValue:null,description:"",name:"selectedFacets",required:!1,type:{name:"FacetColumnRequest[]"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"="'},{value:'"HAS"'}]}},searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"Record<string, string>"}}}}}catch{}export{I as U};
//# sourceMappingURL=UserCardListRotate-1ae22fb0.js.map