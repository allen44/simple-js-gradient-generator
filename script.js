var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("#gradient");
var randomColorsButton = document.querySelector("#random");

function setGradient() {
	body.style.background = ( "linear-gradient(to right, " 
							+ color1.value 
							+ ", " 
							+ color2.value 
							+ ")");
	css.textContent = body.style.background + ";";
}

function randomizeColors() {
	color1.value = "#"+((1<<24)*Math.random()|0).toString(16);
	color2.value = "#"+((1<<24)*Math.random()|0).toString(16);
	setGradient();
}


color1.value = "#ff0000"; //Match background upon loading page
color2.value = "#ffff00";

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Display initial css on page load
css.textContent = "background: linear-gradient(to right, red , yellow);"

// on button click, set the two colors to random.
randomColorsButton.addEventListener('click', randomizeColors);

