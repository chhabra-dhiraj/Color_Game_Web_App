var colorBoxes = document.querySelectorAll(".color_boxes");
var colorDisplay = document.getElementById("color_display");
var mode = document.querySelectorAll(".mode");
var newColors = document.getElementById("new_colors");
var displayEvents = document.querySelectorAll(".display_events");

colors = [];

var numOfSquares = 3;
var pickedColor;
var clickedColor;

var e = 0;
var h = 0;

generateColors(numOfSquares);
setColorDisplay();

newColors.addEventListener("click", function() {
	for(var i = 0; i < displayEvents.length; i++) {
		displayEvents[i].innerHTML = "Try Again!";
		displayEvents[i].style.visibility = "hidden";
	}
	newColors.value = "New Colors";
	generateColors(numOfSquares);
	setColorDisplay();
});

for(var i = 0; i < colorBoxes.length; i++) {
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
			displayEvents[i].innerHTML = "Wohoo! You have picked the right color :)";
			displayEvents[i].style.visibility = "visible";
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
		
	} else {
		
	}
}

function generateColors(numOfSquares) {
	var i;
	colors = [];
	for(i = 0; i < numOfSquares; i++) {

		colors.push(randomColor());
		colorBoxes[i].style.backgroundColor = colors[i];
		colorBoxes[i].style.display = "block";
		colorBoxes[i].style.border = "inherit";
	}

	if(numOfSquares < colorBoxes.length) {
		while(i < colorBoxes.length) {
			colorBoxes[i].style.display = "none";
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
	// colorDisplay.style.text-transform = "capitalize";
}


function pickColor() {
	var random = Math.floor(Math.random() * (numOfSquares));
	return colors[random]; 
}


