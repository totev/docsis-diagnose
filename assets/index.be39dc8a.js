import{d as z,s as H,r as $,a as O,o as c,c as T,u as f,p as L,b as l,e,F as b,f as N,g as B,h as P,t as h,i as V,j as U,k as u,w as j,l as p,q,m as J,n as E,v as G,x as A,y as v,z as K,A as W,U as X,B as R,C as Y,D as Q,E as Z,G as ee,H as te,I as se}from"./vendor.d42e0d6a.js";const oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}};oe();var g=(s,t)=>{const a=s.__vccOpts||s;for(const[d,o]of t)a[d]=o;return a};const ne=z({props:["docsisData"],setup(s){var n,r,m,y;const t=s,a=H([...(r=(n=t.docsisData)==null?void 0:n.downstream)!=null?r:[],...(y=(m=t.docsisData)==null?void 0:m.downstreamOfdm)!=null?y:[]],L("frequency")),d={title:{text:"Downstream values"},tooltip:{trigger:"axis"},xAxis:{type:"category",axisLabel:{formatter:"ch{value}"},data:a.map(_=>_.channelId)},yAxis:[{type:"value",axisLabel:{formatter:"{value} db"},axisPointer:{snap:!0},position:"left"},{type:"value",axisLabel:{formatter:"{value} db"},axisPointer:{snap:!0},position:"right"}],series:[{data:a.map(_=>_.powerLevel),type:"line",name:"Power level",yAxisIndex:0},{data:a.map(_=>_.snr),type:"line",name:"SNR",yAxisIndex:1}]},o=$(d);return(_,I)=>{const w=O("v-chart");return c(),T(w,{class:"chart",option:f(o),autoresize:""},null,8,["option"])}}});var ae=g(ne,[["__scopeId","data-v-5ac23b9d"]]);const ce=z({props:["docsisData"],setup(s){var n,r,m,y;const t=s,a=H([...(r=(n=t.docsisData)==null?void 0:n.upstream)!=null?r:[],...(y=(m=t.docsisData)==null?void 0:m.upstreamOfdma)!=null?y:[]],L("channelId")),d={title:{text:"Upstream values"},tooltip:{trigger:"axis"},xAxis:{type:"category",axisLabel:{formatter:"ch{value}"},data:a.map(_=>_.channelId)},yAxis:{type:"value",axisLabel:{formatter:"{value} db"},axisPointer:{snap:!0},position:"left"},series:[{data:a.map(_=>_.powerLevel),type:"line",name:"Power level"}]},o=$(d);return(_,I)=>{const w=O("v-chart");return c(),T(w,{class:"chart",option:f(o),autoresize:""},null,8,["option"])}}});var re=g(ce,[["__scopeId","data-v-47195aca"]]);const S=s=>(B("data-v-4c28ad44"),s=s(),P(),s),ie=S(()=>e("h2",null,"Table representation",-1)),le={class:"pure-table-striped"},de=S(()=>e("thead",null,[e("tr",null,[e("th",null,"Channel ID"),e("th",null,"Channel type"),e("th",null,"Modulation"),e("th",null,"Power level in dBmV"),e("th",null,"Frequency"),e("th",null,"Signal to noise ratio (SNR)")])],-1)),_e=S(()=>e("tr",null,[e("td",{colspan:"7"},"Downstream")],-1)),he=S(()=>e("tr",null,[e("td",{colspan:"7"},"Upstream")],-1)),ue=z({props:["docsisData"],setup(s){var m,y,_,I,w,M,k,C;const t=s,a=H([...(y=(m=t.docsisData)==null?void 0:m.upstream)!=null?y:[],...(I=(_=t.docsisData)==null?void 0:_.upstreamOfdma)!=null?I:[]],L("channelId")),d=$(a),o=H([...(M=(w=t.docsisData)==null?void 0:w.downstream)!=null?M:[],...(C=(k=t.docsisData)==null?void 0:k.downstreamOfdm)!=null?C:[]],L("frequency")),n=$(o);function r(x){return x.frequency?`${x.frequency}`:`${x.frequencyStart}-${x.frequencyEnd}`}return(x,gt)=>(c(),l(b,null,[ie,e("table",le,[de,e("tbody",null,[_e,(c(!0),l(b,null,N(f(n),i=>(c(),l("tr",{key:i.channelId},[e("td",null,h(i.channelId),1),e("td",null,h(i.channelType),1),e("td",null,h(i.modulation),1),e("td",null,h(i.powerLevel),1),e("td",null,h(r(i)),1),e("td",null,h(i.snr),1)]))),128)),he,(c(!0),l(b,null,N(f(d),i=>(c(),l("tr",{key:i.channelId},[e("td",null,h(i.channelId),1),e("td",null,h(i.channelType),1),e("td",null,h(i.modulation),1),e("td",null,h(i.powerLevel),1),e("td",null,h(r(i)),1),e("td",null,h(i.snr),1)]))),128))])])],64))}});var pe=g(ue,[["__scopeId","data-v-4c28ad44"]]);const ve=s=>(B("data-v-724653c1"),s=s(),P(),s),me={class:"charts"},fe={key:0},ge={key:1},ye=p(" No docsis data given :( Try the "),we=ve(()=>e("a",{href:"/#docsis=G3cTABwHjttchShw99mopQjZnlljpnx0e5Pd4L1jUoQSSLZ1WLr6-t_fayEIyn8z_97MSSvkfbxz4h1bqRQOUFtfUH62O4xd9ACDi33tkBQ3q0HZ_isCCXsng5_I5ebyfP1YkucKeAebu4iWkd4Gek800uQsY3Ahfdx3r6G4kCP3y1uS_H78CIuF9LFnBOCr2oEvRjCmbJuplCUBRK_DlC5Kh2fLkf1_UFs2OlEjBI7N2eC6HA2ZZuSkKwidXI2B5-MIDpmT5PRP59B0koYJTdgbYyLC0FM9wYJ0E09n65ESKsNmKzldRQoSem6O0Q_axmxWNd90goPKaTNDNwdtiXYycU8SWIULGmb-F3IKWFAxBTIaGXDlBumIznEpG1wXw6HnJNvSATv57HwYzXGzc6tA7WO4bJNgL6ArXD5Jbwk6w1MnGKvgKqpfKHHL0tB2kZLoIniA9QHGoisI_7tILIhHzdXaF3Dg9L39AfPN6P7TnS12EMrWGsXWSXVdvbdvv4ZAgbztj4TRW3eZ_6-dFpOyXrd8gPUqmWs12OTwxgshBQH0kAIgFhj4_rG0_xMdPGH_dbggH-A8L-b_TeYB2gje5RwNE-mjqWffmndO9opcKpe0K3hFn2rNYmjPazk"}," sample data ",-1)),ze=[ye,we],xe=z({setup(s){const t=$({docsisJson:""});function a(o){const n=q.parse(o);try{const r=J(E(n.docsis)),m=new TextDecoder().decode(r);console.log("json:",m),t.docsisJson=JSON.parse(m)}catch(r){console.warn("No hash given",r)}}const d=()=>{a(location.hash)};return V(()=>{window.addEventListener("hashchange",d),d()}),U(()=>{window.removeEventListener("hashchange",d)}),(o,n)=>(c(),l("div",me,[f(t).docsisJson?(c(),l("div",fe,[u(ae,{docsisData:f(t).docsisJson},null,8,["docsisData"]),u(re,{docsisData:f(t).docsisJson},null,8,["docsisData"]),u(pe,{docsisData:f(t).docsisJson},null,8,["docsisData"]),j(e("pre",null,"        "+h(f(t).docsisJson)+`
      `,513),[[G,!1]])])):(c(),l("div",ge,ze))]))}});var be=g(xe,[["__scopeId","data-v-724653c1"]]);const $e={},Ie={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},De=e("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),He=[De];function Le(s,t){return c(),l("svg",Ie,He)}var Se=g($e,[["render",Le]]);const Ae={},Me={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},ke=e("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),Ce=[ke];function Ne(s,t){return c(),l("svg",Me,Ce)}var Oe=g(Ae,[["render",Ne]]);const Te={},Be={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Pe=e("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),Fe=[Pe];function Ve(s,t){return c(),l("svg",Be,Fe)}var Ue=g(Te,[["render",Ve]]);const je={},qe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Je=e("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),Ee=[Je];function Ge(s,t){return c(),l("svg",qe,Ee)}var Ke=g(je,[["render",Ge]]);const We={},Xe={class:"item"},Re={class:"details"};function Ye(s,t){return c(),l("div",Xe,[e("i",null,[A(s.$slots,"icon",{},void 0,!0)]),e("div",Re,[e("h3",null,[A(s.$slots,"heading",{},void 0,!0)]),A(s.$slots,"default",{},void 0,!0)])])}var D=g(We,[["render",Ye],["__scopeId","data-v-977bb0b6"]]);const Qe=p("Usage"),Ze=p(" Follow the link generated by the "),et=e("a",{target:"_blank",href:"http://github.com/totev/vodafone-station-cli"},"vodafone-station-cli tool",-1),tt=p(" when ran with the "),st=e("i",null,"docsis -w",-1),ot=p(" option . It contains the docsis values in JSON. "),nt=p("Data privacy"),at=p(" All of the docsis data for plotting is being done in the browser, never leaves it and does not get collected. Feel free to inspect the code on "),ct=e("a",{target:"_blank",href:"http://github.com/totev/docsis-diagnose"},"GitHub",-1),rt=p("! "),it=p("Support"),lt=p(" If you have any ideas on how to better visualize the docsis data or have found a bug, please open an issue on either of the above projects GitHub pages. "),dt=p("Tooling"),_t=p(" The charts on this site are created with "),ht=e("a",{href:"https://echarts.apache.org/",target:"blank"},"Apache ECharts",-1),ut=p(", the site itself with "),pt=e("a",{href:"https://vuejs.org",target:"blank"},"Vue.js",-1),vt=z({setup(s){return(t,a)=>(c(),l(b,null,[u(D,null,{icon:v(()=>[u(Oe)]),heading:v(()=>[Qe]),default:v(()=>[Ze,et,tt,st,ot]),_:1}),u(D,null,{icon:v(()=>[u(Se)]),heading:v(()=>[nt]),default:v(()=>[at,ct,rt]),_:1}),u(D,null,{icon:v(()=>[u(Ue)]),heading:v(()=>[it]),default:v(()=>[lt]),_:1}),u(D,null,{icon:v(()=>[u(Ke)]),heading:v(()=>[dt]),default:v(()=>[_t,ht,ut,pt]),_:1})],64))}});const mt={class:"wrapper"},ft=z({setup(s){return(t,a)=>(c(),l(b,null,[e("header",null,[e("div",mt,[u(be)])]),e("main",null,[u(vt)])],64))}});K([R,Y,Q,Z,ee,te,se]);const F=W(ft);F.component("v-chart",X);F.mount("#app");
