const RequestHelper = require('../helpers/request_helper.js');

const Player = function(){
  this.id = null;
  this.hand = null;
  this.wallet = 100;
  this.winSound = new Audio('sounds/win.mp3');
};

//takes the bet from the players wallet
Player.prototype.placeBet = function(amount) {
  this.wallet -= amount;
  this.updateWallet();
};

//adds the winnings to a players wallet
Player.prototype.winMoney = function(amount){
  this.wallet += amount;
  this.updateWallet();
  window.setTimeout(() => {
    this.winSound.play()
  }, 1000)
};

//changes a players displayed wallet to refect its current value
Player.prototype.updateWallet = function(){
  const request = new RequestHelper(`http://localhost:3000/api/players/${this.id}`)
  request.put({"wallet": this.wallet})
  .then((allPlayers) => {
    const player = allPlayers.find((player) => {
      return player._id == this.id;
    })
    this.wallet = player.wallet;
  })
  .catch(console.error);
};

//saves the wallet of a specific player
Player.prototype.save = function (){
  const request = new RequestHelper('http://localhost:3000/api/players')
  request.post({"wallet": this.wallet})
  .then((player) => {
    this.id = player._id;
  })
  .catch(console.error);
};

module.exports = Player;
