window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var moon = new Particle(width / 2, height / 2 - 400, 0, 0)
    //moon.velocity.setLength(1);

    var sun = new Particle(width / 2, height / 2, 0, 0)
    var spring = null
    var springAcc = null
    var angle = null
    var distance = null
    var atenuation = 1

    update()

    function update() {
        context.clearRect(0, 0, width, height)

        angle = Math.atan2(moon.position.y - sun.position.y, moon.position.x - sun.position.x) - 3 * Math.PI / 2
        console.log(angle)
        spring = (new Vector(0, 0)).setAngle(angle).setLength(0.001 * atenuation)

        springAcc = spring.copyOf()
        distance = moon.distance(sun)
        springAcc.setLength(springAcc.length * distance)

        moon.accelerate(springAcc);
        moon.update();

        atenuation *= 1.01

        context.beginPath();
        context.strokeStyle = '#000000';
        context.arc(moon.position.x, moon.position.y, 5, 0, Math.PI * 2, false);
        context.moveTo(moon.position.x, moon.position.y);
        context.lineTo(moon.position.x + 10 * moon.velocity.x, moon.position.y + 10 * moon.velocity.y);
        context.stroke();

        context.beginPath();
        context.strokeStyle = '#ff0000';
        context.moveTo(moon.position.x, moon.position.y);
        context.lineTo(moon.position.x + 1000 * springAcc.x, moon.position.y + 1000 * springAcc.y);
        context.moveTo(sun.position.x, sun.position.y);
        context.arc(sun.position.x, sun.position.y, 5, 0, Math.PI * 2, false);
        context.stroke();


        requestAnimationFrame(update);
    }
};
