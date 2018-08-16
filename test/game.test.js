/* global describe,it */
const chai = require('chai');
const spies = require('chai-spies');
const Game = require('../tpp/game');
const { expect } = chai;
chai.use(spies);

describe('game', function() {
  it('initializes the game', function() {
    const game = new Game('123');
    expect(game.id).to.be.equal('123');
    expect(game).to.have.property('gameState');
    expect(game).to.have.property('currentState');
  });

  describe('make play', function() {
    it('throws error if command is invalid', function() {
      const game = new Game('123');
      const currentState = {command: 'myCommand'};
      game.currentState = currentState;
      const request = {command: 'otherCommand'};
      expect(() => game.makePlay(request)).to.throw('Command not valid for current game state. Valid commands are: myCommand');
    });

    it('throws error if command does not exist', function() {
      const game = new Game('123');
      const currentState = {command: 'myCommand'};
      game.currentState = currentState;
      const request = {command: 'myCommand'};
      expect(() => game.makePlay(request)).to.throw('Command not valid for current game state. Valid commands are: myCommand');
    });

    it('calls command and sets next player', function() {
      const game = new Game('123');
      const currentStateSpy = chai.spy();
      const gameStateSpy = chai.spy();
      const currentState = {command: 'myCommand', myCommand: currentStateSpy, checkEndState: function() { return false; }};
      const gameState = {nextPlayer: gameStateSpy};
      const request = {command: 'myCommand', value: 'someValue'};
      game.currentState = currentState;
      game.gameState = gameState;
      game.makePlay(request);
      expect(currentStateSpy).to.have.been.called.with('someValue');
      expect(gameStateSpy).to.have.been.called();
    });

    it('sets next state if end state is true', function() {
      const game = new Game('123');
      const currentStateSpy = chai.spy();
      const currentState = {command: 'myCommand', myCommand: function() {}, checkEndState: function() { return true; }, onNextState: currentStateSpy};
      const gameState = {nextPlayer: function() {}};
      const request = {command: 'myCommand', value: 'someValue'};
      game.currentState = currentState;
      game.gameState = gameState;
      game.makePlay(request);
      expect(currentStateSpy).to.have.been.called.with(gameState);
    });
  });
});
