const moveMouse = async (api, x, y) => {
  const current = await api.getMouseLocation();
  return api.setMouseLocation(current.x + x, current.y + y);
};

serenade.global().command("mouse up <%amount%>", async (api, matches) => {
  await moveMouse(api, 0, -parseInt(matches.amount));
});

serenade.global().command("mouse down <%amount%>", async (api, matches) => {
  await moveMouse(api, 0, parseInt(matches.amount));
});

serenade.global().command("mouse left <%amount%>", async (api, matches) => {
  await moveMouse(api, -parseInt(matches.amount), 0);
});

serenade.global().command("mouse right <%amount%>", async (api, matches) => {
  await moveMouse(api, parseInt(matches.amount), 0);
});
