const HandView = require('./hand_view.js');
const TotalView = require('./total_view.js');
const PubSub = require('../helpers/pub_sub.js');

const DealerView = function(container, hand){
  this.container = container;
  this.hand = hand;
};

DealerView.prototype.bindEvents = function() {
    PubSub.subscribe('Game:dealer-dealt-card', (evt)=>{
      this.render();
      PubSub.publish('GameView:dealer-card-displayed');
    });
  };

DealerView.prototype.render = function () {
  this.container.innerHTML = '';
  const totalContainer = this.makeContainer('player-total')
  const totalView = new TotalView(totalContainer, 'Dealer', this.hand.totalValue());
  totalView.render();
  const handContainer = this.makeContainer('dealer-hand');
  const handView = new HandView(handContainer, this.hand);
  handView.render();
};

DealerView.prototype.makeContainer = function (containerClass) {
  const container = document.createElement('div');
  container.classList.add(containerClass);
  this.container.appendChild(container);
  return container;
};

module.exports = DealerView;
