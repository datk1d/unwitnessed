import React from 'react';

import Status from './Status'

const PlayerArea = props => {
  return(
    <footer>
      <div id="footyDiv">
        <div id="playerCounter" className="counter">{props.playerRounds}</div>
        <div id="statusDisplay">
          <Status
            landingState={props.landingState}
            roundWinner={props.roundWinner}
            gameWinner={props.gameWinner}
          />
        </div>
        <div id="nameDisplay">{props.landingState.player}</div>
      </div>
    </footer>
  )
}
export default PlayerArea
