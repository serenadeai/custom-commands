/*Move between groups when multiple groups are set up in the window*/
serenade.app("vscode").command("group <%direction%>", async (api, matches) => {
    api.pressKey("k",["control"]);
    api.pressKey(`${matches.direction}`,["control"]);
});

/*Insert a snippet (from VSCode or an extension) at the current position.
It can be edited using Serenade's "system" command. The first match in the list
of snippets is the snippet actually written in the document.*/
serenade.app("vscode").command("snippet <%name%>", async (api, matches) => {
    api.evaluateInPlugin("editor.action.insertSnippet");
    setTimeout(function() {
        api.typeText(matches.name);
        api.pressKey("enter");
    }, 500);
});
