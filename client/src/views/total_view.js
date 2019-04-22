const TotalView = function (container, owner, total){
  this.container = container;
  this.owner = owner;
  this.total = total;
};

TotalView.prototype.render = function () {
  this.container.innerHTML = '';

  const ownerHeading = document.createElement('h2');
  ownerHeading.textContent = this.owner;
  this.container.appendChild(ownerHeading);

  const totalHeading = document.createElement('h4');
  totalHeading.textContent = `Hand Value: ${this.total}`;
  this.container.appendChild(totalHeading);
};


module.exports = TotalView;
