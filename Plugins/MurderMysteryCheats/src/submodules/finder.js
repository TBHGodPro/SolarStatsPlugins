module.exports = function (module) {
	const knives = [
		267, 272, 256, 280, 271, 268, 32, 273, 369, 277, 406, 400, 285, 260, 421, 19, 398, 352, 391, 396, 357, 279, 175, 409, 364, 405, 366, 283, 276, 293, 359, 349, 351, 333, 382, 340,

		// Disks
		2256, 2257, 2258, 2259, 2260, 2261, 2262, 2263, 2264, 2265, 2266, 2267
	];

	const finderListener = (data, meta) => {
		if (meta.name !== "entity_equipment") return;

		const item = data.item;

		if (module.murderMysteryEnabled && data.item?.blockId === 261) {
			const target = player.connectedPlayers.find(p => p.entityId === data.entityId);

			if (!target) return;
			if (module.currentRole === "murderer") {
				player.sendMessage(`§3§l${target.name} has a bow!`);
				player.lcPlayer.sendNotification(`${target.name} has a bow!`, 1000, "warning");
				player.lcPlayer.addTeammate({ uuid: target.uuid });
			}
		}

		if (module.murderMysteryEnabled && knives.includes(item.blockId)) {
			const target = player.connectedPlayers.find(p => p.entityId === data.entityId);

			if (!target) return;
			if (module.currentRole === "innoncent" || module.currentRole === "detective") {
				player.sendMessage(`§c§l${target.name} is a murderer!`);
				player.lcPlayer.sendNotification(`${target.name} is a murderer!`, 1000, "warning");
				player.lcPlayer.addTeammate({ uuid: target.uuid });
			}
		}
	};

	return [
		() => {
			player.proxy.on("incoming", finderListener);
		},
		() => {
			player.proxy.removeListener("incoming", finderListener);
		}
	];
};
