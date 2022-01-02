// Enable / Disable Vim commands by saying "evil mode on" / "evil mode off"

// If using SpaceVim, say "space mode on" / "space mode off" instead

// ---------------
// Common Commands
// ---------------

const letters = [
  "h",
  "j",
  "k",
  "l",
  "e",
  "i",
  "x",
  "b",
  "r",
  "c",
  "a",
  "w",
  "d",
  "n",
  "t",
  "r",
  "o",
];

const letterIds = letters.map((letter) =>
  serenade.global().command(letter, async (api) => {
    await api.pressKey(letter);
  })
);

const vimIds = [
  ...letterIds,
  serenade.global().command("cw", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("c");
    await api.pressKey("w");
  }),

  serenade.global().command("dw", async (api) => {
    await api.pressKey("d");
    await api.pressKey("w");
  }),

  serenade.global().command("dd", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("d");
    await api.pressKey("d");
  }),

  serenade.global().command("ddi", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("d");
    await api.pressKey("d");
    await api.pressKey("i");
  }),

  serenade.global().command("yy", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("y");
    await api.pressKey("y");
  }),

  serenade.global().command("join", async (api) => {
    await api.pressKey("J");
  }),

  serenade.global().command("save", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("colon");
    await api.pressKey("w");
    await api.pressKey("enter");
  }),

  serenade.global().command("save quit", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("colon");
    await api.typeText("wq");
    await api.pressKey("enter");
  }),

  serenade.global().command("quit", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("colon");
    await api.pressKey("q");
    await api.pressKey("enter");
  }),

  serenade.global().command("force quit vim", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("colon");
    await api.typeText("q!");
    await api.pressKey("enter");
  }),

  serenade.global().command("no highlight", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("colon");
    await api.typeText("noh");
    await api.pressKey("enter");
  }),

  serenade.global().command("dot", async (api) => {
    await api.pressKey(".");
  }),

  serenade.global().command("yank", async (api) => {
    await api.pressKey("y");
  }),

  serenade.global().command("gg", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("g");
    await api.pressKey("g");
  }),

  serenade.global().command("big g", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("G");
  }),

  serenade.global().command("dollar", async (api) => {
    await api.pressKey("$");
  }),

  serenade.global().command("start", async (api) => {
    await api.pressKey("0");
  }),

  serenade.global().command("put", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("p");
  }),

  serenade.global().command("jump", async (api) => {
    await api.pressKey("}");
  }),

  serenade.global().command("reach", async (api) => {
    await api.pressKey("{");
  }),

  serenade.global().command("mirror", async (api) => {
    await api.pressKey("%");
  }),

  serenade.global().command("visual", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("v");
  }),

  serenade.global().command("undo", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("u");
  }),

  serenade.global().command("redo", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("r", ["control"]);
  }),

  serenade.global().command("big c", async (api) => {
    await api.pressKey("C");
  }),

  serenade.global().command("big delete", async (api) => {
    await api.pressKey("D");
  }),

  serenade.global().command("search <%text%>", async (api, cmd) => {
    await api.pressKey("/");
    await api.typeText(cmd.text);
    await api.pressKey("enter");
  }),

  serenade.global().command("back search <%text%>", async (api, cmd) => {
    await api.pressKey("?");
    await api.typeText(cmd.text);
    await api.pressKey("enter");
  }),

  serenade.global().command("toggle case", async (api) => {
    await api.pressKey("~");
  }),

  serenade.global().command("indent", async (api) => {
    await api.pressKey(">");
    await api.pressKey(">");
  }),

  serenade.global().command("dedent", async (api) => {
    await api.pressKey("<");
    await api.pressKey("<");
  }),

  serenade.global().command("shift right", async (api) => {
    await api.pressKey(">");
  }),

  serenade.global().command("shift left", async (api) => {
    await api.pressKey("<");
  }),

  serenade.global().command("select block", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("v");
    await api.pressKey("a");
    await api.pressKey("{");
    await api.pressKey("enter");
  }),

  serenade.global().command("select parens", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("v");
    await api.pressKey("a");
    await api.pressKey("(");
    await api.pressKey("enter");
  }),

  serenade.global().command("select quotes", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("v");
    await api.pressKey("a");
    await api.pressKey('"');
    await api.pressKey("enter");
  }),

  serenade.global().command("select backticks", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("v");
    await api.pressKey("a");
    await api.pressKey("`");
    await api.pressKey("enter");
  }),

  serenade.global().command("close buffer", async (api) => {
    await api.pressKey("escape");
    await api.typeText(":bd");
    await api.pressKey("enter");
  }),

  serenade.global().command("next buffer", async (api) => {
    await api.pressKey("escape");
    await api.typeText(":bn");
    await api.pressKey("enter");
  }),

  serenade.global().command("previous buffer", async (api) => {
    await api.pressKey("escape");
    await api.typeText(":bp");
    await api.pressKey("enter");
  }),

  serenade.global().command("open buffer <%text%>", async (api, cmd) => {
    await api.pressKey("escape");
    await api.typeText(":e ");
    await api.typeText(cmd.text);
    await api.pressKey("tab");
  }),

  // plays recorded macro
  serenade.global().command("play", async (api) => {
    await api.pressKey("@");
    await api.pressKey("r");
  }),
];

// -------------
// Vanilla Only
// -------------

const vanillaIds = [
  // records a macro
  serenade.global().command("record", async (api) => {
    await api.pressKey("q");
    await api.pressKey("r");
  }),

  // stops recording macro
  serenade.global().command("stop record", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("q");
  }),
];

// -------------
// Spacevim Only
// -------------

const spacevimIds = [
  serenade.global().command("record", async (api) => {
    await api.pressKey("q", ["alt"]);
    await api.pressKey("r");
  }),

  // stops recording macro
  serenade.global().command("stop record", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("q", ["alt"]);
  }),

  // toggles line numbers
  serenade.global().command("line numbers", async (api) => {
    await api.pressKey("escape");
    await api.pressKey("space");
    await api.pressKey("t");
    await api.pressKey("n");
  }),

  // toggles line comment
  serenade.global().command("comment", async (api) => {
    await api.pressKey("space");
    await api.pressKey("c");
    await api.pressKey("l");
  }),

  // toggles file tree
  serenade.global().command("file tree", async (api) => {
    await api.pressKey("space");
    await api.pressKey("f");
    await api.pressKey("t");
  }),
];

// Disable everything by default
vimIds.map((id) => serenade.global().disable(id));
vanillaIds.map((id) => serenade.global().disable(id));
spacevimIds.map((id) => serenade.global().disable(id));

// Enable / Disable Vanilla Vim
serenade.global().command("evil mode on", async (api) => {
  vimIds.map((id) => serenade.global().enable(id));
  vanillaIds.map((id) => serenade.global().enable(id));
});

serenade.global().command("evil mode off", async (api) => {
  vimIds.map((id) => serenade.global().disable(id));
  vanillaIds.map((id) => serenade.global().disable(id));
});

// Enable / Disable SpaceVim
serenade.global().command("space mode on", async (api) => {
  vimIds.map((id) => serenade.global().enable(id));
  spacevimIds.map((id) => serenade.global().enable(id));
});

serenade.global().command("space mode off", async (api) => {
  vimIds.map((id) => serenade.global().disable(id));
  spacevimIds.map((id) => serenade.global().disable(id));
});
