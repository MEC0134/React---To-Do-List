(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(3),r=n.n(c),o=n(4),u=n(1);var i=function(e){return l.a.createElement("div",{onClick:function(){e.onChecked(e.id)}},l.a.createElement("li",null,e.text))};var m=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],r=n[1];return l.a.createElement("div",{className:"form"},l.a.createElement("input",{onChange:function(e){var t=e.target.value;r(t)},type:"text",value:c}),l.a.createElement("button",{onClick:function(){e.onAddItem(c),r("")}},l.a.createElement("span",null,"Add")))};var d=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),d=Object(u.a)(r,2),s=d[0],E=d[1],p=Object(a.useState)("#54a0ff"),f=Object(u.a)(p,2),v=f[0],b=f[1];function k(e){c(function(t){return t.filter(function(t,n){return n!==e})})}function h(){E(!1)}return setTimeout(h,9e3),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"heading"},l.a.createElement("h1",null,"To-Do List")),l.a.createElement(m,{onAddItem:function(e){c(function(t){return[].concat(Object(o.a)(t),[e])})}}),l.a.createElement("div",null,l.a.createElement("ul",null,n.map(function(e,t){return l.a.createElement(i,{key:t,id:t,text:e,onChecked:k})}))),l.a.createElement("div",{className:"picker-container"},l.a.createElement("p",null,"Color Picker:"),l.a.createElement("div",{className:"color-picker"},l.a.createElement("input",{type:"color",value:v,onChange:function(e){var t=e.target.value;document.body.style.backgroundColor=t,b(t)}}))),s&&l.a.createElement("div",{className:"guide-card"},l.a.createElement("h2",null,"App Usage Guide"),l.a.createElement("p",null,"Instructions on how to use the app:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Enter your to-do item in the input field."),l.a.createElement("li",null,"Click add to add it to your list."),l.a.createElement("li",null,"Click on the to-do item once you've completed it.")),l.a.createElement("button",{onClick:h},"Close")))};r.a.render(l.a.createElement(d,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)}},[[5,2,1]]]);
//# sourceMappingURL=main.2fd0c547.chunk.js.map