class Rover {
  constructor(orientation, x, y) {
    this.orientation = orientation
    this.x = x
    this.y = y
  }

  move(instructions) {
    if (instructions[0] === 'left') {
      const cardinalDirection = ['N', 'W', 'S', 'E']
      this.orientation = this.rotateLeft(cardinalDirection)
    }
  }

  rotateLeft(cardinalDirection) {
    return cardinalDirection[(cardinalDirection.indexOf(this.orientation) + 1) % cardinalDirection.length] 
  }
}

module.exports = Rover
