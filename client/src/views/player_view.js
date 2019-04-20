const HandView = require('./hand_view.js');
const ButtonsView = require('./buttons_view.js');

const PlayerView = function(container, hand){
  this.container = container;
  this.hand = hand;
};

PlayerView.prototype.render = function () {
  const handContainer = this.makeContainer('player-hand');
  const handView = new HandView(handContainer, this.hand);
  handView.render();

  const buttonsContainer = this.makeContainer('buttons');
  const buttonsView = new ButtonsView(buttonsContainer);
  buttonsView.render();
};

PlayerView.prototype.makeContainer = function (containerClass) {
  const container = document.createElement('div');
  container.classList.add(containerClass);
  this.container.appendChild(container);
  return container;
};

module.exports = PlayerView;
