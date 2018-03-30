const options = [
  {
    code: 'r',
    img: 'url("../assets/rake.jpg")',
    bg: 'url("../assets/siegeOfPale.jpg")',
    id: 'p0',
  },
  {
    code: 'b',
    img: 'url("../assets/brood.jpg")',
    bg: 'url("../assets/broodWall.jpg")',
    id: 'p1',
  },
  {
    code: 't',
    img: 'url("../assets/trull.jpg")',
    bg: 'url("../assets/trullWall.jpg")',
    id: 'p2'
  },
];
const board = {
  player: {
    name: '',
    gameOptions: [],
    roundCount: 0,
  },
  ai: {
    name: 'Bot',
    gameOptions: [],
    roundCount: 0,
  },
  inPlay: [],
  pulledBGI: '',
  gameCheck: function () {
    if (this.inPlay[0].code === this.inPlay[1].code && this.player.roundCount === 1 && this.ai.roundCount === 1) {

      twoFadeOut($els.dropArea, $els.botTarget);
      setTimeout(() => {remTwoFade($els.dropArea, $els.botTarget);}, 3510);

      $els.status.html('The game has ended in a tie!');

      nuGame.endAllDrag();
    }
    else if (this.player.roundCount === 2) {

      playerFadeOut($els.botTarget);
      setTimeout(() => {removeFadeOut($els.botTarget); }, 3510);

      $els.status.html(`${board.player.name} has won this game!`);

      nuGame.endAllDrag();
    }
    else if (this.ai.roundCount === 2) {

      playerFadeOut($els.dropArea);
      setTimeout(() => {removeFadeOut($els.dropArea); }, 3510);

      $els.status.html(`The Bot has won this game!`);

      nuGame.endAllDrag();
    }
  },
  checkRound: function () {

    if (this.inPlay[0].code === this.inPlay[1].code) {
            $(board.inPlay[0].id).attr('draggable', 'true');

      for (let i = 0; i < options.length; i++) {

        if ($els.dropArea.css('background-image') === options[i].img) {
          board.player.gameOptions.splice(options.indexOf(options[i]), 0, board.inPlay[0]);
        }
        if ($els.botTarget.css('background-image') === options[i].img) {
          board.ai.gameOptions.splice(options.indexOf(options[i]), 0, board.inPlay[0]);
        }
      }
      twoFadeOut($els.dropArea, $els.botTarget);
      setTimeout(() => {remTwoFade($els.dropArea, $els.botTarget);}, 3510);

      $els.status.html(`This round is a tie. Redo!`);

      console.log('tie');
      board.gameCheck();
    }
/* Round winning logic */
    else {
/* concatenates the codes of the two option objects into one string
*/
      let code = board.inPlay[0].code + board.inPlay[1].code;
/* Checks the six different ways to win the round using the fall through method. if the winner is in the 0 index it is the player's win. */
      switch (code) {
        case 'bt':
        case 'rb':
        case 'tr':
          $els.playGround.css('background-image', board.inPlay[0].bg);
          board.player.roundCount += 1;
          $els.playerCounter.html(board.player.roundCount);

          playerFadeOut($els.botTarget);
          setTimeout(() => {removeFadeOut($els.botTarget); }, 3510);

          $els.status.html(`${board.player.name} won this round!`)

          board.gameCheck();
          console.log('Player wins')
/* if the winner is in the 1 index the winner is the AI. */
        break;
        case 'tb':
        case 'br':
        case 'rt':
          $els.playGround.css('background-image', board.inPlay[1].bg);
          board.ai.roundCount += 1;
          $els.botCounter.html(board.ai.roundCount);

          playerFadeOut($els.dropArea);
          setTimeout(() => {removeFadeOut($els.dropArea); },3510);

          $els.status.html(`The Bot has won this round!`)

          board.gameCheck();
          console.log('Bot Wins');
        break;
      }
    }
  }
};
