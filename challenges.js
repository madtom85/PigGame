/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, gamePlaying //, dice

/*
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
*/
init();

// dice = Math.floor(Math.random() * 6) + 1;

//this changes the second player's current score between 1 to 6
//document.querySelector('#current-' + activePlayer).textContent = dice;

//the comment below will change the italics of the html element of the certain ID
//document.querySelector('#current-' + activePlayer).innerHTML = <em> + 'dice' + </em>;

//this is just to show what is written in the selected ID called getter
/* var x = document.querySelector('#score-0').textContent;
console.log(x);
*/

//this changes the display property in css to none, which will make the dice hidden in the html
//document.querySelector('.dice').style.display = 'none';

/*
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



/*function btn() {
	//Do Something
}
btn();
*/

//document.querySelector('.btn-roll').addEventListener('click', btn)

document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying) {
		// 1. Random number
	var dice1 = Math.floor(Math.random() * 6) + 1;
	var dice2 = Math.floor(Math.random() * 6) + 1;
	// 2. Display The Result
	document.getElementById('dice-1').style.display = 'block';
	document.getElementById('dice-2').style.display = 'block';
	document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
	document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

	// 3. Update the round score IF the rolled number is NOT 1
	if (dice1 !== 1 && dice2 !== 1) {
		//Add Score
		//roundScore = roundScore + dice;
		roundScore += dice1 + dice2;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else {
		//nextPlayer
		nextPlayer();
	}

	}

});	
	/*
	if (dice === 6 && lastDice === 6) {
		//Player loses score
		scores[activePlayer] = 0;
		document.querySelector('#score-' + activePlayer).textContent = '0';
		nextPlayer();
	}
	else if (dice !== 1) {
		//Add Score
		//roundScore = roundScore + dice;
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else {
		//Next Player
		/* if (activePlayer === 0) {
			activePlayer = 1;
		} else {
			activePlayer = 0;
		}
		*/

		/*
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		//document.querySelector('.player-0-panel').classList.remove('active');
		//documnet.querySelector('player-1-panel').classList.add('active');

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';
		*/
		//nextPlayer
		/*
		nextPlayer();
	}
		lastDice = dice;
	}

});
	*/

	document.querySelector('.btn-hold').addEventListener('click', function() {
		if (gamePlaying) {
		// Add current score to global score
		scores[activePlayer] += roundScore;
		//Update UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		var input = document.querySelector('.final-score').value;
		var winningScore;
		//undefined, null, 0 and "" are COERCED to false
		// anything else is COERCED to true
		if (input) {
			winningScore = input;

		} else{
			winningScore = 100;
		}


		//Check which player won the game
		if (scores[activePlayer] >= winningScore) {
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
		document.getElementById('dice-1').style.display = 'none';
		document.getElementById('dice-2').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

			gamePlaying = false;
		} else {
			nextPlayer();
		}
	}
		
});

	//calling this function helps with DRY (Don't repeat yourself) on other eventlisteners
	function nextPlayer() {
		//next player
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		//document.querySelector('.player-0-panel').classList.remove('active');
		//documnet.querySelector('player-1-panel').classList.add('active');

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.getElementById('dice-1').style.display = 'none';
		document.getElementById('dice-2').style.display = 'none';
	}
	//not using an anonymous function since we don't want to call an anonymous function before another function
	
	document.querySelector('.btn-new').addEventListener('click', init);

	function init () {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
	
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	//Winner must not be shown when initializing a new game
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	//you must remove the active class from both to default a new game without active player
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	//active must be added to start the first player with active
	document.querySelector('.player-0-panel').classList.add('active');

	}; 