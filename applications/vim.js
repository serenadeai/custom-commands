// Enable Vim commands by saying "evil mode on" / "evil mode off"

// If using SpaceVim, say "space mode on" / "space mode off" instead

// ---------------
// Common Commands
// ---------------

function add_command(letter) {
  return serenade.global().command(String(letter), async (api) => {
    await api.pressKey(String(letter));
  });
}

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

letter_ids = [];
for (let i of letters) {
  letter_ids.push(add_command(i));
}

const id1 = serenade.global().command("cw", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("c");
  await api.pressKey("w");
});

const id2 = serenade.global().command("dw", async (api) => {
  await api.pressKey("d");
  await api.pressKey("w");
});

const id3 = serenade.global().command("dd", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("d");
  await api.pressKey("d");
});

const id4 = serenade.global().command("ddi", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("d");
  await api.pressKey("d");
  await api.pressKey("i");
});

const id5 = serenade.global().command("yy", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("y");
  await api.pressKey("y");
});

const id6 = serenade.global().command("join", async (api) => {
  await api.pressKey("J");
});

const id7 = serenade.global().command("save", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("colon");
  await api.pressKey("w");
  await api.pressKey("enter");
});

const id8 = serenade.global().command("save quit", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("colon");
  await api.typeText("wq");
  await api.pressKey("enter");
});

const id9 = serenade.global().command("quit", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("colon");
  await api.pressKey("q");
  await api.pressKey("enter");
});

const id10 = serenade.global().command("force quit vim", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("colon");
  await api.typeText("q!");
  await api.pressKey("enter");
});

const id11 = serenade.global().command("no highlight", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("colon");
  await api.typeText("noh");
  await api.pressKey("enter");
});

const id12 = serenade.global().command("dot", async (api) => {
  await api.pressKey(".");
});

const id13 = serenade.global().command("yank", async (api) => {
  await api.pressKey("y");
});

const id14 = serenade.global().command("gg", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("g");
  await api.pressKey("g");
});

const id15 = serenade.global().command("big g", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("G");
});

const id16 = serenade.global().command("dollar", async (api) => {
  await api.pressKey("$");
});

const id17 = serenade.global().command("start", async (api) => {
  await api.pressKey("0");
});

const id18 = serenade.global().command("put", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("p");
});

const id19 = serenade.global().command("jump", async (api) => {
  await api.pressKey("}");
});

const id20 = serenade.global().command("reach", async (api) => {
  await api.pressKey("{");
});

const id21 = serenade.global().command("mirror", async (api) => {
  await api.pressKey("%");
});

const id22 = serenade.global().command("visual", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("v");
});

const id23 = serenade.global().command("undo", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("u");
});

const id24 = serenade.global().command("redo", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("r", ["control"]);
});

const id25 = serenade.global().command("big c", async (api) => {
  await api.pressKey("C");
});

const id26 = serenade.global().command("big delete", async (api) => {
  await api.pressKey("D");
});

const id27 = serenade.global().command("search <%text%>", async (api, cmd) => {
  await api.pressKey("/");
  await api.typeText(cmd.text);
  await api.pressKey("enter");
});

const id28 = serenade
  .global()
  .command("back search <%text%>", async (api, cmd) => {
    await api.pressKey("?");
    await api.typeText(cmd.text);
    await api.pressKey("enter");
  });

serenade.app("terminal").command("open vim <%text%>", async (api, cmd) => {
  await api.typeText("v ");
  await api.typeText(cmd.text);
});

const id29 = serenade.global().command("toggle case", async (api) => {
  await api.pressKey("~");
});

const id30 = serenade.global().command("indent", async (api) => {
  await api.pressKey(">");
  await api.pressKey(">");
});

const id31 = serenade.global().command("dedent", async (api) => {
  await api.pressKey("<");
  await api.pressKey("<");
});

const id32 = serenade.global().command("shift right", async (api) => {
  await api.pressKey(">");
});

const id33 = serenade.global().command("shift left", async (api) => {
  await api.pressKey("<");
});

const id34 = serenade.global().command("select block", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("v");
  await api.pressKey("a");
  await api.pressKey("{");
  await api.pressKey("enter");
});

