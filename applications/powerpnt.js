// Scott and Barbara's super awesome WIN11 power point commands 4/13/2023
// import sx from "sx";
const { sleep } = require("./utils.js");

///this block is a reference used for creating new commands by pasting 
///and using replace commands

/* serenade.app("powerpnt").command("bob", async (api, matches) => {
  await api.pressKey("sam",["ctrl"]);
  }); */
  
serenade.global().command("focus power point", async (api, matches) => {
  api.focusApplication("powerpnt");
  });

serenade.app("powerpnt").command("undo", async (api, matches) => {
  await api.pressKey("z",["ctrl"]);
  });

serenade.app("powerpnt").command("create rectangle", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("enter",[]);
  });
serenade.app("powerpnt").command("create square", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("shapes", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  });
  
serenade.app("powerpnt").command("new presentation", async (api, matches) => {
  await api.pressKey("n",["ctrl"]);
  });

serenade.app("powerpnt").command("new slide", async (api, matches) => {
  await api.pressKey("m",["ctrl"]);
  });

serenade.app("powerpnt").command("bold text", async (api, matches) => {
  await api.pressKey("b",["ctrl"]);
  });
  
serenade.app("powerpnt").command("font box", async (api, matches) => {
  await api.pressKey("t",["ctrl"]);
  }); 
  
serenade.app("powerpnt").command("hyper link", async (api, matches) => {
  await api.pressKey("k",["ctrl"]);
  });
     
serenade.app("powerpnt").command("new comment", async (api, matches) => {
  await api.pressKey("m",["ctrl", "alt"]);
  });

serenade.app("powerpnt").command("slideshow", async (api, matches) => {
  await api.pressKey("f5",[]);
  });
  
  serenade.app("powerpnt").command("stop slideshow", async (api, matches) => {
    await api.pressKey("esc",[]);
    });
  
serenade.app("powerpnt").command("print", async (api, matches) => {
  await api.pressKey("p",["ctrl"]);
  });
  
serenade.app("powerpnt").command("save", async (api, matches) => {
  await api.pressKey("s",["ctrl"]);
  });
  
serenade.app("powerpnt").command("close power point", async (api, matches) => {
  await api.pressKey("q",["ctrl"]);
  });

serenade.app("powerpnt").command("next slide", async (api, matches) => {
  await api.pressKey("pagedown");
  });

serenade.app("powerpnt").command("previous slide", async (api, matches) => {
  await api.pressKey("pageup");
  });
  
// bind keys don't work
// serenade.app("powerpnt").command("zoom in", async (api, matches) => {
//   await api.pressKey("+",["ctrl"]);
//   });
//   
// serenade.app("powerpnt").command("zoom out", async (api, matches) => {
//   await api.pressKey("-",["ctrl"]);
//   });

serenade.app("powerpnt").command("zoom to fit", async (api, matches) => {
  await api.pressKey("w",["alt"]);
  await api.typeText("f");
  });
  
serenade.app("powerpnt").command("fit to window", async (api, matches) => {
  await api.pressKey("w",["alt"]);
  await api.typeText("f");
  });
  
serenade.app("powerpnt").command("fit", async (api, matches) => {
  await api.pressKey("w",["alt"]);
  await api.typeText("f");
  });
  
serenade.app("powerpnt").command("zoom to one hundred", async (api, matches) => {
  await api.pressKey("w",["alt"]);
  await api.typeText("q1");
  await api.pressKey("enter");
  });
  
serenade.app("powerpnt").command("zoom <%number%>", async (api, cmd) => {
  await api.pressKey("w",["alt"]);
  await api.typeText("f");
  await api.pressKey("w",["alt"]);
  await api.typeText("q");
  await api.pressKey("tab",[]);
  await  sleep(100);
  await api.typeText(cmd.number);
  await sleep(100);
  await api.pressKey("enter");
  });

serenade.app("powerpnt").command("copy slide", async (api, matches) => {
  await api.pressKey("d",["ctrl","shift"]);
  });
  
serenade.app("powerpnt").command("open presentation", async (api, matches) => {
  await api.pressKey("o",["ctrl"]);
  });
  

serenade.app("powerpnt").command("close presentation", async (api, matches) => {
  await api.pressKey("d",["ctrl"]);
  });

