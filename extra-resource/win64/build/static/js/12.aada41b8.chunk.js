(this["webpackJsonp@rclone/rclone-webui-react"]=this["webpackJsonp@rclone/rclone-webui-react"]||[]).push([[12,24],{322:function(e,a,t){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(a,"a",(function(){return n}))},346:function(e,a,t){"use strict";var n=t(6),s=t(12),c=t(0),r=t.n(c),l=t(4),o=t.n(l),i=t(37),u=t.n(i),p=t(29),d={tag:p.q,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,l=Object(s.a)(e,["className","cssModule","tag"]),o=Object(p.m)(u()(a,"input-group-text"),t);return r.a.createElement(c,Object(n.a)({},l,{className:o}))};m.propTypes=d,m.defaultProps={tag:"span"},a.a=m},350:function(e,a,t){"use strict";var n=t(6),s=t(12),c=t(322),r=t(22),l=t(0),o=t.n(l),i=t(4),u=t.n(i),p=t(37),d=t.n(p),m=t(29),b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.focus=t.focus.bind(Object(c.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.type,r=e.bsSize,l=e.valid,i=e.invalid,u=e.tag,p=e.addon,b=e.plaintext,f=e.innerRef,g=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(c)>-1,v=new RegExp("\\D","g"),j=u||("select"===c||"textarea"===c?c:"input"),E="form-control";b?(E+="-plaintext",j=u||"input"):"file"===c?E+="-file":"range"===c?E+="-range":h&&(E=p?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(m.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var N=Object(m.m)(d()(a,i&&"is-invalid",l&&"is-valid",!!r&&"form-control-"+r,E),t);return("input"===j||u&&"function"===typeof u)&&(g.type=c),g.children&&!b&&"select"!==c&&"string"===typeof j&&"select"!==j&&(Object(m.t)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(j,Object(n.a)({},g,{ref:f,className:N,"aria-invalid":i}))},a}(o.a.Component);f.propTypes=b,f.defaultProps={type:"text"},a.a=f},356:function(e,a,t){"use strict";var n=t(6),s=t(12),c=t(0),r=t.n(c),l=t(4),o=t.n(l),i=t(37),u=t.n(i),p=t(29),d={tag:p.q,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},m=function(e){var a=e.className,t=e.cssModule,c=e.color,l=e.body,o=e.inverse,i=e.outline,d=e.tag,m=e.innerRef,b=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(p.m)(u()(a,"card",!!o&&"text-white",!!l&&"card-body",!!c&&(i?"border":"bg")+"-"+c),t);return r.a.createElement(d,Object(n.a)({},b,{className:f,ref:m}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},357:function(e,a,t){"use strict";var n=t(6),s=t(12),c=t(0),r=t.n(c),l=t(4),o=t.n(l),i=t(37),u=t.n(i),p=t(29),d={tag:p.q,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},m=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,l=e.tag,o=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(p.m)(u()(a,"card-body"),t);return r.a.createElement(l,Object(n.a)({},o,{className:i,ref:c}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},358:function(e,a,t){"use strict";var n=t(6),s=t(12),c=t(322),r=t(22),l=t(0),o=t.n(l),i=t(4),u=t.n(i),p=t(37),d=t.n(p),m=t(29),b={children:u.a.node,inline:u.a.bool,tag:m.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.submit=t.submit.bind(Object(c.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,r=e.tag,l=e.innerRef,i=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.m)(d()(a,!!c&&"form-inline"),t);return o.a.createElement(r,Object(n.a)({},i,{ref:l,className:u}))},a}(l.Component);f.propTypes=b,f.defaultProps={tag:"form"},a.a=f},360:function(e,a,t){"use strict";var n=t(6),s=t(12),c=t(322),r=t(22),l=t(0),o=t.n(l),i=t(4),u=t.n(i),p=t(37),d=t.n(p),m=t(29),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:m.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(c.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],c=e.block,r=e.className,l=e.close,i=e.cssModule,u=e.color,p=e.outline,b=e.size,f=e.tag,g=e.innerRef,h=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof h.children&&(h.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(p?"-outline":"")+"-"+u,j=Object(m.m)(d()(r,{close:l},l||"btn",l||v,!!b&&"btn-"+b,!!c&&"btn-block",{active:a,disabled:this.props.disabled}),i);h.href&&"button"===f&&(f="a");var E=l?"Close":null;return o.a.createElement(f,Object(n.a)({type:"button"===f&&h.onClick?"button":void 0},h,{className:j,ref:g,onClick:this.onClick,"aria-label":t||E}))},a}(o.a.Component);f.propTypes=b,f.defaultProps={color:"secondary",tag:"button"},a.a=f},389:function(e,a,t){"use strict";var n=t(6),s=t(12),c=t(0),r=t.n(c),l=t(4),o=t.n(l),i=t(37),u=t.n(i),p=t(29),d={tag:p.q,size:o.a.string,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,l=e.size,o=Object(s.a)(e,["className","cssModule","tag","size"]),i=Object(p.m)(u()(a,"input-group",l?"input-group-"+l:null),t);return r.a.createElement(c,Object(n.a)({},o,{className:i}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},390:function(e,a,t){"use strict";var n=t(6),s=t(12),c=t(0),r=t.n(c),l=t(4),o=t.n(l),i=t(37),u=t.n(i),p=t(29),d=t(346),m={tag:p.q,addonType:o.a.oneOf(["prepend","append"]).isRequired,children:o.a.node,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,c=e.tag,l=e.addonType,o=e.children,i=Object(s.a)(e,["className","cssModule","tag","addonType","children"]),m=Object(p.m)(u()(a,"input-group-"+l),t);return"string"===typeof o?r.a.createElement(c,Object(n.a)({},i,{className:m}),r.a.createElement(d.a,{children:o})):r.a.createElement(c,Object(n.a)({},i,{className:m,children:o}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},568:function(e,a,t){"use strict";var n=t(6),s=t(12),c=t(0),r=t.n(c),l=t(4),o=t.n(l),i=t(37),u=t.n(i),p=t(29),d={tag:p.q,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,l=Object(s.a)(e,["className","cssModule","tag"]),o=Object(p.m)(u()(a,"card-footer"),t);return r.a.createElement(c,Object(n.a)({},l,{className:o}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},818:function(e,a,t){"use strict";t.r(a);var n=t(31),s=t(32),c=t(68),r=t(67),l=t(0),o=t.n(l),i=t(318),u=t(83),p=t(50),d=t(356),m=t(357),b=t(358),f=t(389),g=t(390),h=t(346),v=t(350),j=t(360),E=t(568),N=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app flex-row align-items-center"},o.a.createElement(i.a,null,o.a.createElement(u.a,{className:"justify-content-center"},o.a.createElement(p.a,{md:"9",lg:"7",xl:"6"},o.a.createElement(d.a,{className:"mx-4"},o.a.createElement(m.a,{className:"p-4"},o.a.createElement(b.a,null,o.a.createElement("h1",null,"Register"),o.a.createElement("p",{className:"text-muted"},"Create your account"),o.a.createElement(f.a,{className:"mb-3"},o.a.createElement(g.a,{addonType:"prepend"},o.a.createElement(h.a,null,o.a.createElement("i",{className:"icon-user"}))),o.a.createElement(v.a,{type:"text",placeholder:"Username",autoComplete:"username"})),o.a.createElement(f.a,{className:"mb-3"},o.a.createElement(g.a,{addonType:"prepend"},o.a.createElement(h.a,null,"@")),o.a.createElement(v.a,{type:"text",placeholder:"Email",autoComplete:"email"})),o.a.createElement(f.a,{className:"mb-3"},o.a.createElement(g.a,{addonType:"prepend"},o.a.createElement(h.a,null,o.a.createElement("i",{className:"icon-lock"}))),o.a.createElement(v.a,{type:"password",placeholder:"Password",autoComplete:"new-password"})),o.a.createElement(f.a,{className:"mb-4"},o.a.createElement(g.a,{addonType:"prepend"},o.a.createElement(h.a,null,o.a.createElement("i",{className:"icon-lock"}))),o.a.createElement(v.a,{type:"password",placeholder:"Repeat password",autoComplete:"new-password"})),o.a.createElement(j.a,{color:"success",block:!0},"Create Account"))),o.a.createElement(E.a,{className:"p-4"},o.a.createElement(u.a,null,o.a.createElement(p.a,{xs:"12",sm:"6"},o.a.createElement(j.a,{className:"btn-facebook mb-1",block:!0},o.a.createElement("span",null,"facebook"))),o.a.createElement(p.a,{xs:"12",sm:"6"},o.a.createElement(j.a,{className:"btn-twitter mb-1",block:!0},o.a.createElement("span",null,"twitter"))))))))))}}]),t}(l.Component);a.default=N}}]);
//# sourceMappingURL=12.aada41b8.chunk.js.map