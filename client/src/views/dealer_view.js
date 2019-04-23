const HandView = require('./hand_view.js');
const TotalView = require('./total_view.js');
const PubSub = require('../helpers/pub_sub.js');

const DealerView = function(container, hand){
  this.container = container;
  this.hand = hand;
};

DealerView.prototype.bindEvents = function() {
    PubSub.subscribe('Game:dealer-dealt-card', (evt)=>{
      this.render(false);
      PubSub.publish('GameView:dealer-card-displayed');
    });

    PubSub.subscribe("ButtonsView:stick-clicked" , (evt) => {
      window.setTimeout(() => {
        this.render();
        PubSub.publish('DealerView:dealers-cards-revealed')
      }, 1000)
    });
    PubSub.subscribe('Game:player-bust' , (evt) => {
      window.setTimeout(() => {
        this.render();
        PubSub.publish('DealerView:dealers-cards-revealed')
      }, 1000)
    });
  };

DealerView.prototype.render = function (firstCardDown) {
  this.container.innerHTML = '';
  const totalContainer = this.makeContainer('dealer-total')
  let total = this.hand.totalValue();
  if (firstCardDown) { total = '???'  }
  const totalView = new TotalView(totalContainer, 'Dealer', total);
  totalView.render();
  const handContainer = this.makeContainer('dealer-hand');
  const handView = new HandView(handContainer, this.hand, firstCardDown);
  handView.render();
};


DealerView.prototype.handFirstCardDown = function () {

};

DealerView.prototype.makeContainer = function (containerClass) {
  const container = document.createElement('div');
  container.classList.add(containerClass);
  this.container.appendChild(container);
  return container;
};

module.exports = DealerView;
