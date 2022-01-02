
serenade.app("code").command("close all tabs", async (api) => {
	await api.pressKey("k", ["commandOrControl"]);
	await api.pressKey("w");
});
serenade.app("code").command("show explorer", async (api, matches) => {
	await api.pressKey("l", ["commandOrControl", "alt"]);
});

serenade.app("code").command("toggle sidebar", async (api, matches) => {
	await api.pressKey("b", ["commandOrControl", "alt"]);
});
serenade.app("code").command("search files", async (api, matches) => {
	await api.pressKey("f1");
	await api.pressKey("backspace");
});
serenade.app("code").command("toggle terminal", async (api, matches) => {
	await api.pressKey("'", ["commandOrControl", "alt"]);
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
	await api.pressKey("l", ["commandOrControl", "shift", "alt"]);
});
serenade.app("code").command("select matching <%number%>", async (api, matches) => {
	const increment = parseInt(matches.number);
	for (let index = 0; index < increment; index++) {
		await api.pressKey(".", ["alt", "shift"]);
	}
});
serenade.app("code").command("select a language <%language%>", async (api, matches) => {
	await api.pressKey("k", ["commandOrControl"]);
	await api.pressKey("m");
	await api.typeText(matches.language);
});
serenade.app("code").command("open folder", async (api) => {
	await api.pressKey("k", ["commandOrControl"]);
	await api.pressKey("o", ["commandOrControl"]);
});
serenade.app("code").command("expand selection", async (api,matches) => {
	await api.pressKey("w", ["commandOrControl"]);
});
serenade.app("code").command("keyboard shortcuts", async (api,matches) => {
	await api.pressKey("k", ["commandOrControl"]);
	await api.pressKey("s", ["commandOrControl"]);
});
//Markers are for CodeRush extension:
serenade.app("code").command("drop marker", async (api,matches) => {
	await api.pressKey("home", ["alt"]);
});
// this was originally escape, but changed as it interfered with other commands
serenade.app("code").command("collect marker", async (api,matches) => {
	await api.pressKey("e", ["commandOrControl", "shift", "alt"]);
});
serenade.app("code").command("swap marker", async (api,matches) => {
	await api.pressKey("home", ["shift", "alt"]);
});
serenade.app("code").command("open smart tag", async (api,matches) => {
	await api.pressKey(".", ["commandOrControl"]);
});
serenade.app("code").command("show extensions", async (api,matches) => {
	await api.pressKey("x", ["commandOrControl", "shift"]);
});
serenade.app("code").command("advanced new file", async (api,matches) => {
	await api.pressKey("n", ["commandOrControl", "alt"]);
});
serenade.app("code").command("open new terminal", async (api,matches) => {
	await api.pressKey("c", ["commandOrControl", "shift"]);
});
serenade.app("code").command("clear terminal", async (api,matches) => {
	await api.pressKey("c", ["shift", "alt"]);
	await api.pressKey("c", ["shift", "alt"]);
});
serenade.app("code").command("resize terminal down", async (api,matches) => {
	await api.pressKey("down", ["win", "alt"]);
});
serenade.app("code").command("resize terminal up", async (api,matches) => {
	await api.pressKey("up", ["win", "alt"]);
});