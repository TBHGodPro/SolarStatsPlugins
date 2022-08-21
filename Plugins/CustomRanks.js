const { Command } = toolbox;

var cmd = new Command("crank", [
	{
		argument: "type",
		required: false,
		type: "string"
	},
	{
		argument: "data",
		required: false,
		type: "string"
	},
	{
		argument: "data2",
		required: false,
		type: "string"
	}
]);

const ranks = {};

cmd.onTriggered = async (chatCommand, args) => {
	const type = args[0]?.toLowerCase() ?? "help";
	const data = args[1]?.toLowerCase();
	const data2 = args[2]?.toLowerCase();

	if ((type != "help" && !data) || type == "help" || (type == "add" && !data2) || (type == "remove" && !data2)) {
		return player.sendMessage(`
    §2Custom Ranks
    
    §3/crank §6<Type> <Data>
    
    §3Type:
        §r- §6Help §r(Show this help menu)
        §r- §6Create §r(Create a new custom rank)
        §r- §6Delete §r(Delete a created custom rank)
        §r- §6Add §r(Add a rank to a player)
        §r- §6Remove §r(Remove a rank from a player)
        
    §3Data:
        §r- §6None
        §r- §6The rank name
        §r- §6The rank name
        §r- §6The rank name §r- §6The §6username §6of §6the §6user
        §r- §6The rank name §r- §6The §6username §6of §6the §6user
`);
	}

	if (type == "create") {
		ranks[data] = [];
		player.sendMessage(`Created Rank ${data}`);
	}

	if (type == "delete") {
		delete ranks[data];
		player.sendMessage(`Deleted Rank ${data}`);
	}

	if (type == "add") {
		if (ranks[data] && !ranks[data].includes(data2)) {
			ranks[data].push(data2);
			player.sendMessage(`Gave ${data2} Rank ${data}`);
		} else {
			if (!ranks[data]) {
				player.sendMessage(`Rank ${data} Does Not Exist!`);
			} else {
				player.sendMessage(`Player ${data2} Already Has The Rank ${data}!`);
			}
		}
	}

	if (type == "remove") {
		if (ranks[data] && !ranks[data].includes(data2)) {
			ranks[data].splice(ranks[data].indexOf(data2), 1);
			player.sendMessage(`Removed Rank ${data} From ${data2}`);
		} else {
			if (!ranks[data]) {
				player.sendMessage(`Rank ${data} Does Not Exist!`);
			} else {
				player.sendMessage(`Player ${data2} Does Not Have The Rank ${data}!`);
			}
		}
	}

	console.log(ranks);
};

registerCommand(cmd);

registerPlugin({
	name: "Custom Ranks",
	description: "Add custom ranks and give them to players",
	version: "1.0.0",
	author: "TBHGodPro"
});
