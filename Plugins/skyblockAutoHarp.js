const { PlayerModule, Item, getConfigSync, getConfig } = toolbox;
var enabled = getConfigSync().modules.skyblockAutoHarp;

const settingItem = new Item(261);
settingItem.displayName = "§rSkyblock Auto-Harp";
settingItem.lore = ["", "§7Automatically Do Harp Songs (MACRO)", "§7§lWARNING: §rREQUIRES DECENT PING", "", `§7Current: §${enabled ? "aEnabled" : "cDisabled"}`];

const module = new PlayerModule("Skyblock Auto-Harps", "Automatically Do Harp Songs (MACRO)", settingItem, "skyblockAutoHarp");

var windowId = null;
var nextAction = null;

async function list(data, meta, toClient, toServer) {
	if (!(await getConfig()).modules.skyblockAutoHarp) return;
	if (meta.name == "window_click") {
		nextAction = data.action + 1;
	}
	if (meta.name == "set_slot" && data.windowId == windowId && data.slot > 36 && data.slot < 44 && data.item.blockId == 155) {
		toServer.write("window_click", {
			windowId: windowId,
			slot: data.slot,
			mouseButton: 2,
			action: nextAction,
			mode: 3,
			item: data.item
		});
		var next = true;
		function quickList(dat, met) {
			if (met.name == "set_slot" && dat.windowId == windowId && dat.slot == data.slot && dat.item.blockId == 159) next = false;
		}
		player.proxy.on("incoming", quickList);
		nextAction += 1;
		setTimeout(() => {
			if (next) {
				toServer.write("window_click", {
					windowId: windowId,
					slot: data.slot,
					mouseButton: 2,
					action: nextAction,
					mode: 3,
					item: data.item
				});
				nextAction += 1;
			}
			player.proxy.removeListener("incoming", quickList);
		}, 410);
	}
	if (meta.name == "open_window" && JSON.parse(data.windowTitle)?.translate?.startsWith("Harp - ")) {
		windowId = data.windowId;
		nextAction = 1;
	}
	if (meta.name == "close_window" && data.windowId == windowId) {
		windowId = null;
	}
}

player.proxy.on("incoming", list);
player.proxy.on("outgoing", list);

module.onConfigChange = e => {
	enabled = e;
};

registerPlayerModule(module);

registerPlugin({
	name: "Skyblock Auto-Harp",
	description: "Automatically Do Harp Songs (MACRO) | `/ss`",
	version: "1.0.1",
	author: "TBHGodPro"
});
