const Rover = require("./index");

test("should create a rover on mars", () => {
  // Arrange
  const rover = new Rover('N', 0, 0)
  const instructions = []

  // Act
  rover.move(instructions)

  // Assert
  expect(rover.orientation).toEqual('N')
  expect(rover.x).toEqual(0)
  expect(rover.y).toEqual(0)
});
