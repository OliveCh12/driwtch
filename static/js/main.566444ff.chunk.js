(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{31:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r(0),n=r(24),s=r.n(n),i=(r(31),r(10)),l=r(3),o=r(7),d=Object(c.createContext)(void 0),j=function(e){var t=Object(c.useState)([]),r=Object(o.a)(t,2),n=r[0],s=r[1];return Object(a.jsx)(d.Provider,{value:[n,s],children:e.children})},b=r(16),x=r(19),u=function(e){return Object(a.jsx)("header",{className:"flex-none h-16 border-b dark:bg-gray-800 dark:border-gray-800 w-full",children:Object(a.jsx)("div",{className:"container m-auto px-5 h-full",children:Object(a.jsxs)("nav",{className:"flex items-center justify-between px-2 py-3 navbar-expand-lg h-full",children:[Object(a.jsx)("div",{children:Object(a.jsx)(i.b,{to:"/",className:"text-xl font-cursive text-purple-500 ",children:"Driwtch"})}),e.query?Object(a.jsx)("div",{children:Object(a.jsx)("strong",{className:"capitalize dark:text-white",children:e.query})}):"",Object(a.jsx)("div",{className:"flex justify-between dark:text-white",children:Object(a.jsx)(i.b,{to:"/",children:"GitHub"})})]})})})},h=function(e){return Object(a.jsx)("footer",{className:"dark:bg-gray-900 flex-none flex justify-center items-center text-center h-16 z-10 w-full",children:Object(a.jsxs)("p",{className:"text-sm dark:text-white",children:["\xa9 Copyright"," ",Object(a.jsx)("strong",{className:"text-purple-500",children:(new Date).getFullYear()}),", Developped by Olivier Chemla"]})})},m=r(9),O=function(){var e=Object(c.useState)({query:"",interval:3e4}),t=Object(o.a)(e,2),r=t[0],n=t[1];function s(e){var t=e.target.value;n(Object(x.a)(Object(x.a)({},r),{},Object(b.a)({},e.target.name,t)))}return Object(a.jsxs)("div",{className:"bg-gray-100 dark:bg-gray-800  h-full flex flex-col justify-center items-center",children:[Object(a.jsx)(u,{}),Object(a.jsxs)("div",{className:"container m-auto px-5 mt-5 h-full flex flex-col justify-center items-center",children:[Object(a.jsx)(m.b.h1,{initial:{y:100,scale:3,opacity:0},animate:{y:0,scale:1,opacity:1},transition:{duration:.5,type:"spring"},className:"font-cursive text-6xl text-primary-500",children:"Driwtch"}),Object(a.jsx)("p",{className:"dark:text-gray-300 text-xl text-gray-500 mb-5",children:"Sketch as fast as you can..."}),Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("input",{className:"bg-white dark:bg-gray-700 dark:text-white shadow rounded border-0 p-3",type:"text",name:"query",value:r.query,onChange:s,placeholder:"I want to draw..."}),Object(a.jsxs)("select",{className:"bg-white dark:bg-gray-700 dark:text-white shadow rounded p-3 ml-3",name:"interval",value:r.interval,onChange:s,children:[Object(a.jsx)("option",{value:3e4,children:"30 seconds"}),Object(a.jsx)("option",{value:6e4,children:"1 minute"}),Object(a.jsx)("option",{value:9e4,children:"1 minute 30"}),Object(a.jsx)("option",{value:12e4,children:"2 minutes"}),Object(a.jsx)("option",{value:15e4,children:"2 minutes 30"}),Object(a.jsx)("option",{value:15e4,children:"3 minutes"}),Object(a.jsx)("option",{value:21e4,children:"3 minutes 30"}),Object(a.jsx)("option",{value:24e4,children:"4 minutes"}),Object(a.jsx)("option",{value:27e4,children:"4 minutes 30"}),Object(a.jsx)("option",{value:3e5,children:"5 minutes"})]})]}),Object(a.jsx)(i.b,{type:"submit",className:"border border-purple-600 text-white px-10 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 focus:bg-purple-700 shadow-xl mt-5",to:"/".concat(r.query,"/").concat(r.interval),children:"Start session"})]}),Object(a.jsx)(h,{})]})},p=r(22),f=r(12),g=r(13),v=function(e){return Object(a.jsx)("div",{className:"bg-gray-200 dark:bg-gray-700 rounded-full",children:Object(a.jsx)(m.b.div,{animate:{width:"".concat(e.current,"%")},transition:{type:"tween"},className:"transition duration-500 ease-in-out bg-gradient-to-r from-purple-400  to-purple-600 h-1 rounded-full"})})},y=function(e){return Object(a.jsx)(m.b.button,{className:"bg-white  text-purple-500 dark:text-white dark:bg-gray-700 h-12 w-12 rounded-full hover:bg-purple-500 focus:bg-purple-700  border border-gray-300 dark:border-gray-600 text-white",style:{transition:"all .15s ease"},type:"button",whileTap:{scale:1.2},onClick:e.onClick,children:e.children})},w=function(e){var t=Object(c.useContext)(d),r=Object(o.a)(t,1)[0],n=Object(c.useState)(0),s=Object(o.a)(n,2),i=s[0],l=s[1];function j(){i===r.length?alert("You reach the end"):l(i+1)}return Object(a.jsxs)("div",{className:" flex-grow h-36 relative dark:bg-gradient-to-t from-gray-900 to-gray-800",children:[Object(a.jsx)(m.a,{children:Object(a.jsx)(m.b.img,{className:"w-full h-full object-contain",src:r[i],alt:"Sketch image",initial:{opacity:0,x:300,overflow:"hidden"},animate:{opacity:1,x:0,overflow:"hidden"},exit:{opacity:0,x:-300,overflow:"hidden"},transition:{type:"tween"}},r[i])}),Object(a.jsx)("div",{className:" w-full flex justify-center mt-5 absolute bottom-5",children:Object(a.jsx)("div",{className:"container mx-auto px-4",children:Object(a.jsxs)("div",{className:"bg-white bg-opacity-90 h-36 max-w-lg mx-auto border border-gray-200 rounded-xl w-xl dark:bg-gray-800 dark:border-gray-600 shadow-xl",children:[Object(a.jsx)("div",{className:"bg-white dark:bg-dark-darkest border-b border-gray-200 dark:border-gray-600 rounded-t-xl h-8 flex justify-center items-center",children:Object(a.jsxs)("span",{className:"mb-1 dark:text-white text-xs",children:[Object(a.jsx)("strong",{className:"text-purple-500",children:i})," /"," ",r.length]})}),Object(a.jsxs)("div",{className:"flex justify-between  items-center p-5 ",children:[Object(a.jsx)(y,{onClick:function(){0===i?alert("Stop"):l(i-1)},children:Object(a.jsx)(f.a,{icon:g.a})}),Object(a.jsx)("div",{className:"flex flex-col items-center",children:Object(a.jsx)(p.a,{date:Date.now()+e.duration,renderer:function(e){e.total;var t=e.minutes,r=e.seconds,c=e.completed,n=e.api;return c?(j(),n.start(),"Next"):Object(a.jsxs)("span",{className:"text-lg text-white font-bold bg-purple-500 px-9 py-2 rounded-full",children:[Object(a.jsx)(f.a,{icon:g.d,className:"mr-1"}),0===t?"":t+" min"," ",0===r?"":r+" s"]})},autoStart:!0})}),Object(a.jsx)(y,{onClick:j,children:Object(a.jsx)(f.a,{icon:g.b})})]}),Object(a.jsx)(p.a,{date:Date.now()+e.duration,renderer:function(t){var r=t.total,c=t.completed,n=t.api;return c?(n.start(),"Next"):Object(a.jsx)(v,{current:100*r/e.duration})},autoStart:!0})]})})})]})},N=function(){var e=Object(l.f)(),t=e.query,r=e.duration,n=Object(c.useState)(!1),s=Object(o.a)(n,2),i=s[0],j=s[1],b=Object(c.useState)(null),x=Object(o.a)(b,2),O=x[0],p=x[1],v=Object(c.useState)(""),y=Object(o.a)(v,2),N=(y[0],y[1],Object(c.useContext)(d)),k=Object(o.a)(N,2),S=(k[0],k[1]);return Object(c.useEffect)((function(){fetch("https://driwtch.herokuapp.com/search/?searchquery=".concat(t)).then((function(e){return e.json()})).then((function(e){j(!0),S(e)}),(function(e){j(!0),p(e)}))}),[]),O?Object(a.jsxs)("div",{children:["Erreur : ",O.message]}):i?Object(a.jsxs)("div",{className:"flex flex-col h-screen overflow-hidden",children:[Object(a.jsx)(u,{query:t}),Object(a.jsx)(w,{duration:parseInt(r)}),Object(a.jsx)(h,{})]}):Object(a.jsxs)("div",{className:"flex flex-col h-screen dark:bg-gray-800",children:[Object(a.jsx)(u,{query:t}),Object(a.jsxs)("div",{className:"flex flex-col justify-center items-center flex-grow",children:[Object(a.jsx)(m.b.div,{animate:{scale:[1,1.1,1.1,1,1],rotate:[0,0,270,270,0]},transition:{repeat:1/0,duration:2},children:Object(a.jsx)(f.a,{className:"text-purple-500",icon:g.c,size:"5x"})}),Object(a.jsxs)("span",{className:"text-center text-xl font-bold dark:text-white mt-8",children:["Un moment s'il te plait, je recherche des images de : ",Object(a.jsx)("br",{}),Object(a.jsxs)("strong",{className:"text-purple-600 mt-5",children:["\xab ",t," \xbb"]})]})]}),Object(a.jsx)(h,{})]})};var k=function(){return Object(a.jsx)(j,{children:Object(a.jsx)("div",{className:"h-screen dark:bg-dark",children:Object(a.jsx)(i.a,{basename:"/driwtch",children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(O,{})}),Object(a.jsx)(l.a,{path:"/:query/:duration",children:Object(a.jsx)(N,{})})]})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(a.jsx)(k,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.566444ff.chunk.js.map