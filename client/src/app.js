const Game = require('./models/game_model.js');

document.addEventListener('DOMContentLoaded', ()=> {
  console.log('Javascript Loaded');

  const game = new Game();

  game.getDeck();

});
