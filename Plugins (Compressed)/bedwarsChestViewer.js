(()=>{var e={247:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const a=requireModule("node:fs"),i=requireModule("node-fetch"),n=async e=>{e+=".js";var t=__dirname.split("/");t.pop(),t.pop(),t=t.join("/")+"/plugins";let o=a.readFileSync(`${t}/${e}`,"utf8");o=o.split('version:"')[o.split('version:"').length-1].split('",')[0];const n=await i(`https://raw.githubusercontent.com/TBHGodPro/SolarStatsPlugins/main/Plugins%20(Compressed)/${e}`).then((e=>e.text()));if(!n||"404: Not Found"==n)return;const l=n.split('version:"')[n.split('version:"').length-1].split('",')[0];(function(e,t){if(e==t)return!1;const o=e.split(".").map((e=>parseInt(e))),a=t.split(".").map((e=>parseInt(e)));console.log(o,a);var i=0;for(const e of o){if(o[i]<a[i])return!0;i+=1}return!1})(o,l)&&setTimeout((()=>{Logger.info(`UPDATING PLUGIN FROM ${o} TO ${l}, PLEASE RESTART SOLAR STATS`),a.writeFile(`${t}/${e}`,n,{},(()=>{}))}),500)}}},t={};function o(a){var i=t[a];if(void 0!==i)return i.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{o(247).Z("bedwarsChestViewer");const{Command:e,Inventory:t,InventoryType:a,Item:i}=toolbox,n=new e("ec",[],[]),l=new e("tc",[],[]);let r=null,s=null,d=[],m=null,u=[];player.proxy.on("incoming",((e,t)=>{"open_window"==t.name&&("container.enderchest"==JSON.parse(e.windowTitle).translate&&(s=e.windowId),"container.chest"==JSON.parse(e.windowTitle).translate&&(m=e.windowId)),"window_items"!=t.name||s!=e.windowId&&m!=e.windowId||(s==e.windowId?d=e.items:u=e.items)})),player.proxy.on("outgoing",((e,t)=>{if("window_click"==t.name){if(s==e.windowId||m==e.windowId){var o=e.slot;if(s==e.windowId){if(e.slot>26&&1==e.mode){if(r=e.item,e.slot=d.indexOf(d.find((t=>t.blockId==e.item.blockId&&t.itemDamage==e.item.itemDamage&&t.nbtData==e.item.nbtData&&t.itemCount<64))),(-1==e.slot||e.slot>26)&&(e.slot=d.indexOf(d.find((e=>-1==e.blockId)))),e.slot>26)return}else if(1==e.mode)return void(d[e.slot]={blockId:-1,itemCount:void 0,itemDamage:void 0,nbtData:void 0});d[e.slot]?.itemCount&&o>26?d[e.slot].itemCount+=e.item.itemCount:d[e.slot]=e.item}else{if(e.slot>26&&1==e.mode){if(r=e.item,e.slot=u.indexOf(u.find((t=>t.blockId==e.item.blockId&&t.itemDamage==e.item.itemDamage&&t.nbtData==e.item.nbtData&&t.itemCount<64))),(-1==e.slot||e.slot>26)&&(e.slot=u.indexOf(u.find((e=>-1==e.blockId)))),e.slot>26)return}else if(1==e.mode)return void(u[e.slot]={blockId:-1,itemCount:void 0,itemDamage:void 0,nbtData:void 0});u[e.slot]?.itemCount&&o>26?u[e.slot].itemCount+=e.item.itemCount:u[e.slot]=e.item}}r=e.item}})),n.onTriggered=async()=>{if(d?.length){const n=new t(a.CONTAINER,"§5§lEnder Chest §r§f(At Last View)",27);for(var e of d){var o=new i(e?.blockId,e?.itemCount);o.meta=e?.itemDamage,e?.nbtData?.value?.display?.value?.Name?.value&&(o.displayName=e?.nbtData?.value?.display?.value?.Name?.value),e?.nbtData?.value?.display?.value?.Lore?.value?.value&&(o.lore=e?.nbtData?.value?.display?.value?.Lore?.value?.value),n.addItem(o,d.indexOf(e))}n.on("click",(e=>e.cancel(player.client))),n.display(player)}},l.onTriggered=async()=>{if(u?.length){const n=new t(a.CONTAINER,"§a§lTeam Chest §r§f(At Last View)",27);for(var e of u){var o=new i(e?.blockId,e?.itemCount);o.meta=e?.itemDamage,e?.nbtData?.value?.display?.value?.Name?.value&&(o.displayName=e?.nbtData?.value?.display?.value?.Name?.value),e?.nbtData?.value?.display?.value?.Lore?.value?.value&&(o.lore=e?.nbtData?.value?.display?.value?.Lore?.value?.value),n.addItem(o,u.indexOf(e))}n.on("click",(e=>e.cancel(player.client))),n.display(player)}},registerCommand(n),registerCommand(l),registerPlugin({name:"Bedwars Chest Viewer",description:"View Your Ender Chest And Team Chest From Anywhere | `/ec` `/tc`",version:"1.3.0",author:"TBHGodPro"})})()})();