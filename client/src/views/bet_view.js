const PubSub = require('../helpers/pub_sub.js');

const BetView = function (container, player, disabled) {
  this.container = container;
  this.betValue = 0;
  this.wallet = player.wallet
  this.disabled = disabled;
};

BetView.prototype.bindEvents = function () {
  PubSub.subscribe('Game:wallet-updated', (evt) => {
    const walletAmount = evt.detail
    this.wallet = parseInt(walletAmount, 10);
    this.render();
  });
  PubSub.subscribe('Game:bet-changed', (evt) => {
    this.betValue = evt.detail;
    this.render();
  });
  PubSub.subscribe('Game:not-enough-money', (evt) => {
    this.insufficientFunds(evt.detail);
  })
};

BetView.prototype.render = function () {
  this.container.innerHTML = '';
  this.renderBetButton(1);
  this.renderBetButton(5);
  this.renderBetButton(10);
  this.renderPlaceBet('Place Bet');
  this.renderCurrentBet(this.betValue);
  this.renderWallet(this.wallet);
  this.renderReset();
};

BetView.prototype.renderBetButton = function (value) {
  const betButton = document.createElement("button");
  betButton.textContent = value;
  betButton.id = value;
  betButton.classList.add('bet-buttons')
  betButton.disabled = this.disabled;
  betButton.addEventListener('click', (evt) => {
    PubSub.publish("BetView:bet-increased", betButton.id);
  });
  this.container.appendChild(betButton)
}

BetView.prototype.renderPlaceBet = function (value) {
  const placeBet = document.createElement("button");
  placeBet.textContent = value;
  placeBet.classList.add('place-bet');
  placeBet.disabled = this.disabled;
  placeBet.addEventListener('click', () => {
    if (this.betValue > 0){
      PubSub.publish("BetView:bet-placed", this.betValue);
      this.disabled = true;
      this.betValue = 0;
      this.render()
    }
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
  resetBet.disabled = this.disabled;
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

BetView.prototype.insufficientFunds = function(message){
  const insufficientFunds = document.createElement("h4");
  insufficientFunds.textContent = message;
  insufficientFunds.classList.add('insufficient-funds');
  this.container.appendChild(insufficientFunds);
  window.setTimeout(() => {
    this.container.removeChild(insufficientFunds)
  }, 800);
};

module.exports = BetView;
