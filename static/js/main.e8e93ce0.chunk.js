(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{196:function(e,t,n){},197:function(e,t,n){},30:function(e,t,n){e.exports={link:"Search_link__1H9Fe"}},346:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),i=n(23),s=n.n(i),o=(n(196),n(50)),l=n(51),j=n(55),h=n(53),u=(n(197),n(198),n(350)),d=n(354),b=n(358),O=n(359),x=n(360),p=n(361),y=n(26),f=n(19),m=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={Reallytime:(new Date).toLocaleString()},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.intervalOneSeconds()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"intervalOneSeconds",value:function(){this.setState({Reallytime:(new Date).toLocaleString()})}},{key:"render",value:function(){return Object(c.jsx)("span",{children:this.state.Reallytime})}}]),n}(a.a.Component),v=n(48),g=n(30),k=n.n(g),C=n(348),w=n(355),N=n(357),S=n(353),D=n(351),_=Object(D.a)({form:"getCityInformation"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)(S.a,{placeholder:"Search your City/Town ...",component:"input",name:"NewCityWeather"}),Object(c.jsx)("button",{children:"SEARCH"})]})})),F=function(e){var t=function(t){e.getWeatherData(t)};return Object(c.jsxs)("div",{children:[Object(c.jsx)(_,{onSubmit:function(t){e.getWeatherData(t.NewCityWeather)}}),Object(c.jsx)(C.a,{orientation:"left",children:"Popular queries:"}),Object(c.jsxs)(w.a,{children:[Object(c.jsxs)(N.a,{flex:2,children:[Object(c.jsx)("div",{children:Object(c.jsx)("b",{children:"Belarus city:"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return t("Minsk")},children:Object(c.jsx)("div",{className:"cityname",children:"Minsk"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return t("Vitebsk")},children:Object(c.jsx)("div",{onClick:function(){return t("Vitebsk")},children:"Vitebsk"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return t("Gomel")},children:Object(c.jsx)("div",{children:"Gomel"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return t("Grodno")},children:Object(c.jsx)("div",{children:"Grodno"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return t("Brest")},children:Object(c.jsx)("div",{children:"Brest"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return t("Navapolatsk")},children:Object(c.jsx)("div",{children:"Navapolatsk"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return t("Polatsk")},children:Object(c.jsx)("div",{children:"Polatsk"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return t("Polatsk")},children:Object(c.jsx)("div",{children:"Dzisna"})})]}),Object(c.jsxs)(N.a,{flex:2,children:[Object(c.jsx)("div",{children:Object(c.jsx)("b",{children:"Ukraine city:"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return t("Kiev")},children:Object(c.jsx)("div",{className:"cityname",children:"Kiev"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return t("Zatoka")},children:Object(c.jsx)("div",{className:"cityname",children:"Zatoka"})})]}),Object(c.jsxs)(N.a,{flex:2,children:[Object(c.jsx)("div",{children:Object(c.jsx)("b",{children:"Russian city:"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return t("Moscow")},children:Object(c.jsx)("div",{className:"cityname",children:"Moscow"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return t("Sochi")},children:Object(c.jsx)("div",{children:"Sochi"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return t("Saint Petersburg")},children:Object(c.jsx)("div",{children:"Saint Petersburg"})})]})]})]})},T=n(130),E=n.n(T),P=n(173),W=n(65),I=n(174).create({baseURL:"https://api.openweathermap.org/data/2.5/"}),M=function(e){return I.get("find?q="+e+"&appid=f004c51d2159432ab3fe79f60c84e90e").then((function(e){return e.data.list[0]}))},R="redux/YourCityReducer/GET_YOURCITY",L="redux/YourCityReducer/SET_WEATHERDATA",Y="redux/YourCityReducer/TOGGLE_IS_FETCHING",G={yourCity:"Minsk",weatherData:[],isFeching:!1},A=function(e){return{type:R,yourCity:e}},H=function(e){return{type:Y,isFeching:e}},U=function(e){return function(){var t=Object(P.a)(E.a.mark((function t(n){var c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(H(!0)),n(A(e)),t.next=4,M(e);case 4:c=t.sent,n({type:L,data:c}),n(H(!1));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(W.a)(Object(W.a)({},e),{},{yourCity:t.yourCity});case L:return Object(W.a)(Object(W.a)({},e),{},{weatherData:t.data});case Y:return Object(W.a)(Object(W.a)({},e),{},{isFeching:t.isFeching});default:return e}},V=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(F,{getInfoYourCity:this.props.getInfoYourCity,getWeatherData:this.props.getWeatherData,yourCity:this.props.yourCity,weatherData:this.props.weatherData})})}}]),n}(a.a.Component),K=Object(v.b)((function(e){return{yourCity:e.searchPage.yourCity,weatherData:e.searchPage.weatherData}}),{getWeatherData:U})(V),q=n(352),J=function(e){var t=q.a.Step;return Object(c.jsx)("div",{children:Object(c.jsxs)(q.a,{direction:"vertical",current:0,children:[Object(c.jsx)(t,{title:"First act",description:"Opend link `Search your weather:`"}),Object(c.jsx)(t,{title:"Second act",description:"Enter your city in the search bar"}),Object(c.jsx)(t,{title:"Third act",description:"Click button `Search`"}),Object(c.jsx)(t,{title:"Fourth act",description:"Finish"})]})})},X=n(98),Z=n.n(X),z=function(e){var t=e.weatherData,n=e.yourCity;return Object(c.jsx)("div",{children:Object(c.jsxs)(w.a,{gutter:24,children:[Object(c.jsx)(N.a,{span:8}),Object(c.jsxs)(N.a,{className:Z.a.border,span:8,children:[Object(c.jsxs)("div",{children:[n," [",t.sys.country,"]"]}),Object(c.jsx)("img",{src:"http://openweathermap.org/img/w/"+t.weather[0].icon+".png",alt:"iconweather",width:"120px",height:"120px"}),Object(c.jsxs)("div",{children:["Clouds: ",Object(c.jsxs)("b",{children:[t.clouds.all," %"]})]}),Object(c.jsxs)("div",{children:["Coordination:",Object(c.jsxs)("div",{children:["LAT - ",Object(c.jsx)("b",{children:t.coord.lat})]}),Object(c.jsxs)("div",{children:["LON - ",Object(c.jsx)("b",{children:t.coord.lon})]})]}),Object(c.jsx)("div",{}),Object(c.jsxs)("div",{children:["Temp Maximal:"," ",Object(c.jsxs)("b",{children:[Math.round(t.main.temp_max-273)," \xb0C"]})," "]}),Object(c.jsxs)("div",{children:["Temp Minimal:"," ",Object(c.jsxs)("b",{children:[Math.round(t.main.temp_min-273)," \xb0C"]})]}),Object(c.jsxs)("div",{children:["Description: ",Object(c.jsx)("b",{children:t.weather[0].description})]})]}),Object(c.jsx)(N.a,{span:8})]})})},Q=n(349),$=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getWeatherData(this.props.yourCity)}},{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:this.props.isFeching?Object(c.jsx)("div",{className:Z.a.example,children:Object(c.jsx)(Q.a,{})}):Object(c.jsx)("div",{children:Object(c.jsx)(z,{weatherData:this.props.weatherData,yourCity:this.props.yourCity})})})}}]),n}(a.a.Component),ee=Object(v.b)((function(e){return{yourCity:e.searchPage.yourCity,weatherData:e.searchPage.weatherData,isFeching:e.searchPage.isFeching}}),{getWeatherData:U})($),te=u.a.Header,ne=u.a.Sider,ce=u.a.Content,re=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!1},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("header",{className:"header",children:Object(c.jsx)(m,{})}),Object(c.jsx)("main",{children:Object(c.jsxs)(u.a,{children:[Object(c.jsxs)(ne,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,children:[Object(c.jsx)("div",{className:"logo"}),Object(c.jsxs)(d.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(c.jsx)(d.a.Item,{icon:Object(c.jsx)(b.a,{}),children:Object(c.jsx)(y.b,{to:"/search",children:"Search your weather:"})},"1"),Object(c.jsx)(d.a.Item,{icon:Object(c.jsx)(O.a,{}),children:Object(c.jsx)(y.b,{to:"/infosearch",children:"How to search:"})},"2")]})]}),Object(c.jsxs)(u.a,{className:"site-layout",children:[Object(c.jsx)(te,{className:"site-layout-background",style:{padding:0,height:"20px"},children:a.a.createElement(this.state.collapsed?x.a:p.a,{className:"trigger",onClick:this.toggle})}),Object(c.jsxs)(ce,{className:"site-layout-background contentimg",style:{margin:"24px 16px",padding:24,minHeight:280},children:[Object(c.jsx)(f.a,{exact:!0,path:"/search",render:function(){return Object(c.jsx)(K,{})}}),Object(c.jsx)(f.a,{exact:!0,path:"/infosearch",render:function(){return Object(c.jsx)(J,{})}}),Object(c.jsx)(f.a,{exact:!0,path:"/yourweather",render:function(){return Object(c.jsx)(ee,{})}})]})]})]})}),Object(c.jsx)("footer",{className:"footer",children:"Weather App 1.0"})]})}}]),n}(a.a.Component),ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,362)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},ie=n(18),se=n(187),oe=n(356),le=Object(ie.c)({searchPage:B,form:oe.a}),je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d,he=Object(ie.e)(le,je(Object(ie.a)(se.a)));window.__store__=he;var ue=he;s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(y.a,{children:Object(c.jsx)(v.a,{store:ue,children:Object(c.jsx)(re,{})})})}),document.getElementById("root")),ae()},98:function(e,t,n){e.exports={border:"YourWeather_border__1lUhF",example:"YourWeather_example__22po6"}}},[[346,1,2]]]);
//# sourceMappingURL=main.e8e93ce0.chunk.js.map