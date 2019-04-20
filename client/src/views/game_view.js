const PubSub = require('../helpers/pub_sub.js');
const HandView = require('./hand_view')
const PlayerView = require('./player_view');
const ResultView = require('./require_view');

const GameView = function(container){
  this.container = container
  this.dealerHand = null
  this.playerHand = null
};

GameView.prototype.bindEvents = function (){
  PubSub.subscribe('Game:hands-ready', (evt) => {
    const allHands = evt.detail;
    this.dealerHand = allHands.dealerHand;
    this.playerHand = allHands. playerHand;
    createDealerHandView();
    createPlayerView();
    createResultView();
  });
};

GameView.prototype.createDealerHandView = function(){
  dealerContainer = document.createElement('div');
  dealerContainer.classList.add('dealer-view');
  handView = new HandView(dealerContainer, this.dealerHand);
  handView.render();
};

GameView.prototype.createPlayerView = function(){
  playerContainer = document.createElement('div');
  playerContainer.classList.add('player-view');
  playerView = new PlayerView(playerContainer, this.playerHand);
  playerView.render();
};

GameView.prototype.createResultView =
function(){
  resultContainer = document.createElement('div');
  resultContainer.classList.add('result-view');
  resultView = new ResultView(resultContainer);
  resultView.render();
};


module.exports = GameView;
