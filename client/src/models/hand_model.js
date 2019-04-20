const Hand = function (){
  this.cards = [];
};

Hand.prototype.totalValue = function () {
  return this.cards.reduce((total, current) => {
    return total + current.value;
  }, 0)
};

Hand.prototype.checkForBust = function () {
  const bustResult = this.checkOver21();
  if (bustResult) {
    this.acesLow();
  };
  return this.checkOver21();
}

Hand.prototype.checkOver21 = function () {
  const newTotal = this.totalValue();
  return newTotal > 21;
}

Hand.prototype.acesLow = function () {
  const ace = this.cards.find((card) => {
    return card.value === 11;
  });
  console.log(ace);
  const index = this.cards.indexOf(ace)
  this.cards[index].value = 1;
};

module.exports = Hand;
