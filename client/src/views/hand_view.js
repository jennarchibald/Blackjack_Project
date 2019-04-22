const PubSub = require('../helpers/pub_sub.js');

const HandView = function(container, hand, owner='player') {
  this.container = container;
  this.hand = hand;
  this.owner = owner;

}

HandView.prototype.bindEvents = function() {
  if (this.owner == 'dealer') {
    PubSub.subscribe('Game:dealer-dealt-card', (evt)=>{
      this.render();
      PubSub.publish('GameView:dealer-card-displayed');
    });
  }
}


HandView.prototype.render = function() {
  this.container.innerHTML = '';
  this.hand.cards.forEach((card)=> {
    const time = this.hand.cards.length;
    const cardImg = document.createElement('img');
    cardImg.src = card.images.png;
    cardImg.classList.add('card')
    this.container.appendChild(cardImg);
  })
}
module.exports = HandView;
