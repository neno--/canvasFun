function Circle(x, y, radius, color, dx, dy) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color

    this.dx = dx
    this.dy = dy


    this.draw = function () {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        c.fillStyle = this.color
        c.fill()
        c.stroke()
    }

    this.update = function () {

        this.x += this.dx
        this.y += this.dy

        if ((this.x <= this.radius) || (this.x >= (canvas.width - this.radius))) {
            this.dx = -this.dx

        }

        if ((this.y <= this.radius) || (this.y >= (canvas.height - this.radius))) {
            this.dy = -this.dy
        }


        this.draw()
    }

    this.isCollided = function (otherCircle) {
        var xDist = this.x - otherCircle.x
        var yDist = this.y - otherCircle.y

        return Math.sqrt(xDist * xDist + yDist * yDist) <= (this.radius + otherCircle.radius)
    }

    this.collide = function(otherCircle) {

    }
}
