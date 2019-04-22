const HandView = require('./hand_view.js');
const ButtonsView = require('./buttons_view.js');
const TotalView = require('./total_view.js');
const PubSub = require('../helpers/pub_sub.js');

const PlayerView = function(container, hand){
  this.container = container;
  this.hand = hand;
};

PlayerView.prototype.bindEvents = function(){
  PubSub.subscribe('Game:player-hand-ready', (evt) => {
    this.hand = evt.detail
    this.render();
  })
};

PlayerView.prototype.render = function () {
  this.container.innerHTML = '';
  const totalContainer = this.makeContainer('player-total')
  const totalView = new TotalView(totalContainer, 'Player', this.hand.totalValue());
  totalView.render();

  const handContainer = this.makeContainer('player-hand');
  const handView = new HandView(handContainer, this.hand);
  handView.render();

  const buttonsContainer = this.makeContainer('buttons');
  const buttonsView = new ButtonsView(buttonsContainer);
  buttonsView.render();
  buttonsView.bindEvents();
};

PlayerView.prototype.makeContainer = function (containerClass) {
  const container = document.createElement('div');
  container.classList.add(containerClass);
  this.container.appendChild(container);
  return container;
};

module.exports = PlayerView;
