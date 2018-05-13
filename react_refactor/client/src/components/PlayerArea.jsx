import React, {Component} from 'react';

import Status from './Status'

export default class PlayerArea extends Component {
  constructor(props) {
    super(props)


  }
  render() {
    return(
      <footer>
        <div id="footyDiv">
          <div id="playerCounter" className="counter">{this.props.playerRounds}</div>
          <div id="statusDisplay">
            <Status
              landingState={this.props.landingState}
              roundWinner={this.props.roundWinner}
              gameWinner={this.props.gameWinner}
            />
          </div>
          <div id="nameDisplay">{this.props.landingState.player}</div>
        </div>
      </footer>
    )
  }
}
