player.proxy.on("incoming", (data, meta, toClient, toServer) => {
	if (meta.name != "chat") return;
	var message = JSON.parse(data.message);
	message.extra ??= [];
	message = [message.text, ...message.extra.map(i => i.text)].join("");

	if (message.match(/watchdog/gi) && !message.includes("Thanks Watchdog")) {
		toServer.write("chat", {
			message: `Thanks Watchdog${"!".repeat(Math.ceil(Math.random() * 3))}`
		});
	}
});

registerPlugin({
	name: "Thanks Watchdog!",
	description: "Thank Watchdog For Absolutely Nothing :P",
	version: "1.0.1",
	author: "TBHGodPro"
});
