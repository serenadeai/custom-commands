serenade.app("terminal").command("list", async (api) => {
  await api.typeText("ls -a");
  await api.pressKey("enter");
});

serenade.app("terminal").command("file copy", async (api) => {
  await api.typeText("cp ");
});

serenade.app("terminal").command("clear", async (api) => {
  await api.typeText("clear");
  await api.pressKey("enter");
});

serenade.app("terminal").command("pwd", async (api) => {
  await api.typeText("pwd");
  await api.pressKey("enter");
});

serenade.app("terminal").command("ssh", async (api) => {
  await api.typeText("ssh ");
});

serenade.app("terminal").command("cd", async (api) => {
  await api.typeText("cd ");
});

serenade.app("terminal").command("cd <%text%>", async (api, cmd) => {
  await api.typeText("cd ");
  await api.typeText(cmd.text);
  await api.pressKey("tab")
});

serenade.app("terminal").command("open vim <%text%>", async (api, cmd) => {
  await api.typeText("vim ");
  await api.typeText(cmd.text);
});

serenade.app("terminal").command("open nvim <%text%>", async (api, cmd) => {
  await api.typeText("nvim ");
  await api.typeText(cmd.text);
});


// ------
// Conda
// ------

serenade
  .app("terminal")
  .command("conda activate <%text%>", async (api, cmd) => {
    await api.typeText("conda activate ");
    await api.typeText(cmd.text);
  });

serenade.app("terminal").command("conda create <%text%>", async (api, cmd) => {
  await api.typeText("conda create -n ");
  await api.typeText(cmd.text);
  await api.typeText(" python=3.9");
});

serenade.app("terminal").command("conda deactivate", async (api) => {
  await api.typeText("conda deactivate");
  await api.pressKey("enter");
});

serenade.app("terminal").command("conda env", async (api) => {
  await api.typeText("conda info --envs");
  await api.pressKey("enter");
});

serenade.app("terminal").command("jupiter notebook", async (api) => {
  await api.typeText("jupyter notebook");
  await api.pressKey("enter");
});

serenade.app("terminal").command("jupyter notebook", async (api) => {
  await api.typeText("jupyter notebook");
  await api.pressKey("enter");
});

serenade.app("terminal").command("turn off jupiter", async (api) => {
  await api.pressKey("c", ["control"]);
  await api.pressKey("y");
  await api.pressKey("enter");
});
