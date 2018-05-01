import React, {Component} from 'react';
import _ from 'lodash';

export default class Options extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    _.bindAll(
      this, [

      ]
    );
  };

  render() {
    // || !this.props.options
    // this.statusShower
    return(
      <div id={this.props.game ? 'opInvis' : 'options'}>
        <div id="notice"></div>
        <br />
        <hr />
        <div id="restart">Restart Match</div>
      </div>
    )
  }
}
