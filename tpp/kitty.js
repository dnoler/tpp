const DECK = require('./deck');

module.exports = class Deck {
  constructor() {
    this.cards = [];
    const allCards = DECK.slice();
    for (let i = DECK.length; i > 0; i--) {
      const index = Math.floor(Math.random() * i);
      this.cards.push(allCards.splice(index, 1)[0]);
    }
  }

  deal(count) {
    if (count > this.cards.length) {
      throw new Error('Desired deal count exceeds cards length');
    }
    return this.cards.splice(0, count).sort((a, b) => { return a.sortOrder - b.sortOrder; });
  }
};
