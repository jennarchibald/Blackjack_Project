const HandView = function(container, hand) {
  this.container = container;
  this.hand = hand;

}

HandView.prototype.render = function() {
  this.hand.cards.forEach((card)=> {
    const cardImg = document.createElement('img');
    cardImg.src = card.images.png;
    cardImg.classList.add('card')
    this.container.appendChild(cardImg);
  })
}
module.exports = HandView;
