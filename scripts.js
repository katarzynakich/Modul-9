//PZYCISK ROZPOCZYNAJACY NOWA GRE - KLIK
var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);

//PRZYCISKI PAPIER, NOZYCE, KAMIEN - KLIK
var pickRock = document.getElementById('js-playerPick_rock');
	pickPaper = document.getElementById('js-playerPick_paper');
	pickScissors = document.getElementById('js-playerPick_scissors');

//NASLUCHIWANIE KLIKNIECIA, WYWOLANIE FUNKCJI REPREZENTUJACEJ WYBOR GRACZA
pickRock.addEventListener('click', function() {
	playerPick('rock');
});
pickPaper.addEventListener('click', function() {
	playerPick('paper');
});
pickScissors.addEventListener('click', function(){
	playerPick('scissors');
});

//PUNKTACJA; STAN POCZATKOWY GRY 
var gameState = 'notStarted',
	player = {
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};
//STAN POCZATKOWY notStarted, GRA ROZPOCZETA startet, ZAKONCZONA ended

//WYSWIETLANIE ELEMENTOW GRY W ZALEZNOSCI OD STANU GRY
var newGameView = document.getElementById('js-newGameElement');
var pickView = document.getElementById('js-playerPickElement');
var resultsView = document.getElementById('js-resultsTableElement');

function setGameView() {
	switch(gameState) {
		case 'started':
			newGameView.style.display = 'none';
			pickView.style.display = 'block';
			resultsView.style.display = 'block';
		break;
		case 'ended':
			newGameBtn.innerText = 'Try again';
		case 'notStarted':
		default:
			newGameView.style.display = 'block';
			pickView.style.display = 'none';
			resultsView.style.display = 'none';
	}
}	
setGameView();	

//POCZATEK NOWEJ GRY - PUNKTY GRACZA, PUNKTY KOMPUTERA, IMIE GRACZA
var playerNameElem = document.getElementById('js-playerName');
	playerPointsElem = document.getElementById('js-playerPoints');
	computerPointsElem = document.getElementById('js-computerPoints');

//PO WCISNIECIU PRZYCISKU URUCHAMIA SIE FUNKCJA, KTORA USTAWIA STAN POCZATKOWY GRY
function newGame() {
	player.name = prompt('Enter your name', 'imię gracza');
	if(player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameView();
		playerNameElem.innerHTML = player.name;
		setGamePoints(); 
	}
}
//WYBOR GRACZA
function playerPick(playerPick) {
	console.log(playerPick);
}
//LOSOWANIE PRZEZ KOMPUTER
function getComputerPick() {
	var possiblePicks = ['rock', 'paper', 'scissors'];
	return possiblePicks[Math.floor(Math.random()*3)];
}
//URUCHAMIANIE GRY 
var playerPickElem = document.getElementById('js-playerPick'),
	computerPickElem = document.getElementById('js-computerPick'),
	playerResultElem = document.getElementById('js-playerResult');
	computerResultElem = document.getElementById('js-computerResult');
	
function playerPick(playerPick) {
	var computerPick = getComputerPick();
	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;
	checkWinner(playerPick, computerPick);
}
//PUNKTY
function checkWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'nobody'; 
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {
        
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "You won!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Computer won!";
        computer.score++;
    } else {
        playerResultElem.innerHTML = "It's a tie!";
		computerResultElem.innerHTML = "It's a tie!";	
	
    }
	setGamePoints();
}
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function theEnd() {
	if (player.score == 10) {
	alert('You won! Well done!');
	gameState = 'ended';
	setGameView();
	} 
	else if (computer.score == 10) {
	alert('Computer won! Try again');
	gameState = 'ended';
	setGameView();
	} 
	console.log('test');
}
theEnd();



	