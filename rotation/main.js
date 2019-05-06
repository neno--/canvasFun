window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;


    var X = new Point(1, 0)
    var Y = new Point(0, 1)

    var map = {}; // You could also use an array
    window.onkeydown = window.onkeyup = function (e) {
        map[e.keyCode] = e.type == 'keydown';
        /* insert conditional here */

        if (map[38]) {
            X.addToY(0.1)
        }
        if (map[37]) {
            X.addToX(-0.1)
        }
        if (map[39]) {
            X.addToX(0.1)
        }
        if (map[40]) {
            X.addToY(-0.1)
        }
        if (map[87]) {
            Y.addToY(0.1)
        }
        if (map[65]) {
            Y.addToX(-0.1)
        }
        if (map[68]) {
            Y.addToX(0.1)
        }
        if (map[83]) {
            Y.addToY(-0.1)
        }
    }


    /* document.body.addEventListener("keydown", function (event) {
         console.log(event.keyCode);
         switch (event.keyCode) {
             case 38: // up
                 X.addToY(0.1)
                 break;
             case 37: // left
                 X.addToX(-0.1)
                 break;
             case 39: // right
                 X.addToX(0.1)
                 break;
             case 40: // down
                 X.addToY(-0.1)
                 break;

             case 87: // up
                 Y.addToY(0.1)
                 break;
             case 65: // left
                 Y.addToX(-0.1)
                 break;
             case 68: // right
                 Y.addToX(0.1)
                 break;
             case 83: // down
                 Y.addToY(-0.1)
                 break;

         }
     });*/

    update()

    function update() {

        var shape = initSquare();

        context.clearRect(0, 0, width, height)


        context.beginPath();
        context.strokeStyle = '#000000';
        //context.moveTo(width / 2, height / 2);
        for (var i = 0; i < shape.length; i++) {
            shape[i].applyReality(X, Y)

            var j = (i + 1) % shape.length
            context.lineTo(width / 2 + shape[i].getX(), height / 2 + shape[i].getY(), width / 2 + shape[j].getX(), height / 2 + shape[j].getY());
        }
        context.stroke();


        requestAnimationFrame(update);
    }

    function initSquare() {
        var p1 = new Point(10, 10)
        var p2 = new Point(-10, 10)
        var p3 = new Point(-10, -10)
        var p4 = new Point(10, -10)
        var p5 = new Point(10, 10)

        var square = [];
        square.push(p1)
        square.push(p2)
        square.push(p3)
        square.push(p4)
        square.push(p5)

        return square
    }
};
