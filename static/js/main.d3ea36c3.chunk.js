(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(3),o=n.n(c),a=(n(12),n(4)),i=n(5),h=n(7),l=n(6),u=(n(13),n(14),n(15),n(0)),d=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set5&size=180x180"),alt:"Avatar"}),Object(u.jsx)("h2",{children:e.monster.name}),Object(u.jsx)("p",{children:e.monster.email})]})},j=function(e){return Object(u.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(u.jsx)(d,{monster:e},e.id)}))})},m=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(u.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).handleChange=function(e){r.setState({searchField:e.target.value})},r.state={monsters:[],searchField:""},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Monsters Rolodex"}),Object(u.jsx)(m,{placeholder:"search monsters",handleChange:this.handleChange}),Object(u.jsx)(j,{monsters:r}),Object(u.jsxs)("footer",{children:["Made with \u2665 after following along the first chapters of\xa0",Object(u.jsx)("a",{href:"https://www.udemy.com/course/complete-react-developer-zero-to-mastery",rel:"noreferrer",target:"_blank",children:"Complete React Developer in 2021 (w/Redux, Hooks, GraphQL)"})]})]})}}]),n}(r.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))};o.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.d3ea36c3.chunk.js.map