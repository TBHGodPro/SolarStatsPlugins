function requireF(module) {
	try {
		return require(module);
	} catch (e) {
		if (e.code != "MODULE_NOT_FOUND") {
			throw e;
		}
		return null;
	}
}

const nbt = requireF("prismarine-nbt");
async function decodeNBT(data) {
	return (await nbt.parse(Buffer.from(data, "base64"))).parsed.value.i.value.value;
}

const mainDir = __dirname
	.split("/")
	.splice(0, __dirname.split("/").length - 2)
	.join("/");

const apiKey = JSON.parse(requireF("node:fs").readFileSync(`${mainDir}/config.json`)).apiKey;

const dirFetch = requireF("node-fetch");
const fetch = async (url, data) => {
	if (!url.startsWith("http")) {
		url = `https://api.hypixel.net${url.startsWith("/") ? url : `/${url}`}`;
		url = url.includes("?") ? `${url}&key=${apiKey}` : `${url}?key=${apiKey}`;
	}
	var data = await dirFetch(url, data);

	data = await data.text();

	try {
		data = JSON.parse(data);
	} catch {}

	return data;
};

const Item = requireF("../Classes/Item").default;
const Inventory = requireF("../Classes/Inventory").default;
const { InventoryType } = requireF("../Types");

// Creating the command
// See src/Classes/Command.ts for more information
const cmd = new toolbox.Command(
	"sb", // Command name
	[
		{
			argument: "type",
			required: false,
			type: "string"
		},
		{
			argument: "extra",
			required: false,
			type: "string"
		}
	], // Command syntax
	[] // Command aliases
);

function sendMessage(text) {
	player.sendMessage(`
    ${text}
`);
}

var helpMenuItems = {
	help: "Shows this Help Menu",
	stats: "Shows a lot of Stats about a Player"
};

var helpMenuText = `
    §2Skyblock Helper (§6/sb §3<command name>§2)
    
    ${Object.keys(helpMenuItems).map(i => {
		return `§3${i.toUpperCase()}§6: §r${helpMenuItems[i]}`;
	}).join(`
    `)}
`;

