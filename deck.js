const ALL_CARDS = [
  {id: 'ac', suite: 'Clubs', value: 'Ace', rank: '1', points: '1'},
  {id: '2c', suite: 'Clubs', value: '2', rank: '0', points: '1'},
  {id: '3c', suite: 'Clubs', value: '3', rank: '15', points: '3'},
  {id: '4c', suite: 'Clubs', value: '4', rank: '14', points: '0'},
  {id: '5c', suite: 'Clubs', value: '5', rank: '13', points: '0'},
  {id: '6c', suite: 'Clubs', value: '6', rank: '12', points: '0'},
  {id: '7c', suite: 'Clubs', value: '7', rank: '11', points: '0'},
  {id: '8c', suite: 'Clubs', value: '8', rank: '10', points: '0'},
  {id: '9c', suite: 'Clubs', value: '9', rank: '9', points: '0'},
  {id: '10c', suite: 'Clubs', value: '10', rank: '8', points: '1'},
  {id: 'jc', suite: 'Clubs', value: 'Jack', rank: '4', points: '1', alternate: {
    suite: 'Spades',
    value: 'Left Jack',
    rank: '5',
    points: '1'
  }},
  {id: 'qc', suite: 'Clubs', value: 'Queen', rank: '3', points: '0'},
  {id: 'kc', suite: 'Clubs', value: 'King', rank: '2', points: '0'},
  {id: 'ad', suite: 'Diamonds', value: 'Ace', rank: '1', points: '1'},
  {id: '2d', suite: 'Diamonds', value: '2', rank: '0', points: '1'},
  {id: '3d', suite: 'Diamonds', value: '3', rank: '15', points: '3'},
  {id: '4d', suite: 'Diamonds', value: '4', rank: '14', points: '0'},
  {id: '5d', suite: 'Diamonds', value: '5', rank: '13', points: '0'},
  {id: '6d', suite: 'Diamonds', value: '6', rank: '12', points: '0'},
  {id: '7d', suite: 'Diamonds', value: '7', rank: '11', points: '0'},
  {id: '8d', suite: 'Diamonds', value: '8', rank: '10', points: '0'},
  {id: '9d', suite: 'Diamonds', value: '9', rank: '9', points: '0'},
  {id: '10d', suite: 'Diamonds', value: '10', rank: '8', points: '1'},
  {id: 'jd', suite: 'Diamonds', value: 'Jack', rank: '4', points: '1', alternate: {
    suite: 'Hearts',
    value: 'Left Jack',
    rank: '5',
    points: '1'
  }},
  {id: 'qd', suite: 'Diamonds', value: 'Queen', rank: '3', points: '0'},
  {id: 'kd', suite: 'Diamonds', value: 'King', rank: '2', points: '0'},
  {id: 'qs', suite: 'Spades', value: 'Queen', rank: '3', points: '0'},
  {id: 'ks', suite: 'Spades', value: 'King', rank: '2', points: '0'},
  {id: 'as', suite: 'Spades', value: 'Ace', rank: '1', points: '1'},
  {id: '2s', suite: 'Spades', value: '2', rank: '0', points: '1'},
  {id: '3s', suite: 'Spades', value: '3', rank: '15', points: '3'},
  {id: '4s', suite: 'Spades', value: '4', rank: '14', points: '0'},
  {id: '5s', suite: 'Spades', value: '5', rank: '13', points: '0'},
  {id: '6s', suite: 'Spades', value: '6', rank: '12', points: '0'},
  {id: '7s', suite: 'Spades', value: '7', rank: '11', points: '0'},
  {id: '8s', suite: 'Spades', value: '8', rank: '10', points: '0'},
  {id: '9s', suite: 'Spades', value: '9', rank: '9', points: '0'},
  {id: '10s', suite: 'Spades', value: '10', rank: '8', points: '1'},
  {id: 'js', suite: 'Spades', value: 'Jack', rank: '4', points: '1', alternate: {
    suite: 'Clubs',
    value: 'Left Jack',
    rank: '5',
    points: '1'
  }},
  {id: 'qs', suite: 'Spades', value: 'Queen', rank: '3', points: '0'},
  {id: 'ks', suite: 'Spades', value: 'King', rank: '2', points: '0'},
  {id: 'qh', suite: 'Hearts', value: 'Queen', rank: '3', points: '0'},
  {id: 'kh', suite: 'Hearts', value: 'King', rank: '2', points: '0'},
  {id: 'qh', suite: 'Hearts', value: 'Queen', rank: '3', points: '0'},
  {id: 'kh', suite: 'Hearts', value: 'King', rank: '2', points: '0'},
  {id: 'ah', suite: 'Hearts', value: 'Ace', rank: '1', points: '1'},
  {id: '2h', suite: 'Hearts', value: '2', rank: '0', points: '1'},
  {id: '3h', suite: 'Hearts', value: '3', rank: '15', points: '3'},
  {id: '4h', suite: 'Hearts', value: '4', rank: '14', points: '0'},
  {id: '5h', suite: 'Hearts', value: '5', rank: '13', points: '0'},
  {id: '6h', suite: 'Hearts', value: '6', rank: '12', points: '0'},
  {id: '7h', suite: 'Hearts', value: '7', rank: '11', points: '0'},
  {id: '8h', suite: 'Hearts', value: '8', rank: '10', points: '0'},
  {id: '9h', suite: 'Hearts', value: '9', rank: '9', points: '0'},
  {id: '10h', suite: 'Hearts', value: '10', rank: '8', points: '1'},
  {id: 'jh', suite: 'Hearts', value: 'Jack', rank: '4', points: '1', alternate: {
    suite: 'Diamonds',
    value: 'Left Jack',
    rank: '5',
    points: '1'
  }},
  {id: 'qh', suite: 'Hearts', value: 'Queen', rank: '3', points: '0'},
  {id: 'kh', suite: 'Hearts', value: 'King', rank: '2', points: '0'},
  {id: 'joker1', suite: '', value: 'Joker', rank: '6', firstPlayRankPlus: '1', points: '1'},
  {id: 'joker2', suite: '', value: 'Joker', rank: '6', firstPlayRankPlus: '1', points: '1'}
];

module.exports = class Deck {
  constructor() {
    this.cards = [];
    const allCards = ALL_CARDS.slice();
    for (let i = ALL_CARDS.length; i > 0; i--) {
      const index = Math.floor(Math.random() * i);
      this.cards.push(allCards.splice(index, 1)[0]);
    }
  }
};
