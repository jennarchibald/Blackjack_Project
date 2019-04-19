const assert = require('assert');
const Game = require('../game_model.js');

describe('Game', function(){
  let deck;
  let game;
  let playerHand;
  let dealerHand;


  beforeEach(function(){
    deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    game = new Game(deck);
    playerHand = [3, 7];
    dealerHand = [10, 4];
  });

  it('should deal opening hands -- dealer', function(){
    const actual = game.dealerHand.length()
    assert.strictEqual(actual, 2)
  });

  it('should deal opening hands -- player', function(){
    const actual = game.playerHand.length()
    assert.strictEqual(actual, 2)
  });

  it('should determine winner', function(){
    const hand1 = playerHand.totalValue()
    const hand2 = dealerHand.totalValue()
    actual = game.determineWinner(hand1, hand2)
    assert.strictEqual(actual, hand2)
  });


})
