const HandView = require('./hand_view.js');
const TotalView = require('./total_view.js');
const PubSub = require('../helpers/pub_sub.js');

const DealerView = function(container, hand){
  this.container = container;
  this.hand = hand;
  this.revealCards = false;
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
    PubSub.subscribe('BetView:bet-placed', (evt) => {
     this.revealCards = true;
     this.render(true);
   })
  };

DealerView.prototype.render = function (firstCardDown) {
  this.container.innerHTML = '';
  const totalContainer = this.makeContainer('dealer-total')
  let total = this.hand.totalValue();
  if (firstCardDown) { total = '???'  }
  const totalView = new TotalView(totalContainer, 'Dealer', total);
  totalView.bindEvents();
  const handContainer = this.makeContainer('dealer-hand');
  const handView = new HandView(handContainer, this.hand, firstCardDown);
  if (this.revealCards){
    totalView.render(true);
    handView.render();
  } else {
    totalView.render()
  }
  const rulesView = this.makeContainer('rules-view');
  const rulesList = this.makeRulesList();
  rulesView.appendChild(rulesList);
};

DealerView.prototype.makeContainer = function (containerClass) {
  const container = document.createElement('div');
  container.classList.add(containerClass);
  this.container.appendChild(container);
  return container;
};

DealerView.prototype.makeRulesList = function () {
  const list = document.createElement('ul');
  const heading = document.createElement('h2')
  const rule1 = document.createElement('li');
  const rule2 = document.createElement('li');
  const rule3 = document.createElement('li');
  const rule4 = document.createElement('li');
  const rule5 = document.createElement('li');
  const rule6 = document.createElement('li');
  const rule7 = document.createElement('li');
  const rule8 = document.createElement('li');
  const link = document.createElement('a');
  heading.textContent = 'The rules:';
  rule1.textContent = 'Hit for a new card';
  rule2.textContent = 'Stick to end your turn';
  rule3.textContent = 'If your score goes above 21, you lose';
  rule4.textContent = 'Score higher than the dealer to win';
  rule5.textContent = 'A push is a draw';
  rule6.textContent = 'The dealer must draw to a minimum score of 17';
  rule7.textContent = 'Wins are paid at 2:1';
  link.textContent = 'When the fun stops, Stop';
  link.href = 'http://www.whenthefunstops.co.uk/';
  rule8.appendChild(link);
  list.appendChild(heading)
  list.appendChild(rule1);
  list.appendChild(rule2);
  list.appendChild(rule3);
  list.appendChild(rule4);
  list.appendChild(rule5);
  list.appendChild(rule6);
  list.appendChild(rule7);
  list.appendChild(rule8);
  return list;
}

module.exports = DealerView;
