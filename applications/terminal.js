serenade.app("terminal").command("list", async (api) => {
  await api.typeText("ls -a");
  await api.pressKey("enter");
});

serenade.app("terminal").command("file copy", async (api) => {
  await api.typeText("cp ");
});

serenade.app("terminal").command("clear", async (api) => {
  await api.typeText("clear");
  await api.pressKey("enter");
});

serenade.app("terminal").command("pwd", async (api) => {
  await api.typeText("pwd");
  await api.pressKey("enter");
});

serenade.app("terminal").command("ssh", async (api) => {
  await api.typeText("ssh ");
});

serenade.app("terminal").command("cd", async (api) => {
  await api.typeText("cd ");
});

serenade.app("terminal").command("cd <%text%>", async (api, cmd) => {
  await api.typeText("cd ");
  await api.typeText(cmd.text);
  await api.pressKey("tab")
});

serenade.app("terminal").command("start of line", async (api, cmd) => {
  await api.pressKey("a", ["control"])
});

serenade.app("terminal").command("end of line", async (api, cmd) => {
  await api.pressKey("e", ["control"])
});

serenade.app("terminal").command("next word", async (api, cmd) => {
  await api.pressKey("right", ["option"])
});

serenade.app("terminal").command("previous word", async (api, cmd) => {
  await api.pressKey("left", ["option"])
});

serenade.app("terminal").command("reload", async (api, cmd) => {
  await api.typeText("reload!");
  await api.pressKey("enter");
});

serenade.app("terminal").command("replay", async (api, cmd) => {
  await api.typeText("reload!");
  await api.pressKey("enter");
  await api.pressKey("up");
  await api.pressKey("up");
  await api.pressKey("enter");
});

serenade.app("terminal").command("clean", async (api, cmd) => {
  await api.pressKey("k", ["command"])
});

serenade.app("terminal").command("continue", async (api, cmd) => {
  await api.pressKey("q")
});

serenade.app("terminal").command("search", async (api, cmd) => {
  await api.pressKey("r", ["ctrl"])
});

serenade.app("terminal").command("delete word", async (api, cmd) => {
  await api.pressKey("w", ["ctrl"])
});

serenade.app("terminal").command("delete line", async (api, cmd) => {
  await api.pressKey("k", ["ctrl"])
});

serenade.app("terminal").command("cancel", async (api, cmd) => {
  await api.pressKey("c", ["ctrl"])
});

serenade.app("terminal").command("redo", async (api, cmd) => {
  await api.pressKey("up")
  await api.pressKey("enter")
});

serenade.app("terminal").command("retest", async (api, cmd) => {
  await api.pressKey("c", ["ctrl"])
  await api.pressKey("c", ["ctrl"])
  await api.pressKey("up")
  await api.pressKey("enter")
});
