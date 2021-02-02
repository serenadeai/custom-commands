serenade.global().command("find <%text%>", async (api, matches) => {
  await api.pressKey("f", ["commandOrControl"]);
  await api.typeText(matches.text);
});

serenade.global().command("zoom in", async (api, matches) => {
  await api.pressKey("+", ["commandOrControl"]);
});

serenade.global().command("zoom out", async (api, matches) => {
  await api.pressKey("-", ["commandOrControl"]);
});
