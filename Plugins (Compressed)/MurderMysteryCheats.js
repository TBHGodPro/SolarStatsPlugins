(()=>{var e={852:(e,r,t)=>{const n=t(293),o=t(465),i=t(508);e.exports=async function(){const e=new toolbox.Item(261);e.displayName="§fMurder Mystery Cheats",e.lore=["","§7Set of cheats for Murder Mystery,","§7includes nametags and murder finder!","","§7Current: §"+((await toolbox.getConfig()).modules.murderMysteryCheats?"aEnabled":"cDisabled")];const r=new toolbox.PlayerModule("MurderMysteryCheats","Set a cheats for Murder Mystery",e,"murderMysteryCheats");r.murderMysteryEnabled=!1,r.currentRole="",r.onLocationUpdate=async()=>{r.currentRole="",r.murderMysteryEnabled=!!(await toolbox.getConfig()).modules.murderMysteryCheats&&player.isInGameMode("MURDER_")};const t=[o(r),n(r),i(r)];r.customCode=()=>{for(const e of t)e[0]()},r.onDisconnect=()=>{for(const e of t)e[1]()},registerPlayerModule(r)}},293:e=>{e.exports=function(e){const r=[267,272,256,280,271,268,32,273,369,277,406,400,285,260,421,19,398,352,391,396,357,279,175,409,364,405,366,283,276,293,359,349,351,333,382,340,2256,2257,2258,2259,2260,2261,2262,2263,2264,2265,2266,2267],t=(t,n)=>{if("entity_equipment"!==n.name)return;const o=t.item;if(e.murderMysteryEnabled&&261===t.item?.blockId){const r=player.connectedPlayers.find((e=>e.entityId===t.entityId));if(!r)return;"murderer"===e.currentRole&&(player.sendMessage(`§3§l${r.name} has a bow!`),player.lcPlayer.sendNotification(`${r.name} has a bow!`,1e3,"warning"),player.lcPlayer.addTeammate({uuid:r.uuid}))}if(e.murderMysteryEnabled&&r.includes(o.blockId)){const r=player.connectedPlayers.find((e=>e.entityId===t.entityId));if(!r)return;"innoncent"!==e.currentRole&&"detective"!==e.currentRole||(player.sendMessage(`§c§l${r.name} is a murderer!`),player.lcPlayer.sendNotification(`${r.name} is a murderer!`,1e3,"warning"),player.lcPlayer.addTeammate({uuid:r.uuid}))}};return[()=>{player.proxy.on("incoming",t)},()=>{player.proxy.removeListener("incoming",t)}]}},465:e=>{e.exports=function(e){const r=(r,t,n)=>{"scoreboard_team"===t.name&&e.murderMysteryEnabled&&2===r.mode&&"never"===r.nameTagVisibility&&n.write("scoreboard_team",{...r,nameTagVisibility:"always"})};return[()=>{player.proxy.on("incoming",r)},()=>{player.proxy.removeListener("incoming",r)}]}},508:e=>{e.exports=function(e){const r=(r,t)=>{if("scoreboard_team"!==t.name)return;if(""!==e.currentRole&&!r.prefix?.includes("Role: "))return;r.prefix?.includes("Murderer")&&(e.currentRole="murderer",player.sendMessage("Role murderer detected!\nOnly showing players with bows in the chat and in the TeamsViewMod!"));const n=r.prefix?.includes("Innocent");(n||r.prefix?.includes("Detective"))&&(e.currentRole=n?"innoncent":"detective",player.sendMessage("Role innoncent/detective detected!\nOnly showing murderer in the chat and in the TeamsView mod!"))};return[()=>{player.proxy.on("incoming",r)},()=>{player.proxy.removeListener("incoming",r)}]}},94:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});const n=requireModule("node:fs"),o=requireModule("node-fetch"),i=async e=>{e+=".js";var r=__dirname.split("/");r.pop(),r.pop(),r=r.join("/")+"/plugins";let t=n.readFileSync(`${r}/${e}`,"utf8");t=t.split('version:"')[t.split('version:"').length-1].split('",')[0];const i=await o(`https://raw.githubusercontent.com/TBHGodPro/SolarStatsPlugins/main/Plugins%20(Compressed)/${e}`).then((e=>e.text()));if(!i||"404: Not Found"==i)return;const s=i.split('version:"')[i.split('version:"').length-1].split('",')[0];(function(e,r){if(e==r)return!1;const t=e.split(".").map((e=>parseInt(e))),n=r.split(".").map((e=>parseInt(e)));console.log(t,n);var o=0;for(const e of t){if(t[o]<n[o])return!0;o+=1}return!1})(t,s)&&setTimeout((()=>{Logger.info(`UPDATING PLUGIN FROM ${t} TO ${s}, PLEASE RESTART SOLAR STATS`),n.writeFile(`${r}/${e}`,i,{},(()=>{}))}),500)}}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t(94).Z("MurderMysteryCheats"),t(852)(),registerPlugin({name:"MurderMysteryCheats (Credit: RichardDorian)",description:"Set of cheats for Murder Mystery (Credit: RichardDorian) | `/ss`",version:"1.1.0",author:"RichardDorian"})})();