serenade.app("powerpnt").command("save as", async (api, matches) => {
  await api.pressKey("s",["ctrl", "shift"]);
  });

serenade.app("powerpnt").command("open file", async (api, matches) => {
  await api.pressKey("o",["ctrl"]);
  });

serenade.app("powerpnt").command("cut", async (api, matches) => {
  await api.pressKey("x",["ctrl"]);
  });

serenade.app("powerpnt").command("duplicate", async (api, matches) => {
  await api.pressKey("d",["ctrl"]);
  });
  
serenade.app("powerpnt").command("duplicate slide", async (api, matches) => {
  await api.pressKey("d",["ctrl"]);
  });

serenade.app("powerpnt").command("copy formatting", async (api, matches) => {
  await api.pressKey("c",["ctrl","shift"]);
  });

serenade.app("powerpnt").command("paste formatting", async (api, matches) => {
  await api.pressKey("v",["ctrl", "shift"]);
  });
  
serenade.app("powerpnt").command("copy animation", async (api, matches) => {
  await api.pressKey("c",["ctrl","shift"]);
  });

serenade.app("powerpnt").command("paste animation", async (api, matches) => {
  await api.pressKey("v",["ctrl","shift"]);
  });

serenade.app("powerpnt").command("paste special", async (api, matches) => {
  await api.pressKey("v",["ctrl","alt"]);
  });
  
serenade.app("powerpnt").command("next object", async (api, matches) => {
  await api.pressKey("tab",[]);
  });

serenade.app("powerpnt").command("previous object", async (api, matches) => {
  await api.pressKey("tab",["shift"]);
  });

serenade.app("powerpnt").command("send back", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("gk");
  });
  
serenade.app("powerpnt").command("send to back", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("gk");
  });
  
serenade.app("powerpnt").command("send front", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("gr");
  // await api.pressKey("j",["alt"]);
  // await api.pressKey("d",[]);
  // await api.pressKey("a",[]);
  // await api.pressKey("r",[]);
  });
  
serenade.app("powerpnt").command("send to front", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("gr");
  // await api.pressKey("j",["alt"]);
  // await api.pressKey("d",[]);
  // await api.pressKey("a",[]);
  // await api.pressKey("r",[]);
  });

  
serenade.app("powerpnt").command("send backward", async (api, matches) => {
  await api.pressKey("[",["ctrl","shift"]);
  });

serenade.app("powerpnt").command("send forward", async (api, matches) => {
  await api.pressKey("]",["ctrl","shift"]);
  });
  
serenade.app("powerpnt").command("group", async (api, matches) => {
  await api.pressKey("g",["ctrl"]);
  });

serenade.app("powerpnt").command("ungroup", async (api, matches) => {
  await api.pressKey("g",["ctrl","shift"]);
  });

serenade.app("powerpnt").command("regroup", async (api, matches) => {
  await api.pressKey("j",["ctrl","shift"]);
  });

serenade.app("powerpnt").command("rotate right", async (api, matches) => {
  await api.pressKey("right",["alt"]);
  });
  
serenade.app("powerpnt").command("rotate left", async (api, matches) => {
  await api.pressKey("left",["alt"]);
  });
  
serenade.app("powerpnt").command("rotate ninety", async (api, matches) => {
  await api.pressKey("alt");
  await api.typeText("jd");
  await api.pressKey("a",[]);
  await api.pressKey("y",[]);
  await api.pressKey("r",[]);
  });

serenade.app("powerpnt").command("rotate negative ninety", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("jd");
  await api.pressKey("a",[]);
  await api.pressKey("y",[]);
  await api.pressKey("l",[]);
  });
  
serenade.app("powerpnt").command("flip vertical", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("jd");
  await api.pressKey("a",[]);
  await api.pressKey("y",[]);
  await api.pressKey("v",[]);
  });

serenade.app("powerpnt").command("flip horizontal", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("jd");
  await api.pressKey("a",[]);
  await api.pressKey("y",[]);
  await api.pressKey("h",[]);
  });

serenade.app("powerpnt").command("play media", async (api, matches) => {
  await api.pressKey("space",["ctrl"]);
  });

serenade.app("powerpnt").command("insert equation", async (api, matches) => {
  await api.pressKey("=",["alt"]);
  });
  
// commands not working
// serenade.app("powerpnt").command("select right", async (api, matches) => {
//   await api.pressKey("right",["shift"]);
//   });
  
