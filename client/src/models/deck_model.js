const RequestHelper = require('../helpers/request_helper.js')

const Deck = function() {
  this.cards = null;
}

Deck.prototype.getCardsFromDatabase = function() {
  const request = new RequestHelper('http://localhost:3000/api/deck');
  request.get().then((cards) => {
    this.cards = cards
  }).catch((err) => console.error(err));
}

Deck.prototype.getCard = function() {
  const card = this.cards.pop()
  return card
}

module.exports = Deck;
