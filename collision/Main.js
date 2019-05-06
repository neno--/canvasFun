var circle1 = new Circle(100, 100, 30, 'lightblue');


resize();

var circles = []

for (var i = 0; i < 10; i++) {
    var radius = 40 //randomNumberInInterval(10, 40)
    var x = randomNumberInInterval(radius, canvas.width - radius)
    var y = randomNumberInInterval(radius, canvas.height - radius)
    var color = colors[randomNumberInInterval(0, colors.length)]
    var dx = 10 * (Math.random() - 0.5)
    var dy = 5 * (Math.random() - 0.5)
    circles.push(new Circle(x, y, radius, color, dx, dy))

    for (var j = 0; j < circles.length; j++) {
        if (circles[i] != circles[j]) {
            if (circles[i].isCollided(circles[j])) {
                i--;
                break;
            }
        }
    }
}

var loop = function () {
    c.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach(function (circle) {
        circle.update()
    })
};



setInterval(loop, 1000 / 60);

