
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
serenade.language("c#").snippet(
	"get and set",
	" { get; set;}"
);

serenade.language("javascript").snippet(
	"serenade evaluate in plugin",
	'await api.evaluateInPlugin("<%cursor%>")'
);
serenade.language('javascript').snippet(
	"new snippet <%language%> <%command%>",
	'serenade.language("<%language%>").snippet(<%newline%>"<%command%>",<%newline%>"<%cursor%>"<%newline%>);'
);
serenade.language("javascript").snippet(
"serenade type text",
'await api.typeText("<%cursor%>");'
);
serenade.language("javascript").snippet(
"enclosure",
"<%<%cursor%>%>"
);
