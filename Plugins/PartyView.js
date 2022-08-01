const getUUID = name => {
	return player.connectedPlayers.find(p => p.name == name)?.uuid;
};

const settingItem = new toolbox.Item(4);
settingItem.displayName = "§rParty View";
settingItem.lore = ["", "§7Use The Lunar Client Team View", "§7Mod To See Your Party Members", "", `§7Current: §${toolbox.getConfigSync().modules.PartyView ? "aEnabled" : "cDisabled"}`];

const module = new toolbox.PlayerModule("Party View", "View Your Party Members With LC Team View", settingItem, "PartyView");

var oldConfig = null;
var config = toolbox.getConfigSync();

var partyMembers = [];

module.customCode = () => {
	player.proxy.on("incoming", async (data, meta, toClient, toServer) => {
		if (meta.name != "chat") return;
		var message = JSON.parse(data.message);
		message.extra ??= [];
		var text = [message.text, ...message.extra.map(i => i.text)].join("");
		if (text.endsWith("joined the party.")) {
			var name = text.split(" ");
			name = name.splice(name[0].startsWith("[") ? 1 : 0, name.length - (name[0].startsWith("[") ? 4 : 3)).join(" ");
			partyMembers.push(name);
			if (config.modules.PartyView) {
				var id = getUUID(name);
				if (!id) return;
				player.lcPlayer.addTeammate(id);
			}
		}
		if (text.endsWith("left the party.") && !text.startsWith("You")) {
			var name = text.split(" ");
			name = name.splice(name[0].startsWith("[") ? 1 : 0, name.length - (name[0].startsWith("[") ? 4 : 3)).join(" ");
			partyMembers = partyMembers.filter(i => i != name);
			if (config.modules.PartyView) {
				var id = getUUID(name);
				if (!id) return;
				player.lcPlayer.removeTeammate(id);
			}
		}
		if (text.includes("has disbanded the party!") || text.includes("You left the party.")) {
			partyMembers = [];
			player.lcPlayer.removeAllTeammates();
		}
		if (text.includes("You have joined") && text.includes("party!")) {
			setTimeout(() => player.executeCommand("/p list"), 1000);
		}
		if (text.includes("Party Leader:")) {
			var name = text.split(" ");
			name = name.splice(name[0].startsWith("[") ? 4 : 3, name.length - (name[0].startsWith("[") ? 5 : 4)).join(" ");
			partyMembers = [];
			player.lcPlayer.removeAllTeammates();
			partyMembers.push(name);
			if (config.modules.PartyView) {
				var id = getUUID(name);
				if (!id) return;
				player.lcPlayer.addTeammate(id);
			}
		}
		if (text.includes("Party Moderators:") || text.includes("Party Members:")) {
			var names = text.split(" ");
			names = names
				.splice(2, names.length)
				.join(" ")
				.split("● ")
				.map(i =>
					i
						.split(" ")
						.splice(names[0].startsWith("[") ? 2 : 1, names.length - (names[0].startsWith("[") ? 2 : 1))
						.join(" ")
				);
			partyMembers = [];
			partyMembers.push(names);

			if (config.modules.PartyView) {
				for (var name of names) {
					var id = getUUID(name);
					if (!id) return;
					player.lcPlayer.addTeammate(id);
				}
			}
		}
	});
	setInterval(async () => {
		oldConfig = config;
		config = await toolbox.getConfig();
		if (JSON.stringify(oldConfig) != JSON.stringify(config)) {
			if (config.modules.PartyView) {
				partyMembers.forEach(async name => {
					var id = getUUID(name);
					if (!id) return;
					player.lcPlayer.addTeammate(id);
				});
			} else {
				player.lcPlayer.removeAllTeammates();
			}
		}
	}, 500);
};

module.onLocationUpdate = () => {
	if (config.modules.PartyView) {
		partyMembers.forEach(async name => {
			var id = getUUID(name);
			if (!id) return;
			player.lcPlayer.addTeammate(id);
		});
	} else {
		player.lcPlayer.removeAllTeammates();
	}
};

registerPlugin({
	name: "Party View",
	description: "View Your Party Members With LC Team View",
	version: "1.0.0",
	author: "TBHGodPro"
});

registerPlayerModule(module);
