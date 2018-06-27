import React from 'react';

const Options = props => {
  return(
    <div id={props.game ? 'opInvis' : 'options'}>
      <div id="notice"></div>
      <br />
      <hr />
      <div id="restart" onClick={props.new}>Restart</div>
    </div>
  )
}

export default Options
