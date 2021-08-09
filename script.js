'use strict'

function guessNumber() {
   let n = 89;

   function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
   }
   
   function gameConditions() {
      let guessing = prompt('Угадай число от 1 до 100');
      if (guessing === null) {
         alert('Игра окончена');
      } else if (!isNumber(guessing)) {
         alert('Введи число!');
         guessNumber(n);
      } else if (+guessing === n) {
         alert('Поздравляю, Вы угадали!');
      } else if (+guessing > n) {
         alert('Загаданное число меньше');
         guessNumber(n);
      } else {
         alert('Загаданное число больше');
         guessNumber(n);
      } 
   }

   return gameConditions();
}

guessNumber();