// serenade.app("powerpnt").command("select left", async (api, matches) => {
//   await api.pressKey("left",["shift"]);
//   });

serenade.app("powerpnt").command("select right word", async (api, matches) => {
  await api.pressKey("d",["ctrl", "shift"]);
  });

serenade.app("powerpnt").command("select left word", async (api, matches) => {
  await api.pressKey("a",["shift","ctrl"]);
  });

serenade.app("powerpnt").command("select to beginning of paragraph", async (api, matches) => {
  await api.pressKey("w",["shift","ctrl"]);
  });

serenade.app("powerpnt").command("select to end of paragraph", async (api, matches) => {
  await api.pressKey("s",["shift","ctrl"]);
  });

serenade.app("powerpnt").command("delete left word", async (api, matches) => {
  await api.pressKey("backspace",["ctrl"]);
  });

serenade.app("powerpnt").command("delete right word", async (api, matches) => {
  await api.pressKey("delete",["ctrl"]);
  });

serenade.app("powerpnt").command("move left word", async (api, matches) => {
  await api.pressKey("left",["ctrl"]);
  });  

serenade.app("powerpnt").command("move right word", async (api, matches) => {
  await api.pressKey("right",["ctrl"]);
  });

serenade.app("powerpnt").command("cursor front", async (api, matches) => {
  await api.pressKey("home",["ctrl"]);
  });
  
serenade.app("powerpnt").command("cursor beginning", async (api, matches) => {
  await api.pressKey("home",["ctrl"]);
  });

serenade.app("powerpnt").command("cursor end", async (api, matches) => {
  await api.pressKey("end",["ctrl"]);
  });

serenade.app("powerpnt").command("next block", async (api, matches) => {
  await api.pressKey("enter",["ctrl"]);
  });

// serenade.app("powerpnt").command("move paragraph up", async (api, matches) => {
//   await api.pressKey("up",["alt","shift"]);
//   });

serenade.app("powerpnt").command("find in file", async (api, matches) => {
  await api.pressKey("f",["ctrl"]);
  });

serenade.app("powerpnt").command("replace", async (api, matches) => {
  await api.pressKey("h",["ctrl"]);
  });

serenade.app("powerpnt").command("repeat find", async (api, matches) => {
  await api.pressKey("f4",["shift"]);
  });
  
serenade.app("powerpnt").command("shift caps", async (api, matches) => {
  await api.pressKey("f3",["shift"]);
  });
serenade.app("powerpnt").command("toggle caps", async (api, matches) => {
  await api.pressKey("f3",["shift"]);
  });
serenade.app("powerpnt").command("toggle capital", async (api, matches) => {
  await api.pressKey("f3",["shift"]);
  });
  
serenade.app("powerpnt").command("font size <%number%>", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("fs");
  await sleep(100);
  await api.typeText(cmd.number);
  await sleep(100);
  await api.pressKey("enter");
  await api.pressKey("escape",[]);
  });

serenade.app("powerpnt").command("increase font", async (api, matches) => {
  await api.pressKey(".",["shift","ctrl"]);
  });
  
serenade.app("powerpnt").command("decrease font", async (api, matches) => {
  await api.pressKey(",",["shift","ctrl"]);
  });

serenade.app("powerpnt").command("font bold", async (api, matches) => {
  await api.pressKey("b",["ctrl"]);
  });

serenade.app("powerpnt").command("font underline", async (api, matches) => {
  await api.pressKey("u",["ctrl"]);
  });

serenade.app("powerpnt").command("font italic", async (api, matches) => {
  await api.pressKey("i",["ctrl"]);
  });

serenade.app("powerpnt").command("font subscript", async (api, matches) => {
  await api.pressKey("=",["ctrl"]);
  });

serenade.app("powerpnt").command("font superscript", async (api, matches) => {
  await api.pressKey("=",["ctrl", "shift"]);
  });
  
serenade.app("powerpnt").command("center paragraph", async (api, matches) => {
  await api.pressKey("e",["ctrl"]);
  });
  
serenade.app("powerpnt").command("justify paragraph", async (api, matches) => {
  await api.pressKey("j",["ctrl"]);
  });
  
serenade.app("powerpnt").command("left align paragraph", async (api, matches) => {
  await api.pressKey("l",["ctrl"]);
  });
  
