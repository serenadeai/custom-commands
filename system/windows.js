serenade.global().command("curly brackets in",async api =>{
    await api.typeText("{}");
    await api.pressKey("left")
});
serenade.global().command("curly brackets out",async api =>{
    //await api.focus("terminal");
    await api.typeText("{}");
    await api.pressKey("space")
});
serenade.global().command("focus terminal",async api =>{
    await api.pressKey("ctrl+alt+shift+t");
});