const id35 = serenade.global().command("select parens", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("v");
  await api.pressKey("a");
  await api.pressKey("(");
  await api.pressKey("enter");
});

const id36 = serenade.global().command("select quotes", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("v");
  await api.pressKey("a");
  await api.pressKey('"');
  await api.pressKey("enter");
});

const id37 = serenade.global().command("select backticks", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("v");
  await api.pressKey("a");
  await api.pressKey("`");
  await api.pressKey("enter");
});

const id38 = serenade.global().command("close buffer", async (api) => {
  await api.pressKey("escape");
  await api.typeText(":bd");
  await api.pressKey("enter");
});

const id39 = serenade.global().command("next buffer", async (api) => {
  await api.pressKey("escape");
  await api.typeText(":bn");
  await api.pressKey("enter");
});

const id40 = serenade.global().command("previous buffer", async (api) => {
  await api.pressKey("escape");
  await api.typeText(":bp");
  await api.pressKey("enter");
});

const id41 = serenade
  .global()
  .command("open buffer <%text%>", async (api, cmd) => {
    await api.pressKey("escape");
    await api.typeText(":e ");
    await api.typeText(cmd.text);
    await api.pressKey("tab");
  });

// plays recorded macro
const id42 = serenade.global().command("play", async (api) => {
  await api.pressKey("@");
  await api.pressKey("r");
});

// -------------
// Vanilla Only
// -------------

// records a macro
const vanilla_id1 = serenade.global().command("record", async (api) => {
  await api.pressKey("q");
  await api.pressKey("r");
});

// stops recording macro
const vanilla_id2 = serenade.global().command("stop record", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("q");
});

// -------------
// Spacevim Only
// -------------

// records a macro
const space_id1 = serenade.global().command("record", async (api) => {
  await api.pressKey("q", ["alt"]);
  await api.pressKey("r");
});

// stops recording macro
const space_id2 = serenade.global().command("stop record", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("q", ["alt"]);
});

// toggles line numbers
const space_id3 = serenade.global().command("line numbers", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("space");
  await api.pressKey("t");
  await api.pressKey("n");
});

// toggles line comment
const space_id4 = serenade.global().command("comment", async (api) => {
  await api.pressKey("space");
  await api.pressKey("c");
  await api.pressKey("l");
});

// toggles file tree
const space_id5 = serenade.global().command("file tree", async (api) => {
  await api.pressKey("space");
  await api.pressKey("f");
  await api.pressKey("t");
});

// IDs for all vim commands
const vim_ids = [
  ...letter_ids,
  id1,
  id2,
  id3,
  id4,
  id5,
  id6,
  id7,
  id8,
  id9,
  id10,
  id11,
  id12,
  id13,
  id14,
  id15,
  id16,
  id17,
  id18,
  id19,
  id20,
  id21,
  id22,
  id23,
  id24,
  id25,
  id26,
  id27,
  id28,
  id29,
  id30,
  id31,
  id32,
  id33,
  id34,
  id35,
  id36,
  id37,
  id38,
  id39,
  id40,
  id41,
  id42,
];

const vanilla_ids = [vanilla_id1, vanilla_id2];

const spacevim_ids = [space_id1, space_id2, space_id3, space_id4, space_id5];

// Disable everything by default
vim_ids.map((id) => serenade.global().disable(id));
spacevim_ids.map((id) => serenade.global().disable(id));

// Enable / Disable Vanilla Vim
serenade.global().command("evil mode on", async (api) => {
  vim_ids.map((id) => serenade.global().enable(id));
  vanilla_ids.map((id) => serenade.global().enable(id));
});

serenade.global().command("evil mode off", async (api) => {
  vim_ids.map((id) => serenade.global().disable(id));
  vanilla_ids.map((id) => serenade.global().disable(id));
});

// Enable / Disable SpaceVim
serenade.global().command("space mode on", async (api) => {
  vim_ids.map((id) => serenade.global().enable(id));
  spacevim_ids.map((id) => serenade.global().enable(id));
});

serenade.global().command("space mode off", async (api) => {
  vim_ids.map((id) => serenade.global().disable(id));
  spacevim_ids.map((id) => serenade.global().disable(id));
});
