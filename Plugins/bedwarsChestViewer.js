const { Command, Inventory, Item } = toolbox;
const { InventoryType } = requireModule("../Types");

const ECCommand = new Command("ec", [], []);
const TCCommand = new Command("tc", [], []);

let heldItem = null;
let ECwindowId = null;
let ECitems = [];
let TCwindowId = null;
let TCitems = [];

player.proxy.on("incoming", (data, meta) => {
	if (meta.name == "open_window") {
		if (JSON.parse(data.windowTitle).translate == "container.enderchest") ECwindowId = data.windowId;
		if (JSON.parse(data.windowTitle).translate == "container.chest") TCwindowId = data.windowId;
	}
	if (meta.name == "window_items" && (ECwindowId == data.windowId || TCwindowId == data.windowId)) {
		if (ECwindowId == data.windowId) {
			ECitems = data.items;
		} else {
			TCitems = data.items;
		}
	}
});

player.proxy.on("outgoing", (data, meta) => {
	if (meta.name == "window_click") {
		if (ECwindowId == data.windowId || TCwindowId == data.windowId) {
			var OGSlot = data.slot;
			if (ECwindowId == data.windowId) {
				if (data.slot > 26 && data.mode == 1) {
					heldItem = data.item;
					data.slot = ECitems.indexOf(ECitems.find(i => i.blockId == data.item.blockId && i.itemDamage == data.item.itemDamage && i.nbtData == data.item.nbtData && i.itemCount < 64));
					if (data.slot == -1 || data.slot > 26) data.slot = ECitems.indexOf(ECitems.find(i => i.blockId == -1));
					if (data.slot > 26) return;
				} else if (data.mode == 1) {
					ECitems[data.slot] = {
						blockId: -1,
						itemCount: undefined,
						itemDamage: undefined,
						nbtData: undefined
					};
					return;
				}
				if (ECitems[data.slot]?.itemCount && OGSlot > 26) {
					ECitems[data.slot].itemCount += data.item.itemCount;
				} else {
					ECitems[data.slot] = data.item;
				}
			} else {
				if (data.slot > 26 && data.mode == 1) {
					heldItem = data.item;
					data.slot = TCitems.indexOf(TCitems.find(i => i.blockId == data.item.blockId && i.itemDamage == data.item.itemDamage && i.nbtData == data.item.nbtData && i.itemCount < 64));
					if (data.slot == -1 || data.slot > 26) data.slot = TCitems.indexOf(TCitems.find(i => i.blockId == -1));
					if (data.slot > 26) return;
				} else if (data.mode == 1) {
					TCitems[data.slot] = {
						blockId: -1,
						itemCount: undefined,
						itemDamage: undefined,
						nbtData: undefined
					};
					return;
				}
				if (TCitems[data.slot]?.itemCount && OGSlot > 26) {
					TCitems[data.slot].itemCount += data.item.itemCount;
				} else {
					TCitems[data.slot] = data.item;
				}
			}
		}
		heldItem = data.item;
	}
});

ECCommand.onTriggered = async () => {
	if (ECitems?.length) {
		const inventory = new Inventory(InventoryType.CONTAINER, "§5§lEnder Chest §r§f(At Last View)", 27);

		for (var i of ECitems) {
			var item = new Item(i?.blockId, i?.itemCount);
			item.meta = i?.itemDamage;
			if (i?.nbtData?.value?.display?.value?.Name?.value) item.displayName = i?.nbtData?.value?.display?.value?.Name?.value;
			if (i?.nbtData?.value?.display?.value?.Lore?.value?.value) item.lore = i?.nbtData?.value?.display?.value?.Lore?.value?.value;

			inventory.addItem(item, ECitems.indexOf(i));
		}

		inventory.on("click", e => e.cancel(player.client));

		inventory.display(player);
	}
};

TCCommand.onTriggered = async () => {
	if (TCitems?.length) {
		const inventory = new Inventory(InventoryType.CONTAINER, "§a§lTeam Chest §r§f(At Last View)", 27);

		for (var i of TCitems) {
			var item = new Item(i?.blockId, i?.itemCount);
			item.meta = i?.itemDamage;
			if (i?.nbtData?.value?.display?.value?.Name?.value) item.displayName = i?.nbtData?.value?.display?.value?.Name?.value;
			if (i?.nbtData?.value?.display?.value?.Lore?.value?.value) item.lore = i?.nbtData?.value?.display?.value?.Lore?.value?.value;

			inventory.addItem(item, TCitems.indexOf(i));
		}

		inventory.on("click", e => e.cancel(player.client));

		inventory.display(player);
	}
};

registerCommand(ECCommand);
registerCommand(TCCommand);

// Registering the plugin, always put this at the end of the file
registerPlugin({
	name: "Bedwars Chest Viewer",
	description: "View Your Ender Chest And Team Chest From Anywhere",
	version: "1.0.0", // Optional
	author: "TBHGodPro" // Optional
});
