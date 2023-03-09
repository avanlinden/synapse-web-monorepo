import{_ as w}from"./extends-9cd95192.js";import{_ as H,c as G}from"./Button-a16e56e5.js";import{R as C,r as F}from"./index-f1f749bf.js";import{_}from"./extends-98964cd2.js";import{_ as I}from"./styled-1b6f4d44.js";import{p as o}from"./index-4d501b15.js";import{R as J}from"./index-96c5f47c.js";import{u as N}from"./contains-33365353.js";import{u as K,a as Q,m as V,b as X,c as Y,s as T}from"./usePopperMarginModifiers-5c87d941.js";import{u as j}from"./useWaitForDOMRef-c561e186.js";import{p as Z}from"./Clear-b4ccb838.js";import{F as W}from"./divWithClassName-f0cd5fab.js";var M=C.forwardRef(function(e,t){var r=e.flip,n=e.offset,a=e.placement,s=e.containerPadding,y=s===void 0?5:s,c=e.popperConfig,P=c===void 0?{}:c,d=e.transition,E=N(),i=E[0],h=E[1],l=N(),u=l[0],m=l[1],R=K(h,t),f=j(e.container),v=j(e.target),g=F.useState(!e.show),p=g[0],b=g[1],x=Q(v,i,V({placement:a,enableEvents:!!e.show,containerPadding:y||5,flip:r,offset:n,arrowElement:u,popperConfig:P})),D=x.styles,$=x.attributes,U=I(x,["styles","attributes"]);e.show?p&&b(!1):!e.transition&&!p&&b(!0);var k=function(){b(!0),e.onExited&&e.onExited.apply(e,arguments)},q=e.show||d&&!p;if(X(i,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!q)return null;var O=e.children(_({},U,{show:!!e.show,props:_({},$.popper,{style:D.popper,ref:R}),arrowProps:_({},$.arrow,{style:D.arrow,ref:m})}));if(d){var A=e.onExit,L=e.onExiting,S=e.onEnter,B=e.onEntering,z=e.onEntered;O=C.createElement(d,{in:e.show,appear:!0,onExit:A,onExiting:L,onExited:k,onEnter:S,onEntering:B,onEntered:z},O)}return f?J.createPortal(O,f):null});M.displayName="Overlay";M.propTypes={show:o.bool,placement:o.oneOf(Z),target:o.any,container:o.any,flip:o.bool,children:o.func.isRequired,containerPadding:o.number,popperConfig:o.object,rootClose:o.bool,rootCloseEvent:o.oneOf(["click","mousedown"]),rootCloseDisabled:o.bool,onHide:function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];if(t.rootClose){var s;return(s=o.func).isRequired.apply(s,[t].concat(n))}return o.func.apply(o,[t].concat(n))},transition:o.elementType,onEnter:o.func,onEntering:o.func,onEntered:o.func,onExit:o.func,onExiting:o.func,onExited:o.func};var ee=["children","transition","popperConfig"],oe=["props","arrowProps","show","update","forceUpdate","placement","state"],te={transition:W,rootClose:!1,show:!1,placement:"top"};function re(e,t){var r=e.ref,n=t.ref;e.ref=r.__wrapped||(r.__wrapped=function(a){return r(T(a))}),t.ref=n.__wrapped||(n.__wrapped=function(a){return n(T(a))})}function ae(e){var t=e.children,r=e.transition,n=e.popperConfig,a=n===void 0?{}:n,s=H(e,ee),y=F.useRef({}),c=Y(),P=c[0],d=c[1],E=r===!0?W:r||null;return C.createElement(M,w({},s,{ref:P,popperConfig:w({},a,{modifiers:d.concat(a.modifiers||[])}),transition:E}),function(i){var h,l=i.props,u=i.arrowProps,m=i.show,R=i.update;i.forceUpdate;var f=i.placement,v=i.state,g=H(i,oe);re(l,u);var p=Object.assign(y.current,{state:v,scheduleUpdate:R,placement:f,outOfBoundaries:(v==null||(h=v.modifiersData.hide)==null?void 0:h.isReferenceHidden)||!1});return typeof t=="function"?t(w({},g,l,{placement:f,show:m},!r&&m&&{className:"show"},{popper:p,arrowProps:u})):C.cloneElement(t,w({},g,l,{placement:f,arrowProps:u,popper:p,className:G(t.props.className,!r&&m&&"show"),style:w({},t.props.style,l.style)}))})}ae.defaultProps=te;export{ae as O};
//# sourceMappingURL=Overlay-907d5d0f.js.map
