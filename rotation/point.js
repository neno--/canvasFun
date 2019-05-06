var Point = function (x, y) {
    this.x = x;
    this.y = y;

    this.getX = function () {
        return this.x;
    }

    this.getY = function () {
        return this.y;
    }

    this.applyReality = function (A, B) {
        var x_x = this.x * A.getX()
        var x_y = this.x * A.getY()
        var y_x = this.y * B.getX()
        var y_y = this.y * B.getY()

        this.x = x_x + y_x;
        this.y = x_y + y_y;
    }

    this.addToX = function (deltaX) {
        this.x += deltaX
    }

    this.addToY = function (deltaY) {
        this.y += deltaY
    }
}
