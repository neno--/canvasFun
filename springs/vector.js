var Vector = function (x, y) {
    this.x = x;
    this.y = y;
    this.length = Math.sqrt(this.x * this.x + this.y * this.y);
    this.angle = Math.atan2(this.x, this.y);

    this.setAngle = function (angle) {
        this.x = this.length * Math.cos(angle);
        this.y = this.length * Math.sin(angle);
        this.angle = angle;

        return this
    }

    this.calculateLength = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    this.setLength = function (length) {
        this.length = length;
        this.setAngle(this.angle);

        return this
    }

    this.addTo = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.angle = Math.atan2(this.y, this.x)
        this.length = this.calculateLength();
    }

    this.setTo = function (vector) {
        this.x = vector.x
        this.y = vector.y
        this.angle = vector.angle
        this.length = this.calculateLength();
    }

    this.copyOf = function () {
        return new Vector(this.x, this.y)

    }


    this.subtract = function (vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);

    }
}
