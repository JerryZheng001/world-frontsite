(this["webpackJsonpcore-frontsite"]=this["webpackJsonpcore-frontsite"]||[]).push([[15],{859:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(28),c=a(0),r=a.n(c),l=a(364),i=a(237),s=a.n(i),o=a(210),m=a.n(o),d=a(209),u=a.n(d),p=a(454),h=a(79),E=a(36),f=["Significant Risk","High Risk","Medium Risk","Some Risk","Excellent"];function b(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],i=t[1],o=Object(c.useState)([]),d=Object(n.a)(o,2),b=d[0],w=d[1],N=Object(E.f)(),v=Object(c.useState)(""),y=Object(n.a)(v,2),g=y[0],x=y[1],O=function(){var e={page:1,pagesize:100,name:g};Object(p.c)(e).then((function(e){if(e.data){var t=e.data.results;w(t)}}))};return Object(c.useEffect)((function(){return O(),Object(p.d)().then((function(e){e.data&&i(e.data)})),function(){}}),[]),r.a.createElement(l.g,null,r.a.createElement(l.h,null,r.a.createElement("div",{className:"title"},"Triathon Contract Detection Report"),r.a.createElement("div",{className:"showTitle"},a," Detected"),r.a.createElement(l.p,null,r.a.createElement("div",{className:"icon"}),r.a.createElement(l.i,{placeholder:"search",value:g,onChange:function(e){return function(e){x(e.target.value)}(e)}}),r.a.createElement("div",{className:"button",onClick:function(){return O()}},"search")),r.a.createElement("div",{className:"listCom"},r.a.createElement("div",{className:"headIntro"},r.a.createElement(l.l,{width:"70px",type:0},"#"),r.a.createElement(l.l,{width:"340px",type:1},"Name"),r.a.createElement(l.l,{width:"240px",type:2},"Contract address"),r.a.createElement(l.l,{width:"225px",type:2},"Chain"),r.a.createElement(l.l,{width:"225px",type:2},"Result"),r.a.createElement(l.l,{width:"194px",type:2},"Operation")),r.a.createElement("div",{className:"container"},0!==b.length?b.map((function(e,t){return r.a.createElement("div",{className:"listItems",key:t},r.a.createElement(l.l,{width:"70px",type:0},t+1),r.a.createElement(l.l,{width:"340px",type:1},e.file_name),r.a.createElement(l.l,{width:"240px",type:2},Object(h.d)(e.contract_address)),r.a.createElement(l.l,{width:"225px",type:2}," ",r.a.createElement("img",{src:"bsc"===e.network?u.a:m.a,alt:"",className:"chainImg"})," ",e.network),r.a.createElement(l.l,{width:"225px",type:2},Math.floor(100*Number(e.score))>=80?f[0]:Math.floor(100*Number(e.score))>=60?f[1]:Math.floor(100*Number(e.score))>=40?f[2]:Math.floor(100*Number(e.score))>=20?f[3]:f[4]),r.a.createElement(l.l,{width:"194px",type:2},r.a.createElement("img",{src:s.a,alt:"",className:"rightPoint",onClick:function(){N.push("/contract_detection/".concat(e.id))}})))})):r.a.createElement("div",{className:"empty"}," No Data ~"))),0!==b.length&&r.a.createElement("div",{className:"footerIntro"},"Only Showing 1~100")))}}}]);
//# sourceMappingURL=15.87c4454e.chunk.js.map