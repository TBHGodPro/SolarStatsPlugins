const finder = require('./submodules/finder');
const nametags = require('./submodules/nametags');
const role = require('./submodules/role');

module.exports = async function () {
  const settingItem = new toolbox.Item(261);
  settingItem.displayName = '§fMurder Mystery Cheats';
  settingItem.lore = [
    '',
    '§7Set of cheats for Murder Mystery,',
    '§7includes nametags and murder finder!',
    '',
    `§7Current: §${
      (await toolbox.getConfig()).modules.murderMysteryCheats
        ? 'aEnabled'
        : 'cDisabled'
    }`,
  ];

  const module = new toolbox.PlayerModule(
    'MurderMysteryCheats',
    'Set a cheats for Murder Mystery',
    settingItem,
    'murderMysteryCheats'
  );

  module.murderMysteryEnabled = false;
  module.currentRole = '';

  module.onLocationUpdate = async () => {
    module.currentRole = '';
    module.murderMysteryEnabled =
      !!(await toolbox.getConfig()).modules.murderMysteryCheats &&
      player.isInGameMode('MURDER_');
  };

  const submodules = [nametags(module), finder(module), role(module)];

  module.customCode = () => {
    for (const submodule of submodules) submodule[0]();
  };

  module.onDisconnect = () => {
    for (const submodule of submodules) submodule[1]();
  };

  registerPlayerModule(module);
};