serenade.app("powerpnt").command("right align paragraph", async (api, matches) => {
  await api.pressKey("r",["ctrl"]);
  });

serenade.app("powerpnt").command("list round", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("u",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });

serenade.app("powerpnt").command("list hollow round", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("u",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("list square", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("u",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });

serenade.app("powerpnt").command("list hollow square", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("u",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("list star", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("u",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("list arrow", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("u",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("list checkmark", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("u",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 

serenade.app("powerpnt").command("bullet round", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("u",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });

serenade.app("powerpnt").command("bullet hollow round", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("u",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("bullet square", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("u",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });

serenade.app("powerpnt").command("bullet hollow square", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("u",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("bullet star", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("u",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("bullet arrow", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("u",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("bullet checkmark", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("u",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 

  serenade.app("powerpnt").command("bullet color", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("u",[]);
  await api.pressKey("n",[]);
  await api.pressKey("c",[]);
  });

serenade.app("powerpnt").command("fullscreen", async (api, matches) => {
  await api.pressKey("f1",["ctrl"]);
  });

serenade.app("powerpnt").command("toggle guides", async (api, matches) => {
  await api.pressKey("f9",["alt"]);
  });
  
serenade.app("powerpnt").command("toggle grid", async (api, matches) => {
  await api.pressKey("f9",["shift"]);
  });

serenade.app("powerpnt").command("cycle pane", async (api, matches) => {
  await api.pressKey("f6");
  });
  
serenade.app("powerpnt").command("cycle back pane", async (api, matches) => {
  await api.pressKey("f6",["shift"]);
  });
  
serenade.app("powerpnt").command("toggle outline", async (api, matches) => {
  await api.pressKey("tab",["ctrl","shift"]);
  });

serenade.app("powerpnt").command("selection pane", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("slp");
  });

serenade.app("powerpnt").command("context menu", async (api, matches) => {
  await api.pressKey("f10",["shift"]);
  });

serenade.app("powerpnt").command("rename", async (api, matches) => {
  await api.pressKey("f2");
  });

serenade.app("powerpnt").command("slide up", async (api, matches) => {
  await api.pressKey("up",["ctrl"]);
  });

serenade.app("powerpnt").command("slide down", async (api, matches) => {
  await api.pressKey("down",["ctrl"]);
  });

// command not working

// serenade.app("powerpnt").command("slide beginning", async (api, matches) => {
//   await api.pressKey("up",["ctrl", "shift"]);
//   });

// serenade.app("powerpnt").command("slide end", async (api, matches) => {
//   await api.pressKey("down",["ctrl","shift"]);
//   });

serenade.app("powerpnt").command("presenter view", async (api, matches) => {
  await api.pressKey("f5",["alt"]);
  });

serenade.app("powerpnt").command("slide show", async (api, matches) => {
  await api.pressKey("f5");
  });

serenade.app("powerpnt").command("help menu", async (api, matches) => {
  await api.pressKey("f1");
  });

serenade.app("powerpnt").command("fill white", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sf");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("fill black", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sf");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("fill dark red", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sf");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("fill red", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sf");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("fill orange", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sf");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("fill yellow", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sf");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("fill light green", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sf");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("fill green", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sf");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("fill light blue", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sf");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("fill blue", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sf");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("fill dark blue", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sf");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("fill purple", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sf");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("no fill", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  }); 
  
serenade.app("powerpnt").command("fill color wheel", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sfm");
  }); 
  
serenade.app("powerpnt").command("eyedropper", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sfe");
  }); 
  
serenade.app("powerpnt").command("fill dot five", async (api, cmd) => { 
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(100)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill dot ten", async (api, cmd) => {  
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(100)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 1; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill dot twenty", async (api, cmd) => {  
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(100)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 2; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill dot twenty five", async (api, cmd) => {  
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(100)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 3; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill dot thirty", async (api, cmd) => {  
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(100)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 4; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill dot forty", async (api, cmd) => {  
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(100)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 5; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill dot fifty", async (api, cmd) => {  
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(100)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 6; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 

serenade.app("powerpnt").command("fill dot sixty", async (api, cmd) => { 
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(200)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 7; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill dot seventy", async (api, cmd) => { 
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(200)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 8; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 

serenade.app("powerpnt").command("fill dot seventy five", async (api, cmd) => { 
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(200)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 9; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill dot eighty", async (api, cmd) => { 
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(200)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 10; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill dot ninety", async (api, cmd) => { 
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(200)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 11; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill diagonal down", async (api, cmd) => { 
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(200)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 16; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill diagonal up", async (api, cmd) => { 
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(200)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 17; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill vertical stripe", async (api, cmd) => { 
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(200)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 22; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill horizontal stripe", async (api, cmd) => { 
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(200)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 23; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill confetti", async (api, cmd) => { 
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(200)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 29; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill diagonal brick", async (api, cmd) => { 
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(200)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 32; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill brick", async (api, cmd) => { 
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(200)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 33; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill plaid", async (api, cmd) => { 
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(200)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i <= 35; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
  
serenade.app("powerpnt").command("fill diamond", async (api, cmd) => { 
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(200)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await api.pressKey("space");
  await sleep(200)
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]);
  await sleep(200)
  for (i = 1; i < 47; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(200)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 

serenade.app("powerpnt").command("fill sphere", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(100)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await sleep(200)
  await api.pressKey("space");
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]); 
  await sleep(200)
  for (i = 1; i < 42; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(100)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill grid", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(100)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await sleep(200)
  await api.pressKey("space");
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]); 
  await sleep(200)
  for (i = 1; i < 44; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(100)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 
  
serenade.app("powerpnt").command("fill checkerboard", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sfn");
  await sleep(100)
  await api.pressKey("h",["alt"]);
  await api.typeText("sftma");
  await sleep(200)
  await api.pressKey("space");
  await api.pressKey("tab",[]);
  await sleep(200)
  await api.pressKey("home",[]); 
  await sleep(200)
  for (i = 1; i < 46; i++) {
    await api.pressKey("right",[]);
  }
  await sleep(100)
  await api.pressKey("enter",[]);
  await sleep(100)
  await api.pressKey("escape",[]);
  }); 

/// start line colors

serenade.app("powerpnt").command("line black", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("so");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
serenade.app("powerpnt").command("line white", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("so");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("line dark red", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("so");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("line red", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("so");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("outline red", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("so");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("line orange", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("so");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("line yellow", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("so");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("line light green", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("so");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("line green", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("so");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("line light blue", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("so");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("line blue", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("so");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("line dark blue", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("so");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("line purple", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("so");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("no outline", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("son");
  }); 
  
serenade.app("powerpnt").command("line color wheel", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("som");
  }); 
  
serenade.app("powerpnt").command("line eyedropper", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("soe");
  }); 
  
serenade.app("powerpnt").command("line weight", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sow");
  }); 
  
serenade.app("powerpnt").command("line dashes", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sos");
  }); 
  
serenade.app("powerpnt").command("line thin", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sow");
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("line medium", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sow");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("line thick", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sow");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("enter",[]);
  }); 

serenade.app("powerpnt").command("thin line", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sow");
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("medium line", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sow");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("thick line", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sow");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("enter",[]);
  }); 

serenade.app("powerpnt").command("next", async (api, matches) => {
  await api.pressKey("tab");
  });

serenade.app("powerpnt").command("previous", async (api, matches) => {
  await api.pressKey("tab",["shift"]);
  });

// table command
serenade.app("powerpnt").command("next row", async (api, matches) => {
  await api.pressKey("down");
  });

// table command
serenade.app("powerpnt").command("previous row", async (api, matches) => {
  await api.pressKey("up");
  });

serenade.app("powerpnt").command("tab in the cell", async (api, matches) => {
  await api.pressKey("tab",["ctrl"]);
  });
  
serenade.app("powerpnt").command("add row below", async (api, matches) => {
  await api.pressKey("alt");
  await api.typeText("jle");
  });
serenade.app("powerpnt").command("delete row", async (api, matches) => {
  await api.pressKey("alt");
  await api.typeText("jldr");
  });

serenade.app("powerpnt").command("insert table", async (api, cmd) => {
  await api.pressKey("n",["alt"]);
  await api.typeText("ti");
  });

serenade.app("powerpnt").command("left justify", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("al");
  });
  
serenade.app("powerpnt").command("right justify", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("ar");
  });
  
serenade.app("powerpnt").command("center justify", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("ac");
  });
  
serenade.app("powerpnt").command("justify", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("aj");
  });
  
serenade.app("powerpnt").command("header", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("jto");
  });
  
serenade.app("powerpnt").command("total", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("jtj");
  });
  
serenade.app("powerpnt").command("band rows", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("jtr");
  });
  
serenade.app("powerpnt").command("band columns", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("jtu");
  });
  
serenade.app("powerpnt").command("first columns", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("jtm");
  });
  
serenade.app("powerpnt").command("last columns", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("jtn");
  });
  
serenade.app("powerpnt").command("picture", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("npd");
  });
  
serenade.app("powerpnt").command("word art", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("nw");
  });

serenade.app("powerpnt").command("insert spreadsheet", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("nj");
  });

serenade.app("powerpnt").command("shapes", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("nsh");
  });
serenade.app("powerpnt").command("shape", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("nsh");
  });
  
serenade.app("powerpnt").command("transitions", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("k");
  });
  
serenade.app("powerpnt").command("recording", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("c");
  });
  
serenade.app("powerpnt").command("draw", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("ji");
  });

serenade.app("powerpnt").command("create line", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await sleep(100)
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create arrow", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await sleep(100)
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create double arrow", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await sleep(100)
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
   
serenade.app("powerpnt").command("create elbow", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await sleep(100)
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
 
serenade.app("powerpnt").command("create elbow arrow", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await sleep(100)
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create curved", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await sleep(100)
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create scribble", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await sleep(100)
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  // await api.pressKey("enter",[]);
  });

  
serenade.app("powerpnt").command("create rounded rectangle", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);  
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create oval", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);  
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create circle", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);  
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
  
serenade.app("powerpnt").command("create triangle", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);  
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create right triangle", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);  
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create parallelogram ", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);  
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create trapezoid", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);  
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create diamond", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);  
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create pentagon", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);  
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create hexagon", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);  
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create half circle", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);  
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
  
serenade.app("powerpnt").command("create plus sign", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create minus sign", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create frame", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);  
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create l", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);  
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("create not allowed", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);  
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  await api.delay(50);
  api.runCommand("fill red");
});

serenade.app("powerpnt").command("create smiley face", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("sh");
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);  
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
});

serenade.app("powerpnt").command("text block", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("nx");
  });
  
serenade.app("powerpnt").command("text box", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("nx");
  });
  
serenade.app("powerpnt").command("date fixed", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("nhdxy");
  });
serenade.app("powerpnt").command("date automatic", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("nhduy");
  });
serenade.app("powerpnt").command("date fixed", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("nhdxy");
  });
  
