const PubSub = require('../helpers/pub_sub.js')

const TotalView = function (container, owner, total){
  this.container = container;
  this.owner = owner;
  this.total = total;
  this.bustStatus = null;
};

TotalView.prototype.bindEvents = function() {
  PubSub.subscribe('Game:player-bust', (evt) => {
    const bustStatus = document.createElement('h2');
    bustStatus.textContent = "BUST"
    this.bustStatus = bustStatus;
    this.render();
    console.log(this.owner);
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

  if (this.bustStatus) {
    this.container.appendChild(this.bustStatus);
  }


};


module.exports = TotalView;
