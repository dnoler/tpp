/* global describe,it */
const expect = require('chai').expect;
const Game = require('../tpp/game');

describe('Game', function() {
  it('initializes the game', function() {
    const game = new Game('123');
    expect(game.id).to.be.equal('123');
    expect(game).to.have.property('players');
    expect(game.players).to.have.property('player');
    expect(game.players.player).to.have.property('team');
    expect(game.players.player.team).to.be.equal('1');
    expect(game.players).to.have.property('comp1');
    expect(game.players.comp1).to.have.property('team');
    expect(game.players.comp1.team).to.be.equal('2');
    expect(game.players).to.have.property('comp2');
    expect(game.players.comp2).to.have.property('team');
    expect(game.players.comp2.team).to.be.equal('1');
    expect(game.players).to.have.property('comp3');
    expect(game.players.comp3).to.have.property('team');
    expect(game.players.comp3.team).to.be.equal('2');
    expect(game.dealer).to.be.equal('player');
    expect(game.teams).to.have.property('1');
    expect(game.teams['1']).to.have.property('score');
    expect(game.teams['1'].score).to.be.equal(0);
    expect(game.teams).to.have.property('2');
    expect(game.teams['2']).to.have.property('score');
    expect(game.teams['2'].score).to.be.equal(0);
  });

  describe('dealHand', function() {
    it('deals 9 cards to each player and leaves the rest in the kitty', function() {
      const game = new Game('123');
      game.dealHand();
      expect(game).to.have.property('kitty');
      expect(game.players.player).to.have.property('cards');
      expect(game.players.player.cards.length).to.be.equal(9);
      expect(game.players.comp1).to.have.property('cards');
      expect(game.players.comp1.cards.length).to.be.equal(9);
      expect(game.players.comp2).to.have.property('cards');
      expect(game.players.comp2.cards.length).to.be.equal(9);
      expect(game.players.comp3).to.have.property('cards');
      expect(game.players.comp3.cards.length).to.be.equal(9);
    });
  });
});
