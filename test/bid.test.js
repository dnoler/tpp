/* global describe,it */
const expect = require('chai').expect;
const Bid = require('../tpp/states/bid');

describe('bid', function() {
  
  it('has correct properties', function() {
    const bid = new Bid();
    expect(bid.id).to.be.equal('bid');
    expect(bid.nextState).to.be.equal('chooseSuite');
    expect(bid.command).to.be.equal('bid');
  });

  it('sets correct initial state', function() {
    const bid = new Bid();
    expect(bid).to.have.property('state');
    expect(bid.state).to.have.property('playerBids');
  });

  describe('bid', function() {
    it('throws error if bid does not exceed previous bid', function() {
      const bid = new Bid();
      bid.state.playerBids.comp1 = 4;
      expect(() => bid.bid('comp2', 4)).to.throw('Bid must be greater than the current max bid of 4');
    });

    it('accepts valid bid', function() {
      const bid = new Bid();
      bid.state.playerBids.comp1 = 4;
      bid.bid('comp2', 5);
      expect(bid.state.playerBids.comp2).to.be.equal(5);
    });
  });

  it('correctly checks for end state', function() {
    const bid = new Bid();
    expect(bid.checkEndState()).to.be.equal(false);
    bid.state.playerBids.player = 4;
    expect(bid.checkEndState()).to.be.equal(false);
    bid.state.playerBids.comp1 = 0;
    expect(bid.checkEndState()).to.be.equal(false);
    bid.state.playerBids.comp2 = 0;
    expect(bid.checkEndState()).to.be.equal(false);
    bid.state.playerBids.comp3 = 5;
    expect(bid.checkEndState()).to.be.equal(true);
  });

  it('sets game state on next', function() {
    const bid = new Bid();
    bid.state.playerBids.player = 5;
    bid.state.playerBids.comp1 = 0;
    bid.state.playerBids.comp2 = 6;
    bid.state.playerBids.comp3 = 0;
    const gameState = {};
    bid.onNextState(gameState);
    expect(gameState.currentPlayer).to.be.equal('comp2');
  });
});