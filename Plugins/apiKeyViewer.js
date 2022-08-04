const { getConfig, Command } = toolbox;

const cmd = new Command(
	"api", // Command name
	[], // Command syntax
	[] // Command aliases
);

cmd.onTriggered = async () => {
	var { apiKey } = await getConfig();

	var message = {
		text: `§aYour API Key is\n§b${apiKey}`,
		clickEvent: {
			action: "suggest_command",
			value: apiKey
		},
		hoverEvent: {
			action: "show_text",
			value: "§eClick to put key in chat so you can copy!"
		}
	};

	player.client.write("chat", { message: JSON.stringify(message) });
};

registerCommand(cmd);

// Registering the plugin, always put this at the end of the file
registerPlugin({
	name: "API Key Viewer",
	description: ".. what do you think dumbass | `/api`",
	version: "1.0.1", // Optional
	author: "TBHGodPro" // Optional
});
