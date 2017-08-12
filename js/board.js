console.log('board.js has been chained');

const options = [
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
  checkRound: function () {
    if (this.inPlay[0].code === this.inPlay[1].code) {
      $
    }
    else {
      for (let i = 0; i < this.inPlay.length; i++) {
      let code = code += this.inPlay[i];
    }
      switch (code) {
        case 'bt':
        case 'rb':
        case 'tr':
          console.log('player wins');
        break;
        case 'tb':
        case 'br':
        case 'rt':
          console.log('Bot Wins');
        break;

      }
    }
  }
};





