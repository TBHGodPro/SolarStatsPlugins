(()=>{const e=requireModule("node-fetch");var a=[],t={};function r(e){return{uuid:e}}async function i(a){var r=t[a];return r||(r=player.connectedPlayers.find((e=>e.name==a))?.uuid),r||(r=(await(async(a,t)=>{var r=await e(a,void 0);r=await r.text();try{r=JSON.parse(r)}catch{}return r})(`https://api.mojang.com/users/profiles/minecraft/${a}`)).id),r}var l=null,s=toolbox.getConfigSync();const o=new toolbox.Item(4);o.displayName="§rParty View",o.lore=["","§7Use The Lunar Client Team View","§7Mod To See Your Party Members","","§7Current: §"+(s.modules.PartyView?"aEnabled":"cDisabled")];const n=new toolbox.PlayerModule("Party View","View Your Party Members With LC Team View",o,"PartyView");n.customCode=()=>{player.proxy.on("incoming",(async(e,l,o,n)=>{if("chat"==l.name){var y=JSON.parse(e.message);y.extra??=[];var m=[y.text,...y.extra.map((e=>e.text))].join("");if(m.endsWith("joined the party.")){c=(c=m.split(" ")).splice(c[0].startsWith("[")?1:0,c.length-(c[0].startsWith("[")?4:3)).join(" "),a.push(c);var d=await i(c);if(t[c]=d,s.modules.PartyView){if(!d)return;player.lcPlayer?.addTeammate(r(d))}}if(m.endsWith("left the party.")&&!m.startsWith("You")&&(c=(c=m.split(" ")).splice(c[0].startsWith("[")?1:0,c.length-(c[0].startsWith("[")?4:3)).join(" "),a=a.filter((e=>e!=c)),delete t[c],s.modules.PartyView)){if(!(d=await i(c)))return;player.lcPlayer?.removeTeammate(r(d))}if((m.includes("has disbanded the party!")||m.includes("You left the party."))&&(a=[],t={},player.lcPlayer?.removeAllTeammates()),m.includes("You have joined")&&m.includes("party!")&&setTimeout((()=>player.executeCommand("/party list")),1e3),m.includes("Party Leader:")&&(c=(c=m.split(" ")).splice(c[0].startsWith("[")?4:3,c.length-(c[0].startsWith("[")?5:4)).join(" "),a=[],player.lcPlayer?.removeAllTeammates(),a.push(c),d=await i(c),t[c]=d,s.modules.PartyView)){if(!d)return;player.lcPlayer?.addTeammate(r(d))}if(m.includes("Party Moderators:")||m.includes("Party Members:")){var u=m.split(" ");for(var c of(u=u.splice(2,u.length).join(" ").split("● ").map((e=>e.split(" ").splice(u[0].startsWith("[")?2:1,u.length-(u[0].startsWith("[")?2:1)).join(" "))),a.push(u),u))d=await i(c),t[c]=d;if(s.modules.PartyView)for(var c of u){if(!(d=await i(c)))return;player.lcPlayer?.addTeammate(r(d))}m.includes("Party Members:")&&(t=Object.keys(t).filter((e=>a.includes(e))).map((e=>t[e])))}m.includes("You are not currently in a party.")&&(a=[],t={},player.lcPlayer?.removeAllTeammates())}})),setInterval((async()=>{if(l=s,s=await toolbox.getConfig(),l.modules.partyView!=s.modules.partyView)if(s.modules.PartyView)for(var e of(player.lcPlayer?.removeAllTeammates(),a)){var t=await i(e);if(!t)return;player.lcPlayer?.addTeammate(r(t))}else player.lcPlayer?.removeAllTeammates()}),500)},n.onLocationUpdate=()=>{setTimeout((()=>{s.modules.PartyView&&(player.lcPlayer?.removeAllTeammates(),setTimeout((async()=>{for(var e of a){var t=await i(e);if(!t)return;player.lcPlayer?.addTeammate(r(t))}}),500))}),1e3)},player.listener.on("player_join",((e,t)=>{s.modules.PartyView&&a.includes(t)&&e&&player.lcPlayer?.addTeammate(r(e))})),registerPlayerModule(n),registerPlugin({name:"Party View",description:"View Your Party Members With LC Team View | `/ss`",version:"1.4.3",author:"TBHGodPro"})})();