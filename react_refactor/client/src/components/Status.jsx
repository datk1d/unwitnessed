import React from 'react';

const Status = props => {
  function handleGameWinner(gW) {
    if (gW === 'Player') {
      return `${props.landingState.player} has won the game!`
    }
    else if (gW === 'Bot') {
      return 'Too bad,the Bot has won the game :p'
    }
    else if (gW === 'Draw') {
      return 'The game has ended in a draw!'
    }
  }

  function handleRoundWinner(rW) {
    if (rW === 'Player') {
      return `${props.landingState.player} has won this round!`
    }
    else if (rW === 'Bot') {
      return 'The Bot has won this round!'
    }
    else if (rW === 'Draw') {
      return 'This round has ended in a draw!'
    }
  }

  function statusWork(rW, gW) {
    if (gW !== String()) {
      return handleGameWinner(gW)
      //if it is a string that is set with a game winner, do a thing
        //if the winner is the player show "the player has won the game!"
        //if it is the bot, return 'The Bot has won the game!'
        //if draw, then return 'the game has ended in a draw'
    }
    else if (rW !== String()){
      return handleRoundWinner(rW)
      //if the round winner is not an empty string, do the thing
        //similar to above.
    }
  }

  return <div>{statusWork(props.roundWinner, props.gameWinner)}</div>
}
export default Status