async function createStatsInventoryOverlay(mainInventory, type, data, player, name, id) {
	var rawData = data;

	if (!id) var id = (await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)).id;

	let inventory = null;
	switch (type) {
		case 1: // Profile
			for (var member of Object.keys(data.members)) {
				data.members[member].id = member;
				var names = await fetch(`https://api.mojang.com/user/profiles/${member}/names`);
				data.members[member].username = names[names.length - 1].name;
				data.members[member].names = names.filter(n => n.name != data.members[member].username).reverse();
			}

			inventory = new Inventory(InventoryType.CONTAINER, `§3Stats §8- §6${name} §8- §2${data.cute_name}`, 63);

			var playerIndexes = Object.keys(data.members).length;
			switch (playerIndexes) {
				case 1:
					playerIndexes = [5];
					break;
				case 2:
					playerIndexes = [4, 6];
					break;
				case 3:
					playerIndexes = [3, 5, 7];
					break;
				case 4:
					playerIndexes = [2, 4, 6, 8];
					break;
				case 5:
					playerIndexes = [1, 3, 5, 7, 9];
					break;
				case 6:
					playerIndexes = [1, 3, 4, 6, 7, 9];
					break;
				case 7:
					playerIndexes = [1, 3, 4, 5, 6, 7, 9];
					break;
				case 8:
					playerIndexes = [1, 2, 3, 4, 6, 7, 8, 9];
			}
			var playerIndexIndexes = [1, 2, 3, 4, 5, 6];

			var playerItems = [];

			for (var member of Object.values(data.members)) {
				var i = playerItems.length;

				var topItem = new Item(397);
				topItem.meta = 3;
				topItem.displayName = `§6§l${member.username}`;
				var topItemLore = [];

				const addTopItemLore = items => {
					topItemLore.push("");
					if (typeof items == typeof "") {
						var items = [items];
					}
					for (var item of items) {
						topItemLore.push(item);
					}
				};

				addTopItemLore(`§3§lPurse: §r§e${Math.round(member.coin_purse * 10) / 10}`);
				addTopItemLore(`§3§lFairy Souls: §r§5${member.fairy_souls_collected}`);

				var pastNames = member.names;
				if (pastNames.length > 1) {
					addTopItemLore(["§3§lName History§6:", ...member.names.map(name => ` - §r§6${name.name}`)]);
				}

				var activePet = member.pets.find(i => i.active);
				if (activePet) {
					addTopItemLore(`§3§lActive Pet: §r§6${activePet.tier} ${activePet.type}`);
				}

				topItemLore.push("");
				topItem.lore = topItemLore;

				var viewInventoriesButton = new Item(321);
				viewInventoriesButton.displayName = "§3§lView Inventories";
				viewInventoriesButton.lore = ["", `§3Inventories Of §6${member.username}`, ""];

				var armor = await decodeNBT(member.inv_armor.data);
				var helmet = armor[3];
				var chestplate = armor[2];
				var leggings = armor[1];
				var boots = armor[0];

				if (helmet?.id) {
					var helmetItem = new Item(helmet.id.value, helmet.Count.value);
					if (helmet.Damage.value) helmetItem.meta = helmet.Damage.value;
					helmetItem.displayName = helmet.tag.value.display.value.Name.value;
					helmetItem.lore = helmet.tag.value.display.value.Lore.value.value;
				}

				if (chestplate?.id) {
					var chestplateItem = new Item(chestplate.id.value, chestplate.Count.value);
					if (chestplate.Damage.value) chestplateItem.meta = chestplate.Damage.value;
					chestplateItem.displayName = chestplate.tag.value.display.value.Name.value;
					chestplateItem.lore = chestplate.tag.value.display.value.Lore.value.value;
				}

				if (leggings?.id) {
					var leggingsItem = new Item(leggings.id.value, leggings.Count.value);
					if (chestplate.Damage.value) leggingsItem.meta = leggings.Damage.value;
					leggingsItem.displayName = leggings.tag.value.display.value.Name.value;
					leggingsItem.lore = leggings.tag.value.display.value.Lore.value.value;
				}

				if (boots?.id) {
					var bootsItem = new Item(boots.id.value, boots.Count.value);
					if (chestplate.Damage.value) bootsItem.meta = boots.Damage.value;
					bootsItem.displayName = boots.tag.value.display.value.Name.value;
					bootsItem.lore = boots.tag.value.display.value.Lore.value.value;
				}

				playerItems[i] = [topItem, viewInventoriesButton, ...(helmetItem ? [helmetItem] : []), ...(chestplateItem ? [chestplateItem] : []), ...(leggingsItem ? [leggingsItem] : []), ...(bootsItem ? [bootsItem] : [])];
			}

			for (var set of playerItems) {
				inventory.addItems(
					set.map(setItem => {
						return {
							item: setItem,
							position: playerIndexes[playerItems.indexOf(set)] - 1 + (playerIndexIndexes[set.indexOf(setItem)] - 1) * 9
						};
					})
				);
			}

			break;
		case 2: // View Inventories
			inventory = new Inventory(InventoryType.CONTAINER, `§3Stats §8- §3Inventories Of §6${name}`, 18);

			var MainInventory = new Item(321);
			MainInventory.displayName = "§3View Inventory";
			if (!data.inv_contents) MainInventory.lore = ["", "§cThis Player Has The §4Inventory §cAPI Setting §4OFF", ""];

			var PersonalVault = new Item(54);
			PersonalVault.displayName = "§3View Personal Vault";
			if (!data.personal_vault_contents) PersonalVault.lore = ["", "§cThis Player Has The §4Personal Bank Vault §cAPI Setting §4OFF", ""];

			inventory.addItems([
				{
					item: MainInventory,
					position: "0"
				},
				{
					item: PersonalVault,
					position: "1"
				}
			]);

			break;
		case 3: // View Inventory
			inventory = new Inventory(InventoryType.CONTAINER, `§3Stats §8- §3Inventory Of §6${name}`, 45);

			var items = [];

			for (var slot of data) {
				if (!slot.id) continue;
				var item = new Item(slot.id.value, slot.Count.value);
				if (slot.Damage.value) item.meta = slot.Damage.value;
				item.displayName = slot.tag.value.display.value.Name.value;
				item.lore = slot.tag.value.display.value.Lore.value.value;
				if (data.indexOf(slot) < 9) {
					var position = data.indexOf(slot) + 27;
				} else {
					var position = data.indexOf(slot) - 9;
				}
				items[items.length] = {
					item,
					position: position.toString()
				};
			}

			inventory.addItems(items);

			break;
		case 4:
			inventory = new Inventory(InventoryType.CONTAINER, `§3Stats §8- Personal Vault Of §6${name}`, 36);

			var items = [];

			for (var slot of data) {
				if (!slot.id) continue;
				var item = new Item(slot.id.value, slot.Count.value);
				if (slot.Damage.value) item.meta = slot.Damage.value;
				item.displayName = slot.tag.value.display.value.Name.value;
				item.lore = slot.tag.value.display.value.Lore.value.value;
				items[items.length] = {
					item,
					position: data.indexOf(slot).toString()
				};
			}

			inventory.addItems(items);

			break;
	}

	var Refresh = new Item(399);
	Refresh.displayName = "§6Reload";

	inventory.addItem(Refresh, inventory.slotCount - 9);

	const Close = new Item(166);
	Close.displayName = "§cClose";

	inventory.addItem(Close, inventory.slotCount - 5);

	inventory.on("click", async event => {
		if (event.mode != 0) {
			event.cancel(player.client);
			return;
		}

		var nbtName = event?.raw?.item?.nbtData?.value?.display?.value?.Name?.value;
		var nbtLore = event?.raw?.item?.nbtData?.value?.display?.value?.Lore?.value?.value ?? [];

		switch (event.slot) {
			case inventory.slotCount - 5:
				inventory.close(player);
				mainInventory.display(player);
				break;
			case inventory.slotCount - 9:
				inventory.close(player);
				sendMessage("Reloading...");
				(await createStatsInventoryOverlay(mainInventory, type, rawData, player, name, id)).display(player);
				break;
			default:
				if (nbtName) {
					if (nbtName.endsWith("View Inventories")) {
						inventory.close(player);
						(
							await createStatsInventoryOverlay(
								inventory,
								2,
								Object.values(data.members).find(i => i.username == nbtLore[1].split("§6")[1]),
								player,
								nbtLore[1].split("§6")[1]
							)
						).display(player);
						break;
					}
					if (nbtName.endsWith("View Inventory") && !nbtLore[1]?.includes("OFF")) {
						inventory.close(player);
						(await createStatsInventoryOverlay(inventory, 3, await decodeNBT(data.inv_contents.data), player, name)).display(player);
						break;
					}
					if (nbtName.endsWith("View Personal Vault") && !nbtLore[1]?.includes("OFF")) {
						inventory.close(player);
						(await createStatsInventoryOverlay(inventory, 4, await decodeNBT(data.personal_vault_contents.data), player, name)).display(player);
						break;
					}
				}

				event.cancel(player.client);
				break;
		}
	});

	return inventory;
}

