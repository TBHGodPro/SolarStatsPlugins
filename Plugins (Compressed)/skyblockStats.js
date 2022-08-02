function parseText(a){return a.split(" ").map(a=>a[0].toUpperCase()+a.substr(1).toLowerCase()).join(" ")}const petXP=[{level:1,commonTotal:100,uncommonTotal:765,rareTotal:1820,epicTotal:3485,legendaryTotal:5555},{level:2,commonTotal:210,uncommonTotal:940,rareTotal:2095,epicTotal:3925,legendaryTotal:6215},{level:3,commonTotal:330,uncommonTotal:1130,rareTotal:2395,epicTotal:4415,legendaryTotal:6945},{level:4,commonTotal:460,uncommonTotal:1340,rareTotal:2725,epicTotal:4955,legendaryTotal:7745},{level:5,commonTotal:605,uncommonTotal:1570,rareTotal:3085,epicTotal:5555,legendaryTotal:8625},{level:6,commonTotal:765,uncommonTotal:1820,rareTotal:3485,epicTotal:6215,legendaryTotal:9585},{level:7,commonTotal:940,uncommonTotal:2095,rareTotal:3925,epicTotal:6945,legendaryTotal:10635},{level:8,commonTotal:1130,uncommonTotal:2395,rareTotal:4415,epicTotal:7745,legendaryTotal:11785},{level:9,commonTotal:1340,uncommonTotal:2725,rareTotal:4955,epicTotal:8625,legendaryTotal:13045},{level:10,commonTotal:1570,uncommonTotal:3085,rareTotal:5555,epicTotal:9585,legendaryTotal:14425},{level:11,commonTotal:1820,uncommonTotal:3485,rareTotal:6215,epicTotal:10635,legendaryTotal:15935},{level:12,commonTotal:2095,uncommonTotal:3925,rareTotal:6945,epicTotal:11785,legendaryTotal:17585},{level:13,commonTotal:2395,uncommonTotal:4415,rareTotal:7745,epicTotal:13045,legendaryTotal:19385},{level:14,commonTotal:2725,uncommonTotal:4955,rareTotal:8625,epicTotal:14425,legendaryTotal:21345},{level:15,commonTotal:3085,uncommonTotal:5555,rareTotal:9585,epicTotal:15935,legendaryTotal:23475},{level:16,commonTotal:3485,uncommonTotal:6215,rareTotal:10635,epicTotal:17585,legendaryTotal:25785},{level:17,commonTotal:3925,uncommonTotal:6945,rareTotal:11785,epicTotal:19385,legendaryTotal:28285},{level:18,commonTotal:4415,uncommonTotal:7745,rareTotal:13045,epicTotal:21345,legendaryTotal:30985},{level:19,commonTotal:4955,uncommonTotal:8625,rareTotal:14425,epicTotal:23475,legendaryTotal:33905},{level:20,commonTotal:5555,uncommonTotal:9585,rareTotal:15935,epicTotal:25785,legendaryTotal:37065},{level:21,commonTotal:6215,uncommonTotal:10635,rareTotal:17585,epicTotal:28285,legendaryTotal:40485},{level:22,commonTotal:6945,uncommonTotal:11785,rareTotal:19385,epicTotal:30985,legendaryTotal:44185},{level:23,commonTotal:7745,uncommonTotal:13045,rareTotal:21345,epicTotal:33905,legendaryTotal:48185},{level:24,commonTotal:8625,uncommonTotal:14425,rareTotal:23475,epicTotal:37065,legendaryTotal:52535},{level:25,commonTotal:9585,uncommonTotal:15935,rareTotal:25785,epicTotal:40485,legendaryTotal:57285},{level:26,commonTotal:10635,uncommonTotal:17585,rareTotal:28285,epicTotal:44185,legendaryTotal:62485},{level:27,commonTotal:11785,uncommonTotal:19385,rareTotal:30985,epicTotal:48185,legendaryTotal:68185},{level:28,commonTotal:13045,uncommonTotal:21345,rareTotal:33905,epicTotal:52535,legendaryTotal:74485},{level:29,commonTotal:14425,uncommonTotal:23475,rareTotal:37065,epicTotal:57285,legendaryTotal:81485},{level:30,commonTotal:15935,uncommonTotal:25785,rareTotal:40485,epicTotal:62485,legendaryTotal:89285},{level:31,commonTotal:17585,uncommonTotal:28285,rareTotal:44185,epicTotal:68185,legendaryTotal:97985},{level:32,commonTotal:19385,uncommonTotal:30985,rareTotal:48185,epicTotal:74485,legendaryTotal:107685},{level:33,commonTotal:21345,uncommonTotal:33905,rareTotal:52535,epicTotal:81485,legendaryTotal:118485},{level:34,commonTotal:23475,uncommonTotal:37065,rareTotal:57285,epicTotal:89285,legendaryTotal:130485},{level:35,commonTotal:25785,uncommonTotal:40485,rareTotal:62485,epicTotal:97985,legendaryTotal:143785},{level:36,commonTotal:28285,uncommonTotal:44185,rareTotal:68185,epicTotal:107685,legendaryTotal:158485},{level:37,commonTotal:30985,uncommonTotal:48185,rareTotal:74485,epicTotal:118485,legendaryTotal:174685},{level:38,commonTotal:33905,uncommonTotal:52535,rareTotal:81485,epicTotal:130485,legendaryTotal:192485},{level:39,commonTotal:37065,uncommonTotal:57285,rareTotal:89285,epicTotal:143785,legendaryTotal:211985},{level:40,commonTotal:40485,uncommonTotal:62485,rareTotal:97985,epicTotal:158485,legendaryTotal:233285},{level:41,commonTotal:44185,uncommonTotal:68185,rareTotal:107685,epicTotal:174685,legendaryTotal:256485},{level:42,commonTotal:48185,uncommonTotal:74485,rareTotal:118485,epicTotal:192485,legendaryTotal:281685},{level:43,commonTotal:52535,uncommonTotal:81485,rareTotal:130485,epicTotal:211985,legendaryTotal:309085},{level:44,commonTotal:57285,uncommonTotal:89285,rareTotal:143785,epicTotal:233285,legendaryTotal:338885},{level:45,commonTotal:62485,uncommonTotal:97985,rareTotal:158485,epicTotal:256485,legendaryTotal:371285},{level:46,commonTotal:68185,uncommonTotal:107685,rareTotal:174685,epicTotal:281685,legendaryTotal:406485},{level:47,commonTotal:74485,uncommonTotal:118485,rareTotal:192485,epicTotal:309085,legendaryTotal:444685},{level:48,commonTotal:81485,uncommonTotal:130485,rareTotal:211985,epicTotal:338885,legendaryTotal:486085},{level:49,commonTotal:89285,uncommonTotal:143785,rareTotal:233285,epicTotal:371285,legendaryTotal:530885},{level:50,commonTotal:97985,uncommonTotal:158485,rareTotal:256485,epicTotal:406485,legendaryTotal:579285},{level:51,commonTotal:107685,uncommonTotal:174685,rareTotal:281685,epicTotal:444685,legendaryTotal:631485},{level:52,commonTotal:118485,uncommonTotal:192485,rareTotal:309085,epicTotal:486085,legendaryTotal:687685},{level:53,commonTotal:130485,uncommonTotal:211985,rareTotal:338885,epicTotal:530885,legendaryTotal:748085},{level:54,commonTotal:143785,uncommonTotal:233285,rareTotal:371285,epicTotal:579285,legendaryTotal:812885},{level:55,commonTotal:158485,uncommonTotal:256485,rareTotal:406485,epicTotal:631485,legendaryTotal:882285},{level:56,commonTotal:174685,uncommonTotal:281685,rareTotal:444685,epicTotal:687685,legendaryTotal:956485},{level:57,commonTotal:192485,uncommonTotal:309085,rareTotal:486085,epicTotal:748085,legendaryTotal:1035685},{level:58,commonTotal:211985,uncommonTotal:338885,rareTotal:530885,epicTotal:812885,legendaryTotal:1120385},{level:59,commonTotal:233285,uncommonTotal:371285,rareTotal:579285,epicTotal:882285,legendaryTotal:1211085},{level:60,commonTotal:256485,uncommonTotal:406485,rareTotal:631485,epicTotal:956485,legendaryTotal:1308285},{level:61,commonTotal:281685,uncommonTotal:444685,rareTotal:687685,epicTotal:1035685,legendaryTotal:1412485},{level:62,commonTotal:309085,uncommonTotal:486085,rareTotal:748085,epicTotal:1120385,legendaryTotal:1524185},{level:63,commonTotal:338885,uncommonTotal:530885,rareTotal:812885,epicTotal:1211085,legendaryTotal:1643885},{level:64,commonTotal:371285,uncommonTotal:579285,rareTotal:882285,epicTotal:1308285,legendaryTotal:1772085},{level:65,commonTotal:406485,uncommonTotal:631485,rareTotal:956485,epicTotal:1412485,legendaryTotal:1909285},{level:66,commonTotal:444685,uncommonTotal:687685,rareTotal:1035685,epicTotal:1524185,legendaryTotal:2055985},{level:67,commonTotal:486085,uncommonTotal:748085,rareTotal:1120385,epicTotal:1643885,legendaryTotal:2212685},{level:68,commonTotal:530885,uncommonTotal:812885,rareTotal:1211085,epicTotal:1772085,legendaryTotal:2380385},{level:69,commonTotal:579285,uncommonTotal:882285,rareTotal:1308285,epicTotal:1909285,legendaryTotal:2560085},{level:70,commonTotal:631485,uncommonTotal:956485,rareTotal:1412485,epicTotal:2055985,legendaryTotal:2752785},{level:71,commonTotal:687685,uncommonTotal:1035685,rareTotal:1524185,epicTotal:2212685,legendaryTotal:2959485},{level:72,commonTotal:748085,uncommonTotal:1120385,rareTotal:1643885,epicTotal:2380385,legendaryTotal:3181185},{level:73,commonTotal:812885,uncommonTotal:1211085,rareTotal:1772085,epicTotal:2560085,legendaryTotal:3418885},{level:74,commonTotal:882285,uncommonTotal:1308285,rareTotal:1909285,epicTotal:2752785,legendaryTotal:3673585},{level:75,commonTotal:956485,uncommonTotal:1412485,rareTotal:2055985,epicTotal:2959485,legendaryTotal:3946285},{level:76,commonTotal:1035685,uncommonTotal:1524185,rareTotal:2212685,epicTotal:3181185,legendaryTotal:4237985},{level:77,commonTotal:1120385,uncommonTotal:1643885,rareTotal:2380385,epicTotal:3418885,legendaryTotal:4549685},{level:78,commonTotal:1211085,uncommonTotal:1772085,rareTotal:2560085,epicTotal:3673585,legendaryTotal:4883385},{level:79,commonTotal:1308285,uncommonTotal:1909285,rareTotal:2752785,epicTotal:3946285,legendaryTotal:5241085},{level:80,commonTotal:1412485,uncommonTotal:2055985,rareTotal:2959485,epicTotal:4237985,legendaryTotal:5624785},{level:81,commonTotal:1524185,uncommonTotal:2212685,rareTotal:3181185,epicTotal:4549685,legendaryTotal:6036485},{level:82,commonTotal:1643885,uncommonTotal:2380385,rareTotal:3418885,epicTotal:4883385,legendaryTotal:6478185},{level:83,commonTotal:1772085,uncommonTotal:2560085,rareTotal:3673585,epicTotal:5241085,legendaryTotal:6954885},{level:84,commonTotal:1909285,uncommonTotal:2752785,rareTotal:3946285,epicTotal:5624785,legendaryTotal:7471585},{level:85,commonTotal:2055985,uncommonTotal:2959485,rareTotal:4237985,epicTotal:6036485,legendaryTotal:8033285},{level:86,commonTotal:2212685,uncommonTotal:3181185,rareTotal:4549685,epicTotal:6478185,legendaryTotal:8644985},{level:87,commonTotal:2380385,uncommonTotal:3418885,rareTotal:4883385,epicTotal:6954885,legendaryTotal:9311685},{level:88,commonTotal:2560085,uncommonTotal:3673585,rareTotal:5241085,epicTotal:7471585,legendaryTotal:10038385},{level:89,commonTotal:2752785,uncommonTotal:3946285,rareTotal:5624785,epicTotal:8033285,legendaryTotal:10830085},{level:90,commonTotal:2959485,uncommonTotal:4237985,rareTotal:6036485,epicTotal:8644985,legendaryTotal:11691785},{level:91,commonTotal:3181185,uncommonTotal:4549685,rareTotal:6478185,epicTotal:9311685,legendaryTotal:12628485},{level:92,commonTotal:3418885,uncommonTotal:4883385,rareTotal:6954885,epicTotal:10038385,legendaryTotal:13645185},{level:93,commonTotal:3673585,uncommonTotal:5241085,rareTotal:7471585,epicTotal:10830085,legendaryTotal:14746885},{level:94,commonTotal:3946285,uncommonTotal:5624785,rareTotal:8033285,epicTotal:11691785,legendaryTotal:15938585},{level:95,commonTotal:4237985,uncommonTotal:6036485,rareTotal:8644985,epicTotal:12628485,legendaryTotal:17225285},{level:96,commonTotal:4549685,uncommonTotal:6478185,rareTotal:9311685,epicTotal:13645185,legendaryTotal:18611985},{level:97,commonTotal:4883385,uncommonTotal:6954885,rareTotal:10038385,epicTotal:14746885,legendaryTotal:20108685},{level:98,commonTotal:5241085,uncommonTotal:7471585,rareTotal:10830085,epicTotal:15938585,legendaryTotal:21725385},{level:99,commonTotal:5624785,uncommonTotal:8033285,rareTotal:11691785,epicTotal:17225285,legendaryTotal:23472085},{level:100,commonTotal:6036485,uncommonTotal:8644985,rareTotal:12628485,epicTotal:18611985,legendaryTotal:25358785}];function getPetText(a){var c=petXP.find(b=>b[`${a.tier.toLowerCase()}Total`]>a.exp)??petXP.find(a=>100==a.level);a.tier=a.tier.toUpperCase();var b="\xa7";return"COMMON"==a.tier?b+="f":"UNCOMMON"==a.tier?b+="a":"RARE"==a.tier?b+="9":"EPIC"==a.tier?b+="5":"LEGENDARY"==a.tier?b+="6":"MYTHIC"==a.tier?b+="d":b+="7",`\xa77[Lvl ${c?.level??"\xa7cERROR"}\xa77] ${b}${parseText(a.type)}`}const nbt=requireModule("prismarine-nbt"),{Buffer:c}=requireModule("node:buffer");async function decodeNBT(a){return(await nbt.parse(c.from(a,"base64"))).parsed.value.i.value.value}const mainDir=__dirname.split("/").splice(0,__dirname.split("/").length-2).join("/");var rtf=new Intl.RelativeTimeFormat("en",{numeric:"auto"});const dirFetch=requireModule("node-fetch"),fetch=async(a,b)=>{a.startsWith("http")||(a=(a=`https://api.hypixel.net${a.startsWith("/")?a:`/${a}`}`).includes("?")?`${a}&key=${h}`:`${a}?key=${h}`);var b=await dirFetch(a,b);b=await b.text();try{b=JSON.parse(b)}catch{}return b},{Logger:d,Command:a,Item:e,Inventory:f,getConfigSync:b}=toolbox,{InventoryType:g}=requireModule("../Types"),config=b(),{apiKey:h}=config,cmd=new a("sb",[{argument:"type",required:!1,type:"string"},{argument:"extra",required:!1,type:"string"}],["skyblock"]);async function getUser(a){return await fetch(`https://api.mojang.com/users/profiles/minecraft/${a}`)}function sendMessage(a){player.sendMessage(`
    ${a}
`)}var helpMenuItems={help:"Shows This Help Menu",stats:"Shows A Lot Of Stats About A Player",purse:"Shows The Purse Of A Player"},helpMenuText=`
    \xa72Skyblock Helper (\xa76/sb \xa73<command name>\xa72)
    
    ${Object.keys(helpMenuItems).map(a=>`\xa73${a.toUpperCase()}\xa76: \xa7r${helpMenuItems[a]}`).join(`
    `)}
`;async function createStatsInventoryOverlay(_,Z,a,aa,y,T){var H=a;if(!T)var{id:T}=await getUser(y);let c=null;switch(Z){case 1:for(var o of Object.keys(a.members)){a.members[o].id=o;var I=await fetch(`https://api.mojang.com/user/profiles/${o}/names`);a.members[o].username=I[I.length-1].name,a.members[o].names=I.filter(b=>b.name!=a.members[o].username).reverse()}c=new f(g.CONTAINER,`\xa73Stats \xa78- \xa76${y} \xa78- \xa72${a.cute_name}`,63);var w=Object.keys(a.members).length;switch(w){case 1:w=[5];break;case 2:w=[4,6];break;case 3:w=[3,5,7];break;case 4:w=[2,4,6,8];break;case 5:w=[1,3,5,7,9];break;case 6:w=[1,3,4,6,7,9];break;case 7:w=[1,3,4,5,6,7,9];break;case 8:w=[1,2,3,4,6,7,8,9];break;default:w=[1,2,3,4,5,6,7,8,9]}var J=[];for(var o of Object.values(a.members)){var d=J.length;if(Object.values(a.members).indexOf(o)>8){var K=new e(166);K.displayName=`\xa7c\xa7lERROR:`,K.lore=[`\xa7cThere Are More Players In This Profile's History`,`\xa7cBut There Are Too Many To Display In This Menu.`],c.addItem(K,c.slotCount-8);break}var D=new e(397);D.meta=3,D.displayName=`\xa76\xa7l${o.username}`;var U=[];let E=a=>{if(U.push(""),"string"==typeof a)var a=[a];for(var b of a)U.push(b)};E(`\xa73\xa7lPurse: \xa7r\xa7e${(Math.round(10*o.coin_purse)/10).toLocaleString()}`),E(`\xa73\xa7lFairy Souls: \xa7r\xa75${o.fairy_souls_collected??"UNKOWN"}`),o.names.length>1&&E(["\xa73\xa7lName History\xa76:",...o.names.map(a=>` - \xa7r\xa76${a.name}`)]);var V=o.pets?.find(a=>a?.active);V&&E(`\xa73\xa7lActive Pet: ${getPetText(V)}`),U.push(""),D.lore=U;var L=new e(321);if(L.displayName="\xa73\xa7lView Inventories",L.lore=["",`\xa73Inventories Of \xa76${o.username}`,""],o.inv_armor?.data){var F=await decodeNBT(o.inv_armor.data),k=F[3],i=F[2],m=F[1],n=F[0];if(k?.id){var p=new e(k.id.value,k.Count.value);k.Damage.value&&(p.meta=k.Damage.value),p.displayName=k.tag.value.display.value.Name.value,p.lore=k.tag.value.display.value.Lore.value.value}if(i?.id){var q=new e(i.id.value,i.Count.value);i.Damage.value&&(q.meta=i.Damage.value),q.displayName=i.tag.value.display.value.Name.value,q.lore=i.tag.value.display.value.Lore.value.value}if(m?.id){var r=new e(m.id.value,m.Count.value);m.Damage.value&&(r.meta=m.Damage.value),r.displayName=m.tag.value.display.value.Name.value,r.lore=m.tag.value.display.value.Lore.value.value}if(n?.id){var s=new e(n.id.value,n.Count.value);n.Damage.value&&(s.meta=n.Damage.value),s.displayName=n.tag.value.display.value.Name.value,s.lore=n.tag.value.display.value.Lore.value.value}}J[d]=[D,L,...p?[p]:[],...q?[q]:[],...r?[r]:[],...s?[s]:[]]}for(var $ of J)c.addItems($.map((a,b)=>({item:a,position:w[J.indexOf($)]-1+9*b})));var z=new e(130);if(a.banking){z.displayName=`\xa76\xa7lBank: \xa7e\xa7l${Math.round(a.banking.balance).toLocaleString()}`,z.lore=[""];var l=a.banking.transactions.reverse();for(var d of("WITHDRAW"==l[0].action&&l[0].amount>0&&(l[0].amount=parseFloat(`-${l[0].amount}`)),"DEPOSIT"==l[0].action&&l[0].amount<0&&(l[0].amount=Math.abs(l[0].amount)),l)){var v=l.indexOf(d);if(l[v+1]&&l[v+1].initiator_name==d.initiator_name){"WITHDRAW"==l[v+1].action&&l[v+1].amount>0&&(l[v+1].amount=parseFloat(`-${l[v+1].amount}`)),"DEPOSIT"==l[v+1].action&&l[v+1].amount<0&&(l[v+1].amount=Math.abs(l[v+1].amount)),l[v+1].amount=l[v+1].amount+d.amount;continue}if(d.amount){for(var B=[864e5,36e5,6e4,1e3],C=["day","hour","minute","second"],u=[Math.round((d.timestamp-new Date().getTime())/B[0]),C[0]],x=1;(0==u[0]||1==u[0]|| -1==u[0])&&x<4;)u=[Math.round((d.timestamp-new Date().getTime())/B[x]),C[x]],x+=1;z.lore.push(`${d.amount>0?"\xa7a+":"\xa7c-"} \xa76${Math.round(Math.abs(d.amount)).toLocaleString()}\xa77, \xa7e${rtf.format(parseInt(u[0]),[u[1]])} \xa77by ${d.initiator_name}`)}}z.lore.push("")}else z.displayName="\xa76\xa7lBank: \xa7cThe \xa74Banking API \xa7cIs \xa74OFF \xa7cFor This Profile";c.addItem(z,c.slotCount-1);var G=new e(357),A=a.community_upgrades?.currently_upgrading;if(A){for(var B=[864e5,36e5,6e4,1e3],C=["day","hour","minute","second"],u=[Math.round((A.start_ms-new Date().getTime())/B[0]),C[0]],x=1;(0==u[0]||1==u[0]|| -1==u[0])&&x<4;)u=[Math.round((A.start_ms-new Date().getTime())/B[x]),C[x]],x+=1;G.displayName=`\xa73\xa7lCommunity Upgrades: \xa72\xa7l${parseText(A.upgrade)} \xa76\xa7l${A.new_tier}`,G.lore=["",`\xa73Started \xa76${rtf.format(u[0],u[1])} \xa73By \xa76${a.members[A.who_started]?.username??"\xa7r\xa7cUNKOWN"}`]}else G.displayName="\xa73\xa7lCommunity Upgrades: \xa7rThere Is Nothing Currently Upgrading";c.addItem(G,c.slotCount-2);break;case 2:c=new f(g.CONTAINER,`\xa73Stats \xa78- \xa73Inventories Of \xa76${y}`,18);var M=new e(321);M.displayName="\xa73View Inventory",a.inv_contents||(M.lore=["","\xa7cThis Player Has The \xa74Inventory \xa7cAPI Setting \xa74OFF",""]);var N=new e(145);N.displayName="\xa73View Accessory Bag",a.talisman_bag||(N.lore=["","\xa7cThis Player Has The \xa74Inventory \xa7cAPI Setting \xa74OFF",""]);var O=new e(299);O.displayName="\xa73View Wardrobe",a.wardrobe_contents||(O.lore=["","\xa7cThis Player Has The \xa74Inventory \xa7cAPI Setting \xa74OFF",""]);var P=new e(54);P.displayName="\xa73View Personal Vault",a.personal_vault_contents||(P.lore=["","\xa7cThis Player Has The \xa74Personal Bank Vault \xa7cAPI Setting \xa74OFF",""]),c.addItems([{item:M,position:"0"},{item:N,position:"1"},{item:O,position:"2"},{item:P,position:"3"}]);break;case 3:c=new f(g.CONTAINER,`\xa73Stats \xa78- \xa73Inventory Of \xa76${y}`,45);var h=[];for(var b of a)if(b.id){var j=new e(b.id.value,b.Count.value);if(b.Damage.value&&(j.meta=b.Damage.value),j.displayName=b.tag.value.display.value.Name.value,j.lore=b.tag.value.display.value.Lore.value.value,9>a.indexOf(b))var W=a.indexOf(b)+27;else var W=a.indexOf(b)-9;h[h.length]={item:j,position:W.toString()}}c.addItems(h);break;case 4:a=a.filter(a=>a?.id?.value);var ab=["VERY SPECIAL","SPECIAL","DIVINE","MYTHIC","LEGENDARY","EPIC","RARE","UNCOMMON","COMMON"];a=(a=a.sort((a,b)=>{var c=ab.indexOf(a.tag.value.display.value.Lore.value.value[a.tag.value.display.value.Lore.value.value.length-1].split(" ")[0].substr(4).toUpperCase()),d=ab.indexOf(b.tag.value.display.value.Lore.value.value[b.tag.value.display.value.Lore.value.value.length-1].split(" ")[0].substr(4).toUpperCase());return c>d?1:c<d?-1:0})).slice(0,45),c=new f(g.CONTAINER,`\xa73Stats \xa78- Accessory Bag Of \xa76${y}`,54);var h=[];for(var b of a)if(b.id){var j=new e(b.id.value,b.Count.value);b.Damage.value&&(j.meta=b.Damage.value),j.displayName=b.tag.value.display.value.Name.value,j.lore=b.tag.value.display.value.Lore.value.value,h[h.length]={item:j,position:a.indexOf(b).toString()}}if(45==a.length){var Q=new e(137);Q.displayName=`\xa73+\xa76\xa7l${H.filter(a=>a?.id?.value).length-45} \xa7r\xa73More`,Q.lore=[`\xa73\xa7o+\xa76\xa7o\xa7l${H.length-45} \xa7r\xa73\xa7oMore Slots`,`\xa76\xa7o\xa7l${H.length} \xa7r\xa73\xa7oTotal Slots`],c.addItem(Q,53)}c.addItems(h);break;case 5:c=new f(g.CONTAINER,`\xa73Stats \xa78- Wardrobe Of \xa76${y}`,54);var h=[];for(var b of a.data.slice(0,36))if(b.id){var j=new e(b.id.value,b.Count.value);b.Damage.value&&(j.meta=b.Damage.value),j.displayName=b.tag.value.display.value.Name.value,j.lore=b.tag.value.display.value.Lore.value.value,h[h.length]={item:j,position:a.data.indexOf(b).toString()}}for(var d=0;d<9;d++){var t=new e(351);if(a.equipped==d+1){t.meta="10",t.displayName=`Slot ${d+1}: \xa7aEquipped`;var k=a.current[3],i=a.current[2],m=a.current[1],n=a.current[0];if(k?.id){var p=new e(k.id.value,k.Count.value);k.Damage.value&&(p.meta=k.Damage.value),p.displayName=k.tag.value.display.value.Name.value,p.lore=k.tag.value.display.value.Lore.value.value,c.addItem(p,d)}if(i?.id){var q=new e(i.id.value,i.Count.value);i.Damage.value&&(q.meta=i.Damage.value),q.displayName=i.tag.value.display.value.Name.value,q.lore=i.tag.value.display.value.Lore.value.value,c.addItem(q,d+9)}if(m?.id){var r=new e(m.id.value,m.Count.value);i.Damage.value&&(r.meta=m.Damage.value),r.displayName=m.tag.value.display.value.Name.value,r.lore=m.tag.value.display.value.Lore.value.value,c.addItem(r,d+18)}if(n?.id){var s=new e(n.id.value,n.Count.value);i.Damage.value&&(s.meta=n.Damage.value),s.displayName=n.tag.value.display.value.Name.value,s.lore=n.tag.value.display.value.Lore.value.value,c.addItem(s,d+27)}}else h.find(a=>a.position==d)||h.find(a=>a.position==d+9)||h.find(a=>a.position==d+18)||h.find(a=>a.position==d+27)?(t.meta="9",t.displayName=`Slot ${d+1}: \xa7aReady`):(t.meta="8",t.displayName=`Slot ${d+1}: \xa7cEmpty`);h[h.length]={item:t,position:36+d}}c.addItems(h);var R=new e(262);R.displayName="\xa7aNext Page",R.lore=["\xa7ePage 2"],c.addItem(R,c.slotCount-4);break;case 6:c=new f(g.CONTAINER,`\xa73Stats \xa78- Wardrobe Of \xa76${y}`,54);var h=[];for(var b of a.data.slice(36))if(b.id){var j=new e(b.id.value,b.Count.value);b.Damage.value&&(j.meta=b.Damage.value),j.displayName=b.tag.value.display.value.Name.value,j.lore=b.tag.value.display.value.Lore.value.value,h[h.length]={item:j,position:(a.data.indexOf(b)-36).toString()}}for(var d=0;d<9;d++){var t=new e(351);if(a.equipped==d+9+1){t.meta="10",t.displayName=`Slot ${d+1}: \xa7aEquipped`;var k=a.current[3],i=a.current[2],m=a.current[1],n=a.current[0];if(k?.id){var p=new e(k.id.value,k.Count.value);k.Damage.value&&(p.meta=k.Damage.value),p.displayName=k.tag.value.display.value.Name.value,p.lore=k.tag.value.display.value.Lore.value.value,c.addItem(p,d)}if(i?.id){var q=new e(i.id.value,i.Count.value);i.Damage.value&&(q.meta=i.Damage.value),q.displayName=i.tag.value.display.value.Name.value,q.lore=i.tag.value.display.value.Lore.value.value,c.addItem(q,d+9)}if(m?.id){var r=new e(m.id.value,m.Count.value);i.Damage.value&&(r.meta=m.Damage.value),r.displayName=m.tag.value.display.value.Name.value,r.lore=m.tag.value.display.value.Lore.value.value,c.addItem(r,d+18)}if(n?.id){var s=new e(n.id.value,n.Count.value);i.Damage.value&&(s.meta=n.Damage.value),s.displayName=n.tag.value.display.value.Name.value,s.lore=n.tag.value.display.value.Lore.value.value,c.addItem(s,d+27)}}else h.find(a=>a.position==d)||h.find(a=>a.position==d+9)||h.find(a=>a.position==d+18)||h.find(a=>a.position==d+27)?(t.meta="9",t.displayName=`Slot ${d+9+1}: \xa7aReady`):(t.meta="8",t.displayName=`Slot ${d+9+1}: \xa7cEmpty`);h[h.length]={item:t,position:36+d}}c.addItems(h);var S=new e(262);S.displayName="Previous Page",S.lore=["\xa7ePage 1"],c.addItem(S,c.slotCount-6);break;case 7:c=new f(g.CONTAINER,`\xa73Stats \xa78- Personal Vault Of \xa76${y}`,36);var h=[];for(var b of a)if(b.id){var j=new e(b.id.value,b.Count.value);b.Damage.value&&(j.meta=b.Damage.value),j.displayName=b.tag.value.display.value.Name.value,j.lore=b.tag.value.display.value.Lore.value.value,h[h.length]={item:j,position:a.indexOf(b).toString()}}c.addItems(h);break;default:c=new f(g.CONTAINER,"\xa7cERROR",9)}var X=new e(399);X.displayName="\xa76Reload",c.addItem(X,c.slotCount-9);let Y=new e(166);return Y.displayName="\xa7cClose",c.addItem(Y,c.slotCount-5),c.on("click",async d=>{if(0!=d.mode){d.cancel(aa.client);return}var b=d?.raw?.item?.nbtData?.value?.display?.value?.Name?.value,e=d?.raw?.item?.nbtData?.value?.display?.value?.Lore?.value?.value??[];switch(d.slot){case c.slotCount-5:c.close(aa),_.display(aa);break;case c.slotCount-9:c.close(aa),aa.sendMessage("Reloading..."),(await createStatsInventoryOverlay(_,Z,H,aa,y,T)).display(aa);break;default:if(b){if(b.endsWith("View Inventories")){c.close(aa),(await createStatsInventoryOverlay(c,2,Object.values(a.members).find(a=>a.username==e[1].split("\xa76")[1]),aa,e[1].split("\xa76")[1])).display(aa);break}if(b.endsWith("View Inventory")&&!e[1]?.includes("OFF")){c.close(aa),(await createStatsInventoryOverlay(c,3,await decodeNBT(a.inv_contents.data),aa,y)).display(aa);break}if(b.endsWith("View Accessory Bag")&&!e[1]?.includes("OFF")){c.close(aa),(await createStatsInventoryOverlay(c,4,await decodeNBT(a.talisman_bag.data),aa,y)).display(aa);break}if(b.endsWith("View Wardrobe")&&!e[1]?.includes("OFF")){c.close(aa),(await createStatsInventoryOverlay(c,5,{data:await decodeNBT(a.wardrobe_contents.data),equipped:a.wardrobe_equipped_slot,current:await decodeNBT(a.inv_armor.data)},aa,y)).display(aa);break}if(b.includes("Previous Page")||b.includes("Next Page")){c.close(aa),(await createStatsInventoryOverlay(_,b.includes("Previous Page")?5:6,H,aa,y)).display(aa);break}if(b.endsWith("View Personal Vault")&&!e[1]?.includes("OFF")){c.close(aa),(await createStatsInventoryOverlay(c,7,await decodeNBT(a.personal_vault_contents.data),aa,y)).display(aa);break}}d.cancel(aa.client)}}),c}async function createStatsInventory(k){var{name:l,id:h}=await getUser(k);if(k=cmd.player,!l||!h)return sendMessage("This Player Doesn't Exist!");var{profiles:i}=await fetch(`/skyblock/profiles?uuid=${h}`);i=(i=i.map(a=>({profile:a.profile_id,name:a.cute_name,last_save:a.members[h].last_save})).sort((a,b)=>a.last_save<b.last_save?1:a.last_save>b.last_save?-1:0).map(a=>i.find(b=>b.profile_id==a.profile))).map(a=>0==i.indexOf(a)?{...a,current:!0}:{...a,current:!1});let c=new f(g.CONTAINER,`\xa73Stats \xa78- \xa76${l}`,54),m=new e(166);m.displayName="\xa7cClose";let j=new e(137);j.displayName="\xa73\xa7lUUID",j.lore=["","\xa7rThe \xa73UUID \xa7rFor This Player","",`\xa76${h}`,""];var o=i.map(a=>{var b=new e(339);return b.displayName=`\xa72${a.cute_name}`,b.lore=["",`\xa76${l}\xa7r's Profile: \xa73${a.cute_name}`,...a.current?["","\xa76CURRENT",""]:[""]],b});function n(){switch(o.length){case 1:return[{item:o[0],position:13}];case 2:return[{item:o[0],position:12},{item:o[1],position:14}];case 3:return[{item:o[0],position:11},{item:o[1],position:13},{item:o[2],position:15}];case 4:return[{item:o[0],position:10},{item:o[1],position:12},{item:o[2],position:14},{item:o[3],position:16}];case 5:return[{item:o[0],position:9},{item:o[1],position:11},{item:o[2],position:13},{item:o[3],position:15},{item:o[4],position:17}];case 6:return d.warn(`SkyblockStats | parseProfileItems() ERROR | Inputted Data:

${JSON.stringify(o)}

With Length: 6`),[{item:o[0],position:10},{item:o[1],position:11},{item:o[2],position:12},{item:o[3],position:14},{item:o[4],position:15},{item:o[5],position:16}];case 7:return d.warn(`SkyblockStats | parseProfileItems() ERROR | Inputted Data:

${JSON.stringify(o)}

With Length: 7`),[{item:o[0],position:10},{item:o[1],position:11},{item:o[2],position:12},{item:o[3],position:13},{item:o[4],position:14},{item:o[5],position:15},{item:o[6],position:16}];case 8:return d.warn(`SkyblockStats | parseProfileItems() ERROR | Inputted Data:

${JSON.stringify(o)}

With Length: 8`),[{item:o[0],position:9},{item:o[1],position:10},{item:o[2],position:11},{item:o[3],position:12},{item:o[4],position:14},{item:o[5],position:15},{item:o[6],position:16},{item:o[7],position:17}];case 9:return d.warn(`SkyblockStats | parseProfileItems() ERROR | Inputted Data:

${JSON.stringify(o)}

With Length: 9`),[{item:o[0],position:9},{item:o[1],position:10},{item:o[2],position:11},{item:o[3],position:12},{item:o[4],position:13},{item:o[5],position:14},{item:o[6],position:15},{item:o[7],position:16},{item:o[8],position:17}];default:return d.error(`parseProfileItems() ERROR | HANDLED BY DEFAULT | Inputted Data:

${JSON.stringify(o)}

With Length: ${o.length}`),[{item:o[0],position:9},{item:o[1],position:10},{item:o[2],position:11},{item:o[3],position:12},{item:o[4],position:13},{item:o[5],position:14},{item:o[6],position:15},{item:o[7],position:16},{item:o[8],position:17}]}}c.addItems([{item:j,position:45},{item:m,position:49},...n()]);let b=(await fetch(`/status?uuid=${h}`))?.session;if(b){var a=new e(35);b.online?(a.meta=5,a.displayName="\xa7a\xa7lONLINE",a.lore=[""],b.gameType&&a.lore.push(`\xa7rGame: \xa76${parseText(b.gameType)}`),b.mode&&a.lore.push(`\xa7rMode: \xa76${parseText(b.mode)}`),b.map&&a.lore.push(`\xa7rMap: \xa76${parseText(b.map)}`)):(a.meta=14,a.displayName="\xa7c\xa7lOFFLINE"),c.addItem(a,c.slotCount-1)}return c.on("click",async a=>{if(0!=a.mode){a.cancel(k.client);return}switch(a.slot){case 49:c.close(k);break;default:var b=n();if(b.find(b=>b.position==a.slot)){c.close(k),(await createStatsInventoryOverlay(c,1,i[b.indexOf(b.find(b=>b.position==a.slot))],k,l,h)).display(k);break}a.cancel(k.client)}}),c}cmd.onTriggered=async(h,d)=>{var e=d[0]??"help",a=d[1]??null;switch(e){case"help":player.sendMessage(helpMenuText);break;case"stats":if(!a){sendMessage("\xa7cRequires \xa76Player \xa7cInput\xa76: \xa7r(\xa76/sb stats \xa73player\xa7r)");break}(await createStatsInventory(a)).display(cmd.player);break;case"purse":a||(a=cmd.player.client.username);var{name:f,id:g}=await getUser(a);if(!f||!g)return sendMessage("This Player Doesn't Exist!");var{profiles:b}=await fetch(`/skyblock/profiles?uuid=${g}`),c=(b=(b=b.map(a=>({profile:a.profile_id,name:a.cute_name,last_save:a.members[g].last_save})).sort((a,b)=>a.last_save<b.last_save?1:a.last_save>b.last_save?-1:0).map(a=>b.find(b=>b.profile_id==a.profile))).map(a=>0==b.indexOf(a)?{...a,current:!0}:{...a,current:!1})).find(a=>a.current);sendMessage(`\xa76\xa7l${f}\xa7r\xa73's Purse On \xa72\xa7l${c.cute_name}\xa7r\xa73: \xa7e${(Math.round(10*c.members[Object.keys(c.members).find(a=>a==g)].coin_purse)/10).toLocaleString()}`);break;default:Object.keys(helpMenuItems).includes(e)?sendMessage("Whoops, Something Went Wrong, That Command Doesn't Seem To Work..."):sendMessage("Nah Fam That Ain't A Command \xa7l\xa76:/")}},registerCommand(cmd),registerPlugin({name:"Skyblock",description:"Skyblock Helper | `/skyblock` `/sb`",version:"1.8.4",author:"TBHGodPro"})