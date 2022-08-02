const { Command } = toolbox;

const cmd = new Command(
	"pr", // Command name
	[], // Command syntax
	["reset"] // Command aliases
);

var timeStarted = null;

cmd.onTriggered = () => {
	player.executeCommand("/parkour reset");
	timeStarted = null;
};

registerCommand(cmd);

player.proxy.on("incoming", (data, meta) => {
	if (meta.name != "chat" || data.position != 0) return;
	var { message } = data;
	message = JSON.parse(message);
	message.extra ??= [];
	message = [message.text, ...message.extra.map(i => i.text)].join("");
	if (message.includes("Parkour challenge started!") || message.includes("Reset your timer to 00:00!")) {
		timeStarted = Date.now();
	}
	if (message.includes("cancelled") || message.includes("failed") || message.includes("completed") || message.includes("record")) {
		timeStarted = null;
	}
});

function parseTime(ms) {
	var minutes = Math.floor(ms / 60000).toString();
	ms = ms - minutes * 60000;
	var seconds = Math.floor(ms / 1000).toString();
	ms = (ms - seconds * 1000).toString();
	if (minutes.length == 1) {
		minutes = "0" + minutes;
	}
	if (seconds.length == 1) {
		seconds = "0" + seconds;
	}
	if (ms.length == 2) {
		ms = "0" + ms;
	}
	if (ms.length == 1) {
		ms = "0" + "0" + ms;
	}
	return `§a${minutes}§f:§a${seconds}§f.§a${ms}`;
}

setInterval(() => {
	if (timeStarted) {
		var time = Date.now() - timeStarted;
		player.client.write("chat", {
			message: JSON.stringify({
				text: parseTime(time)
			}),
			position: 2
		});
	}
}, 50);

registerPlugin({
	name: "Parkour Timer",
	description: "Live Timer For Parkour",
	version: "1.0.0",
	author: "TBHGodPro"
});
