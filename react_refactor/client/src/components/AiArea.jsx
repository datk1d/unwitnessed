import React from 'react';

const AiArea = props => {
  return(
    <header>
      <div id="headerDiv">
        <div id="botCounter" className="counter">{props.aiRounds}</div>
      </div>
    </header>
  )
}
export default AiArea
