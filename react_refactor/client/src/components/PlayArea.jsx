import React, {Component} from 'react';
import _ from 'lodash';

export default class PlayArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      p0: false,
      p1: false,
      p2: false,
      dropped: String(),
    };

    _.bindAll(
      this, [
        'allowDrop',
        'drag',
        'drop',
      ]
    );
  };

  allowDrop(ev) {
    ev.preventDefault();
  }
  drag(ev) {
    /* sets the id of the selected and dragged option */
    ev.dataTransfer.setData('text', ev.target.id);
  }
  drop(ev) {
    /* *Prevent default action for tthe drop event
       *Gets the dragged option, triggers the corresponding T/F switch in state, sets the dropped option in state, and triggers the T/F switch for if the player has played.
    */
    ev.preventDefault();

    const dragged = ev.dataTransfer.getData('text');

    this.setState({
      [dragged]: true,
      dropped: dragged,
    });
    console.log(this.props)
    this.props.playerDrop(dragged);
  }
  componentDidUpdate() {
    console.log(this.state)
  }

//style={{backgroundImage: "url(" + Background + ")"}}
  render() {
    //`faceOff ${this.state.dropped}
    return(
      <main>
        <div id="boardDiv">
          <div id="playGround">
            <div
              id="playerTarget"
              className={this.props.gameState.inPlay[0] ? `faceOff ${this.state.dropped}` : "faceOff"}
              onDrop={this.drop}
              onDragOver={this.allowDrop}
            ></div>
            <div
              id="botTarget"
              className={this.props.gameState.inPlay[1] ? `faceOff ${this.props.gameState.inPlay[1].id}` : "faceOff"}></div>
          </div>
          <div id ="botDiv" className="row">
            <div id="b2" className="option two"></div>
            <div id="b1" className="option one"></div>
            <div id="b0" className="option zero"></div>
          </div>
          <div id="playerDiv" className="row">
            <div
              id="p0"
              className="option zero"
              draggable={this.state.p0 ? "false" : "true"}
              onDragStart={this.drag}
            ></div>
            <div
              id="p1"
              className="option one"
              draggable={this.state.p1 ? "false" : "true"}
              onDragStart={this.drag}
            ></div>
            <div
              id="p2"
              className="option two"
              draggable={this.state.p2 ? "false" : "true"}
              onDragStart={this.drag}
            ></div>
          </div>
        </div>
      </main>
    )
  }
}
