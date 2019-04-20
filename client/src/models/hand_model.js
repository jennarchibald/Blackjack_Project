const Hand = function (){
  this.cards = [];
};

Hand.prototype.totalValue = function () {
  return this.cards.reduce((total, current) => {
    return total + current.value;
  }, 0)
};

module.exports = Hand;
