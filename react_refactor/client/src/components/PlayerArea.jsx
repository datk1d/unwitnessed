import React, {Component} from 'react';

export default class PlayerArea extends Component {
  render() {
    return(
      <footer>
        <div id="footyDiv">
          <div id="playerCounter" className="counter">{this.props.playerRounds}</div>
          <div id="statusDisplay"></div>
          <div id="nameDisplay">{this.props.landingState.player}</div>
        </div>
      </footer>
    )
  }
}
