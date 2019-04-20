const Game = require('./models/game_model.js');
const GameView = require('./views/game_view.js');

document.addEventListener('DOMContentLoaded', ()=> {
  console.log('Javascript Loaded');

  const game = new Game();
  game.getDeck();

  const gameView = new GameView();
  gameView.bindEvents();

});