async function createStatsInventory(player) {
	var { name, id } = await fetch(`https://api.mojang.com/users/profiles/minecraft/${player}`);
	player = cmd.player;

	var { profiles } = await fetch(`/skyblock/profiles?uuid=${id}`);
	profiles = profiles
		.map(profile => {
			return {
				profile: profile.profile_id,
				name: profile.cute_name,
				last_save: profile.members[id].last_save
			};
		})
		.sort((a, b) => {
			if (a.last_save < b.last_save) {
				return 1;
				// A after B
			}
			if (a.last_save > b.last_save) {
				return -1;
				// A before B
			}
			return 0;
		})
		.map(profile => profiles.find(p => p.profile_id == profile.profile));
	profiles = profiles.map(profile => {
		if (profiles.indexOf(profile) == 0) {
			return {
				...profile,
				current: true
			};
		} else {
			return {
				...profile,
				current: false
			};
		}
	});

	const inventory = new Inventory(InventoryType.CONTAINER, `§3Stats §8- §6${name}`, 54);

	const Close = new Item(166);
	Close.displayName = "§cClose";

	const UUIDItem = new Item(137);
	UUIDItem.displayName = "§3§lUUID";
	UUIDItem.lore = ["", "§rThe §3UUID §rFor This Player", "", `§6${id}`, ""];

	var profileItems = profiles.map(profile => {
		var item = new Item(339);
		item.displayName = `§2${profile.cute_name}`;
		item.lore = ["", `§6${name}§r's Profile: §3${profile.cute_name}`, ...(profile.current ? ["", "§6CURRENT", ""] : [""])];

		return item;
	});

	function parseProfileItems() {
		switch (profileItems.length) {
			case 1:
				return [{ item: profileItems[0], position: 13 }];
			case 2:
				return [
					{ item: profileItems[0], position: 12 },
					{ item: profileItems[1], position: 14 }
				];
			case 3:
				return [
					{ item: profileItems[0], position: 11 },
					{ item: profileItems[1], position: 13 },
					{ item: profileItems[2], position: 15 }
				];
			case 4:
				return [
					{ item: profileItems[0], position: 10 },
					{ item: profileItems[1], position: 12 },
					{ item: profileItems[2], position: 14 },
					{ item: profileItems[3], position: 16 }
				];
			case 5:
				return [
					{ item: profileItems[0], position: 9 },
					{ item: profileItems[1], position: 11 },
					{ item: profileItems[2], position: 13 },
					{ item: profileItems[3], position: 15 },
					{ item: profileItems[4], position: 17 }
				];
		}
	}

	inventory.addItems([{ item: UUIDItem, position: 45 }, { item: Close, position: 49 }, ...parseProfileItems()]);

	inventory.on("click", async event => {
		if (event.mode != 0) {
			event.cancel(player.client);
			return;
		}

		switch (event.slot) {
			case 45:
				event.cancel(player.client);
				break;
			case 49:
				inventory.close(player);
				break;
			default:
				var positions = parseProfileItems();
				if (positions.find(i => i.position == event.slot)) {
					inventory.close(player);
					(await createStatsInventoryOverlay(inventory, 1, profiles[positions.indexOf(positions.find(i => i.position == event.slot))], player, name, id)).display(player);
					break;
				}
		}
	});

	return inventory;
}

cmd.onTriggered = async (chatCommand, args) => {
	var type = args[0] ?? "help";
	var extra = args[1] ?? null;

	switch (type) {
		case "help":
			player.sendMessage(helpMenuText);
			break;
		case "stats":
			if (!extra) {
				sendMessage("§cRequires §6Player §cInput§6: §r(§6/sb stats §3player§r)");
				break;
			}
			(await createStatsInventory(extra)).display(cmd.player);
			break;
		default:
			if (Object.keys(helpMenuItems).includes(type)) {
				sendMessage("Whoops, Something Went Wrong, That Command Doesn't Seem To Work...");
			} else {
				sendMessage("Nah Fam That Ain't A Command §l§6:/");
			}
			break;
	}
};

// Registering the command
registerCommand(cmd);

// Registering the plugin, always put this at the end of the file
registerPlugin({
	name: "Skyblock",
	description: "Skyblock Helper",
	version: "1.0.0", // Optional
	author: "TBHGodPro" // Optional
});
