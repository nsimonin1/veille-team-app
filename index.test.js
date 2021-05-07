import { Game } from "./index";

test("un lancer de 10 points", () => {
  const game = new Game();
  game.roll(10);
  expect(game.score()).toEqual(10);
});

test("un lancer de 5 points", () => {
  const game = new Game();
  game.roll(5);
  expect(game.score()).toEqual(5);
});

test("Deux lancés de 5 points", () => {
  const game = new Game();
  game.roll(5);
  game.roll(5);
  expect(game.score()).toEqual(10);
});

test("un lancé de 7 points et un lancé de 3", () => {
  const game = new Game();
  game.roll(7);
  game.roll(3);
  expect(game.score()).toEqual(10);
});

test("en debut de partie nous sommes au tour un", () => {
  const game = new Game();
  expect(game.getFrame()).toEqual(1);
  expect(game.score()).toEqual(0);
});

test("après deux lancés nous passons au tour numéro 2", () => {
  const game = new Game();
  game.roll(7);
  game.roll(3);
  expect(game.getFrame()).toEqual(2);
});

test("après un strike je passe au tour suivant", () => {
  const game = new Game();
  game.roll(10);
  expect(game.getFrame()).toEqual(2);
});

test("la partie se termine au bout de 10 tours", () => {
  const game = new Game();
  tenFramesGenerator(game);

  expect(game.getFrame()).toEqual(10);
  expect(game.isEndGame()).toBeTruthy();
});

test("lorsque je fais un strike au dernier tour je le droit à deux lancés", () => {
  const game = new Game();

  tenFramesAndStrikeGenerator(game);

  expect(game.getFrame()).toEqual(10);
  expect(game.isEndGame()).toBeFalsy();

  game.roll(5);
  game.roll(2);

  // il n'y a rien qui bloque le fait qu'on puisse faire plus que 2 rolls

  expect(game.isEndGame()).toBeTruthy();
});

/*test("lorsque je fais un spare au dernier tour je le droit à 1 lancés", () => {
  const game = new Game();

  tenFramesAndStrikeGenerator(game);

  expect(game.getFrame()).toEqual(10);
  expect(game.isEndGame()).toBeFalsy();

  game.roll(5);
  game.roll(2);

  expect(game.isEndGame()).toBeTruthy();
});*/

function tenFramesAndStrikeGenerator(game) {
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
}

function tenFramesGenerator(game) {
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(2);
  game.roll(3);
}
