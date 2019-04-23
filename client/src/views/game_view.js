const PubSub = require('../helpers/pub_sub.js');
const HandView = require('./hand_view')
const PlayerView = require('./player_view');
const ResultView = require('./result_view');
const DealerView = require('./dealer_view.js');

const GameView = function(container){
  this.container = container
  this.dealerHand = null
  this.player = null
  this.playerHand = null
};

GameView.prototype.bindEvents = function (){
  PubSub.subscribe('Game:hands-ready', (evt) => {
    const bothParticipants = evt.detail;
    this.dealerHand = bothParticipants.dealerHand;
    this.player = bothParticipants.player;
    this.playerHand = this.player.hand;
    this.createDealerHandView();
    this.createResultView();
    this.createPlayerView();
  });
};

GameView.prototype.createDealerView = function(){
  dealerContainer = document.createElement('div');
  dealerContainer.classList.add('dealer-view');
  this.container.appendChild(dealerContainer);
  dealerView = new DealerView(dealerContainer, this.dealerHand);
  dealerView.bindEvents();
  dealerView.render(true);
};

GameView.prototype.createPlayerView = function(){
  playerContainer = document.createElement('div');
  playerContainer.classList.add('player-view');
  this.container.appendChild(playerContainer);
  playerView = new PlayerView(playerContainer, this.player, this.playerHand);
  playerView.render();
  playerView.bindEvents();
};

GameView.prototype.createResultView =
function(){
  resultContainer = document.createElement('div');
  resultContainer.classList.add('result-view');
  this.container.appendChild(resultContainer);
  resultView = new ResultView(resultContainer);
  resultView.bindEvents();
};


module.exports = GameView;
