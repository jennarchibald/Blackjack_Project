const TotalView = function (container, owner, total){
  this.container = container;
  this.owner = owner;
  this.total = total;
};

TotalView.prototype.render = function () {
  this.container.innerHTML = '';

  const totalContainer = document.createElement('div');
  totalContainer.classList.add(`${owner}-total-container`)
  totalContainer.classList.add(`total-container`)

  this.container.appendChild(totalContainer);

  const ownerHeading = document.createElement('h1');
  ownerHeading.textContent = owner;
  totalContainer.appendChild(ownerHeading);
  
  const totalHeading = document.createElement('h1');
  totalHeading.textContent = `Hand Value: ${total}`;
  totalContainer.appendChild(totalHeading);
};


module.exports = TotalView;
