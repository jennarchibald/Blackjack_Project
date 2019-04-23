const PubSub = require('../helpers/pub_sub.js');

const BetView = function (container) {
  this.container = container;
  this.betValue = 0;
  this.wallet = 0;
};

BetView.prototype.bindEvents = function () {
  PubSub.subscribe('Game:wallet-updated', (evt) => {
    this.wallet = evt.detail;
    this.render();
  });
  PubSub.subscribe('Game:bet-changed', (evt) => {
    this.betValue = evt.detail;
    this.render();
  });
};

BetView.prototype.render = function () {
  this.container.innerHTML = '';
  this.renderBetButton(1);
  this.renderBetButton(5);
  this.renderBetButton(10);
  this.renderPlaceBet('Place Bet');
  this.renderCurrentBet(this.betValue);
  this.renderWallet(this.wallet);
  this.renderReset('Reset Bet');
};

BetView.prototype.renderBetButton = function (value) {
  const betButton = document.createElement("button");
  betButton.textContent = value;
  betButton.id = value;
  betButton.classList.add('bet-buttons')
  betButton.addEventListener('click', (evt) => {
    PubSub.publish("BetView:bet-increased", betButton.id);
  });
  this.container.appendChild(betButton)
}

BetView.prototype.renderPlaceBet = function (value) {
  const placeBet = document.createElement("button");
  placeBet.textContent = value;
  placeBet.classList.add('place-bet');
  placeBet.addEventListener('click', () => {
    PubSub.publish("BetView:bet-placed", this.betValue);
  });
  this.container.appendChild(placeBet);
}

BetView.prototype.renderCurrentBet = function (value) {
  const currentBet = document.createElement("h4");
  currentBet.textContent = `Current bet: ${value}`;
  currentBet.classList.add('current-bet');
  this.container.appendChild(currentBet);
};

BetView.prototype.renderReset = function () {
  const resetBet = document.createElement("button");
  resetBet.textContent = `Reset Bet`;
  resetBet.addEventListener('click', () => {
    PubSub.publish("BetView:reset-bet")
  });
  this.container.appendChild(resetBet);
};

BetView.prototype.renderWallet = function (value) {
  const currentWallet = document.createElement("h4");
  currentWallet.textContent = `Current Wallet: ${value}`;
  currentWallet.classList.add('current-wallet');
  this.container.appendChild(currentWallet);
};

PubSub.subscribe('Game:not-enough-money', (evt) => {
  const insufficientFunds = document.createElement("h4");
  insufficientFunds.textContent = evt.value;
  insufficientFunds.classList.add('insufficient-funds');
  this.container.appendChild(insufficientFunds);
})

module.exports = BetView;
