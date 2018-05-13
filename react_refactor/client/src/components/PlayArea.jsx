import React, {Component} from 'react';
import _ from 'lodash';

export default class PlayArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      p0: true,
      p1: true,
      p2: true,
      play: false,
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

    //function to spit out the right classname for the targets based on the state of the game. Hopefully.
    //maybe also the players draggable. post mvp though lol

    //check for draw first
    ////if draw, fadeBoth
    ////if not, check for the winnner
    //////if the winner is player, fadeOutSingle to bots loosing target
    //////if bot is the winner, fadeOutSingle applied to the player
    //trigger the next round after all animations are done.
  cssWork(result, pos, dropped) {
    if (result === String()) {
      return dropped === undefined ? this.faderFigurer(result, pos, dropped) : this.dragFigurer(result, pos, dropped)
    }
    else {
      setTimeout(() => this.props.newRound(), 2800)

    return dropped === undefined ? this.faderFigurer(result, pos, dropped) : this.dragFigurer(result, pos, dropped)
    }

  }
  dragFigurer(result, pos, dropped){
    console.log(`pos: ${pos}, dropped: ${dropped}`)
    if (pos === 'p0') {
      return this.state.p0.toString()
    }
    else if (pos === 'p1') {
      return this.state.p1.toString()
    }
    else if (pos === 'p2') {
      return this.state.p2.toString()
    }
  }
  faderFigurer(result, pos, dropped) {
    return result === 'Draw' ? 'fadeOutBoth' :
      (result === 'Player' && pos === 'player' ? String() :
        (result === 'Player' && pos === 'bot' ? 'fadeOutSingle' :
          (result === 'Bot' && pos === 'player' ? 'fadeOutSingle' :
            (result === 'Bot' && pos === 'bot' ? String() : String()
            )
          )
        )
      )
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
       *Gets the dragged option, triggers the corresponding T/F switch in state, sets the dropped option in state, and triggers the T/F switch for if the player has played.
    */
    ev.preventDefault();

    const dragged = ev.dataTransfer.getData('text');
    console.log(`dragged: ${dragged}`)
    this.setState({
      [dragged]: false,
      dropped: dragged,
      play: true,
    });
    this.props.playerDrop(dragged);
  }
  componentDidUpdate() {
    if (this.state.dropped !== String() && this.state.play) {
      if (this.props.gameState.roundWinner === 'Draw') {
        this.setState({
          [this.state.dropped]: true,
          play: false,
        })
        return
      }
    }
    console.log(this.state)
  }

//style={{backgroundImage: "url(" + Background + ")"}}
  render() {
    //`faceOff ${this.state.dropped}
    return(
      <main>
        <div id="boardDiv">
          <div id="playGround" className={this.props.gameState.roundWinner === 'Player' ? `${this.props.gameState.inPlay[0].id}BG` : (this.props.gameState.roundWinner === 'Bot' ? `${this.props.gameState.inPlay[1].id}BG` : 'waiting')}>
            <div
              id="playerTarget"
              className={this.props.gameState.inPlay[0] ? (this.props.gameState.roundWinner === String() ? `${this.props.gameState.inPlay[0].id}` : `${this.props.gameState.inPlay[0].id} ${this.cssWork(this.props.gameState.roundWinner, 'player')}`) : 'waiting'}
              onDrop={this.drop}
              onDragOver={this.allowDrop}
            ></div>
            <div
              id="botTarget"
              className={this.props.gameState.inPlay[1] ? (this.props.gameState.roundWinner === String() ? `${this.props.gameState.inPlay[1].id}` : `${this.props.gameState.inPlay[1].id} ${this.cssWork(this.props.gameState.roundWinner, 'bot')}`) : 'holder'}></div>
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
              draggable={this.cssWork(this.props.gameState.roundWinner, 'p0', this.state.dropped)}
              onDragStart={this.drag}
            ></div>
            <div
              id="p1"
              className="option one"
              draggable={this.cssWork(this.props.gameState.roundWinner, 'p1', this.state.dropped)}
              onDragStart={this.drag}
            ></div>
            <div
              id="p2"
              className="option two"
              draggable={this.cssWork(this.props.gameState.roundWinner, 'p2', this.state.dropped)}
              onDragStart={this.drag}
            ></div>
          </div>
        </div>
      </main>
    )
  }
}
