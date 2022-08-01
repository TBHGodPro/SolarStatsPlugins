function parseText(a){return a.split(" ").map(a=>a[0].toUpperCase()+a.substr(1).toLowerCase()).join(" ")}const petXP=[{level:1,commonTotal:100,uncommonTotal:765,rareTotal:1820,epicTotal:3485,legendaryTotal:5555},{level:2,commonTotal:210,uncommonTotal:940,rareTotal:2095,epicTotal:3925,legendaryTotal:6215},{level:3,commonTotal:330,uncommonTotal:1130,rareTotal:2395,epicTotal:4415,legendaryTotal:6945},{level:4,commonTotal:460,uncommonTotal:1340,rareTotal:2725,epicTotal:4955,legendaryTotal:7745},{level:5,commonTotal:605,uncommonTotal:1570,rareTotal:3085,epicTotal:5555,legendaryTotal:8625},{level:6,commonTotal:765,uncommonTotal:1820,rareTotal:3485,epicTotal:6215,legendaryTotal:9585},{level:7,commonTotal:940,uncommonTotal:2095,rareTotal:3925,epicTotal:6945,legendaryTotal:10635},{level:8,commonTotal:1130,uncommonTotal:2395,rareTotal:4415,epicTotal:7745,legendaryTotal:11785},{level:9,commonTotal:1340,uncommonTotal:2725,rareTotal:4955,epicTotal:8625,legendaryTotal:13045},{level:10,commonTotal:1570,uncommonTotal:3085,rareTotal:5555,epicTotal:9585,legendaryTotal:14425},{level:11,commonTotal:1820,uncommonTotal:3485,rareTotal:6215,epicTotal:10635,legendaryTotal:15935},{level:12,commonTotal:2095,uncommonTotal:3925,rareTotal:6945,epicTotal:11785,legendaryTotal:17585},{level:13,commonTotal:2395,uncommonTotal:4415,rareTotal:7745,epicTotal:13045,legendaryTotal:19385},{level:14,commonTotal:2725,uncommonTotal:4955,rareTotal:8625,epicTotal:14425,legendaryTotal:21345},{level:15,commonTotal:3085,uncommonTotal:5555,rareTotal:9585,epicTotal:15935,legendaryTotal:23475},{level:16,commonTotal:3485,uncommonTotal:6215,rareTotal:10635,epicTotal:17585,legendaryTotal:25785},{level:17,commonTotal:3925,uncommonTotal:6945,rareTotal:11785,epicTotal:19385,legendaryTotal:28285},{level:18,commonTotal:4415,uncommonTotal:7745,rareTotal:13045,epicTotal:21345,legendaryTotal:30985},{level:19,commonTotal:4955,uncommonTotal:8625,rareTotal:14425,epicTotal:23475,legendaryTotal:33905},{level:20,commonTotal:5555,uncommonTotal:9585,rareTotal:15935,epicTotal:25785,legendaryTotal:37065},{level:21,commonTotal:6215,uncommonTotal:10635,rareTotal:17585,epicTotal:28285,legendaryTotal:40485},{level:22,commonTotal:6945,uncommonTotal:11785,rareTotal:19385,epicTotal:30985,legendaryTotal:44185},{level:23,commonTotal:7745,uncommonTotal:13045,rareTotal:21345,epicTotal:33905,legendaryTotal:48185},{level:24,commonTotal:8625,uncommonTotal:14425,rareTotal:23475,epicTotal:37065,legendaryTotal:52535},{level:25,commonTotal:9585,uncommonTotal:15935,rareTotal:25785,epicTotal:40485,legendaryTotal:57285},{level:26,commonTotal:10635,uncommonTotal:17585,rareTotal:28285,epicTotal:44185,legendaryTotal:62485},{level:27,commonTotal:11785,uncommonTotal:19385,rareTotal:30985,epicTotal:48185,legendaryTotal:68185},{level:28,commonTotal:13045,uncommonTotal:21345,rareTotal:33905,epicTotal:52535,legendaryTotal:74485},{level:29,commonTotal:14425,uncommonTotal:23475,rareTotal:37065,epicTotal:57285,legendaryTotal:81485},{level:30,commonTotal:15935,uncommonTotal:25785,rareTotal:40485,epicTotal:62485,legendaryTotal:89285},{level:31,commonTotal:17585,uncommonTotal:28285,rareTotal:44185,epicTotal:68185,legendaryTotal:97985},{level:32,commonTotal:19385,uncommonTotal:30985,rareTotal:48185,epicTotal:74485,legendaryTotal:107685},{level:33,commonTotal:21345,uncommonTotal:33905,rareTotal:52535,epicTotal:81485,legendaryTotal:118485},{level:34,commonTotal:23475,uncommonTotal:37065,rareTotal:57285,epicTotal:89285,legendaryTotal:130485},{level:35,commonTotal:25785,uncommonTotal:40485,rareTotal:62485,epicTotal:97985,legendaryTotal:143785},{level:36,commonTotal:28285,uncommonTotal:44185,rareTotal:68185,epicTotal:107685,legendaryTotal:158485},{level:37,commonTotal:30985,uncommonTotal:48185,rareTotal:74485,epicTotal:118485,legendaryTotal:174685},{level:38,commonTotal:33905,uncommonTotal:52535,rareTotal:81485,epicTotal:130485,legendaryTotal:192485},{level:39,commonTotal:37065,uncommonTotal:57285,rareTotal:89285,epicTotal:143785,legendaryTotal:211985},{level:40,commonTotal:40485,uncommonTotal:62485,rareTotal:97985,epicTotal:158485,legendaryTotal:233285},{level:41,commonTotal:44185,uncommonTotal:68185,rareTotal:107685,epicTotal:174685,legendaryTotal:256485},{level:42,commonTotal:48185,uncommonTotal:74485,rareTotal:118485,epicTotal:192485,legendaryTotal:281685},{level:43,commonTotal:52535,uncommonTotal:81485,rareTotal:130485,epicTotal:211985,legendaryTotal:309085},{level:44,commonTotal:57285,uncommonTotal:89285,rareTotal:143785,epicTotal:233285,legendaryTotal:338885},{level:45,commonTotal:62485,uncommonTotal:97985,rareTotal:158485,epicTotal:256485,legendaryTotal:371285},{level:46,commonTotal:68185,uncommonTotal:107685,rareTotal:174685,epicTotal:281685,legendaryTotal:406485},{level:47,commonTotal:74485,uncommonTotal:118485,rareTotal:192485,epicTotal:309085,legendaryTotal:444685},{level:48,commonTotal:81485,uncommonTotal:130485,rareTotal:211985,epicTotal:338885,legendaryTotal:486085},{level:49,commonTotal:89285,uncommonTotal:143785,rareTotal:233285,epicTotal:371285,legendaryTotal:530885},{level:50,commonTotal:97985,uncommonTotal:158485,rareTotal:256485,epicTotal:406485,legendaryTotal:579285},{level:51,commonTotal:107685,uncommonTotal:174685,rareTotal:281685,epicTotal:444685,legendaryTotal:631485},{level:52,commonTotal:118485,uncommonTotal:192485,rareTotal:309085,epicTotal:486085,legendaryTotal:687685},{level:53,commonTotal:130485,uncommonTotal:211985,rareTotal:338885,epicTotal:530885,legendaryTotal:748085},{level:54,commonTotal:143785,uncommonTotal:233285,rareTotal:371285,epicTotal:579285,legendaryTotal:812885},{level:55,commonTotal:158485,uncommonTotal:256485,rareTotal:406485,epicTotal:631485,legendaryTotal:882285},{level:56,commonTotal:174685,uncommonTotal:281685,rareTotal:444685,epicTotal:687685,legendaryTotal:956485},{level:57,commonTotal:192485,uncommonTotal:309085,rareTotal:486085,epicTotal:748085,legendaryTotal:1035685},{level:58,commonTotal:211985,uncommonTotal:338885,rareTotal:530885,epicTotal:812885,legendaryTotal:1120385},{level:59,commonTotal:233285,uncommonTotal:371285,rareTotal:579285,epicTotal:882285,legendaryTotal:1211085},{level:60,commonTotal:256485,uncommonTotal:406485,rareTotal:631485,epicTotal:956485,legendaryTotal:1308285},{level:61,commonTotal:281685,uncommonTotal:444685,rareTotal:687685,epicTotal:1035685,legendaryTotal:1412485},{level:62,commonTotal:309085,uncommonTotal:486085,rareTotal:748085,epicTotal:1120385,legendaryTotal:1524185},{level:63,commonTotal:338885,uncommonTotal:530885,rareTotal:812885,epicTotal:1211085,legendaryTotal:1643885},{level:64,commonTotal:371285,uncommonTotal:579285,rareTotal:882285,epicTotal:1308285,legendaryTotal:1772085},{level:65,commonTotal:406485,uncommonTotal:631485,rareTotal:956485,epicTotal:1412485,legendaryTotal:1909285},{level:66,commonTotal:444685,uncommonTotal:687685,rareTotal:1035685,epicTotal:1524185,legendaryTotal:2055985},{level:67,commonTotal:486085,uncommonTotal:748085,rareTotal:1120385,epicTotal:1643885,legendaryTotal:2212685},{level:68,commonTotal:530885,uncommonTotal:812885,rareTotal:1211085,epicTotal:1772085,legendaryTotal:2380385},{level:69,commonTotal:579285,uncommonTotal:882285,rareTotal:1308285,epicTotal:1909285,legendaryTotal:2560085},{level:70,commonTotal:631485,uncommonTotal:956485,rareTotal:1412485,epicTotal:2055985,legendaryTotal:2752785},{level:71,commonTotal:687685,uncommonTotal:1035685,rareTotal:1524185,epicTotal:2212685,legendaryTotal:2959485},{level:72,commonTotal:748085,uncommonTotal:1120385,rareTotal:1643885,epicTotal:2380385,legendaryTotal:3181185},{level:73,commonTotal:812885,uncommonTotal:1211085,rareTotal:1772085,epicTotal:2560085,legendaryTotal:3418885},{level:74,commonTotal:882285,uncommonTotal:1308285,rareTotal:1909285,epicTotal:2752785,legendaryTotal:3673585},{level:75,commonTotal:956485,uncommonTotal:1412485,rareTotal:2055985,epicTotal:2959485,legendaryTotal:3946285},{level:76,commonTotal:1035685,uncommonTotal:1524185,rareTotal:2212685,epicTotal:3181185,legendaryTotal:4237985},{level:77,commonTotal:1120385,uncommonTotal:1643885,rareTotal:2380385,epicTotal:3418885,legendaryTotal:4549685},{level:78,commonTotal:1211085,uncommonTotal:1772085,rareTotal:2560085,epicTotal:3673585,legendaryTotal:4883385},{level:79,commonTotal:1308285,uncommonTotal:1909285,rareTotal:2752785,epicTotal:3946285,legendaryTotal:5241085},{level:80,commonTotal:1412485,uncommonTotal:2055985,rareTotal:2959485,epicTotal:4237985,legendaryTotal:5624785},{level:81,commonTotal:1524185,uncommonTotal:2212685,rareTotal:3181185,epicTotal:4549685,legendaryTotal:6036485},{level:82,commonTotal:1643885,uncommonTotal:2380385,rareTotal:3418885,epicTotal:4883385,legendaryTotal:6478185},{level:83,commonTotal:1772085,uncommonTotal:2560085,rareTotal:3673585,epicTotal:5241085,legendaryTotal:6954885},{level:84,commonTotal:1909285,uncommonTotal:2752785,rareTotal:3946285,epicTotal:5624785,legendaryTotal:7471585},{level:85,commonTotal:2055985,uncommonTotal:2959485,rareTotal:4237985,epicTotal:6036485,legendaryTotal:8033285},{level:86,commonTotal:2212685,uncommonTotal:3181185,rareTotal:4549685,epicTotal:6478185,legendaryTotal:8644985},{level:87,commonTotal:2380385,uncommonTotal:3418885,rareTotal:4883385,epicTotal:6954885,legendaryTotal:9311685},{level:88,commonTotal:2560085,uncommonTotal:3673585,rareTotal:5241085,epicTotal:7471585,legendaryTotal:10038385},{level:89,commonTotal:2752785,uncommonTotal:3946285,rareTotal:5624785,epicTotal:8033285,legendaryTotal:10830085},{level:90,commonTotal:2959485,uncommonTotal:4237985,rareTotal:6036485,epicTotal:8644985,legendaryTotal:11691785},{level:91,commonTotal:3181185,uncommonTotal:4549685,rareTotal:6478185,epicTotal:9311685,legendaryTotal:12628485},{level:92,commonTotal:3418885,uncommonTotal:4883385,rareTotal:6954885,epicTotal:10038385,legendaryTotal:13645185},{level:93,commonTotal:3673585,uncommonTotal:5241085,rareTotal:7471585,epicTotal:10830085,legendaryTotal:14746885},{level:94,commonTotal:3946285,uncommonTotal:5624785,rareTotal:8033285,epicTotal:11691785,legendaryTotal:15938585},{level:95,commonTotal:4237985,uncommonTotal:6036485,rareTotal:8644985,epicTotal:12628485,legendaryTotal:17225285},{level:96,commonTotal:4549685,uncommonTotal:6478185,rareTotal:9311685,epicTotal:13645185,legendaryTotal:18611985},{level:97,commonTotal:4883385,uncommonTotal:6954885,rareTotal:10038385,epicTotal:14746885,legendaryTotal:20108685},{level:98,commonTotal:5241085,uncommonTotal:7471585,rareTotal:10830085,epicTotal:15938585,legendaryTotal:21725385},{level:99,commonTotal:5624785,uncommonTotal:8033285,rareTotal:11691785,epicTotal:17225285,legendaryTotal:23472085},{level:100,commonTotal:6036485,uncommonTotal:8644985,rareTotal:12628485,epicTotal:18611985,legendaryTotal:25358785}];function getPetText(a){var b=petXP.find(b=>b[`${a.tier.toLowerCase()}Total`]>a.exp)??petXP.find(a=>100==a.level);a.tier=a.tier.toUpperCase();var c="\xA7";return c+="COMMON"==a.tier?"f":"UNCOMMON"==a.tier?"a":"RARE"==a.tier?"9":"EPIC"==a.tier?"5":"LEGENDARY"==a.tier?"6":"MYTHIC"==a.tier?"d":"7",`§7[Lvl ${b?.level??"\xA7cERROR"}§7] ${c}${parseText(a.type)}`}const nbt=requireModule("prismarine-nbt"),{Buffer}=requireModule("node:buffer");async function decodeNBT(a){return(await nbt.parse(Buffer.from(a,"base64"))).parsed.value.i.value.value}const mainDir=__dirname.split("/").splice(0,__dirname.split("/").length-2).join("/");var rtf=new Intl.RelativeTimeFormat("en",{numeric:"auto"});const dirFetch=requireModule("node-fetch"),fetch=async(a,b)=>{a.startsWith("http")||(a=`https://api.hypixel.net${a.startsWith("/")?a:`/${a}`}`,a=a.includes("?")?`${a}&key=${apiKey}`:`${a}?key=${apiKey}`);var b=await dirFetch(a,b);b=await b.text();try{b=JSON.parse(b)}catch{}return b},{Logger,Command,Item,Inventory,getConfigSync}=toolbox,{InventoryType}=requireModule("../Types"),config=getConfigSync(),{apiKey}=config,cmd=new Command("sb",[{argument:"type",required:!1,type:"string"},{argument:"extra",required:!1,type:"string"}],[]);async function getUser(a){return await fetch(`https://api.mojang.com/users/profiles/minecraft/${a}`)}function sendMessage(a){player.sendMessage(`
    ${a}
`)}var helpMenuItems={help:"Shows This Help Menu",stats:"Shows A Lot Of Stats About A Player",purse:"Shows The Purse Of A Player"},helpMenuText=`
    §2Skyblock Helper (§6/sb §3<command name>§2)
    
    ${Object.keys(helpMenuItems).map(a=>`§3${a.toUpperCase()}§6: §r${helpMenuItems[a]}`).join(`
    `)}
`;async function createStatsInventoryOverlay(a,b,c,d,e,f){var g=c;if(!f)var{id:f}=await getUser(e);let h=null;switch(b){case 1:for(var j of Object.keys(c.members)){c.members[j].id=j;var k=await fetch(`https://api.mojang.com/user/profiles/${j}/names`);c.members[j].username=k[k.length-1].name,c.members[j].names=k.filter(a=>a.name!=c.members[j].username).reverse()}h=new Inventory(InventoryType.CONTAINER,`§3Stats §8- §6${e} §8- §2${c.cute_name}`,63);var l=Object.keys(c.members).length;l=1===l?[5]:2===l?[4,6]:3===l?[3,5,7]:4===l?[2,4,6,8]:5===l?[1,3,5,7,9]:6===l?[1,3,4,6,7,9]:7===l?[1,3,4,5,6,7,9]:8===l?[1,2,3,4,6,7,8,9]:9===l?[1,2,3,4,5,6,7,8,9]:[1,2,3,4,5,6,7,8,9];var m=[];for(var j of Object.values(c.members)){var n=m.length;if(8<Object.values(c.members).indexOf(j)){var o=new Item(166);o.displayName=`§c§lERROR:`,o.lore=[`§cThere Are More Players In This Profile's History`,`§cBut There Are Too Many To Display In This Menu.`],h.addItem(o,h.slotCount-8);break}var p=new Item(397);p.meta=3,p.displayName=`§6§l${j.username}`;var q=[];const a=a=>{if(q.push(""),"string"==typeof a)var a=[a];for(var b of a)q.push(b)};a(`§3§lPurse: §r§e${(Math.round(10*j.coin_purse)/10).toLocaleString()}`),a(`§3§lFairy Souls: §r§5${j.fairy_souls_collected??"UNKOWN"}`);var r=j.names;1<r.length&&a(["\xA73\xA7lName History\xA76:",...j.names.map(a=>` - §r§6${a.name}`)]);var s=j.pets?.find(a=>a?.active);s&&a(`§3§lActive Pet: ${getPetText(s)}`),q.push(""),p.lore=q;var t=new Item(321);if(t.displayName="\xA73\xA7lView Inventories",t.lore=["",`§3Inventories Of §6${j.username}`,""],j.inv_armor?.data){var u=await decodeNBT(j.inv_armor.data),v=u[3],w=u[2],x=u[1],y=u[0];if(v?.id){var z=new Item(v.id.value,v.Count.value);v.Damage.value&&(z.meta=v.Damage.value),z.displayName=v.tag.value.display.value.Name.value,z.lore=v.tag.value.display.value.Lore.value.value}if(w?.id){var A=new Item(w.id.value,w.Count.value);w.Damage.value&&(A.meta=w.Damage.value),A.displayName=w.tag.value.display.value.Name.value,A.lore=w.tag.value.display.value.Lore.value.value}if(x?.id){var B=new Item(x.id.value,x.Count.value);x.Damage.value&&(B.meta=x.Damage.value),B.displayName=x.tag.value.display.value.Name.value,B.lore=x.tag.value.display.value.Lore.value.value}if(y?.id){var C=new Item(y.id.value,y.Count.value);y.Damage.value&&(C.meta=y.Damage.value),C.displayName=y.tag.value.display.value.Name.value,C.lore=y.tag.value.display.value.Lore.value.value}}m[n]=[p,t,...(z?[z]:[]),...(A?[A]:[]),...(B?[B]:[]),...(C?[C]:[])]}for(var D of m)h.addItems(D.map((a,b)=>({item:a,position:l[m.indexOf(D)]-1+9*b})));var E=new Item(130);if(c.banking){E.displayName=`§6§lBank: §e§l${Math.round(c.banking.balance).toLocaleString()}`,E.lore=[""];var F=c.banking.transactions.reverse();"WITHDRAW"==F[0].action&&0<F[0].amount&&(F[0].amount=parseFloat(`-${F[0].amount}`)),"DEPOSIT"==F[0].action&&0>F[0].amount&&(F[0].amount=Math.abs(F[0].amount));for(var n of F){var G=F.indexOf(n);if(F[G+1]&&F[G+1].initiator_name==n.initiator_name){"WITHDRAW"==F[G+1].action&&0<F[G+1].amount&&(F[G+1].amount=parseFloat(`-${F[G+1].amount}`)),"DEPOSIT"==F[G+1].action&&0>F[G+1].amount&&(F[G+1].amount=Math.abs(F[G+1].amount)),F[G+1].amount=F[G+1].amount+n.amount;continue}if(n.amount){for(var H=[86400000,3600000,60000,1e3],I=["day","hour","minute","second"],J=[Math.round((n.timestamp-new Date().getTime())/H[0]),I[0]],K=1;(0==J[0]||1==J[0]||-1==J[0])&&4>K;)J=[Math.round((n.timestamp-new Date().getTime())/H[K]),I[K]],K+=1;E.lore.push(`${0<n.amount?"\xA7a+":"\xA7c-"} §6${Math.round(Math.abs(n.amount)).toLocaleString()}§7, §e${rtf.format(parseInt(J[0]),[J[1]])} §7by ${n.initiator_name}`)}}E.lore.push("")}else E.displayName="\xA76\xA7lBank: \xA7cThe \xA74Banking API \xA7cIs \xA74OFF \xA7cFor This Profile";h.addItem(E,h.slotCount-1);var L=new Item(357),M=c.community_upgrades?.currently_upgrading;if(M){for(var H=[86400000,3600000,60000,1e3],I=["day","hour","minute","second"],J=[Math.round((M.start_ms-new Date().getTime())/H[0]),I[0]],K=1;(0==J[0]||1==J[0]||-1==J[0])&&4>K;)J=[Math.round((M.start_ms-new Date().getTime())/H[K]),I[K]],K+=1;L.displayName=`§3§lCommunity Upgrades: §2§l${parseText(M.upgrade)} §6§l${M.new_tier}`,L.lore=["",`§3Started §6${rtf.format(J[0],J[1])} §3By §6${c.members[M.who_started]?.username??"\xA7r\xA7cUNKOWN"}`]}else L.displayName="\xA73\xA7lCommunity Upgrades: \xA7rThere Is Nothing Currently Upgrading";h.addItem(L,h.slotCount-2);break;case 2:h=new Inventory(InventoryType.CONTAINER,`§3Stats §8- §3Inventories Of §6${e}`,18);var N=new Item(321);N.displayName="\xA73View Inventory",c.inv_contents||(N.lore=["","\xA7cThis Player Has The \xA74Inventory \xA7cAPI Setting \xA74OFF",""]);var O=new Item(145);O.displayName="\xA73View Accessory Bag",c.talisman_bag||(O.lore=["","\xA7cThis Player Has The \xA74Inventory \xA7cAPI Setting \xA74OFF",""]);var P=new Item(299);P.displayName="\xA73View Wardrobe",c.wardrobe_contents||(P.lore=["","\xA7cThis Player Has The \xA74Inventory \xA7cAPI Setting \xA74OFF",""]);var Q=new Item(54);Q.displayName="\xA73View Personal Vault",c.personal_vault_contents||(Q.lore=["","\xA7cThis Player Has The \xA74Personal Bank Vault \xA7cAPI Setting \xA74OFF",""]),h.addItems([{item:N,position:"0"},{item:O,position:"1"},{item:P,position:"2"},{item:Q,position:"3"}]);break;case 3:h=new Inventory(InventoryType.CONTAINER,`§3Stats §8- §3Inventory Of §6${e}`,45);var R=[];for(var S of c)if(S.id){var T=new Item(S.id.value,S.Count.value);if(S.Damage.value&&(T.meta=S.Damage.value),T.displayName=S.tag.value.display.value.Name.value,T.lore=S.tag.value.display.value.Lore.value.value,9>c.indexOf(S))var U=c.indexOf(S)+27;else var U=c.indexOf(S)-9;R[R.length]={item:T,position:U.toString()}}h.addItems(R);break;case 4:c=c.filter(a=>a?.id?.value);var V=["VERY SPECIAL","SPECIAL","DIVINE","MYTHIC","LEGENDARY","EPIC","RARE","UNCOMMON","COMMON"];c=c.sort((c,a)=>{var b=V.indexOf(c.tag.value.display.value.Lore.value.value[c.tag.value.display.value.Lore.value.value.length-1].split(" ")[0].substr(4).toUpperCase()),d=V.indexOf(a.tag.value.display.value.Lore.value.value[a.tag.value.display.value.Lore.value.value.length-1].split(" ")[0].substr(4).toUpperCase());return b>d?1:b<d?-1:0}),c=c.slice(0,45),h=new Inventory(InventoryType.CONTAINER,`§3Stats §8- Accessory Bag Of §6${e}`,54);var R=[];for(var S of c)if(S.id){var T=new Item(S.id.value,S.Count.value);S.Damage.value&&(T.meta=S.Damage.value),T.displayName=S.tag.value.display.value.Name.value,T.lore=S.tag.value.display.value.Lore.value.value,R[R.length]={item:T,position:c.indexOf(S).toString()}}if(45==c.length){var W=new Item(137);W.displayName=`§3+§6§l${g.filter(a=>a?.id?.value).length-45} §r§3More`,W.lore=[`§3§o+§6§o§l${g.length-45} §r§3§oMore Slots`,`§6§o§l${g.length} §r§3§oTotal Slots`],h.addItem(W,53)}h.addItems(R);break;case 5:h=new Inventory(InventoryType.CONTAINER,`§3Stats §8- Wardrobe Of §6${e}`,54);var R=[];for(var S of c.data.slice(0,36))if(S.id){var T=new Item(S.id.value,S.Count.value);S.Damage.value&&(T.meta=S.Damage.value),T.displayName=S.tag.value.display.value.Name.value,T.lore=S.tag.value.display.value.Lore.value.value,R[R.length]={item:T,position:c.data.indexOf(S).toString()}}for(var X,n=0;9>n;n++){if(X=new Item(351),c.equipped==n+1){X.meta="10",X.displayName=`Slot ${n+1}: §aEquipped`;var v=c.current[3],w=c.current[2],x=c.current[1],y=c.current[0];if(v?.id){var z=new Item(v.id.value,v.Count.value);v.Damage.value&&(z.meta=v.Damage.value),z.displayName=v.tag.value.display.value.Name.value,z.lore=v.tag.value.display.value.Lore.value.value,h.addItem(z,n)}if(w?.id){var A=new Item(w.id.value,w.Count.value);w.Damage.value&&(A.meta=w.Damage.value),A.displayName=w.tag.value.display.value.Name.value,A.lore=w.tag.value.display.value.Lore.value.value,h.addItem(A,n+9)}if(x?.id){var B=new Item(x.id.value,x.Count.value);w.Damage.value&&(B.meta=x.Damage.value),B.displayName=x.tag.value.display.value.Name.value,B.lore=x.tag.value.display.value.Lore.value.value,h.addItem(B,n+18)}if(y?.id){var C=new Item(y.id.value,y.Count.value);w.Damage.value&&(C.meta=y.Damage.value),C.displayName=y.tag.value.display.value.Name.value,C.lore=y.tag.value.display.value.Lore.value.value,h.addItem(C,n+27)}}else R.find(a=>a.position==n)||R.find(a=>a.position==n+9)||R.find(a=>a.position==n+18)||R.find(a=>a.position==n+27)?(X.meta="9",X.displayName=`Slot ${n+1}: §aReady`):(X.meta="8",X.displayName=`Slot ${n+1}: §cEmpty`);R[R.length]={item:X,position:36+n}}h.addItems(R);var Y=new Item(262);Y.displayName="\xA7aNext Page",Y.lore=["\xA7ePage 2"],h.addItem(Y,h.slotCount-4);break;case 6:h=new Inventory(InventoryType.CONTAINER,`§3Stats §8- Wardrobe Of §6${e}`,54);var R=[];for(var S of c.data.slice(36))if(S.id){var T=new Item(S.id.value,S.Count.value);S.Damage.value&&(T.meta=S.Damage.value),T.displayName=S.tag.value.display.value.Name.value,T.lore=S.tag.value.display.value.Lore.value.value,R[R.length]={item:T,position:(c.data.indexOf(S)-36).toString()}}for(var X,n=0;9>n;n++){if(X=new Item(351),c.equipped==n+9+1){X.meta="10",X.displayName=`Slot ${n+1}: §aEquipped`;var v=c.current[3],w=c.current[2],x=c.current[1],y=c.current[0];if(v?.id){var z=new Item(v.id.value,v.Count.value);v.Damage.value&&(z.meta=v.Damage.value),z.displayName=v.tag.value.display.value.Name.value,z.lore=v.tag.value.display.value.Lore.value.value,h.addItem(z,n)}if(w?.id){var A=new Item(w.id.value,w.Count.value);w.Damage.value&&(A.meta=w.Damage.value),A.displayName=w.tag.value.display.value.Name.value,A.lore=w.tag.value.display.value.Lore.value.value,h.addItem(A,n+9)}if(x?.id){var B=new Item(x.id.value,x.Count.value);w.Damage.value&&(B.meta=x.Damage.value),B.displayName=x.tag.value.display.value.Name.value,B.lore=x.tag.value.display.value.Lore.value.value,h.addItem(B,n+18)}if(y?.id){var C=new Item(y.id.value,y.Count.value);w.Damage.value&&(C.meta=y.Damage.value),C.displayName=y.tag.value.display.value.Name.value,C.lore=y.tag.value.display.value.Lore.value.value,h.addItem(C,n+27)}}else R.find(a=>a.position==n)||R.find(a=>a.position==n+9)||R.find(a=>a.position==n+18)||R.find(a=>a.position==n+27)?(X.meta="9",X.displayName=`Slot ${n+9+1}: §aReady`):(X.meta="8",X.displayName=`Slot ${n+9+1}: §cEmpty`);R[R.length]={item:X,position:36+n}}h.addItems(R);var Z=new Item(262);Z.displayName="Previous Page",Z.lore=["\xA7ePage 1"],h.addItem(Z,h.slotCount-6);break;case 7:h=new Inventory(InventoryType.CONTAINER,`§3Stats §8- Personal Vault Of §6${e}`,36);var R=[];for(var S of c)if(S.id){var T=new Item(S.id.value,S.Count.value);S.Damage.value&&(T.meta=S.Damage.value),T.displayName=S.tag.value.display.value.Name.value,T.lore=S.tag.value.display.value.Lore.value.value,R[R.length]={item:T,position:c.indexOf(S).toString()}}h.addItems(R);break;default:h=new Inventory(InventoryType.CONTAINER,"\xA7cERROR",9);}var $=new Item(399);$.displayName="\xA76Reload",h.addItem($,h.slotCount-9);const _=new Item(166);return _.displayName="\xA7cClose",h.addItem(_,h.slotCount-5),h.on("click",async i=>{if(0!=i.mode)return void i.cancel(d.client);var j=i?.raw?.item?.nbtData?.value?.display?.value?.Name?.value,k=i?.raw?.item?.nbtData?.value?.display?.value?.Lore?.value?.value??[];switch(i.slot){case h.slotCount-5:h.close(d),a.display(d);break;case h.slotCount-9:h.close(d),d.sendMessage("Reloading..."),(await createStatsInventoryOverlay(a,b,g,d,e,f)).display(d);break;default:if(j){if(j.endsWith("View Inventories")){h.close(d),(await createStatsInventoryOverlay(h,2,Object.values(c.members).find(a=>a.username==k[1].split("\xA76")[1]),d,k[1].split("\xA76")[1])).display(d);break}if(j.endsWith("View Inventory")&&!k[1]?.includes("OFF")){h.close(d),(await createStatsInventoryOverlay(h,3,await decodeNBT(c.inv_contents.data),d,e)).display(d);break}if(j.endsWith("View Accessory Bag")&&!k[1]?.includes("OFF")){h.close(d),(await createStatsInventoryOverlay(h,4,await decodeNBT(c.talisman_bag.data),d,e)).display(d);break}if(j.endsWith("View Wardrobe")&&!k[1]?.includes("OFF")){h.close(d),(await createStatsInventoryOverlay(h,5,{data:await decodeNBT(c.wardrobe_contents.data),equipped:c.wardrobe_equipped_slot,current:await decodeNBT(c.inv_armor.data)},d,e)).display(d);break}if(j.includes("Previous Page")||j.includes("Next Page")){h.close(d),(await createStatsInventoryOverlay(a,j.includes("Previous Page")?5:6,g,d,e)).display(d);break}if(j.endsWith("View Personal Vault")&&!k[1]?.includes("OFF")){h.close(d),(await createStatsInventoryOverlay(h,7,await decodeNBT(c.personal_vault_contents.data),d,e)).display(d);break}}i.cancel(d.client);}}),h}async function createStatsInventory(a){function b(){switch(i.length){case 1:return[{item:i[0],position:13}];case 2:return[{item:i[0],position:12},{item:i[1],position:14}];case 3:return[{item:i[0],position:11},{item:i[1],position:13},{item:i[2],position:15}];case 4:return[{item:i[0],position:10},{item:i[1],position:12},{item:i[2],position:14},{item:i[3],position:16}];case 5:return[{item:i[0],position:9},{item:i[1],position:11},{item:i[2],position:13},{item:i[3],position:15},{item:i[4],position:17}];case 6:return Logger.warn(`SkyblockStats | parseProfileItems() ERROR | Inputted Data:\n\n${JSON.stringify(i)}\n\nWith Length: 6`),[{item:i[0],position:10},{item:i[1],position:11},{item:i[2],position:12},{item:i[3],position:14},{item:i[4],position:15},{item:i[5],position:16}];case 7:return Logger.warn(`SkyblockStats | parseProfileItems() ERROR | Inputted Data:\n\n${JSON.stringify(i)}\n\nWith Length: 7`),[{item:i[0],position:10},{item:i[1],position:11},{item:i[2],position:12},{item:i[3],position:13},{item:i[4],position:14},{item:i[5],position:15},{item:i[6],position:16}];case 8:return Logger.warn(`SkyblockStats | parseProfileItems() ERROR | Inputted Data:\n\n${JSON.stringify(i)}\n\nWith Length: 8`),[{item:i[0],position:9},{item:i[1],position:10},{item:i[2],position:11},{item:i[3],position:12},{item:i[4],position:14},{item:i[5],position:15},{item:i[6],position:16},{item:i[7],position:17}];case 9:return Logger.warn(`SkyblockStats | parseProfileItems() ERROR | Inputted Data:\n\n${JSON.stringify(i)}\n\nWith Length: 9`),[{item:i[0],position:9},{item:i[1],position:10},{item:i[2],position:11},{item:i[3],position:12},{item:i[4],position:13},{item:i[5],position:14},{item:i[6],position:15},{item:i[7],position:16},{item:i[8],position:17}];default:return Logger.error(`parseProfileItems() ERROR | HANDLED BY DEFAULT | Inputted Data:\n\n${JSON.stringify(i)}\n\nWith Length: ${i.length}`),[{item:i[0],position:9},{item:i[1],position:10},{item:i[2],position:11},{item:i[3],position:12},{item:i[4],position:13},{item:i[5],position:14},{item:i[6],position:15},{item:i[7],position:16},{item:i[8],position:17}];}}var{name:c,id:d}=await getUser(a);if(a=cmd.player,!c||!d)return sendMessage("This Player Doesn't Exist!");var{profiles:e}=await fetch(`/skyblock/profiles?uuid=${d}`);e=e.map(a=>({profile:a.profile_id,name:a.cute_name,last_save:a.members[d].last_save})).sort((c,a)=>c.last_save<a.last_save?1:c.last_save>a.last_save?-1:0).map(a=>e.find(b=>b.profile_id==a.profile)),e=e.map(a=>0==e.indexOf(a)?{...a,current:!0}:{...a,current:!1});const f=new Inventory(InventoryType.CONTAINER,`§3Stats §8- §6${c}`,54),g=new Item(166);g.displayName="\xA7cClose";const h=new Item(137);h.displayName="\xA73\xA7lUUID",h.lore=["","\xA7rThe \xA73UUID \xA7rFor This Player","",`§6${d}`,""];var i=e.map(a=>{var b=new Item(339);return b.displayName=`§2${a.cute_name}`,b.lore=["",`§6${c}§r's Profile: §3${a.cute_name}`,...(a.current?["","\xA76CURRENT",""]:[""])],b});f.addItems([{item:h,position:45},{item:g,position:49},...b()]);const j=(await fetch(`/status?uuid=${d}`))?.session;if(j){var k=new Item(35);j.online?(k.meta=5,k.displayName="\xA7a\xA7lONLINE",k.lore=[""],j.gameType&&k.lore.push(`§rGame: §6${parseText(j.gameType)}`),j.mode&&k.lore.push(`§rMode: §6${parseText(j.mode)}`),j.map&&k.lore.push(`§rMap: §6${parseText(j.map)}`)):(k.meta=14,k.displayName="\xA7c\xA7lOFFLINE"),f.addItem(k,f.slotCount-1)}return f.on("click",async g=>{if(0!=g.mode)return void g.cancel(a.client);switch(g.slot){case 49:f.close(a);break;default:var h=b();if(h.find(a=>a.position==g.slot)){f.close(a),(await createStatsInventoryOverlay(f,1,e[h.indexOf(h.find(a=>a.position==g.slot))],a,c,d)).display(a);break}g.cancel(a.client);}}),f}cmd.onTriggered=async(a,b)=>{var c=b[0]??"help",d=b[1]??null;switch(c){case"help":player.sendMessage(helpMenuText);break;case"stats":if(!d){sendMessage("\xA7cRequires \xA76Player \xA7cInput\xA76: \xA7r(\xA76/sb stats \xA73player\xA7r)");break}(await createStatsInventory(d)).display(cmd.player);break;case"purse":d||(d=cmd.player.client.username);var{name:e,id:f}=await getUser(d);if(!e||!f)return sendMessage("This Player Doesn't Exist!");var{profiles:g}=await fetch(`/skyblock/profiles?uuid=${f}`);g=g.map(a=>({profile:a.profile_id,name:a.cute_name,last_save:a.members[f].last_save})).sort((c,a)=>c.last_save<a.last_save?1:c.last_save>a.last_save?-1:0).map(a=>g.find(b=>b.profile_id==a.profile)),g=g.map(a=>0==g.indexOf(a)?{...a,current:!0}:{...a,current:!1});var h=g.find(a=>a.current);sendMessage(`§6§l${e}§r§3's Purse On §2§l${h.cute_name}§r§3: §e${(Math.round(10*h.members[Object.keys(h.members).find(a=>a==f)].coin_purse)/10).toLocaleString()}`);break;default:Object.keys(helpMenuItems).includes(c)?sendMessage("Whoops, Something Went Wrong, That Command Doesn't Seem To Work..."):sendMessage("Nah Fam That Ain't A Command \xA7l\xA76:/");}},registerCommand(cmd),registerPlugin({name:"Skyblock",description:"Skyblock Helper",version:"1.0.0",author:"TBHGodPro"});