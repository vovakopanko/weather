(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{162:function(e,t,n){},163:function(e,t,n){},296:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),c=n.n(r),i=n(19),s=n.n(i),o=(n(162),n(55)),l=n(56),j=n(62),u=n(61),d=(n(163),n(164),n(298)),h=n(302),b=n(304),O=n(305),p=n(306),f=n(307),x=n(73),y=n(20),v=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={Reallytime:(new Date).toLocaleString()},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.intervalOneSeconds()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"intervalOneSeconds",value:function(){this.setState({Reallytime:(new Date).toLocaleString()})}},{key:"render",value:function(){return Object(a.jsx)("span",{children:this.state.Reallytime})}}]),n}(c.a.Component),g=n(89),m=n(299),C=n(303),S=function(e){var t=m.a.Search,n=Object(a.jsx)(C.a,{style:{fontSize:16,color:"#1890ff"}});return Object(a.jsxs)("div",{children:[Object(a.jsx)(t,{placeholder:"Search your City/Town",enterButton:"Search",size:"large",suffix:n,onSearch:function(t){e.getInfoYourCity(t),e.getWeatherData(t)}}),Object(a.jsx)("div",{children:Object(a.jsx)("b",{children:"Belarus city:"})}),Object(a.jsx)("div",{children:"Minsk"}),Object(a.jsx)("div",{children:"Vitebsk"}),Object(a.jsx)("div",{children:"Gomel"}),Object(a.jsx)("div",{children:"Grodno"}),Object(a.jsx)("div",{children:"Brest"}),Object(a.jsx)("div",{children:"Navapolatsk"}),Object(a.jsx)("div",{children:"Polatsk"})]})},w=n(102),k=n.n(w),D=n(142),_=n(75),E=n(143).create({baseURL:"https://api.openweathermap.org/data/2.5/"}),I=function(e){return E.get("find?q="+e+"&appid=f004c51d2159432ab3fe79f60c84e90e").then((function(e){return e.data.list[0]}))},T="redux/YourCityReducer/GET_YOURCITY",N="redux/YourCityReducer/SET_WEATHERDATA",R={yourCity:"Minsk",weatherData:[]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(_.a)(Object(_.a)({},e),{},{yourCity:t.yourCity});case N:return Object(_.a)(Object(_.a)({},e),{},{weatherData:t.data});default:return e}},F=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(S,{getInfoYourCity:this.props.getInfoYourCity,getWeatherData:this.props.getWeatherData,yourCity:this.props.yourCity})})}}]),n}(c.a.Component),P=Object(g.b)((function(e){return{yourCity:e.searchPage.yourCity,weatherData:e.searchPage.weatherData}}),{getInfoYourCity:function(e){return{type:T,yourCity:e}},getWeatherData:function(e){return function(){var t=Object(D.a)(k.a.mark((function t(n){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(e);case 2:a=t.sent,n({type:N,data:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(F),W=n(300),L=function(e){var t=W.a.Step;return Object(a.jsx)("div",{children:Object(a.jsxs)(W.a,{direction:"vertical",current:2,children:[Object(a.jsx)(t,{title:"First act",description:"Opend link `Search`"}),Object(a.jsx)(t,{title:"Second act",description:"Enter your city in the search bar"}),Object(a.jsx)(t,{title:"Third act",description:"Click button `Search`"}),Object(a.jsx)(t,{title:"Fourth act",description:"Finish"})]})})},A=d.a.Header,B=d.a.Sider,M=d.a.Content,H=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!1},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("header",{className:"header",children:Object(a.jsx)(v,{})}),Object(a.jsx)("main",{children:Object(a.jsxs)(d.a,{children:[Object(a.jsxs)(B,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,children:[Object(a.jsx)("div",{className:"logo"}),Object(a.jsxs)(h.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(a.jsx)(h.a.Item,{icon:Object(a.jsx)(b.a,{}),children:Object(a.jsx)(x.b,{to:"/search",children:"Search your weather:"})},"1"),Object(a.jsx)(h.a.Item,{icon:Object(a.jsx)(O.a,{}),children:Object(a.jsx)(x.b,{to:"/infosearch",children:"How to search:"})},"3")]})]}),Object(a.jsxs)(d.a,{className:"site-layout",children:[Object(a.jsx)(A,{className:"site-layout-background",style:{padding:0,height:"0px"},children:c.a.createElement(this.state.collapsed?p.a:f.a,{className:"trigger",onClick:this.toggle})}),Object(a.jsxs)(M,{className:"site-layout-background contentimg",style:{margin:"24px 16px",padding:24,minHeight:280},children:[Object(a.jsx)(y.a,{exact:!0,path:"/search",render:function(){return Object(a.jsx)(P,{})}}),Object(a.jsx)(y.a,{exact:!0,path:"/infosearch",render:function(){return Object(a.jsx)(L,{})}})]})]})]})}),Object(a.jsx)("footer",{className:"footer",children:"Weather App 1.0"})]})}}]),n}(c.a.Component),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,308)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},G=n(50),z=n(150),J=n(301),V=Object(G.c)({searchPage:Y,form:J.a}),X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d,q=Object(G.e)(V,X(Object(G.a)(z.a)));window.__store__=q;var K=q;s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(x.a,{children:Object(a.jsx)(g.a,{store:K,children:Object(a.jsx)(H,{})})})}),document.getElementById("root")),U()}},[[296,1,2]]]);
//# sourceMappingURL=main.ca357c39.chunk.js.map