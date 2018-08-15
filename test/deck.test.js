/* global describe,it */
const expect = require('chai').expect;
const Deck = require('../deck');

describe('Deck', function() {
  it('initializes the deck', function() {
    const deck = new Deck();
    expect(deck).to.have.property('kitty');
    expect(deck.kitty.length).to.be.equal(54);
  });

  describe('deal', function() {
    it('deals the counted cards', function() {
      const deck = new Deck();
      const cards = deck.deal(3);
      expect(cards.length).to.be.equal(3);
      expect(deck.kitty.length).to.be.equal(54-3);
    });

    it('throws error if count exceeds kitty length', function() {
      const deck = new Deck();
      expect(() => deck.deal(55)).to.throw('exceeds');
    });
  });
});