(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{36:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(24),s=n.n(r),i=(n(36),n(28)),l=n(2),o=n(25),j=n(26),h=n(31),u=n(30),d=(n(27),n(10)),m=(n(55),n(1));var b=function(e){return Object(m.jsx)("div",Object(d.a)({className:"container"},e))};n(57);var f=function(e){return Object(m.jsx)("h1",{className:"text-center",children:"Search For an Employee"})};var O=function(e){return Object(m.jsx)("form",{className:"search",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"language"}),Object(m.jsx)("input",{onChange:e.onChange,value:e.value,name:"term",list:"term",type:"text",className:"form-control",placeholder:"Type in the name of an employee",id:"term"})]})})};n(58);var p=function(e){return Object(m.jsx)("table",{id:"order",className:"table table-dark table-hover employeeText",children:Object(m.jsx)("tbody",{children:Object(m.jsxs)("tr",{className:"corner",scope:"row",children:[Object(m.jsx)("td",{children:Object(m.jsx)("img",{src:e.img})}),Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.address}),Object(m.jsx)("td",{children:e.phone}),Object(m.jsx)("td",{children:e.email})]})})})};var x=function(e){return Object(m.jsx)("table",{className:"table",children:Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{onClick:e.onClick,children:[Object(m.jsx)("th",{scope:"col",className:"image tableHead",children:"Thumbnail"}),Object(m.jsx)("th",{scope:"col",className:"tableHead",children:"Name"}),Object(m.jsx)("th",{scope:"col",className:"tableHead",children:"Address  "}),Object(m.jsx)("th",{scope:"col",className:"tableHead",children:"Phone Number  "}),Object(m.jsx)("th",{scope:"col",className:"tableHead",children:"Email  "})]})})})};n(59);var v=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={img:"",name:"",address:"",phone:"",email:"",employees:[],searchValue:"",setSearchValue:"",filter:"",sortType:"asc",error:""},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=50&nat=us").then((function(e){return e.json()})).then((function(t){var n=t.results;return e.setState({employees:n})}))}},{key:"filter",value:function(e){e.preventDefault(),this.setState({filter:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.employees;return this.state.filter&&(t=t.filter((function(t){return t.name.first.toLowerCase().includes(e.state.filter.toLowerCase())||t.name.last.toLowerCase().includes(e.state.filter.toLowerCase())}))),Object(m.jsx)("div",{children:Object(m.jsxs)(b,{style:{minHeight:"100vh"},children:[Object(m.jsx)(f,{}),Object(m.jsx)(O,{onChange:this.filter.bind(this)}),Object(m.jsx)(x,{}),t.map((function(e){return Object(m.jsx)(p,{img:e.picture.thumbnail,name:e.name.first+" "+e.name.last,address:e.location.street.number+" "+e.location.street.name,phone:e.phone,email:e.email},e.name.first+" "+e.name.last)}))]})})}}]),n}(c.Component);n(60);var y=function(e){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("span",{children:"Employee Directory - Joel Straley"})})};n(61);var g=function(e){return Object(m.jsx)("main",Object(d.a)({className:"wrapper"},e))};n(62);var N=function(){return Object(m.jsx)(i.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(g,{children:Object(m.jsx)(l.a,{exact:!0,path:"/",component:v})}),Object(m.jsx)(y,{})]})})},C=(n(68),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))});s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),C()}},[[69,1,2]]]);
//# sourceMappingURL=main.602e4f71.chunk.js.map