(this.webpackJsonpMyProject=this.webpackJsonpMyProject||[]).push([[1],{144:function(e,t){},149:function(e,t,s){},150:function(e,t,s){},180:function(e,t){},21:function(e,t,s){"use strict";s.d(t,"b",(function(){return f})),s.d(t,"c",(function(){return m})),s.d(t,"d",(function(){return j}));var n=s(6),r=s.n(n),i=s(10),a=s(3),c=s(9),u=s(32),o="SET_AUTH_DATA",d={id:null,email:null,login:null,isAuth:!1},l=function(e,t,s,n){return{type:o,data:{id:e,login:t,email:s,isAuth:n}}},f=function(e){return function(){var e=Object(i.a)(r.a.mark((function e(t){var s,n,i,a,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.Me();case 2:0===(s=e.sent).resultCode&&(n=s.data,i=n.id,a=n.login,u=n.email,t(l(i,a,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(e,t,s){return function(){var n=Object(i.a)(r.a.mark((function n(i){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.loginMe(e,t,s);case 2:0===(a=n.sent).resultCode?i(f()):i(Object(u.b)("login",{_error:a.messages[0]}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},j=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.logoutMe();case 2:0===e.sent.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(a.a)(Object(a.a)({},e),t.data);default:return e}}},241:function(e,t,s){"use strict";s.r(t);s(144);var n=s(0),r=s.n(n),i=s(54),a=s.n(i),c=(s(149),s(42)),u=s(43),o=s(46),d=s(45),l=(s(150),s(93)),f=s.n(l),m=s.p+"static/media/logo1.d6f6a7d5.png",j=s(1),p=function(){return Object(j.jsx)("header",{className:f.a.footer,children:Object(j.jsx)("p",{children:"usersnet \xa9 2021"})})},b=s(8),g=s(40),h=s.n(g),O=s(23);function _(e){return Object(j.jsx)("li",{className:h.a.links,children:Object(j.jsx)(O.b,{to:e.url,activeClassName:h.a.active,children:Object(j.jsxs)("div",{className:h.a.nav__item,children:[Object(j.jsx)("p",{children:e.icon}),Object(j.jsx)("span",{children:e.item})]})})})}var v=function(e){var t=e.state.map((function(e){return Object(j.jsx)(_,{url:e.url,icon:e.icon,item:e.item},e.id)}));return Object(j.jsx)("nav",{className:h.a.nav,children:Object(j.jsx)("ul",{children:t})})},w=s(20),x=Object(w.b)((function(e){return{state:e.navPage.itemsNav}}))(v),y=s(92),P=s(3),I=s(30),N=s.n(I),k=s(19),S=s(18),L=function(e){return Object(j.jsxs)("header",{className:N.a.header,children:[Object(j.jsx)("div",{className:N.a.header__logo,children:Object(j.jsx)("img",{src:m,alt:""})}),Object(j.jsx)("div",{className:N.a.header__login,children:e.isAuth?Object(j.jsxs)("div",{children:[Object(j.jsx)(O.b,{to:"/profile",children:e.login}),Object(j.jsx)("div",{className:N.a.exit,children:Object(j.jsxs)("button",{onClick:e.logout,children:[Object(j.jsx)(S.a,{icon:k.f})," Sign Out"]})})]}):Object(j.jsx)(O.b,{to:"/login",children:"Login"})})]})},E=s(37),A=s(44),F=s(21),M=(s(9),s(60)),C=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(j.jsx)(L,Object(P.a)({},this.props))}}]),s}(r.a.Component),U=Object(w.b)((function(e){return{login:Object(M.c)(e),isAuth:Object(M.b)(e)}}),{getAuthMeData:F.b,logout:F.d})(C),T=s(28),D=s(6),R=s.n(D),z=s(10),G=(s(32),"INITIALIZED_SUCCESS"),H={initialized:!1},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(P.a)(Object(P.a)({},e),{},{initialized:!0});default:return e}},B=s(47),J=function(e){return Object(j.jsx)(n.Suspense,{fallback:Object(j.jsx)(B.a,{}),children:Object(j.jsx)(e,{})})},V=s(74),W=s(39),Y=s.n(W),K=function(e){var t=e.title,s=e.description,n=e.url,r=e.urlToImage;return Object(j.jsxs)("div",{className:Y.a.item,children:[Object(j.jsx)("img",{src:r}),Object(j.jsx)("h3",{className:Y.a.title,children:Object(j.jsx)("a",{href:n,children:t})}),Object(j.jsx)("p",{children:s})]})},X=function(){var e=Object(n.useState)([]),t=Object(V.a)(e,2),s=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(z.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=a666a87ac2d74a2983f5e3e128e8f01b");case 2:t=e.sent,r(t.data.articles);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(j.jsx)("div",{className:Y.a.news,children:s.map((function(e){var t=e.title,s=e.description,n=e.url,r=e.urlToImage;return Object(j.jsx)(K,{title:t,description:s,url:n,urlToImage:r})}))})},Q=r.a.lazy((function(){return Promise.all([s.e(0),s.e(4)]).then(s.bind(null,322))})),Z=r.a.lazy((function(){return Promise.all([s.e(0),s.e(6)]).then(s.bind(null,323))})),$=r.a.lazy((function(){return Promise.all([s.e(0),s.e(5)]).then(s.bind(null,324))})),ee=r.a.lazy((function(){return Promise.all([s.e(0),s.e(7)]).then(s.bind(null,321))})),te=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(U,{}),Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)("div",{className:"content__item",children:[Object(j.jsx)(x,{}),Object(j.jsx)(b.b,{path:"/profile/:userId?",render:function(){return J(Q)}}),Object(j.jsx)(b.b,{path:"/dialogs",render:function(){return J(Z)}}),Object(j.jsx)(b.b,{path:"/friends",render:function(){return Object(j.jsx)(y.a,{})}}),Object(j.jsx)(b.b,{path:"/allusers",render:function(){return J($)}}),Object(j.jsx)(b.b,{path:"/login",render:function(){return J(ee)}}),Object(j.jsx)(b.b,{path:"/news",render:function(){return J(X)}})]})}),Object(j.jsx)(p,{})]}):Object(j.jsx)(B.a,{})}}]),s}(r.a.Component),se=Object(T.d)(Object(b.f)(Object(w.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(F.b)());Promise.all([t]).then((function(){e({type:G})}))}}})(te))),ne=s(84),re={itemsNav:[{id:1,url:"/profile",item:"My profile",icon:Object(j.jsx)(S.a,{icon:k.h})},{id:2,url:"/allusers",item:"All Users",icon:Object(j.jsx)(S.a,{icon:k.j})},{id:3,url:"/dialogs",item:"Messages",icon:Object(j.jsx)(S.a,{icon:k.c})},{id:4,url:"/friends",item:"Friends",icon:Object(j.jsx)(S.a,{icon:k.i})},{id:5,url:"/news",item:"News",icon:Object(j.jsx)(S.a,{icon:k.g})},{id:6,url:"/photos",item:"Photos",icon:Object(j.jsx)(S.a,{icon:k.a})},{id:7,url:"/music",item:"Music",icon:Object(j.jsx)(S.a,{icon:k.e})},{id:8,url:"/setting",item:"Setting",icon:Object(j.jsx)(S.a,{icon:k.b})}]},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re;return e},ae=s(85),ce=s(95),ue=s(91),oe=Object(T.c)({profilesPage:A.b,dialogsPage:ne.b,navPage:ie,usersPage:ae.a,auth:F.a,form:ue.a,app:q}),de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,le=Object(T.e)(oe,de(Object(T.a)(ce.a)));window.store=le;var fe=le;a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(O.a,{children:Object(j.jsx)(w.a,{store:fe,children:Object(j.jsx)(se,{})})})}),document.getElementById("root"))},26:function(e,t,s){e.exports={friends:"Friends_friends__ALN-d",friends__search:"Friends_friends__search__1rufj",friends__friendsList:"Friends_friends__friendsList__37A8E",friends__friendsList__foto:"Friends_friends__friendsList__foto__1vn5z",friends__friendsList__name:"Friends_friends__friendsList__name__uiEIj",friends__friendsList__instruction:"Friends_friends__friendsList__instruction__DQxYR"}},30:function(e,t,s){e.exports={header:"Header_header__1m8rN",header__logo:"Header_header__logo__dn9We",header__login:"Header_header__login__3nyvc",exit:"Header_exit__Zl3JS"}},39:function(e,t,s){e.exports={news:"NewsItem_news__2Yo9Y",item:"NewsItem_item__1wQRj",title:"NewsItem_title__2ak6b"}},40:function(e,t,s){e.exports={nav:"NavBar_nav__2fO3D",nav__item:"NavBar_nav__item__2J720",links:"NavBar_links__2C-2k",active:"NavBar_active__2JFOV"}},44:function(e,t,s){"use strict";s.d(t,"a",(function(){return j})),s.d(t,"c",(function(){return p})),s.d(t,"d",(function(){return g})),s.d(t,"f",(function(){return h})),s.d(t,"e",(function(){return O}));var n=s(6),r=s.n(n),i=s(10),a=s(17),c=s(3),u=s(9),o="ADD-POST",d="SET_USER_PROFILE",l="SET_USER_STATUS",f="SAVE_PROFILE_PHOTO",m={posts:[{id:1,message:"Hi",likeCount:73},{id:2,message:"Hello",likeCount:11},{id:3,message:"kyky",likeCount:21},{id:4,message:"kykysssss",likeCount:366},{id:5,message:"kykysssss",likeCount:366}],profile:null,status:""},j=function(e){return{type:o,newMyPost:e}},p=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(s){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfileUsersAPI(e);case 2:n=t.sent,s((r=n.data,{type:d,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return{type:l,status:e}},g=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(s){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:n=t.sent,s(b(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(s){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&s(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(s){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhotos(e);case 2:0===(n=t.sent).data.resultCode&&s((r=n.data.data.photos,{type:f,foto:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[{id:e.posts.length+1,message:t.newMyPost,likeCount:0}])});case d:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case l:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case f:return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.foto})});default:return e}}},47:function(e,t,s){"use strict";s(0);var n=s(65),r=s.n(n),i=s(1);t.a=function(){return Object(i.jsx)("div",{className:r.a.preloader,children:Object(i.jsx)("div",{className:r.a.loader,children:Object(i.jsx)("span",{children:"Loading..."})})})}},60:function(e,t,s){"use strict";s.d(t,"c",(function(){return n})),s.d(t,"b",(function(){return r})),s.d(t,"a",(function(){return i}));var n=function(e){return e.auth.login},r=function(e){return e.auth.isAuth},i=function(e){return e.auth.id}},65:function(e,t,s){e.exports={preloader:"Preloader_preloader__1AWGE",loader:"Preloader_loader__3PULv",rotating:"Preloader_rotating__XOD9k"}},68:function(e,t,s){"use strict";t.a=s.p+"static/media/users.5c27c9e3.jpg"},69:function(e,t,s){"use strict";s.d(t,"g",(function(){return n})),s.d(t,"d",(function(){return r})),s.d(t,"f",(function(){return i})),s.d(t,"a",(function(){return a})),s.d(t,"c",(function(){return c})),s.d(t,"b",(function(){return u})),s.d(t,"e",(function(){return o}));var n=function(e){return e.usersPage.users},r=function(e){return e.usersPage.pageSize},i=function(e){return e.usersPage.totalUsersCount},a=function(e){return e.usersPage.currentPage},c=function(e){return e.usersPage.isFetching},u=function(e){return e.usersPage.followInProgerss},o=function(e){return e.usersPage.friendsList}},84:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var n=s(17),r=s(3),i="ADD-MY-MESSAGE",a={dialogsData:[{id:1,name:"dima"},{id:2,name:"sveta"},{id:3,name:"kolya"},{id:4,name:"valera"},{id:5,name:"igor"}],messages:[{id:1,name:"Me",message:"hi",img:"https://www.audit-it.ru/upload/main/36b/1363522119_1583831715.jpg",position:"left"},{id:2,name:"Me",message:"hello",img:"https://www.audit-it.ru/upload/main/36b/1363522119_1583831715.jpg",position:"left"},{id:3,name:"dima",message:"hi",img:"https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg",position:"right"},{id:4,name:"sveta",message:"hello",img:"https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg",position:"right"},{id:5,name:"kolya",message:"hi",img:"https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg",position:"right"},{id:6,name:"valera",message:"ggggsqqssqs",img:"https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg",position:"right"},{id:7,name:"igor",message:"ggggsqqssqs",img:"https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg",position:"right"},{id:8,name:"Liver",message:"privet",img:"https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg",position:"right"},{id:9,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041a\u043e\u043c\u0430\u0440\u043e\u0432 \u0418\u0433\u043e\u0440\u0435\u0432\u0438\u0447\u043a",message:"sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",img:"https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg",position:"right"}]},c=function(e){return{type:i,newMyMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(n.a)(e.messages),[{id:e.messages.length+1,name:"Me",message:t.newMyMessage,img:"https://www.audit-it.ru/upload/main/36b/1363522119_1583831715.jpg",position:"left"}])});default:return e}}},85:function(e,t,s){"use strict";s.d(t,"g",(function(){return _})),s.d(t,"i",(function(){return v})),s.d(t,"h",(function(){return w})),s.d(t,"f",(function(){return x})),s.d(t,"d",(function(){return y})),s.d(t,"e",(function(){return P})),s.d(t,"b",(function(){return I})),s.d(t,"j",(function(){return N})),s.d(t,"c",(function(){return k}));var n=s(6),r=s.n(n),i=s(10),a=s(17),c=s(3),u=s(9),o=(s(44),s(180),s(0),"FOLLOW"),d="UNFOLLOW",l="SET_USERS",f="SET_CURRENT_PAGE",m="TOGGLE_IS_FATCHING",j="TOGGLE_FOLLOW_IN_PROGRESS",p="ADD_FRIENDS",b="REMOVE_FRIENDS",g={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followInProgerss:[],friendsList:[{id:1,name:"Dima.k",img:"https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"},{id:2,name:"Lena ",img:"https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"},{id:3,name:"Masha ",img:"https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"},{id:4,name:"Kolya",img:"https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"},{id:5,name:"Den S",img:"https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"},{id:6,name:"Vlad N",img:"https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"},{id:7,name:"Oleg K",img:"https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"},{id:8,name:"Igor P",img:"https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"},{id:9,name:"Slavik k",img:"https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"}]},h=function(e){return{type:o,userId:e}},O=function(e){return{type:d,userId:e}},_=function(e,t){return{type:f,users:e,page:t}},v=function(e){return{type:m,isFetching:e}},w=function(e,t){return{type:j,isFetching:e,userId:t}},x=function(e){return{type:b,userId:e}},y=function(e,t){return function(s){s(v(!0)),u.c.getUsersAPI(e,t).then((function(e){var t;s(v(!1)),s((t=e.items,{type:l,users:t}))}))}},P=function(e,t){return function(){var s=Object(i.a)(r.a.mark((function s(n){var i;return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n(v(!0)),s.next=3,u.c.getUsersAPI(e+1,t);case 3:i=s.sent,n(v(!1)),n(_(i.items,e+1));case 6:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(s){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(w(!0,e)),t.next=3,u.c.getFollowUsersAPI(e);case 3:0==t.sent.resultCode&&s(h(e)),s(w(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(s){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(w(!0,e)),t.next=3,u.c.getUnFollowUsersAPI(e);case 3:0==t.sent.resultCode&&s(O(e)),s(w(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(s){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfileUsersAPI(e);case 2:n=t.sent,s((r=n.data,{type:p,users:r}));case 5:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)(Object(c.a)({},e),{},{followed:!0}):e}))});case d:return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)(Object(c.a)({},e),{},{followed:!1}):e}))});case l:return Object(c.a)(Object(c.a)({},e),{},{users:Object(a.a)(t.users)});case f:return Object(c.a)(Object(c.a)({},e),{},{users:[].concat(Object(a.a)(e.users),Object(a.a)(t.users)),currentPage:t.page});case m:return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case j:return Object(c.a)(Object(c.a)({},e),{},{followInProgerss:t.isFetching?[].concat(Object(a.a)(e.followInProgerss),[t.userId]):e.followInProgerss.filter((function(e){return e!=t.userId}))});case p:return Object(c.a)(Object(c.a)({},e),{},{friendsList:[].concat(Object(a.a)(e.friendsList),[{id:t.users.userId,name:t.users.fullName,img:t.users.photos.large}])});case b:return Object(c.a)(Object(c.a)({},e),{},{friendsList:Object(a.a)(e.friendsList.filter((function(e){return e.id!==t.userId})))});default:return e}}},9:function(e,t,s){"use strict";s.d(t,"c",(function(){return i})),s.d(t,"b",(function(){return a})),s.d(t,"a",(function(){return c}));var n=s(37),r=n.create({withCredentials:!0,headers:{"API-KEY":"b79d95aa-87b5-4f23-94a2-f3e61c1d9f98"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),i={getUsersAPI:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getProfileUsersAPI:function(e){return a.getProfile(e)},getUnFollowUsersAPI:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},getFollowUsersAPI:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))}},a={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status/",{status:e})},savePhotos:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})}},c={Me:function(){return r.get("auth/me").then((function(e){return e.data}))},loginMe:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:s}).then((function(e){return e.data}))},logoutMe:function(){return r.delete("auth/login").then((function(e){return e.data}))}}},92:function(e,t,s){"use strict";var n=s(26),r=s.n(n),i=(s(0),s(68)),a=s(1),c=function(e){return Object(a.jsxs)("div",{className:r.a.friends__friendsList,children:[Object(a.jsx)("div",{className:r.a.friends__friendsList__foto,children:Object(a.jsx)("img",{src:null!=e.img?e.img:i.a,alt:""})}),Object(a.jsx)("div",{className:r.a.friends__friendsList__name,children:e.name}),Object(a.jsxs)("div",{className:r.a.friends__friendsList__instruction,children:[Object(a.jsx)("p",{children:"To write a message"}),Object(a.jsx)("p",{children:"Remove friends from list"})]})]})},u=function(e){var t=e.friendsList.map((function(e){return Object(a.jsx)(c,{img:e.img,name:e.name},e.id)}));return Object(a.jsxs)("div",{className:r.a.friends,children:[Object(a.jsx)("div",{className:r.a.friends__search,children:Object(a.jsx)("input",{type:"text",placeholder:"Enter your friend"})}),t]})},o=s(20),d=s(69),l=Object(o.b)((function(e){return{friendsList:Object(d.e)(e)}}))(u);t.a=l},93:function(e,t,s){e.exports={footer:"Footer_footer__1kcTl"}}},[[241,2,3]]]);
//# sourceMappingURL=main.02c968f5.chunk.js.map