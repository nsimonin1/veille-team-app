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

test("should change orientation with a single left rotation", () => {
  const parameters = [{start: 'N', finish: 'W'}, {start: 'S', finish: 'E'}, {start: 'E', finish: 'N'}, {start: 'W', finish: 'S'}]
  parameters.forEach(parameter => {
    // Arrange
    const rover = new Rover(parameter.start, 0, 0)
    const instructions = ['left']

    // Act
    rover.move(instructions)

    // Assert
    expect(rover.orientation).toEqual(parameter.finish)
    expect(rover.x).toEqual(0)
    expect(rover.y).toEqual(0)
  })
});