serenade.app("powerpnt").command("footnote", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("nhdf");
  });

serenade.app("powerpnt").command("animations", async (api, matches) => {
  await api.pressKey("alt");
  await api.typeText("a");
  });
  
serenade.app("powerpnt").command("animations preview", async (api, matches) => {
  await api.pressKey("alt");
  await api.typeText("app");
  });
serenade.app("powerpnt").command("animation preview", async (api, matches) => {
  await api.pressKey("alt");
  await api.typeText("app");
  });
serenade.app("powerpnt").command("preview animations", async (api, matches) => {
  await api.pressKey("alt");
  await api.typeText("app");
  });

serenade.app("powerpnt").command("add animations", async (api, matches) => {
  await api.pressKey("alt");
  await api.typeText("aaa");
  });
serenade.app("powerpnt").command("animations", async (api, matches) => {
  await api.pressKey("alt");
  await api.typeText("aaa");
  });
  
serenade.app("powerpnt").command("file", async (api, matches) => {
  await api.pressKey("f",["alt"]);
  });
  
serenade.app("powerpnt").command("layout", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("l");
  });
  
serenade.app("powerpnt").command("reset layout", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("q");
  });
serenade.app("powerpnt").command("reset slide", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("q");
  });
  
serenade.app("powerpnt").command("home", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  });
  
