(()=>{var e={247:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const r=requireModule("node:fs"),i=requireModule("node-fetch"),n=async e=>{e+=".js";var t=__dirname.split("/");t.pop(),t.pop(),t=t.join("/")+"/plugins";let o=r.readFileSync(`${t}/${e}`,"utf8");o=o.split('version:"')[o.split('version:"').length-1].split('",')[0];const n=await i(`https://raw.githubusercontent.com/TBHGodPro/SolarStatsPlugins/main/Plugins%20(Compressed)/${e}`).then((e=>e.text())),s=n.split('version:"')[n.split('version:"').length-1].split('",')[0];(function(e,t){if(e==t)return!1;const o=e.split(".").map((e=>parseInt(e))),r=t.split(".").map((e=>parseInt(e)));console.log(o,r);var i=0;for(const e of o){if(o[i]<r[i])return!0;i+=1}return!1})(o,s)&&setTimeout((()=>{Logger.info(`UPDATING PLUGIN FROM ${o} TO ${s}, PLEASE RESTART SOLAR STATS`),r.writeFile(`${t}/${e}`,n,{},(()=>{}))}),500)}}},t={};function o(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{o(247).Z("apiKeyViewer");const{getConfig:e,Command:t}=toolbox,r=new t("api",[],[]);r.onTriggered=async()=>{var{apiKey:t}=await e(),o={text:`§aYour API Key is\n§b${t}`,clickEvent:{action:"suggest_command",value:t},hoverEvent:{action:"show_text",value:"§eClick to put key in chat so you can copy!"}};player.client.write("chat",{message:JSON.stringify(o)})},registerCommand(r),registerPlugin({name:"API Key Viewer",description:".. what do you think dumbass | `/api`",version:"1.1.0",author:"TBHGodPro"})})()})();