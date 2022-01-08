// for use with click by voice https://github.com/mdbridge/click-by-voice
serenade.app("chrome").command("show hints", async (api, matches) => {
	await api.pressKey("space", ["control", "shift"]);
	setTimeout(() => {
		api.typeText(":+ic!!!");
		api.pressKey("enter");
	}, 800);
});
serenade.app("chrome").command("click <%number%>", async (api, matches) => {
	const hintNumber = parseInt(matches.number);
	if (hintNumber > 0) {
	await api.pressKey("space", ["control", "shift"]);
		setTimeout(() => {
			api.typeText(hintNumber + ":c");
			api.pressKey("enter");
		}, 800);
	}
});
serenade.app("chrome").command("hide hints permanent", async (api, matches) => {
	await api.pressKey("space", ["control", "shift"]);
	setTimeout(() => {
		api.typeText(":-");
		api.pressKey("enter");
	}, 800);
});
serenade.app("chrome").command("hide hints", async (api, matches) => {
	await api.pressKey("space", ["control", "shift"]);
	setTimeout(() => {
		api.typeText(":once-");
		api.pressKey("enter");
	}, 800);
});