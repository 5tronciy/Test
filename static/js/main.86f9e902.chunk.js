(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){e.exports={content:"Input_content__2RFu4",textBox:"Input_textBox__2IsBa",dateBox:"Input_dateBox__1TYxU",timeBox:"Input_timeBox__15Qc8",create:"Input_create__3smsa",buttonCreateName:"Input_buttonCreateName__cYvR5"}},17:function(e,t,a){e.exports={content:"Output_content__1b0Se",text:"Output_text__7jXA3",deltaTimeWrapper:"Output_deltaTimeWrapper__1EgLV",deltaTime:"Output_deltaTime__1kmQC"}},38:function(e,t,a){e.exports={deltaTimeItem:"deltaTimeItem_deltaTimeItem__1tvQR"}},56:function(e,t,a){},68:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a(1),s=a.n(n),o=a(19),r=a.n(o),i=a(21),u=a(35),l=a.n(u),h=(a(56),a(36)),j=a.n(h),p=(a(68),a(39)),m=a(13),d=a.n(m),b=a(20),x=function(e){var t=e.onChangeText,a=e.onChangeDate,n=e.dateValue,s=e.onChangeTime,o=e.timeValue,r=e.params;return Object(c.jsxs)("div",{className:d.a.content,children:[Object(c.jsx)("div",{className:d.a.textBox,placeholder:"\u041b\u044e\u0431\u043e\u0439 \u0442\u0435\u043a\u0441\u0442...",children:Object(c.jsx)(p.a,{onChange:t})}),Object(c.jsx)("div",{className:d.a.dateBox,placeholder:"\u0414\u0430\u0442\u0430",children:Object(c.jsx)(l.a,{onChange:a,value:n,format:"dd MMMM yyyy",isOpen:!1,clearIcon:null,required:!0})}),Object(c.jsx)("div",{className:d.a.timeBox,placeholder:"\u0412\u0440\u0435\u043c\u044f",children:Object(c.jsx)(j.a,{onChange:s,value:o,format:"HH:mm",disableClock:!0,isOpen:!1,required:!0})}),Object(c.jsx)(b.b,{to:r,children:Object(c.jsx)("div",{className:d.a.create,children:Object(c.jsx)("span",{className:d.a.buttonCreateName,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})})})]})},O=function(){var e=Object(n.useState)(new Date),t=Object(i.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)("00:00"),r=Object(i.a)(o,2),u=r[0],l=r[1],h=Object(n.useState)(""),j=Object(i.a)(h,2),p=j[0],m=j[1],d=new Date(a),b="/Test/"+JSON.stringify({text:p,date:d.getTime()+36e4*Number(u.slice(0,2))+6e4*Number(u.slice(3,5))});return Object(c.jsx)(x,{onChangeText:function(e){m(e.target.value)},onChangeDate:function(e){s(e)},dateValue:a,onChangeTime:function(e){l(e.toString())},timeValue:u,params:b})},f=a(38),_=a.n(f),T=function(e){var t=e.deltaTimeItem;return Object(c.jsx)("li",{className:_.a.deltaTimeItem,children:t})},v=a(17),g=a.n(v),N=a(4);var C=function(e){var t=e.deltaTime,a=e.appData;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:g.a.content,children:Object(c.jsx)("div",{className:g.a.deltaTimeWrapper,children:Object(c.jsx)("ul",{className:g.a.deltaTime,children:t.map((function(e){return Object(c.jsx)(T,{deltaTimeItem:e},e)}))})})}),Object(c.jsx)("div",{className:g.a.text,children:a.text})]})},I=function(){var e=Object(N.f)().params;console.log(e);var t=JSON.parse(e),a=(new Date).getTime(),n=Math.abs(Number(t.date)-a),s=function(e){var t=[];e.forEach((function(e,a){switch(a){case 0:1===e?t.push("".concat(e," \u0433\u043e\u0434")):e>1&&e<5?t.push("".concat(e," \u0433\u043e\u0434\u0430")):t.push("".concat(e," \u043b\u0435\u0442"));break;case 1:1===e?t.push("".concat(e," \u043c\u0435\u0441\u044f\u0446")):e>1&&e<5?t.push("".concat(e," \u043c\u0435\u0441\u044f\u0446\u0430")):t.push("".concat(e," \u043c\u0435\u0441\u044f\u0446\u0435\u0432"));break;case 2:1===e?t.push("".concat(e," \u0434\u0435\u043d\u044c")):e>1&&e<5?t.push("".concat(e," \u0434\u043d\u044f")):t.push("".concat(e," \u0434\u043d\u0435\u0439"));break;case 3:e%20===1?t.push("".concat(e," \u0447\u0430\u0441")):e>1&&e<5||e>21&&e<24?t.push("".concat(e," \u0447\u0430\u0441\u0430")):t.push("".concat(e," \u0447\u0430\u0441\u043e\u0432"));break;case 4:1===e||e>20&&e%10===1?t.push("".concat(e," \u043c\u0438\u043d\u0443\u0442\u0430")):e>1&&e<5||e>20&&e%10>1&&e%10<5?t.push("".concat(e," \u043c\u0438\u043d\u0443\u0442\u044b")):t.push("".concat(e," \u043c\u0438\u043d\u0443\u0442"));break;case 5:1===e||e>20&&e%10===1?t.push("".concat(e," \u0441\u0435\u043a\u0443\u043d\u0434\u0430")):e>1&&e<5||e>20&&e%10>1&&e%10<5?t.push("".concat(e," \u0441\u0435\u043a\u0443\u043d\u0434\u044b")):t.push("".concat(e," \u0441\u0435\u043a\u0443\u043d\u0434"))}}));for(var a=0;"0"===t[a][0];++a)delete t[a];return t}([Math.floor(n/315576e5),Math.floor(n/10368e5)%30,Math.floor(n/864e5)%365,Math.floor(n/36e5)%24,Math.floor(n/6e4)%60,Math.floor(n/1e3)%60]);return Object(c.jsx)(C,{deltaTime:s,appData:t})},B=function(){return Object(c.jsx)(b.a,{children:Object(c.jsxs)(N.c,{children:[Object(c.jsx)(N.a,{exact:!0,path:"/Test",children:Object(c.jsx)(O,{})}),Object(c.jsx)(N.a,{path:"/Test/:params",children:Object(c.jsx)(I,{})})]})})},M=function(){return Object(c.jsx)(B,{})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),s(e),o(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root")),k()}},[[73,1,2]]]);
//# sourceMappingURL=main.86f9e902.chunk.js.map