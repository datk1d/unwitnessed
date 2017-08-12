console.log('game.js has been chained');

class Game {
  constructor() {
  }
  getOptions() {
    board.player.gameOptions = options;
    board.ai.gameOptions = options;
  }
  aIPlays() {
    let rand = rngZeroUp(board.ai.gameOptions.length);
    let play = board.ai.gameOptions[rand];
    board.inPlay.push(play);
    board.ai.gameOptions.splice(rand, 1);
    board.check();
  }
}
