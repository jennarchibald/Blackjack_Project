const Deck = require('./deck_model.js');
const Hand = require('./hand_model.js');
const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');
const Player = require('./player_model.js');

const Game = function(){
  this.deck = null
  this.player = null
  this.dealer = {hand: null}
};

Game.prototype.bindEvents = function(){
  PubSub.subscribe("ButtonsView:stick-clicked", (evt)=> {
    this.dealersTurn();

  });
  PubSub.subscribe("ButtonsView:hit-clicked", (evt) => {

    this.dealCard('playerHand');
    PubSub.publish('Game:player-hand-ready', this.player.hand);

    if (this.player.hand.checkForBust()){
      PubSub.publish('Game:player-bust');
      this.dealersTurn();
    }
  });

  PubSub.subscribe('GameView:dealer-card-displayed', (evt) => {
    this.dealersTurn();
  })
}

Game.prototype.getPlayer = function() {
  this.player = new Player();

}

Game.prototype.getDeck = function () {
  this.deck = new Deck;
  const request = new RequestHelper('http://localhost:3000/api/deck');
  request.get().then((cards) => {
    this.deck.cards = cards;
    this.openingDeal();
    PubSub.publish('Game:hands-ready', { dealerHand: this.dealer.hand, playerHand: this.player.hand});
  }).catch((err) => console.error(err));
};

// creates a new deck and deals two cards to each player
Game.prototype.openingDeal = function(){
  this.deck.shuffle();
  this.player.hand = new Hand();
  this.dealer.hand = new Hand();
  this.dealCard('player');
  this.dealCard('dealer');
  this.dealCard('player');
  this.dealCard('dealer');
}

// plays the dealers turn
Game.prototype.dealersTurn = function () {
  if (this.dealer.hand.totalValue() < 17){
    this.dealCard('dealer.hand');
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
  this[handOwner].hand.cards.push(card);
  this[handOwner].hand.checkForBust();
  return card;
};

//compares values of two hands and returns which is higher
Game.prototype.determineWinner = function(){
  const playerHand = this.player.hand.totalValue();
  const dealerHand = this.dealer.hand.totalValue();
  if (this.player.hand.checkForBust()){
    return "House wins"
  } else if (this.dealer.hand.checkForBust()){
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

//When a bet is made
Game.prototype.handleBet = function () {
  PubSub.subscribe("BetView:place_bet", (evt, value) => {

  })
}


module.exports = Game;
