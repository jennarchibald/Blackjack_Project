
const Game = require('./models/game_model.js');

const GameView = require('./views/game_view.js');

const ResultView = require('./views/result_view.js');


document.addEventListener('DOMContentLoaded', ()=> {
  console.log('Javascript Loaded');

  const container = document.querySelector('#game-container');

  const gameView = new GameView(container);
  gameView.bindEvents();


  const game = new Game();
  game.bindEvents();
  game.getPlayer();
  game.getDeck();


});
