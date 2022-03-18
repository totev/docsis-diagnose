import{d as y,s as L,r as b,a as B,o as c,c as N,u as f,p as S,b as T,e as i,f as t,g as l,t as u,h as H,F as z,i as O,j as V,k as _,w as v,l as C,m as F,n as U,q,v as j,x as E,y as G,z as K,A as W,B as X,U as R,C as Y,D as Q,E as Z,G as tt,H as et,I as st,J as ot}from"./vendor.b38dbac8.js";const nt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}};nt();var g=(s,e)=>{const a=s.__vccOpts||s;for(const[r,o]of e)a[r]=o;return a};const at=y({props:["docsisData"],setup(s){var n,d,m,w;const e=s,a=L([...(d=(n=e.docsisData)==null?void 0:n.downstream)!=null?d:[],...(w=(m=e.docsisData)==null?void 0:m.downstreamOfdm)!=null?w:[]],S("frequency")),r={title:{text:"Downstream values"},tooltip:{trigger:"axis"},xAxis:{type:"category",axisLabel:{formatter:"ch{value}"},data:a.map(p=>p.channelId)},yAxis:[{type:"value",axisLabel:{formatter:"{value} dBmV"},axisPointer:{snap:!0},position:"left"},{type:"value",axisLabel:{formatter:"{value} dB\xB5V"},axisPointer:{snap:!0},position:"right"}],series:[{data:a.map(p=>p.powerLevel),type:"line",name:"Power level",yAxisIndex:0},{data:a.map(p=>p.snr),type:"line",name:"SNR",yAxisIndex:1}]},o=b(r);return(p,I)=>{const x=B("v-chart");return c(),N(x,{class:"chart",option:f(o),autoresize:""},null,8,["option"])}}});var ct=g(at,[["__scopeId","data-v-6aae8945"]]);const rt=y({props:["docsisData"],setup(s){var n,d,m,w;const e=s,a=L([...(d=(n=e.docsisData)==null?void 0:n.upstream)!=null?d:[],...(w=(m=e.docsisData)==null?void 0:m.upstreamOfdma)!=null?w:[]],S("channelId")),r={title:{text:"Upstream values"},tooltip:{trigger:"axis"},xAxis:{type:"category",axisLabel:{formatter:"ch{value}"},data:a.map(p=>p.channelId)},yAxis:{type:"value",axisLabel:{formatter:"{value} dBmV"},axisPointer:{snap:!0},position:"left"},series:[{data:a.map(p=>p.powerLevel),type:"line",name:"Power level"}]},o=b(r);return(p,I)=>{const x=B("v-chart");return c(),N(x,{class:"chart",option:f(o),autoresize:""},null,8,["option"])}}});var it=g(rt,[["__scopeId","data-v-54e1827e"]]);const lt=s=>(O("data-v-9062a9b6"),s=s(),V(),s),dt=lt(()=>t("i",{class:"fa fa-shopping-cart fa-lg"},null,-1)),_t=["hidden"],ht=l("    "),ut=l(`
  `),pt=y({setup(s){const e=T(!0);return(a,r)=>(c(),i(z,null,[t("a",{class:"pure-button button-xsmall",onClick:r[0]||(r[0]=o=>e.value=!e.value)},[dt,l(" "+u(e.value?"Show":"Hide"),1)]),t("pre",{hidden:e.value},[ht,H(a.$slots,"default",{},void 0,!0),ut],8,_t)],64))}});var J=g(pt,[["__scopeId","data-v-9062a9b6"]]);const vt=t("h2",null,"Table representation",-1),mt={class:"pure-table-striped"},ft=t("thead",null,[t("tr",null,[t("th",null,"Channel ID"),t("th",null,"Channel type"),t("th",null,"Modulation"),t("th",null,"Power level in dBmV"),t("th",null,"Frequency"),t("th",null,"Signal to noise ratio (SNR) in dB\xB5V")])],-1),gt=t("tr",null,[t("td",{colspan:"7"},"Downstream")],-1),wt=t("tr",null,[t("td",{colspan:"7"},"Upstream")],-1),yt=y({props:["docsisData"],setup(s){var m,w,p,I,x,A,k,M;const e=s,a=L([...(w=(m=e.docsisData)==null?void 0:m.upstream)!=null?w:[],...(I=(p=e.docsisData)==null?void 0:p.upstreamOfdma)!=null?I:[]],S("channelId")),r=b(a),o=L([...(A=(x=e.docsisData)==null?void 0:x.downstream)!=null?A:[],...(M=(k=e.docsisData)==null?void 0:k.downstreamOfdm)!=null?M:[]],S("frequency")),n=b(o);function d($){return $.frequency?`${$.frequency}`:`${$.frequencyStart}-${$.frequencyEnd}`}return($,De)=>(c(),i(z,null,[vt,_(J,null,{default:v(()=>[t("table",mt,[ft,t("tbody",null,[gt,(c(!0),i(z,null,C(f(n),h=>(c(),i("tr",{key:h.channelId},[t("td",null,u(h.channelId),1),t("td",null,u(h.channelType),1),t("td",null,u(h.modulation),1),t("td",null,u(h.powerLevel),1),t("td",null,u(d(h)),1),t("td",null,u(h.snr),1)]))),128)),wt,(c(!0),i(z,null,C(f(r),h=>(c(),i("tr",{key:h.channelId},[t("td",null,u(h.channelId),1),t("td",null,u(h.channelType),1),t("td",null,u(h.modulation),1),t("td",null,u(h.powerLevel),1),t("td",null,u(d(h)),1),t("td",null,u(h.snr),1)]))),128))])])]),_:1})],64))}}),zt=t("h2",null,"JSON representation",-1),xt=y({props:["docsisData"],setup(s){return(e,a)=>(c(),i(z,null,[zt,_(J,null,{default:v(()=>[l(u(s.docsisData),1)]),_:1})],64))}});const $t=s=>(O("data-v-6f7ab943"),s=s(),V(),s),bt={class:"charts"},It={key:0},Dt={key:1},Ht=l(" No docsis data given :( Try the "),Lt=$t(()=>t("a",{href:"/#docsis=G3cTABwHjttchShw99mopQjZnlljpnx0e5Pd4L1jUoQSSLZ1WLr6-t_fayEIyn8z_97MSSvkfbxz4h1bqRQOUFtfUH62O4xd9ACDi33tkBQ3q0HZ_isCCXsng5_I5ebyfP1YkucKeAebu4iWkd4Gek800uQsY3Ahfdx3r6G4kCP3y1uS_H78CIuF9LFnBOCr2oEvRjCmbJuplCUBRK_DlC5Kh2fLkf1_UFs2OlEjBI7N2eC6HA2ZZuSkKwidXI2B5-MIDpmT5PRP59B0koYJTdgbYyLC0FM9wYJ0E09n65ESKsNmKzldRQoSem6O0Q_axmxWNd90goPKaTNDNwdtiXYycU8SWIULGmb-F3IKWFAxBTIaGXDlBumIznEpG1wXw6HnJNvSATv57HwYzXGzc6tA7WO4bJNgL6ArXD5Jbwk6w1MnGKvgKqpfKHHL0tB2kZLoIniA9QHGoisI_7tILIhHzdXaF3Dg9L39AfPN6P7TnS12EMrWGsXWSXVdvbdvv4ZAgbztj4TRW3eZ_6-dFpOyXrd8gPUqmWs12OTwxgshBQH0kAIgFhj4_rG0_xMdPGH_dbggH-A8L-b_TeYB2gje5RwNE-mjqWffmndO9opcKpe0K3hFn2rNYmjPazk"},"sample data",-1)),St=[Ht,Lt],At=y({setup(s){const e=b({docsisJson:""});function a(o){const n=j.parse(o);try{const d=E(G(n.docsis)),m=new TextDecoder().decode(d);e.docsisJson=JSON.parse(m)}catch(d){console.warn("No hash given",d)}}const r=()=>{a(location.hash)};return F(()=>{window.addEventListener("hashchange",r),r()}),U(()=>{window.removeEventListener("hashchange",r)}),(o,n)=>(c(),i("div",bt,[f(e).docsisJson?(c(),i("div",It,[_(ct,{docsisData:f(e).docsisJson},null,8,["docsisData"]),_(it,{docsisData:f(e).docsisJson},null,8,["docsisData"]),_(yt,{docsisData:f(e).docsisJson},null,8,["docsisData"]),_(xt,{docsisData:f(e).docsisJson},null,8,["docsisData"]),q(t("pre",null,"        "+u(f(e).docsisJson)+`
      `,513),[[K,!1]])])):(c(),i("div",Dt,St))]))}});var kt=g(At,[["__scopeId","data-v-6f7ab943"]]);const Mt={},Ct={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Bt=t("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),Nt=[Bt];function Ot(s,e){return c(),i("svg",Ct,Nt)}var Vt=g(Mt,[["render",Ot]]);const Jt={},Pt={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},Tt=t("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),Ft=[Tt];function Ut(s,e){return c(),i("svg",Pt,Ft)}var qt=g(Jt,[["render",Ut]]);const jt={},Et={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Gt=t("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),Kt=[Gt];function Wt(s,e){return c(),i("svg",Et,Kt)}var Xt=g(jt,[["render",Wt]]);const Rt={},Yt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Qt=t("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),Zt=[Qt];function te(s,e){return c(),i("svg",Yt,Zt)}var ee=g(Rt,[["render",te]]);const se={},oe={class:"item"},ne={class:"details"};function ae(s,e){return c(),i("div",oe,[t("i",null,[H(s.$slots,"icon",{},void 0,!0)]),t("div",ne,[t("h3",null,[H(s.$slots,"heading",{},void 0,!0)]),H(s.$slots,"default",{},void 0,!0)])])}var D=g(se,[["render",ae],["__scopeId","data-v-977bb0b6"]]);const ce=l("Usage"),re=l(" Follow the link generated by the "),ie=t("a",{target:"_blank",href:"http://github.com/totev/vodafone-station-cli"},"vodafone-station-cli tool",-1),le=l(" when ran with the "),de=t("i",null,"docsis -w",-1),_e=l(" option . It contains the docsis values in JSON. "),he=l("Data privacy"),ue=l(" All of the docsis data for plotting is being done in the browser, never leaves it and does not get collected. Feel free to inspect the code on "),pe=t("a",{target:"_blank",href:"http://github.com/totev/docsis-diagnose"},"GitHub",-1),ve=l("! "),me=l("Support"),fe=l(" If you have any ideas on how to better visualize the docsis data or have found a bug, please open an issue on either of the above projects GitHub pages. "),ge=l("Tooling"),we=l(" The charts on this site are created with "),ye=t("a",{href:"https://echarts.apache.org/",target:"blank"},"Apache ECharts",-1),ze=l(", the site itself with "),xe=t("a",{href:"https://vuejs.org",target:"blank"},"Vue.js",-1),$e=y({setup(s){return(e,a)=>(c(),i(z,null,[_(D,null,{icon:v(()=>[_(qt)]),heading:v(()=>[ce]),default:v(()=>[re,ie,le,de,_e]),_:1}),_(D,null,{icon:v(()=>[_(Vt)]),heading:v(()=>[he]),default:v(()=>[ue,pe,ve]),_:1}),_(D,null,{icon:v(()=>[_(Xt)]),heading:v(()=>[me]),default:v(()=>[fe]),_:1}),_(D,null,{icon:v(()=>[_(ee)]),heading:v(()=>[ge]),default:v(()=>[we,ye,ze,xe]),_:1})],64))}});const be={class:"wrapper"},Ie=y({setup(s){return(e,a)=>(c(),i(z,null,[t("header",null,[t("div",be,[_(kt)])]),t("main",null,[_($e)])],64))}});W([Y,Q,Z,tt,et,st,ot]);const P=X(Ie);P.component("v-chart",R);P.mount("#app");
