/*

Serenade Custom Commands for JetBrains IDEs (IntelliJ family)

A set of common shortcuts for JetBrains IDEs. Note that the used "intellij" app scope covers
other IDEs, too (e.g. WebStorm).

*/

serenade.app("intellij").key(
  "context", "enter", ["alt"]
);

serenade.app("intellij").key(
  "format file", "l", ["ctrl", "alt"]
);

serenade.app("intellij").key(
  "rename", "f6", ["shift"]
);

serenade.app("intellij").key(
  "show members", "f12", ["ctrl"]
);

serenade.app("intellij").key(
  "find usages", "f7", ["alt"]
);

serenade.app("intellij").key(
  "go to declaration", "b", ["ctrl"]
);

serenade.app("intellij").key(
  "go to class", "n", ["ctrl"]
);

serenade.app("intellij").key(
  "go back", "left", ["ctrl", "alt"]
);

serenade.app("intellij").key(
  "go forward", "right", ["ctrl", "alt"]
);
