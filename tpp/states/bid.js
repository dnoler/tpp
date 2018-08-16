const keys = require('lodash/keys');
const each = require('lodash/each');
const maxBy = require('lodash/maxBy');

module.exports = class Bid {
  constructor() {
    this.id = 'bid';
    this.nextState = 'chooseSuite';
    this.command = 'bid';
    this.state = {
      playerBids: {}
    };
  }

  bid(currentPlayer, playerBid) {
    each(keys(this.state.playerBids), (player) => {
      if (this.state.playerBids[player]) {
        if (this.state.playerBids[player] >= playerBid) {
          throw new Error('Bid must be greater than the current max bid of ' + this.state.playerBids[player]);
        }
      }
    });
    this.state.playerBids[currentPlayer] = playerBid;
  }

  checkEndState() {
    return this.state.playerBids.player !== undefined && 
      this.state.playerBids.comp1 !== undefined && 
      this.state.playerBids.comp2 !== undefined && 
      this.state.playerBids.comp3 !== undefined;
  }

  onNextState(gameState) {
    const bidArray = [];
    each(keys(this.state.playerBids), (player) => {
      bidArray.push({player, bid: this.state.playerBids[player]});
    });
    const winningBidder = maxBy(bidArray, (playerBid) => {
      return playerBid.bid;
    });
    gameState.currentPlayer = winningBidder.player;
  }
};
