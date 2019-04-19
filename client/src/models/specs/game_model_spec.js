const assert = require('assert');
const Game = require('../game_model.js');

describe('Game', function(){
  // let deck;
  let game;
  // let playerHand;
  // let dealerHand;


  beforeEach(function(){
   game = new Game;
   game.openingDeal();
   // playerHand = [5, 4];
   // dealerHand = [5, 3];
  });

  it('should deal opening hands -- dealer', function(){
    const actual = game.dealerHand.cards.length
    assert.strictEqual(actual, 2)
  });

  it('should deal opening hands -- player', function(){
    const actual = game.playerHand.cards.length
    assert.strictEqual(actual, 2)
  });

  it('should determine winner', function(){
    console.log(game.playerHand.cards);
    console.log(game.dealerHand.cards);
    actual = game.determineWinner();
    assert.strictEqual(actual, 'Push')
  });


})
