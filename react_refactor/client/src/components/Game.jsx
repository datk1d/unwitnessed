import React, {Component} from 'react';
import _ from 'lodash';

import AiArea from './AiArea';
import PlayArea from './PlayArea';
import PlayerArea from './PlayerArea';

export default class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game: true,
      playerRounds: 0,
      aiRounds: 0,
      inPlay: [],
      pPlay: false,
      aiPlay: false,
      playerOptions: [],
      aiOptions: [],
      roundWinner: '',
      gameWinner: '',
      options: [
        {
          code: 'r',
          img: 'url("../images/rake.jpg")',
          bg: 'url("../images/siegeOfPale.jpg")',
          id: 'p0',
        },
        {
          code: 'b',
          img: 'url("../images/brood.jpg")',
          bg: 'url("../images/broodWall.jpg")',
          id: 'p1',
        },
        {
          code: 't',
          img: 'url("../images/trull.jpg")',
          bg: 'url("../images/trullWall.jpg")',
          id: 'p2',
        },
      ],
    }
    _.bindAll(
      this, [
        'playerDrop',
        'aiPlays',
      ]
    )
  }
  removeIndex(ray, ind, amt, thing) {
    thing === undefined ? ray.splice(ind, amt) : ray.splice(ind, amt, thing);

    return ray;
  }
  interateIndex(ray, amt, inPlayComp, rayShelf) {
    ray.map((ele, i) => ele === inPlayComp ? this.removeIndex(rayShelf, i, amt, ele) : false)

    return rayShelf;
  }

  playerDrop(dragged, state) {
    for (let i = 0; i < this.state.playerOptions.length; i++) {
      if (dragged === this.state.playerOptions[i].id) {
        this.setState(prevState => ({
          inPlay: prevState.inPlay.concat(this.state.playerOptions[i]),
          playerOptions: this.removeIndex(prevState.playerOptions, i, 1),
          pPlay: true,
        }))
      }
    }
    setTimeout(() => {this.aiPlays(this.state); }, 1000); console.log(this.state)
  }
  aiPlays() {
    const rand = Math.floor((Math.random() * this.state.aiOptions.length) + 0)
    const play = this.state.aiOptions[rand];

    this.setState(prevState => ({
      inPlay: prevState.inPlay.concat(play),
      aiOptions: this.removeIndex(prevState.aiOptions, rand, 1),
      aiPlay: true,
    }))
    this.checkRound();

    //setTimeout(() => {this.cleanArea(); }, 3500);
  }
  dumpArray(ray) {
    this.setState({inPlay: this.removeIndex(ray, ray.length - 1, 1)});

    return ray
  }
  emptyInPlay(ray) {
    ray.length > 0 ? this.emptyInPlay(this.dumpArray(ray)) : ray

//ray.length > 0 ? this.emptyInPlay(this.removeIndex(ray, ray.length - 1, 1))
    return ray
  }
  handleDraw() {
    debugger;
    this.setState(prevState => ({
        //loop through the options and splice the matching inPlay option back into both player and bot's option arrays
        playerOptions: this.interateIndex(prevState.options, 0, prevState.inPlay[0], this.state.playerOptions),
        aiOptions: this.interateIndex(prevState.options, 0, prevState.inPlay[1], prevState.aiOptions),
        //this.state.options.map((op, i) => op === this.state.inPlay[1] ? this.state.aiOptions.splice(i, 0, op) : console.log()),
        pPlay: false,
        aiPlay: false,
        roundWinner: 'Draw',
      }))
    this.emptyInPlay(this.state.inPlay)
  }
  checkRound() {
    if (this.state.inPlay[0] === this.state.inPlay[1]) {
      this.handleDraw();
    }
    else {
      const code = `${this.state.inPlay[0].code}${this.state.inPlay[1].code}`

      code === 'bt' || code === 'rb' || code === 'tr' ? this.playerWin() : this.aiWin();
    }
    //check to see which side has won
    this.gameCheck();
  }
  gameCheck() {
    if (this.state.playerRounds === 2) {
      this.setState({
        game: false,
        gameWinner: 'Player',
      })
    }
    else if (this.state.aiRounds === 2) {
      this.setState({
        game: false,
        gameWinner: 'Bot',
      })
    }
    else if (this.state.playerRounds === 1 && this.state.aiRounds === 1 && this.state.inPlay[0] === this.state.inPlay[1]) {
      this.setState({
        game: false,
        gameWinner: 'Draw',
      })
    }
  }

/*
          playerFadeOut($els.dropArea);
          setTimeout(() => {removeFadeOut($els.dropArea); }, 3510);

          twoFadeOut()

  */
  playerWin() {
    this.setState(prevState => ({
      playerRounds: prevState.playerRounds += 1,
      pPlay: false,
      aiPlay: false,
      roundWinner: 'Player',
    }))
  }
  aiWin() {
    this.setState(prevState => ({
      aiRounds: prevState.aiRounds += 1,
      pPlay: false,
      aiPlay: false,
      roundWinner: 'Bot',
    }))
  }
  componentDidMount() {
    this.setState({
      playerOptions: this.state.options.map(ray => ray),
      aiOptions: this.state.options.map(ray => ray),
    })
  }
  componentWillReceiveProps(newProps) {
    this.props !== newProps ? (this.props = newProps) : this.props
  }
  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    return (
      <div id="mainWrapper">
        <AiArea
          aiRounds={this.state.aiRounds}
        />
        <PlayArea
          gameState={this.state}
          playerDrop={this.playerDrop}
        />
        <PlayerArea
          playerRounds={this.state.playerRounds}
          roundWinner={this.state.roundWinner}
          winner={this.state.winner}
          landingState={this.props.state}
        />
      </div>
    )
  }
}
