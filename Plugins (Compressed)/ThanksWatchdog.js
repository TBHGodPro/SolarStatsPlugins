(()=>{var t={247:(t,e,o)=>{"use strict";o.d(e,{Z:()=>s});const r=requireModule("node:fs"),n=requireModule("node-fetch"),s=async t=>{t+=".js";var e=__dirname.split("/");e.pop(),e.pop(),e=e.join("/")+"/plugins";let o=r.readFileSync(`${e}/${t}`,"utf8");o=o.split('version:"')[o.split('version:"').length-1].split('",')[0];const s=await n(`https://raw.githubusercontent.com/TBHGodPro/SolarStatsPlugins/main/Plugins%20(Compressed)/${t}`).then((t=>t.text()));if(!s||"404: Not Found"==s)return;const i=s.split('version:"')[s.split('version:"').length-1].split('",')[0];(function(t,e){if(t==e)return!1;const o=t.split(".").map((t=>parseInt(t))),r=e.split(".").map((t=>parseInt(t)));console.log(o,r);var n=0;for(const t of o){if(o[n]<r[n])return!0;n+=1}return!1})(o,i)&&setTimeout((()=>{Logger.info(`UPDATING PLUGIN FROM ${o} TO ${i}, PLEASE RESTART SOLAR STATS`),r.writeFile(`${e}/${t}`,s,{},(()=>{}))}),500)}}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,o),s.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o(247).Z("ThanksWatchdog"),player.proxy.on("incoming",((t,e,o,r)=>{if("chat"==e.name){var n=JSON.parse(t.message);n.extra??=[],(n=[n.text,...n.extra.map((t=>t.text))].join("")).match(/watchdog/gi)&&!n.includes("Thanks Watchdog")&&r.write("chat",{message:`Thanks Watchdog${"!".repeat(Math.ceil(3*Math.random()))}`})}})),registerPlugin({name:"Thanks Watchdog!",description:"Thank Watchdog For Absolutely Nothing :P",version:"1.1.0",author:"TBHGodPro"})})();