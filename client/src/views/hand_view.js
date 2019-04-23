const PubSub = require('../helpers/pub_sub.js');

const HandView = function(container, hand, firstCardDown = false) {
  this.container = container;
  this.hand = hand;
  this.firstCardDown = firstCardDown;
}


HandView.prototype.render = function() {
  this.container.innerHTML = '';
  this.hand.cards.forEach((card, index)=> {
    if (index === 0 && this.firstCardDown){
      this.makeImg('images/back-of-card.png')
    } else {
      this.makeImg(card.images.png)
    }
  })
}

HandView.prototype.makeImg = function (src) {
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('card-wrapper')
  this.container.appendChild(imgDiv);
  const cardImg = document.createElement('img');
  cardImg.src = src;
  cardImg.classList.add('card')
  imgDiv.appendChild(cardImg);
};


module.exports = HandView;
