(this["webpackJsonpw22hw-blog"]=this["webpackJsonpw22hw-blog"]||[]).push([[0],{35:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),i=e(20),a=e.n(i),o=e(4),u=e(2),s=e(3),j=e(10),b=e(5),d="token",f=function(n){return localStorage.setItem(d,n)},l=function(){return localStorage.getItem(d)},O="https://student-json-api.lidemy.me",h=function(n,t){return fetch("".concat(O,"/posts?_page=").concat(n,"&_limit=").concat(t,"&_sort=createdAt&_order=desc")).then((function(n){return n.json()}))},x=function(){var n=l();return fetch("".concat(O,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))},p=Object(c.createContext)(null),v=Object(c.createContext)(null);function g(){var n=Object(u.a)(["\n  color: red;\n"]);return g=function(){return n},n}var m=s.a.div(g());function S(){var n=Object(c.useContext)(p).setUser,t=Object(c.useContext)(v),e=t.isLoading,i=t.setIsLoading,a=Object(c.useState)(""),u=Object(o.a)(a,2),s=u[0],j=u[1],d=Object(c.useState)(""),l=Object(o.a)(d,2),h=l[0],g=l[1],S=Object(c.useState)(),w=Object(o.a)(S,2),y=w[0],k=w[1],C=Object(b.f)();return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),k(null),e||(i(!0),function(n,t){return fetch("".concat(O,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(n){return n.json()}))}(s,h).then((function(t){if(i(!1),0===t.ok)return k(t.message);f(t.token),x().then((function(t){if(1!==t.ok)return f(null),k(t.toString());n(t.data),C.push("/")})).catch((function(n){return C.push("/"),k(n)}))})))},children:[Object(r.jsxs)("div",{children:["username:"," ",Object(r.jsx)("input",{value:s,onChange:function(n){j(n.target.value)}})]}),Object(r.jsxs)("div",{children:["password:"," ",Object(r.jsx)("input",{type:"password",value:h,onChange:function(n){g(n.target.value)}})]}),Object(r.jsx)("button",{children:"\u767b\u5165"}),y&&Object(r.jsx)(m,{children:y})]})}function w(){var n=Object(u.a)(["\n  border: 0.5px solid #ddd;\n  font-size: 16px;\n  padding: 5px 10px;\n  margin: 0 10px;\n  cursor: pointer;\n  border-radius: 8px;\n  background: ",";\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.4);\n  }\n"]);return w=function(){return n},n}function y(){var n=Object(u.a)(["\n  margin: 20px auto;\n  text-align: center;\n"]);return y=function(){return n},n}var k=s.a.div(y()),C=s.a.button(w(),(function(n){return n.color}));function z(n){var t=n.setPosts,e=n.pageNumberCount,i=n.limit,a=Object(c.useState)(1),u=Object(o.a)(a,2),s=u[0],j=u[1];return Object(r.jsx)(k,{children:e.map((function(n){return Object(r.jsx)(C,{color:s===n?"rgba(0, 0, 0, 0.4)":"rgba(0, 0, 0, 0.1)",onClick:function(){return function(n){h(n,i).then((function(n){return t(n)})),j(n)}(n)},children:n})}))})}function L(){var n=Object(u.a)(["\n  color: rgba(0, 0, 0, 0.8);\n"]);return L=function(){return n},n}function I(){var n=Object(u.a)(["\n  font-size: 24px;\n  color: #333;\n  text-decoration: none;\n"]);return I=function(){return n},n}function P(){var n=Object(u.a)(["\n  border-bottom: 1px solid rgba(0, 12, 34, 0.2);\n  padding: 16px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n"]);return P=function(){return n},n}function $(){var n=Object(u.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]);return $=function(){return n},n}var _=s.a.div($()),A=s.a.div(P()),D=Object(s.a)(j.b)(I()),J=s.a.div(L());function N(n){var t=n.post;return Object(r.jsxs)(A,{children:[Object(r.jsx)(D,{to:"/post/".concat(t.id),children:t.title}),Object(r.jsx)(J,{children:new Date(t.createdAt).toLocaleString()})]})}function E(){var n=Object(c.useContext)(v),t=n.isLoading,e=n.setIsLoading,i=Object(c.useState)([]),a=Object(o.a)(i,2),u=a[0],s=a[1],j=Object(c.useState)([]),b=Object(o.a)(j,2),d=b[0],f=b[1];return Object(c.useEffect)((function(){e(!0),fetch("".concat(O,"/posts?_sort=createdAt&_order=desc")).then((function(n){return n.json()})).then((function(n){var t=Math.ceil(n.length/5);f(Array.from({length:t},(function(n,t){return t+1})))})),h(1,5).then((function(n){s(n)})),e(!1)}),[e]),Object(r.jsx)(_,{children:!t&&Object(r.jsxs)(r.Fragment,{children:[u.map((function(n){return Object(r.jsx)(N,{post:n},n.id)})),Object(r.jsx)(z,{setPosts:s,pageNumberCount:d,limit:5})]})})}function U(){var n=Object(u.a)(["\n  word-break: break-word;\n  font-size: 18px;\n  margin-top: 15px;\n"]);return U=function(){return n},n}function B(){var n=Object(u.a)(["\n  border-bottom: 1px solid #333;\n  margin: 10px 0px;\n  font-size: 14px;\n"]);return B=function(){return n},n}function F(){var n=Object(u.a)(["\n  font-size: 26px;\n"]);return F=function(){return n},n}function T(){var n=Object(u.a)(["\n  border: 1px solid #333;\n  padding: 10px 15px;\n"]);return T=function(){return n},n}function M(){var n=Object(u.a)(["\n  width: 60%;\n  margin: 0 auto;\n"]);return M=function(){return n},n}var R=s.a.div(M()),q=s.a.div(T()),G=s.a.div(F()),H=s.a.div(B()),K=s.a.div(U());function Q(n){var t=n.post;return Object(r.jsxs)(q,{children:[Object(r.jsx)(G,{children:t.title}),Object(r.jsx)(H,{children:new Date(t.createdAt).toLocaleString()}),Object(r.jsx)(K,{children:t.body})]})}function V(){var n=Object(c.useState)(null),t=Object(o.a)(n,2),e=t[0],i=t[1],a=Object(c.useContext)(v),u=a.isLoading,s=a.setIsLoading,j=Object(b.h)().id;return Object(c.useEffect)((function(){s(!0),function(n){return fetch("".concat(O,"/posts?id=").concat(n)).then((function(n){return n.json()}))}(j).then((function(n){i(n[0]),s(!1)}))}),[j,s]),Object(r.jsx)(R,{children:!u&&e?Object(r.jsx)(Q,{post:e}):""})}function W(){var n=Object(u.a)(["\n  font-size: 32px;\n  margin: 20px auto;\n  text-align: center;\n"]);return W=function(){return n},n}var X=s.a.div(W());function Y(){return Object(r.jsx)(X,{children:"\u9019\u662f\u7a0b\u5f0f\u5c0e\u5e2b\u8a08\u756b\u7b2c\u56db\u671f\u7684 React \u90e8\u843d\u683c\u4f5c\u696d by ericcch24"})}function Z(){var n=Object(u.a)(["\n  margin-top: 10px;\n  color: red;\n"]);return Z=function(){return n},n}function nn(){var n=Object(u.a)(["\n  display: inline-block;\n  cursor: pointer;\n  padding: 10px 30px;\n  font-family: inherit;\n  font-size: 100%;\n"]);return nn=function(){return n},n}function tn(){var n=Object(u.a)(["\n  text-align: right;\n  margin-top: 20px;\n"]);return tn=function(){return n},n}function en(){var n=Object(u.a)(["\n  width: 98%;\n  padding: 6px;\n  font-family: inherit;\n  font-size: 100%;\n"]);return en=function(){return n},n}function rn(){var n=Object(u.a)(["\n  margin-top: 30px;\n"]);return rn=function(){return n},n}function cn(){var n=Object(u.a)(["\n  width: 98%;\n  padding: 6px;\n  font-size: 100%;\n  font-family: inherit;\n"]);return cn=function(){return n},n}function an(){var n=Object(u.a)(["\n  margin-top: 20px;\n"]);return an=function(){return n},n}function on(){var n=Object(u.a)(["\n  font-size: 20px;\n"]);return on=function(){return n},n}function un(){var n=Object(u.a)([""]);return un=function(){return n},n}function sn(){var n=Object(u.a)(["\n  margin: 10px auto;\n  width: 900px;\n  padding: 30px;\n  border: 1px solid black;\n  box-sizing: border-box;\n"]);return sn=function(){return n},n}var jn=s.a.div(sn()),bn=s.a.form(un()),dn=s.a.div(on()),fn=s.a.div(an()),ln=s.a.input(cn()),On=s.a.div(rn()),hn=s.a.textarea(en()),xn=s.a.div(tn()),pn=s.a.button(nn()),vn=s.a.div(Z());function gn(){var n=Object(c.useContext)(p).user,t=Object(c.useState)(""),e=Object(o.a)(t,2),i=e[0],a=e[1],u=Object(c.useState)(""),s=Object(o.a)(u,2),j=s[0],d=s[1],f=Object(c.useState)(),h=Object(o.a)(f,2),x=h[0],v=h[1],g=Object(b.f)();return Object(r.jsx)(jn,{children:n?Object(r.jsxs)(bn,{onSubmit:function(t){return t.preventDefault(),v(null),i&&j?n?void function(n,t){var e=l();return fetch("".concat(O,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(e)},body:JSON.stringify({title:n,body:t})}).then((function(n){return n.json()}))}(i,j).then((function(){g.push("/")})):v("\u8acb\u767b\u5165\u5f8c\u7e7c\u7e8c"):v("\u8acb\u8f38\u5165\u6587\u7ae0\u6a19\u984c\u8207\u5167\u5bb9")},children:[Object(r.jsx)(dn,{children:"\u767c\u5e03\u6587\u7ae0\uff1a"}),x&&Object(r.jsx)(vn,{children:x}),Object(r.jsx)(fn,{children:Object(r.jsx)(ln,{value:i,onChange:function(n){a(n.target.value)},placeholder:"\u8f38\u5165\u6587\u7ae0\u6a19\u984c"})}),Object(r.jsx)(On,{children:Object(r.jsx)(hn,{value:j,onChange:function(n){d(n.target.value)},placeholder:"\u8f38\u5165\u6587\u7ae0\u5167\u5bb9",rows:20})}),Object(r.jsx)(xn,{children:Object(r.jsx)(pn,{children:"\u9001\u51fa"})})]}):Object(r.jsx)(vn,{children:'"\u8acb\u767b\u5165\u5f8c\u7e7c\u7e8c"'})})}function mn(){var n=Object(u.a)(["\n  color: red;\n"]);return mn=function(){return n},n}var Sn=s.a.div(mn());function wn(){var n=Object(c.useContext)(p).setUser,t=Object(c.useContext)(v),e=t.isLoading,i=t.setIsLoading,a=Object(c.useState)(""),u=Object(o.a)(a,2),s=u[0],j=u[1],d=Object(c.useState)(""),l=Object(o.a)(d,2),h=l[0],g=l[1],m=Object(c.useState)(""),S=Object(o.a)(m,2),w=S[0],y=S[1],k=Object(c.useState)(null),C=Object(o.a)(k,2),z=C[0],L=C[1],I=Object(b.f)();return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),L(null),e||(i(!0),function(n,t,e){return fetch("".concat(O,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:n,username:t,password:e})}).then((function(n){return n.json()}))}(s,h,w).then((function(t){if(i(!1),0===t.ok)return L(t.message);f(t.token),x().then((function(t){if(1!==t.ok)return f(null),L(t.toString());n(t.data),I.push("/")}))})))},children:[Object(r.jsxs)("div",{children:["nickname:"," ",Object(r.jsx)("input",{value:s,onChange:function(n){j(n.target.value)}})]}),Object(r.jsxs)("div",{children:["username:"," ",Object(r.jsx)("input",{value:h,onChange:function(n){g(n.target.value)}})]}),Object(r.jsxs)("div",{children:["password:"," ",Object(r.jsx)("input",{type:"password",value:w,onChange:function(n){y(n.target.value)}})]}),Object(r.jsx)("button",{children:"\u8a3b\u518a"}),z&&Object(r.jsx)(Sn,{children:z})]})}function yn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n\n  "," {\n    margin-left: 64px;\n  }\n"]);return yn=function(){return n},n}function kn(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100px;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n\n  ",";\n"]);return kn=function(){return n},n}function Cn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  height: 64px;\n"]);return Cn=function(){return n},n}function zn(){var n=Object(u.a)(["\n  font-size: 32px;\n  font-weight: bold;\n"]);return zn=function(){return n},n}function Ln(){var n=Object(u.a)(["\n  height: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0px 32px;\n  box-sizing: border-box;\n  background: white;\n"]);return Ln=function(){return n},n}var In=s.a.div(Ln()),Pn=s.a.div(zn()),$n=s.a.div(Cn()),_n=Object(s.a)(j.b)(kn(),(function(n){return n.$active&&"\n  background: rgba(0,0,0,0.1)\n  "})),An=s.a.div(yn(),$n);function Dn(){var n=Object(c.useContext)(p).setUser,t=Object(b.g)(),e=Object(b.f)();return Object(r.jsxs)(In,{children:[Object(r.jsxs)(An,{children:[Object(r.jsx)(Pn,{children:"\u6211\u7684\u7b2c\u4e00\u500b\u90e8\u843d\u683c"}),Object(r.jsxs)($n,{children:[Object(r.jsx)(_n,{to:"/",$active:"/"===t.pathname,children:"\u9996\u9801"}),Object(r.jsx)(_n,{to:"/about-me",$active:"/about-me"===t.pathname,children:"\u95dc\u65bc\u6211"})]})]}),Object(r.jsx)($n,{children:localStorage.token?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(_n,{to:"/newpost",$active:"/newpost"===t.pathname,children:"\u767c\u5e03\u6587\u7ae0"}),Object(r.jsx)(_n,{onClick:function(){f(""),n(null),"/"!==t.pathname&&e.push("/")},children:"\u767b\u51fa"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(_n,{to:"/register",$active:"/register"===t.pathname,children:"\u8a3b\u518a"}),Object(r.jsx)(_n,{to:"/login",$active:"/login"===t.pathname,children:"\u767b\u5165"})]})})]})}function Jn(){var n=Object(u.a)(["\n  padding-top: 64px;\n"]);return Jn=function(){return n},n}var Nn=s.a.div(Jn());var En=function(){var n=Object(c.useState)(null),t=Object(o.a)(n,2),e=t[0],i=t[1],a=Object(c.useState)(!1),u=Object(o.a)(a,2),s=u[0],d=u[1];return Object(c.useEffect)((function(){x().then((function(n){n.ok&&i(n.data)}))}),[]),Object(r.jsx)(p.Provider,{value:{user:e,setUser:i},children:Object(r.jsx)(Nn,{children:Object(r.jsx)(v.Provider,{value:{isLoading:s,setIsLoading:d},children:Object(r.jsxs)(j.a,{children:[Object(r.jsx)(Dn,{}),Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{exact:!0,path:"/",children:Object(r.jsx)(E,{})}),Object(r.jsx)(b.a,{path:"/register",children:Object(r.jsx)(wn,{})}),Object(r.jsx)(b.a,{path:"/login",children:Object(r.jsx)(S,{})}),Object(r.jsx)(b.a,{path:"/post/:id",children:Object(r.jsx)(V,{})}),Object(r.jsx)(b.a,{path:"/newpost",children:Object(r.jsx)(gn,{})}),Object(r.jsx)(b.a,{path:"/about-me",children:Object(r.jsx)(Y,{})})]})]})})})})};a.a.render(Object(r.jsx)(En,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.f4d3cb5e.chunk.js.map