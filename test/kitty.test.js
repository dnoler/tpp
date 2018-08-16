/* global describe,it */
const expect = require('chai').expect;
const Kitty = require('../tpp/kitty');

describe('kitty', function() {
  it('initializes the kitty', function() {
    const kitty = new Kitty();
    expect(kitty).to.have.property('cards');
    expect(kitty.cards.length).to.be.equal(54);
  });

  describe('deal', function() {
    it('deals the counted cards', function() {
      const kitty = new Kitty();
      const cards = kitty.deal(3);
      expect(cards.length).to.be.equal(3);
      expect(kitty.cards.length).to.be.equal(54-3);
    });

    it('throws error if count exceeds kitty length', function() {
      const kitty = new Kitty();
      expect(() => kitty.deal(55)).to.throw('exceeds');
    });
  });
});