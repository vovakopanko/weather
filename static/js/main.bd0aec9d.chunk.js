(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{148:function(e,t,n){e.exports={border:"YourWeather_border__1lUhF"}},165:function(e,t,n){},166:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),a=n.n(r),i=n(19),s=n.n(i),o=(n(165),n(46)),l=n(47),j=n(53),h=n(51),d=(n(166),n(167),n(303)),u=n(307),b=n(310),O=n(311),x=n(312),p=n(313),y=n(25),f=n(20),v=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={Reallytime:(new Date).toLocaleString()},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.intervalOneSeconds()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"intervalOneSeconds",value:function(){this.setState({Reallytime:(new Date).toLocaleString()})}},{key:"render",value:function(){return Object(c.jsx)("span",{children:this.state.Reallytime})}}]),n}(a.a.Component),m=n(65),g=n(38),k=n.n(g),w=n(304),C=n(302),N=n(308),S=n(309),D=function(e){var t=w.a.Search,n=function(t){e.getInfoYourCity(t),e.getWeatherData(t)};return Object(c.jsxs)("div",{children:[Object(c.jsx)(t,{placeholder:"Search your City/Town",enterButton:"Search",size:"large",onSearch:n}),Object(c.jsx)(C.a,{orientation:"left",children:"Popular queries:"}),Object(c.jsxs)(N.a,{children:[Object(c.jsxs)(S.a,{flex:2,children:[Object(c.jsx)("div",{children:Object(c.jsx)("b",{children:"Belarus city:"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return n("Minsk")},children:Object(c.jsx)("div",{className:"cityname",children:"Minsk"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return n("Vitebsk")},children:Object(c.jsx)("div",{children:"Vitebsk"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return n("Gomel")},children:Object(c.jsx)("div",{children:"Gomel"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return n("Grodno")},children:Object(c.jsx)("div",{children:"Grodno"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return n("Brest")},children:Object(c.jsx)("div",{children:"Brest"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return n("Navapolatsk")},children:Object(c.jsx)("div",{children:"Navapolatsk"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return n("Polatsk")},children:Object(c.jsx)("div",{children:"Polatsk"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return n("Polatsk")},children:Object(c.jsx)("div",{children:"Dzisna"})})]}),Object(c.jsxs)(S.a,{flex:2,children:[Object(c.jsx)("div",{children:Object(c.jsx)("b",{children:"Ukraine city:"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return n("Kiev")},children:Object(c.jsx)("div",{className:"cityname",children:"Kiev"})})]}),Object(c.jsxs)(S.a,{flex:2,children:[Object(c.jsx)("div",{children:Object(c.jsx)("b",{children:"Russian city:"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return n("Moscow")},children:Object(c.jsx)("div",{className:"cityname",children:"Moscow"})}),Object(c.jsx)(y.b,{className:k.a.link,to:"/yourweather",onClick:function(){return n("Sochi")},children:Object(c.jsx)("div",{children:"Sochi"})})]})]})]})},_=n(107),T=n.n(_),E=n(145),I=n(77),M=n(146).create({baseURL:"https://api.openweathermap.org/data/2.5/"}),P=function(e){return M.get("find?q="+e+"&appid=f004c51d2159432ab3fe79f60c84e90e").then((function(e){return e.data.list[0]}))},R="redux/YourCityReducer/GET_YOURCITY",W="redux/YourCityReducer/SET_WEATHERDATA",F={yourCity:null,weatherData:[]},Y=function(e){return function(){var t=Object(E.a)(T.a.mark((function t(n){var c;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:c=t.sent,n({type:W,data:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(I.a)(Object(I.a)({},e),{},{yourCity:t.yourCity});case W:return Object(I.a)(Object(I.a)({},e),{},{weatherData:t.data});default:return e}},A=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(D,{getInfoYourCity:this.props.getInfoYourCity,getWeatherData:this.props.getWeatherData,yourCity:this.props.yourCity})})}}]),n}(a.a.Component),B=Object(m.b)((function(e){return{yourCity:e.searchPage.yourCity,weatherData:e.searchPage.weatherData}}),{getInfoYourCity:function(e){return{type:R,yourCity:e}},getWeatherData:Y})(A),H=n(305),U=function(e){var t=H.a.Step;return Object(c.jsx)("div",{children:Object(c.jsxs)(H.a,{direction:"vertical",current:0,children:[Object(c.jsx)(t,{title:"First act",description:"Opend link `Search your weather:`"}),Object(c.jsx)(t,{title:"Second act",description:"Enter your city in the search bar"}),Object(c.jsx)(t,{title:"Third act",description:"Click button `Search`"}),Object(c.jsx)(t,{title:"Fourth act",description:"Finish"})]})})},G=n(148),K=n.n(G),V=function(e){var t=e.weatherData,n=e.yourCity;return Object(c.jsx)("div",{children:Object(c.jsxs)(N.a,{gutter:24,children:[Object(c.jsx)(S.a,{span:8}),Object(c.jsxs)(S.a,{className:K.a.border,span:8,children:["Hello",Object(c.jsxs)("div",{children:[n," [",t.sys.country,"]"]}),Object(c.jsx)("img",{src:"http://openweathermap.org/img/w/"+t.weather[0].icon+".png",alt:"iconweather",width:"120px",height:"120px"}),Object(c.jsxs)("div",{children:["Clouds: ",Object(c.jsxs)("b",{children:[t.clouds.all," %"]})]}),Object(c.jsxs)("div",{children:["Coordination:",Object(c.jsxs)("div",{children:["LAT - ",Object(c.jsx)("b",{children:t.coord.lat})]}),Object(c.jsxs)("div",{children:["LON - ",Object(c.jsx)("b",{children:t.coord.lon})]})]}),Object(c.jsx)("div",{}),Object(c.jsxs)("div",{children:["Temp Maximal: ",Object(c.jsxs)("b",{children:[Math.round(t.main.temp_max-273)," \xb0C"]})," "]}),Object(c.jsxs)("div",{children:["Temp Minimal: ",Object(c.jsxs)("b",{children:[Math.round(t.main.temp_min-273)," \xb0C"]})]}),Object(c.jsxs)("div",{children:["Description: ",Object(c.jsx)("b",{children:t.weather[0].description})]})]}),Object(c.jsx)(S.a,{span:8})]})})},q=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getWeatherData(this.props.yourCity)}},{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(V,{weatherData:this.props.weatherData,yourCity:this.props.yourCity})})}}]),n}(a.a.Component),z=Object(m.b)((function(e){return{yourCity:e.searchPage.yourCity,weatherData:e.searchPage.weatherData}}),{getWeatherData:Y})(q),J=d.a.Header,X=d.a.Sider,Q=d.a.Content,Z=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!1},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("header",{className:"header",children:Object(c.jsx)(v,{})}),Object(c.jsx)("main",{children:Object(c.jsxs)(d.a,{children:[Object(c.jsxs)(X,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,children:[Object(c.jsx)("div",{className:"logo"}),Object(c.jsxs)(u.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(c.jsx)(u.a.Item,{icon:Object(c.jsx)(b.a,{}),children:Object(c.jsx)(y.b,{to:"/search",children:"Search your weather:"})},"1"),Object(c.jsx)(u.a.Item,{icon:Object(c.jsx)(O.a,{}),children:Object(c.jsx)(y.b,{to:"/infosearch",children:"How to search:"})},"2")]})]}),Object(c.jsxs)(d.a,{className:"site-layout",children:[Object(c.jsx)(J,{className:"site-layout-background",style:{padding:0,height:"20px"},children:a.a.createElement(this.state.collapsed?x.a:p.a,{className:"trigger",onClick:this.toggle})}),Object(c.jsxs)(Q,{className:"site-layout-background contentimg",style:{margin:"24px 16px",padding:24,minHeight:280},children:[Object(c.jsx)(f.a,{exact:!0,path:"/search",render:function(){return Object(c.jsx)(B,{})}}),Object(c.jsx)(f.a,{exact:!0,path:"/infosearch",render:function(){return Object(c.jsx)(U,{})}}),Object(c.jsx)(f.a,{exact:!0,path:"/yourweather",render:function(){return Object(c.jsx)(z,{})}})]})]})]})}),Object(c.jsx)("footer",{className:"footer",children:"Weather App 1.0"})]})}}]),n}(a.a.Component),$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,314)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},ee=n(57),te=n(154),ne=n(306),ce=Object(ee.c)({searchPage:L,form:ne.a}),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.d,ae=Object(ee.e)(ce,re(Object(ee.a)(te.a)));window.__store__=ae;var ie=ae;s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(y.a,{children:Object(c.jsx)(m.a,{store:ie,children:Object(c.jsx)(Z,{})})})}),document.getElementById("root")),$()},38:function(e,t,n){e.exports={link:"Search_link__1H9Fe"}}},[[299,1,2]]]);
//# sourceMappingURL=main.bd0aec9d.chunk.js.map