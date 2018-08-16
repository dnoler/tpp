const Kitty = require('../kitty');

module.exports = class Bid {
  constructor() {
    this.id = 'dealHand';
    this.nextState = 'bid';
    this.command = 'deal';
  }

  deal() {
    return;
  }

  checkEndState() {
    return true;
  }

  onNextState(gameState) {
    gameState.kitty = new Kitty();
    gameState.players.player.cards = gameState.kitty.deal(9);
    gameState.players.comp1.cards = gameState.kitty.deal(9);
    gameState.players.comp2.cards = gameState.kitty.deal(9);
    gameState.players.comp3.cards = gameState.kitty.deal(9);
  }
};
