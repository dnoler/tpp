/* global describe,it */
const expect = require('chai').expect;
const GameState = require('../tpp/states/game-state');

describe('game state', function() {
  it('initializes with correct properties', function() {
    const gameState = new GameState();
    expect(gameState).to.have.property('players');
    expect(gameState.players).to.have.property('player');
    expect(gameState.players.player).to.have.property('team');
    expect(gameState.players.player.team).to.be.equal('1');
    expect(gameState.players).to.have.property('comp1');
    expect(gameState.players.comp1).to.have.property('team');
    expect(gameState.players.comp1.team).to.be.equal('2');
    expect(gameState.players).to.have.property('comp2');
    expect(gameState.players.comp2).to.have.property('team');
    expect(gameState.players.comp2.team).to.be.equal('1');
    expect(gameState.players).to.have.property('comp3');
    expect(gameState.players.comp3).to.have.property('team');
    expect(gameState.players.comp3.team).to.be.equal('2');
    expect(gameState.dealer).to.be.equal('player');
    expect(gameState.teams).to.have.property('1');
    expect(gameState.teams['1']).to.have.property('score');
    expect(gameState.teams['1'].score).to.be.equal(0);
    expect(gameState.teams).to.have.property('2');
    expect(gameState.teams['2']).to.have.property('score');
    expect(gameState.teams['2'].score).to.be.equal(0);
  });
});
