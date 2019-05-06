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
        return this.createByCartesianCoords(this._x, this._y);
    },
    createReversed() {
        return this.createByCartesianCoords(-this._x, -this._y);
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
        return Math.sqrt(this._x * this._x + this._y * this._y);
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
    scaleTo(factor) {
        return this.setSize(factor * this.getSize());
    },
    scale(factor) {
        return this.createFrom().scale(factor);
    },
    angleTo(vector) {
      return vector.getAngle() - this.getAngle();
    }
}

