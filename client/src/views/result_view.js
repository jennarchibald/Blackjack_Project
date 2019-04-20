const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Game: results-ready', (evt) => {
    const result = evt.detail;
    this.render(result);
  });
};

ResultView.prototype.buildElement = function (type, text) {
  let element = document.createElement(type);
  element.textContent = `Result: ${text}`;
  return element;
};

ResultView.prototype.render = function (result) {
  const resultContainer = this.container;

  this.container.innerHTML = "";

  const = thisResult = this.buildElement('h2', result.detail);
  resultContainer.appendChild(thisResult);
}

module.exports = ResultView;
