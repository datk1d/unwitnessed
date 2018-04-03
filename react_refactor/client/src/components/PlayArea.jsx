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
  faderFigurer(pOp, bOp, dropped){
    //function to spit out the right classname for the targets based on the state of the game. Hopefully.
    //maybe also the players draggable. post mvp though lol

    //check for draw first
    ////if draw, fadeBoth
    ////if not, check for the winnner
    //////if the winner is player, fadeOutSingle to bots loosing target
    //////if bot is the winner, fadeOutSingle applied to the player
    //trigger the next round after all animations are done.
    if (this.props.gameState.roundWinner === 'Draw' ) {
      return `fadeBoth ${this.props.gameState.playerDrop}`
    }
    else if (this.props.gameState.roundWinner === 'Player' && bOp === undefined) {
      return `${pOp}`
    }
    else if (this.props.gameState.roundWinner === 'Player' && pOp === undefined) {
      return `fadeOutSingle ${bOp}`
    }
    else if (this.props.gameState.roundWinner === 'Bot' && bOp === undefined) {
      return `fadeOutSingle ${pOp}`
    }
    else if (this.props.gameState.roundWinner === 'Bot' && pOp === undefined) {
      return `${bOp}`
    }
    else {
      return 'holder'
    }
  }
  allowDrop(ev) {
    ev.preventDefault();
  }
  drag(ev) {
    /* sets the id of the selected and dragged option */
    ev.dataTransfer.setData('text', ev.target.id);
  }
  drop(ev) {
    /* *Prevent default action for tthe drop event
       *Gets the dragged option, triggers the corresponding T/F switch in state, sets the dropped option in state, and triggers the T/F switch for if the player has played. test
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
              className={this.faderFigurer(this.props.gameState.playerDrop)}
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
