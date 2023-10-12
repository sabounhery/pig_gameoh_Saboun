'use strict';
//changer la coleur!!
function myFunction() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';
}

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const newGame = document.querySelector('.btn--new');
const rolleDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

function swichPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
let scores = [0, 0];
let playing = 0;

let currentScore = 0;
let activePlayer = 0;
rolleDice.addEventListener('click', () => {
  const random = Math.trunc(Math.random() * 6) + 1;

  dice.classList.remove('hidden');
  dice.src = `dice-${random}.png`;
  if (random !== 1) {
    currentScore += random;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

hold.addEventListener('click', () => {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  console.log(scores);
  if (scores[activePlayer] >= 22) {
    playing = false;
    dice.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

try {
  adddlert('welcome');
} catch (error) {}
