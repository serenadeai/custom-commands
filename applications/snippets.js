
serenade.language("javascript").snippet(
	"new global command <%name%>",
	'serenade.global().command("<%name%><%cursor%>", async (api,matches) => {<%newline%>});',
	{"name":["identifier","lowercase"]}
);
serenade.language("javascript").snippet(
	"new application command <%name%>",
	'serenade.app("<%cursor%>").command("<%name%>", async (api,matches) => {<%newline%>});',
	{"name":["identifier","lowercase"]}
);
serenade.language("javascript").snippet(
	"serenade press key",
	'await api.pressKey("<%cursor%>");'
);
serenade.global().snippet(
	"new class <%name%>",
	"public class <%name%><%cursor%> {<%newline%>}", {
		"name": ["pascal", "identifier"]
	},
	"class"
);
serenade.language("c#").command("get and set", async (api) => {
	await api.typeText(" { get; set;}");
});
