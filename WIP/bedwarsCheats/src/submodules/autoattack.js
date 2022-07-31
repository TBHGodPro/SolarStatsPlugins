module.exports = async (module, getConfig) => {
	var func = (data, meta, toClient, toServer) => {
		if (!getConfig("autoattack")) return;
		if (meta.name != "entity_action") return;
		console.log(data);
	};

	return [
		() => {
			player.proxy.on("outgoing", func);
		},
		() => {
			player.proxy.removeListener("outgoing", func);
		}
	];
};
