const PubSub = require('../helpers/pub_sub.js')

const TotalView = function (container, owner, total){
  this.container = container;
  this.owner = owner;
  this.total = total;
  this.bustStatus = null;
  this.bustStatusDealer = null;
};

TotalView.prototype.bindEvents = function() {
  PubSub.subscribe('Game:player-bust', (evt) => {
    const bustStatus = document.createElement('h2');
    bustStatus.textContent = "BUST"
    bustStatus.classList.add('bust')
    this.bustStatus = bustStatus;
    this.render();

  });
  PubSub.subscribe('Game:dealer-bust', (evt) => {
    const bustStatusDealer = document.createElement('h2');
    bustStatusDealer.textContent = "BUST"
    bustStatusDealer.classList.add('bust')
    this.bustStatusDealer = bustStatusDealer;
    this.render();

  });
}

TotalView.prototype.render = function (reveal) {
  this.container.innerHTML = '';

  const ownerHeading = document.createElement('h2');
  ownerHeading.textContent = this.owner;
  this.container.appendChild(ownerHeading);

  if (reveal) {

    const totalHeading = document.createElement('h4');
    totalHeading.textContent = `Hand Value: ${this.total}`;
    this.container.appendChild(totalHeading);
  }

  if (this.bustStatus && this.owner === "Player") {
    this.container.appendChild(this.bustStatus);
  }

  if (this.bustStatusDealer && this.owner == "Dealer") {
    this.container.appendChild(this.bustStatusDealer);
  }

};


module.exports = TotalView;
