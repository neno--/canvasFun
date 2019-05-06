var Particle = function (x, y, speed, direction) {

    this.position = new Vector(x, y);

    this.velocity = new Vector(0, 0);
    this.velocity.setLength(speed);
    this.velocity.setAngle(direction);

    this.update = function () {
        this.position.addTo(this.velocity)
    }

    this.accelerate = function (acceleration) {
        this.velocity.addTo(acceleration)
    }

    this.distance = function (particle) {
        return Math.sqrt(Math.pow((this.position.x - particle.position.x), 2) + Math.pow((this.position.y - particle.position.y), 2));
    }
}
