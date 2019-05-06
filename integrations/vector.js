var Vector = {
    createByCartesianCoords(x, y) {
        var vector = Object.create(this);

        vector.setX(x);
        vector.setY(y);

        return vector;
    },
    createByPolarCoords(angle, size) {
        var vector = Object.create(this);

        vector.setX(size * Math.cos(angle));
        vector.setY(size * Math.sin(angle));

        return vector;
    },
    createNull() {
        return this.createByCartesianCoords(0, 0);
    },
    createFrom() {
        return this.createByCartesianCoords(this.getX(), this.getY());
    },
    createReversed() {
        return this.createByCartesianCoords(-this.getX(), -this.getY());
    },
    createReversedX() {
        return this.createByCartesianCoords(-this.getX(), this.getY());
    },
    createReversedY() {
        return this.createByCartesianCoords(this.getX(), -this.getY());
    },
    createNormalized() {
        var vector = this.createByCartesianCoords(this.getX(), this.getY());
        return vector.multiply(1 / vector.getSize());
    },
    getX() {
        return this._x;
    },
    getY() {
        return this._y;
    },
    getAngle() {
        return Math.atan2(this.getY(), this.getX());
    },
    getSize() {
        return Math.sqrt(this.getX() * this.getX() + this.getY() * this.getY());
    },
    setX(x) {
        this._x = x;
        return this;
    },
    setY(y) {
        this._y = y;
        return this;
    },
    setAngle(angle) {
        var size = this.getSize();

        this._x = size * Math.cos(angle);
        this._y = size * Math.sin(angle);

        return this;
    },
    setSize(size) {
        var angle = this.getAngle();

        this._x = size * Math.cos(angle);
        this._y = size * Math.sin(angle);

        return this;
    },
    addTo(vector) {
        this._x += vector.getX();
        this._y += vector.getY();

        return this;
    },
    add(vector) {
        return this.createFrom().addTo(vector);
    },
    subtractTo(vector) {
        this._x -= vector.getX();
        this._y -= vector.getY();

        return this;
    },
    subtract(vector) {
        return this.createFrom().subtractTo(vector)
    },
    multiplyTo(factor) {
        return this.setSize(factor * this.getSize());
    },
    multiply(factor) {
        return this.createFrom().multiplyTo(factor);
    },
    angleTo(vector) {
        return vector.getAngle() - this.getAngle();
    }
};

