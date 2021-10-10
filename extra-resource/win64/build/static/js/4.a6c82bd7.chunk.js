(this["webpackJsonp@rclone/rclone-webui-react"]=this["webpackJsonp@rclone/rclone-webui-react"]||[]).push([[4],{346:function(e,t,a){"use strict";var n=a(6),s=a(12),r=a(0),c=a.n(r),o=a(4),i=a.n(o),l=a(37),u=a.n(l),d=a(29),p={tag:d.q,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,r=e.tag,o=Object(s.a)(e,["className","cssModule","tag"]),i=Object(d.m)(u()(t,"input-group-text"),a);return c.a.createElement(r,Object(n.a)({},o,{className:i}))};f.propTypes=p,f.defaultProps={tag:"span"},t.a=f},350:function(e,t,a){"use strict";var n=a(6),s=a(12),r=a(322),c=a(22),o=a(0),i=a.n(o),l=a(4),u=a.n(l),d=a(37),p=a.n(d),f=a(29),g={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,c=e.bsSize,o=e.valid,l=e.invalid,u=e.tag,d=e.addon,g=e.plaintext,m=e.innerRef,b=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(r)>-1,A=new RegExp("\\D","g"),j=u||("select"===r||"textarea"===r?r:"input"),O="form-control";g?(O+="-plaintext",j=u||"input"):"file"===r?O+="-file":"range"===r?O+="-range":h&&(O=d?null:"form-check-input"),b.size&&A.test(b.size)&&(Object(f.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=b.size,delete b.size);var y=Object(f.m)(p()(t,l&&"is-invalid",o&&"is-valid",!!c&&"form-control-"+c,O),a);return("input"===j||u&&"function"===typeof u)&&(b.type=r),b.children&&!g&&"select"!==r&&"string"===typeof j&&"select"!==j&&(Object(f.t)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),i.a.createElement(j,Object(n.a)({},b,{ref:m,className:y,"aria-invalid":l}))},t}(i.a.Component);m.propTypes=g,m.defaultProps={type:"text"},t.a=m},356:function(e,t,a){"use strict";var n=a(6),s=a(12),r=a(0),c=a.n(r),o=a(4),i=a.n(o),l=a(37),u=a.n(l),d=a(29),p={tag:d.q,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var t=e.className,a=e.cssModule,r=e.color,o=e.body,i=e.inverse,l=e.outline,p=e.tag,f=e.innerRef,g=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(d.m)(u()(t,"card",!!i&&"text-white",!!o&&"card-body",!!r&&(l?"border":"bg")+"-"+r),a);return c.a.createElement(p,Object(n.a)({},g,{className:m,ref:f}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},357:function(e,t,a){"use strict";var n=a(6),s=a(12),r=a(0),c=a.n(r),o=a(4),i=a.n(o),l=a(37),u=a.n(l),d=a(29),p={tag:d.q,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,o=e.tag,i=Object(s.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.m)(u()(t,"card-body"),a);return c.a.createElement(o,Object(n.a)({},i,{className:l,ref:r}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},358:function(e,t,a){"use strict";var n=a(6),s=a(12),r=a(322),c=a(22),o=a(0),i=a.n(o),l=a(4),u=a.n(l),d=a(37),p=a.n(d),f=a(29),g={children:u.a.node,inline:u.a.bool,tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,c=e.tag,o=e.innerRef,l=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(f.m)(p()(t,!!r&&"form-inline"),a);return i.a.createElement(c,Object(n.a)({},l,{ref:o,className:u}))},t}(o.Component);m.propTypes=g,m.defaultProps={tag:"form"},t.a=m},359:function(e,t,a){"use strict";var n=a(6),s=a(12),r=a(109),c=a(0),o=a.n(c),i=a(4),l=a.n(i),u=a(37),d=a.n(u),p=a(372),f=a(29);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=m(m({},p.Transition.propTypes),{},{children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),tag:f.q,baseClass:l.a.string,baseClassActive:l.a.string,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])}),h=m(m({},p.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:f.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function A(e){var t=e.tag,a=e.baseClass,r=e.baseClassActive,c=e.className,i=e.cssModule,l=e.children,u=e.innerRef,g=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),m=Object(f.o)(g,f.c),b=Object(f.n)(g,f.c);return o.a.createElement(p.Transition,m,(function(e){var s="entered"===e,p=Object(f.m)(d()(c,a,s&&r),i);return o.a.createElement(t,Object(n.a)({className:p},b,{ref:u}),l)}))}A.propTypes=b,A.defaultProps=h,t.a=A},389:function(e,t,a){"use strict";var n=a(6),s=a(12),r=a(0),c=a.n(r),o=a(4),i=a.n(o),l=a(37),u=a.n(l),d=a(29),p={tag:d.q,size:i.a.string,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,r=e.tag,o=e.size,i=Object(s.a)(e,["className","cssModule","tag","size"]),l=Object(d.m)(u()(t,"input-group",o?"input-group-"+o:null),a);return c.a.createElement(r,Object(n.a)({},i,{className:l}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},390:function(e,t,a){"use strict";var n=a(6),s=a(12),r=a(0),c=a.n(r),o=a(4),i=a.n(o),l=a(37),u=a.n(l),d=a(29),p=a(346),f={tag:d.q,addonType:i.a.oneOf(["prepend","append"]).isRequired,children:i.a.node,className:i.a.string,cssModule:i.a.object},g=function(e){var t=e.className,a=e.cssModule,r=e.tag,o=e.addonType,i=e.children,l=Object(s.a)(e,["className","cssModule","tag","addonType","children"]),f=Object(d.m)(u()(t,"input-group-"+o),a);return"string"===typeof i?c.a.createElement(r,Object(n.a)({},l,{className:f}),c.a.createElement(p.a,{children:i})):c.a.createElement(r,Object(n.a)({},l,{className:f,children:i}))};g.propTypes=f,g.defaultProps={tag:"div"},t.a=g},433:function(e,t,a){"use strict";var n=a(6),s=a(12),r=a(109),c=a(0),o=a.n(c),i=a(4),l=a.n(i),u=a(37),d=a.n(u),p=a(29),f=a(359);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={children:l.a.node,className:l.a.string,closeClassName:l.a.string,closeAriaLabel:l.a.string,cssModule:l.a.object,color:l.a.string,fade:l.a.bool,isOpen:l.a.bool,toggle:l.a.func,tag:p.q,transition:l.a.shape(f.a.propTypes),innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},h={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:m(m({},f.a.defaultProps),{},{unmountOnExit:!0})};function A(e){var t=e.className,a=e.closeClassName,r=e.closeAriaLabel,c=e.cssModule,i=e.tag,l=e.color,u=e.isOpen,g=e.toggle,b=e.children,h=e.transition,A=e.fade,j=e.innerRef,O=Object(s.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),y=Object(p.m)(d()(t,"alert","alert-"+l,{"alert-dismissible":g}),c),E=Object(p.m)(d()("close",a),c),v=m(m(m({},f.a.defaultProps),h),{},{baseClass:A?h.baseClass:"",timeout:A?h.timeout:0});return o.a.createElement(f.a,Object(n.a)({},O,v,{tag:i,className:y,in:u,role:"alert",innerRef:j}),g?o.a.createElement("button",{type:"button",className:E,"aria-label":r,onClick:g},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,b)}A.propTypes=b,A.defaultProps=h,t.a=A},560:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACBCAYAAAAMl2JTAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAKL2lDQ1BJQ0MgUHJvZmlsZQAASMedlndUVNcWh8+9d3qhzTDSGXqTLjCA9C4gHQRRGGYGGMoAwwxNbIioQEQREQFFkKCAAaOhSKyIYiEoqGAPSBBQYjCKqKhkRtZKfHl57+Xl98e939pn73P32XuftS4AJE8fLi8FlgIgmSfgB3o401eFR9Cx/QAGeIABpgAwWempvkHuwUAkLzcXerrICfyL3gwBSPy+ZejpT6eD/0/SrFS+AADIX8TmbE46S8T5Ik7KFKSK7TMipsYkihlGiZkvSlDEcmKOW+Sln30W2VHM7GQeW8TinFPZyWwx94h4e4aQI2LER8QFGVxOpohvi1gzSZjMFfFbcWwyh5kOAIoktgs4rHgRm4iYxA8OdBHxcgBwpLgvOOYLFnCyBOJDuaSkZvO5cfECui5Lj25qbc2ge3IykzgCgaE/k5XI5LPpLinJqUxeNgCLZ/4sGXFt6aIiW5paW1oamhmZflGo/7r4NyXu7SK9CvjcM4jW94ftr/xS6gBgzIpqs+sPW8x+ADq2AiB3/w+b5iEAJEV9a7/xxXlo4nmJFwhSbYyNMzMzjbgclpG4oL/rfzr8DX3xPSPxdr+Xh+7KiWUKkwR0cd1YKUkpQj49PZXJ4tAN/zzE/zjwr/NYGsiJ5fA5PFFEqGjKuLw4Ubt5bK6Am8Kjc3n/qYn/MOxPWpxrkSj1nwA1yghI3aAC5Oc+gKIQARJ5UNz13/vmgw8F4psXpjqxOPefBf37rnCJ+JHOjfsc5xIYTGcJ+RmLa+JrCdCAACQBFcgDFaABdIEhMANWwBY4AjewAviBYBAO1gIWiAfJgA8yQS7YDApAEdgF9oJKUAPqQSNoASdABzgNLoDL4Dq4Ce6AB2AEjIPnYAa8AfMQBGEhMkSB5CFVSAsygMwgBmQPuUE+UCAUDkVDcRAPEkK50BaoCCqFKqFaqBH6FjoFXYCuQgPQPWgUmoJ+hd7DCEyCqbAyrA0bwwzYCfaGg+E1cBycBufA+fBOuAKug4/B7fAF+Dp8Bx6Bn8OzCECICA1RQwwRBuKC+CERSCzCRzYghUg5Uoe0IF1IL3ILGUGmkXcoDIqCoqMMUbYoT1QIioVKQ21AFaMqUUdR7age1C3UKGoG9QlNRiuhDdA2aC/0KnQcOhNdgC5HN6Db0JfQd9Dj6DcYDIaG0cFYYTwx4ZgEzDpMMeYAphVzHjOAGcPMYrFYeawB1g7rh2ViBdgC7H7sMew57CB2HPsWR8Sp4sxw7rgIHA+XhyvHNeHO4gZxE7h5vBReC2+D98Oz8dn4Enw9vgt/Az+OnydIE3QIdoRgQgJhM6GC0EK4RHhIeEUkEtWJ1sQAIpe4iVhBPE68QhwlviPJkPRJLqRIkpC0k3SEdJ50j/SKTCZrkx3JEWQBeSe5kXyR/Jj8VoIiYSThJcGW2ChRJdEuMSjxQhIvqSXpJLlWMkeyXPKk5A3JaSm8lLaUixRTaoNUldQpqWGpWWmKtKm0n3SydLF0k/RV6UkZrIy2jJsMWyZf5rDMRZkxCkLRoLhQWJQtlHrKJco4FUPVoXpRE6hF1G+o/dQZWRnZZbKhslmyVbJnZEdoCE2b5kVLopXQTtCGaO+XKC9xWsJZsmNJy5LBJXNyinKOchy5QrlWuTty7+Xp8m7yifK75TvkHymgFPQVAhQyFQ4qXFKYVqQq2iqyFAsVTyjeV4KV9JUCldYpHVbqU5pVVlH2UE5V3q98UXlahabiqJKgUqZyVmVKlaJqr8pVLVM9p/qMLkt3oifRK+g99Bk1JTVPNaFarVq/2ry6jnqIep56q/ojDYIGQyNWo0yjW2NGU1XTVzNXs1nzvhZei6EVr7VPq1drTltHO0x7m3aH9qSOnI6XTo5Os85DXbKug26abp3ubT2MHkMvUe+A3k19WN9CP16/Sv+GAWxgacA1OGAwsBS91Hopb2nd0mFDkqGTYYZhs+GoEc3IxyjPqMPohbGmcYTxbuNe408mFiZJJvUmD0xlTFeY5pl2mf5qpm/GMqsyu21ONnc332jeaf5ymcEyzrKDy+5aUCx8LbZZdFt8tLSy5Fu2WE5ZaVpFW1VbDTOoDH9GMeOKNdra2Xqj9WnrdzaWNgKbEza/2BraJto22U4u11nOWV6/fMxO3Y5pV2s3Yk+3j7Y/ZD/ioObAdKhzeOKo4ch2bHCccNJzSnA65vTC2cSZ79zmPOdi47Le5bwr4urhWuja7ybjFuJW6fbYXd09zr3ZfcbDwmOdx3lPtKe3527PYS9lL5ZXo9fMCqsV61f0eJO8g7wrvZ/46Pvwfbp8Yd8Vvnt8H67UWslb2eEH/Lz89vg98tfxT/P/PgAT4B9QFfA00DQwN7A3iBIUFdQU9CbYObgk+EGIbogwpDtUMjQytDF0Lsw1rDRsZJXxqvWrrocrhHPDOyOwEaERDRGzq91W7109HmkRWRA5tEZnTdaaq2sV1iatPRMlGcWMOhmNjg6Lbor+wPRj1jFnY7xiqmNmWC6sfaznbEd2GXuKY8cp5UzE2sWWxk7G2cXtiZuKd4gvj5/munAruS8TPBNqEuYS/RKPJC4khSW1JuOSo5NP8WR4ibyeFJWUrJSBVIPUgtSRNJu0vWkzfG9+QzqUvia9U0AV/Uz1CXWFW4WjGfYZVRlvM0MzT2ZJZ/Gy+rL1s3dkT+S453y9DrWOta47Vy13c+7oeqf1tRugDTEbujdqbMzfOL7JY9PRzYTNiZt/yDPJK817vSVsS1e+cv6m/LGtHlubCyQK+AXD22y31WxHbedu799hvmP/jk+F7MJrRSZF5UUfilnF174y/ariq4WdsTv7SyxLDu7C7OLtGtrtsPtoqXRpTunYHt897WX0ssKy13uj9l4tX1Zes4+wT7hvpMKnonO/5v5d+z9UxlfeqXKuaq1Wqt5RPXeAfWDwoOPBlhrlmqKa94e4h+7WetS212nXlR/GHM44/LQ+tL73a8bXjQ0KDUUNH4/wjowcDTza02jV2Nik1FTSDDcLm6eORR67+Y3rN50thi21rbTWouPguPD4s2+jvx064X2i+yTjZMt3Wt9Vt1HaCtuh9uz2mY74jpHO8M6BUytOdXfZdrV9b/T9kdNqp6vOyJ4pOUs4m3924VzOudnzqeenL8RdGOuO6n5wcdXF2z0BPf2XvC9duex++WKvU++5K3ZXTl+1uXrqGuNax3XL6+19Fn1tP1j80NZv2d9+w+pG503rm10DywfODjoMXrjleuvyba/b1++svDMwFDJ0dzhyeOQu++7kvaR7L+9n3J9/sOkh+mHhI6lH5Y+VHtf9qPdj64jlyJlR19G+J0FPHoyxxp7/lP7Th/H8p+Sn5ROqE42TZpOnp9ynbj5b/Wz8eerz+emCn6V/rn6h++K7Xxx/6ZtZNTP+kv9y4dfiV/Kvjrxe9rp71n/28ZvkN/NzhW/l3x59x3jX+z7s/cR85gfsh4qPeh+7Pnl/eriQvLDwG/eE8/s3BCkeAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIXRFWHRDcmVhdGlvbiBUaW1lADIwMjE6MDg6MjAgMTg6MDE6NTIdmG1NAAAawUlEQVR4Xu2dCVwTx+LHZ3MnJBAgnMqhbZ9trdrWth54IArKjRzeWm1LReqBoH32ePq3r7V9VRHFelSrT5GKyi2goAIeVO35etfWWhVEjICQQO7s/neWDQ3KlZCEHHzJJ5v8ZjdsZn47M5u5EAzDwAADUMjtADbOgBEGIBgwwgAENm2EpAMFUxcfrbiVdCh/DinZLDZZWUw+VMAXMblXKkS0Ya0KFWBQKGAKH9wZhEgnbZobcoPczaawOSOsPHr60Jcq3qKbYjkA8Kvj35+IAvzJlUUHE9iyyqls8bTY2Fg1cYCNYDNGWHukcP7vDMFnXz6QMwEK0x3/3g8ZQaMP5zPRUUjzf9IWh79NHGwDWL0R3j5aMvQug3uhshkMkqvQNgP0YASNPsmF2eIjr4/ZGh9TBj/LmrFaI2RnZ1PPYw7FVUq76XUSZVtCw0cnCU5EQRc6h4bXHxzBdVdqi9/HC6KE8LOtEas0QtLRojW/MQUf/dikoGoSlHiCD7jVwQjEFtcHcxlgvJ2kYNfi0ChctTqsyggpR3JeEHI9Ss+LUCc1iqce/tBO0L4YgXiDP0YJWOqRiOidba9F/AdXrQarMMKqnaeZykHMSxcU7Bea5LAYgOmGPxnBCDCcAhDg785o8lI1hqS+HnsZD7V4LN4Iq7NPpf6P5px0vUWBfxdc0EowYxlBE86j00CAAPvZlSIf99GSCDGuWiwWa4Q3s0tCq9mC41UiJUeTUMRXIRNKk+Bd6Z0luK5G0OhDHFhgjF1rxq74iEW4YpFYnBFWZOQ7Kx0Flyvl9CckSnWHBCG+CnyCD7jtRu8swfU1gkZ/yY2teIoueiMtfuZ+PMSisCgjJOWfPfoVjT+nBr8d7CxBiK9C6kR4N3qH48ltX40At1QEAYGDGEJPpHna1vjYH/E9LAKLMEJKTvGSv7hue78Rq+jdJQjxVbTDu9E7HE9uDWEEzdaZRQf+AvQqV0WZvH35DDm+p1lj9q2Pa3NKoi+w3Q9824qbwIJokChA9i3VmMtSinTF7vztpGy2WESOsOZ48agGe+ezFySIQKWGl+3fV572lUl8FVInwrvROxxPbg2ZIwBU63NxJg7mSB+jihZsXxaTSwhmhtkZYV1hIe+jiM5vxVJyihL/ZLunfdeipHeWIMRXIXUivBu9w/Hk1phGgLDoVLz+QLvtgTZO2pw47xYpmwVmY4SAjRtpz4yZUnmFyvPzpqCKx5vvr/goesanZHAHknLPHv+K5hBXTbYhWIoRNLjzmGCyk+pMkIss2Fyau83CCGsKz2z+meeSfE2qohARh0cwFQHAj441uDbVhX48O+IquWs7yQUFfAngX7qgZA4Xy8nbSE3Ewwf5OV3p7QmmHd6FbmgjaBjpykGf5Yg3pidEv0dK/Ua/GmFdfml0Nd8l44oM48AIa484rQTh0ihgAiL7la1sGJ8aGdnUduTfvJVVNKHazvnkRRHKV+ORTxxPbPAnMqHgy4f19gTTDu9CN5YRIAh+uxkwmCXypjRHpS2LqyBlk9MvRvhX3ikfob3jhYso01sOK38Q/DzaI04rQTRbLxYNvCBvyt0WNTWm7YCOpGQVrfuF5fL+jyLY4kgeRyYUfEk8aemaz+0Q3oVuTCNosGPQwDRPynUHtH5seuLCBlI2GSY1AuwjUMV1KbvC4AcIFSpSJcHPoz3itBLk4YgfYUdTD2sRrt8aF7KJOE4Log8C4BdeQbkhtfjtmyUZQYOXAwtMcFIU7FkabtLmbpMZYc3Jsk2/8lz/+ZtM3flvF/h5tEecVoJ0FvEI/jeeg4g9xMJZW+eEn4aHa/NuZp5HHdu5qqKFMkSmVBMfSTxpPq+LBDcHI2gY7c5RDWeI1qYnxqSRklExuhHeyisNreYLjl2WAztS6hz8PNojTitBuot4NpUCJjGUt9xb6if/e97MR27HUo4UhFdzBFmXGlVEHaT987pIcHMyAoRKIeoPjZ7Yg+k73pj9NSkbBaMZ4d28Uo96nn3VJYw1RKqpB3QHfh7tEaeVID1FPHzvwqCD8UjLxZ9/vBhQvmHDQ2UO7LFUsvkHhJ/8m0hBIY7T+nzic8mtuRlBA59NBwFu4AdfKjpuQ3yYhJQNisGNQNQD7FyKv2Txp9fJH0mTrsHPoz3itBKkp4jX1p+wo2MjlY0702YFr8SVDsDfKZ58akLlRSnTr/7hRitya65G0PCYExuMs5cd/CQh4hVSMhgGNcLawrL1v9q7rv9VpqaSUu/Bz6M94rQSpKeI19ahBJ9esqfLh0juL906L/wQrnRg9cHsYY0c14qKJtRDoSL+Uftx5m4EDWM9OfJ/0Jrj0xNjM0ipzxjECOtyS6bUOrrlf6FA7PX+PPy49ojTSpD2iIXhPSQIlDThNPz+fDIXE3rKGqd9OC/ykebg5CMFC69Tnfd92SBnth+n9X+1P8/cjACh4/WjQC/GXXeFeMq2lbHXSFlv+mSEjflnXOvsuFWXAOtxSW/qAd2Bn0d7xGklSE8Rr61DqUM4rjsyqGACQ/4dn9UyubM2jJWZJfu/UvJeuSGSI5ZkBA0udgwwxRWt+vPY1/7l5Y/Wj3qL3kZIKqko/IbtFF6rSz2gO/DzaI84rQTpKeK1dSh1CNfSfe3oYDQQZ6XPnT4XVzuwsaiIc0fMulzZRBvZJGvr/Ko5jtj28H+19fZwExlBw1MCNvqCnSR157KotaSkEzob4c284iXXHAft+0mfekB34OfRHnF4BD8SsTC8hwSBUofwTvTRDnTsKZUw/OP5M4txtQMpB4+9cIfuVnq+XuWkxnM4zXGWYAQN4b7M20cSZviQb3uNzh1TJHb8JIObwESM4dOBsEWCKBBWMCl1YOuS2V9nLfB3nuvQuvo5Z5aBsjrT0qikupEvdcIm5kcY4cBQz+W1nr/apAS3VTRS7ZrUJZFppYsn0We5qE5485ikahmQ+ZHOWLURvPGKVDRPXlAaN46G59DnSLnXfPJyyKzxaJMgwp1yzQ6vdFoCCLnVFas0Ap9JA+E89XeT2UL79FlBfWq8SU+MajjwcuCTcY7igCkeTBFsNrZGrMoITPzeOsge1EbK7gzfEzPl+a66vOnDliXRFScWT3GY76bYMELAgtVEs0TfBLUKI8Cr1M+e2hoDGqIORE0c9MHi2F/IIIOz/ZWI95Y7NzDiPLEz7lwGqZoPNltHGMGjq2bRm9dnRYzjfjwvvICUjQrsZ7jnldCgUJbYN2ww4zaLZj71B31LLos1gi+HDqIYkqzisJfoW+KC/03KJmVz4sxbh18N9JnjKouZ6MGWkrJFYnFGcGbgFUG24uupCNVuR/S0R34l7A9SX4/KLUyYylnghe4Y5swy7S9ID2H1dw0s2MjCRqunKOue2Bk++cUNYc8bpV2+L6THR6waS1OzY72pV505/VN/wBArrSNQ8EJvAgcRhSrvBe8PHe+9NTb8OhlklsBxjvtfDxkbzW8cHuzDEsJWQlNilTnCKDuaKkpVv/bI9JcccAM80jfRnNm8fN4vWQlBbgu8VPFjPDgKUjZbzNIIQ1g0LBqID+dPe56eGhOyhZQtkrSEmfvLVgUy5/sgGUMd2aRqPKwmR3gMN8Ez6nvsrRFTXyYlq2DXsohF011l9lFD6H3uRNItmJXUERh4ZWf7DPOfT0Af4DxLzmrJEvKtWWHWdQRrRI2qeeRLs2LACKaGSuOSr4wCgujXE2bACKaGAoxaY7T6H5SsBQRDuh/x1VespbJo7ahRjEO+NA621uikL4NpKjyuME/yrcnBEIRFvjQrbM4ILlwOKJZyZ8Znnftp3cHC/qjBGzdHwAsf8oVO2JQRnqYrwXdNCiBWqMHJRmR4JdVZtCLz9BEy2CQgFKpRcwSKflUE2zLCL0o6GMVUgWEObT2T4bpOJx7Q54dlXlKkHC54nRCNDKpGB4oGc+B7OQ08j4j2zHREqwTstjk8v2qU07NE3L0LP6+8l3KoYAQhGgmMghi/wUEPbM4IEBTD1LvnTpsQiNx7MkhAvcugUoAKxUCZUOVaJHH44fWMM1/DNSDI3Q0KAijG7aiADNQRdGbbkthrh+f4e8bZiRa95Mwk2jceyJQg/z4Y/RWLLV1+qOgTYkcDgiHAqEXDwA9KfSD15ciMk/MnsmY7Kw8OtWcQV9T1Zjly7D4jMeLQeWnS/txZxI4GAAWI0YZOObDowIUiO0++1YkBI2ixY2HwK8FuYm6kK/jBgdk2NO6yUMY60cw7tujQuZq3D+YOJcS+YfDJxWF3/mne7KZYV8n4PQnhkaSsEwNGeIgNYWGSfQsCR0XY3X8x0I0uhxNawfUiS+4qB+WL+X8mHDhVAacHInfXGRQBBs0RRrhy0EW+6vU5iUGOqYn6ry81YIROSP5vfvQNmseFM/eUzMeZSvCsoK1YF7YqwIk64L+j3lmRtL/wfULUEQwzTGVRYMcAs4bQLiZ5NzN2LJ3Z5+78A0bQ4l8H8nwWZ5bfyhbxcqqEMuI2rw6/7fehyX+c7Y4Wetu3Xcw/N8goGXW0d6L3lYtTdh8LIsRegldAeh6O3Q0wh5rhw74f7fhg+L6loZMentRb319LB4yAA7P6xMzTZYVq55slQrW3DC8KYO/pqa70xnB209jPXg4a+cnikEg/pFkQ6Um9xmW0pWXlXRn3WJND6cv7y/5480i+KyH2AF5Z1DtHeM6do1o4WLnq2LIgV9g5lpQJAgI20uL3Fl+63Mx+QEo6YfNGWH24aP1uqbs8p4EWWIdn/ZBnnViquY6SNVmLpjhvi49pnxmeGBm9OOjJmfy/R0ZL4M/VNcrHT92zu7dsX1E+uWt36JwjeOI50Vxf5GRlUiB9e2LMDlJuZ8Xego+lIePkx/9S+TXKUL3qLzZrhDUZhVNmZ11ozhJzNv7UJCcibxAXL3cFqoKyxRPp25ZEbiV27IS0+OiK7FenOizwkG8YIWATI6NrRHKQVQ0ip6SfU67am5dC7NgJKNZ7IzBpFBDmw6oOspd67UmIiCDldpL35IVGfHKm9fBfYO0v9VIiLfWdqcfmjMBAMNBKZc7PlzmUn29QEdMBcuhUECZArk9jNbrtXBjc6/kUtr8W9d4Kt0bGrEGgfWT0d0IJLeMOfUvs7rLG5F3Z4whRCwwgvbp9HOvJUcz1UizIXDbde/vymTWkTJC8L89j4e5TN47W0ovOV0s6tGbq6QPbMsIYthK4cZigqBHht8A1I3EmCRgt0cyG6Z/Nm/qEPqvBEyOj40ODwuzqfcO8mMTIaBS/7M9WyxxP3Od8sXhPSYfmbgxDus26fR1ZAI6BKF0ZyNy+NCaTlAlgXSZh78ni0/fZtYW3FENgsfQwxGReemATRkj+vGjFNZrjhqtSOqgm6wFPOzDReQ7SD47PmcjbuiSmjBD7AFyjKSM+0Ge2hzRmomfbyGiRTAXybiqHlwpZosTdhYehhpcjnRYNcGqeKF/GH5N4QgEcA0HK7SzfnbsuvcZBfvQvNOQOXgx1Be5BvdB5er3lZVXfn0JZI8m3hgM/D3gqT7GoaHHAcwaZcGDVgdznGh1cyyqbUQGcLg/mmwIWDUygSysD6M3TjLme0oq9hduvilkrrtVL23/+h0PfXBlqyclbcj4pEUz04kj+QW2ZlZrw6JR/a3dnT7iB2Z8sr5HxYU7TE248Jvj9nRk6NzlYpRE2Fn3LqZM1X7ggY46Gq8fDz2Xi99/+9tgdD2XrpE1zQ26QuxoV2ILZQkPPVwiRMXAdSEjAYCYor2m7oh93YmFj7aW7PkmIWk4IWiRvL+A3MumXzt7Fhot1mNTUFa+r/PFusM5GsLqiIel46d5zMkVLYQt1dBO5SsxYPl0WTXsw+2Ds5MGmMgEEjoz+LCFkbIzTg+HBPmxyZDRCNA5F+9K+i3BUcjszwbK9hUfKZawHsFjRxQQQmy8aUo6enHOT43LwarOSBYsA+L0e49Cx59HG3WlzQt8gd+tXkvbkvaYAtI0sVB7bWbtA0p7c139R8HZerZXo3TDlxKGDv9aH2F7R8HZuydB7VPsL5yWUQfAXQfghjgxYD5BcZdxVWsS6zKt2Hh91l+pw9lyNom2l2z7gyKaDmxtsyAjEQl5Up7NfYHb+QimefeIHw5XaJ3OB0LO1vtOp+c0NWIcQ09CqciEY/QAuZmoAYLFz+/90N4JF1hHWnDi96VOWj6JAzvK/T5aho+3pyjha89JDkX5ulmCCxL15n1RJEWnOTaXBTABBdbywNViUEd7KLgmde+rL1hOYw1u/tSqJc/fBy8RoliQzP2IMY/PskE6XEDYnktJPzApOPyPN/IuS+EeDTOcrtyf0rSxahBHgQmGvl1TdyKMKir5oURM/qfLoVBDCVv7sh9TZb48JXEDsaMak7MkdOn9Pac3n91jHvrgjMVq/RbyAJV/phtkbYW1e8YFzLJfaMhmVWC0ONg9P4iJNEYr7E/dETn7GkNPsGgNYl4nffbKisJ79Z9FN2SDY28mYWG2OIGLzg12pGPDF5MQqsHFI07qMkLGOH84Ju0TuYras3Jv//rZb9orjt1B/YYtp5tOy2joC/r0k37eqQC2VDdxRRS1FLu3QEGOOwF5LUbvOig/dpLzz0/225mFTYbU5An5/S+SlChQFZ6QUr0qeV/Xq/HM5RKCZAXspLfq09I+j93mllTUSo86M0hVWmyMgCNKhUL0rU4JcBSc6qvhL+dpjRQtJud+BvZNO1dndK6xWPN5Z87Cp6E3DVGeYvxEA1mmsftuiYuRTBIfjT1669W5mqQcpm5xV+/JSpu4qV2bVgEjYS8kc0Ke7vcUUDZ0hx+8iSlsQ7zNsx9qkE2XHSdkkrN6XM2bW/nMNmXeZW74TSvvUM9nQXKzj6nw+FpAjEIv2dUutVAly5Jy4yIIr8rVHi+eTslGAvY1eO1j2fUEz78rZWrmTvmWyMWHbKXTuKW32RsAwrNftsN+IVIxclH/ktbwLN9/NzDN4cbH8YPHBc1KeKK9WPbJZplvzsClplTZbnxF6kyNoA4uL0yLE5wzdo3bVsbLPSblPJP+38LXgA5XyrDrq4htNMlI1X+h03dcYsjojaKiRKEB2K2tuVM4XspTDBXqNZl77afbT8zPK7x2tZ+/7SijTe2CKqaEqpdZnBNwHfcqDv2pSMnPVTsdeza688eaRM70ajQSbh5dmlF45qXT+uaxO6arsYx8BU4MiDJ07tlhAjoD0+aYcFhenHoAhlYjdvRVHu588a9Xh4u3fsDnSPNjPEK+EWhqwY4pKTdW5/NLZCPYtzTOn0ZTVcI1FU9Dd7aOu1LTixYWIOT8qq0qWnFEYS8oEcAR0dOZFydEGxsrfm+UGbx42NnBw7HQfVn2Is+j5hwfE9AadeyhpeDP3dHito2vWZbmBZhLFzwOeysM9lFYWVZ4rVLIDiHBoCbgTfJBbbR1KHcK70aGRp9qjN7iSB7HNbMf8igeYt0wBV4hv20/7uJ7+r7beHo5q/V8j86IHW/k0Q5y0Y1nMLlLSGb2NoGHNybJNv/Jc//mbTN23LAI/D3gqDxthVVFlaYGSHUSE95AgUOoQ3o2uOZ6KX/sqNRHQQYfv4Uti28P/1dbbw01gBG8+C/jxZSf2JET2eWqfPufvW8KD3l5Sf50RjonPuJHDxQ0Jhnb+E7OhUOvbXNePcJk0AFeCCWTLHA1hAohBCno4Yigt2D8ooLnOM4imuMExYP0B6eNdgzUBh+FP9WKL4twlAYeWhjyZuiqyiQzqMwat8b0/c/rd3dPGPTZdVDvNjwkMsrI6glAGjIAz0o2jhnMl5b4R5JC2LK6ClA2GQY2gYUtM6LnDU0Y7zJQJ33mGRe1T1m7IuwZLxIPHBLN9qGdWeTUzDTFXUlcYxQgaNkfO2FTg/ywtUi0uGEROV6creF3L8m7mDQCLTgXhvszb0x2kXp8uCwsy5oBdiFGNoCE11D9qYvNfgukU+a88HVdWpwDU5owAR0fP9ZBEHUmY4aPPbwL6YBIjQD6IimrYFTT+6eCmmokTGegDOCqpN+B1eqNeCebEUwI2utAH21L0RqBdWuKsAlI2CSYzgoYPY8Mu/TfgRadImXDlsyxqj1c7ggGrryyScyZWcUouM3cui1pLyibF5EbQgNcf0nP8n2VEqkRZ3qyu6w8YUJv9usr6AofJh/iy7kY4tD65b2nohPLyDf1m+n4zgobUsClzx4ha7YOp8h/s8QrSw1ABYpU5wlhPjnzBINniownTPbetjDXuMsG9oN+NAPkoYrx4Z5DfqMCGmucfl4uukDIBilnXD0qPObHBAl/kYOnKQFZaYtwhUu53+tzWYGyS80s/zMX46+B9pDHaGjqEd6Eboq0BDlef6g5+8KWi4zbEh0kI0YwwixyhO2hq9C4c72ipUCgICPRmN0a5iF88mBAyyhxNADH7HAGyJqck6RrXdfMPYhXt4SsQvjfXHOE5N47qGXrz2vTEmDRcMWsswggaVhWcK7xKcQi/K4UzpZERjm/NzQhe9iwwwV5WsHtpeK9nce1vLMoIEDhXgpBuV3VeThsiVRIpZzZGgFP5TnWlXHfHpH4fL9V9Ftf+xOKMoOHNE8Xh1RyXrCqRkmMORpjswWoZitbHbF02u8+zuPYHFmsEDauzT6V+T3NO+qNFgX8XXCATRpPgRIJ1oneW4PoY4RlnJjqSIf5gZ3zUely1WCzeCBDY/VzlyTh/QcUZA5fr005wIsHIhNPWO0twXYzgbkcHE3jK8kCHVqO3DJoCqzCChrc+LxhRyxGcOy/GXIixCEYwAtHp1YVy200qnrQ5ceYtPMQqsCojaEjJKkr8nSFI+7ZJQddO0L4aYYIrUzoUa16Q+mpULq5YFVZpBA0rj5cd/xLlxd2G8xfB7wkfcKujEZ6wZ2KjaaKd6a9GrMQVq8SqjQBZkZHvLGXxL1e2UJ+QKNVtCd1LIzgy6cCfp7jKEmMWMZVvX7B6I2j45+GCoJscQc6FBgW3JyPQEAoIEFCEbmrRtK0vm/8srobAZoygIfnz4vf/B/hv/dIkp3RmhBecGYph6qY3UhdH7CcOsBFszgiQgI0bacP+4Vd5Ucr0q5coCA/4chngJXprZvqCGWY/i6sxsEkjaFh9MHtYA1tQwcRUjc4yybiPlpj3LK7GxKaNMMDfmH1/hAFMw4ARBiAYMMIAOAD8P+GUHbDC0lUVAAAAAElFTkSuQmCC"},830:function(e,t,a){"use strict";a.r(t);var n=a(31),s=a(32),r=a(68),c=a(67),o=a(0),i=a.n(o),l=a(318),u=a(83),d=a(50),p=a(6),f=a(12),g=a(4),m=a.n(g),b=a(37),h=a.n(b),A=a(29),j={tag:A.q,className:m.a.string,cssModule:m.a.object},O=function(e){var t=e.className,a=e.cssModule,n=e.tag,s=Object(f.a)(e,["className","cssModule","tag"]),r=Object(A.m)(h()(t,"card-group"),a);return i.a.createElement(n,Object(p.a)({},s,{className:r}))};O.propTypes=j,O.defaultProps={tag:"div"};var y=O,E=a(356),v=a(357),N=a(358),R=a(322),w=a(22),C=a(433),M=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:!0},a.toggle=a.toggle.bind(Object(R.a)(a)),a}Object(w.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return i.a.createElement(C.a,Object(p.a)({isOpen:this.state.isOpen,toggle:this.toggle},this.props))},t}(o.Component),P=a(389),Y=a(390),q=a(346),D=a(350),T=a(360),L=a(107),B=a(3),I=a(85),Q=a(51),W=a(560),U=a.n(W),Z=a(38);function K(e){var t=document.location.href,a=t.split("?");if(a.length>=2){for(var n=a.shift(),s=a.join("?"),r=encodeURIComponent(e)+"=",c=s.split(/[&;]/g),o=c.length;o-- >0;)-1!==c[o].lastIndexOf(r,0)&&c.splice(o,1);t=(t=c.length>0?n+"?"+c.join("&"):n).replace(window.location.origin,""),window.history.pushState("",document.title,t)}return t}var S=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var s;Object(n.a)(this,a),(s=t.call(this,e)).changeUserName=function(e){s.setState({username:e.target.value})},s.changePassword=function(e){s.setState({password:e.target.value})},s.changeIPAddress=function(e){s.setState({ipAddress:e.target.value})},s.redirectToDashboard=function(){s.props.history.push("/Configs")},s.onSubmit=function(e){e&&e.preventDefault();var t=s.state,a=t.ipAddress,n=t.username,r=t.password,c=s.props,o=c.changeUserNamePassword,i=c.changeIPAddress;Promise.all([o(n,r),i(a)]).then((function(){I.a.post(Q.a.noopAuth).then((function(e){console.log("Connection successful."),s.redirectToDashboard()}),(function(e){console.log(e),s.setState({error:"Error connecting. Please check username password and verify if rclone is working at the specified IP."})}))}))};var r=window.location.href.split("#/")[0];return-1!==r.indexOf("?")&&(r=window.location.href.split("?")[0]),s.state={username:"",password:"",ipAddress:r,error:""},s.state.username="1",s.state.password="1",s.state.ipAddress="http://localhost:5572/",s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){localStorage.clear(),this.props.signOut();var e=window.location.href,t=new URL(e),a=t.searchParams.get(Z.d),n=this.state.ipAddress;t.searchParams.get("ip_address")&&(n=t.searchParams.get("ip_address")),a&&(Promise.all([this.props.changeAuthKey(a),this.props.changeIPAddress(n)]),K(Z.d),K("ip_address"),this.redirectToDashboard())}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.ipAddress,s=e.error;return i.a.createElement("div",{className:"app flex-row align-items-center","data-test":"loginComponent"},i.a.createElement(l.a,null,i.a.createElement(u.a,{className:"justify-content-center"},i.a.createElement(d.a,{md:"8"},i.a.createElement(y,null,i.a.createElement(E.a,{className:"p-4"},i.a.createElement(v.a,null,i.a.createElement(N.a,{onSubmit:this.onSubmit},s&&i.a.createElement(M,{color:"danger",children:s}),i.a.createElement(P.a,{className:"mb-3",style:{display:"None"}},i.a.createElement(Y.a,{addonType:"prepend"},i.a.createElement(q.a,null,i.a.createElement("i",{className:"icon-user"}))),i.a.createElement(D.a,{type:"text",placeholder:"IP Address / URL",autoComplete:"ipAddress",onChange:this.changeIPAddress,value:n,"data-testid":"LoginForm-ipAddress"})),i.a.createElement(P.a,{className:"mb-3",style:{display:"None"}},i.a.createElement(Y.a,{addonType:"prepend"},i.a.createElement(q.a,null,i.a.createElement("i",{className:"icon-user"}))),i.a.createElement(D.a,{type:"text",placeholder:"Username",autoComplete:"username","data-testid":"LoginForm-userName",onChange:this.changeUserName,value:t})),i.a.createElement(P.a,{className:"mb-4",style:{display:"None"}},i.a.createElement(Y.a,{addonType:"prepend"},i.a.createElement(q.a,null,i.a.createElement("i",{className:"icon-lock"}))),i.a.createElement(D.a,{type:"password",placeholder:"Password","data-testid":"LoginForm-password",autoComplete:"current-password",onChange:this.changePassword,value:a})),i.a.createElement(u.a,null,i.a.createElement(d.a,{xs:"6"},i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(T.a,{color:"primary",className:"px-4",type:"submit","data-testid":"LoginForm-BtnLogin"},"Enter"))))))),i.a.createElement(E.a,{className:"text-white bg-white py-5 d-md-down-none",style:{width:"44%"}},i.a.createElement(v.a,{className:"text-center"},i.a.createElement("img",{src:U.a,alt:"RClone logo"}))))))))}}]),a}(o.Component);t.default=Object(L.b)(null,{signOut:function(){return function(e){e({type:B.N})}},changeUserNamePassword:function(e,t){return function(a){a({type:B.c,payload:{authKey:btoa(e+":"+t)}}),a({type:B.d})}},changeIPAddress:function(e){return function(t){t({type:B.g,payload:{ipAddress:e}}),t({type:B.d})}},changeAuthKey:function(e){return function(t){t({type:B.c,payload:{authKey:e}}),t({type:B.d})}}})(S)}}]);
//# sourceMappingURL=4.a6c82bd7.chunk.js.map