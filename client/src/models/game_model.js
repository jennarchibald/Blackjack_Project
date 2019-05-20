const Deck = require('./deck_model.js');
const Hand = require('./hand_model.js');
const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');
const Player = require('./player_model.js');

const Game = function(){
  this.deck = null
  this.player = null
  this.dealer = {hand: null}
  this.intendedBet = null
  this.actualBet = null
  this.over = false;
  this.wait = false;
  // this.winSound = new Audio('sounds/win.mp3');
  // this.hitSound = new Audio('sounds/deal.wav');


};

Game.prototype.bindEvents = function(){
  PubSub.subscribe('DealerView:dealers-cards-revealed', (evt)=> {
    this.dealersTurn();
  });

  PubSub.subscribe('GameView:dealer-card-displayed', (evt) => {
    this.dealersTurn();
  });
  PubSub.subscribe("ButtonsView:hit-clicked", (evt) => {
    this.dealCard('player');
    if (this.player.hand.checkForBust()){
      PubSub.publish('Game:player-hand-ready', this.player.hand);
      PubSub.publish('Game:player-bust');
    } else {
      PubSub.publish('Game:player-hand-ready', this.player.hand);
    }
  });
  PubSub.subscribe("BetView:bet-increased", (evt) => {
    this.checkMoneyForBet(evt.detail);
  });

  PubSub.subscribe("BetView:reset-bet", (evt) => {
    this.resetBet();
  });
  PubSub.subscribe("BetView:bet-placed", (evt) => {
    this.actualBet = evt.detail;
    this.player.placeBet(this.actualBet);
    this.resetBet()
    PubSub.publish('Game:wallet-updated', this.player.wallet);
  })
  PubSub.subscribe('Result:deal-next-hand', (evt) => {
    this.openingDeal()
    PubSub.publish('Game:hands-ready', { dealerHand: this.dealer.hand, player: this.player});
  })
};

Game.prototype.newPlayer = function() {
  this.player = new Player();
  this.player.save();
};

//pulls the deck
Game.prototype.getDeck = function () {
  this.deck = new Deck;
  const request = new RequestHelper('http://localhost:3000/api/deck');
  request.get().then((cards) => {
    this.deck.cards = cards;
    this.openingDeal();
    PubSub.publish('Game:start-game', { dealerHand: this.dealer.hand, player: this.player});
  }).catch((err) => console.error(err));
};

// shuffles the deck and deals two cards to each player
Game.prototype.openingDeal = function(){
  this.over = false;
  this.intendedBet = null;
  this.actualBet = null;
  this.deck.shuffle();
  this.player.hand = new Hand();
  this.dealer.hand = new Hand();
  this.dealCard('player');
  this.dealCard('dealer');
  this.dealCard('player');
  this.dealCard('dealer');
};

// plays the dealers turn
Game.prototype.dealersTurn = function () {
  if (!this.wait) {
    if (this.dealer.hand.totalValue() < 17){

      this.dealCard('dealer');
      window.setTimeout(this.publishDealerCard, 1000)
      this.publishDealerBust()

    } else if (!this.over){
      const result = this.determineWinner();
      window.setTimeout(() => {
        PubSub.publish('Game: results-ready', result);
      }, 1000);
    };
  this.wait = true;
  window.setTimeout(() => {
    this.wait = false;
  }, 700)
  }
};

// publishes when the dealer has a new card
Game.prototype.publishDealerCard = function (){
  PubSub.publish("Game:dealer-dealt-card");
};

// publishes when the dealer has gone bust
Game.prototype.publishDealerBust = function (){
  if (this.dealer.hand.checkForBust()){
    window.setTimeout(() => {
      PubSub.publish("Game:dealer-bust");
    }, 1000)
  }
};


// deals a card to a specified hand
Game.prototype.dealCard = function(handOwner){
  const card = this.deck.getCard();
  this[handOwner].hand.cards.push(card);
  this[handOwner].hand.checkForBust();
  this[handOwner].hand.checkForBlackjack();
  return card;
};

//compares values of two hands and returns which is higher
Game.prototype.determineWinner = function(){
  this.over = true;
  const playerHand = this.player.hand.totalValue();
  const dealerHand = this.dealer.hand.totalValue();
  const result = {}

  if (this.player.hand.isBlackjack && !this.dealer.hand.isBlackjack){
    this.winBlackjack();
    result.result = `BLACKJACK! You Win: ${this.actualBet*3}`
    // this.winSound.play()
  } else if (this.player.hand.checkForBust()){
    result.result = "House Wins"
  } else if (this.dealer.hand.checkForBust()){
    this.winCondition();
    result.result = `You Win: ${this.actualBet*2}`;
    // this.winSound.play()
  } else {
      if (playerHand > dealerHand) {
      this.winCondition();
      result.result = `You Win: ${this.actualBet*2}`;
      // this.winSound.play()
    } else if (dealerHand > playerHand){
      result.result = "House Wins"
    } else if (dealerHand == playerHand && this.dealer.hand.isBlackjack){
      result.result = "Dealer BLACKJACK, House Wins"
    } else {
      this.gameIsDraw()
      result.result = "Push";
      // this.winSound.play()
    }


  }
  result.gameOver = this.gameIsLost()
  return result;
};

//checks if the players wallet has enough in it for the player to post the bet
Game.prototype.checkMoneyForBet = function (amount){
  const bet = this.intendedBet + parseInt(amount, 10);
  if (this.player.wallet >= bet) {
    this.intendedBet = bet;
    PubSub.publish('Game:bet-changed', this.intendedBet)
  } else {
    PubSub.publish('Game:not-enough-money', "You don't have enough money in your wallet");
  };
};


//resets the intended bet to zero after placing the bet.
  Game.prototype.resetBet = function (){
    this.intendedBet = 0;
    PubSub.publish('Game:bet-changed', this.intendedBet);
  };

//returns 2:1 winnings on a win
  Game.prototype.winCondition = function (){
    const winnings = (this.actualBet * 2);
    this.player.winMoney(winnings);
    PubSub.publish('Game:wallet-updated', this.player.wallet);
  };

//returns 2:1 winnings on a win for Blackjack
  Game.prototype.winBlackjack = function (){
    const winningsBlackjack = (this.actualBet * 3);
    this.player.winMoney(winningsBlackjack);
    PubSub.publish('Game:wallet-updated', this.player.wallet);
  };

//affects the players wallet on a lose condition
  Game.prototype.gameIsLost = function () {
    return (this.player.wallet < 1);
  };

  Game.prototype.gameIsDraw = function (){
    const bet = this.actualBet;
    this.player.winMoney(bet);
    PubSub.publish('Game:wallet-updated', this.player.wallet);
  }

  //check if the hand is BLACKJACK
  Game.prototype.checkHandsForBlackjack = function (){
    this.player.hand.checkForBlackjack();
    this.dealer.hand.checkForBlackjack();
  }


module.exports = Game;
