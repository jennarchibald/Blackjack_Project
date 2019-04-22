const PubSub = require('../helpers/pub_sub.js');

const HandView = function(container, hand) {
  this.container = container;
  this.hand = hand;
}


HandView.prototype.render = function() {
  this.container.innerHTML = '';
  this.hand.cards.forEach((card)=> {
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('card-wrapper')
    this.container.appendChild(imgDiv);
    const cardImg = document.createElement('img');
    cardImg.src = card.images.png;
    cardImg.classList.add('card')
    imgDiv.appendChild(cardImg);
  })
}
module.exports = HandView;
