const GameState = require('./states/game-state');
const STATE_MAP = require('./states/state-map');

module.exports = class Game {
  constructor(id) {
    this.id = id;
    this.gameState = new GameState();
    this.currentState = new STATE_MAP.initialState();
  }

  makePlay(request) {
    if (request.command !== this.currentState.command || !this.currentState[request.command]) {
      throw new Error('Command not valid for current game state. Valid commands are: ' + this.currentState.command);
    }
    this.currentState[request.command](this.gameState.currentPlayer, request.value);
    this.gameState.nextPlayer();
    if (this.currentState.checkEndState()) {
      this.currentState.onNextState(this.gameState);
      if (this.currentState.nextState) {
        this.currentState = new STATE_MAP[this.currentState.nextState];
      }
    }
  }
};
