(()=>{var e={247:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const r=requireModule("node:fs"),n=requireModule("node-fetch"),a=async e=>{e+=".js";var t=__dirname.split("/");t.pop(),t.pop(),t=t.join("/")+"/plugins";let o=r.readFileSync(`${t}/${e}`,"utf8");o=o.split('version:"')[o.split('version:"').length-1].split('",')[0];const a=await n(`https://raw.githubusercontent.com/TBHGodPro/SolarStatsPlugins/main/Plugins%20(Compressed)/${e}`).then((e=>e.text())),s=a.split('version:"')[a.split('version:"').length-1].split('",')[0];(function(e,t){if(e==t)return!1;const o=e.split(".").map((e=>parseInt(e))),r=t.split(".").map((e=>parseInt(e)));console.log(o,r);var n=0;for(const e of o){if(o[n]<r[n])return!0;n+=1}return!1})(o,s)&&setTimeout((()=>{Logger.info(`UPDATING PLUGIN FROM ${o} TO ${s}, PLEASE RESTART SOLAR STATS`),r.writeFile(`${t}/${e}`,a,{},(()=>{}))}),500)}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{o(247).Z("LCStaffMods");const e=new toolbox.Item(4);e.displayName="§5§lLC §r§fStaff Mods §7(X-RAY)",e.lore=["","§7Enable §fStaff Mods §7For §5Lunar Client","","§7Current: §"+(toolbox.getConfigSync().modules.staffMods?"aEnabled":"cDisabled")];const t=new toolbox.PlayerModule("LC Staff Mods (X-RAY)","Enable Staff Mods For Lunar Client",e,"staffMods");t.customCode=async()=>{t.enabled&&player.lcPlayer?.setStaffModState("XRAY",!0)},t.onConfigChange=e=>{e?(player.lcPlayer?.sendNotification("Enabled Staff Mods",1e3,"info"),player.lcPlayer?.setStaffModState("XRAY",!0)):(player.lcPlayer?.sendNotification("Disabled Staff Mods",1e3,"info"),player.lcPlayer?.setStaffModState("XRAY",!1))},registerPlayerModule(t),registerPlugin({name:"LC Staff Mods (X-RAY)",description:"Enable Staff Mods For Lunar Client | `/ss`",version:"1.1.0",author:"TBHGodPro"})})()})();