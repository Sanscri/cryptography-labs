(this["webpackJsonpcryptography-labs"]=this["webpackJsonpcryptography-labs"]||[]).push([[0],{44:function(e,a,t){e.exports=t(63)},49:function(e,a,t){},50:function(e,a,t){},57:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),o=(t(49),t(19)),u=t(20),i=t(26),m=t(24),s=t(13),b=t(5),E=t(17),p=t(43),f=(t(50),function(){return r.a.createElement(E.a,{className:"navbar",responisve:"true",variant:"dark",expand:"lg"},r.a.createElement(s.c,{to:"/"},r.a.createElement(E.a.Brand,null,r.a.createElement("span",{className:"navbar-title"},"\u041a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f"))),r.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,null,r.a.createElement(s.c,{to:"/diffiHellman",className:"nav-link "},"\u0414\u0438\u0444\u0444\u0438-\u0425\u0435\u043b\u043b\u043c\u0430\u043d"))))}),d=t(23),v=t(15),h=(t(57),t(22)),g=function(){return r.a.createElement(h.a,{className:"contactInfo",fluid:!0},r.a.createElement(d.a,null,r.a.createElement(v.a,{xs:12},r.a.createElement("h6",null,"\u041a\u043e\u0436\u0435\u0432\u043d\u0438\u043a\u043e\u0432\u0430 \u042f\u043d\u0430, \u0433\u0440\u0443\u043f\u043f\u0430 17203. 7 \u0441\u0435\u043c\u0435\u0441\u0442\u0440, 2020"))))},y=t(67),S=t(66);t(58);function x(e,a){var t=O(e/2,e-1),n=C(a,t,e),r=O(e/2,e-1),l=C(a,r,e);return{p:e,g:a,Xa:t,Ya:n,Xb:r,Yb:l,Zab:C(l,t,e),Zba:C(n,r,e)}}function O(e,a){return Math.floor(Math.random()*(a-e+1)+e)}function C(e,a,t){for(var n=1,r=function e(a){var t=1;if(0===a)return0n;else if(1===a)return"1";for(;t<=a;)t*=2;return a-=t/=2n,t.toString()+" "+e(a)}(a).split(" "),l=e*e%t,c=2n,o=r.length;o>0;o--)if(""!==r[o-1]&&"1"!==r[o-1]&&"0"!==r[o-1]){for(;c.toString()!==r[o-1];)l=l*l%t,c*=2;n=n*l%t}else n=n*X(e,BigInt(r[o-1]),t)%t;return n}var X=function(e,a,t){return Math.pow(e,a)%t};var Y=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={p:"",g:"",Xa:"",Ya:"",Xb:"",Yb:"",Zab:"",Zba:""},e.handleSubmit=function(a){a.preventDefault();var t=e.state,n=t.p,r=t.g;e.runDiffHellman(n,r)},e.runDiffHellman=function(a,t){var n=x(parseInt(a),parseInt(t));e.setState({p:n.p.toString(10),g:n.g.toString(10),Xa:n.Xa.toString(10),Xb:n.Xb.toString(10),Ya:n.Ya.toString(10),Yb:n.Yb.toString(10),Zab:n.Zab.toString(10),Zba:n.Zba.toString(10)})},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"row mt-lg-5"},r.a.createElement("div",{class:"col-6 offset-3 shadow-lg p-3 2 bg-white rounded text-xs-center"},r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Group,{as:v.a,md:"6"},r.a.createElement(y.a.Label,{class:!0},"P"),r.a.createElement(y.a.Control,{required:!0,type:"text",value:this.state.p,onChange:function(a){return e.setState({p:a.target.value})}})),r.a.createElement(y.a.Group,{as:v.a,md:"6"},r.a.createElement(y.a.Label,null,"G"),r.a.createElement(y.a.Control,{required:!0,type:"text",value:this.state.g,onChange:function(a){return e.setState({g:a.target.value})}}))),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Group,{as:v.a,md:"6"},r.a.createElement(y.a.Label,null,"Xa"),r.a.createElement(y.a.Control,{readOnly:!0,type:"text",value:this.state.Xa})),r.a.createElement(y.a.Group,{as:v.a,md:"6"},r.a.createElement(y.a.Label,null,"Ya"),r.a.createElement(y.a.Control,{readOnly:!0,type:"text",value:this.state.Ya}))),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Group,{as:v.a,md:"6"},r.a.createElement(y.a.Label,null,"Xb"),r.a.createElement(y.a.Control,{readOnly:!0,type:"text",value:this.state.Xb})),r.a.createElement(y.a.Group,{as:v.a,md:"6"},r.a.createElement(y.a.Label,null,"Yb"),r.a.createElement(y.a.Control,{readOnly:!0,type:"text",value:this.state.Yb}))),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Group,{as:v.a,md:"6"},r.a.createElement(y.a.Label,null,"Zab"),r.a.createElement(y.a.Control,{readOnly:!0,type:"text",value:this.state.Zab})),r.a.createElement(y.a.Group,{as:v.a,md:"6"},r.a.createElement(y.a.Label,null,"Zba"),r.a.createElement(y.a.Control,{readOnly:!0,type:"text",value:this.state.Zba}))),r.a.createElement(S.a,{type:"submit",className:"align-content-center",onSubmit:this.handleSubmit},"\u0420\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044c"))))}}]),t}(r.a.Component);t(60),t(61),t(62);var Z=function(){return r.a.createElement(h.a,{id:"index"},r.a.createElement(d.a,null))},w=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(s.b,null,r.a.createElement(f,null),r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:Z}),r.a.createElement(b.a,{exact:!0,path:"/diffiHellman",component:Y})),r.a.createElement(g,null))}}]),t}(n.Component);c.a.render(r.a.createElement(s.a,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e9407eb7.chunk.js.map