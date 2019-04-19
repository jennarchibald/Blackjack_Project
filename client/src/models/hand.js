const Hand = function (card1, card2){
  this.cards = [card1, card2];
};

Hand.prototype.totalValue = function () {
  return this.cards.reduce((total, current) => {
    return total + current.value;
  }, 0)
};

module.exports = Hand;
