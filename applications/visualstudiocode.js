serenade.app("code").command("close all tabs", async (api) => {
	await api.evaluateInPlugin("openEditors.closeAll")
});
serenade.app("code").command("show explorer", async (api, matches) => {
	await api.evaluateInPlugin("workbench.view.explorer");
});

serenade.app("code").command("toggle sidebar", async (api, matches) => {
	await api.evaluateInPlugin("workbench.action.toggleSidebarVisibility")
});
serenade.app("code").command("search files", async (api, matches) => {
	await api.pressKey("f1");
	await api.pressKey("backspace");
});
serenade.app("code").command("toggle terminal", async (api, matches) => {
	await api.evaluateInPlugin("workbench.action.terminal.toggleTerminal")
});
serenade.app("code").command("following issue", async (api, matches) => {
	await api.pressKey("f8", ["alt"]);
});
serenade.app("code").command("previous issue", async (api, matches) => {
	await api.pressKey("f8", ["alt", "shift"]);
});
serenade.app("code").command("select matching", async (api, matches) => {
	await api.evaluateInPlugin("editor.action.addSelectionToNextFindMatch")
});
//select all occurrences of find match
serenade.app("code").command("select all matching", async (api, matches) => {
	await api.pressKey("l", ["control", "shift", "alt"]);
});
serenade.app("code").command("select matching <%number%>", async (api, matches) => {
	const increment = parseInt(matches.number);
	for (let index = 0; index < increment; index++) {
		await api.evaluateInPlugin("openEditors.closeAll");
	}
});
serenade.app("code").command("select a language <%language%>", async (api, matches) => {
	await api.pressKey("k", ["control"]);
	await api.pressKey("m");
	await api.typeText(matches.language);
});
serenade.app("code").command("open folder", async (api) => {
	await api.evaluateInPlugin("workbench.action.files.openLocalFolder")
});
serenade.app("code").command("expand selection", async (api, matches) => {
	await api.evaluateInPlugin("editor.action.smartSelect.expand")
});
serenade.app("code").command("keyboard shortcuts", async (api, matches) => {
	await api.pressKey("k", ["control"]);
	await api.pressKey("s", ["control"]);
});
//this is for CodeRush extension:
serenade.app("code").command("drop marker", async (api, matches) => {
	await api.evaluateInPlugin("CodeRush.markerDrop")
});
serenade.app("code").command("collect marker", async (api, matches) => {
	await api.evaluateInPlugin("CodeRush.markerCollect")
});
serenade.app("code").command("swap marker", async (api, matches) => {
	await api.evaluateInPlugin("CodeRush.markerSwap")
});
//Show Code Actions
serenade.app("code").command("open smart tag", async (api, matches) => {
	await api.pressKey(".", ["control"]);
});
serenade.app("code").command("show extensions", async (api, matches) => {
	await api.pressKey("x", ["control", "shift"]);
});
serenade.app("code").command("advanced new file", async (api, matches) => {
	await api.evaluateInPlugin("extension.advancedNewFile")
});
//unfortunately cannot get this to work
serenade.app("code").command("add cursors to line ends", async (api, matches) => {
	await api.evaluateInPlugin("editor.action.insertCursorAtEndOfEachLineSelected)")
});
serenade.app("code").command("open new terminal", async (api, matches) => {
	await api.evaluateInPlugin("workbench.action.terminal.openNativeConsole")
});
serenade.app("code").command("clear terminal", async (api, matches) => {
	await api.evaluateInPlugin("workbench.action.terminal.clear")
});

serenade.app("code").command("resize terminal down", async (api, matches) => {
	await api.evaluateInPlugin("workbench.action.terminal.resizePaneDown")
});
serenade.app("code").command("resize terminal up", async (api, matches) => {
	await api.evaluateInPlugin("workbench.action.terminal.resizePaneUp")
});
serenade.app("code").command("show source control", async (api, matches) => {
	await api.pressKey("g", ["control", "shift"]);
});