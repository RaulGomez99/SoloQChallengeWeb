(this["webpackJsonplol-web"]=this["webpackJsonplol-web"]||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){},193:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),o=n(25),r=n.n(o),c=(n(116),n(79)),i=n.n(c),u=n(96),l=n(108),p=(n(117),n(198)),d=n(197),j=(n(118),n(199)),b=n(200),g=n(201),f=n(21),h=["R3X PamelaChu","R3X pORNNhub ","Svrlsvpb","mitulaEZREAL","R3X VirginMaster","Calyscxn","Maz3pin","R3X DJ Cobra","egnqs","AlejosDeCarglass","R3X peloypito","R3X SocioDeVOX","labandaestabo3"],m=["CHALLENGER","MASTER","DIAMOND","PLATINUM","GOLD","SILVER","BRONZE","IRON","UNRANKED"],O=function(){var e=function(e){return"I"==e?1:"II"==e?2:"III"==e?3:"IV"==e?4:void 0},t=function(e,t){return e.name.toLowerCase().charCodeAt(0)-97-(t.name.toLowerCase().charCodeAt(0)-97)},n=function(e){var t=e.split("");return Object(f.jsxs)("span",{children:[t.map((function(e){return a(e)})),"\xa0"]})},a=function(e){return"L"==e?Object(f.jsx)(j.a,{twoToneColor:"#FE2E2E"}):"W"==e?Object(f.jsx)(b.a,{twoToneColor:"#52c41a"}):"N"==e?Object(f.jsx)(g.a,{}):void 0},o=[{title:"Nombre",dataIndex:"name",key:"name",render:function(e,t){return Object(f.jsxs)("span",{children:[Object(f.jsx)(p.a,{src:"https://opgg-static.akamaized.net/images/profile_icons/profileIcon".concat(t.iconId,".jpg?image=q_auto:best&v=1518361200")})," ",Object(f.jsx)("a",{href:"https://euw.op.gg/summoner/userName=".concat(e),target:"_blank",children:e})," ",t.level," "]})},sorter:function(e,t){return e.name.toLowerCase().charCodeAt(0)-97-(t.name.toLowerCase().charCodeAt(0)-97)}},{title:"Liga",dataIndex:"league",key:"league",render:function(t,s){return Object(f.jsx)("span",{children:"UNRANKED"!=t?Object(f.jsxs)("span",{children:[Object(f.jsx)(p.a,{src:"https://opgg-static.akamaized.net/images/medals/".concat(t.toLowerCase(),"_").concat(e(s.tier),".png?image=q_auto:best&v=1")}),t," ",s.tier," (",s.points,"pts) ",s.promo?n(s.promo.progress):""]}):Object(f.jsxs)("span",{children:[Object(f.jsx)(p.a,{src:"https://opgg-static.akamaized.net/images/medals/default.png?image=q_auto:best&v=1"}),t]})})},sorter:function(t,n){var s=100*(10*(8-m.indexOf(t.league))-e(t.tier)||0)+t.points||0,a=100*(10*(8-m.indexOf(n.league))-e(n.tier)||0)+n.points||0;return console.log(s,t.name),a-s}},{title:"Victorias",dataIndex:"wins",key:"wins",sorter:function(e,t){return t.wins-e.wins}},{title:"Derrotas",dataIndex:"losses",key:"losses",sorter:function(e,t){return t.losses-e.losses}},{title:"Win Rate",render:function(e,t){return Object(f.jsxs)("span",{children:[t.wins/(t.losses+t.wins)||0,"%"]})}}],r=Object(s.useState)([]),c=Object(l.a)(r,2),O=c[0],x=c[1];return Object(s.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var n,s,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],s=0;case 2:if(!(s<h.length)){e.next=10;break}return e.next=5,fetch("/get/".concat(h[s])).then((function(e){return e.json()}));case 5:a=e.sent,n.push(a);case 7:s++,e.next=2;break;case 10:n=n.sort(t),console.log(n),x(n);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"SoloQ Challenge 2"}),Object(f.jsx)(d.a,{columns:o,dataSource:O})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,202)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),o(e),r(e)}))};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),x()}},[[193,1,2]]]);
//# sourceMappingURL=main.7998b0a8.chunk.js.map