//ironargonauts windows commands
//many use powertoys which is a free ms app
//voicehelp requires python script left for reference on running things from shell
const { sleep } = require("./utils.js");

//called when needing to send value to clipboard
async function setClipboard(api, value) {
  await api.runShell("powershell.exe", [
    "Set-Clipboard",
    "-Value",
    JSON.stringify(value),
  ]);
}

//gets the programs path and put it in clipboard
//useful for knowing what string to designate app
serenade.global().command("program name", async (api) => {
  const appPath = await api.getActiveApplication();
  await setClipboard(api, appPath);
});

//invokes native windows voice dictation kudos Roku
serenade.global().command(
  "voice mode",
  async (api, matches) => {
    await api.pressKey("h", ["win"]);
    await serenade.global().enable(pauseSerenadeCommands);
  },
  { autoExecute: true }
);

serenade.global().command(
  "voice to text",
  async (api, matches) => {
    await api.pressKey("h", ["win"]);
    await serenade.global().enable(pauseSerenadeCommands);
  },
  { autoExecute: true }
);

/// new search command that uses the active application
/// special case is search word windows which returns all windows commands
/// in the windows_commands.js script
/// .js files name needs to match executable i.e. excel.exe and excel.js
serenade.global().command("voice help <%text%>", async (api, cmd) => {
  searchWord = cmd.text;
  await setClipboard(api, searchWord);
  // const appPath = await api.getActiveApplication();
  // console.log(searchWord);
  if (searchWord == "windows") {
    const appPath = '\\foo\\bar\\windows_commands.exe';
    searchWord = "all";
    await voiceHelpPython(api, searchWord, appPath);
  } else {
    const appPath = await api.getActiveApplication();
    await voiceHelpPython(api, searchWord, appPath);
  }
})

//called when needing to use voice help
async function voiceHelpPython(api, value, program) {
  // next 4 lines are used for debugging
  // await setClipboard(api, value);
  // await setClipboard(api, program);
  // var pythonPath = "python 'C:\\Program Files\\python\\voice_help.py' -c 'font'";
  // await setClipboard(api, pythonPath);
  await api.runShell("powershell.exe", [
    "python 'C:\\Program Files\\python\\voice_help.py'",
    "-c",
    JSON.stringify(value),
    "-f",
    JSON.stringify(program),
  ]);
}


// This one is  working 
serenade.global().command("open notepad", async (api, cmd) => {
  await api.runShell("notepad.exe",);
});

["other window", "previous window", "alt tab"].forEach((cmd) => {
  serenade.global().command(cmd, async (api, cmd) => {
    await api.pressKey("tab", ["alt"]);
  });
});

//snaps app under mouse to left side of screen
serenade.global().command("window left", async (api, matches) => {
  await api.pressKey("left", ["win"]);
  await sleep(500);
  await api.pressKey("escape");
});

//snaps app under mouse to left side of screen
serenade.global().command("left side", async (api, matches) => {
  await api.pressKey("left", ["win"]);
  await sleep(500);
  await api.pressKey("escape");
});

//snaps app under mouse to right side of screen
serenade.global().command("window right", async (api, matches) => {
  await api.pressKey("right", ["win"]);
  await sleep(500);
  await api.pressKey("escape");
});

serenade.global().command("right side", async (api, matches) => {
  await api.pressKey("right", ["win"]);
  await sleep(500);
  await api.pressKey("escape");
});

serenade.global().command("window bottom", async (api, matches) => {
  await api.pressKey("down",["win"]);
});

serenade.global().command("window top", async (api, matches) => {
  await api.pressKey("up",["win"]);
});

//shows short cut keys linked to window button, needs powertoys
serenade.global().command("shortcut keys", async (api, matches) => {
  await api.pressKey("/",["win", "shift"]);
  });

["maximize", "maximize window"].forEach((cmd) => {
  serenade.global().command(cmd, async (api, matches) => {
    await api.pressKey("up", ["win"]);
 //   await sleep(200);
 //   await api.pressKey("x");
  });
});

["minimize", "minimize window"].forEach((cmd) => {
  serenade.global().command(cmd, async (api, matches) => {
    await api.pressKey("down", ["win"]);
    // await sleep(200);
    // await api.pressKey("n");
  });
});

