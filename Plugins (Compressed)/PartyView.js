(()=>{const e=requireModule("node-fetch"),a=async a=>{var t=player.connectedPlayers.find((e=>e.name==a))?.uuid;if(!t)var{id:t}=await(async(a,t)=>{var r=await e(a,void 0);r=await r.text();try{r=JSON.parse(r)}catch{}return r})(`https://api.mojang.com/users/profiles/minecraft/${a}`);return t};var t=null,r=toolbox.getConfigSync(),i=[];const l=new toolbox.Item(4);l.displayName="§rParty View",l.lore=["","§7Use The Lunar Client Team View","§7Mod To See Your Party Members","","§7Current: §"+(r.modules.PartyView?"aEnabled":"cDisabled")];const s=new toolbox.PlayerModule("Party View","View Your Party Members With LC Team View",l,"PartyView");s.customCode=()=>{player.proxy.on("incoming",(async(e,t,l,s)=>{if("chat"==t.name){var o=JSON.parse(e.message);o.extra??=[];var n=[o.text,...o.extra.map((e=>e.text))].join("");if(n.endsWith("joined the party.")&&(m=(m=n.split(" ")).splice(m[0].startsWith("[")?1:0,m.length-(m[0].startsWith("[")?4:3)).join(" "),i.push(m),r.modules.PartyView)){if(!(d=await a(m)))return;player.lcPlayer?.addTeammate(d)}if(n.endsWith("left the party.")&&!n.startsWith("You")&&(m=(m=n.split(" ")).splice(m[0].startsWith("[")?1:0,m.length-(m[0].startsWith("[")?4:3)).join(" "),i=i.filter((e=>e!=m)),r.modules.PartyView)){if(!(d=await a(m)))return;player.lcPlayer?.removeTeammate(d)}if((n.includes("has disbanded the party!")||n.includes("You left the party."))&&(i=[],player.lcPlayer?.removeAllTeammates()),n.includes("You have joined")&&n.includes("party!")&&setTimeout((()=>player.executeCommand("/p list")),1e3),n.includes("Party Leader:")&&(m=(m=n.split(" ")).splice(m[0].startsWith("[")?4:3,m.length-(m[0].startsWith("[")?5:4)).join(" "),i=[],player.lcPlayer?.removeAllTeammates(),i.push(m),r.modules.PartyView)){if(!(d=await a(m)))return;player.lcPlayer?.addTeammate(d)}if(n.includes("Party Moderators:")||n.includes("Party Members:")){var y=n.split(" ");if(y=y.splice(2,y.length).join(" ").split("● ").map((e=>e.split(" ").splice(y[0].startsWith("[")?2:1,y.length-(y[0].startsWith("[")?2:1)).join(" "))),(i=[]).push(y),r.modules.PartyView)for(var m of y){var d;if(!(d=await a(m)))return;player.lcPlayer?.addTeammate(d)}}n.includes("You are not currently in a party.")&&(i=[],player.lcPlayer?.removeAllTeammates())}})),setInterval((async()=>{if(t=r,r=await toolbox.getConfig(),JSON.stringify(t)!=JSON.stringify(r))if(r.modules.PartyView)for(var e of(player.lcPlayer?.removeAllTeammates(),i)){var l=await a(e);if(!l)return;player.lcPlayer?.addTeammate(l)}else player.lcPlayer?.removeAllTeammates()}),500)},s.onLocationUpdate=()=>{setTimeout((()=>{r.modules.PartyView&&(player.lcPlayer?.removeAllTeammates(),setTimeout((async()=>{for(var e of i){var t=await a(e);if(!t)return;player.lcPlayer?.addTeammate(t)}}),500))}),1e3)},player.listener.on("player_join",((e,a)=>{r.modules.PartyView&&i.includes(a)&&e&&player.lcPlayer?.addTeammate(e)})),registerPlayerModule(s),registerPlugin({name:"Party View",description:"View Your Party Members With LC Team View | `/ss`",version:"1.4.2",author:"TBHGodPro"})})();