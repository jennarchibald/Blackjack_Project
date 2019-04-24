const PubSub = require('../helpers/pub_sub.js');

const ButtonsView = function(container, disabled){
  this.container = container;
  this.disabled = disabled;
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

ButtonsView.prototype.renderResultButton = function () {
  const resultButton = document.createElement('button');
  resultButton.textContent = "Stick";
  resultButton.classList.add('player-buttons');
  resultButton.disabled = this.disabled;
  resultButton.addEventListener('click', () => {
    PubSub.publish("ButtonsView:stick-clicked");
  });
  resultButton.addEventListener('click', () => {
    this.disabled = true;
    this.render()
  })
  this.container.appendChild(resultButton);
};

ButtonsView.prototype.renderHitButton = function (){
  const hitButton = document.createElement('button');
  hitButton.textContent = "Hit";
  hitButton.classList.add('player-buttons');
  hitButton.disabled = this.disabled;
  hitButton.addEventListener('click', () => {
    PubSub.publish("ButtonsView:hit-clicked");
  });
  this.container.appendChild(hitButton);
};

// ButtonsView.prototype.disableButtons = function (){
//   buttons = document.querySelectorAll('.player-buttons');
//   buttons.forEach((button) => {
//     button.disabled = true;
//   });
// };
//
// ButtonsView.prototype.enableButtons = function (){
//   buttons = document.querySelectorAll('.player-buttons');
//   buttons.forEach((button) => {
//     button.disabled = false;
//   });
// };

module.exports = ButtonsView;
