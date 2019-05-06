var canvas = document.getElementById("canvas")
context = canvas.getContext("2d");

context.fillStyle="#FF00FF";
context.fillRect(15,15,150,75);


context.beginPath();
context.arc(350,150,40,0,2 * Math.PI);
context.stroke();
