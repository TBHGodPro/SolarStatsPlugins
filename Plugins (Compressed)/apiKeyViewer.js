(()=>{var e={247:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});const r=requireModule("node:fs"),n=requireModule("node-fetch"),i=async e=>{e+=".js";var t=__dirname.split("/");t.pop(),t.pop(),t=t.join("/")+"/plugins";let o=r.readFileSync(`${t}/${e}`,"utf8");o=o.split('version:"')[o.split('version:"').length-1].split('",')[0];const i=await n(`https://raw.githubusercontent.com/TBHGodPro/SolarStatsPlugins/main/Plugins%20(Compressed)/${e}`).then((e=>e.text()));if(!i||"404: Not Found"==i)return;const s=i.split('version:"')[i.split('version:"').length-1].split('",')[0];(function(e,t){if(e==t)return!1;const o=e.split(".").map((e=>parseInt(e))),r=t.split(".").map((e=>parseInt(e)));console.log(o,r);var n=0;for(const e of o){if(o[n]<r[n])return!0;n+=1}return!1})(o,s)&&setTimeout((()=>{Logger.info(`UPDATING PLUGIN FROM ${o} TO ${s}, PLEASE RESTART SOLAR STATS`),r.writeFile(`${t}/${e}`,i,{},(()=>{}))}),500)}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{o(247).Z("apiKeyViewer");const{getConfig:e,Command:t}=toolbox,r=new t("api",[],[]);r.onTriggered=async()=>{var{apiKey:t}=await e(),o={text:`§aYour API Key is\n§b${t}`,clickEvent:{action:"suggest_command",value:t},hoverEvent:{action:"show_text",value:"§eClick to put key in chat so you can copy!"}};player.client.write("chat",{message:JSON.stringify(o)})},registerCommand(r),registerPlugin({name:"API Key Viewer",description:".. what do you think dumbass | `/api`",version:"1.1.0",author:"TBHGodPro"})})()})();