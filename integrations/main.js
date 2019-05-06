window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;


    var initialVelocity1 = Vector.createByCartesianCoords(3, 0);
    var p1 = Particle.create(width / 2, height / 2).setGravitySize(0.3).setFrictionSize(0.05).setVelocity(initialVelocity1);

    var initialVelocity2 = Vector.createByCartesianCoords(2.4, 0);
    var p2 = Particle.create(width / 2 + 60, height / 2).setGravitySize(0.32).setFrictionSize(0.07).setVelocity(initialVelocity2);

    update();

    var distance = 50;

    function update() {
        context.clearRect(0, 0, width, height);


        p1.update();
        p2.update();

        var delta = p1.distance(p2) - distance;
        if ((delta < 0) || (delta > 0)) {
            p1.translateTo(p2.getPosition(), delta / 2);
            p2.translateTo(p1.getPosition(), delta / 2);
        }


        if (p1.getPosition().getY() > height) {
            p1.getPosition().setY(height);
            p1.setVelocity(p1.getVelocity().createReversedY());
        }

        if (p2.getPosition().getY() > height) {
            p2.getPosition().setY(height);
            p2.setVelocity(p2.getVelocity().createReversedY());
        }


        context.beginPath();
        context.strokeStyle = '#000000';
        context.arc(p1.getPosition().getX(), p1.getPosition().getY(), 5, 0, Math.PI * 2, false);
        context.stroke();


        context.beginPath();
        context.strokeStyle = 'red';
        context.arc(p2.getPosition().getX(), p2.getPosition().getY(), 10, 0, Math.PI * 2, false);
        context.stroke();


        context.beginPath();
        context.strokeStyle = '#000000';
        context.arc(width / 2, height / 2, 5, 0, Math.PI * 2, false);
        context.stroke();

        requestAnimationFrame(update);
    }
};
