(this.webpackJsonpMyProject=this.webpackJsonpMyProject||[]).push([[5],{242:function(e,t,s){"use strict";s(0);var n=s(245),o=s.n(n),r=s(246),i=s.n(r),a=s(23),c=s(1),l=function(e){return Object(c.jsxs)("div",{className:i.a.dialogItem,children:[Object(c.jsx)("div",{className:".dialogItem__img",children:Object(c.jsx)("img",{src:"https://habrastorage.org/getpro/habr/post_images/3db/ac4/5df/3dbac45df51c33b0bd63621081afbe29.jpg",alt:""})}),Object(c.jsx)(a.b,{to:"/dialogs/id=".concat(e.id),children:e.name})]})},u=s(247),_=s.n(u),d=function(e){var t={float:e.position};return Object(c.jsxs)("div",{className:_.a.block,style:t,children:[Object(c.jsxs)("div",{className:_.a.block__foto,children:[Object(c.jsx)("img",{src:e.img,alt:""}),Object(c.jsx)("p",{children:e.name})]}),Object(c.jsx)("div",{className:_.a.block__message,children:Object(c.jsx)("p",{children:e.message})})]})},j=s(32),b=s(117),g=s(118),m=Object(g.a)({form:"dialogAddMessageForm",onSubmitSuccess:function(e,t){return t(Object(j.a)("dialogAddMessageForm"))}})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,className:o.a.dialog__btn,children:[Object(c.jsx)(b.a,{component:"textarea",name:"newMyMessage"}),Object(c.jsx)("p",{children:Object(c.jsx)("button",{children:"send"})})]})}));t.a=function(e){var t=e.dialogsData.map((function(e){return Object(c.jsx)(l,{name:e.name,id:e.id},e.id)})),s=e.messages.map((function(e){return Object(c.jsx)(d,{message:e.message,img:e.img,name:e.name,position:e.position},e.id)}));return Object(c.jsxs)("div",{className:o.a.dialog,children:[Object(c.jsx)("div",{className:o.a.dialog__name,children:t}),Object(c.jsxs)("div",{className:o.a.dialog__message,children:[s,Object(c.jsx)(m,{onSubmit:function(t){e.addMessage(t.newMyMessage)}})]})]})}},244:function(e,t,s){"use strict";s.d(t,"a",(function(){return b}));var n=s(3),o=s(42),r=s(43),i=s(46),a=s(45),c=s(0),l=s.n(c),u=s(8),_=(s(242),s(20)),d=s(1),j=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(i.a)(c,t);var s=Object(a.a)(c);function c(){return Object(o.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(n.a)({},this.props)):Object(d.jsx)(u.a,{to:"/login"})}}]),c}(l.a.Component);return Object(_.b)(j)(t)}},245:function(e,t,s){e.exports={dialog:"Dialog_dialog__3CuAW",dialog__name:"Dialog_dialog__name__3BOSM",dialog__message:"Dialog_dialog__message__1OEA_",dialog__btn:"Dialog_dialog__btn__1usaq"}},246:function(e,t,s){e.exports={dialogItem:"DialogItem_dialogItem__2_Fo5"}},247:function(e,t,s){e.exports={block:"Message_block__2vQqP",block__foto:"Message_block__foto__227qW",block__message:"Message_block__message__12yQv"}},319:function(e,t,s){e.exports={users:"Users_users__1KiRt",users__input:"Users_users__input__3c_59",users__item:"Users_users__item__2mWVU",item__foto:"Users_item__foto__2kfaA",item__name:"Users_item__name__1KPv0",item__button:"Users_item__button__3L9t4",user__button:"Users_user__button__1OhBx"}},324:function(e,t,s){"use strict";s.r(t);var n=s(42),o=s(43),r=s(46),i=s(45),a=s(0),c=s.n(a),l=s(319),u=s.n(l),_=s(68),d=s(23),j=(s(9),s(44),s(1)),b=function(e){return Object(j.jsxs)("div",{className:u.a.users,children:[Object(j.jsx)("div",{className:u.a.users__input,children:Object(j.jsx)("input",{type:"text"})}),e.users.map((function(t){return Object(j.jsxs)("div",{className:u.a.users__item,children:[Object(j.jsx)("div",{className:u.a.item__foto,children:Object(j.jsx)(d.b,{to:"/profile/"+t.id,children:Object(j.jsx)("img",{src:null!=t.photos.small?t.photos.small:_.a})})}),Object(j.jsxs)("div",{className:u.a.item__name,children:[Object(j.jsx)("p",{children:t.name}),Object(j.jsx)("p",{children:"u.location.city"}),Object(j.jsx)("p",{children:"u.location.conutry"})]}),Object(j.jsx)("div",{className:u.a.item__button,children:t.followed?Object(j.jsx)("button",{disabled:e.followInProgerss.some((function(e){return e===t.id})),onClick:function(){e.unfollowThunkCreator(t.id),e.removefriends(t.id)},children:"remove friends"}):Object(j.jsx)("button",{disabled:e.followInProgerss.some((function(e){return e===t.id})),onClick:function(){e.followThunkCreator(t.id),e.getUserProfileThunkCreator2(t.id)},children:"add friends"})})]},t.id)})),Object(j.jsx)("button",{className:u.a.user__button,onClick:function(){e.nextPage()},children:"Show more"})]})},g=s(20),m=s(85),h=s(47),p=s(244),f=s(28),O=s(69),x=function(e){Object(r.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(n.a)(this,s);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.props.getUsersThunkCreator(e.props.currentPage,e.props.pageSize)},e.nextPage=function(){e.props.nextPageThunkCreator(e.props.currentPage,e.props.pageSize)},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[this.props.isFetching?Object(j.jsx)(h.a,{}):null,Object(j.jsx)(b,{users:this.props.users,unfollowThunkCreator:this.props.unfollowThunkCreator,followThunkCreator:this.props.followThunkCreator,nextPage:this.nextPage,isFetching:this.props.isFetching,followInProgerss:this.props.followInProgerss,getUserProfileThunkCreator2:this.props.getUserProfileThunkCreator2,friendsList:this.props.friendsList,removefriends:this.props.removeFriends})]})}}]),s}(c.a.Component);t.default=Object(f.d)(p.a,Object(g.b)((function(e){return{users:Object(O.g)(e),pageSize:Object(O.d)(e),totalUsersCount:Object(O.f)(e),currentPage:Object(O.a)(e),isFetching:Object(O.c)(e),followInProgerss:Object(O.b)(e),friendsList:Object(O.e)(e)}}),{removeFriends:m.f,getUserProfileThunkCreator2:m.c,followThunkCreator:m.b,unfollowThunkCreator:m.j,setCurrentPage:m.g,toggleIsFatching:m.i,toggleFollowInProgress:m.h,getUsersThunkCreator:m.d,nextPageThunkCreator:m.e}))(x)}}]);
//# sourceMappingURL=5.602a4b7f.chunk.js.map