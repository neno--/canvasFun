<!--Retrieve the canvas element and assign it to our canvas variable-->
var canvas = document.getElementById("canvas");

<!--Get the context of the canvas which allows primitives, text, and textures to be drawn-->
var context = canvas.getContext("2d");

<!--CSS element used to apply a color, gradient, or pattern-->
context.fillStyle="#FF00FF";

<!--Determines the starting position, width, and height of a rectangle-->
context.fillRect(50,250,150,75);

<!--Retrieve the canvas element and assign it to our canvas variable-->
var canvas = document.getElementById("canvas");

<!--Get the context of the canvas which allows primitives, text, and textures to be drawn-->
var context = canvas.getContext("2d");

<!-- -->
context.moveTo(0,0);

<!-- -->
context.lineTo(800,600);

<!-- -->
context.stroke();

<!-- -->
context.beginPath();

<!-- -->
context.arc(350,150,40,0,2 * Math.PI);

<!-- -->
context.stroke();

<!-- -->
context.font="30px Arial";

<!-- -->
context.fillText("Hello World", 15,15);

<!-- -->
var gradient = context.createLinearGradient(0,0,200,0);

<!-- -->
gradient.addColorStop(0,"blue");

<!-- -->
gradient.addColorStop(1,"white");

<!-- -->
context.fillStyle = gradient;

<!-- -->
context.fillRect(10,10,150,80);

<!-- -->
var img = new Image();

img.src = 'images/001.jpg';

<!-- -->
img.onload = function()
{
	<!-- -->
	context.drawImage(img, 0, 0, img.width, img.height);
}