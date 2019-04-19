const Game = function(deck){
  this.deck = deck
  this.playerHand = []
  this.dealerHand = []
};

// deals two cards to each person, by pushing a dealt card into an array
Game.prototype.openingDeal = function(){
  dealtCards = this.deck.takeCards(2);
  this.playerHand.push(dealtCards);
  dealerCards = this.deck.takeCards(2);
  this.dealerHand.push(dealtCards);
  this.determineWinner();
};

Game.prototype.determineWinner = function(){
  playerHand = this.playerHand.totalValue();
  dealerHand = this.dealerHand.totalValue();
  if (playerHand > dealerHand) {
    return "Player wins";
  } else if (playerHand === dealerHand){
    return "Push";
  } else {
    return "House wins"
  }
};


module.exports = Game;
