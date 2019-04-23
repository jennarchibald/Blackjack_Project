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
    this.bustStatus = bustStatus;
        console.log('player working');
    this.render();

  });
  PubSub.subscribe('Game:dealer-bust', (evt) => {
    const bustStatusDealer = document.createElement('h2');
    bustStatusDealer.textContent = "BUST"
    this.bustStatusDealer = bustStatusDealer;
    console.log('dealer working');
    this.render();

  });
}

TotalView.prototype.render = function () {
  this.container.innerHTML = '';

  const ownerHeading = document.createElement('h2');
  ownerHeading.textContent = this.owner;
  this.container.appendChild(ownerHeading);

  const totalHeading = document.createElement('h4');
  totalHeading.textContent = `Hand Value: ${this.total}`;
  this.container.appendChild(totalHeading);

  if (this.bustStatus && this.owner === "Player") {
    this.container.appendChild(this.bustStatus);
  }

  if (this.bustStatusDealer && this.owner == "Dealer") {
    console.log('working');
    this.container.appendChild(this.bustStatusDealer);
  }



};


module.exports = TotalView;
