(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(22)},22:function(e,t,n){"use strict";n.r(t);var l=n(1),a=n(0),r=n(7),u=n.n(r),c=n(2),o=function(e){var t=e.apiKey,n=a.useState([]),r=Object(l.a)(n,2),u=r[0],o=r[1],i=u.map((function(e,t){return a.createElement("tr",{key:t},a.createElement("td",null,a.createElement(c.a,{to:"/users/".concat(e.userId)},e.userId)),a.createElement("td",null,e.incorporationDate),a.createElement("td",null,e.loanPurpose),a.createElement("td",null,e.industry),a.createElement("td",null,e.revenue),a.createElement("td",null,e.requestedAmount))}));return a.useEffect((function(){!function(){var e="http://loan-api-269422.appspot.com/users?key=".concat(t);fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),o(e||[])})),console.log(u)}()}),[]),a.createElement("div",null,a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"userId"),a.createElement("th",null,"incorporationDate"),a.createElement("th",null,"loanPurpose"),a.createElement("th",null,"industry"),a.createElement("th",null,"revenue"),a.createElement("th",null,"requestedAmount"))),a.createElement("tbody",null,i)))},i=function(e){var t=e.apiKey,n=e.id,r=a.useState([]),u=Object(l.a)(r,2),o=u[0],i=u[1];return a.useEffect((function(){!function(){var e="http://loan-api-269422.appspot.com/users/".concat(n,"?key=").concat(t);fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),i(e||[])})),console.log(o)}()}),[]),a.createElement("div",null,a.createElement(c.a,{to:"/users/".concat(n,"/edit")},"Edit User"),a.createElement(c.a,{to:"/users/".concat(n,"/delete")},"Delete User"),a.createElement("div",null,a.createElement("div",null,o.userId),a.createElement("div",null,o.incorporationDate),a.createElement("div",null,o.loanPurpose),a.createElement("div",null,o.industry),a.createElement("div",null,o.revenue),a.createElement("div",null,o.requestedAmount),a.createElement("div",null,o.url)))},s=function(e){var t=e.apiKey,n=e.id;a.useEffect((function(){!function(){var e="http://loan-api-269422.appspot.com/users/".concat(n,"?key=").concat(t);fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),o(e.incorporationDate),p(e.loanPurpose),f(e.industry),g(e.revenue),O(e.requestedAmount)}))}()}),[]);var r=a.useState(),u=Object(l.a)(r,2),c=u[0],o=u[1],i=a.useState(),s=Object(l.a)(i,2),m=s[0],p=s[1],E=a.useState(),d=Object(l.a)(E,2),v=d[0],f=d[1],h=a.useState(),b=Object(l.a)(h,2),y=b[0],g=b[1],j=a.useState(),S=Object(l.a)(j,2),C=S[0],O=S[1];return a.createElement("div",null,a.createElement("br",null)," ",a.createElement("br",null)," ",a.createElement("br",null),a.createElement("form",{onSubmit:function(e){return function(e){var l="http://loan-api-269422.appspot.com/users/".concat(n,"?key=").concat(t),a={incorporationDate:c,loanPurpose:m,industry:v,revenue:y,requestedAmount:C};fetch(l,{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/vnd.restful+json"},body:JSON.stringify(a),redirect:"follow"}).then((function(e){console.log(e)})),e.preventDefault()}(e)}},a.createElement("div",null,a.createElement("label",null,"incorporationDate"),a.createElement("input",{onChange:function(e){return o(e.target.value)},value:c})),a.createElement("div",null,a.createElement("label",null,"loanPurpose"),a.createElement("input",{onChange:function(e){return p(e.target.value)},value:m})),a.createElement("div",null,a.createElement("label",null,"industry"),a.createElement("input",{onChange:function(e){return f(e.target.value)},value:v})),a.createElement("div",null,a.createElement("label",null,"revenue"),a.createElement("input",{onChange:function(e){return g(Number(e.target.value))},value:y,type:"number"})),a.createElement("div",null,a.createElement("label",null,"requestedAmount"),a.createElement("input",{onChange:function(e){return O(Number(e.target.value))},value:C,type:"number"})),a.createElement("input",{type:"submit",value:"Save"})))},m=n(4),p=n.n(m),E=n(9),d=function(e){var t=e.apiKey,n=a.useState(),r=Object(l.a)(n,2),u=r[0],c=r[1],o=a.useState(),i=Object(l.a)(o,2),s=i[0],m=i[1],d=a.useState(),v=Object(l.a)(d,2),f=v[0],h=v[1],b=a.useState(),y=Object(l.a)(b,2),g=y[0],j=y[1],S=a.useState(),C=Object(l.a)(S,2),O=C[0],A=C[1];function D(){return(D=Object(E.a)(p.a.mark((function e(){var t,n,l,a=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/vnd.restful+json"},redirect:"follow",body:JSON.stringify(n)});case 4:return l=e.sent,e.next=7,l.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){(function(){return D.apply(this,arguments)})("http://loan-api-269422.appspot.com/users?key=".concat(t),{incorporationDate:u,loanPurpose:s,industry:f,revenue:g,requestedAmount:O}).then((function(e){console.log(e)})),e.preventDefault()}return a.createElement("div",null,a.createElement("br",null)," ",a.createElement("br",null)," ",a.createElement("br",null),a.createElement("form",{onSubmit:function(e){return P(e)}},a.createElement("div",null,a.createElement("label",null,"incorporationDate"),a.createElement("input",{onChange:function(e){return c(e.target.value)},value:u,type:"date"})),a.createElement("div",null,a.createElement("label",null,"loanPurpose"),a.createElement("input",{onChange:function(e){return m(e.target.value)},value:s})),a.createElement("div",null,a.createElement("label",null,"industry"),a.createElement("input",{onChange:function(e){return h(e.target.value)},value:f})),a.createElement("div",null,a.createElement("label",null,"revenue"),a.createElement("input",{onChange:function(e){return j(Number(e.target.value))},value:g,type:"number"})),a.createElement("div",null,a.createElement("label",null,"requestedAmount"),a.createElement("input",{onChange:function(e){return A(Number(e.target.value))},value:O,type:"number"})),a.createElement("input",{type:"submit",value:"Save"})))},v=function(e){var t=e.apiKey,n=e.id;return a.createElement("div",null,a.createElement("form",{onSubmit:function(e){return function(e){var l="http://loan-api-269422.appspot.com/users/".concat(n,"?key=").concat(t);fetch(l,{method:"DELETE",mode:"no-cors",cache:"no-cache",credentials:"same-origin",headers:{ContentType:"application/json",Accept:"application/json"},redirect:"follow",referrerPolicy:"no-referrer"}).then((function(e){console.log(e)})),e.preventDefault()}(e)}},a.createElement("input",{type:"submit",value:"Confirm Delete"})))};u.a.render(a.createElement((function(){var e=a.useState("AIzaSyA5CDBcbdSMC9u61UrCRat6nP4n2pWiqR0"),t=Object(l.a)(e,2),n=t[0],r=t[1];return a.createElement("div",null,a.createElement("header",null,a.createElement(c.a,{to:"/"},"List Users"),a.createElement(c.a,{to:"/users/add"},"Add New User")),a.createElement("label",null,"Api Key"),a.createElement("input",{name:"api_key",value:n,onChange:function(e){return r(e.target.value)},type:"text"}),a.createElement(c.b,null,a.createElement(o,{path:"/",apiKey:n}),a.createElement(i,{path:"/users/:id",apiKey:n}),a.createElement(s,{path:"/users/:id/edit",apiKey:n}),a.createElement(d,{path:"/users/add",apiKey:n}),a.createElement(v,{path:"/users/:id/delete",apiKey:n})))}),null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.c967c75b.chunk.js.map