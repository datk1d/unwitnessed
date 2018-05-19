import React, {Component} from 'react';

export default class Status extends Component {
  constructor(props) {
    super(props);
  };
  handleGameWinner(gW) {
    if (gW === 'Player') {
        return `${this.props.landingState.player} has won the game!`
    }
    else if (gW === 'Bot') {
      return 'Too bad,the Bot has won the game :p'
    }
    else if (gW === 'Draw') {
      return 'The game has ended in a draw!'
    }
  }
  handleRoundWinner(rW) {
    if (rW === 'Player') {
      return `${this.props.landingState.player} has won this round!`
    }
    else if (rW === 'Bot') {
      return 'The Bot has won this round!'
    }
    else if (rW === 'Draw') {
      return 'This round has ended in a draw!'
    }
  }
  statusWork(rW, gW) {
    if (gW !== String()) {
      return this.handleGameWinner(gW)
      //if it is a string that is set with a game winner, do a thing
        //if the winner is the player show "the player has won the game!"
        //if it is the bot, return 'The Bot has won the game!'
        //if draw, then return 'the game has ended in a draw'
    }
    else if (rW !== String()){
      return this.handleRoundWinner(rW)
      //if the round winner is not an empty string, do the thing
        //similar to above.
    }
  }
  render() {
    return(
      <div>{this.statusWork(this.props.roundWinner, this.props.gameWinner)}</div>
    )
  }
}
