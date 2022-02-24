var canvas = new fabric.Canvas('myCanvas');
var ballX = 0;
var ballY = 0;
var holeY = 450;
var holeX = 1050;
checkCoordinates();
block_image_width = 5;
block_image_height = 5;
holesMade = 0;
hex1 = "red";

function getRandomInteger(max) {
	return Math.floor(Math.random() * max);
}

function checkCoordinates() {
	while ((ballX/2) != Math.round(ballX/2)) {
		ballX = getRandomInteger(1050);
		console.log("rerolling ball x");
		console.log("new ball x: " + ballX);
	}
	while ((ballY/2) != Math.round(ballY/2)) {
		ballY = getRandomInteger(450);
		console.log("rerolling ball y");
		console.log("new ball y: " + ballY);
	}
	while ((holeY/2) != Math.round(holeY/2)) {
		holeY = getRandomInteger(450);
		console.log("rerolling hole y");
		console.log("new hole y: " + holeY);
	}
	while ((holeX/2) != Math.round(holeX/2)) {
		holeX = getRandomInteger(1050);
		console.log("rerolling hole x");
		console.log("new hole x: " + holeX);
	}
}

function load_img() {
	fabric.Image.fromURL("golf-h.png", function(Img) {
		holeObject = Img;
		holeObject.scaleToWidth(50);
		holeObject.scaleToHeight(50);
		holeObject.set({
			top: holeY,
			left: holeX
		});
		canvas.add(holeObject);
	});
	new_image();
}

function new_image() {
	fabric.Image.fromURL("ball.png", function(Img) {
		ballObject = Img;
		ballObject.scaleToWidth(50);
		ballObject.scaleToHeight(50);
		ballObject.set({
			top:ballY,
			left:ballX
		});
		canvas.add(ballObject);
	});
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (ballX == holeX && ballY == holeY) {
		holesMade = holesMade + 1;
		document.getElementById("goalsHit").innerHTML = holesMade;
		canvas.remove(ballObject);
		canvas.remove(holeObject);
		document.getElementById("myCanvas").style.borderColor = hex1;
		if (hex1 == "red") {
			hex1 = "orangered";
		} else if (hex1 == "orangered") {
			hex1 = "orange";
		} else if (hex1 == "orange") {
			hex1 = "lightsalmon";
		} else if (hex1 == "lightsalmon") {
			hex1 = "yellow";
		} else if (hex1 == "yellow") {
			hex1 = "yellowgreen";
		} else if (hex1 == "yellowgreen") {
			hex1 = "greenyellow";
		} else if (hex1 == "greenyellow") {
			hex1 = "green";
		} else if (hex1 == "green") {
			hex1 = "lightseagreen";
		} else if (hex1 == "lightseagreen") {
			hex1 = "lightblue";
		} else if (hex1 == "lightblue") {
			hex1 = "blue";
		} else if (hex1 == "blue") {
			hex1 = "navy";
		} else if (hex1 == "navy") {
			hex1 = "blueviolet";
		} else if (hex1 == "blueviolet") {
			hex1 = "purple";
		} else if (hex1 == "purple") {
			hex1 = "red";
		}
		console.log("Color:" + hex1);
		holeX = getRandomInteger(1050);
		holeY = getRandomInteger(450);
		console.log("hole " + holeX + ", " + holeY);
		ballX = getRandomInteger(1050);
		ballY = getRandomInteger(450);
		console.log("ball " + ballX + ", " + ballY);
		checkCoordinates();
		load_img();
	}
	else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}
}
function up() {
	if (ballY > 0) {
		ballY = ballY - 2;
		canvas.remove(ballObject);
		new_image();
	}
}

function down() {
	if (ballY < 450) {
		ballY = ballY + 2;
		canvas.remove(ballObject);
		new_image();
	}
}

function left() {
	if (ballX > 0) {
		ballX = ballX - 2;
		canvas.remove(ballObject);
		new_image();
	}
}

function right() {
	if (ballX < 1050) {
		ballX = ballX + 2;
		canvas.remove(ballObject);
		new_image();
	}
}