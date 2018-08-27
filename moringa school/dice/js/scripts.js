var player1 = "";
var player2 = "";

var rollRandom = function() {
  return Math.floor(6*Math.random()) + 1;
}

function Player (turn){
  this.roll = 0;
  this.currentScore = 0;
  this.score= 0;
  this.turn = turn;
  this.playerName;
}
