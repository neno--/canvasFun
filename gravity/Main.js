var circle1 = new Circle(100, 100, 30, 'lightblue');


resize();

var circles = []

for (var i = 0; i < 100; i++) {
    var radius = randomNumberInInterval(10, 40)
    var x = randomNumberInInterval(radius, canvas.width - radius)
    var y = randomNumberInInterval(radius, canvas.height - radius)
    var color = colors[randomNumberInInterval(0, colors.length)]
    circles.push(new Circle(x, y, radius, color))
}

var loop = function () {
    c.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach(function(circle) {
        circle.update()
    })


};

setInterval(loop, 1000 / 60);

