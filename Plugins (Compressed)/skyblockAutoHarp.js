(()=>{const{PlayerModule:o,Item:t,getConfigSync:n}=toolbox,e=new t(261);e.displayName="§rSkyblock Auto-Harp",e.lore=["","§7Automatically Do Harp Songs (MACRO)","§4§lWARNING: §r§cREQUIRES DECENT PING","","§7Current: §"+(n().modules.skyblockAutoHarp?"aEnabled":"cDisabled")];const i=new o("Skyblock Auto-Harps","Automatically Do Harp Songs (MACRO)",e,"skyblockAutoHarp");var l=null,a=null;async function r(o,t,n,e){if(i.enabled){if("window_click"==t.name&&(a=o.action+1),"set_slot"==t.name&&o.windowId==l&&o.slot>36&&o.slot<44&&155==o.item.blockId){e.write("window_click",{windowId:l,slot:o.slot,mouseButton:2,action:a,mode:3,item:o.item});var r=!0;function s(t,n){"set_slot"==n.name&&t.windowId==l&&t.slot==o.slot&&159==t.item.blockId&&(r=!1)}player.proxy.on("incoming",s),a+=1,setTimeout((()=>{r&&(e.write("window_click",{windowId:l,slot:o.slot,mouseButton:2,action:a,mode:3,item:o.item}),a+=1),player.proxy.removeListener("incoming",s)}),410)}"open_window"==t.name&&JSON.parse(o.windowTitle)?.translate?.startsWith("Harp - ")&&(l=o.windowId,a=1),"close_window"==t.name&&o.windowId==l&&(l=null)}}player.proxy.on("incoming",r),player.proxy.on("outgoing",r),registerPlayerModule(i),registerPlugin({name:"Skyblock Auto-Harp",description:"Automatically Do Harp Songs (MACRO) | `/ss`",version:"1.0.2",author:"TBHGodPro"})})();