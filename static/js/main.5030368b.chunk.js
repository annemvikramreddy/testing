(this["webpackJsonpapp-name"]=this["webpackJsonpapp-name"]||[]).push([[0],{28:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(20),r=s.n(a),o=s(7),i=s(2),l=s(17),j=s.n(l),d=s(21),b=s(11),m=s(12),u=s(14),h=s(13),p=s(8),g=s.n(p),x=(s(28),s(0)),O=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(b.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={username:"",password:"",showSubmitError:!1,errorMsg:""},e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.onChangePassword=function(t){e.setState({password:t.target.value})},e.onSubmitSuccess=function(t){var s=e.props.history;g.a.set("jwt_token",t,{expires:30,path:"/"}),s.replace("/")},e.onSubmitFailure=function(t){console.log(t),e.setState({showSubmitError:!0,errorMsg:t})},e.submitForm=function(){var t=Object(d.a)(j.a.mark((function t(s){var n,c,a,r,o,i,l;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),n=e.state,c=n.username,a=n.password,r={username:c,password:a},"https://apis.ccbp.in/login",o={method:"POST",body:JSON.stringify(r)},t.next=7,fetch("https://apis.ccbp.in/login",o);case 7:return i=t.sent,t.next=10,i.json();case 10:l=t.sent,!0===i.ok?e.onSubmitSuccess(l.jwt_token):e.onSubmitFailure(l.error_msg);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.renderPasswordField=function(){var t=e.state.password;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("label",{className:"input-label",htmlFor:"password",children:"PASSWORD"}),Object(x.jsx)("input",{type:"password",id:"password",className:"password-input-field",value:t,onChange:e.onChangePassword})]})},e.renderUsernameField=function(){var t=e.state.username;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("label",{className:"input-label",htmlFor:"username",children:"USERNAME"}),Object(x.jsx)("input",{type:"text",id:"username",className:"username-input-field",value:t,onChange:e.onChangeUsername})]})},e}return Object(m.a)(s,[{key:"render",value:function(){var e=this.state,t=e.showSubmitError,s=e.errorMsg;return void 0!==g.a.get("jwt_token")?Object(x.jsx)(i.a,{to:"/"}):Object(x.jsxs)("div",{className:"login-form-container",children:[Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",className:"login-website-logo-mobile-image",alt:"website logo"}),Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png",className:"login-image",alt:"website login"}),Object(x.jsxs)("form",{className:"form-container",onSubmit:this.submitForm,children:[Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",className:"login-website-logo-desktop-image",alt:"website logo"}),Object(x.jsx)("div",{className:"input-container",children:this.renderUsernameField()}),Object(x.jsx)("div",{className:"input-container",children:this.renderPasswordField()}),Object(x.jsx)("button",{type:"submit",className:"login-button",children:"Login"}),t&&Object(x.jsxs)("p",{className:"error-message",children:["*",s]})]})]})}}]),s}(n.Component),f=(s(38),Object(i.g)((function(e){var t=function(){g.a.remove("jwt_token"),e.history.replace("/login")};return Object(x.jsx)("nav",{className:"nav-header",children:Object(x.jsxs)("div",{className:"nav-content",children:[Object(x.jsx)("img",{className:"website-logo",src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",alt:"website logo"}),Object(x.jsxs)("ul",{className:"nav-menu",children:[Object(x.jsx)(o.b,{to:"/",className:"nav-link",children:Object(x.jsx)("li",{children:"Home"})}),Object(x.jsx)(o.b,{to:"/products",className:"nav-link",children:Object(x.jsx)("li",{children:"Products"})}),Object(x.jsx)(o.b,{to:"/cart",className:"nav-link",children:Object(x.jsx)("li",{children:"Cart"})})]}),Object(x.jsx)("button",{type:"button",className:"logout-desktop-btn",onClick:t,children:"Logout"}),Object(x.jsx)("button",{type:"button",className:"logout-mobile-btn",onClick:t,children:Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png",alt:"logout icon",className:"logout-icon"})})]})})}))),N=(s(39),function(){return void 0===g.a.get("jwt_token")?Object(x.jsx)(i.a,{to:"/login"}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(f,{}),Object(x.jsxs)("div",{className:"home-container",children:[Object(x.jsxs)("div",{className:"home-content",children:[Object(x.jsx)("h1",{className:"home-heading",children:"Clothes That Get YOU Noticed"}),Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png",alt:"clothes to be noticed",className:"home-mobile-img"}),Object(x.jsx)("p",{className:"home-description",children:"Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way."}),Object(x.jsx)("button",{type:"button",className:"shop-now-button",children:"Shop Now"})]}),Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png",alt:"dresses to be noticed",className:"home-desktop-img"})]})]})}),v=(s(40),function(e){var t=e.productData,s=t.title,n=t.brand,c=t.imageUrl,a=t.rating,r=t.price;return Object(x.jsxs)("li",{className:"product-item",children:[Object(x.jsx)("img",{src:c,alt:"product",className:"thumbnail"}),Object(x.jsx)("h1",{className:"title",children:s}),Object(x.jsxs)("p",{className:"brand",children:["by ",n]}),Object(x.jsxs)("div",{className:"product-details",children:[Object(x.jsxs)("p",{className:"price",children:["Rs ",r,"/-"]}),Object(x.jsxs)("div",{className:"rating-container",children:[Object(x.jsx)("p",{className:"rating",children:a}),Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/star-img.png",alt:"star",className:"star"})]})]})]})}),w=(s(41),function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(b.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={productsList:[]},e.renderProductsList=function(){var t=e.state.productsList;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"products-list-heading",children:"All Products"}),Object(x.jsx)("ul",{className:"products-list",children:t.map((function(e){return Object(x.jsx)(v,{productData:e},e.id)}))})]})},e}return Object(m.a)(s,[{key:"render",value:function(){return Object(x.jsx)(x.Fragment,{children:this.renderProductsList()})}}]),s}(n.Component)),y=(s(42),function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(f,{}),Object(x.jsx)("div",{className:"product-sections",children:Object(x.jsx)(w,{})})]})}),k=(s(43),function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(f,{}),Object(x.jsx)("div",{className:"cart-container",children:Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png",alt:"cart",className:"cart-img"})})]})}),S=(s(44),function(){return Object(x.jsx)("div",{className:"not-found-container",children:Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png",alt:"not-found",className:"not-found-img"})})}),F=(s(45),function(){return Object(x.jsx)(o.a,{children:Object(x.jsxs)(i.d,{children:[Object(x.jsx)(i.b,{exact:!0,path:"/login",component:O}),Object(x.jsx)(i.b,{exact:!0,path:"/",component:N}),Object(x.jsx)(i.b,{exact:!0,path:"/products",component:y}),Object(x.jsx)(i.b,{exact:!0,path:"/cart",component:k}),Object(x.jsx)(i.b,{component:S})]})})});r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.5030368b.chunk.js.map