const PubSub = require('../helpers/pub_sub.js');
const HandView = require('./hand_view')
const PlayerView = require('./player_view');
const ResultView = require('./result_view');

const GameView = function(container){
  this.container = container
  this.dealerHand = null
  this.playerHand = null
};

GameView.prototype.bindEvents = function (){
  PubSub.subscribe('Game:hands-ready', (evt) => {
    const allHands = evt.detail;
    this.dealerHand = allHands.dealerHand;
    this.playerHand = allHands.playerHand;
    this.createDealerHandView();
    this.createResultView();
    this.createPlayerView();
  });
};

GameView.prototype.createDealerHandView = function(){
  dealerContainer = document.createElement('div');
  dealerContainer.classList.add('dealer-view');
  this.container.appendChild(dealerContainer);
  handView = new HandView(dealerContainer, this.dealerHand);
  handView.render();
};

GameView.prototype.createPlayerView = function(){
  playerContainer = document.createElement('div');
  playerContainer.classList.add('player-view');
  this.container.appendChild(playerContainer);
  playerView = new PlayerView(playerContainer, this.playerHand);
  playerView.render();
};

GameView.prototype.createResultView =
function(){
  resultContainer = document.createElement('div');
  resultContainer.classList.add('result-view');
  this.container.appendChild(resultContainer);
  resultView = new ResultView(resultContainer);
  resultView.bindEvents();
  // resultView.render();
};


module.exports = GameView;
