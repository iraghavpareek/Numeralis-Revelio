'use strict';
let secretNumber = Math.trunc(Math.random() * 100);

let score = 10;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('No Entry');
  } else if (guess === secretNumber) {
    displayMessage('Victory');

    if (score > highScore) {
      document.querySelector('.highscore').textContent = highScore = score;
    }

    document.querySelector('.number').style.fontSize = '12';
    document.querySelector('.number').style.width = '45rem';
    document.querySelector('.number').style.left = '50%';
    document.querySelector('.number').textContent = `It's ${guess} You Correct`;
    document.querySelector('h1').textContent = '';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? 'Too Low' : 'Too High');

      score--;
      document.querySelector('.score').textContent = score;
      if (score < 8) {
        document.querySelector('h1').textContent =
          "In numbers, your essence may hide, But fear not, for here, you can't hide. So tell me true, without delay, Which number calls to you today?";
        document.querySelector('h1').style.fontSize = '400%';
        document.querySelector('h1').style.padding = '20%';
        document.querySelector('h1').style.marginTop = '5%';
      }
    } else {
      displayMessage('You Lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 100 + 1);
  displayMessage('Start Guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.fontSize = '6';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.left = '10%';
  document.querySelector('h1').textContent =
    "Ah, another mind to sort, let's see...";
});
