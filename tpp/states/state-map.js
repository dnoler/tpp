const bid = require('./bid');
const dealHand = require('./deal-hand');

module.exports = {
  initialState: dealHand,
  bid, dealHand
};