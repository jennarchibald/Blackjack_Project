const PubSub = require('../helpers/pub_sub.js');

const HandView = function(container, hand, owner='player') {
  this.container = container;
  this.hand = hand;
  this.owner = owner;

}

HandView.prototype.bindEvents = function() {
  PubSub.subscribe('Game:dealer-dealt-card', (evt)=>{
    if (this.owner == 'dealer') {
      this.hand = evt.detail;
      this.render();
    }
  });
}

HandView.prototype.render = function() {
  this.container.innerHTML = '';
  this.hand.cards.forEach((card)=> {
    const cardImg = document.createElement('img');
    cardImg.src = card.images.png;
    cardImg.classList.add('card')
    this.container.appendChild(cardImg);
  })
}
module.exports = HandView;
