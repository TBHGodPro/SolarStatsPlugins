var partyMembers = [];
var partyUUIDs = {};

function tm(id) {
	return {
		uuid: id
	};
}

async function getUUID(name) {
	var id = partyUUIDs[name];
	if (!id) {
		id = player.connectedPlayers.find(p => p.name == name)?.uuid;
	}
	if (!id) {
		id = (await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)).id;
	}
	return id;
}

var enabled = toolbox.getConfigSync().modules.PartyView;

const settingItem = new toolbox.Item(397);
settingItem.meta = 3;
settingItem.displayName = "§rParty View";
settingItem.lore = ["", "§7Use The Lunar Client Team View", "§7Mod To See Your Party Members", "", `§7Current: §${enabled ? "aEnabled" : "cDisabled"}`];

const module = new toolbox.PlayerModule("Party View", "View Your Party Members With LC Team View", settingItem, "PartyView");

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
			var id = await getUUID(name);
			partyUUIDs[name] = id;
			if (module.enabled) {
				if (!id) return;
				player.lcPlayer?.addTeammate(tm(id));
			}
		}
		if (text.endsWith("left the party.") && !text.startsWith("You")) {
			var name = text.split(" ");
			name = name.splice(name[0].startsWith("[") ? 1 : 0, name.length - (name[0].startsWith("[") ? 4 : 3)).join(" ");
			partyMembers = partyMembers.filter(i => i != name);
			delete partyUUIDs[name];
			if (module.enabled) {
				var id = await getUUID(name);
				if (!id) return;
				player.lcPlayer?.removeTeammate(tm(id));
			}
		}
		if (text.includes("has disbanded the party!") || text.includes("You left the party.")) {
			partyMembers = [];
			partyUUIDs = {};
			player.lcPlayer?.removeAllTeammates();
		}
		if (text.includes("You have joined") && text.includes("party!")) {
			setTimeout(() => player.executeCommand("/party list"), 1000);
		}
		if (text.includes("Party Leader:")) {
			var name = text.split(" ");
			name = name.splice(name[0].startsWith("[") ? 4 : 3, name.length - (name[0].startsWith("[") ? 5 : 4)).join(" ");
			partyMembers = [];
			player.lcPlayer?.removeAllTeammates();
			partyMembers.push(name);
			var id = await getUUID(name);
			partyUUIDs[name] = id;
			if (module.enabled) {
				if (!id) return;
				player.lcPlayer?.addTeammate(tm(id));
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
			partyMembers.push(names);
			for (var name of names) {
				var id = await getUUID(name);
				partyUUIDs[name] = id;
			}
			if (module.enabled) {
				for (var name of names) {
					var id = await getUUID(name);
					if (!id) return;
					player.lcPlayer?.addTeammate(tm(id));
				}
			}
			if (text.includes("Party Members:")) {
				partyUUIDs = Object.keys(partyUUIDs)
					.filter(i => partyMembers.includes(i))
					.map(i => partyUUIDs[i]);
			}
		}
		if (text.includes("You are not currently in a party.")) {
			partyMembers = [];
			partyUUIDs = {};
			player.lcPlayer?.removeAllTeammates();
		}
	});
};

module.onConfigChange = async e => {
	enabled = e;
	if (module.enabled) {
		player.lcPlayer?.removeAllTeammates();
		for (var name of partyMembers) {
			var id = await getUUID(name);
			if (!id) return;
			player.lcPlayer?.addTeammate(tm(id));
		}
	} else {
		player.lcPlayer?.removeAllTeammates();
	}
};

module.onLocationUpdate = () => {
	setTimeout(() => {
		if (module.enabled) {
			player.lcPlayer?.removeAllTeammates();
			setTimeout(async () => {
				for (var name of partyMembers) {
					var id = await getUUID(name);
					if (!id) return;
					player.lcPlayer?.addTeammate(tm(id));
				}
			}, 500);
		}
	}, 1000);
};

player.listener.on("player_join", (id, name) => {
	if (module.enabled && partyMembers.includes(name) && id) {
		player.lcPlayer?.addTeammate(tm(id));
	}
});

registerPlayerModule(module);

registerPlugin({
	name: "Party View",
	description: "View Your Party Members With LC Team View | `/ss`",
	version: "1.4.3",
	author: "TBHGodPro"
});
