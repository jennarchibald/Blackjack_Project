const Deck = require('./deck_model.js')
const Hand = require('./hand_model.js')

const Game = function(){
  this.deck = null
  this.playerHand = null
  this.dealerHand = null
};

// creates a new deck and deals two cards to each player
Game.prototype.openingDeal = function(){
  this.deck = new Deck;
  card1 = this.deck.getCard();
  card2 = this.deck.getCard();
  card3 = this.deck.getCard();
  card4 = this.deck.getCard();
  this.playerHand = new Hand(card1, card3);
  this.dealerHand = new Hand(card2, card4);

}

//compares values of two hands and returns which is higher
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
