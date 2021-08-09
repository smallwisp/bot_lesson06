'use strict'

let randomNumber = function() {
   return Math.round(Math.random() * 100);
}

let res = randomNumber();

function guessNumber(attempts) {
   
   let n = res;

   console.log(n);

   function isNumber(guessing) {
      return !isNaN(parseFloat(guessing)) && isFinite(guessing);
   }
   
   function gameConditions() {
      let guessing = prompt('Угадай число от 1 до 100');
      if (guessing === null) {
         alert('Игра окончена');
      } else if (!isNumber(guessing)) {
         alert('Введи число!');
         guessNumber(attempts);
      } else if (+guessing === n) {
         let victory = confirm('Поздравляю, Вы угадали!Хотели бы сыграть еще?');
         if (victory == true) {
            guessNumber(10);
         } else {
            alert('До встречи!')
         }
      } else if (attempts == 0) {
         let defeat = confirm('Попытки закончились, хотите сыграть еще?');
         if (defeat == true) {
            guessNumber(10);
         } else {
            alert('До встречи!')
         }
      } else if (+guessing > n) {
         alert(`Загаданное число меньше, осталось попыток : ${attempts}`);
         guessNumber(attempts - 1);
         console.log(attempts);
      } else {
         alert(`Загаданное число больше, осталось попыток : ${attempts}`);
         guessNumber(attempts - 1);
      } 
      
   }

   return gameConditions();
}

guessNumber(10);



