const PubSub = require('../helpers/pub_sub.js');

const BetView = function (container) {
  this.container = container;
  this.betValue = 0;
};

BetView.prototype.render = function () {
  this.container.innerHTML = '';
  this.renderBetButton(1);
  this.renderBetButton(5);
  this.renderBetButton(10);
  this.renderPlaceBet('Place Bet');
};

BetView.prototype.renderBetButton = function (value) {
  const betButton = document.createElement("button");
  betButton.textContent = value;
  betButton.value = value;
  betButton.classList.add('bet-buttons')
  betButton.addEventListener('click', () => {
    this.betValue += betButton.value;
    this.renderCurrentBet(betbutton.value);
  });
  this.container.appendChild(betButton)
}

BetView.prototype.renderPlaceBet = function (value) {
  const placeBet = document.createElement("button");
  placeBet.textContent = value;
  placeBet.classList.add('place-bet');
  placeBet.addEventListener('click', () => {
    PubSub.publish("BetView:place_bet", this.betValue);
  });
  this.container.appendChild(placeBet);
}

BetView.prototype.renderCurrentBet = function (value) {
  const currentBet = document.createElement("h4");
  currentBet.textContent = `Current bet: ${value}`;
  currentBet.classList.add('current-bet');
  this.container.appendChild(currentBet);
};


module.exports = BetView;
