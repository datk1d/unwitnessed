console.log('board.js has been chained');

const options = [
  {
    code: 'r',
    img: '../assets/rake.jpg',
    bg: '../assets/siegeOfPale.jpg',
  },
  {
    code: 'b',
    img: '../assets/brood.jpg',
    bg: '../assets/broodWall.jpg',
  },
  {
    code: 't',
    img: '../assets/trull.jpg',
    bg: '../assets/trullWall.jpg',
  },
];
const board = {
  player: {
    name: '',
    gameOptions: options,
  },
  ai: {
    name: 'Bot',
    gameOptions: options,
  },
  inPlay: [],
  fight: function () {
    if (this.inPlay[0].code === this.inPlay[1].code) {

    }
    else {
      for (let i = 0; i < this.inPlay.length; i++) {
      let code = code += this.inPlay[i];
    }
      switch (code) {
        case 'bt':
        case 'tb':
          console.log('brood wins');
        break;
        case 'rb':
        case 'br':
          console.log('rake wins');
        break;
        case 'tr':
        case 'rt':
          console.log('trull wins');
        break;
      }
    }
  }
};





