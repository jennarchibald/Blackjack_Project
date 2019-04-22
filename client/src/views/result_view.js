const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Game: results-ready', (evt) => {
    const result = evt.detail;
    this.render(result);
  });
  PubSub.subscribe('Game:player-bust', (evt) => {
    this.bustStatus();
  });
};

ResultView.prototype.buildElement = function (type, text) {
  let element = document.createElement(type);
  element.textContent = text;
  return element;
};

ResultView.prototype.render = function (result) {
  const resultContainer = this.container;

  this.container.innerHTML = "";

  const thisResult = this.buildElement('h2', `Result: ${result}`);
  resultContainer.appendChild(thisResult);

  const reloadButton = document.createElement('button');
  reloadButton.textContent = "Play again?"
  reloadButton.addEventListener('click', function(){location.reload()});
  resultContainer.appendChild(reloadButton);
}

// this isn't quite working right - have a think
ResultView.prototype.bustStatus = function () {
  bustStatus = this.buildElement('h2', "You've gone bust!!");
  this.container.appendChild(bustStatus);
}



module.exports = ResultView;
