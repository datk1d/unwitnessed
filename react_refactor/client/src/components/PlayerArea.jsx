import React, {Component} from 'react';

export default class PlayerArea extends Component {
  constructor(props) {
    super(props)


  }
  render() {
    return(
      <footer>
        <div id="footyDiv">
          <div id="playerCounter" className="counter">{this.props.playerRounds}</div>
          <div id="statusDisplay">{this.props.statusWork(this.props.roundWinner, this.props.gameWinner)}</div>
          <div id="nameDisplay">{this.props.landingState.player}</div>
        </div>
      </footer>
    )
  }
}
