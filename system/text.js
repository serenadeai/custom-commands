// Pieces of text that are useful across platforms

serenade.global().command("backticks", async api => {
  await api.typeText("``");
  await api.pressKey("left");
});

serenade.global().command("fence", async api => {
  await api.typeText("```\n\n```");
  await api.pressKey("left", [], 4);
});
