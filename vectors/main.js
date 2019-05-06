window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var thrusting = false
    var angle = 3 / 2 * Math.PI
    var thrust = new Vector(0, 0)
    var directionIndicator = new Vector(50, 50)
    var left = false;
    var right = false;
    var breaking = false;

    var firstUp = false;
    var firstDown = false;


    var p = new Particle(width / 2, height / 2, 0, 0)

    document.body.addEventListener("keydown", function (event) {
        //console.log(event.keyCode);
        switch (event.keyCode) {
            case 38: // up
                thrusting = true;
                firstDown = true;
                break;
            case 37: // left
                left = true;
                break;
            case 39: // right
                right = true;
                break;
            case 40: // down
                breaking = true;
                firstUp = true;
                break;

        }
    });

    document.body.addEventListener("keyup", function (event) {
        // console.log(event.keyCode);
        switch (event.keyCode) {
            case 38: // up
                thrusting = false;
                break;
            case 37: // left
                left = false;
                break;
            case 39: // right
                right = false;
                break;
            case 40: // down
                breaking = false;
                break;
        }
    });


    update()

    function update() {
        context.clearRect(0, 0, width, height)

        if (left) {
            angle = angle - 0.05;
        }

        if (right) {
            angle = angle + 0.05;
        }


        if (thrusting) {
            switchAngleUp()
            thrust.setLength(0.1)
        } else if (breaking) {
            switchAngleDown()
            thrust.setLength(0.1)

        } else {
            thrust.setLength(0)
        }

        thrust.setAngle(angle)
        directionIndicator.setAngle(angle)

        p.accelerate(thrust)
        p.update()

        //context.beginPath();

        //context.arc(p.position.x, p.position.y, 10, 0, Math.PI * 2, false);


        context.beginPath();
        context.strokeStyle = '#000000';
        context.arc(p.position.x, p.position.y, 5, 0, Math.PI * 2, false);
      context.moveTo(p.position.x, p.position.y);
        context.lineTo(p.position.x + 10 * p.velocity.x, p.position.y + 10 * p.velocity.y);
        context.moveTo(p.position.x, p.position.y);
        context.stroke();

       context.beginPath();
        context.strokeStyle = '#ff0000';
        context.moveTo(p.position.x, p.position.y);
        context.lineTo(p.position.x + directionIndicator.x, p.position.y + directionIndicator.y);
        context.stroke();

        //context.fill();

        requestAnimationFrame(update);
    }

    function switchAngleUp() {
        if (firstUp) {
            angle = (angle + Math.PI) % (2 * Math.PI)
        }

        firstUp = false;
    }

    function switchAngleDown() {
        if (firstDown) {
            angle = (angle + Math.PI) % (2 * Math.PI)
        }

        firstDown = false;
    }
};