serenade.app("powerpnt").command("design", async (api, matches) => {
  await api.pressKey("g",["alt"]);
  });
  
serenade.app("powerpnt").command("format background", async (api, matches) => {
  await api.pressKey("g",["alt"]);
  await api.typeText("f");
  });
  
serenade.app("powerpnt").command("insert", async (api, matches) => {
  await api.pressKey("n",["alt"]);
  });
  
serenade.app("powerpnt").command("record", async (api, matches) => {
  await api.pressKey("c",["alt"]);
  });
  
serenade.app("powerpnt").command("review", async (api, matches) => {
  await api.pressKey("r",["alt"]);
  });
  
serenade.app("powerpnt").command("view", async (api, matches) => {
  await api.pressKey("w",["alt"]);
  });
  
serenade.app("powerpnt").command("help", async (api, matches) => {
  await api.pressKey("y",["alt"]);
  });
  
serenade.app("powerpnt").command("slide show tab", async (api, matches) => {
  await api.pressKey("s",["alt"]);
  });
  

serenade.app("powerpnt").command("paste text", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("vt");
  });
  
serenade.app("powerpnt").command("paste destination", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("vh");
  });
  
serenade.app("powerpnt").command("paste source", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("vu");
  });
  
serenade.app("powerpnt").command("section", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("t1");
  });
  
