window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var moon = new Particle(width / 2, height / 2 - 400, 0, 0)
    moon.velocity.setLength(1);

    var sun = new Particle(width / 2, height / 2, 0, 0)
    var attraction = new Vector(0, 0)
    var angle = null
    var distance = null

    update()

    function update() {
        context.clearRect(0, 0, width, height)

        angle = Math.atan2(moon.position.y - sun.position.y, moon.position.x - sun.position.x) + Math.PI

        attraction.setAngle(angle)
        distance = moon.distance(sun)

        attraction.setLength(1000/(distance*distance))

        moon.accelerate(attraction);
        moon.update();

        context.beginPath();
        context.strokeStyle = '#000000';
        context.arc(moon.position.x, moon.position.y, 5, 0, Math.PI * 2, false);
        context.moveTo(moon.position.x, moon.position.y);
        context.lineTo(moon.position.x + 10*moon.velocity.x, moon.position.y + 10*moon.velocity.y);
        context.stroke();

        context.beginPath();
        context.strokeStyle = '#ff0000';
        context.moveTo(moon.position.x, moon.position.y);
        context.lineTo(moon.position.x + 1000*attraction.x, moon.position.y + 1000*attraction.y);
        context.moveTo(sun.position.x, sun.position.y);
        context.arc(sun.position.x, sun.position.y, 5, 0, Math.PI * 2, false);
        context.stroke();


        requestAnimationFrame(update);
    }
};
