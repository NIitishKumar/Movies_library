(this.webpackJsonpsignin=this.webpackJsonpsignin||[]).push([[0],{49:function(e,t,s){},50:function(e,t,s){},94:function(e,t,s){"use strict";s.r(t);var a=s(0),r=s(20),n=s.n(r),c=(s(49),s(5)),i=s(16),l=s(13),o=(s(50),s(23)),d=s.n(o),b=s(4),j=s(1);var u=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),s=t[0],r=t[1],n=Object(b.g)(),o=localStorage.getItem("token");Object(a.useEffect)((function(){localStorage.getItem("token")&&n.push("/homePage")}),[]),o&&d.a.post("http://localhost:5000/token_login",{token:o}).then((function(e){e.data.email}));var u=function(e){r(Object(i.a)(Object(i.a)({},s),{},Object(c.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("br",{}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d.a.post("http://localhost:5000/login",s).then((function(e){console.log(e.data.status),1==e.data.status?(console.log("dsgsaf"),n.push("/homePage")):alert("Email Not Registered !")}))},children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"inputEmail",children:"Email address"}),Object(j.jsx)("input",{type:"email",id:"inputEmail","aria-describedby":"emailHelp",name:"email",onChange:u,class:"form-control",placeholder:"Enter Email"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"inputPassword",children:"Enter Password"}),Object(j.jsx)("input",{className:"form-control",type:"password",id:"inputPassword",name:"password",onChange:u,placeholder:"Enter Password"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary  ",children:"Submit"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:"/register",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-primary  ",children:"Register"})})]})},h=(s(78),s(18));var m=function(){var e=Object(b.g)(),t=Object(a.useState)({}),s=Object(l.a)(t,2),r=s[0],n=s[1],o=function(e){n(Object(i.a)(Object(i.a)({},r),{},Object(c.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"fullName",children:"Full Name"}),Object(j.jsx)("input",{name:"name",type:"email",id:"fullName","aria-describedby":"emailHelp",class:"form-control",onChange:o,placeholder:"Enter Full Name"}),Object(j.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"inputEmail",children:"Email address"}),Object(j.jsx)("input",{name:"email",type:"email",id:"inputEmail","aria-describedby":"emailHelp",class:"form-control",onChange:o,placeholder:"Enter Email"}),Object(j.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"inputPassword",children:"Enter Password"}),Object(j.jsx)("input",{className:"form-control",type:"password",id:"inputPassword",onChange:o,name:"password",placeholder:"Enter Password"})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(){d.a.post("http://localhost:5000/register",r).then((function(t){1===t.data.status?(localStorage.setItem("token",t.data.token),e.push("/homePage")):alert(t.data.message)}))},children:"Submit"})]})},x=s(15),p=s.n(x),f=s(19);var g=function(e){var t=e.handleSearch;return Object(j.jsxs)("nav",{class:"bg-gray-800",children:[Object(j.jsx)("div",{class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(j.jsxs)("div",{class:"relative flex items-center justify-between h-16",children:[Object(j.jsx)("div",{class:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:Object(j.jsxs)("button",{type:"button",class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",children:[Object(j.jsx)("span",{class:"sr-only",children:"Open main menu"}),Object(j.jsx)("svg",{class:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(j.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})}),Object(j.jsx)("svg",{class:"hidden h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(j.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})})]})}),Object(j.jsxs)("div",{class:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(j.jsx)("div",{class:"flex-shrink-0 flex items-center"}),Object(j.jsx)("div",{class:"hidden sm:block sm:ml-6",children:Object(j.jsxs)("div",{class:"flex space-x-4",children:[Object(j.jsx)("a",{href:"#",class:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium","aria-current":"page",children:"Letest Movies"}),Object(j.jsx)("a",{href:"#",class:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Team"}),Object(j.jsx)("a",{href:"#",class:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Projects"}),Object(j.jsx)("a",{href:"#",class:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Calendar"}),Object(j.jsx)("input",{type:"text",className:"movieSearch",onChange:t,placeholder:"Search",style:{marginLeft:"350px",paddingLeft:"20px",border:"0"}}),Object(j.jsx)("button",{className:"btn btn-success search-button space-x-0",style:{marginLeft:"-50px",borderRadius:"0 10px 10px 0"},children:"Search"})]})})]}),Object(j.jsxs)("div",{class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ",children:[Object(j.jsxs)("button",{type:"button",class:"bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",children:[Object(j.jsx)("span",{class:"sr-only",children:"View notifications"}),Object(j.jsx)("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(j.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})})]}),Object(j.jsx)("div",{class:"ml-3 relative",children:Object(j.jsx)("div",{children:Object(j.jsxs)("button",{type:"button",class:"bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",id:"user-menu-button","aria-expanded":"false","aria-haspopup":"true",children:[Object(j.jsx)("span",{class:"sr-only",children:"Open user menu"}),Object(j.jsx)("img",{class:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""})]})})})]}),Object(j.jsx)("a",{children:" "}),Object(j.jsx)("a",{href:"#",class:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",style:{position:"absolute",right:"-15%"},children:"LogOut"})]})}),Object(j.jsx)("div",{class:"sm:hidden",id:"mobile-menu",children:Object(j.jsxs)("div",{class:"px-2 pt-2 pb-3 space-y-1",children:[Object(j.jsx)("a",{href:"#",class:"bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium","aria-current":"page",children:"Dashboard"}),Object(j.jsx)("a",{href:"#",class:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Team"}),Object(j.jsx)("a",{href:"#",class:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Projects"}),Object(j.jsx)("a",{href:"#",class:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Calendar"})]})})]})},O=s(42),v=s.n(O),y=(s(93),s(43));var w=function(){var e,t=Object(a.useState)([]),s=Object(l.a)(t,2),r=s[0],n=s[1],i=Object(a.useState)(!0),o=Object(l.a)(i,2),d=o[0],u=o[1],h=Object(a.useState)("Read more"),m=Object(l.a)(h,2),x=m[0],O=m[1],w=Object(a.useState)(2021),k=Object(l.a)(w,2),C=k[0],N=k[1],E=Object(a.useState)(1),S=Object(l.a)(E,2),_=S[0],L=S[1],P=Object(a.useState)(1),M=Object(l.a)(P,2),R=M[0],B=M[1],H=Object(b.g)();Object(a.useEffect)(Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D();case 1:case"end":return e.stop()}}),e)}))),[]);var D=function(){var e=Object(f.a)(p.a.mark((function e(t){var s,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/discover/movie?api_key=382f34cc02d16e668824d65efd1de969&primary_release_year=".concat(C,"&sort_by=revenue.desc&page=").concat(_));case 2:return s=e.sent,e.next=5,s.json();case 5:a=e.sent,n(a.results),B(a.total_pages);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){1==d?(u(!1),O("Read Less")):(u(!0),O("Read more"))},I=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:" "===t.target.value[0]?t.target.value="":t.target.value&&D();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(f.a)(p.a.mark((function e(t){var s,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(t.value),e.next=3,fetch("https://api.themoviedb.org/3/discover/movie?api_key=382f34cc02d16e668824d65efd1de969&primary_release_year=".concat(C,"&sort_by=revenue.desc&page=").concat(_));case 3:return s=e.sent,e.next=6,s.json();case 6:a=e.sent,n(a.results),B(a.total_pages);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(f.a)(p.a.mark((function e(t){var s,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(t.selected),e.next=3,fetch("https://api.themoviedb.org/3/discover/movie?api_key=382f34cc02d16e668824d65efd1de969&primary_release_year=".concat(C,"&sort_by=revenue.desc&page=").concat(t.selected+1));case 3:return s=e.sent,e.next=6,s.json();case 6:a=e.sent,n(a.results);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{handleSearch:I}),Object(j.jsx)("div",{class:"container",style:{width:"20%"},children:Object(j.jsxs)("div",{class:"row",children:[Object(j.jsx)("div",{class:"col-sm"}),Object(j.jsx)(y.a,{class:"form-select",onChange:J,options:[{value:2021,label:2021},{value:2019,label:2019},{value:2018,label:2018}],placeholder:"Select Category..."})]})}),Object(j.jsx)("section",{class:"text-gray-600 body-font",children:Object(j.jsx)("div",{class:"container px-5 py-24 mx-auto",children:Object(j.jsx)("div",{class:"flex flex-wrap -m-4",children:r.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{class:"p-4 md:w-1/3",children:Object(j.jsxs)("div",{class:"h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden",children:[Object(j.jsx)("img",{class:"lg:h-48 md:h-36 w-full object-cover object-center",src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:"blog"}),Object(j.jsxs)("div",{class:"p-6",children:[Object(j.jsx)("h2",{class:"tracking-widest text-xs title-font font-medium text-gray-400 mb-1",children:"CATEGORY"}),Object(j.jsx)("h1",{class:"title-font text-lg font-medium text-gray-900 mb-3",children:e.original_title}),Object(j.jsxs)("p",{class:"leading-relaxed mb-3",children:[d?e.overview.substring(1,70):e.overview,Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{})," ",Object(j.jsx)("button",{type:"button",className:"btn btn-info btn-sm",onClick:F,children:x})," "]}),Object(j.jsxs)("div",{class:"flex items-center flex-wrap ",children:[Object(j.jsx)("span",{class:"text-gray-400 mr-3 inline-flex items-center mt-3 leading-none text-sm pr-3 py-1 border-r-2 border-gray-200",children:Object(j.jsxs)("h2",{class:"tracking-widest text-xs title-font font-medium text-gray-400 mb-1",children:["Rating ",e.vote_average,"/10"]})}),Object(j.jsxs)("span",{class:"text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200",children:[Object(j.jsxs)("svg",{class:"w-4 h-4 mr-1",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24",children:[Object(j.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),Object(j.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),e.vote_count>900?"".concat((e.vote_count/1e3).toFixed(1),"K"):Math.floor(e.vote_count)]}),Object(j.jsxs)("span",{class:"text-gray-400 inline-flex items-center leading-none text-sm",children:[Object(j.jsx)("svg",{class:"w-4 h-4 mr-1",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24",children:Object(j.jsx)("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),"6"]})]})]})]})})})}))})})}),Object(j.jsx)("div",{class:"d-flex justify-content-center d-flex align-items-center",children:Object(j.jsx)(v.a,(e={breakLabel:"...",nextLabel:"next >",onPageChange:T,pageRangeDisplayed:3,pageCount:R,previousLabel:"< previous",renderOnZeroPageCount:null},Object(c.a)(e,"previousLabel","Previous"),Object(c.a)(e,"nextLabel","Next"),Object(c.a)(e,"pageClassName","page-item"),Object(c.a)(e,"pageLinkClassName","page-link"),Object(c.a)(e,"previousClassName","page-item"),Object(c.a)(e,"previousLinkClassName","page-link"),Object(c.a)(e,"nextClassName","page-item"),Object(c.a)(e,"nextLinkClassName","page-link"),Object(c.a)(e,"breakClassName","page-item"),Object(c.a)(e,"breakLinkClassName","page-link"),Object(c.a)(e,"marginPagesDisplayed",4),Object(c.a)(e,"containerClassName","pagination"),Object(c.a)(e,"activeClassName","active"),e))}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){localStorage.removeItem("token"),H.push("/")},children:" Log Out"})]})},k=s(44),C=function(e){var t=e.children,s=Object(k.a)(e,["children"]);return Object(j.jsx)(b.b,Object(i.a)(Object(i.a)({},s),{},{render:function(){return t}}))};n.a.render(Object(j.jsx)(h.a,{children:Object(j.jsxs)(b.d,{children:[Object(j.jsx)(b.b,{exact:!0,path:"/",component:u}),Object(j.jsx)(b.b,{exact:!0,path:"/register",component:m}),Object(j.jsx)(C,{exact:!0,path:"/homePage",children:Object(j.jsx)(w,{})})]})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.26c2c716.chunk.js.map