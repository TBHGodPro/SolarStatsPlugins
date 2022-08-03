var oldConfig = null;
var config = toolbox.getConfigSync();

const settingItem = new toolbox.Item(4);
settingItem.displayName = "§5§lLC §r§fStaff Mods §7(X-RAY)";
settingItem.lore = ["", "§7Enable §fStaff Mods §7For §5Lunar Client", "", `§7Current: §${config.modules.staffMods ? "aEnabled" : "cDisabled"}`];

const module = new toolbox.PlayerModule("LC Staff Mods (X-RAY)", "Enable Staff Mods For Lunar Client", settingItem, "staffMods");

module.customCode = () => {
	setInterval(async () => {
		oldConfig = config;
		config = await toolbox.getConfig();
		if (JSON.stringify(oldConfig) != JSON.stringify(config)) {
			if (config.modules.staffMods) {
				player.lcPlayer?.setStaffModState("XRAY", true);
				player.lcPlayer?.sendNotification("Enabled Staff Mods", 1000, "success");
			} else {
				player.lcPlayer?.setStaffModState("XRAY", false);
				player.lcPlayer?.sendNotification("Disabled Staff Mods", 1000, "error");
			}
		}
	}, 500);
};

registerPlayerModule(module);

registerPlugin({
	name: "LC Staff Mods (X-RAY)",
	description: "Enable Staff Mods For Lunar Client | `/ss`",
	version: "1.0.3",
	author: "TBHGodPro"
});
