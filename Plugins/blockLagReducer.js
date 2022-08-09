let enabled = toolbox.getConfigSync().modules.blockLagReducer;

const settingItem = new toolbox.Item(35);
settingItem.meta = 14;
settingItem.displayName = "§rBlock Lag Reducer";
settingItem.lore = ["", "§7Slightly Reduces Block Lag", "", `§7Current: §${enabled ? "aEnabled" : "cDisabled"}`];

const module = new toolbox.PlayerModule("Block Lag Reducer", "Slightly Reduces Block Lag", settingItem, "blockLagReducer").handle("ConfigChange", e => {
	enabled = e;
});

player.proxy.on("outgoing", async (data, meta, toClient, toServer) => {
	if (!enabled) return;
	if (meta.name != "block_place") return;
	toServer.write("block_place", data);
	var timesChanged = 0;
	var list = (dat, met) => {
		if (met.name != "block_change") return;
		if (JSON.stringify(dat.location) != JSON.stringify(data.location)) return;
		if (dat.type != 0) return;
		if (timesChanged >= 50) return player.proxy.removeListener("incoming", list);
		setTimeout(() => toServer.write("block_place", data), 25);
		timesChanged += 1;
	};
	player.proxy.on("incoming", list);
	setTimeout(() => player.proxy.removeListener("incoming", list), 2000);
});

registerPlayerModule(module);

registerPlugin({
	name: "Block Lag Reducer",
	description: "Slightly Reduces Block Lag | `/ss`",
	version: "1.0.0",
	author: "TBHGodPro"
});
