var newGameBtn = document.getElementByID('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() {playerPick('rock')});
pickPaper.addEventListener('click', function() {playerPick('paper')});
pickScissors.addEventListener('click', function() {playerPick('scissors')});

var gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
    switch(gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
        break;
            
        case 'ended' :
            newGameBtn.innerText = 'Jeszcze raz';
        case 'notstarted' :
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultElem.style.display = 'none';
    }
}

setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
    player.name = prompt('Enter your name', 'imię gracza');
    if (player.name) {
        player.score = computer.score= 0;
        gameState = 'started';
        setGameElements();
        
        playerNameElem.innerHTML = player.name;
        setGamePoints();
    }
}

function playerPick(playerPick) {
    console.log(playerPick);
}

// var x = Math.random();
// Math.floor(Math.random()*3)

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';
    
    var winnerIs = 'player';
    
        if (playerPick == computerPick) {
                winnerIs = 'noone';
        } else if (
            (computerPick == 'rock' && playerPick == 'scissors') ||
            (computerPick == 'scissors' &&  playerPick == 'paper') ||
            (computerPick == 'paper' &&  playerPick == 'rock')) {
                
            winnerIs = 'computer';
        }
    
        if (winnerIs == 'player') {
            playerResultElem.innerHTML = "Win!";
            player.score++;
        } else if (winnerIs == 'computer') {
            computerResultElem.innerHTML = "Win!";
            computerScore++;
            
        }
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPick.innerHTML = computerPick;
    
    checkRoundWinner(playerPick, computerPick);
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function checkGameWinner() {
    var result = '',
        maxPoints = 10;
    
        if (player.score == maxPoints || computer.score == maxPoints) {
            if (player.score == maxPoints) {
                result = 'You are the WINNER';
            } else if (computer.score == maxPoints) {
                result = 'sorry, you LOSE';
            }
            
            window.alert(result);
            
            gameState = 'ended';
        }
}