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

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// starting condtions
score1.textContent = 0;

score2.textContent = 0;

imageDice.classList.add('hidden');

// rolling dice
rollBtn.addEventListener('click', () => {
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
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerOne.classList.toggle('player--active');
    playerTwo.classList.toggle('player--active');
  }
});

// handling holding score feautre
holdBtn.addEventListener('click', () => {
  // check if current score is higher than 0
  if (currentScore > 0) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerOne.classList.toggle('player--active');
    playerTwo.classList.toggle('player--active');
  }
});

// reseting game
resetBtn.addEventListener('click', () => {
  activePlayer = 0;
  scores = [0, 0];
  currentScore = 0;
  imageDice.classList.add('hidden');
  playerOne.classList.add('player--active');
  playerTwo.classList.remove('player--active');
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
});
