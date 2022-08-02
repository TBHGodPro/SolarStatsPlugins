const settingItem = new toolbox.Item(4);
settingItem.displayName = "§5§lLC §r§fStaff Mods §7(X-RAY)";
settingItem.lore = ["", "§7Enable §fStaff Mods §7For §5Lunar Client", "", `§7Current: §${toolbox.getConfigSync().modules.staffMods ? "aEnabled" : "cDisabled"}`];

const module = new toolbox.PlayerModule("LC Staff Mods (X-RAY)", "Enable Staff Mods For Lunar Client", settingItem, "staffMods");

var oldConfig = null;
var config = toolbox.getConfigSync();

module.customCode = () => {
	setInterval(async () => {
		oldConfig = config;
		config = await toolbox.getConfig();
		if (JSON.stringify(oldConfig) != JSON.stringify(config)) {
			if (config.modules.staffMods) {
				player.lcPlayer?.setStaffModState("XRAY", true);
				player.lcPlayer?.sendNotification("Enabled Staff Mods", "success");
			} else {
				player.lcPlayer?.setStaffModState("XRAY", false);
				player.lcPlayer?.sendNotification("Disabled Staff Mods", "error");
			}
		}
	}, 500);
};

registerPlugin({
	name: "LC Staff Mods (X-RAY)",
	description: "Enable Staff Mods For Lunar Client",
	version: "1.0.0",
	author: "TBHGodPro"
});

registerPlayerModule(module);