serenade.global().command("close window", async (api, matches) => {
  await api.pressKey("space", ["alt"]);
  await sleep(200);
  await api.pressKey("c");
});

["rename file", "rename", "rename folder"].forEach((cmd) => {
  serenade.global().command(cmd, async (api, matches) => {
    await api.pressKey("f2");
  });
});

serenade.global().command("delete file", async (api, cmd) => {
  await api.pressKey("delete");
});

serenade.global().command("open folder <%text%>", async (api, cmd) => {
  await api.pressKey("win");
  await sleep(200);
  await api.typeText("folder:" + cmd.text);
  await sleep(200);
  await api.pressKey("enter");
});

//needs powertoys
serenade.global().command("search folder <%text%>", async (api, cmd) => {
  await api.pressKey("space", ["win"]);
  await sleep(100);
  await api.typeText(">>" + cmd.text);
});

//needs powertoys
serenade.global().command("search window settings <%text%>", async (api, cmd) => {
  await api.pressKey("space", ["win"]);
  await sleep(100);
  await api.typeText("$" + cmd.text);
});

//needs powertoys
serenade.global().command("windows settings <%text%>", async (api, cmd) => {
  await api.pressKey("space", ["win"]);
  await sleep(100);
  await api.typeText("$" + cmd.text);
});

["show desktop", "restore desktop", "hide desktop"].forEach((cmd) => {
  serenade.global().command(cmd, async (api, cmd) => {
    await api.pressKey("d", ["win"]);
  });
});

//needs powertoys
serenade.global().command("always on top", async (api, cmd) => {
    await api.pressKey("t", ["control","win"]);
});

//needs powertoys
serenade.global().command("right monitor", async (api, matches) => {
    await api.pressKey("d", ["shift","win"]);
});

//needs powertoys
serenade.global().command("left monitor", async (api, matches) => {
    await api.pressKey("a", ["shift","win"]);
});

serenade.global().command("show all windows", async (api, cmd) => {
  await api.pressKey("tab", ["win"]);
});

//needs clipboard histor enabled
serenade.global().command("windows history", async (api, cmd) => {
  await api.pressKey("v", ["win"]);
});

serenade.global().command("windows open <%text%>", async (api, cmd) => {
  await api.pressKey("win");
  await sleep(50);
  await api.typeText(cmd.text);
  await api.pressKey("enter");
});
  
serenade.global().command("windows search <%text%>", async (api, cmd) => {
  await api.pressKey("win");
  await sleep(50);
  await api.typeText(cmd.text);
});

serenade.global().command("windows raise <%text%>", async (api, cmd) => {
  await api.pressKey("space", ["win"]);
  await sleep(50);
  await api.typeText(cmd.text);
});

serenade.global().command("mouse crosshair", async (api, matches) => {
  await api.pressKey("p",["alt", "win"]);
});

//needs powertoys
serenade.global().command("windows crosshair", async (api, cmd) => {
  await api.pressKey("p",["alt", "win"]);
});

//needs powertoys
serenade.global().command("power run", async (api, matches) => {
  await api.pressKey("space",["win"]);
});

serenade.global().command("clear field", async (api, matches) => {
  await api.pressKey("a",["ctrl"]);
  await api.pressKey("backspace",[]);
});

serenade.global().command("clear word", async (api, matches) => {
  await api.click("left", 2);
  //await sleep(500);
  await api.pressKey("backspace",[]);
});

serenade.global().command("zoom out", async (api, matches) => {
  await api.pressKey("-", ["ctrl"]);
});

serenade.global().command("zoom in", async (api, cmd) => {
  await api.pressKey("+", ["ctrl"]);
});

serenade.global().command("windows screen clipping", async (api) => {
  await api.pressKey("s",["win", "shift"]);
});

//needs powertoys
serenade.global().command("text extractor", async (api) => {
  doesTop;
  await api.pressKey("t",["win", "shift"]);
});


// serenade.global().command("program name", async (api, cmd) => {
//  activeApp = api.getActiveApplication();
//   // window.alert(activateApp);
//   window.alert("test");
//   navigator.clipboard.writeText(activeApp);
//  // await navigator.clipboard.writeText(api.getActiveApplication());
// });





