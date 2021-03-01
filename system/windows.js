serenade.global().command("curly brackets in",async api =>{
    await api.typeText("{}");
    await api.pressKey("left")
});
serenade.global().command("curly brackets out",async api =>{
    await api.typeText("{}");
    await api.pressKey("space")
});
