/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, //dice

scores = [0, 0];
roundScores = 0;
activePlayer = 1;



//this changes the second player's current score between 1 to 6
//document.querySelector('#current-' + activePlayer).textContent = dice;

//the comment below will change the italics of the html element of the certain ID
//document.querySelector('#current-' + activePlayer).innerHTML = <em> + 'dice' + </em>;

//this is just to show what is written in the selected ID called getter
/*var x = document.querySelector('#score-0').textContent;
console.log(x);
*/

//this changes the display property in css to none, which will make the dice hidden in the html
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



function btn() {
	//Do Something
}
btn();

//document.querySelector('.btn-roll').addEventListener('click', btn)

document.querySelector('.btn-roll').addEventListener('click', function(){
	// 1. Random number
	var dice = Math.floor(Math.random() * 6) + 1;
	// 2. Display The Result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';

	// 3. Update the round score IF the rolled number is NOT 1

});