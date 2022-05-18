const command = "command";
const option = "option";
const shift = "shift";
const control = "control";
const alt = "alt";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

serenade.app("code").command("explorer", async (api) => {
  await api.pressKey("e", [command, shift]);
});

serenade.app("code").command("find in file", async (api) => {
  await api.pressKey("f", [command]);
});

serenade.app("code").command("find in project", async (api) => {
  await api.pressKey("f", [command, shift]);
});

serenade.app("code").command("previous file", async (api) => {
  await api.pressKey("e", [command, shift]);
  await api.pressKey("up");
  await api.pressKey("down", [command]);
});

serenade.app("code").command("next file", async (api) => {
  await api.pressKey("e", [command, shift]);
  await api.pressKey("down");
  await api.pressKey("down", [command]);
});

serenade.app("code").command("search <%search%>", async (api, matches) => {
  await api.pressKey("p", [command]);
  await api.typeText(matches.search);
});

serenade.app("code").command("select file <%number%>", async (api, matches) => {
	const downs = parseInt(matches.number);
	for (let index = 0; index < downs - 1; index++) {
		await api.pressKey("down", [command]);
	}
	await api.pressKey("enter");
});

serenade.app("code").command("quick search <%search%>", async (api, matches) => {
  await api.pressKey("p", [command]);
  await api.typeText(matches.search);
	await sleep(300);
	await api.pressKey("enter");
});

serenade.app("code").command("next issue", async (api, matches) => {
	await api.pressKey("f8", ["alt"]);
});

serenade.app("code").command("previous issue", async (api, matches) => {
	await api.pressKey("f8", ["alt", "shift"]);
});

serenade.app("code").command("select matching", async (api, matches) => {
	await api.evaluateInPlugin("editor.action.addSelectionToNextFindMatch")
});

serenade.app("code").command("close all tabs", async (api) => {
	await api.evaluateInPlugin("openEditors.closeAll")
});

serenade.app("code").command("expand selection", async (api, matches) => {
	await api.evaluateInPlugin("editor.action.smartSelect.expand")
});

serenade.app("code").command("new file", async (api, matches) => {
	await api.evaluateInPlugin("explorer.newFile")
	await api.typeText(".rb");
	await api.pressKey("left", [command]);
});

serenade.app("code").command("new folder", async (api, matches) => {
	await api.evaluateInPlugin("explorer.newFolder")
});


serenade.app("code").command("relative path copy", async (api) => {
	await api.pressKey("c", [command, shift, option]);
});
