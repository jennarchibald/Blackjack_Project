const PubSub = require('../helpers/pub_sub.js');

const ButtonsView = function(container){
  this.container = container;
};

ButtonsView.prototype.bindEvents = function () {
  PubSub.subscribe('Game:player-bust', (evt) => {
    this.disableButtons();
  })
};

ButtonsView.prototype.render = function () {
  this.container.innerHTML = '';
  this.renderHitButton();
  this.renderResultButton();
};

ButtonsView.prototype.renderResultButton = function () {
  const resultButton = document.createElement('button');
  resultButton.textContent = "Stick";
  resultButton.classList.add('player-buttons');
  resultButton.addEventListener('click', () => {
    PubSub.publish("ButtonsView:stick-clicked");
  });
  resultButton.addEventListener('click', () => {
    this.disableButtons();
  })
  this.container.appendChild(resultButton);
};

ButtonsView.prototype.renderHitButton = function (){
  const hitButton = document.createElement('button');
  hitButton.textContent = "Hit";
  hitButton.classList.add('player-buttons');
  hitButton.addEventListener('click', () => {
    PubSub.publish("ButtonsView:hit-clicked");
  });
  this.container.appendChild(hitButton);
};

ButtonsView.prototype.disableButtons = function (){
  buttons = document.querySelectorAll('.player-buttons');
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

module.exports = ButtonsView;
