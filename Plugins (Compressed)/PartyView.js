(()=>{var e={247:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});const r=requireModule("node:fs"),i=requireModule("node-fetch"),l=async e=>{e+=".js";var t=__dirname.split("/");t.pop(),t.pop(),t=t.join("/")+"/plugins";let a=r.readFileSync(`${t}/${e}`,"utf8");a=a.split('version:"')[a.split('version:"').length-1].split('",')[0];const l=await i(`https://raw.githubusercontent.com/TBHGodPro/SolarStatsPlugins/main/Plugins%20(Compressed)/${e}`).then((e=>e.text()));if(!l||"404: Not Found"==l)return;const s=l.split('version:"')[l.split('version:"').length-1].split('",')[0];(function(e,t){if(e==t)return!1;const a=e.split(".").map((e=>parseInt(e))),r=t.split(".").map((e=>parseInt(e)));console.log(a,r);var i=0;for(const e of a){if(a[i]<r[i])return!0;i+=1}return!1})(a,s)&&setTimeout((()=>{Logger.info(`UPDATING PLUGIN FROM ${a} TO ${s}, PLEASE RESTART SOLAR STATS`),r.writeFile(`${t}/${e}`,l,{},(()=>{}))}),500)}}},t={};function a(r){var i=t[r];if(void 0!==i)return i.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,a),l.exports}a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{a(247).Z("PartyView");var e=[],t={};function r(e){return{uuid:e}}async function i(e){var a=t[e];return a||(a=player.connectedPlayers.find((t=>t.name==e))?.uuid),a||(a=(await fetch(`https://api.mojang.com/users/profiles/minecraft/${e}`)).id),a}var l=toolbox.getConfigSync().modules.PartyView;const s=new toolbox.Item(397);s.meta=3,s.displayName="§rParty View",s.lore=["","§7Use The Lunar Client Team View","§7Mod To See Your Party Members","","§7Current: §"+(l?"aEnabled":"cDisabled")];const n=new toolbox.PlayerModule("Party View","View Your Party Members With LC Team View",s,"PartyView");n.customCode=()=>{player.proxy.on("incoming",(async(a,l,s,o)=>{if("chat"==l.name){var p=JSON.parse(a.message);p.extra??=[];var u=[p.text,...p.extra.map((e=>e.text))].join("");if(u.endsWith("joined the party.")){c=(c=u.split(" ")).splice(c[0].startsWith("[")?1:0,c.length-(c[0].startsWith("[")?4:3)).join(" "),e.push(c);var d=await i(c);if(t[c]=d,n.enabled){if(!d)return;player.lcPlayer?.addTeammate(r(d))}}if(u.endsWith("left the party.")&&!u.startsWith("You")&&(c=(c=u.split(" ")).splice(c[0].startsWith("[")?1:0,c.length-(c[0].startsWith("[")?4:3)).join(" "),e=e.filter((e=>e!=c)),delete t[c],n.enabled)){if(!(d=await i(c)))return;player.lcPlayer?.removeTeammate(r(d))}if((u.includes("has disbanded the party!")||u.includes("You left the party."))&&(e=[],t={},player.lcPlayer?.removeAllTeammates()),u.includes("You have joined")&&u.includes("party!")&&setTimeout((()=>player.executeCommand("/party list")),1e3),u.includes("Party Leader:")&&(c=(c=u.split(" ")).splice(c[0].startsWith("[")?4:3,c.length-(c[0].startsWith("[")?5:4)).join(" "),e=[],player.lcPlayer?.removeAllTeammates(),e.push(c),d=await i(c),t[c]=d,n.enabled)){if(!d)return;player.lcPlayer?.addTeammate(r(d))}if(u.includes("Party Moderators:")||u.includes("Party Members:")){var m=u.split(" ");for(var c of(m=m.splice(2,m.length).join(" ").split("● ").map((e=>e.split(" ").splice(m[0].startsWith("[")?2:1,m.length-(m[0].startsWith("[")?2:1)).join(" "))),e.push(m),m))d=await i(c),t[c]=d;if(n.enabled)for(var c of m){if(!(d=await i(c)))return;player.lcPlayer?.addTeammate(r(d))}u.includes("Party Members:")&&(t=Object.keys(t).filter((t=>e.includes(t))).map((e=>t[e])))}u.includes("You are not currently in a party.")&&(e=[],t={},player.lcPlayer?.removeAllTeammates())}}))},n.onConfigChange=async t=>{if(l=t,n.enabled)for(var a of(player.lcPlayer?.removeAllTeammates(),e)){var s=await i(a);if(!s)return;player.lcPlayer?.addTeammate(r(s))}else player.lcPlayer?.removeAllTeammates()},n.onLocationUpdate=()=>{setTimeout((()=>{n.enabled&&(player.lcPlayer?.removeAllTeammates(),setTimeout((async()=>{for(var t of e){var a=await i(t);if(!a)return;player.lcPlayer?.addTeammate(r(a))}}),500))}),1e3)},player.listener.on("player_join",((t,a)=>{n.enabled&&e.includes(a)&&t&&player.lcPlayer?.addTeammate(r(t))})),registerPlayerModule(n),registerPlugin({name:"Party View",description:"View Your Party Members With LC Team View | `/ss`",version:"1.5.0",author:"TBHGodPro"})})()})();