const PubSub = require('../helpers/pub_sub.js');

const ButtonsView = function(container){
  this.container = container;
};

ButtonsView.prototype.render = function () {
  this.container.innerHTML = '';
  this.renderHitButton();
  this.renderResultButton();
};

ButtonsView.prototype.renderResultButton = function () {
  const resultButton = document.createElement('button');
  resultButton.textContent = "Stick";
  resultButton.addEventListener('click', () => {
    PubSub.publish("ButtonsView:stick-clicked");
  });
  this.container.appendChild(resultButton);
};

ButtonsView.prototype.renderHitButton = function (){
  const hitButton = document.createElement('button');
  hitButton.textContent = "Hit";
  hitButton.addEventListener('click', () => {
    PubSub.publish("ButtonsView:hit-clicked");
  });
  this.container.appendChild(hitButton);
};

module.exports = ButtonsView;
