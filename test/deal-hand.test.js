/* global describe,it */
const expect = require('chai').expect;
const DealHand = require('../tpp/states/deal-hand');

describe('deal hand', function() {
  
  it('has correct properties', function() {
    const dealHand = new DealHand();
    expect(dealHand.id).to.be.equal('dealHand');
    expect(dealHand.nextState).to.be.equal('bid');
    expect(dealHand.command).to.be.equal('deal');
  });

  it('returns true for end state', function() {
    const dealHand = new DealHand();
    expect(dealHand.checkEndState()).to.be.equal(true);
  });

  it('deals 9 cards to each player and leaves the rest in the kitty on next', function() {
    const dealHand = new DealHand();
    const gameState = {
      players: {
        player: {}, comp1: {}, comp2: {}, comp3: {}
      }
    };
    dealHand.onNextState(gameState);
    expect(gameState).to.have.property('kitty');
    expect(gameState.players.player).to.have.property('cards');
    expect(gameState.players.player.cards.length).to.be.equal(9);
    expect(gameState.players.comp1).to.have.property('cards');
    expect(gameState.players.comp1.cards.length).to.be.equal(9);
    expect(gameState.players.comp2).to.have.property('cards');
    expect(gameState.players.comp2.cards.length).to.be.equal(9);
    expect(gameState.players.comp3).to.have.property('cards');
    expect(gameState.players.comp3.cards.length).to.be.equal(9);
  });
});