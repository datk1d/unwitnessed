import React, {Component} from 'react';
import _ from 'lodash';

import Game from './Game';

export default class Landing extends Component {
  constructor() {
    super();

    this.state = {
      player: '',
      name: false,
      game: false,
      emptyName: false,
    };

    _.bindAll(
      this, [
        'handleNameChange',
        'handlePlayBttn',
        'prevReload',
        'startGame',
        'new',
      ]
    );
  };
    handleNameChange(ev) {
      const target = ev.target;
      const value = target.type === 'checkbox' ? target.checked : target.value

      this.setState({
        player: value,
      });
    }
    handlePlayBttn(ev) {
      this.setState({
        name: true,
      })
    }
    prevReload(ev) {
      ev.preventDefault()
    }
    startGame(ev) {
      if (this.state.player !== '' && this.state.name === true) {
        this.setState({ game: true, })
      }
      else {
        this.setState({ emptyName: true, })
      }
    }
    new() { this.setState({ name: false }) }
    playBtn(fn) {
      return (
        <div
          id="playBtn"
          onClick={fn}
        >
          play
        </div>
      )
    }
  render() {
    if (!this.state.game || !this.state.name) {
      return (
        <main id="land">
          <div id="lander">
            <h1>
              unwitnessed
            </h1>
            <div id="imageDiv"></div>
            <div id="form">
              <div id="status">{this.state.emptyName === true ? 'Enter A Name' : String()}</div>
              <form onSubmit={this.prevReload}>
                {this.state.name ? (
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={this.state.player}
                    onChange={this.handleNameChange}
                  />
                ) : <div></div>}
              </form>
              {this.state.name ? this.playBtn(this.startGame) : this.playBtn(this.handlePlayBttn)}
            </div>
          </div>
        </main>
      )
    }
    else {
      return (
        <div>
          <Game landingState={this.state} new={this.new}/>
        </div>
      )
    }
  }
}
