const keys = require('lodash/keys');
const values = require('lodash/values');
const each = require('lodash/each');
const maxBy = require('lodash/maxBy');
const findIndex = require('lodash/findIndex');

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
    if (playerBid > 0) {
      if (playerBid < 4) {
        throw new Error('Minimum bid is 4');
      } else if (playerBid > 10) {
        throw new Error('Maximum bid is 10');
      }
      each(keys(this.state.playerBids), (player) => {
        if (this.state.playerBids[player]) {
          if (this.state.playerBids[player] >= playerBid) {
            throw new Error('Bid must be greater than the current max bid of ' + this.state.playerBids[player]);
          }
        }
      });
    } else if (this._remainingPlayersHavePassed()) {
      throw new Error('All other players have passed, minimum bid is 4');
    }
    this.state.playerBids[currentPlayer] = playerBid;
  }

  _remainingPlayersHavePassed() {
    return keys(this.state.playerBids).length === 3 && findIndex(values(this.state.playerBids), value => { return value > 0; }) === -1;
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

  processAI(ai) {
    return 0;
  }
};
