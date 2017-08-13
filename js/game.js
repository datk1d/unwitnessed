console.log('game.js has been chained');

class Game {
  constructor() {
  }
  getOptions() {
    board.player.gameOptions = playerOptions;
    board.ai.gameOptions = aiOptions;
  }
  playerDrop() {
    for (let i = 0; i < board.player.gameOptions.length; i++) {
      if ($els.dropArea.css('background-image') === board.player.gameOptions[i].img) {
        board.inPlay.push(board.player.gameOptions[i]);
        removeIndex(board.player.gameOptions, i, 1)
      }
    }
    this.aiPlays();
  }
  aiPlays() {
    let rand = rngZeroUp(board.ai.gameOptions.length);
    let play = board.ai.gameOptions[rand];
    board.inPlay.push(play);
    removeIndex(board.ai.gameOptions, rand, 1);
    $els.botTarget.css('background-image', board.inPlay[1].img);
    board.checkRound();

    setTimeout(function() {
      nuGame.cleanArea();
    }, 3500);

  }
  cleanArea() {
    board.inPlay.pop();
    board.inPlay.pop();

    $els.botTarget.css('background-image', 'none');
    $els.dropArea.css('background-image', 'none');
  }
}

const nuGame = new Game();
nuGame.getOptions();
