window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var angle = 3 / 2 * Math.PI
    var thrust = new Vector(0, 0)
    var directionIndicator = new Vector(10, 10)
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
                thrust.y = -0.1
                break;
            case 37: // left
                thrust.x = -0.1
                break;
            case 39: // right
                thrust.x = 0.1
                break;
            case 40: // down
                thrust.y = +0.1
                break;

        }
    });

    document.body.addEventListener("keyup", function (event) {
        // console.log(event.keyCode);
        switch (event.keyCode) {
            case 38: // up
                thrust.y = 0
                break;
            case 37: // left
                thrust.x = 0
                break;
            case 39: // right
                thrust.x = 0
                break;
            case 40: // down
                thrust.y = 0
                break;
        }
    });


    update()

    function update() {
        context.clearRect(0, 0, width, height)

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
        context.lineTo(p.position.x + 500 * thrust.x, p.position.y + 500 * thrust.y);
        context.stroke();

        // context.fill();

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
