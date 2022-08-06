module.exports = function (module) {
  const roleListener = (data, meta) => {
    if (meta.name !== 'scoreboard_team') return;
    if (module.currentRole !== '' && !data.prefix?.includes('Role: ')) return;

    if (data.prefix?.includes('Murderer')) {
      module.currentRole = 'murderer';

      player.sendMessage(
        'Role murderer detected!\nOnly showing players with bows in the chat and in the TeamsViewMod!'
      );
    }

    const isInnocent = data.prefix?.includes('Innocent');
    if (isInnocent || data.prefix?.includes('Detective')) {
      module.currentRole = isInnocent ? 'innoncent' : 'detective';

      player.sendMessage(
        'Role innoncent/detective detected!\nOnly showing murderer in the chat and in the TeamsView mod!'
      );
    }
  };

  return [
    () => {
      player.proxy.on('incoming', roleListener);
    },
    () => {
      player.proxy.removeListener('incoming', roleListener);
    },
  ];
};
