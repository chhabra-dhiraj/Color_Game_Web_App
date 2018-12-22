var colorBoxes = document.querySelectorAll(".color_boxes");
var colorDisplay = document.getElementById("color_display");
var mode = document.querySelectorAll(".mode");
var newColors = document.getElementById("new_colors");
var displayEvents = document.querySelectorAll(".display_events");

colors = [];
mode[0].style.backgroundColor =  "rgb(0, 0, 255)";
var numOfSquares = 3;
var pickedColor;
var clickedColor;

var e = 0;
var h = 0;

generateColors(numOfSquares);
setColorDisplay();

newColors.addEventListener("click", function() {
	for(var i = 0; i < displayEvents.length; i++) {
		displayEvents[i].innerHTML = "";
	}
	newColors.value = "New Colors";
	generateColors(numOfSquares);
	setColorDisplay();
});

for(var i = 0; i < colors.length; i++) {
	colorBoxes[i].addEventListener("click", function() {
		clickedColor = this.style.backgroundColor;
		colorCheckFunction();
	});
}

for(var i = 0; i < mode.length; i++) {
	mode[i].addEventListener("click", function() {
		if(this.value === "Easy" && e === 0) {
			h = 0;
			numOfSquares = 3;
			modeColor();
			generateColors(numOfSquares);
			setColorDisplay();
			e = 1;
		} else if(this.value === "Hard" && h === 0) {
			e = 0;
			numOfSquares = 6;
			modeColor();
			generateColors(numOfSquares);
			setColorDisplay();
			h = 1;
		}	
	});
}

function colorCheckFunction() {
	if(clickedColor === pickedColor) {
		for(var i = 0; i < displayEvents.length; i++) {
			displayEvents[i].innerHTML = "Hurray! You have won.";
		}
		document.body.style.backgroundColor = clickedColor;
		newColors.value = "Play Again?";
	} else {
		for(var i = 0; i < displayEvents.length; i++) {
			displayEvents[i].innerHTML = "Try Again!";
		}
	}
}

function modeColor() {
	if(numOfSquares === 3) {
		mode[0].style.backgroundColor = "rgb(0, 0, 255)";
		mode[1].style.backgroundColor = "#232434";
	} else {
		mode[1].style.backgroundColor = "rgb(0, 0, 255)";
		mode[0].style.backgroundColor = "#232434";
	}
}


function generateColors(numOfSquares) {
	var i;
	colors = [];
	for(i = 0; i < numOfSquares; i++) {

		colors.push(randomColor());
		colorBoxes[i].style.backgroundColor = colors[i];
	}

	if(numOfSquares < colorBoxes.length) {
		while(i < colorBoxes.length) {
			colorBoxes[i].style.backgroundColor = "#232434";
			i++;
		}
	}
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function setColorDisplay() {
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	colorDisplay.style.color = "white";
}

function pickColor() {
	var random = Math.floor(Math.random() * (numOfSquares + 1));
	return colors[random]; 
}


