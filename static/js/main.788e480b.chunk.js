(window.webpackJsonpdbfront=window.webpackJsonpdbfront||[]).push([[0],{21:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},4:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(13),i=a.n(o),s=(a(26),a(14)),c=a(15),u=a(16),r=a(20),h=a(17),m=a(2),d=a(19),b=(a(4),a(18)),p=a.n(b),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).state={name:"",data1:"",data2:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target.className;this.setState(Object(s.a)({},t,e.target.value))}},{key:"handleSubmit",value:function(e){console.log("some shit was submitted"),p.a.post("https://webhooks-test-696969.herokuapp.com/newdata",{name:this.state.name,data1:this.state.data1,data2:this.state.data2,date:Date.now()}).then(function(e){console.log(e)}).then(function(e){console.log(e)}),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("form",{className:"verticalForm",onSubmit:this.handleSubmit},l.a.createElement("label",null,"Name:",l.a.createElement("input",{className:"name",type:"text",value:this.state.value,onChange:this.handleChange})),l.a.createElement("label",null,"DataThing1:",l.a.createElement("input",{className:"data1",type:"text",value:this.state.value,onChange:this.handleChange})),l.a.createElement("label",null,"DataThing2:",l.a.createElement("input",{className:"data2",type:"text",value:this.state.value,onChange:this.handleChange})),l.a.createElement("input",{className:"input-thing",type:"submit",value:"Save"}))}}]),t}(l.a.Component);a(44);var g=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"All the Data you need and none that you don't"),l.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.788e480b.chunk.js.map