serenade.app("powerpnt").command("add section", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("t1a");
  });
  
serenade.app("powerpnt").command("rename section", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("t1r");
  });
  
serenade.app("powerpnt").command("remove section", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("t1e");
  });
  
serenade.app("powerpnt").command("collapse all", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("t1o");
  });
  
serenade.app("powerpnt").command("expand all", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("t1x");
  });
  
  // start fontcolor
serenade.app("powerpnt").command("font black", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("fc");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
serenade.app("powerpnt").command("font white", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("fc");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("font dark red", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("fc");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("font red", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("fc");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("font orange", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("fc");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("font yellow", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("fc");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("font light green", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("fc");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("font green", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("fc");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("font light blue", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("fc");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("font blue", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("fc");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("font dark blue", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("fc");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("font purple", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("fc");
  await sleep(100)
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("font color wheel", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("fcm");
  }); 

serenade.app("powerpnt").command("lowercase", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("7l");
  });
  
serenade.app("powerpnt").command("uppercase", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("7u");
  });
  
serenade.app("powerpnt").command("capitalize each word", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("7c");
  });
  
serenade.app("powerpnt").command("capitalize", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("7c");
  });
  
serenade.app("powerpnt").command("toggle case", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("7t");
  });
  
serenade.app("powerpnt").command("sentence case", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("7s");
  });
serenade.app("powerpnt").command("capitalize sentence", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("7s");
  });
serenade.app("powerpnt").command("sentence case", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("7s");
  });

serenade.app("powerpnt").command("text shadow", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("5");
  });
serenade.app("powerpnt").command("shadow text", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("5");
  });
  
serenade.app("powerpnt").command("strike through", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("4");
  });
  
serenade.app("powerpnt").command("character spacing very tight", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("6i");
  });
  
serenade.app("powerpnt").command("character spacing tight", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("6t");
  });
  
  
serenade.app("powerpnt").command("character spacing normal", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("6n");
  });
  
serenade.app("powerpnt").command("character spacing loose", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("6l");
  });
  
serenade.app("powerpnt").command("character spacing very loose", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("6v");
  });
  
serenade.app("powerpnt").command("character spacing", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("6");
  });
  
serenade.app("powerpnt").command("highlight off", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("tcn");
  });
serenade.app("powerpnt").command("no highlight", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("tcn");
  });
  
