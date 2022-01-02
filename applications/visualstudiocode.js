
serenade.app("code").command("close all tabs", async (api) => {
	await api.pressKey("k", ["control"]);
	await api.pressKey("w");
});
serenade.app("code").command("show explorer", async (api, matches) => {
	await api.pressKey("l", ["control", "alt"]);
});

serenade.app("code").command("toggle sidebar", async (api, matches) => {
	await api.pressKey("b", ["control", "alt"]);
});
serenade.app("code").command("search files", async (api, matches) => {
	await api.pressKey("f1");
	await api.pressKey("backspace");
});
serenade.app("code").command("toggle terminal", async (api, matches) => {
	await api.pressKey("'", ["control", "alt"]);
});
serenade.app("code").command("following issue", async (api, matches) => {
	await api.pressKey("f8", ["alt"]);
});
serenade.app("code").command("previous issue", async (api, matches) => {
	await api.pressKey("f8", ["alt", "shift"]);
});
// this does ! appear to work
serenade.app("code").command("toggle cursor", async (api, matches) => {
	await api.pressKey("m", ["shift", "alt"]);
});
serenade.app("code").command("select matching", async (api, matches) => {
	await api.pressKey(".", ["alt", "shift"]);
});
serenade.app("code").command("select all matching", async (api, matches) => {
	await api.pressKey("l", ["control", "shift", "alt"]);
});
serenade.app("code").command("select matching <%number%>", async (api, matches) => {
	const increment = parseInt(matches.number);
	for (let index = 0; index < increment; index++) {
		await api.pressKey(".", ["alt", "shift"]);
	}
});
serenade.app("code").command("select a language <%language%>", async (api, matches) => {
	await api.pressKey("k", ["control"]);
	await api.pressKey("m");
	await api.typeText(matches.language);
});
serenade.app("code").command("open folder", async (api) => {
	await api.pressKey("k", ["control"]);
	await api.pressKey("o", ["control"]);
});
serenade.app("code").command("expand selection", async (api,matches) => {
	await api.pressKey("w", ["control"]);
});
serenade.app("code").command("keyboard shortcuts", async (api,matches) => {
	await api.pressKey("k", ["control"]);
	await api.pressKey("s", ["control"]);
});
//this is for CodeRush extension:
serenade.app("code").command("drop marker", async (api,matches) => {
	await api.pressKey("home", ["alt"]);
});
// this was originally escape, but changed as it interfered with other commands
serenade.app("code").command("collect marker", async (api,matches) => {
	await api.pressKey("e", ["control", "shift", "alt"]);
});
serenade.app("code").command("swap marker", async (api,matches) => {
	await api.pressKey("home", ["shift", "alt"]);
});
serenade.app("code").command("open smart tag", async (api,matches) => {
	await api.pressKey(".", ["control"]);
});
serenade.app("code").command("show extensions", async (api,matches) => {
	await api.pressKey("x", ["control", "shift"]);
});
serenade.app("code").command("advanced new file", async (api,matches) => {
	await api.pressKey("n", ["control", "alt"]);
});
