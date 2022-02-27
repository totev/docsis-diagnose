import{d as g,s as b,r as x,a as $,o as h,c as H,u as m,p as C,b as D,e as M,f as p,g as d,w as S,h as a,t as k,i as r,j as N,k as O,q as B,l as P,m as V,v as j,n as y,x as l,F as L,y as F,z as T,U as G,A as J,B as U,C as E,D as K,E as W,G as X,H as Y}from"./vendor.d35227e3.js";const q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}};q();var v=(s,e)=>{const n=s.__vccOpts||s;for(const[i,t]of e)n[i]=t;return n};const Q=g({props:["docsisData"],setup(s){var o,c,u,f;const e=s,n=b([...(c=(o=e.docsisData)==null?void 0:o.downstream)!=null?c:[],...(f=(u=e.docsisData)==null?void 0:u.downstreamOfdm)!=null?f:[]],C("frequency")),i={title:{text:"Downstream values"},tooltip:{trigger:"axis"},xAxis:{type:"category",axisLabel:{formatter:"ch{value}"},data:n.map(_=>_.channelId)},yAxis:[{type:"value",axisLabel:{formatter:"{value} db"},axisPointer:{snap:!0},position:"left"},{type:"value",axisLabel:{formatter:"{value} db"},axisPointer:{snap:!0},position:"right"}],series:[{data:n.map(_=>_.powerLevel),type:"line",name:"Power level",yAxisIndex:0},{data:n.map(_=>_.snr),type:"line",name:"SNR",yAxisIndex:1}]},t=x(i);return(_,A)=>{const z=$("v-chart");return h(),H(z,{class:"chart",option:m(t),autoresize:""},null,8,["option"])}}});var R=v(Q,[["__scopeId","data-v-5ac23b9d"]]);const Z=g({props:["docsisData"],setup(s){var o,c,u,f;const e=s,n=b([...(c=(o=e.docsisData)==null?void 0:o.upstream)!=null?c:[],...(f=(u=e.docsisData)==null?void 0:u.upstreamOfdma)!=null?f:[]],C("channelId")),i={title:{text:"Upstream values"},tooltip:{trigger:"axis"},xAxis:{type:"category",axisLabel:{formatter:"ch{value}"},data:n.map(_=>_.channelId)},yAxis:{type:"value",axisLabel:{formatter:"{value} db"},axisPointer:{snap:!0},position:"left"},series:[{data:n.map(_=>_.powerLevel),type:"line",name:"Power level"}]},t=x(i);return(_,A)=>{const z=$("v-chart");return h(),H(z,{class:"chart",option:m(t),autoresize:""},null,8,["option"])}}});var ee=v(Z,[["__scopeId","data-v-47195aca"]]);const te=s=>(N("data-v-32dc8bd0"),s=s(),O(),s),se={class:"charts"},oe={key:0},ae={key:1},ne=r(" No docsis data given :( Try the "),ce=te(()=>a("a",{href:"/#docsis=G3cTABwHjttchShw99mopQjZnlljpnx0e5Pd4L1jUoQSSLZ1WLr6-t_fayEIyn8z_97MSSvkfbxz4h1bqRQOUFtfUH62O4xd9ACDi33tkBQ3q0HZ_isCCXsng5_I5ebyfP1YkucKeAebu4iWkd4Gek800uQsY3Ahfdx3r6G4kCP3y1uS_H78CIuF9LFnBOCr2oEvRjCmbJuplCUBRK_DlC5Kh2fLkf1_UFs2OlEjBI7N2eC6HA2ZZuSkKwidXI2B5-MIDpmT5PRP59B0koYJTdgbYyLC0FM9wYJ0E09n65ESKsNmKzldRQoSem6O0Q_axmxWNd90goPKaTNDNwdtiXYycU8SWIULGmb-F3IKWFAxBTIaGXDlBumIznEpG1wXw6HnJNvSATv57HwYzXGzc6tA7WO4bJNgL6ArXD5Jbwk6w1MnGKvgKqpfKHHL0tB2kZLoIniA9QHGoisI_7tILIhHzdXaF3Dg9L39AfPN6P7TnS12EMrWGsXWSXVdvbdvv4ZAgbztj4TRW3eZ_6-dFpOyXrd8gPUqmWs12OTwxgshBQH0kAIgFhj4_rG0_xMdPGH_dbggH-A8L-b_TeYB2gje5RwNE-mjqWffmndO9opcKpe0K3hFn2rNYmjPazk"}," sample data ",-1)),re=[ne,ce],ie=g({setup(s){const e=x({docsisJson:""});function n(t){const o=B.parse(t);try{const c=P(V(o.docsis)),u=new TextDecoder().decode(c);console.log("json:",u),e.docsisJson=JSON.parse(u)}catch(c){console.warn("No hash given",c)}}const i=()=>{n(location.hash)};return D(()=>{window.addEventListener("hashchange",i),i()}),M(()=>{window.removeEventListener("hashchange",i)}),(t,o)=>(h(),p("div",se,[m(e).docsisJson?(h(),p("div",oe,[d(R,{docsisData:m(e).docsisJson},null,8,["docsisData"]),d(ee,{docsisData:m(e).docsisJson},null,8,["docsisData"]),S(a("pre",null,"        "+k(m(e).docsisJson)+`
      `,513),[[j,!1]])])):(h(),p("div",ae,re))]))}});var le=v(ie,[["__scopeId","data-v-32dc8bd0"]]);const de={},he={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},_e=a("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),pe=[_e];function ue(s,e){return h(),p("svg",he,pe)}var ve=v(de,[["render",ue]]);const me={},fe={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},ge=a("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),we=[ge];function ze(s,e){return h(),p("svg",fe,we)}var ye=v(me,[["render",ze]]);const xe={},be={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},$e=a("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),He=[$e];function Ce(s,e){return h(),p("svg",be,He)}var Le=v(xe,[["render",Ce]]);const Ie={},Ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},De=a("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),Me=[De];function Se(s,e){return h(),p("svg",Ae,Me)}var ke=v(Ie,[["render",Se]]);const Ne={},Oe={class:"item"},Be={class:"details"};function Pe(s,e){return h(),p("div",Oe,[a("i",null,[y(s.$slots,"icon",{},void 0,!0)]),a("div",Be,[a("h3",null,[y(s.$slots,"heading",{},void 0,!0)]),y(s.$slots,"default",{},void 0,!0)])])}var w=v(Ne,[["render",Pe],["__scopeId","data-v-977bb0b6"]]);const Ve=r("Usage"),je=r(" Follow the link generated by the "),Fe=a("a",{target:"_blank",href:"http://github.com/totev/vodafone-station-cli"},"vodafone-station-cli tool",-1),Te=r(" when ran with the "),Ge=a("i",null,"docsis -w",-1),Je=r(" option . It contains the docsis values in JSON. "),Ue=r("Data privacy"),Ee=r(" All of the docsis data for plotting is being done in the browser, never leaves it and does not get collected. Feel free to inspect the code on "),Ke=a("a",{target:"_blank",href:"http://github.com/totev/smmwio"},"GitHub",-1),We=r("! "),Xe=r("Support"),Ye=r(" If you have any ideas on how to better visualize the docsis data or have found a bug, please open an issue on either of the above projects GitHub pages. "),qe=r("Tooling"),Qe=r(" The charts on this site are created with "),Re=a("a",{href:"https://echarts.apache.org/",target:"blank"},"Apache ECharts",-1),Ze=r(", the site itself with "),et=a("a",{href:"https://vuejs.org",target:"blank"},"Vue.js",-1),tt=g({setup(s){return(e,n)=>(h(),p(L,null,[d(w,null,{icon:l(()=>[d(ye)]),heading:l(()=>[Ve]),default:l(()=>[je,Fe,Te,Ge,Je]),_:1}),d(w,null,{icon:l(()=>[d(ve)]),heading:l(()=>[Ue]),default:l(()=>[Ee,Ke,We]),_:1}),d(w,null,{icon:l(()=>[d(Le)]),heading:l(()=>[Xe]),default:l(()=>[Ye]),_:1}),d(w,null,{icon:l(()=>[d(ke)]),heading:l(()=>[qe]),default:l(()=>[Qe,Re,Ze,et]),_:1})],64))}});const st={class:"wrapper"},ot=g({setup(s){return(e,n)=>(h(),p(L,null,[a("header",null,[a("div",st,[d(le)])]),a("main",null,[d(tt)])],64))}});F([J,U,E,K,W,X,Y]);const I=T(ot);I.component("v-chart",G);I.mount("#app");