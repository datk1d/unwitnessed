import React, {Component} from 'react';

export default class AiArea extends Component {
  render() {
    return(
      <header>
        <div id="headerDiv">
          <div id="botCounter" className="counter">{this.props.aiRounds}</div>
        </div>
      </header>
    )
  }
}
