serenade.global().command("destroy", async (api) => {
  await api.pressKey("w", ["control", "shift"]);
});

serenade.global().command("exit", async (api) => {
  await api.pressKey("w", ["control"]);
});

serenade.global().command("pause", async (api) => {
  await api.runCommand("close");
});

serenade.app("terminal").command("new tab", async (api) => {
  await api.pressKey("t", ["control", "shift"]);
});

serenade.global().command("first panel", async (api) => {
  await api.pressKey("1", ["alt"]);
});

serenade.global().command("second panel", async (api) => {
  await api.pressKey("2", ["alt"]);
});

serenade.global().command("third panel", async (api) => {
  await api.pressKey("3", ["alt"]);
});

serenade.global().command("rotate", async (api) => {
  await api.pressKey("pagedown", ["control"]);
});

serenade.global().command("peel", async (api) => {
  await api.pressKey("`", ["alt"]);
});

serenade.global().command("shift enter", async (api) => {
  await api.pressKey("enter", ["shift"]);
});

serenade.global().command("desktop", async (api) => {
  await api.pressKey("d", ["control", "windows"]);
});

serenade.global().command("next pane", async (api) => {
  await api.pressKey("down", ["control", "alt"]);
});

serenade.global().command("prev pane", async (api) => {
  await api.pressKey("up", ["control", "alt"]);
});

serenade.global().command("resize", async (api) => {
  await api.pressKey("F8", ["alt", "function"]);
});

serenade.global().command("application", async (api) => {
  await api.pressKey("a", ["win"]);
});

serenade.global().command("launch <%text%>", async (api, cmd) => {
  await api.pressKey("windows");
  await new Promise((r) => setTimeout(r, 300));
  await api.typeText(cmd.text);
  await new Promise((r) => setTimeout(r, 500));
  await api.pressKey("enter");
});

serenade.global().command("shutdown", async (api) => {
  await api.pressKey("windows");
  await new Promise((r) => setTimeout(r, 500));
  await api.typeText("shutdown");
  await api.pressKey("enter");
  await new Promise((r) => setTimeout(r, 1000));
  await api.pressKey("tab");
  await api.pressKey("tab");
});

serenade.global().command("super", async (api) => {
  await api.pressKey("windows");
});
