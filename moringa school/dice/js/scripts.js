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

Player.prototype.scoreone = function () {
  if (this.roll === 1) {
    this.currentScore = 0;
    alert("You scored a 1 " + this.playerName +" Your turn is over pass the dice");
  } else {
    this.currentScore += this.roll;
  }
}

Player.prototype.hold = function () {
  this.score += this.currentScore;
  this.currentScore = 0;
  alert(this.playerName + " , your turn is over pass the dice");
}

Player.prototype.crownWinner = function (){
  if (this.score >= 100){
    alert(this.playerName + " Congratulations, You have won")
  }
}

Player.prototype.newGame = function () {
  this.roll = 0;
  this.currentScore= 0;
  this.score = 0;
  this.playerName= "";
}
