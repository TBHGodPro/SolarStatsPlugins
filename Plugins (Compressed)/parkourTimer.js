(()=>{var e={247:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n});const o=requireModule("node:fs"),n=async e=>{e+=".js";var r=__dirname.split("/");r.pop(),r.pop(),r=r.join("/")+"/plugins";let t=o.readFileSync(`${r}/${e}`,"utf8");t=t.split('version:"')[t.split('version:"').length-1].split('",')[0];const n=await fetch(`https://raw.githubusercontent.com/TBHGodPro/SolarStatsPlugins/main/Plugins%20(Compressed)/${e}`);if(!n||"404: Not Found"==n)return;const i=n.split('version:"')[n.split('version:"').length-1].split('",')[0];(function(e,r){if(e==r)return!1;const t=e.split(".").map((e=>parseInt(e))),o=r.split(".").map((e=>parseInt(e)));console.log(t,o);var n=0;for(const e of t){if(t[n]<o[n])return!0;n+=1}return!1})(t,i)&&setTimeout((()=>{Logger.info(`UPDATING PLUGIN FROM ${t} TO ${i}, PLEASE RESTART SOLAR STATS`),o.writeFile(`${r}/${e}`,n,{},(()=>{}))}),500)}}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var i=r[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{t(247).Z("parkourTimer");const{Command:e}=toolbox,r=new e("reset",[],["pr"]);var o=null;function n(e){var r=Math.floor(e/6e4).toString();e-=6e4*r;var t=Math.floor(e/1e3).toString();return e=(e-1e3*t).toString(),1==r.length&&(r="0"+r),1==t.length&&(t="0"+t),2==e.length&&(e="0"+e),1==e.length&&(e="00"+e),`§a${r}§f:§a${t}§f.§a${e}`}r.onTriggered=()=>{player.executeCommand("/parkour reset"),o=null},registerCommand(r),player.proxy.on("incoming",((e,r)=>{if("chat"==r.name&&0==e.position){var{message:t}=e;t=JSON.parse(t),t.extra??=[],((t=[t.text,...t.extra.map((e=>e.text))].join("")).includes("Parkour challenge started!")||t.includes("Reset your timer to 00:00!"))&&(o=Date.now()),(t.includes("cancelled")||t.includes("failed")||t.includes("completed")||t.includes("record"))&&(o=null)}})),setInterval((()=>{if(o){var e=Date.now()-o;player.client?.write("chat",{message:JSON.stringify({text:n(e)}),position:2})}}),50),registerPlugin({name:"Parkour Timer",description:"Live Timer For Parkour | `/pr` `/reset`",version:"1.2.0",author:"TBHGodPro"})})()})();