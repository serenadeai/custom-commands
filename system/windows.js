serenade.global().command("open powershell", async (api, matches) => {
 await api.pressKey("d", ["win"]);
 await api.pressKey("r", ["win"]);
 await api.typeText("powershell");
 await api.pressKey("enter", ["commandOrControl"]);
});
