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

test("should change orientation from north to west with a single left rotation", () => {
  // Arrange
  const rover = new Rover('N', 0, 0)
  const instructions = ['left']

  // Act
  rover.move(instructions)

  // Assert
  expect(rover.orientation).toEqual('W')
  expect(rover.x).toEqual(0)
  expect(rover.y).toEqual(0)
});

test("should change orientation from south to east with a single left rotation", () => {
  // Arrange
  const rover = new Rover('S', 0, 0)
  const instructions = ['left']

  // Act
  rover.move(instructions)

  // Assert
  expect(rover.orientation).toEqual('E')
  expect(rover.x).toEqual(0)
  expect(rover.y).toEqual(0)
});

test("should change orientation from east to north with a single left rotation", () => {
  // Arrange
  const rover = new Rover('E', 0, 0)
  const instructions = ['left']

  // Act
  rover.move(instructions)

  // Assert
  expect(rover.orientation).toEqual('N')
  expect(rover.x).toEqual(0)
  expect(rover.y).toEqual(0)
});
