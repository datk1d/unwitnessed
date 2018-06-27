import React, {Component} from 'react';
import _ from 'lodash';
import Option from '../partials/Option'

export default class PlayArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      p0: true,
      p1: true,
      p2: true,
      play: false,
      drawCheck: false,
      dropped: String(),
    };
    _.bindAll(
      this, [
        'allowDrop',
        'drag',
        'drop',
        'cssWork',
        'dragGetter',
        'faderFigurer'
      ]
    );
  };

    //function to spit out the right classname for the targets based on the state of the game.
    //Also figures out which of the player's options are draggable.


  cssWork(result, pos, dropped) {
    if (result === String()) {
      return dropped === undefined ? this.faderFigurer(result, pos) : this.dragGetter(pos)
    }
    else {
      return dropped === undefined ? this.faderFigurer(result, pos) : this.dragGetter(pos)
    }
  }
  dragGetter(pos){
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
  faderFigurer(result, pos) {
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
       *Gets the dragged option, triggers the corresponding T/F switch in state, sets the dropped option in state, and triggers the T/F switch for if the player has played. test
    */
    const dragged = ev.dataTransfer.getData('text');

    this.setState({
      [dragged]: false,
      dropped: dragged,
      play: true,
      drawCheck: true,
    });
    this.props.playerDrop(dragged);
  }
  reInitDrawOption(dropped) {
    this.setState({
      [dropped]: true,
      drawCheck: false,
    })
    return this.state.play
  }
  handleNewGame() {
    this.setState({
      p0: true,
      p1: true,
      p2: true,
      play: false,
      drawCheck: false,
      dropped: String(),
    })
  }
  renderOptions(position) {
    return this.props.gameState.options.map((ele, i) => {
      return (<Option
        key={`p${i}`}
        gameState={this.props.gameState}
        position={position}
        i={i}
        cssWork={this.cssWork}
        drag={this.drag}
        dropped={this.state.dropped}
      />)
    })
  }

  shouldComponentUpdate() {
    //first check if the game has bee started anew. If not, proceed on to the draw check
    //if inplay, check for draw. If draw, re-init the dropped option after the

    if (this.props.gameState.new) {
      this.handleNewGame()
      this.props.switchNew()

      return true
    }
    if (this.props.gameState.roundWinner === 'Draw' && this.state.drawCheck) {
      this.reInitDrawOption(this.props.gameState.playerDrop)
    }
    else {
      return this.state.play
    }
    return this.state.play
  }

  render() {
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
              className={this.props.gameState.inPlay[1] ? (this.props.gameState.roundWinner === String() ? `${this.props.gameState.inPlay[1].id}` : `${this.props.gameState.inPlay[1].id} ${this.cssWork(this.props.gameState.roundWinner, 'bot')}`) : 'waiting'}></div>
          </div>
          <div id ="botDiv" className="row">
             {this.renderOptions()}
          </div>
          <div id="playerDiv" className="row">{this.renderOptions('player')}</div>
        </div>
      </main>
    )
  }
}
