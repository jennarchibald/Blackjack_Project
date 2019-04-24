const HandView = require('./hand_view.js');
const ButtonsView = require('./buttons_view.js');
const TotalView = require('./total_view.js');
const BetView = require('./bet_view.js');
const PubSub = require('../helpers/pub_sub.js');

const PlayerView = function(container, player, hand){
  this.container = container;
  this.player = player;
  this.hand = hand;
  this.betDisabled = false;
  this.buttonsDisabled = true;
  this.revealCards = false
};

PlayerView.prototype.bindEvents = function(){
  PubSub.subscribe('Game:player-hand-ready', (evt) => {
    this.hand = evt.detail
    this.render();
  })
  PubSub.subscribe("BetView:bet-placed", (evt) => {
    this.betDisabled = true;
    this.buttonsDisabled = false;
  })
  PubSub.subscribe('BetView:bet-placed', (evt) => {
    this.revealCards = true;
    this.render();
  })
};

PlayerView.prototype.render = function () {
  this.container.innerHTML = '';
  const totalContainer = this.makeContainer('player-total')
  const totalView = new TotalView(totalContainer, 'Player', this.hand.totalValue());
  totalView.bindEvents();


  const handContainer = this.makeContainer('player-hand');
  const handView = new HandView(handContainer, this.hand);

  const buttonsContainer = this.makeContainer('buttons');
  const buttonsView = new ButtonsView(buttonsContainer);

  if (this.revealCards){
    handView.render();
    buttonsView.render();
    totalView.render(true);

    buttonsView.bindEvents();
  } else {
    totalView.render()
  }


  const betContainer = this.makeContainer('bets');
  const betView = new BetView(betContainer, this.player, this.betDisabled);
  betView.bindEvents();
  betView.render();
};

PlayerView.prototype.makeContainer = function (containerClass) {
  const container = document.createElement('div');
  container.classList.add(containerClass);
  this.container.appendChild(container);
  return container;
};

module.exports = PlayerView;
