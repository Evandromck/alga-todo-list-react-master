(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(6),l=n.n(i),o=(n(13),n(7)),r=n(4),d=n(3);n(14),n(15);var u=function(e){var t=e.title,n=e.items,i=e.onToggle,l=e.onAdd,o=Object(a.useState)(""),r=Object(d.a)(o,2),u=r[0],m=r[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"List"},c.a.createElement("div",{className:"ListHeader"},t),n.map((function(e,t){return c.a.createElement("div",{key:e.id||e._id||t,className:"ListItem"},c.a.createElement("span",null,e.done?c.a.createElement("strike",null,e.title):e.title),c.a.createElement("input",{type:"checkbox",checked:e.done,onChange:function(){return i(e)}}))})),c.a.createElement("div",{className:"AddMore"},c.a.createElement("input",{onChange:function(e){return m(e.target.value)},value:u,placeholder:"Add new todo"}),c.a.createElement("button",{onClick:function(){u.length&&(l(u),m(""))}},"Add"))))};var m=function(){var e=Object(a.useState)([{id:1,title:"Wash my car",done:!1},{id:2,title:"Buy some milk",done:!0}]),t=Object(d.a)(e,2),n=t[0],i=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement(u,{items:n,title:"Todo list",onToggle:function(e){i(n.map((function(t){return t.id===e.id?Object(r.a)(Object(r.a)({},t),{},{done:!e.done}):t})))},onAdd:function(e){i([].concat(Object(o.a)(n),[{id:n.length+1,title:e,done:!1}]))}}))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.29ef83e0.chunk.js.map