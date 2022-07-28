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

const petXP = [
	{
		level: 1,
		commonTotal: 100,
		uncommonTotal: 765,
		rareTotal: 1820,
		epicTotal: 3485,
		legendaryTotal: 5555
	},
	{
		level: 2,
		commonTotal: 210,
		uncommonTotal: 940,
		rareTotal: 2095,
		epicTotal: 3925,
		legendaryTotal: 6215
	},
	{
		level: 3,
		commonTotal: 330,
		uncommonTotal: 1130,
		rareTotal: 2395,
		epicTotal: 4415,
		legendaryTotal: 6945
	},
	{
		level: 4,
		commonTotal: 460,
		uncommonTotal: 1340,
		rareTotal: 2725,
		epicTotal: 4955,
		legendaryTotal: 7745
	},
	{
		level: 5,
		commonTotal: 605,
		uncommonTotal: 1570,
		rareTotal: 3085,
		epicTotal: 5555,
		legendaryTotal: 8625
	},
	{
		level: 6,
		commonTotal: 765,
		uncommonTotal: 1820,
		rareTotal: 3485,
		epicTotal: 6215,
		legendaryTotal: 9585
	},
	{
		level: 7,
		commonTotal: 940,
		uncommonTotal: 2095,
		rareTotal: 3925,
		epicTotal: 6945,
		legendaryTotal: 10635
	},
	{
		level: 8,
		commonTotal: 1130,
		uncommonTotal: 2395,
		rareTotal: 4415,
		epicTotal: 7745,
		legendaryTotal: 11785
	},
	{
		level: 9,
		commonTotal: 1340,
		uncommonTotal: 2725,
		rareTotal: 4955,
		epicTotal: 8625,
		legendaryTotal: 13045
	},
	{
		level: 10,
		commonTotal: 1570,
		uncommonTotal: 3085,
		rareTotal: 5555,
		epicTotal: 9585,
		legendaryTotal: 14425
	},
	{
		level: 11,
		commonTotal: 1820,
		uncommonTotal: 3485,
		rareTotal: 6215,
		epicTotal: 10635,
		legendaryTotal: 15935
	},
	{
		level: 12,
		commonTotal: 2095,
		uncommonTotal: 3925,
		rareTotal: 6945,
		epicTotal: 11785,
		legendaryTotal: 17585
	},
	{
		level: 13,
		commonTotal: 2395,
		uncommonTotal: 4415,
		rareTotal: 7745,
		epicTotal: 13045,
		legendaryTotal: 19385
	},
	{
		level: 14,
		commonTotal: 2725,
		uncommonTotal: 4955,
		rareTotal: 8625,
		epicTotal: 14425,
		legendaryTotal: 21345
	},
	{
		level: 15,
		commonTotal: 3085,
		uncommonTotal: 5555,
		rareTotal: 9585,
		epicTotal: 15935,
		legendaryTotal: 23475
	},
	{
		level: 16,
		commonTotal: 3485,
		uncommonTotal: 6215,
		rareTotal: 10635,
		epicTotal: 17585,
		legendaryTotal: 25785
	},
	{
		level: 17,
		commonTotal: 3925,
		uncommonTotal: 6945,
		rareTotal: 11785,
		epicTotal: 19385,
		legendaryTotal: 28285
	},
	{
		level: 18,
		commonTotal: 4415,
		uncommonTotal: 7745,
		rareTotal: 13045,
		epicTotal: 21345,
		legendaryTotal: 30985
	},
	{
		level: 19,
		commonTotal: 4955,
		uncommonTotal: 8625,
		rareTotal: 14425,
		epicTotal: 23475,
		legendaryTotal: 33905
	},
	{
		level: 20,
		commonTotal: 5555,
		uncommonTotal: 9585,
		rareTotal: 15935,
		epicTotal: 25785,
		legendaryTotal: 37065
	},
	{
		level: 21,
		commonTotal: 6215,
		uncommonTotal: 10635,
		rareTotal: 17585,
		epicTotal: 28285,
		legendaryTotal: 40485
	},
	{
		level: 22,
		commonTotal: 6945,
		uncommonTotal: 11785,
		rareTotal: 19385,
		epicTotal: 30985,
		legendaryTotal: 44185
	},
	{
		level: 23,
		commonTotal: 7745,
		uncommonTotal: 13045,
		rareTotal: 21345,
		epicTotal: 33905,
		legendaryTotal: 48185
	},
	{
		level: 24,
		commonTotal: 8625,
		uncommonTotal: 14425,
		rareTotal: 23475,
		epicTotal: 37065,
		legendaryTotal: 52535
	},
	{
		level: 25,
		commonTotal: 9585,
		uncommonTotal: 15935,
		rareTotal: 25785,
		epicTotal: 40485,
		legendaryTotal: 57285
	},
	{
		level: 26,
		commonTotal: 10635,
		uncommonTotal: 17585,
		rareTotal: 28285,
		epicTotal: 44185,
		legendaryTotal: 62485
	},
	{
		level: 27,
		commonTotal: 11785,
		uncommonTotal: 19385,
		rareTotal: 30985,
		epicTotal: 48185,
		legendaryTotal: 68185
	},
	{
		level: 28,
		commonTotal: 13045,
		uncommonTotal: 21345,
		rareTotal: 33905,
		epicTotal: 52535,
		legendaryTotal: 74485
	},
	{
		level: 29,
		commonTotal: 14425,
		uncommonTotal: 23475,
		rareTotal: 37065,
		epicTotal: 57285,
		legendaryTotal: 81485
	},
	{
		level: 30,
		commonTotal: 15935,
		uncommonTotal: 25785,
		rareTotal: 40485,
		epicTotal: 62485,
		legendaryTotal: 89285
	},
	{
		level: 31,
		commonTotal: 17585,
		uncommonTotal: 28285,
		rareTotal: 44185,
		epicTotal: 68185,
		legendaryTotal: 97985
	},
	{
		level: 32,
		commonTotal: 19385,
		uncommonTotal: 30985,
		rareTotal: 48185,
		epicTotal: 74485,
		legendaryTotal: 107685
	},
	{
		level: 33,
		commonTotal: 21345,
		uncommonTotal: 33905,
		rareTotal: 52535,
		epicTotal: 81485,
		legendaryTotal: 118485
	},
	{
		level: 34,
		commonTotal: 23475,
		uncommonTotal: 37065,
		rareTotal: 57285,
		epicTotal: 89285,
		legendaryTotal: 130485
	},
	{
		level: 35,
		commonTotal: 25785,
		uncommonTotal: 40485,
		rareTotal: 62485,
		epicTotal: 97985,
		legendaryTotal: 143785
	},
	{
		level: 36,
		commonTotal: 28285,
		uncommonTotal: 44185,
		rareTotal: 68185,
		epicTotal: 107685,
		legendaryTotal: 158485
	},
	{
		level: 37,
		commonTotal: 30985,
		uncommonTotal: 48185,
		rareTotal: 74485,
		epicTotal: 118485,
		legendaryTotal: 174685
	},
	{
		level: 38,
		commonTotal: 33905,
		uncommonTotal: 52535,
		rareTotal: 81485,
		epicTotal: 130485,
		legendaryTotal: 192485
	},
	{
		level: 39,
		commonTotal: 37065,
		uncommonTotal: 57285,
		rareTotal: 89285,
		epicTotal: 143785,
		legendaryTotal: 211985
	},
	{
		level: 40,
		commonTotal: 40485,
		uncommonTotal: 62485,
		rareTotal: 97985,
		epicTotal: 158485,
		legendaryTotal: 233285
	},
	{
		level: 41,
		commonTotal: 44185,
		uncommonTotal: 68185,
		rareTotal: 107685,
		epicTotal: 174685,
		legendaryTotal: 256485
	},
	{
		level: 42,
		commonTotal: 48185,
		uncommonTotal: 74485,
		rareTotal: 118485,
		epicTotal: 192485,
		legendaryTotal: 281685
	},
	{
		level: 43,
		commonTotal: 52535,
		uncommonTotal: 81485,
		rareTotal: 130485,
		epicTotal: 211985,
		legendaryTotal: 309085
	},
	{
		level: 44,
		commonTotal: 57285,
		uncommonTotal: 89285,
		rareTotal: 143785,
		epicTotal: 233285,
		legendaryTotal: 338885
	},
	{
		level: 45,
		commonTotal: 62485,
		uncommonTotal: 97985,
		rareTotal: 158485,
		epicTotal: 256485,
		legendaryTotal: 371285
	},
	{
		level: 46,
		commonTotal: 68185,
		uncommonTotal: 107685,
		rareTotal: 174685,
		epicTotal: 281685,
		legendaryTotal: 406485
	},
	{
		level: 47,
		commonTotal: 74485,
		uncommonTotal: 118485,
		rareTotal: 192485,
		epicTotal: 309085,
		legendaryTotal: 444685
	},
	{
		level: 48,
		commonTotal: 81485,
		uncommonTotal: 130485,
		rareTotal: 211985,
		epicTotal: 338885,
		legendaryTotal: 486085
	},
	{
		level: 49,
		commonTotal: 89285,
		uncommonTotal: 143785,
		rareTotal: 233285,
		epicTotal: 371285,
		legendaryTotal: 530885
	},
	{
		level: 50,
		commonTotal: 97985,
		uncommonTotal: 158485,
		rareTotal: 256485,
		epicTotal: 406485,
		legendaryTotal: 579285
	},
	{
		level: 51,
		commonTotal: 107685,
		uncommonTotal: 174685,
		rareTotal: 281685,
		epicTotal: 444685,
		legendaryTotal: 631485
	},
	{
		level: 52,
		commonTotal: 118485,
		uncommonTotal: 192485,
		rareTotal: 309085,
		epicTotal: 486085,
		legendaryTotal: 687685
	},
	{
		level: 53,
		commonTotal: 130485,
		uncommonTotal: 211985,
		rareTotal: 338885,
		epicTotal: 530885,
		legendaryTotal: 748085
	},
	{
		level: 54,
		commonTotal: 143785,
		uncommonTotal: 233285,
		rareTotal: 371285,
		epicTotal: 579285,
		legendaryTotal: 812885
	},
	{
		level: 55,
		commonTotal: 158485,
		uncommonTotal: 256485,
		rareTotal: 406485,
		epicTotal: 631485,
		legendaryTotal: 882285
	},
	{
		level: 56,
		commonTotal: 174685,
		uncommonTotal: 281685,
		rareTotal: 444685,
		epicTotal: 687685,
		legendaryTotal: 956485
	},
	{
		level: 57,
		commonTotal: 192485,
		uncommonTotal: 309085,
		rareTotal: 486085,
		epicTotal: 748085,
		legendaryTotal: 1035685
	},
	{
		level: 58,
		commonTotal: 211985,
		uncommonTotal: 338885,
		rareTotal: 530885,
		epicTotal: 812885,
		legendaryTotal: 1120385
	},
	{
		level: 59,
		commonTotal: 233285,
		uncommonTotal: 371285,
		rareTotal: 579285,
		epicTotal: 882285,
		legendaryTotal: 1211085
	},
	{
		level: 60,
		commonTotal: 256485,
		uncommonTotal: 406485,
		rareTotal: 631485,
		epicTotal: 956485,
		legendaryTotal: 1308285
	},
	{
		level: 61,
		commonTotal: 281685,
		uncommonTotal: 444685,
		rareTotal: 687685,
		epicTotal: 1035685,
		legendaryTotal: 1412485
	},
	{
		level: 62,
		commonTotal: 309085,
		uncommonTotal: 486085,
		rareTotal: 748085,
		epicTotal: 1120385,
		legendaryTotal: 1524185
	},
	{
		level: 63,
		commonTotal: 338885,
		uncommonTotal: 530885,
		rareTotal: 812885,
		epicTotal: 1211085,
		legendaryTotal: 1643885
	},
	{
		level: 64,
		commonTotal: 371285,
		uncommonTotal: 579285,
		rareTotal: 882285,
		epicTotal: 1308285,
		legendaryTotal: 1772085
	},
	{
		level: 65,
		commonTotal: 406485,
		uncommonTotal: 631485,
		rareTotal: 956485,
		epicTotal: 1412485,
		legendaryTotal: 1909285
	},
	{
		level: 66,
		commonTotal: 444685,
		uncommonTotal: 687685,
		rareTotal: 1035685,
		epicTotal: 1524185,
		legendaryTotal: 2055985
	},
	{
		level: 67,
		commonTotal: 486085,
		uncommonTotal: 748085,
		rareTotal: 1120385,
		epicTotal: 1643885,
		legendaryTotal: 2212685
	},
	{
		level: 68,
		commonTotal: 530885,
		uncommonTotal: 812885,
		rareTotal: 1211085,
		epicTotal: 1772085,
		legendaryTotal: 2380385
	},
	{
		level: 69,
		commonTotal: 579285,
		uncommonTotal: 882285,
		rareTotal: 1308285,
		epicTotal: 1909285,
		legendaryTotal: 2560085
	},
	{
		level: 70,
		commonTotal: 631485,
		uncommonTotal: 956485,
		rareTotal: 1412485,
		epicTotal: 2055985,
		legendaryTotal: 2752785
	},
	{
		level: 71,
		commonTotal: 687685,
		uncommonTotal: 1035685,
		rareTotal: 1524185,
		epicTotal: 2212685,
		legendaryTotal: 2959485
	},
	{
		level: 72,
		commonTotal: 748085,
		uncommonTotal: 1120385,
		rareTotal: 1643885,
		epicTotal: 2380385,
		legendaryTotal: 3181185
	},
	{
		level: 73,
		commonTotal: 812885,
		uncommonTotal: 1211085,
		rareTotal: 1772085,
		epicTotal: 2560085,
		legendaryTotal: 3418885
	},
	{
		level: 74,
		commonTotal: 882285,
		uncommonTotal: 1308285,
		rareTotal: 1909285,
		epicTotal: 2752785,
		legendaryTotal: 3673585
	},
	{
		level: 75,
		commonTotal: 956485,
		uncommonTotal: 1412485,
		rareTotal: 2055985,
		epicTotal: 2959485,
		legendaryTotal: 3946285
	},
	{
		level: 76,
		commonTotal: 1035685,
		uncommonTotal: 1524185,
		rareTotal: 2212685,
		epicTotal: 3181185,
		legendaryTotal: 4237985
	},
	{
		level: 77,
		commonTotal: 1120385,
		uncommonTotal: 1643885,
		rareTotal: 2380385,
		epicTotal: 3418885,
		legendaryTotal: 4549685
	},
	{
		level: 78,
		commonTotal: 1211085,
		uncommonTotal: 1772085,
		rareTotal: 2560085,
		epicTotal: 3673585,
		legendaryTotal: 4883385
	},
	{
		level: 79,
		commonTotal: 1308285,
		uncommonTotal: 1909285,
		rareTotal: 2752785,
		epicTotal: 3946285,
		legendaryTotal: 5241085
	},
	{
		level: 80,
		commonTotal: 1412485,
		uncommonTotal: 2055985,
		rareTotal: 2959485,
		epicTotal: 4237985,
		legendaryTotal: 5624785
	},
	{
		level: 81,
		commonTotal: 1524185,
		uncommonTotal: 2212685,
		rareTotal: 3181185,
		epicTotal: 4549685,
		legendaryTotal: 6036485
	},
	{
		level: 82,
		commonTotal: 1643885,
		uncommonTotal: 2380385,
		rareTotal: 3418885,
		epicTotal: 4883385,
		legendaryTotal: 6478185
	},
	{
		level: 83,
		commonTotal: 1772085,
		uncommonTotal: 2560085,
		rareTotal: 3673585,
		epicTotal: 5241085,
		legendaryTotal: 6954885
	},
	{
		level: 84,
		commonTotal: 1909285,
		uncommonTotal: 2752785,
		rareTotal: 3946285,
		epicTotal: 5624785,
		legendaryTotal: 7471585
	},
	{
		level: 85,
		commonTotal: 2055985,
		uncommonTotal: 2959485,
		rareTotal: 4237985,
		epicTotal: 6036485,
		legendaryTotal: 8033285
	},
	{
		level: 86,
		commonTotal: 2212685,
		uncommonTotal: 3181185,
		rareTotal: 4549685,
		epicTotal: 6478185,
		legendaryTotal: 8644985
	},
	{
		level: 87,
		commonTotal: 2380385,
		uncommonTotal: 3418885,
		rareTotal: 4883385,
		epicTotal: 6954885,
		legendaryTotal: 9311685
	},
	{
		level: 88,
		commonTotal: 2560085,
		uncommonTotal: 3673585,
		rareTotal: 5241085,
		epicTotal: 7471585,
		legendaryTotal: 10038385
	},
	{
		level: 89,
		commonTotal: 2752785,
		uncommonTotal: 3946285,
		rareTotal: 5624785,
		epicTotal: 8033285,
		legendaryTotal: 10830085
	},
	{
		level: 90,
		commonTotal: 2959485,
		uncommonTotal: 4237985,
		rareTotal: 6036485,
		epicTotal: 8644985,
		legendaryTotal: 11691785
	},
	{
		level: 91,
		commonTotal: 3181185,
		uncommonTotal: 4549685,
		rareTotal: 6478185,
		epicTotal: 9311685,
		legendaryTotal: 12628485
	},
	{
		level: 92,
		commonTotal: 3418885,
		uncommonTotal: 4883385,
		rareTotal: 6954885,
		epicTotal: 10038385,
		legendaryTotal: 13645185
	},
	{
		level: 93,
		commonTotal: 3673585,
		uncommonTotal: 5241085,
		rareTotal: 7471585,
		epicTotal: 10830085,
		legendaryTotal: 14746885
	},
	{
		level: 94,
		commonTotal: 3946285,
		uncommonTotal: 5624785,
		rareTotal: 8033285,
		epicTotal: 11691785,
		legendaryTotal: 15938585
	},
	{
		level: 95,
		commonTotal: 4237985,
		uncommonTotal: 6036485,
		rareTotal: 8644985,
		epicTotal: 12628485,
		legendaryTotal: 17225285
	},
	{
		level: 96,
		commonTotal: 4549685,
		uncommonTotal: 6478185,
		rareTotal: 9311685,
		epicTotal: 13645185,
		legendaryTotal: 18611985
	},
	{
		level: 97,
		commonTotal: 4883385,
		uncommonTotal: 6954885,
		rareTotal: 10038385,
		epicTotal: 14746885,
		legendaryTotal: 20108685
	},
	{
		level: 98,
		commonTotal: 5241085,
		uncommonTotal: 7471585,
		rareTotal: 10830085,
		epicTotal: 15938585,
		legendaryTotal: 21725385
	},
	{
		level: 99,
		commonTotal: 5624785,
		uncommonTotal: 8033285,
		rareTotal: 11691785,
		epicTotal: 17225285,
		legendaryTotal: 23472085
	},
	{
		level: 100,
		commonTotal: 6036485,
		uncommonTotal: 8644985,
		rareTotal: 12628485,
		epicTotal: 18611985,
		legendaryTotal: 25358785
	}
];

