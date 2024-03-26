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
const moveMouse = async (api, x, y) => {
	const current = await api.getMouseLocation();
	return api.setMouseLocation(current.x + x, current.y + y);
};

serenade.global().command("mouse <%direction%> <%amount%>", async (api, matches) => {
	let x = 0,
		y = 0;
	switch (matches.direction) {
		case "up":
			y = -parseInt(matches.amount);
			break;
		case "down":
			y = parseInt(matches.amount);
			break;
		case "left":
			x = -parseInt(matches.amount);
			break;
		case "right":
			x = parseInt(matches.amount);
			break;
		default:
			break;
	}
	await moveMouse(api, x, y);
});

serenade.global().command("mouse <%direction%> <%amount%> click", async (api, matches) => {
	let x = 0,
		y = 0;
	switch (matches.direction) {
		case "":
			y = -parseInt(matches.amount);
			break;
		case "down":
			y = parseInt(matches.amount);
			break;
		case "left":
			x = -parseInt(matches.amount);
			break;
		case "right":
			x = parseInt(matches.amount);
			break;
		default:
			break;
	}
	await moveMouse(api, x, y);
	api.click("left");
});

const verticalPosition = 1030;
serenade.global().command("task bar <%letter%>", async (api, matches) => {
	api.setMouseLocation(getCoordinateFromLetter(matches.letter), verticalPosition);
	api.click("left");
});

serenade.global().command("task bar right <%letter%>", async (api, matches) => {
	api.setMouseLocation(getCoordinateFromLetter(matches.letter) + 1700, verticalPosition);
	api.click("left");
});

serenade.global().command("task bar <%letter%> <%number%>", async (api, matches) => {
	api.setMouseLocation(getCoordinateFromLetter(matches.letter) + parseInt(matches.number) * 5, verticalPosition);
	api.click("left");
});

serenade.global().command("left <%letterX%> <%letterY%>", async (api, matches) => {
	let x = 0,
		y = 0;
	x = getCoordinateFromLetter(matches.letterX);
	y = getCoordinateFromLetter(matches.letterY);
	api.setMouseLocation(x, y);
})

serenade.global().command("right <%letterX%> <%letterY%>", async (api, matches) => {
	let x = 0,
		y = 0;
	x = getCoordinateFromLetter(matches.letterX) + 1700;
	y = getCoordinateFromLetter(matches.letterY);
	api.setMouseLocation(x, y);
})

function getCoordinateFromLetter(letter) {
	switch (letter) {
		case "alpha":
			return 50;
		case "bravo":
			return 100;
		case "charlie":
			return 150;
		case "delta":
			return 200;
		case "echo":
			return 250;
		case "foxtrot":
			return 300;
		case "golf":
			return 350;
		case "hotel":
			return 400;
		case "india":
			return 450;
		case "juliet":
			return 500;
		case "kilo":
			return 550;
		case "lima":
			return 600;
		case "mike":
			return 650;
		case "november":
			return 700;
		case "oscar":
			return 750;
		case "papa":
			return 800;
		case "quebec":
			return 850;
		case "cubic":
			return 850;
		case "romeo":
			return 900;
		case "sierra":
			return 950;
		case "tango":
			return 1000;
		case "uniform":
			return 1050;
		case "victor":
			return 1100;
		case "whiskey":
			return 1150;
		case "x-ray":
			return 1200;
		case "yankee":
			return 1250;
		case "zulu":
			return 1300;
		case "1":
			return 1350;
		case "2":
			return 1400;
		case "3":
			return 1450;
		case "4":
			return 1500;
		case "5":
			return 1550;
		case "6":
			return 1600;
		case "7":
			return 1650;

		default:
			return 0;
	}
}