import{a4 as n,a6 as r,c8 as o,c9 as m,ca as f,cb as y,bJ as k,cc as A,aQ as R}from"./SynapseContext-49f8c03b.js";import{u as g}from"./useMutation-a5fa52d0.js";import{u as q}from"./useInfiniteQuery-58e41a86.js";import{e as Q}from"./queryKeys-dd803d9a.js";const a="accessRequirement";function S(e,c){const{accessToken:s}=n();return r([a,e],()=>o(s,e),c)}function E(e,c){const{accessToken:s}=n();return r([a,e,"wikiPageKey"],()=>R(s,e),c)}function K(e,c){const{accessToken:s}=n();return r([a,e,"acl"],()=>m(s,e),c)}function x(e,c){const{accessToken:s}=n();return q([a,"search",e],async t=>await f(s,{...e,nextPageToken:t.pageParam}),{...c,getNextPageParam:t=>t.nextPageToken})}function w(e,c){const{accessToken:s}=n();return r([a,"restrictionInformation",e],()=>y(e,s),c)}function G(e){const{accessToken:c}=n(),s=k();return g({...e,mutationFn:t=>A(t,c),mutationKey:["createLockAccessRequirement"],onSuccess:async(t,u,i)=>{if(await s.invalidateQueries([a]),await s.invalidateQueries(Q.all),e!=null&&e.onSuccess)return e.onSuccess(t,u,i)}})}export{S as a,G as b,x as c,K as d,E as e,w as u};
//# sourceMappingURL=useAccessRequirements-98f10efb.js.map