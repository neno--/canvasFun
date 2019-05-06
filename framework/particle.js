var Particle = {
    create(x, y) {
        var particle = Object.create(this);

        this._position = Vector.createByCartesianCoords(x, y);
        this._velocity = Vector.createNull();
        this._acceleration = Vector.createNull();
        this._frictionSize = 0;
        this._gravitySize = 0;

        return particle;
    },
    getPosition() {
        return this._position;
    },
    getVelocity() {
        return this._velocity;
    },
    getAcceleration() {
        return this._acceleration;
    },
    getFrictionSize() {
        return this._frictionSize;
    },
    getFriction() {
        return this._velocity.createReversed().setSize(this.getFrictionSize());
    },
    getGravitySize() {
        return this._gravitySize;
    },
    getGravity() {
        return Vector.createByCartesianCoords(0, this.getGravitySize());
    },
    setPosition(vector) {
        this._position = vector;
        return this;
    },
    setVelocity(vector) {
        this._velocity = vector;
        return this;
    },
    setAcceleration(vector) {
        this._acceleration = vector;
        return this;
    },
    setFrictionSize(scalar) {
        this._frictionSize = scalar;
        return this;
    },
    setGravitySize(scalar) {
        this._gravitySize = scalar;
        return this;
    },
    update() {
        this.getVelocity().addTo(this.getAcceleration());

        if (this.getGravitySize()) {
            this.getVelocity().addTo(this.getGravity());
        }

        if (this.getFrictionSize()) {
            if (this.getFriction().getSize() > this.getVelocity().getSize()) {
                this.setVelocity(Vector.createNull());
            } else {
                this.getVelocity().addTo(this.getFriction());
            }

        }

        this.getPosition().addTo(this.getVelocity());
    }
}

