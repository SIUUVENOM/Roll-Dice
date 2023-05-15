'use strict';

// selecting elments
const score1 = document.getElementById('score--0');

const score2 = document.getElementById('score--1');

const resetBtn = document.querySelector('.btn--new');

const rollBtn = document.querySelector('.btn--roll');

const holdBtn = document.querySelector('.btn--hold');

const imageDice = document.querySelector('.dice');

const playerOne = document.querySelector('.player--0');

const playerTwo = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;

// switching player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerOne.classList.toggle('player--active');
  playerTwo.classList.toggle('player--active');
};

// starting condtions
const resetGame = function () {
  scores = [0, 0];

  currentScore = 0;

  activePlayer = 0;

  playing = true;

  // starting condtions
  score1.textContent = 0;

  score2.textContent = 0;

  imageDice.classList.add('hidden');

  playing = true;
  activePlayer = 0;
  scores = [0, 0];
  currentScore = 0;
  imageDice.classList.add('hidden');
  playerOne.classList.add('player--active');
  playerTwo.classList.remove('player--active');
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  playerOne.classList.remove('player--winner');
  playerTwo.classList.remove('player--winner');
};

resetGame();

// rolling dice
rollBtn.addEventListener('click', () => {
  if (playing) {
    // generating random number
    const randomRoll = Math.trunc(Math.random() * 6) + 1;
    // display dice
    imageDice.classList.remove('hidden');
    imageDice.src = `dice-${randomRoll}.png`;
    // check if dice number is not quall to 1
    if (randomRoll !== 1) {
      currentScore += randomRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// handling holding score feautre
holdBtn.addEventListener('click', () => {
  if (playing) {
    // check if current score is higher than 0
    if (currentScore > 0) {
      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
    }
    // display wining player
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      imageDice.classList.add('hidden');
    } else {
      // switching player
      switchPlayer();
    }
  }
});

// reseting game
resetBtn.addEventListener('click', resetGame);
