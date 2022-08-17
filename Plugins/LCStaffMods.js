const settingItem = new toolbox.Item(4);
settingItem.displayName = "§5§lLC §r§fStaff Mods §7(X-RAY)";
settingItem.lore = ["", "§7Enable §fStaff Mods §7For §5Lunar Client", "", `§7Current: §${toolbox.getConfigSync().modules.staffMods ? "aEnabled" : "cDisabled"}`];

const module = new toolbox.PlayerModule("LC Staff Mods (X-RAY)", "Enable Staff Mods For Lunar Client", settingItem, "staffMods");

module.customCode = async () => {
	if (module.enabled) {
		player.lcPlayer?.setStaffModState("XRAY", true);
	}
};

module.onConfigChange = enabled => {
	if (enabled) {
		player.lcPlayer?.sendNotification("Enabled Staff Mods", 1000, "info");
		player.lcPlayer?.setStaffModState("XRAY", true);
	} else {
		player.lcPlayer?.sendNotification("Disabled Staff Mods", 1000, "info");
		player.lcPlayer?.setStaffModState("XRAY", false);
	}
};

registerPlayerModule(module);

registerPlugin({
	name: "LC Staff Mods (X-RAY)",
	description: "Enable Staff Mods For Lunar Client | `/ss`",
	version: "1.1.0",
	author: "TBHGodPro"
});
