(()=>{var e={247:(e,a,o)=>{"use strict";o.d(a,{Z:()=>n});const t=requireModule("node:fs"),l=requireModule("node-fetch"),n=async e=>{e+=".js";var a=__dirname.split("/");a.pop(),a.pop(),a=a.join("/")+"/plugins";let o=t.readFileSync(`${a}/${e}`,"utf8");o=o.split('version:"')[o.split('version:"').length-1].split('",')[0];const n=await l(`https://raw.githubusercontent.com/TBHGodPro/SolarStatsPlugins/main/Plugins%20(Compressed)/${e}`).then((e=>e.text())),r=n.split('version:"')[n.split('version:"').length-1].split('",')[0];(function(e,a){if(e==a)return!1;const o=e.split(".").map((e=>parseInt(e))),t=a.split(".").map((e=>parseInt(e)));console.log(o,t);var l=0;for(const e of o){if(o[l]<t[l])return!0;l+=1}return!1})(o,r)&&setTimeout((()=>{Logger.info(`UPDATING PLUGIN FROM ${o} TO ${r}, PLEASE RESTART SOLAR STATS`),t.writeFile(`${a}/${e}`,n,{},(()=>{}))}),500)}}},a={};function o(t){var l=a[t];if(void 0!==l)return l.exports;var n=a[t]={exports:{}};return e[t](n,n.exports,o),n.exports}o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{function e(e){return e.replace(/_/gi," ").split(" ").map((e=>e[0].toUpperCase()+e.substr(1).toLowerCase())).join(" ")}o(247).Z("skyblockHelper");const a=[{level:1,commonTotal:100,uncommonTotal:765,rareTotal:1820,epicTotal:3485,legendaryTotal:5555},{level:2,commonTotal:210,uncommonTotal:940,rareTotal:2095,epicTotal:3925,legendaryTotal:6215},{level:3,commonTotal:330,uncommonTotal:1130,rareTotal:2395,epicTotal:4415,legendaryTotal:6945},{level:4,commonTotal:460,uncommonTotal:1340,rareTotal:2725,epicTotal:4955,legendaryTotal:7745},{level:5,commonTotal:605,uncommonTotal:1570,rareTotal:3085,epicTotal:5555,legendaryTotal:8625},{level:6,commonTotal:765,uncommonTotal:1820,rareTotal:3485,epicTotal:6215,legendaryTotal:9585},{level:7,commonTotal:940,uncommonTotal:2095,rareTotal:3925,epicTotal:6945,legendaryTotal:10635},{level:8,commonTotal:1130,uncommonTotal:2395,rareTotal:4415,epicTotal:7745,legendaryTotal:11785},{level:9,commonTotal:1340,uncommonTotal:2725,rareTotal:4955,epicTotal:8625,legendaryTotal:13045},{level:10,commonTotal:1570,uncommonTotal:3085,rareTotal:5555,epicTotal:9585,legendaryTotal:14425},{level:11,commonTotal:1820,uncommonTotal:3485,rareTotal:6215,epicTotal:10635,legendaryTotal:15935},{level:12,commonTotal:2095,uncommonTotal:3925,rareTotal:6945,epicTotal:11785,legendaryTotal:17585},{level:13,commonTotal:2395,uncommonTotal:4415,rareTotal:7745,epicTotal:13045,legendaryTotal:19385},{level:14,commonTotal:2725,uncommonTotal:4955,rareTotal:8625,epicTotal:14425,legendaryTotal:21345},{level:15,commonTotal:3085,uncommonTotal:5555,rareTotal:9585,epicTotal:15935,legendaryTotal:23475},{level:16,commonTotal:3485,uncommonTotal:6215,rareTotal:10635,epicTotal:17585,legendaryTotal:25785},{level:17,commonTotal:3925,uncommonTotal:6945,rareTotal:11785,epicTotal:19385,legendaryTotal:28285},{level:18,commonTotal:4415,uncommonTotal:7745,rareTotal:13045,epicTotal:21345,legendaryTotal:30985},{level:19,commonTotal:4955,uncommonTotal:8625,rareTotal:14425,epicTotal:23475,legendaryTotal:33905},{level:20,commonTotal:5555,uncommonTotal:9585,rareTotal:15935,epicTotal:25785,legendaryTotal:37065},{level:21,commonTotal:6215,uncommonTotal:10635,rareTotal:17585,epicTotal:28285,legendaryTotal:40485},{level:22,commonTotal:6945,uncommonTotal:11785,rareTotal:19385,epicTotal:30985,legendaryTotal:44185},{level:23,commonTotal:7745,uncommonTotal:13045,rareTotal:21345,epicTotal:33905,legendaryTotal:48185},{level:24,commonTotal:8625,uncommonTotal:14425,rareTotal:23475,epicTotal:37065,legendaryTotal:52535},{level:25,commonTotal:9585,uncommonTotal:15935,rareTotal:25785,epicTotal:40485,legendaryTotal:57285},{level:26,commonTotal:10635,uncommonTotal:17585,rareTotal:28285,epicTotal:44185,legendaryTotal:62485},{level:27,commonTotal:11785,uncommonTotal:19385,rareTotal:30985,epicTotal:48185,legendaryTotal:68185},{level:28,commonTotal:13045,uncommonTotal:21345,rareTotal:33905,epicTotal:52535,legendaryTotal:74485},{level:29,commonTotal:14425,uncommonTotal:23475,rareTotal:37065,epicTotal:57285,legendaryTotal:81485},{level:30,commonTotal:15935,uncommonTotal:25785,rareTotal:40485,epicTotal:62485,legendaryTotal:89285},{level:31,commonTotal:17585,uncommonTotal:28285,rareTotal:44185,epicTotal:68185,legendaryTotal:97985},{level:32,commonTotal:19385,uncommonTotal:30985,rareTotal:48185,epicTotal:74485,legendaryTotal:107685},{level:33,commonTotal:21345,uncommonTotal:33905,rareTotal:52535,epicTotal:81485,legendaryTotal:118485},{level:34,commonTotal:23475,uncommonTotal:37065,rareTotal:57285,epicTotal:89285,legendaryTotal:130485},{level:35,commonTotal:25785,uncommonTotal:40485,rareTotal:62485,epicTotal:97985,legendaryTotal:143785},{level:36,commonTotal:28285,uncommonTotal:44185,rareTotal:68185,epicTotal:107685,legendaryTotal:158485},{level:37,commonTotal:30985,uncommonTotal:48185,rareTotal:74485,epicTotal:118485,legendaryTotal:174685},{level:38,commonTotal:33905,uncommonTotal:52535,rareTotal:81485,epicTotal:130485,legendaryTotal:192485},{level:39,commonTotal:37065,uncommonTotal:57285,rareTotal:89285,epicTotal:143785,legendaryTotal:211985},{level:40,commonTotal:40485,uncommonTotal:62485,rareTotal:97985,epicTotal:158485,legendaryTotal:233285},{level:41,commonTotal:44185,uncommonTotal:68185,rareTotal:107685,epicTotal:174685,legendaryTotal:256485},{level:42,commonTotal:48185,uncommonTotal:74485,rareTotal:118485,epicTotal:192485,legendaryTotal:281685},{level:43,commonTotal:52535,uncommonTotal:81485,rareTotal:130485,epicTotal:211985,legendaryTotal:309085},{level:44,commonTotal:57285,uncommonTotal:89285,rareTotal:143785,epicTotal:233285,legendaryTotal:338885},{level:45,commonTotal:62485,uncommonTotal:97985,rareTotal:158485,epicTotal:256485,legendaryTotal:371285},{level:46,commonTotal:68185,uncommonTotal:107685,rareTotal:174685,epicTotal:281685,legendaryTotal:406485},{level:47,commonTotal:74485,uncommonTotal:118485,rareTotal:192485,epicTotal:309085,legendaryTotal:444685},{level:48,commonTotal:81485,uncommonTotal:130485,rareTotal:211985,epicTotal:338885,legendaryTotal:486085},{level:49,commonTotal:89285,uncommonTotal:143785,rareTotal:233285,epicTotal:371285,legendaryTotal:530885},{level:50,commonTotal:97985,uncommonTotal:158485,rareTotal:256485,epicTotal:406485,legendaryTotal:579285},{level:51,commonTotal:107685,uncommonTotal:174685,rareTotal:281685,epicTotal:444685,legendaryTotal:631485},{level:52,commonTotal:118485,uncommonTotal:192485,rareTotal:309085,epicTotal:486085,legendaryTotal:687685},{level:53,commonTotal:130485,uncommonTotal:211985,rareTotal:338885,epicTotal:530885,legendaryTotal:748085},{level:54,commonTotal:143785,uncommonTotal:233285,rareTotal:371285,epicTotal:579285,legendaryTotal:812885},{level:55,commonTotal:158485,uncommonTotal:256485,rareTotal:406485,epicTotal:631485,legendaryTotal:882285},{level:56,commonTotal:174685,uncommonTotal:281685,rareTotal:444685,epicTotal:687685,legendaryTotal:956485},{level:57,commonTotal:192485,uncommonTotal:309085,rareTotal:486085,epicTotal:748085,legendaryTotal:1035685},{level:58,commonTotal:211985,uncommonTotal:338885,rareTotal:530885,epicTotal:812885,legendaryTotal:1120385},{level:59,commonTotal:233285,uncommonTotal:371285,rareTotal:579285,epicTotal:882285,legendaryTotal:1211085},{level:60,commonTotal:256485,uncommonTotal:406485,rareTotal:631485,epicTotal:956485,legendaryTotal:1308285},{level:61,commonTotal:281685,uncommonTotal:444685,rareTotal:687685,epicTotal:1035685,legendaryTotal:1412485},{level:62,commonTotal:309085,uncommonTotal:486085,rareTotal:748085,epicTotal:1120385,legendaryTotal:1524185},{level:63,commonTotal:338885,uncommonTotal:530885,rareTotal:812885,epicTotal:1211085,legendaryTotal:1643885},{level:64,commonTotal:371285,uncommonTotal:579285,rareTotal:882285,epicTotal:1308285,legendaryTotal:1772085},{level:65,commonTotal:406485,uncommonTotal:631485,rareTotal:956485,epicTotal:1412485,legendaryTotal:1909285},{level:66,commonTotal:444685,uncommonTotal:687685,rareTotal:1035685,epicTotal:1524185,legendaryTotal:2055985},{level:67,commonTotal:486085,uncommonTotal:748085,rareTotal:1120385,epicTotal:1643885,legendaryTotal:2212685},{level:68,commonTotal:530885,uncommonTotal:812885,rareTotal:1211085,epicTotal:1772085,legendaryTotal:2380385},{level:69,commonTotal:579285,uncommonTotal:882285,rareTotal:1308285,epicTotal:1909285,legendaryTotal:2560085},{level:70,commonTotal:631485,uncommonTotal:956485,rareTotal:1412485,epicTotal:2055985,legendaryTotal:2752785},{level:71,commonTotal:687685,uncommonTotal:1035685,rareTotal:1524185,epicTotal:2212685,legendaryTotal:2959485},{level:72,commonTotal:748085,uncommonTotal:1120385,rareTotal:1643885,epicTotal:2380385,legendaryTotal:3181185},{level:73,commonTotal:812885,uncommonTotal:1211085,rareTotal:1772085,epicTotal:2560085,legendaryTotal:3418885},{level:74,commonTotal:882285,uncommonTotal:1308285,rareTotal:1909285,epicTotal:2752785,legendaryTotal:3673585},{level:75,commonTotal:956485,uncommonTotal:1412485,rareTotal:2055985,epicTotal:2959485,legendaryTotal:3946285},{level:76,commonTotal:1035685,uncommonTotal:1524185,rareTotal:2212685,epicTotal:3181185,legendaryTotal:4237985},{level:77,commonTotal:1120385,uncommonTotal:1643885,rareTotal:2380385,epicTotal:3418885,legendaryTotal:4549685},{level:78,commonTotal:1211085,uncommonTotal:1772085,rareTotal:2560085,epicTotal:3673585,legendaryTotal:4883385},{level:79,commonTotal:1308285,uncommonTotal:1909285,rareTotal:2752785,epicTotal:3946285,legendaryTotal:5241085},{level:80,commonTotal:1412485,uncommonTotal:2055985,rareTotal:2959485,epicTotal:4237985,legendaryTotal:5624785},{level:81,commonTotal:1524185,uncommonTotal:2212685,rareTotal:3181185,epicTotal:4549685,legendaryTotal:6036485},{level:82,commonTotal:1643885,uncommonTotal:2380385,rareTotal:3418885,epicTotal:4883385,legendaryTotal:6478185},{level:83,commonTotal:1772085,uncommonTotal:2560085,rareTotal:3673585,epicTotal:5241085,legendaryTotal:6954885},{level:84,commonTotal:1909285,uncommonTotal:2752785,rareTotal:3946285,epicTotal:5624785,legendaryTotal:7471585},{level:85,commonTotal:2055985,uncommonTotal:2959485,rareTotal:4237985,epicTotal:6036485,legendaryTotal:8033285},{level:86,commonTotal:2212685,uncommonTotal:3181185,rareTotal:4549685,epicTotal:6478185,legendaryTotal:8644985},{level:87,commonTotal:2380385,uncommonTotal:3418885,rareTotal:4883385,epicTotal:6954885,legendaryTotal:9311685},{level:88,commonTotal:2560085,uncommonTotal:3673585,rareTotal:5241085,epicTotal:7471585,legendaryTotal:10038385},{level:89,commonTotal:2752785,uncommonTotal:3946285,rareTotal:5624785,epicTotal:8033285,legendaryTotal:10830085},{level:90,commonTotal:2959485,uncommonTotal:4237985,rareTotal:6036485,epicTotal:8644985,legendaryTotal:11691785},{level:91,commonTotal:3181185,uncommonTotal:4549685,rareTotal:6478185,epicTotal:9311685,legendaryTotal:12628485},{level:92,commonTotal:3418885,uncommonTotal:4883385,rareTotal:6954885,epicTotal:10038385,legendaryTotal:13645185},{level:93,commonTotal:3673585,uncommonTotal:5241085,rareTotal:7471585,epicTotal:10830085,legendaryTotal:14746885},{level:94,commonTotal:3946285,uncommonTotal:5624785,rareTotal:8033285,epicTotal:11691785,legendaryTotal:15938585},{level:95,commonTotal:4237985,uncommonTotal:6036485,rareTotal:8644985,epicTotal:12628485,legendaryTotal:17225285},{level:96,commonTotal:4549685,uncommonTotal:6478185,rareTotal:9311685,epicTotal:13645185,legendaryTotal:18611985},{level:97,commonTotal:4883385,uncommonTotal:6954885,rareTotal:10038385,epicTotal:14746885,legendaryTotal:20108685},{level:98,commonTotal:5241085,uncommonTotal:7471585,rareTotal:10830085,epicTotal:15938585,legendaryTotal:21725385},{level:99,commonTotal:5624785,uncommonTotal:8033285,rareTotal:11691785,epicTotal:17225285,legendaryTotal:23472085},{level:100,commonTotal:6036485,uncommonTotal:8644985,rareTotal:12628485,epicTotal:18611985,legendaryTotal:25358785}];function t(o){var t=a.find((e=>e[`${o.tier.toLowerCase()}Total`]>o.exp))??a.find((e=>100==e.level));o.tier=o.tier.toUpperCase();var l="§";return"COMMON"==o.tier?l+="f":"UNCOMMON"==o.tier?l+="a":"RARE"==o.tier?l+="9":"EPIC"==o.tier?l+="5":"LEGENDARY"==o.tier?l+="6":"MYTHIC"==o.tier?l+="d":l+="7",`§7[Lvl ${t?.level??"§cERROR"}§7] ${l}${e(o.type)}`}var l=new Intl.RelativeTimeFormat("en",{numeric:"auto"});const n=async(e,a)=>(e.startsWith("http")||(e=(e=`https://api.hypixel.net${e.startsWith("/")?e:`/${e}`}`).includes("?")?`${e}&key=${v}`:`${e}?key=${v}`),await fetch(e,a));async function r(e){return(await p(e))?.parsed?.value?.i?.value?.value}const{Command:i,Item:m,Inventory:s,InventoryType:T,getConfigSync:c,getConfig:u,parseNBTData:p}=toolbox,d=c();var{apiKey:v}=d;const g=new i("sb",[{argument:"type",required:!1,type:"string"},{argument:"extra",required:!1,type:"string"}],["skyblock","sbh"]);async function y(e){return await n(`https://api.mojang.com/users/profiles/minecraft/${e}`)}function f(e){player.sendMessage(`\n    ${e}\n`)}var b={help:"Shows This Help Menu",stats:"Shows A Lot Of Stats About A Player",purse:"Shows The Purse Of A Player"},w=`\n    §2Skyblock Helper (§6/sb §3<command name>§2)\n    \n    ${Object.keys(b).map((e=>`§3${e.toUpperCase()}§6: §r${b[e]}`)).join("\n    ")}\n`;async function h(a,o,i,c,u,p){var d=i;if(!p)var{id:p}=await y(u);let v=null;switch(o){case 1:for(var g of Object.keys(i.members)){i.members[g].id=g;var f=await n(`https://api.mojang.com/user/profiles/${g}/names`);i.members[g].username=f[f.length-1].name,i.members[g].names=f.filter((e=>e.name!=i.members[g].username)).reverse()}v=new s(T.CONTAINER,`§3Stats §8- §6${u} §8- §2${i.cute_name}`,63);var b=Object.keys(i.members).length;switch(b){case 1:b=[5];break;case 2:b=[4,6];break;case 3:b=[3,5,7];break;case 4:b=[2,4,6,8];break;case 5:b=[1,3,5,7,9];break;case 6:b=[1,3,4,6,7,9];break;case 7:b=[1,3,4,5,6,7,9];break;case 8:b=[1,2,3,4,6,7,8,9];break;default:b=[1,2,3,4,5,6,7,8,9]}var w=[];for(var g of Object.values(i.members)){var N=w.length;if(Object.values(i.members).indexOf(g)>8){var I=new m(166);I.displayName="§c§lERROR:",I.lore=["§cThere Are More Players In This Profile's History","§cBut There Are Too Many To Display In This Menu."],v.addItem(I,v.slotCount-8);break}var O=new m(397);O.meta=3,O.displayName=`§6§l${g.username}`;var D=[];const e=e=>{for(var a of(D.push(""),"string"==typeof e&&(e=[e]),e))D.push(a)};e(`§3§lPurse: §r§e${(Math.round(10*g.coin_purse)/10).toLocaleString()}`),e(`§3§lFairy Souls: §r§5${g.fairy_souls_collected??"UNKOWN"}`),g.names.length>1&&e(["§3§lName History§6:",...g.names.map((e=>` - §r§6${e.name}`))]);var $=g.pets?.find((e=>e?.active));$&&e(`§3§lActive Pet: ${t($)}`),D.push(""),O.lore=D;var k=new m(321);if(k.displayName="§3§lView Inventories",k.lore=["",`§3Inventories Of §6${g.username}`,""],g.inv_armor?.data){var R=await r(g.inv_armor.data),C=R[3],S=R[2],P=R[1],_=R[0];C?.id&&((ee=new m(C.id.value,C.Count.value)).meta=C.Damage.value,ee.setupNbtData(),ee.slotRepresentation.nbtData.value=C.tag.value),S?.id&&((ae=new m(S.id.value,S.Count.value)).meta=S.Damage.value,ae.setupNbtData(),ae.slotRepresentation.nbtData.value=S.tag.value),P?.id&&((oe=new m(P.id.value,P.Count.value)).meta=P.Damage.value,oe.setupNbtData(),oe.slotRepresentation.nbtData.value=P.tag.value),_?.id&&((te=new m(_.id.value,_.Count.value)).meta=_.Damage.value,te.setupNbtData(),te.slotRepresentation.nbtData.value=_.tag.value)}w[N]=[O,k,...ee?[ee]:[],...ae?[ae]:[],...oe?[oe]:[],...te?[te]:[]]}for(var E of w)v.addItems(E.map(((e,a)=>({item:e,position:b[w.indexOf(E)]-1+9*a}))));var A=new m(130);if(i.banking){A.displayName=`§6§lBank: §e§l${Math.round(i.banking.balance).toLocaleString()}`,A.lore=[""];var L=i.banking.transactions.reverse();for(var N of("WITHDRAW"==L[0].action&&L[0].amount>0&&(L[0].amount=parseFloat(`-${L[0].amount}`)),"DEPOSIT"==L[0].action&&L[0].amount<0&&(L[0].amount=Math.abs(L[0].amount)),L)){var M=L.indexOf(N);if(L[M+1]&&L[M+1].initiator_name==N.initiator_name)"WITHDRAW"==L[M+1].action&&L[M+1].amount>0&&(L[M+1].amount=parseFloat(`-${L[M+1].amount}`)),"DEPOSIT"==L[M+1].action&&L[M+1].amount<0&&(L[M+1].amount=Math.abs(L[M+1].amount)),L[M+1].amount=L[M+1].amount+N.amount;else if(N.amount){for(var F=[864e5,36e5,6e4,1e3],x=["day","hour","minute","second"],W=[Math.round((N.timestamp-(new Date).getTime())/F[0]),x[0]],U=1;(0==W[0]||1==W[0]||-1==W[0])&&U<4;)W=[Math.round((N.timestamp-(new Date).getTime())/F[U]),x[U]],U+=1;A.lore.push(`${N.amount>0?"§a+":"§c-"} §6${Math.round(Math.abs(N.amount)).toLocaleString()}§7, §e${l.format(parseInt(W[0]),[W[1]])} §7by ${N.initiator_name}`)}}A.lore.push("")}else A.displayName="§6§lBank: §cThe §4Banking API §cIs §4OFF §cFor This Profile";v.addItem(A,v.slotCount-1);var H=new m(357),j=i.community_upgrades?.currently_upgrading;if(j){for(F=[864e5,36e5,6e4,1e3],x=["day","hour","minute","second"],W=[Math.round((j.start_ms-(new Date).getTime())/F[0]),x[0]],U=1;(0==W[0]||1==W[0]||-1==W[0])&&U<4;)W=[Math.round((j.start_ms-(new Date).getTime())/F[U]),x[U]],U+=1;H.displayName=`§3§lCommunity Upgrades: §2§l${e(j.upgrade)} §6§l${j.new_tier}`,H.lore=["",`§3Started §6${l.format(W[0],W[1])} §3By §6${i.members[j.who_started]?.username??"§r§cUNKOWN"}`]}else H.displayName="§3§lCommunity Upgrades: §rThere Is Nothing Currently Upgrading";v.addItem(H,v.slotCount-2);break;case 2:v=new s(T.CONTAINER,`§3Stats §8- §3Inventories Of §6${u}`,18);var V=new m(321);V.displayName="§3View Inventory",i.inv_contents||(V.lore=["","§cThis Player Has The §4Inventory §cAPI Setting §4OFF",""]);var B=new m(145);B.displayName="§3View Accessory Bag",i.talisman_bag||(B.lore=["","§cThis Player Has The §4Inventory §cAPI Setting §4OFF",""]);var q=new m(299);q.displayName="§3View Wardrobe",i.wardrobe_contents||(q.lore=["","§cThis Player Has The §4Inventory §cAPI Setting §4OFF",""]);var G=new m(54);G.displayName="§3View Personal Vault",i.personal_vault_contents||(G.lore=["","§cThis Player Has The §4Personal Bank Vault §cAPI Setting §4OFF",""]),v.addItems([{item:V,position:"0"},{item:B,position:"1"},{item:q,position:"2"},{item:G,position:"3"}]);break;case 3:v=new s(T.CONTAINER,`§3Stats §8- §3Inventory Of §6${u}`,45);var Y=[];for(var J of i)if(J.id){if((ne=new m(J.id.value,J.Count.value)).meta=J.Damage.value,ne.setupNbtData(),ne.slotRepresentation.nbtData.value=J.tag.value,i.indexOf(J)<9)var K=i.indexOf(J)+27;else K=i.indexOf(J)-9;Y[Y.length]={item:ne,position:K.toString()}}v.addItems(Y);break;case 4:i=i.filter((e=>e?.id?.value));var Z=["VERY SPECIAL","SPECIAL","DIVINE","MYTHIC","LEGENDARY","EPIC","RARE","UNCOMMON","COMMON"];for(var J of(i=(i=i.sort(((e,a)=>{var o=Z.indexOf(e.tag.value.display.value.Lore.value.value[e.tag.value.display.value.Lore.value.value.length-1].split(" ")[0].substr(4).toUpperCase()),t=Z.indexOf(a.tag.value.display.value.Lore.value.value[a.tag.value.display.value.Lore.value.value.length-1].split(" ")[0].substr(4).toUpperCase());return o>t?1:o<t?-1:0}))).slice(0,45),v=new s(T.CONTAINER,`§3Stats §8- Accessory Bag Of §6${u}`,54),Y=[],i))J.id&&((ne=new m(J.id.value,J.Count.value)).meta=J.Damage.value,ne.setupNbtData(),ne.slotRepresentation.nbtData.value=J.tag.value,Y[Y.length]={item:ne,position:i.indexOf(J).toString()});if(45==i.length){var z=new m(137);z.displayName=`§3+§6§l${d.filter((e=>e?.id?.value)).length-45} §r§3More`,z.lore=[`§3§o+§6§o§l${d.length-45} §r§3§oMore Slots`,`§6§o§l${d.length} §r§3§oTotal Slots`],v.addItem(z,53)}v.addItems(Y);break;case 5:for(var J of(v=new s(T.CONTAINER,`§3Stats §8- Wardrobe Of §6${u}`,54),Y=[],i.data.slice(0,36)))J.id&&((ne=new m(J.id.value,J.Count.value)).meta=J.Damage.value,ne.setupNbtData(),ne.slotRepresentation.nbtData.value=J.tag.value,Y[Y.length]={item:ne,position:i.data.indexOf(J).toString()});for(N=0;N<9;N++){var Q=new m(351);i.equipped==N+1?(Q.meta="10",Q.displayName=`Slot ${N+1}: §aEquipped`,C=i.current[3],S=i.current[2],P=i.current[1],_=i.current[0],C?.id&&((ee=new m(C.id.value,C.Count.value)).meta=C.Damage.value,ee.setupNbtData(),ee.slotRepresentation.nbtData.value=C.tag.value,v.addItem(ee,N)),S?.id&&((ae=new m(S.id.value,S.Count.value)).meta=S.Damage.value,ae.setupNbtData(),ae.slotRepresentation.nbtData.value=S.tag.value,v.addItem(ae,N+9)),P?.id&&((oe=new m(P.id.value,P.Count.value)).meta=P.Damage.value,oe.setupNbtData(),oe.slotRepresentation.nbtData.value=P.tag.value,v.addItem(oe,N+18)),_?.id&&((te=new m(_.id.value,_.Count.value)).meta=_.Damage.value,te.setupNbtData(),te.slotRepresentation.nbtData.value=_.tag.value,v.addItem(te,N+27))):Y.find((e=>e.position==N))||Y.find((e=>e.position==N+9))||Y.find((e=>e.position==N+18))||Y.find((e=>e.position==N+27))?(Q.meta="9",Q.displayName=`Slot ${N+1}: §aReady`):(Q.meta="8",Q.displayName=`Slot ${N+1}: §cEmpty`),Y[Y.length]={item:Q,position:36+N}}v.addItems(Y);var X=new m(262);X.displayName="§aNext Page",X.lore=["§ePage 2"],v.addItem(X,v.slotCount-4);break;case 6:for(var J of(v=new s(T.CONTAINER,`§3Stats §8- Wardrobe Of §6${u}`,54),Y=[],i.data.slice(36)))J.id&&((ne=new m(J.id.value,J.Count.value)).meta=J.Damage.value,ne.setupNbtData(),ne.slotRepresentation.nbtData.value=J.tag.value,Y[Y.length]={item:ne,position:(i.data.indexOf(J)-36).toString()});for(N=0;N<9;N++){var ee,ae,oe,te;if(Q=new m(351),i.equipped==N+9+1)Q.meta="10",Q.displayName=`Slot ${N+1}: §aEquipped`,C=i.current[3],S=i.current[2],P=i.current[1],_=i.current[0],C?.id&&((ee=new m(C.id.value,C.Count.value)).meta=C.Damage.value,ee.setupNbtData(),ee.slotRepresentation.nbtData.value=C.tag.value,v.addItem(ee,N)),S?.id&&((ae=new m(S.id.value,S.Count.value)).meta=S.Damage.value,ae.setupNbtData(),ae.slotRepresentation.nbtData.value=S.tag.value,v.addItem(ae,N+9)),P?.id&&((oe=new m(P.id.value,P.Count.value)).meta=P.Damage.value,oe.setupNbtData(),oe.slotRepresentation.nbtData.value=P.tag.value,v.addItem(oe,N+18)),_?.id&&((te=new m(_.id.value,_.Count.value)).meta=_.Damage.value,te.setupNbtData(),te.slotRepresentation.nbtData.value=_.tag.value,v.addItem(te,N+27));else Y.find((e=>e.position==N))||Y.find((e=>e.position==N+9))||Y.find((e=>e.position==N+18))||Y.find((e=>e.position==N+27))?(Q.meta="9",Q.displayName=`Slot ${N+9+1}: §aReady`):(Q.meta="8",Q.displayName=`Slot ${N+9+1}: §cEmpty`);Y[Y.length]={item:Q,position:36+N}}v.addItems(Y);var le=new m(262);le.displayName="Previous Page",le.lore=["§ePage 1"],v.addItem(le,v.slotCount-6);break;case 7:for(var J of(v=new s(T.CONTAINER,`§3Stats §8- Personal Vault Of §6${u}`,36),Y=[],i)){var ne;J.id&&((ne=new m(J.id.value,J.Count.value)).meta=J.Damage.value,ne.setupNbtData(),ne.slotRepresentation.nbtData.value=J.tag.value,Y[Y.length]={item:ne,position:i.indexOf(J).toString()})}v.addItems(Y);break;default:v=new s(T.CONTAINER,"§cERROR",9)}var re=new m(399);re.displayName="§6Reload",v.addItem(re,v.slotCount-9);const ie=new m(166);return ie.displayName="§cClose",v.addItem(ie,v.slotCount-5),v.on("click",(async e=>{if(0==e.mode){var t=e?.raw?.item?.nbtData?.value?.display?.value?.Name?.value,l=e?.raw?.item?.nbtData?.value?.display?.value?.Lore?.value?.value??[];switch(e.slot){case v.slotCount-5:v.close(c),a.display(c);break;case v.slotCount-9:v.close(c),c.sendMessage("Reloading..."),(await h(a,o,d,c,u,p)).display(c);break;default:if(t){if(t.endsWith("View Inventories")){v.close(c),(await h(v,2,Object.values(i.members).find((e=>e.username==l[1].split("§6")[1])),c,l[1].split("§6")[1])).display(c);break}if(t.endsWith("View Inventory")&&!l[1]?.includes("OFF")){v.close(c),(await h(v,3,await r(i.inv_contents.data),c,u)).display(c);break}if(t.endsWith("View Accessory Bag")&&!l[1]?.includes("OFF")){v.close(c),(await h(v,4,await r(i.talisman_bag.data),c,u)).display(c);break}if(t.endsWith("View Wardrobe")&&!l[1]?.includes("OFF")){v.close(c),(await h(v,5,{data:await r(i.wardrobe_contents.data),equipped:i.wardrobe_equipped_slot,current:await r(i.inv_armor.data)},c,u)).display(c);break}if(t.includes("Previous Page")||t.includes("Next Page")){v.close(c),(await h(a,t.includes("Previous Page")?5:6,d,c,u)).display(c);break}if(t.endsWith("View Personal Vault")&&!l[1]?.includes("OFF")){v.close(c),(await h(v,7,await r(i.personal_vault_contents.data),c,u)).display(c);break}}e.cancel(c.client)}}else e.cancel(c.client)})),v}async function N(a){var{name:o,id:t}=await y(a);if(a=g.player,!o||!t)return f("This Player Doesn't Exist!");var{profiles:l}=await n(`/skyblock/profiles?uuid=${t}`);l=(l=l.map((e=>({profile:e.profile_id,name:e.cute_name,last_save:e.members[t].last_save}))).sort(((e,a)=>e.last_save<a.last_save?1:e.last_save>a.last_save?-1:0)).map((e=>l.find((a=>a.profile_id==e.profile))))).map((e=>0==l.indexOf(e)?{...e,current:!0}:{...e,current:!1}));const r=new s(T.CONTAINER,`§3Stats §8- §6${o}`,54),i=new m(166);i.displayName="§cClose";const c=new m(137);c.displayName="§3§lUUID",c.lore=["","§rThe §3UUID §rFor This Player","",`§6${t}`,""];var u=l.map((e=>{var a=new m(339);return a.displayName=`§2${e.cute_name}`,a.lore=["",`§6${o}§r's Profile: §3${e.cute_name}`,...e.current?["","§6CURRENT",""]:[""]],a}));function p(){switch(u.length){case 1:return[{item:u[0],position:13}];case 2:return[{item:u[0],position:12},{item:u[1],position:14}];case 3:return[{item:u[0],position:11},{item:u[1],position:13},{item:u[2],position:15}];case 4:return[{item:u[0],position:10},{item:u[1],position:12},{item:u[2],position:14},{item:u[3],position:16}];case 5:return[{item:u[0],position:9},{item:u[1],position:11},{item:u[2],position:13},{item:u[3],position:15},{item:u[4],position:17}];case 6:return Logger.warn(`SkyblockStats | parseProfileItems() ERROR | Inputted Data:\n\n${JSON.stringify(u)}\n\nWith Length: 6`),[{item:u[0],position:10},{item:u[1],position:11},{item:u[2],position:12},{item:u[3],position:14},{item:u[4],position:15},{item:u[5],position:16}];case 7:return Logger.warn(`SkyblockStats | parseProfileItems() ERROR | Inputted Data:\n\n${JSON.stringify(u)}\n\nWith Length: 7`),[{item:u[0],position:10},{item:u[1],position:11},{item:u[2],position:12},{item:u[3],position:13},{item:u[4],position:14},{item:u[5],position:15},{item:u[6],position:16}];case 8:return Logger.warn(`SkyblockStats | parseProfileItems() ERROR | Inputted Data:\n\n${JSON.stringify(u)}\n\nWith Length: 8`),[{item:u[0],position:9},{item:u[1],position:10},{item:u[2],position:11},{item:u[3],position:12},{item:u[4],position:14},{item:u[5],position:15},{item:u[6],position:16},{item:u[7],position:17}];case 9:return Logger.warn(`SkyblockStats | parseProfileItems() ERROR | Inputted Data:\n\n${JSON.stringify(u)}\n\nWith Length: 9`),[{item:u[0],position:9},{item:u[1],position:10},{item:u[2],position:11},{item:u[3],position:12},{item:u[4],position:13},{item:u[5],position:14},{item:u[6],position:15},{item:u[7],position:16},{item:u[8],position:17}];default:return Logger.error(`parseProfileItems() ERROR | HANDLED BY DEFAULT | Inputted Data:\n\n${JSON.stringify(u)}\n\nWith Length: ${u.length}`),[{item:u[0],position:9},{item:u[1],position:10},{item:u[2],position:11},{item:u[3],position:12},{item:u[4],position:13},{item:u[5],position:14},{item:u[6],position:15},{item:u[7],position:16},{item:u[8],position:17}]}}r.addItems([{item:c,position:45},{item:i,position:49},...p()]);const d=(await n(`/status?uuid=${t}`))?.session;if(d){var v=new m(35);d.online?(v.meta=5,v.displayName="§a§lONLINE",v.lore=[""],d.gameType&&v.lore.push(`§rGame: §6${e(d.gameType)}`),d.mode&&v.lore.push(`§rMode: §6${e(d.mode)}`),d.map&&v.lore.push(`§rMap: §6${e(d.map)}`)):(v.meta=14,v.displayName="§c§lOFFLINE"),r.addItem(v,r.slotCount-1)}return r.on("click",(async e=>{if(0==e.mode)switch(e.slot){case 49:r.close(a);break;default:var n=p();if(n.find((a=>a.position==e.slot))){r.close(a),(await h(r,1,l[n.indexOf(n.find((a=>a.position==e.slot)))],a,o,t)).display(a);break}e.cancel(a.client)}else e.cancel(a.client)})),r}g.onTriggered=async(e,a)=>{await async function(){v=(await u()).apiKey}();var o=a[0]??"help",t=a[1]??null;switch(o){case"help":player.sendMessage(w);break;case"stats":if(!t){f("§cRequires §6Player §cInput§6: §r(§6/sb stats §3player§r)");break}(await N(t)).display(g.player);break;case"purse":t||(t=g.player.client.username);var{name:l,id:r}=await y(t);if(!l||!r)return f("This Player Doesn't Exist!");var{profiles:i}=await n(`/skyblock/profiles?uuid=${r}`);i=i.map((e=>({profile:e.profile_id,name:e.cute_name,last_save:e.members[r].last_save}))).sort(((e,a)=>e.last_save<a.last_save?1:e.last_save>a.last_save?-1:0)).map((e=>i.find((a=>a.profile_id==e.profile)))),i=i.map((e=>0==i.indexOf(e)?{...e,current:!0}:{...e,current:!1}));var m=i.find((e=>e.current));f(`§6§l${l}§r§3's Purse On §2§l${m.cute_name}§r§3: §e${(Math.round(10*m.members[Object.keys(m.members).find((e=>e==r))].coin_purse)/10).toLocaleString()}`);break;default:Object.keys(b).includes(o)?f("Whoops, Something Went Wrong, That Command Doesn't Seem To Work..."):f("Nah Fam That Ain't A Command §l§6:/")}},registerCommand(g),registerPlugin({name:"Skyblock Helper",description:"Skyblock Helper | `/skyblock` `/sb` `/sbh`",version:"1.10.0",author:"TBHGodPro"})})()})();