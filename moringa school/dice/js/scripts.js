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
var clearValues = function(){
  $(".player1Name").val("");
  $(".player2Name").val("");
}

$(document).ready(function(){
  $("button#playGame").click(function(event){
  player1 = new Player(true);
  player2 = new Player(false);
  $(".player-space").show();
  $(".start-game").hide();

  var player1Name = $(".player1Name").val();
  $("#player1Name").text(player1Name);

  var player2Name = $(".player2Name").val();
  $("#player2Name").text(player2Name);

  player1.playerName = player1Name;
  player2.playerName = player2Name;
  });

  $("button#new-game").click(function(event){
    $(".player-space").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("die-roll-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();

    $(".start-game").show();
  });
