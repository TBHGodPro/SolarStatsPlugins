const fs = requireModule("node:fs");

function getConfig(value) {
	var data = JSON.parse(fs.readFileSync("./config.json", "utf8"));

	if (value) var data = data[value];

	return data;
}

function setConfig(settingData, key) {
	var data = getConfig();
	if (key) {
		data[key] = settingData;
	} else {
		data = settingData;
	}
	fs.writeFileSync("./config.json", data);
}

module.exports = async () => {
	const settingItem = new toolbox.Item(355);
	settingItem.displayName = "§fBedwars Cheats";
	settingItem.lore = ["", "§7A Set of cheats for Bedwars", "", `§7Current: §${(await toolbox.getConfig()).modules.bedwarsCheats ? "aEnabled" : "cDisabled"}`];

	const module = new toolbox.PlayerModule("BedwarsCheats", "A Set a cheats for Bedwars", settingItem, "bedwarsCheats");

	let submodules = [require("./submodules/autoattack")];

	for (var submodule of submodules) {
		submodules[submodules.indexOf(submodule)] = await submodule(module, getConfig, setConfig);
	}

	module.customCode = () => {
		for (const submodule of submodules) submodule[0](getConfig, setConfig);
	};

	module.onDisconnect = () => {
		for (const submodule of submodules) submodule[1](getConfig, setConfig);
	};

	registerPlayerModule(module);
};
