serenade.global().command("hide all windows", async (api, matches) => {
  await api.pressKey("d", ["win"]);
});
