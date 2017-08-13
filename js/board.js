console.log('board.js has been chained');

const playerOptions = [
  {
    code: 'r',
    img: 'url("file:///Users/student/wdi/unit-1/homeworks/first_game/assets/rake.jpg")',
    bg: 'url("file:///Users/student/wdi/unit-1/homeworks/first_game/assets/siegeOfPale.jpg")',
  },
  {
    code: 'b',
    img: 'url("file:///Users/student/wdi/unit-1/homeworks/first_game/assets/brood.jpg")',
    bg: 'url("file:///Users/student/wdi/unit-1/homeworks/first_game/assets/broodWall.jpg")',
  },
  {
    code: 't',
    img: 'url("file:///Users/student/wdi/unit-1/homeworks/first_game/assets/trull.jpg")',
    bg: 'url("file:///Users/student/wdi/unit-1/homeworks/first_game/assets/trullWall.jpg")',
  },
];

const board = {
  player: {
    name: '',
    gameOptions: [],
  },
  ai: {
    name: 'Bot',
    gameOptions: [],
  },
  inPlay: [],
  pulledBGI: '',
  checkRound: function () {
    if (this.inPlay[0].code === this.inPlay[1].code) {

    }
    else {
      code = board.inPlay[0].code + board.inPlay[1].code;

      switch (code) {
        case 'bt':
        case 'rb':
        case 'tr':
          $els.playGround.css('background-image', board.inPlay[0].bg);

          $els.playerCounter.html()
          console.log('player wins')
        break;
        case 'tb':
        case 'br':
        case 'rt':
          $els.playGround.css('background-image', board.inPlay[1].bg);

          console.log('Bot Wins');
        break;
      }
    }
  }
};
let code;




