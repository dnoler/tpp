const ALL_CARDS = [
  {id: 'ac', sortOrder: '13', suite: 'Clubs', value: 'Ace', rank: '1', points: '1'},
  {id: '2c', sortOrder: '1', suite: 'Clubs', value: '2', rank: '0', points: '1'},
  {id: '3c', sortOrder: '2', suite: 'Clubs', value: '3', rank: '15', points: '3'},
  {id: '4c', sortOrder: '3', suite: 'Clubs', value: '4', rank: '14', points: '0'},
  {id: '5c', sortOrder: '4', suite: 'Clubs', value: '5', rank: '13', points: '0'},
  {id: '6c', sortOrder: '5', suite: 'Clubs', value: '6', rank: '12', points: '0'},
  {id: '7c', sortOrder: '6', suite: 'Clubs', value: '7', rank: '11', points: '0'},
  {id: '8c', sortOrder: '7', suite: 'Clubs', value: '8', rank: '10', points: '0'},
  {id: '9c', sortOrder: '8', suite: 'Clubs', value: '9', rank: '9', points: '0'},
  {id: '10c', sortOrder: '9', suite: 'Clubs', value: '10', rank: '8', points: '1'},
  {id: 'jc', sortOrder: '10', suite: 'Clubs', value: 'Jack', rank: '4', points: '1', alternate: {
    suite: 'Spades',
    value: 'Left Jack',
    rank: '5',
    points: '1'
  }},
  {id: 'qc', sortOrder: '11', suite: 'Clubs', value: 'Queen', rank: '3', points: '0'},
  {id: 'kc', sortOrder: '12', suite: 'Clubs', value: 'King', rank: '2', points: '0'},
  {id: 'ad', sortOrder: '26', suite: 'Diamonds', value: 'Ace', rank: '1', points: '1'},
  {id: '2d', sortOrder: '14', suite: 'Diamonds', value: '2', rank: '0', points: '1'},
  {id: '3d', sortOrder: '15', suite: 'Diamonds', value: '3', rank: '15', points: '3'},
  {id: '4d', sortOrder: '16', suite: 'Diamonds', value: '4', rank: '14', points: '0'},
  {id: '5d', sortOrder: '17', suite: 'Diamonds', value: '5', rank: '13', points: '0'},
  {id: '6d', sortOrder: '18', suite: 'Diamonds', value: '6', rank: '12', points: '0'},
  {id: '7d', sortOrder: '19', suite: 'Diamonds', value: '7', rank: '11', points: '0'},
  {id: '8d', sortOrder: '20', suite: 'Diamonds', value: '8', rank: '10', points: '0'},
  {id: '9d', sortOrder: '21', suite: 'Diamonds', value: '9', rank: '9', points: '0'},
  {id: '10d', sortOrder: '22', suite: 'Diamonds', value: '10', rank: '8', points: '1'},
  {id: 'jd', sortOrder: '23', suite: 'Diamonds', value: 'Jack', rank: '4', points: '1', alternate: {
    suite: 'Hearts',
    value: 'Left Jack',
    rank: '5',
    points: '1'
  }},
  {id: 'qd', sortOrder: '24', suite: 'Diamonds', value: 'Queen', rank: '3', points: '0'},
  {id: 'kd', sortOrder: '25', suite: 'Diamonds', value: 'King', rank: '2', points: '0'},
  {id: 'as', sortOrder: '39', suite: 'Spades', value: 'Ace', rank: '1', points: '1'},
  {id: '2s', sortOrder: '27', suite: 'Spades', value: '2', rank: '0', points: '1'},
  {id: '3s', sortOrder: '28', suite: 'Spades', value: '3', rank: '15', points: '3'},
  {id: '4s', sortOrder: '29', suite: 'Spades', value: '4', rank: '14', points: '0'},
  {id: '5s', sortOrder: '30', suite: 'Spades', value: '5', rank: '13', points: '0'},
  {id: '6s', sortOrder: '31', suite: 'Spades', value: '6', rank: '12', points: '0'},
  {id: '7s', sortOrder: '32', suite: 'Spades', value: '7', rank: '11', points: '0'},
  {id: '8s', sortOrder: '33', suite: 'Spades', value: '8', rank: '10', points: '0'},
  {id: '9s', sortOrder: '34', suite: 'Spades', value: '9', rank: '9', points: '0'},
  {id: '10s', sortOrder: '35', suite: 'Spades', value: '10', rank: '8', points: '1'},
  {id: 'js', sortOrder: '36', suite: 'Spades', value: 'Jack', rank: '4', points: '1', alternate: {
    suite: 'Clubs',
    value: 'Left Jack',
    rank: '5',
    points: '1'
  }},
  {id: 'qs', sortOrder: '37', suite: 'Spades', value: 'Queen', rank: '3', points: '0'},
  {id: 'ks', sortOrder: '38', suite: 'Spades', value: 'King', rank: '2', points: '0'},
  {id: 'ah', sortOrder: '52', suite: 'Hearts', value: 'Ace', rank: '1', points: '1'},
  {id: '2h', sortOrder: '40', suite: 'Hearts', value: '2', rank: '0', points: '1'},
  {id: '3h', sortOrder: '41', suite: 'Hearts', value: '3', rank: '15', points: '3'},
  {id: '4h', sortOrder: '42', suite: 'Hearts', value: '4', rank: '14', points: '0'},
  {id: '5h', sortOrder: '43', suite: 'Hearts', value: '5', rank: '13', points: '0'},
  {id: '6h', sortOrder: '44', suite: 'Hearts', value: '6', rank: '12', points: '0'},
  {id: '7h', sortOrder: '45', suite: 'Hearts', value: '7', rank: '11', points: '0'},
  {id: '8h', sortOrder: '46', suite: 'Hearts', value: '8', rank: '10', points: '0'},
  {id: '9h', sortOrder: '47', suite: 'Hearts', value: '9', rank: '9', points: '0'},
  {id: '10h', sortOrder: '48', suite: 'Hearts', value: '10', rank: '8', points: '1'},
  {id: 'jh', sortOrder: '49', suite: 'Hearts', value: 'Jack', rank: '4', points: '1', alternate: {
    suite: 'Diamonds',
    value: 'Left Jack',
    rank: '5',
    points: '1'
  }},
  {id: 'qh', sortOrder: '50', suite: 'Hearts', value: 'Queen', rank: '3', points: '0'},
  {id: 'kh', sortOrder: '51', suite: 'Hearts', value: 'King', rank: '2', points: '0'},
  {id: 'joker1', sortOrder: '53', suite: '', value: 'Joker', rank: '6', firstPlayRankPlus: '1', points: '1'},
  {id: 'joker2', sortOrder: '54', suite: '', value: 'Joker', rank: '6', firstPlayRankPlus: '1', points: '1'}
];

module.exports = class Deck {
  constructor() {
    this.kitty = [];
    const allCards = ALL_CARDS.slice();
    for (let i = ALL_CARDS.length; i > 0; i--) {
      const index = Math.floor(Math.random() * i);
      this.kitty.push(allCards.splice(index, 1)[0]);
    }
  }

  deal(count) {
    if (count > this.kitty.length) {
      throw new Error('Desired deal count exceeds kitty length');
    }
    return this.kitty.splice(0, count).sort((a, b) => { return a.sortOrder - b.sortOrder; });
  }
};
