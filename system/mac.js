serenade.global().command("next desktop", async (api) => {
  await api.pressKey("right", ["control"]);
});

serenade.global().command("previous desktop", async (api) => {
  await api.pressKey("left", ["control"]);
});

serenade.global().command("spotlight <%text%>", async (api, matches) => {
  await api.pressKey("space", ["command"]);
  await api.typeText(matches.text);
});
