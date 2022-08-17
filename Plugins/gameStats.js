const { getEventListeners } = requireModule("node:events");
const { PlayerModule, Item, getConfigSync, getConfig } = toolbox;

const settingItem = new Item(4);
settingItem.displayName = "§rGame Stats";
settingItem.lore = [
  "",
  "§7Shows Your Opponent's Game Stats",
  "§7In Duels Once They Join",
  "",
  `§7Current: §${getConfigSync().modules.gameStats ? "aEnabled" : "cDisabled"}`,
];

const module = new PlayerModule(
  "LC Staff Mods (X-RAY)",
  "Enable Staff Mods For Lunar Client",
  settingItem,
  "gameStats"
);

var gameMode = null;
var completedUsers = [];

async function list(id, name) {
  await new Promise((res) => setTimeout(res, 750));
  if (
    !module.enabled ||
    name == player.client.username ||
    !gameMode ||
    completedUsers.includes(id)
  )
    return;
  const data = await fetch(
    `https://api.hypixel.net/player?key=${encodeURIComponent(
      (
        await getConfig()
      ).apiKey
    )}&uuid=${encodeURIComponent(id)}`
  );

  if (!data.player || completedUsers.includes(id)) return;

  const stats = data.player.stats.Duels;

  const aliases = {
    bridge_duel: "bridge_duel_bridge",
    bridge_doubles: "bridge_doubles_bridge",
  };

  const WS = stats["current_winstreak_mode_" + gameMode] ?? "§r§4UNKOWN";
  const bestWS = stats["best_winstreak_mode_" + gameMode] ?? "§r§4UNKOWN";

  const wins = stats[gameMode + "_wins"] ?? 1;
  const losses = stats[gameMode + "_losses"] ?? 1;
  const WLR = Math.round((wins / losses) * 100) / 100;

  const kills = stats[(aliases[gameMode] ?? gameMode) + "_kills"] ?? 1;
  const deaths = stats[(aliases[gameMode] ?? gameMode) + "_deaths"] ?? 1;
  const KDR = Math.round((kills / deaths) * 100) / 100;

  const played = stats[gameMode + "_rounds_played"] ?? "§r§4UNKOWN";

  if (completedUsers.includes(id)) return;

  completedUsers.push(id);

  player.sendMessage(`§r§7------§c§lSolar Stats§r§7§l - §f§l${data.player.displayname}§r§7------
§eWS §6§l${WS} §r§f| §eBWS §6§l${bestWS} §r§f| §eWLR §6§l${WLR} §r§f| §eKDR §6§l${KDR} §r§f| §ePLAYED §6§l${played}
§r§7---------------------------------`);
}

function game(status) {
  gameMode = status.mode?.substring(6)?.toLowerCase();
  getEventListeners(player.listener, "player_join").forEach((func) => {
    if (func.toString() == list.toString()) {
      player.listener.removeListener("player_join", func);
    }
  });
  player.listener.on("player_join", list);
  completedUsers = [];
}

function lobby() {
  gameMode = null;
  player.listener.removeListener("player_join", list);
  completedUsers = [];
}

module.handle("LocationUpdate", async (status) => {
  if (status.mode?.startsWith("DUELS") && module.enabled) {
    game(status);
  } else {
    lobby();
  }
});

player.proxy.on("incoming", (data, meta) => {
  if (meta.name != "chat") return;
  var { message } = data;
  message = JSON.parse(message);
  message.extra ??= [];
  message = [message.text, ...message.extra.map((i) => i.text)].join("");
  if (message.includes("Reward Summary")) {
    lobby();
  }
});

registerPlayerModule(module);

registerPlugin({
  name: "Game Stats",
  description:
    "Shows Your Opponent's Game Stats In Duels Once They Join | `/ss`",
  version: "1.0.1",
  author: "TBHGodPro",
});
