(()=>{const e=new toolbox.Item(4);e.displayName="§5§lLC §r§fStaff Mods §7(X-RAY)",e.lore=["","§7Enable §fStaff Mods §7For §5Lunar Client","","§7Current: §"+(toolbox.getConfigSync().modules.staffMods?"aEnabled":"cDisabled")];const o=new toolbox.PlayerModule("LC Staff Mods (X-RAY)","Enable Staff Mods For Lunar Client",e,"staffMods");o.customCode=async()=>{(await toolbox.getConfig()).modules.staffMods&&player.lcPlayer?.setStaffModState("XRAY",!0)},o.onConfigChange=e=>{e?(player.lcPlayer?.setStaffModState("XRAY",!0),player.lcPlayer?.sendNotification("Enabled Staff Mods",1e3,"info")):(player.lcPlayer?.setStaffModState("XRAY",!1),player.lcPlayer?.sendNotification("Disabled Staff Mods",1e3,"info"))},registerPlayerModule(o),registerPlugin({name:"LC Staff Mods (X-RAY)",description:"Enable Staff Mods For Lunar Client | `/ss`",version:"1.0.7",author:"TBHGodPro"})})();