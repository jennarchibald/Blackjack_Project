
const Deck = function() {
  this.cards = null;
}

Deck.prototype.getCard = function() {
  const card = this.cards.pop()
  return card
}

Deck.prototype.shuffle = function() {
  let randomIndex, card, i;
  for (i = this.cards.length - 1; i > 0; i--) {
      randomIndex = Math.floor(Math.random() * (i + 1));
      card = this.cards[i];
      this.cards[i] = this.cards[randomIndex];
      this.cards[randomIndex] = card;
  }
}

module.exports = Deck;
