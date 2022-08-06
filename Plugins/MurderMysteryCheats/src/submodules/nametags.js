module.exports = function (module) {
  const nametagsListener = (data, meta, toClient) => {
    if (meta.name !== 'scoreboard_team') return;

    if (
      module.murderMysteryEnabled &&
      data.mode === 2 &&
      data.nameTagVisibility === 'never'
    ) {
      toClient.write('scoreboard_team', {
        ...data,
        nameTagVisibility: 'always',
      });
    }
  };

  return [
    () => {
      player.proxy.on('incoming', nametagsListener);
    },
    () => {
      player.proxy.removeListener('incoming', nametagsListener);
    },
  ];
};
