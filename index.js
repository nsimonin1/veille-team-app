export class Game {
  constructor() {
    this.totalScore = 0;
    this.rollNumber = 0;
    this.frame = 1;
    this.endGame = false;
  }

  roll(number) {
    this.totalScore += number;
    this.rollNumber++;
    if ((this.rollNumber === 2 || this.isStrike(number)) && this.frame < 10) {
      this.goToNextFrame();
    }
    if (this.frame === 10) {
      if (!this.isStrike(number)) {
        this.endGame = true;
      }
    }
  }

  isStrike(number) {
    return number === 10;
  }

  isEndGame() {
    return this.endGame;
  }

  score() {
    return this.totalScore;
  }

  getFrame() {
    return this.frame;
  }

  goToNextFrame() {
    this.frame++;
    this.rollNumber = 0;
  }
}
