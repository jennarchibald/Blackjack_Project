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
  PubSub.subscribe("ButtonsView:stick-clicked", (evt)=> {
    this.dealersTurn();

  });
  PubSub.subscribe("ButtonsView:hit-clicked", (evt) => {

    this.dealCard('playerHand');
    PubSub.publish('Game:player-hand-ready', this.playerHand);

    if (this.playerHand.checkForBust()){
      PubSub.publish('Game:player-bust');
      this.dealersTurn();
    }
  });

  PubSub.subscribe('GameView:dealer-card-displayed', (evt) => {
    this.dealersTurn();
  })
}

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
  this.playerHand = new Hand();
  this.dealerHand = new Hand();
  this.dealCard('playerHand');
  this.dealCard('dealerHand');
  this.dealCard('playerHand');
  this.dealCard('dealerHand');
}

// plays the dealers turn
Game.prototype.dealersTurn = function () {
  if (this.dealerHand.totalValue() < 17){
    this.dealCard('dealerHand');
    window.setTimeout(this.publishDealerCard, 1000)
  } else {
    const result = this.determineWinner();
    window.setTimeout(() => {
      PubSub.publish('Game: results-ready', result);
    }, 1000);
  };
};

// publishes when the dealer has a new card
Game.prototype.publishDealerCard = function (){
  PubSub.publish("Game:dealer-dealt-card");
};


// deals a card to a specified hand
Game.prototype.dealCard = function(handOwner){
  const card = this.deck.getCard();
  this[handOwner].cards.push(card);
  this[handOwner].checkForBust();
  return card;
};

//compares values of two hands and returns which is higher
Game.prototype.determineWinner = function(){
  const playerHand = this.playerHand.totalValue();
  const dealerHand = this.dealerHand.totalValue();
  if (this.playerHand.checkForBust()){
    return "House wins"
  } else if (this.dealerHand.checkForBust()){
    return "Player wins";
  } else {
    if (playerHand > dealerHand) {
      return "Player wins";
    } else if (dealerHand > playerHand){
      return "House wins"
    } else {
      return "Push";
    }
  }
};

module.exports = Game;