serenade.app("powerpnt").command("highlight yellow", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("tc");
  await sleep(100);
  await api.pressKey("home",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("highlight red", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("tc");
  await sleep(100);
  await api.pressKey("home",[]);
  await api.pressKey("down",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("highlight green", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("tc");
  await sleep(100);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("highlight turquoise", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("tc");
  await sleep(100);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("highlight pink", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("tc");
  await sleep(100);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("highlight gray", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("tc");
  await sleep(100);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("down",[]);
  await api.pressKey("down",[]);
  await api.pressKey("enter",[]);
  });

serenade.app("powerpnt").command("clear all formatting", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("e");
  });

//start bullet number
serenade.app("powerpnt").command("number", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("n",[]);
  });
serenade.app("powerpnt").command("numbers", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("n",[]);
  });
  
serenade.app("powerpnt").command("bullet number", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("n",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
serenade.app("powerpnt").command("bullet numbers", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("n",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });

serenade.app("powerpnt").command("bullet number parentheses", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("n",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });
  
serenade.app("powerpnt").command("bullet roman numerals", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("n",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  });

serenade.app("powerpnt").command("bullet capital alphabet", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("n",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("bullet alphabet parentheses", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("n",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("bullet alphabet", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("n",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("bullet roman numerals lower", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("n",[]);
  await api.pressKey("home",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("right",[]);
  await api.pressKey("enter",[]);
  }); 
  
serenade.app("powerpnt").command("bullet none", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("n",[]);
  await api.pressKey("home",[]);
  await api.pressKey("enter",[]);
  }); 
serenade.app("powerpnt").command("no bullet", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.pressKey("n",[]);
  await api.pressKey("home",[]);
  await api.pressKey("enter",[]);
  }); 

serenade.app("powerpnt").command("align top", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("gat");
  });

serenade.app("powerpnt").command("align left", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("gal");
  });
  
serenade.app("powerpnt").command("align center", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("gac");
  });
  
serenade.app("powerpnt").command("align right", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("gar");
  });
  
serenade.app("powerpnt").command("align middle", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("gam");
  });
  
serenade.app("powerpnt").command("align bottom", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("gab");
  });
  
serenade.app("powerpnt").command("align to slide", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("gaa");
  });
  
serenade.app("powerpnt").command("align selected objects", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("gao");
  });
serenade.app("powerpnt").command("align objects", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("gao");
  });
  
serenade.app("powerpnt").command("distribute horizontal", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("gah");
  });
  
serenade.app("powerpnt").command("distribute vertical", async (api, matches) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("gav");
  });

serenade.app("powerpnt").command("edit points", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("jdee");
  });
  
serenade.app("powerpnt").command("merge union", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("jdmu");
  });
  
serenade.app("powerpnt").command("merge combine", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("jdmc");
  });
  
serenade.app("powerpnt").command("merge fragment", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("jdmf");
  });
  
serenade.app("powerpnt").command("merge intersect", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("jdmi");
  });
  
serenade.app("powerpnt").command("merge subtract", async (api, cmd) => {
  await api.pressKey("alt");
  await api.typeText("jdms");
  });
  
serenade.app("powerpnt").command("quick styles", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("ss");
  });
  
serenade.app("powerpnt").command("select objects", async (api, cmd) => {
  await api.pressKey("h",["alt"]);
  await api.typeText("slo");
  });
  
serenade.app("powerpnt").command("title slide", async (api, cmd) => {
  await api.pressKey("n",["alt"]);
  await api.typeText("si");
  await api.pressKey("home");
  await api.pressKey("space");
  });
  
serenade.app("powerpnt").command("title and content slide", async (api, cmd) => {
  await api.pressKey("n",["alt"]);
  await api.typeText("si");
  await api.pressKey("home");
  await api.pressKey("right");
  await api.pressKey("space");
  });
  
serenade.app("powerpnt").command("section header slide", async (api, cmd) => {
  await api.pressKey("n",["alt"]);
  await api.typeText("si");
  await api.pressKey("home");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("space");
  });
  
serenade.app("powerpnt").command("two content slide", async (api, cmd) => {
  await api.pressKey("n",["alt"]);
  await api.typeText("si");
  await api.pressKey("home");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("space");
  });
  
serenade.app("powerpnt").command("comparison slide", async (api, cmd) => {
  await api.pressKey("n",["alt"]);
  await api.typeText("si");
  await api.pressKey("home");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("space");
  });
  
serenade.app("powerpnt").command("title only slide", async (api, cmd) => {
  await api.pressKey("n",["alt"]);
  await api.typeText("si");
  await api.pressKey("home");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("space");
  });
  
serenade.app("powerpnt").command("blank slide", async (api, cmd) => {
  await api.pressKey("n",["alt"]);
  await api.typeText("si");
  await api.pressKey("home");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("space");
  });
  
serenade.app("powerpnt").command("content with caption slide", async (api, cmd) => {
  await api.pressKey("n",["alt"]);
  await api.typeText("si");
  await api.pressKey("home");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("space");
  });
  
serenade.app("powerpnt").command("picture with caption slide", async (api, cmd) => {
  await api.pressKey("n",["alt"]);
  await api.typeText("si");
  await api.pressKey("home");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("right");
  await api.pressKey("space");
  });

serenade.app("powerpnt").command("insert screenshot", async (api, cmd) => {
  await api.pressKey("n",["alt"]);
  await api.typeText("sc");
  });
