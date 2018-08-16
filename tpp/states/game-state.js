module.exports = class GameState {
  constructor() {
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
    this.currentPlayer = 'player';
  }
};