function getPetText(pet) {
	var level = petXP.find(i => i[`${pet.tier.toLowerCase()}Total`] > pet.exp) ?? petXP.find(i => i.level == 100);

	pet.tier = pet.tier.toUpperCase();
	var tier = "§";
	if (pet.tier == "COMMON") {
		tier += "f";
	} else if (pet.tier == "UNCOMMON") {
		tier += "a";
	} else if (pet.tier == "RARE") {
		tier += "9";
	} else if (pet.tier == "EPIC") {
		tier += "5";
	} else if (pet.tier == "LEGENDARY") {
		tier += "6";
	} else if (pet.tier == "MYTHIC") {
		tier += "d";
	} else {
		tier += "7";
	}

	var name = pet.type
		.split(" ")
		.map(e => {
			return e[0].toUpperCase() + e.substr(1).toLowerCase();
		})
		.join(" ");

	return `§7[Lvl ${level?.level ?? "§cERROR"}§7] ${tier}${name}`;
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

async function getUser(username) {
	return await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);
}

function sendMessage(text) {
	player.sendMessage(`
    ${text}
`);
}

var helpMenuItems = {
	help: "Shows This Help Menu",
	stats: "Shows A Lot Of Stats About A Player",
	purse: "Shows The Purse Of A Player"
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

	if (!id) var { id } = await getUser(name);

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

				addTopItemLore(`§3§lPurse: §r§e${(Math.round(member.coin_purse * 10) / 10).toLocaleString()}`);
				addTopItemLore(`§3§lFairy Souls: §r§5${member.fairy_souls_collected ?? "UNKOWN"}`);

				var pastNames = member.names;
				if (pastNames.length > 1) {
					addTopItemLore(["§3§lName History§6:", ...member.names.map(name => ` - §r§6${name.name}`)]);
				}

				var activePet = member.pets.find(i => i.active);
				if (activePet) {
					addTopItemLore(`§3§lActive Pet: ${getPetText(activePet)}`);
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

			var Wardrobe = new Item(299);
			Wardrobe.displayName = "§3View Wardrobe";
			if (!data.wardrobe_contents) Wardrobe.lore = ["", "§cThis Player Has The §4Inventory §cAPI Setting §4OFF", ""];

			inventory.addItems([
				{
					item: MainInventory,
					position: "0"
				},
				{
					item: PersonalVault,
					position: "1"
				},
				{
					item: Wardrobe,
					position: "2"
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
		case 4: // View Personal Vault
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
		case 5: // Wardrobe Page 1
			inventory = new Inventory(InventoryType.CONTAINER, `§3Stats §8- Wardrobe Of §6${name}`, 54);

			var items = [];

			for (var slot of data.data.slice(0, 36)) {
				if (!slot.id) continue;
				var item = new Item(slot.id.value, slot.Count.value);
				if (slot.Damage.value) item.meta = slot.Damage.value;
				item.displayName = slot.tag.value.display.value.Name.value;
				item.lore = slot.tag.value.display.value.Lore.value.value;
				items[items.length] = {
					item,
					position: data.data.indexOf(slot).toString()
				};
			}

			for (var i = 0; i < 9; i++) {
				var SelectedItem = new Item(351);
				if (data.equipped == i + 1) {
					SelectedItem.meta = "10";
					SelectedItem.displayName = `Slot ${i + 1}: §aEquipped`;
					var helmet = data.current[3];
					var chestplate = data.current[2];
					var leggings = data.current[1];
					var boots = data.current[0];
					if (helmet?.id) {
						var helmetItem = new Item(helmet.id.value, helmet.Count.value);
						if (helmet.Damage.value) helmetItem.meta = helmet.Damage.value;
						helmetItem.displayName = helmet.tag.value.display.value.Name.value;
						helmetItem.lore = helmet.tag.value.display.value.Lore.value.value;
						inventory.addItem(helmetItem, i);
					}

					if (chestplate?.id) {
						var chestplateItem = new Item(chestplate.id.value, chestplate.Count.value);
						if (chestplate.Damage.value) chestplateItem.meta = chestplate.Damage.value;
						chestplateItem.displayName = chestplate.tag.value.display.value.Name.value;
						chestplateItem.lore = chestplate.tag.value.display.value.Lore.value.value;
						inventory.addItem(chestplateItem, i + 9);
					}

					if (leggings?.id) {
						var leggingsItem = new Item(leggings.id.value, leggings.Count.value);
						if (chestplate.Damage.value) leggingsItem.meta = leggings.Damage.value;
						leggingsItem.displayName = leggings.tag.value.display.value.Name.value;
						leggingsItem.lore = leggings.tag.value.display.value.Lore.value.value;
						inventory.addItem(leggingsItem, i + 18);
					}

					if (boots?.id) {
						var bootsItem = new Item(boots.id.value, boots.Count.value);
						if (chestplate.Damage.value) bootsItem.meta = boots.Damage.value;
						bootsItem.displayName = boots.tag.value.display.value.Name.value;
						bootsItem.lore = boots.tag.value.display.value.Lore.value.value;
						inventory.addItem(bootsItem, i + 27);
					}
				} else if (!items.find(e => e.position == i) && !items.find(e => e.position == i + 9) && !items.find(e => e.position == i + 18) && !items.find(e => e.position == i + 27)) {
					SelectedItem.meta = "8";
					SelectedItem.displayName = `Slot ${i + 1}: §cEmpty`;
				} else {
					SelectedItem.meta = "9";
					SelectedItem.displayName = `Slot ${i + 1}: §aReady`;
				}
				items[items.length] = {
					item: SelectedItem,
					position: 36 + i
				};
			}

			inventory.addItems(items);

			var NextPage = new Item(262);
			NextPage.displayName = "§aNext Page";
			NextPage.lore = ["§ePage 2"];
			inventory.addItem(NextPage, inventory.slotCount - 4);

			break;
		case 6: // Wardrobe Page 2
			inventory = new Inventory(InventoryType.CONTAINER, `§3Stats §8- Wardrobe Of §6${name}`, 54);

			var items = [];

			for (var slot of data.data.slice(36)) {
				if (!slot.id) continue;
				var item = new Item(slot.id.value, slot.Count.value);
				if (slot.Damage.value) item.meta = slot.Damage.value;
				item.displayName = slot.tag.value.display.value.Name.value;
				item.lore = slot.tag.value.display.value.Lore.value.value;
				items[items.length] = {
					item,
					position: (data.data.indexOf(slot) - 36).toString()
				};
			}

			for (var i = 0; i < 9; i++) {
				var SelectedItem = new Item(351);
				if (data.equipped == i + 9 + 1) {
					SelectedItem.meta = "10";
					SelectedItem.displayName = `Slot ${i + 1}: §aEquipped`;
					var helmet = data.current[3];
					var chestplate = data.current[2];
					var leggings = data.current[1];
					var boots = data.current[0];
					if (helmet?.id) {
						var helmetItem = new Item(helmet.id.value, helmet.Count.value);
						if (helmet.Damage.value) helmetItem.meta = helmet.Damage.value;
						helmetItem.displayName = helmet.tag.value.display.value.Name.value;
						helmetItem.lore = helmet.tag.value.display.value.Lore.value.value;
						inventory.addItem(helmetItem, i);
					}

					if (chestplate?.id) {
						var chestplateItem = new Item(chestplate.id.value, chestplate.Count.value);
						if (chestplate.Damage.value) chestplateItem.meta = chestplate.Damage.value;
						chestplateItem.displayName = chestplate.tag.value.display.value.Name.value;
						chestplateItem.lore = chestplate.tag.value.display.value.Lore.value.value;
						inventory.addItem(chestplateItem, i + 9);
					}

					if (leggings?.id) {
						var leggingsItem = new Item(leggings.id.value, leggings.Count.value);
						if (chestplate.Damage.value) leggingsItem.meta = leggings.Damage.value;
						leggingsItem.displayName = leggings.tag.value.display.value.Name.value;
						leggingsItem.lore = leggings.tag.value.display.value.Lore.value.value;
						inventory.addItem(leggingsItem, i + 18);
					}

					if (boots?.id) {
						var bootsItem = new Item(boots.id.value, boots.Count.value);
						if (chestplate.Damage.value) bootsItem.meta = boots.Damage.value;
						bootsItem.displayName = boots.tag.value.display.value.Name.value;
						bootsItem.lore = boots.tag.value.display.value.Lore.value.value;
						inventory.addItem(bootsItem, i + 27);
					}
				} else if (!items.find(e => e.position == i) && !items.find(e => e.position == i + 9) && !items.find(e => e.position == i + 18) && !items.find(e => e.position == i + 27)) {
					SelectedItem.meta = "8";
					SelectedItem.displayName = `Slot ${i + 9 + 1}: §cEmpty`;
				} else {
					SelectedItem.meta = "9";
					SelectedItem.displayName = `Slot ${i + 9 + 1}: §aReady`;
				}
				items[items.length] = {
					item: SelectedItem,
					position: 36 + i
				};
			}

			inventory.addItems(items);

			var PrevPage = new Item(262);
			PrevPage.displayName = "Previous Page";
			PrevPage.lore = ["§ePage 1"];
			inventory.addItem(PrevPage, inventory.slotCount - 6);

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
				player.sendMessage("Reloading...");
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
					if (nbtName.endsWith("View Wardrobe") && !nbtLore[1]?.includes("OFF")) {
						inventory.close(player);
						(
							await createStatsInventoryOverlay(
								inventory,
								5,
								{
									data: await decodeNBT(data.wardrobe_contents.data),
									equipped: data.wardrobe_equipped_slot,
									current: await decodeNBT(data.inv_armor.data)
								},
								player,
								name
							)
						).display(player);
						break;
					}
					if (nbtName.includes("Previous Page") || nbtName.includes("Next Page")) {
						inventory.close(player);
						(await createStatsInventoryOverlay(mainInventory, nbtName.includes("Previous Page") ? 5 : 6, rawData, player, name)).display(player);
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
	var { name, id } = await getUser(player);
	player = cmd.player;

	if (!name || !id) return sendMessage("This Player Doesn't Exist!");

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
		case "purse":
			if (!extra) {
				extra = cmd.player.client.username;
			}
			var { name, id } = await getUser(extra);
			if (!name || !id) return sendMessage("This Player Doesn't Exist!");
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
			var profile = profiles.find(i => i.current);
			sendMessage(`§6§l${name}§r§3's Purse On §2§l${profile.cute_name}§r§3: §e${(Math.round(profile.members[Object.keys(profile.members).find(i => i == id)].coin_purse * 10) / 10).toLocaleString()}`);
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
