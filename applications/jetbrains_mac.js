/*

Serenade Custom Commands for IntelliJ on macOS
(works only iff corresponding shortcuts are set)

*/

// Basic Commands

serenade.app("intellij").key(
  "context", "enter", ["alt"]
);

serenade.app("intellij").key(
  "format file", "l", ["command", "alt"]
);

serenade.app("intellij").key(
  "rename", "f6", ["shift"]
);

serenade.app("intellij").key(
  "show members", "f12", ["command"]
);

serenade.app("intellij").key(
  "find usages", "f7", ["alt"]
);

serenade.app("intellij").key(
  "go to declaration", "b", ["command"]
);

serenade.app("intellij").key(
  "generate", "n", ["command"]
);

serenade.app("intellij").key(
  "go back", "left", ["command", "alt"]
);

serenade.app("intellij").key(
  "go forward", "right", ["command", "alt"]
);

serenade.app("intellij").command("open class <%text%>", async (api, matches) => {
  await api.pressKey("o", ["command"]);
  await api.typeText(matches.text);
});

// Code Completion

serenade.app("intellij").key(
  "complete", "enter", ["shift", "command"]
);

// This works already by "autocomplete"
// serenade.app("intellij").key(
//   "basic complete", "space", ["control"]
// );

serenade.app("intellij").key(
  "type complete", "space", ["control", "shift"]
);

// custom command to be used after jumping in non-text-field/pop-up
serenade.app("intellij").command("low append <%text%>", async (api, matches) => {
  [...matches.text].forEach(character => api.pressKey(character));
});

// custom command to be used after jumping in non-text-field/pop-up
// first character in upper case
serenade.app("intellij").command("append <%text%>", async (api, matches) => {
  var characters = [...matches.text];
  if(characters.length > 0) {
    api.pressKey(characters[0].toUpperCase());
  }
  characters.shift();
  characters.forEach(character => api.pressKey(character));
});

// Does not work in intellij 2022.1.1
// serenade.app("intellij").key(
//   "hippie  complete", "slash", ["alt"]
// );

serenade.app("intellij").command("search <%text%>", async (api, matches) => {
  await api.pressKey("e", ["command"]);
  await api.typeText(matches.text);
});

// Tool windows

serenade.app("intellij").key(
  "tool commit", "0", ["command"]
);

serenade.app("intellij").key(
  "tool project", "1", ["command"]
);

serenade.app("intellij").command("view in project", async (api) => {
  await api.pressKey("f1", ["alt"]);
  await api.pressKey("enter");
});

serenade.app("intellij").key(
  "tool bookmarks", "2", ["command"]
);

serenade.app("intellij").key(
  "tool find", "3", ["command"]
);

serenade.app("intellij").key(
  "tool run", "4", ["command"]
);

serenade.app("intellij").key(
  "tool debug", "5", ["command"]
);

serenade.app("intellij").key(
  "tool problems", "6", ["command"]
);

serenade.app("intellij").key(
  "tool structure", "7", ["command"]
);

serenade.app("intellij").key(
  "tool services", "8", ["command"]
);

serenade.app("intellij").key(
  "tool version", "9", ["command"]
);

serenade.app("intellij").key(
  "tool terminal", "f12", ["alt"]
);

// non-standard shortcut
serenade.app("intellij").key(
  "tool database", "1", ["shift", "command"]
);
