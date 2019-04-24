const Hand = function (){
  this.cards = [];
};

//gives the running sum total of the hand
Hand.prototype.totalValue = function () {
  return this.cards.reduce((total, current) => {
    return total + current.value;
  }, 0)
};

//checks if the hand is over 21 and calls the function to change ace from 11 to 1
Hand.prototype.checkForBust = function () {
  const bustResult = this.checkOver21();
  if (bustResult) {
    this.acesLow();
  };
  return this.checkOver21();
}

//checks for the hand total being over 21
Hand.prototype.checkOver21 = function () {
  const newTotal = this.totalValue();
  return newTotal > 21;
}

//changes the value of an ace from 11 to 1
Hand.prototype.acesLow = function () {
  const ace = this.cards.find((card) => {
    return card.value === 11;
  });
  if (ace) {
    ace.value = 1;
  };
};

module.exports = Hand;
