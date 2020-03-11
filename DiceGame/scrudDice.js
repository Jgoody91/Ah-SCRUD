var roll1;
var roll2;

var betVal;
var bet;
var winnings;

var score = 100;
var highScoreSession;
var highScoreTotal;

var die1Count;
var die2Count;
var tieCount;

function onStart(){
	document.getElementById("score").innerHTML = "Points: " + score;
	document.getElementById("high").innerHTML = score;
	document.getElementById("total").innerHTML = localStorage.getItem("highScoreTotal");
}
function rollDice(){
	if(document.getElementById("check1").checked = true){
		bet = 1;
	}else if(document.getElementById("check2").checked = true){
		bet = 2;
	}else if(document.getElementById("check3").checked = true){
		bet = 3;
	}

	betVal = document.getElementById("bet");
	if(betVal > score) return;

	roll1 = Math.floor(Math.random() * 6);
    roll2 = Math.floor(Math.random() * 6);

    document.getElementById("die1").src="diceImages/roll" + (roll1 + 1) + ".png";
    document.getElementById("die2").src="diceImages/roll" + (roll2 + 1) + ".png";

    testDice();
}
function testDice(){
	if(roll1 > roll2){
		if(bet = 1){
			winnings = betVal * 2;
			score += winnings;
			die1Count++;
		}else{
			score -= betVal;
			die1Count++;
		}
	}
	if(roll2 > roll1){
		if(bet = 2){
			winnings = betVal * 2;
			score += winnings;
			die2Count++;
		}else{
			score -= betVal;
			die2Count++;
		}
	}
	if(roll1 == roll2){
		if(bet = 3){
			winnings = betVal * 3;
			score += winnings;
			tieCount++;
		}else{
			score -= betVal;
			tieCount+;
		}
	}
	setBars();
	updateScores();
}
function setBars(){
	document.getElementById("bar1").height = (die1Count / (die1Count + die2Count + tieCount)) * 300;
	document.getElementById("bar2").height = (die2Count / (die1Count + die2Count + tieCount)) * 300;
	document.getElementById("bar3").height = (die2Count / (die1Count + die2Count + tieCount)) * 300;
}
function updateScores(){
	document.getElementById("score").innerHTML = "Points: " + score;
	if(score > document.getElementById("high").innerHTML){
		document.getElementById("high").innerHTML = score;
	}
	if(score > document.getElementById("total").innerHTML){
		document.getElementById("total").innerHTML = score;
		localStorage.setItem("highScoreTotal", score);
	}
}