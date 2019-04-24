const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function () {

  this.renderPrompt()

  PubSub.subscribe('Game: results-ready', (evt) => {
    const result = evt.detail;
    if (result.gameOver){
      this.renderGameOver(result.result)
    } else {
      this.render(result.result);
    }
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

ResultView.prototype.renderGameOver = function (result) {
  const resultContainer = this.container;

  this.container.innerHTML = "";
  const thisResult = this.buildElement('h2', result);
  resultContainer.appendChild(thisResult);

  const gameOver = this.buildElement('h2', "Game Over");
  resultContainer.appendChild(gameOver);

  console.log('hello');
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

ResultView.prototype.renderPrompt = function () {
  const resultContainer = this.container;

  this.container.innerHTML = "";

  const thisResult = this.buildElement('h2', `Place Your Bets`);
  resultContainer.appendChild(thisResult);
}

module.exports = ResultView;
