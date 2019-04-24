const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Game: results-ready', (evt) => {
    const result = evt.detail;
    this.render(result);
  });

  PubSub.subscribe('Game:game-is-lost', (evt) => {
    this.renderGameOver()
  });

  PubSub.subscribe('BetView:bet-placed', (evt) => {
    const bet = evt.detail;
    this.renderBet(bet);
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

  const thisResult = this.buildElement('h2', result);
  resultContainer.appendChild(thisResult);

  const nextHandButton = document.createElement('button');
  nextHandButton.textContent = "Deal Next Hand"
  nextHandButton.addEventListener('click', function(){
    PubSub.publish('Result:deal-next-hand')
  });
  resultContainer.appendChild(nextHandButton);
}

ResultView.prototype.renderGameOver = function () {
  const gameOver = this.buildElement('h2', "Game Over");
  resultContainer.appendChild(gameOver);


  const reloadButton = document.createElement('button');
  reloadButton.textContent = "Play again?"
  reloadButton.addEventListener('click', function(){location.reload()});
  resultContainer.appendChild(reloadButton);
};

ResultView.prototype.renderBet = function (bet) {
  const resultContainer = this.container;

  this.container.innerHTML = "";

  const thisResult = this.buildElement('h2', `Player bet: ${bet}`);
  resultContainer.appendChild(thisResult);
}

module.exports = ResultView;
