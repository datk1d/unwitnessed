console.log('game.js has been chained');

class Game {
  constructor() {
  }
  getOptions() {
    board.player.gameOptions = options.map((array) => {return array});
    board.ai.gameOptions = options.map((array) => {return array});

/* solution for passing variables from page to page found on stack overflow */
    let name = localStorage.getItem('name');
    board.player.name = name
//
    $els.nameDisplay.html(board.player.name);
  }
  playerDrop() {
    for (let i = 0; i < board.player.gameOptions.length; i++) {
      if ($els.dropArea.css('background-image') === board.player.gameOptions[i].img) {
        board.inPlay.push(board.player.gameOptions[i]);
        removeIndex(board.player.gameOptions, i, 1)
      }
    }
    setTimeout(() => {this.aiPlays(); }, 1000);
  }
  aiPlays() {
    let rand = rngZeroUp(board.ai.gameOptions.length);
    let play = board.ai.gameOptions[rand];
    board.inPlay.push(play);
    debugger;
    $els.botTarget.css('background-image', board.inPlay[1].img);

    setTimeout(() => {removeIndex(board.ai.gameOptions, rand, 1); }, 1000);

    board.checkRound();

    setTimeout(() => {this.cleanArea(); }, 3500);
  }
  cleanArea() {
    board.inPlay.pop();
    board.inPlay.pop();

    $els.botTarget.css('background-image', 'none');
    $els.dropArea.css('background-image', 'none');
  }
  endAllDrag() {
    $els.plZeroCard.attr('draggable', 'false');
    $els.plOneCard.attr('draggable', 'false');
    $els.plTwoCard.attr('draggable', 'false');
  }
}
const nuGame = new Game();
nuGame.getOptions();
