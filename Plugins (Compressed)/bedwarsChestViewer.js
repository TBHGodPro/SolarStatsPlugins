(()=>{const{Command:e,Inventory:t,InventoryType:a,Item:i}=toolbox,o=new e("ec",[],[]),n=new e("tc",[],[]);let l=null,d=null,m=[],s=null,r=[];player.proxy.on("incoming",((e,t)=>{"open_window"==t.name&&("container.enderchest"==JSON.parse(e.windowTitle).translate&&(d=e.windowId),"container.chest"==JSON.parse(e.windowTitle).translate&&(s=e.windowId)),"window_items"!=t.name||d!=e.windowId&&s!=e.windowId||(d==e.windowId?m=e.items:r=e.items)})),player.proxy.on("outgoing",((e,t)=>{if("window_click"==t.name){if(d==e.windowId||s==e.windowId){var a=e.slot;if(d==e.windowId){if(e.slot>26&&1==e.mode){if(l=e.item,e.slot=m.indexOf(m.find((t=>t.blockId==e.item.blockId&&t.itemDamage==e.item.itemDamage&&t.nbtData==e.item.nbtData&&t.itemCount<64))),(-1==e.slot||e.slot>26)&&(e.slot=m.indexOf(m.find((e=>-1==e.blockId)))),e.slot>26)return}else if(1==e.mode)return void(m[e.slot]={blockId:-1,itemCount:void 0,itemDamage:void 0,nbtData:void 0});m[e.slot]?.itemCount&&a>26?m[e.slot].itemCount+=e.item.itemCount:m[e.slot]=e.item}else{if(e.slot>26&&1==e.mode){if(l=e.item,e.slot=r.indexOf(r.find((t=>t.blockId==e.item.blockId&&t.itemDamage==e.item.itemDamage&&t.nbtData==e.item.nbtData&&t.itemCount<64))),(-1==e.slot||e.slot>26)&&(e.slot=r.indexOf(r.find((e=>-1==e.blockId)))),e.slot>26)return}else if(1==e.mode)return void(r[e.slot]={blockId:-1,itemCount:void 0,itemDamage:void 0,nbtData:void 0});r[e.slot]?.itemCount&&a>26?r[e.slot].itemCount+=e.item.itemCount:r[e.slot]=e.item}}l=e.item}})),o.onTriggered=async()=>{if(m?.length){const n=new t(a.CONTAINER,"§5§lEnder Chest §r§f(At Last View)",27);for(var e of m){var o=new i(e?.blockId,e?.itemCount);o.meta=e?.itemDamage,e?.nbtData?.value?.display?.value?.Name?.value&&(o.displayName=e?.nbtData?.value?.display?.value?.Name?.value),e?.nbtData?.value?.display?.value?.Lore?.value?.value&&(o.lore=e?.nbtData?.value?.display?.value?.Lore?.value?.value),n.addItem(o,m.indexOf(e))}n.on("click",(e=>e.cancel(player.client))),n.display(player)}},n.onTriggered=async()=>{if(r?.length){const n=new t(a.CONTAINER,"§a§lTeam Chest §r§f(At Last View)",27);for(var e of r){var o=new i(e?.blockId,e?.itemCount);o.meta=e?.itemDamage,e?.nbtData?.value?.display?.value?.Name?.value&&(o.displayName=e?.nbtData?.value?.display?.value?.Name?.value),e?.nbtData?.value?.display?.value?.Lore?.value?.value&&(o.lore=e?.nbtData?.value?.display?.value?.Lore?.value?.value),n.addItem(o,r.indexOf(e))}n.on("click",(e=>e.cancel(player.client))),n.display(player)}},registerCommand(o),registerCommand(n),registerPlugin({name:"Bedwars Chest Viewer",description:"View Your Ender Chest And Team Chest From Anywhere | `/ec` `/tc`",version:"1.2.1",author:"TBHGodPro"})})();