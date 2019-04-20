const Game = require('./models/game_model.js');
const Result = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', ()=> {
  console.log('Javascript Loaded');

  const game = new Game();

  game.getDeck();

});
