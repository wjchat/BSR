(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+HSx":function(e,t,n){e.exports=n.p+"static/prada-dbba603eaa73a6d17148f4068fde23ab.jpg"},"1Jk9":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);n("ry71");t.a=function(){return a.a.createElement("div",{className:"background"})}},"8bq2":function(e,t,n){},ExMU:function(e,t,n){e.exports=n.p+"static/cartier-eb0135cffaddb6778dd403b54400bc96.jpg"},J9yo:function(e,t,n){},L2Mu:function(e,t,n){e.exports=n.p+"static/reel-5772fdf59f236e437782710c649e0f5a.jpg"},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("Bl7J"),o=n("vrFN"),c=(n("J9yo"),n("8bq2"),n("z/o8")),u=n("pc+1"),l=(n("zGcK"),n("ExMU")),s=n.n(l),d=n("agze"),b=n.n(d),m=n("ltBJ"),f=n.n(m),g=n("+HSx"),p=n.n(g),v=n("L2Mu"),x=n.n(v),A=[];A.push({image:s.a,name:"Cartier",video:"https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",index:1,colors:["red","#b9a195","#dad2c5","#d5a069"],role:"Editor, Audio Production"}),A.push({image:b.a,name:"Coach",video:"https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",index:4,colors:["blue","#b9a195","#dad2c5","#d5a069"],role:"Editor, Audio Production"}),A.push({image:b.a,name:"Coach",video:"https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",index:8,colors:["blue","#b9a195","#dad2c5","#d5a069"],role:"Editor, Audio Production"}),A.push({image:f.a,name:"La Mer",video:"https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",index:2,colors:["green","#b9a195","#dad2c5","#d5a069"],role:"Editor, Audio Production"}),A.push({image:f.a,name:"La Mer",video:"https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",index:7,colors:["green","#b9a195","#dad2c5","#d5a069"],role:"Editor, Audio Production"}),A.push({image:p.a,name:"Prada",video:"https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",index:3,colors:["yellow","#b9a195","#dad2c5","#d5a069"],role:"Editor, Audio Production"}),A.push({image:p.a,name:"Prada",video:"https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",index:6,colors:["yellow","#b9a195","#dad2c5","#d5a069"],role:"Editor, Audio Production"}),A.push({image:x.a,name:"2017 Reel",video:"https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",index:0,colors:["purple","#b9a195","#dad2c5","#d5a069"],role:"Editor, Audio Production"}),A.push({image:x.a,name:"2017 Reel",video:"https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",index:5,colors:["purple","#b9a195","#dad2c5","#d5a069"],role:"Editor, Audio Production"}),A.sort((function(e,t){return e.index-t.index})),console.log(A);var y=A,w=(n("l8Ye"),n("rzGZ"),n("m210"),n("4DPX"),n("YbXK"),n("cFtU"),n("q8oJ"),n("8npG"),n("pJf4"),n("zYEW"),n("nOaX"));function E(e){var t=0;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}c.b.registerPlugin(w.a);w.a;var M=function(e){var t;Object(r.useEffect)((function(){var n=-50*e.current.index+25+"vw";c.b.to(t,1,{x:n,ease:u.d.easeInOut})}),e.current),Object(r.useEffect)((function(){if("carousel"!=e.viewing){c.b.to(t,.003,{pointerEvents:"none"});for(var n,r=E(t.getElementsByClassName("eachSlide"));!(n=r()).done;){var a=n.value;if(parseInt(a.getAttribute("index"))<e.current.index)c.b.to(a,.5,{x:-200,opacity:0,filter:"blur(4px)",ease:u.b.easeIn});else if(parseInt(a.getAttribute("index"))>e.current.index)c.b.to(a,.5,{x:200,opacity:0,filter:"blur(4px)",ease:u.b.easeIn});else{var i=c.b.timeline();i.to(a,.5,{scale:1.1,ease:u.b.easeIn}),i.to(a,.5,{opacity:0,filter:"blur(4px)",ease:u.b.easeOut})}}}else if("carousel"===e.viewing){c.b.to(t,.003,{pointerEvents:"auto"});for(var o,l=E(t.getElementsByClassName("eachSlide"));!(o=l()).done;){var s=o.value;c.b.to(s,.5,{x:0,opacity:1,filter:"blur(0px)",ease:u.b.easeOut,scale:1})}}}),e.viewing);return a.a.createElement("div",{className:e.className},a.a.createElement("div",{ref:function(e){return t=e},className:"slider",onMouseMove:function(){e.hovering.index>e.current.index?(t.classList.add("next"),t.classList.remove("back"),t.classList.remove("current")):e.hovering.index<e.current.index?(t.classList.add("back"),t.classList.remove("next"),t.classList.remove("current")):(t.classList.add("current"),t.classList.remove("back"),t.classList.remove("next"))}},e.content.map((function(t){return a.a.createElement("div",{key:t.index,index:t.index,className:"eachSlide"},a.a.createElement("img",{onMouseEnter:function(){return e.onHover(t)},onMouseLeave:function(){return e.onHover(e.current)},onClick:function(){return function(t){t===e.current?e.updateViewing(t):e.updateCurrent(t)}(t)},src:t.image,alt:t.name}))}))))},j=n("plVc"),I=n.n(j);c.b.registerPlugin(w.a);var C=function(e){var t,n=Object(r.useState)(null),i=n[0],o=n[1],l=Object(r.useState)("null"),s=l[0],d=l[1];return Object(r.useEffect)((function(){if("carousel"!=e.viewing){var n=c.b.timeline();n.to(t,.5,{x:30,opacity:0,filter:"blur(4px)",ease:u.b.easeIn}),n.to(t,.003,{x:-30}),n.call((function(){return o("Back")})),n.call((function(){return d("carousel")})),n.to(t,.5,{x:0,opacity:1,filter:"blur(0px)",ease:u.b.easeOut})}else if("carousel"===e.viewing){var r=c.b.timeline();r.to(t,1/4,{x:-30,opacity:0,filter:"blur(4px)",ease:u.b.easeIn}),r.to(t,.003,{x:30}),r.call((function(){return o(a.a.createElement(I.a,{to:"/contact",exit:{trigger:function(){return e.pullTrig(!0)},length:2},entry:{delay:.5}},"Contact"))})),r.call((function(){return d("null")})),r.to(t,1/4,{x:0,opacity:1,filter:"blur(0px)",ease:u.b.easeOut})}}),e.viewing),a.a.createElement("div",{ref:function(e){return t=e},className:e.className},"carousel"!=e.viewing?a.a.createElement("div",{onClick:function(){return e.updateViewing(s)}},i):a.a.createElement("div",null,i))};function h(e){var t=0;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}c.b.registerPlugin(w.a);var S=function(e){var t,n=Object(r.useState)(e.current),i=n[0],o=n[1],l=Object(r.useState)(e.hovering),s=l[0],d=l[1],b=function(e,t,n,r){var a=c.b.timeline(),i=e.childNodes;a.staggerTo(i,r,{height:n,ease:u.b.easeIn},.05*t)},m=function(e,t,n,r){var a=c.b.timeline(),i=e.childNodes;a.staggerTo(i,r,{height:n,ease:u.b.easeIn},.05*t)};return Object(r.useEffect)((function(){for(var n,r=function(){var t=n.value;parseInt(t.getAttribute("index"))!=e.current.index&&(parseInt(t.getAttribute("index"))===e.hovering.index?(parseInt(t.getAttribute("index"))>s.index?b(t,1,"50%",.25):e.hovering!=e.current&&b(t,-1,"50%",.25),d(e.hovering)):parseInt(t.getAttribute("index"))===s.index&&setTimeout((function(){parseInt(t.getAttribute("index"))<e.hovering.index?m(t,1,"0%",.25):m(t,-1,"0%",.25)}),140))},a=h(t.getElementsByClassName("colorContainer"));!(n=a()).done;)r()}),e.hovering),Object(r.useEffect)((function(){for(var n,r=h(t.getElementsByClassName("colorContainer"));!(n=r()).done;){var a=n.value;a.getAttribute("index")===e.current.index.toString()?i.index<e.current.index?b(a,1,"100%",.5):b(a,-1,"100%",.5):i.index<e.current.index?m(a,1,"0%",.5):m(a,-1,"0%",.5)}o(e.current)}),e.current),Object(r.useEffect)((function(){"carousel"!=e.viewing?c.b.to(t,.5,{y:30,opacity:0,filter:"blur(4px)",ease:u.b.easeIn}):"carousel"===e.viewing&&c.b.to(t,.5,{y:0,opacity:1,filter:"blur(0px)",ease:u.b.easeOut})}),e.viewing),a.a.createElement("div",{ref:function(e){return t=e},className:e.className},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"border"}),e.content.map((function(t){return a.a.createElement("div",{key:t.index,index:t.index,className:"colorContainer",onClick:function(){return e.onClick(t)},onMouseEnter:function(){return e.onHover(t)},onMouseLeave:function(){return e.onHover(e.current)}},t.colors.map((function(e){return a.a.createElement("div",{key:e,className:"color",style:{backgroundColor:e}})})))}))))};n("KFCn");c.a.registerPlugin(w.a);c.b.registerPlugin(w.a);var P=function(e){var t,n=Object(r.useState)(e.current),i=n[0],o=n[1],l=Object(r.useCallback)((function(e,n){var r=c.b.timeline({delay:0});"up"===n?(r.to(t,.5,{x:-30,opacity:0,filter:"blur(4px)",ease:u.b.easeIn}),r.to(t,.001,{x:30}),r.call((function(){return o(e)})),r.to(t,.5,{x:0,opacity:1,filter:"blur(0px)",ease:u.b.easeOut})):"down"===n&&(r.to(t,.5,{x:30,opacity:0,filter:"blur(4px)",ease:u.b.easeIn}),r.to(t,.001,{x:-30}),r.call((function(){return o(e)})),r.to(t,.5,{x:0,opacity:1,filter:"blur(0px)",ease:u.b.easeOut}))}));return Object(r.useEffect)((function(){e.current.index>i.index?l(e.current,"up"):e.current.index<i.index&&l(e.current,"down")}),e.current),Object(r.useEffect)((function(){"carousel"!=e.viewing?c.b.to(t,.5,{x:-60,y:90,opacity:0,filter:"blur(4px)",ease:u.b.easeIn}):"carousel"===e.viewing&&c.b.to(t,.5,{x:0,y:0,opacity:1,filter:"blur(0px)",ease:u.b.easeOut})}),e.viewing),a.a.createElement("div",{ref:function(e){return t=e},className:e.className},a.a.createElement("h1",null,i.name))};n("tIM4");c.b.registerPlugin(w.a);var z=function(e){var t;return Object(r.useEffect)((function(){if("carousel"!=e.viewing){var n=c.b.timeline({delay:.55});n.to(t,1,{opacity:1,filter:"blur(0px)",scale:1.1,ease:u.b.easeOut}),n.to(t.getElementsByClassName("dscr"),1/4,{y:0,opacity:1,filter:"blur(0px)",ease:u.b.easeIn},1/4)}}),e.viewing),a.a.createElement("div",{ref:function(e){return t=e},className:"viewing"},a.a.createElement("div",{className:"vid1"},a.a.createElement("iframe",{src:e.viewing.video,frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0})),a.a.createElement("div",{className:"dscr"},a.a.createElement("h2",null,"Editor / Producer / Cinemetography")))};c.b.registerPlugin(w.a);var O=function(e){var t;return Object(r.useEffect)((function(){"carousel"!=e.viewing?c.b.to(t,.5,{x:-40,y:-30,opacity:0,filter:"blur(4px)",scale:1,ease:u.b.easeIn}):"carousel"===e.viewing&&c.b.to(t,.5,{x:0,y:0,opacity:1,filter:"blur(0px)",scale:1,ease:u.b.easeOut})}),e.viewing),a.a.createElement("div",{ref:function(e){return t=e},className:"BSR"},a.a.createElement("div",null,a.a.createElement(I.a,{to:"/"},"BSR")))},D=function(e){var t=Object(r.useState)(y),n=t[0],i=(t[1],Object(r.useState)(n[0])),o=i[0],c=i[1],u=Object(r.useState)(o),l=u[0],s=u[1],d=Object(r.useState)("carousel"),b=d[0],m=d[1];return a.a.createElement("div",{className:e.className},a.a.createElement(O,{viewing:b}),a.a.createElement(C,{viewing:b,updateViewing:function(e){return m(e)},className:"gridView",pullTrig:e.pullTrig}),a.a.createElement(M,{viewing:b,updateViewing:function(e){return m(e)},hovering:l,onHover:function(e){return s(e)},updateCurrent:function(e){return c(e)},current:o,content:n,className:"carousel"}),"carousel"!=b?a.a.createElement(z,{viewing:b}):"",a.a.createElement(P,{viewing:b,className:"projectName",current:o}),a.a.createElement(S,{viewing:b,hovering:l,onHover:function(e){return s(e)},onClick:function(e){return c(e)},content:n,current:o,className:"colorPalette"}))},Q=n("1Jk9"),T=n("YgP1");t.default=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1];return a.a.createElement(i.a,null,a.a.createElement(o.a,{title:"Home"}),a.a.createElement(Q.a,null),a.a.createElement(D,{pullTrig:function(e){return n(e)},className:"main"}),a.a.createElement(T.a,{trig:t}))}},agze:function(e,t,n){e.exports=n.p+"static/coach-12a004d8a85715f6e77b9697b6bf3300.jpg"},l8Ye:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyBoZWlnaHQ9IjIwIiB3aWR0aD0iMjAiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQogICAgID4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LDBDMTE0LjgzNywwLDAsMTE0LjgzNywwLDI1NnMxMTQuODM3LDI1NiwyNTYsMjU2czI1Ni0xMTQuODM3LDI1Ni0yNTZTMzk3LjE2MywwLDI1NiwweiBNMzM1LjA4MywyNzEuMDgzDQoJCQlMMjI4LjQxNiwzNzcuNzQ5Yy00LjE2LDQuMTYtOS42MjEsNi4yNTEtMTUuMDgzLDYuMjUxYy01LjQ2MSwwLTEwLjkyMy0yLjA5MS0xNS4wODMtNi4yNTFjLTguMzQxLTguMzQxLTguMzQxLTIxLjgyNCwwLTMwLjE2NQ0KCQkJTDI4OS44MzUsMjU2bC05MS41ODQtOTEuNTg0Yy04LjM0MS04LjM0MS04LjM0MS0yMS44MjQsMC0zMC4xNjVzMjEuODI0LTguMzQxLDMwLjE2NSwwbDEwNi42NjcsMTA2LjY2Nw0KCQkJQzM0My40MjQsMjQ5LjI1OSwzNDMuNDI0LDI2Mi43NDEsMzM1LjA4MywyNzEuMDgzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"},ltBJ:function(e,t,n){e.exports=n.p+"static/laMer-4db5b4c4f192f2c5dd1392129efd1838.jpg"},ry71:function(e,t,n){},tIM4:function(e,t,n){},zYEW:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAAmJLR0QAAKqNIzIAAAAHdElNRQfkBBcRES7rpN1KAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA0LTIzVDE3OjE3OjQ2KzAwOjAwPLRXcgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNC0yM1QxNzoxNzo0NiswMDowME3p784AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAABwUlEQVRYR8XXyy4EQRiG4SZxCsJCInZOOxKuwVJsCWuuRCJcgTN3wVJYILFxuAFhJzYSJMOG9+to6en5Z6aquzrzJc+mp6qrZqar+q+2yD39WMAcZjCKQShveMQ9znCCdwTJCHbwiR9HanuASeROD9bxAWsQF9/YQhe8opk/wLppHpcYhlNm8QLrRkU8YxoNo29exuCJJ9T9JbpxC6tjSFcwnwk9cFaHMmyiKlpqrk/7KgZwnLrm6wsT+I/WudXQosGVdmitW21c7COOdjifTUbfXIMrRSahX7wP0crfBR8aNMQklpC7c4hJ7CG6SV3wdYRkEnqxbcNqV881otfUhTyyv8QhrHYWbXrxkrA+9JGdxB2sdlmVpFPo+NQZrf8LWv4QakeyPmwmxDLcRbScuuAqxOCyiJZtxSpaexHH5yahXkbxLphElZAKSKth1hpUjhd5HVcwhqqoerUal2EDNenABawOIalCrlumq2BU9Wp1DKFhUZpEpXMZk9DgU3DKEM5h3SgPr4NJEv1Pql6LvC3VVw9cJ3JnHNqufc6I2mS0zmuWWjY+r00VkPPQ8VzHN908ezzXwUbH81Nod22SKPoFPLrI6h+xX3gAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=component---src-pages-index-js-567a539f6aaa1bcc11bb.js.map