const Deck = require('./deck');

module.exports = class Game {
  constructor(id) {
    this.id = id;
    this.players = {
      player: {team: '1'},
      comp1: {team: '2'},
      comp2: {team: '1'},
      comp3: {team: '2'}
    };
    this.teams = {
      '1': {score: 0},
      '2': {score: 0}
    };
    this.dealer = 'player';
  }

  dealHand() {
    this.deck = new Deck();
    this.players.player.cards = this.deck.deal(9);
    this.players.comp1.cards = this.deck.deal(9);
    this.players.comp2.cards = this.deck.deal(9);
    this.players.comp3.cards = this.deck.deal(9);
  }
};
