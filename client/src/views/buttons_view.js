const PubSub = require('../helpers/pub_sub.js');

const ButtonsView = function(container, disabled){
  this.container = container;
  this.disabled = disabled;
  this.hitSound = new Audio('sounds/deal.wav');
  this.stickSound = new Audio('sounds/stick.wav')
};

ButtonsView.prototype.bindEvents = function () {
  PubSub.subscribe('Game:player-bust', (evt) => {
    this.disabled = true;
    this.render()
  })

};

ButtonsView.prototype.render = function () {
  this.container.innerHTML = '';
  this.renderHitButton();
  this.renderResultButton();
};

//renders the stick button. disabled until a bet is made
ButtonsView.prototype.renderResultButton = function () {
  const resultButton = document.createElement('button');
  resultButton.textContent = "Stick";
  resultButton.classList.add('player-buttons');
  resultButton.disabled = this.disabled;
  resultButton.addEventListener('click', () => {
    this.stickSound.play();
    PubSub.publish("ButtonsView:stick-clicked");

  });
  resultButton.addEventListener('click', () => {
    this.disabled = true;
    this.render()
  })
  this.container.appendChild(resultButton);
};

//renders the hit button. disbaled until a bet is placed
ButtonsView.prototype.renderHitButton = function (){
  const hitButton = document.createElement('button');
  hitButton.textContent = "Hit";
  hitButton.classList.add('player-buttons');
  hitButton.disabled = this.disabled;
  hitButton.addEventListener('click', () => {
    this.hitSound.play()
    PubSub.publish("ButtonsView:hit-clicked");
  });
  this.container.appendChild(hitButton);
};

module.exports = ButtonsView;
