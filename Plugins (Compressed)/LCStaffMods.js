(()=>{const o=new toolbox.Item(4);o.displayName="§5§lLC §r§fStaff Mods §7(X-RAY)",o.lore=["","§7Enable §fStaff Mods §7For §5Lunar Client","","§7Current: §"+(toolbox.getConfigSync().modules.staffMods?"aEnabled":"cDisabled")];const e=new toolbox.PlayerModule("LC Staff Mods (X-RAY)","Enable Staff Mods For Lunar Client",o,"staffMods");var t=null,a=toolbox.getConfigSync();e.customCode=()=>{setInterval((async()=>{t=a,a=await toolbox.getConfig(),JSON.stringify(t)!=JSON.stringify(a)&&(a.modules.staffMods?(player.lcPlayer?.setStaffModState("XRAY",!0),player.lcPlayer?.sendNotification("Enabled Staff Mods","success")):(player.lcPlayer?.setStaffModState("XRAY",!1),player.lcPlayer?.sendNotification("Disabled Staff Mods","error")))}),500)},registerPlayerModule(e),registerPlugin({name:"LC Staff Mods (X-RAY)",description:"Enable Staff Mods For Lunar Client | `/ss`",version:"1.0.2",author:"TBHGodPro"})})();