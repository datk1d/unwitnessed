import React from 'react';

function playerOption(props) {
  return (
    <div
      id={`p${props.i}`}
      className={`option o${props.i}`}
      draggable={props.cssWork(props.gameState.roundWinner, `p${props.i}`, props.dropped)}
      onDragStart={props.drag}
    ></div>
  )
}

function botOption(props) {
  return <div id={`b${props.i}`} className={`option o${props.i}`}></div>
}

const Option = props => {
  return props.position === 'player' ? playerOption(props) : botOption(props)
}
export default Option
