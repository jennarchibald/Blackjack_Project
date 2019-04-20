const PubSub = require('../helpers/buttons_view.js');

const ButtonsView = function(container){
  this.container = container;
};

ButtonsView.prototype.render = function () {
  this.renderResultButton()
};

ButtonsView.prototype.renderResultButton = function () {
  const resultButton = document.createElement('button');
  resultButton.textContent = "Show Result";
  resultButton.addEventListener('click', () => {
    PubSub.publish("ButtonsView:show-result-clicked");
  });
  this.container.appendChild(resultButton);
};

module.exports = ButtonsView;
