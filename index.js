class Rover {
    constructor(orientation, x, y) {
        this.orientation = orientation
        this.x = x
        this.y = y
    }

    move(instructions) {
        if (instructions[0] === 'left') {
            if (this.orientation === 'S') {
              this.orientation = 'E'
            } else if (this.orientation === 'E') {
              this.orientation = 'N'
            } else {
              this.orientation = 'W'
            }
        }
    }
}

module.exports = Rover
