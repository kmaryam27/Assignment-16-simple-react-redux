(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(n,e,t){n.exports=t(23)},17:function(n,e,t){},18:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var o=t(0),c=t.n(o),a=t(3),r=t.n(a),u=(t(17),t(18),t(5)),i=Object(u.a)(function(n){return{count:n.count}},function(n){return{onIncrementClick:function(){n({type:"INCREMENT"})},onDecrementClick:function(){console.log("mmm"),n({type:"DECREMENT"})}}})(function(n){return c.a.createElement("div",null,c.a.createElement("h1",null," I am counter "),c.a.createElement("p",null,"Count: ",n.count),c.a.createElement("button",{onClick:n.onIncrementClick},"increment"),c.a.createElement("button",{onClick:n.onDecrementClick},"decrement"))}),l=Object(u.a)(function(n){return{inputVal:n.inputVal}},function(n){return{onChange:function(e){var t={type:"CHANGETEXT",text:e.target.value};n(t)}}})(function(n){return c.a.createElement("div",null,c.a.createElement("input",{value:n.inputVal,onChange:n.onChange}),c.a.createElement("p",null,n.inputVal))}),s=t(4),m={count:0,inputVal:""},E=Object(s.b)(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(console.log("reducer fx in state",e),e.type){case"INCREMENT":return Object.assign({},n,{count:n.count+1});case"DECREMENT":return Object.assign({},n,{count:n.count-1});case"CHANGETEXT":return Object.assign({},n,{inputVal:e.text});default:return n}});var p=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i,{store:E}),c.a.createElement(l,{store:E}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.23b52d0b.chunk.js.map