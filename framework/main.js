window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var moon = Particle.create(width / 2, height / 2 - 400)
    var sun = Particle.create(width / 2, height / 2, 0, 0)

    moon.setGravitySize(.1);
    moon.setVelocity(Vector.createByPolarCoords(2, 2));

    moon.draw = function() {
        context.beginPath();
        context.strokeStyle = '#000000';
        context.arc(this.getPosition().getX(), this.getPosition().getY(), 5, 0, Math.PI * 2, false);
        context.moveTo(this.getPosition().getX(), this.getPosition().getY());
        context.lineTo(this.getPosition().getX() + 10 * this.getVelocity().getX(), this.getPosition().getY() + 10 * this.getVelocity().getY());
        context.stroke();
    }

    update()

    function update() {
        context.clearRect(0, 0, width, height)

        moon.update();
        sun.update();




        context.beginPath();
        context.strokeStyle = '#ff0000';
        context.moveTo(moon.getPosition().getX(), moon.getPosition().getY());
        //context.lineTo(moon.getPosition().getX() + 1000 * springAcc.getX(), moon.getPosition().getY() + 1000 * springAcc.getY());
        context.moveTo(sun.getPosition().getX(), sun.getPosition().getY());
        context.arc(sun.getPosition().getX(), sun.getPosition().getY(), 5, 0, Math.PI * 2, false);
        context.stroke();


        requestAnimationFrame(update);
    }
};
