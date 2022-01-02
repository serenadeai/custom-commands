serenade.global().command("close window", async (api,matches) => {
  await api.pressKey("f4",["alt"]);
},
false,"none"
);

serenade.global().command("switch", async (api,matches) => {
  await api.pressKey("tab",["alt"]);
});
serenade.global().command("cycle open apps", async (api,matches) => {
  await api.pressKey("tab",["win"]);
});

serenade.global().command("snap window right", async (api,matches) => {
  await api.pressKey("right",["win"]);
});

serenade.global().command("snap window left", async (api,matches) => {
  await api.pressKey("left", ["win"]);
});

serenade.global().command("snap window up", async (api,matches) => {
  await api.pressKey("up", ["win"]);
});
serenade.global().command("snap window down", async (api,matches) => {
  await api.pressKey("down", ["win"]);
});
