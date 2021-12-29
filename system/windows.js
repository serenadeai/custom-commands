serenade.global().command("open cmd", async (api, matches) => {
 await api.pressKey("r", ["win"]);
 await api.typeText("cmd");
 await api.pressKey("enter", ["commandOrControl"]);
});
