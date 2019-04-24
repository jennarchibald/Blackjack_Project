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
  this.renderCurrentBet(this.betValue);
  this.renderWallet(this.wallet);
  this.renderButtons();
  this.renderPlaceBet('Place Bet');
  this.renderReset();
};


BetView.prototype.renderButtons = function () {
  const div = document.createElement('div');
  div.classList.add('bet-buttons-container');
  this.container.appendChild(div);
  this.renderBetButton(1, div);
  this.renderBetButton(5, div);
  this.renderBetButton(10, div);
};

BetView.prototype.renderBetButton = function (value, container) {
  const betButton = document.createElement("button");
  betButton.textContent = value;
  betButton.id = value;
  betButton.classList.add('bet-buttons')
  betButton.disabled = this.disabled;
  betButton.addEventListener('click', (evt) => {
    PubSub.publish("BetView:bet-increased", betButton.id);
  });
  container.appendChild(betButton)
}

//renders the place bet button. disabled unless bet is greater than 0
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

//shows the value of the current bet
BetView.prototype.renderCurrentBet = function (value) {
  const currentBet = document.createElement("h4");
  currentBet.textContent = `Current bet: ${value}`;
  currentBet.classList.add('current-bet');
  this.container.appendChild(currentBet);
};

//renders the button which will reset the bet to zero
BetView.prototype.renderReset = function () {
  const resetBet = document.createElement("button");
  resetBet.textContent = `Reset Bet`;
  resetBet.disabled = this.disabled;
  resetBet.addEventListener('click', () => {
    PubSub.publish("BetView:reset-bet")
  });
  this.container.appendChild(resetBet);
};

//renders the current value of the wallet
BetView.prototype.renderWallet = function (value) {
  const currentWallet = document.createElement("h4");
  currentWallet.textContent = `Current Wallet: ${value}`;
  currentWallet.classList.add('current-wallet');
  this.container.appendChild(currentWallet);
};

//redners the warning about not having enough money to make that bet
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
