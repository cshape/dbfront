(window.webpackJsonpdbfront=window.webpackJsonpdbfront||[]).push([[0],{21:function(e,a,t){e.exports=t(45)},26:function(e,a,t){},44:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},45:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(14),s=t.n(o),i=(t(26),t(15)),c=t(16),d=t(17),h=t(20),r=t(18),u=t(2),m=t(19),b=(t(5),t(3)),p=t.n(b),g=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(h.a)(this,Object(r.a)(a).call(this,e))).state={name:"",data1:"",data2:"",data3:""},t.handleChange=t.handleChange.bind(Object(u.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(u.a)(t)),t}return Object(m.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://webhooks-test-696969.herokuapp.com/newdata").then(function(a){console.log(a),e.setState({name:a.data.name,data1:a.data.data1,data2:a.data.data2,data3:a.data.data3})})}},{key:"handleChange",value:function(e){var a=e.target.className;this.setState(Object(i.a)({},a,e.target.value))}},{key:"handleSubmit",value:function(e){console.log("some shit was submitted"),p.a.post("https://webhooks-test-696969.herokuapp.com/newdata",{name:this.state.name,data1:this.state.data1,data2:this.state.data2,data3:this.state.data3,date:Date.now()}).then(function(e){console.log(e)}).then(function(e){console.log(e)}),e.preventDefault(),alert("Data saved.")}},{key:"render",value:function(){return l.a.createElement("form",{className:"verticalForm",onSubmit:this.handleSubmit},l.a.createElement("label",null,"Name:",l.a.createElement("input",{className:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement("label",null,"Email:",l.a.createElement("input",{className:"data1",type:"text",value:this.state.data1,onChange:this.handleChange})),l.a.createElement("label",null,"Phone Number:",l.a.createElement("input",{className:"data2",type:"text",value:this.state.data2,onChange:this.handleChange})),l.a.createElement("label",null,"Years at Macomb:",l.a.createElement("input",{className:"data3",type:"text",value:this.state.data3,onChange:this.handleChange})),l.a.createElement("input",{className:"input-thing",type:"submit",value:"Save"}))}}]),a}(l.a.Component);t(44);var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Macomb Community College Database"),l.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,a,t){}},[[21,1,2]]]);
//# sourceMappingURL=main.b203ebbd.chunk.js.map