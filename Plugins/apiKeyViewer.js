const { getConfigSync, Command } = toolbox;

const cmd = new Command(
	"api", // Command name
	[], // Command syntax
	[] // Command aliases
);

cmd.onTriggered = () => {
	var { apiKey } = getConfigSync();

	var message = {
		text: `\n§3Your API Key Is§6:\n\n§e${apiKey.split("").join("§e")}\n\n§r(§3Click To Put In The §6Chat Bar §3So You Can §6Copy §3It§6!§r)\n`,
		clickEvent: {
			action: "suggest_command",
			value: apiKey
		}
	};

	player.client.write("chat", { message: JSON.stringify(message) });
};

registerCommand(cmd);

// Registering the plugin, always put this at the end of the file
registerPlugin({
	name: "API Key Viewer",
	description: ".. what do you think dumbass",
	version: "1.0.0", // Optional
	author: "TBHGodPro" // Optional
});
