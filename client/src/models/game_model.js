const Deck = require('./deck_model.js');
const Hand = require('./hand_model.js');
const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Game = function(){
  this.deck = null
  this.playerHand = null
  this.dealerHand = null
};

Game.prototype.bindEvents = function(){
  PubSub.subscribe("ButtonsView:show-result-clicked", (evt)=> {
    const result = this.determineWinner();
    PubSub.publish('Game: results-ready', result);
  });
};

Game.prototype.getDeck = function () {
  this.deck = new Deck;
  const request = new RequestHelper('http://localhost:3000/api/deck');
  request.get().then((cards) => {
    this.deck.cards = cards;
    this.openingDeal();
    PubSub.publish('Game:hands-ready', { dealerHand: this.dealerHand, playerHand: this.playerHand});
  }).catch((err) => console.error(err));
};

// creates a new deck and deals two cards to each player
Game.prototype.openingDeal = function(){
  this.deck.shuffle();
  card1 = this.deck.getCard();
  card2 = this.deck.getCard();
  card3 = this.deck.getCard();
  card4 = this.deck.getCard();
  this.playerHand = new Hand(card1, card3);
  this.dealerHand = new Hand(card2, card4);
  console.log(this.playerHand);
  console.log(this.dealerHand);
  console.log(this.determineWinner());
}

//compares values of two hands and returns which is higher
Game.prototype.determineWinner = function(){
  const playerHand = this.playerHand.totalValue();
  const dealerHand = this.dealerHand.totalValue();
  
  if (playerHand > dealerHand) {
    return "Player wins";
  } else if (playerHand === dealerHand){
    return "Push";
  } else {
    return "House wins"
  }
};

Game.prototype.


module.exports = Game;
