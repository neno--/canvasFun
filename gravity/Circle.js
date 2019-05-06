function Circle(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color

    this.dy = 3
    this.g = 0.3
    this.dampening = 1 - (0.8 - 0.2) / (40 - 10) * this.radius

    this.still = false;


    this.draw = function () {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        c.fillStyle = this.color
        c.fill()
        c.stroke()
    }

    this.update = function () {
        if (!this.still) {
            this.y += this.dy
            this.dy += this.g

            if (this.y >= (canvas.height - this.radius)) {
                this.y = canvas.height - this.radius
                this.dy = -this.dy * this.dampening


                if (this.dy > -2) {
                    this.still = true;
                }
            }
        }

        this.draw()
    }
}
