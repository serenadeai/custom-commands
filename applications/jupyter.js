const escapeModeCommands = {
  "next cell": "down",
  "previous cell": "up",
  "new cell": "b",
  "new cell below": "b",
  "new cell above": "a",
  "cut cell": "x",
  "copy cell": "c",
  "paste cell": "v",
  "cell type markdown": "m",
  "cell type text": "m",
  "cell type python": "y",
  "cell type code": "y",
};

const doublePressCommands = {
  interrupt: "i",
  "restart kernel": "0",
  "delete cell": "d",
};

const modifiedCommands = {
  run: ["enter", ["shift"]],
  "save notebook": ["s", ["commandOrControl"]],
};

for (const [command, key] of Object.entries(escapeModeCommands)) {
  serenade.app("chrome").command(command, async (api) => {
    await api.pressKey("escape");
    await api.pressKey(key);
  });
}

for (const [command, key] of Object.entries(modifiedCommands)) {
  serenade.app("chrome").command(command, async (api) => {
    await api.pressKey("escape");
    await api.pressKey(key[0], key[1]);
  });
}

for (const [command, key] of Object.entries(doublePressCommands)) {
  serenade.app("chrome").command(command, async (api) => {
    await api.pressKey("escape");
    await api.pressKey(key, [], 2);
  });
}
