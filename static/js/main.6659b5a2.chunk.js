(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),l=a.n(r),c=(a(14),a(15),a(4)),s=a(5),o=a(6),h=a(1),u=a(8),m=a(7),d=(a(16),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={city:"",displayCity:"Please Enter A City",temperature:"",humidity:"",conditions:"",feelsLike:"",imgUrl:"https://freesvg.org/img/sivvus_weather_symbols_3.png"},e.handleClick=e.handleClick.bind(Object(h.a)(e)),e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(o.a)(a,[{key:"handleClick",value:function(){var e=this;fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(this.state.city,"&units=imperial&APPID=e1b3deaa440b2455c127c030779cf400")).then((function(e){if(e.ok)return e.json();throw Error(e.statusText)})).then((function(t){var a=t.main;console.log(t);var n=t.weather[0].icon,i="http://openweathermap.org/img/wn/".concat(n,"@2x.png");e.setState({displayCity:"Weather in ".concat(t.name," today: "),temperature:"".concat(a.temp,"\xb0F"),feelsLike:"".concat(a.feels_like,"\xb0F"),humidity:" ".concat(a.humidity,"%"),conditions:t.weather[0].description,imgUrl:i})})).catch((function(t){console.log(t),e.setState({displayCity:"City Not Found",temperature:"",feelsLike:"",humidity:"",conditions:"",imgUrl:""})}))}},{key:"handleChange",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return i.a.createElement("div",{id:"appContainer"},i.a.createElement("div",{id:"weatherData"},i.a.createElement("div",{id:"cityName"},this.state.displayCity),i.a.createElement("div",{id:"weatherIcon"},i.a.createElement("img",{src:this.state.imgUrl}),i.a.createElement("p",null," ",this.state.conditions," ")),i.a.createElement("ul",null,i.a.createElement("li",null," Temperature: ",this.state.temperature," "),i.a.createElement("li",null," Humidity: ",this.state.humidity,"  "),i.a.createElement("li",null," Feels Like: ",this.state.feelsLike," "))),i.a.createElement("div",{id:"searchBox"},i.a.createElement("input",{type:"text",name:"city",placeholder:"Please Enter City",value:this.value,onChange:this.handleChange}),i.a.createElement("button",{type:"submit",onClick:this.handleClick}," Search Weather")))}}]),a}(i.a.Component));var p=function(){return i.a.createElement("div",null,i.a.createElement(d,null))};l.a.render(i.a.createElement(p,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.6659b5a2.chunk.js.map