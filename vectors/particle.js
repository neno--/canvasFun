var Particle = function (x, y, speed, direction) {

    this.position = new Vector(x, y);

    this.velocity = new Vector(0, 0);
    this.velocity.setLength(speed);
    this.velocity.setAngle(direction);

    this.update = function () {
        this.position.addTo(this.velocity)
    }

    this.accelerate = function(acceleration) {
        this.velocity.addTo(acceleration)
    }
}
