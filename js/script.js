
/* -- START checkRange function -- */

function checkRange (min, max) { // проверяет какое число больше, первое или второе.
  if (min < max) {
    return true;
  } else {
    return false;
  }
}

/* -- END checkRange function -- */

/* -- START simpleDigit function -- */

function simpleDigit(d) {
  var array = [];
  if (d != 0) {
    for (i = 2; i < d - 1; i++) {
      if (d % i != 0) {
          array.push(d);
      }
    }
  }
  return array;
}

/* -- END simpleDigit function -- */

/* -- START checkSimple function -- */

// function checkSimple(digit) { // проверяет простое ли число.
//     if (digit % 2 != 1) {
//       return true;
//     } else {
//       return false;
//     }
//   }

/* -- END checkSimple function -- */

/* -- START simple function -- */

function simple(min, max) { // записывает в масив только простые числа из заданного диапазона.
  var array = [];

  if (checkRange(min, max) == true) {
    for (min; min < max; min++) {
      if (simpleDigit(min) == true) {
        array.push(min);
      } else if (simpleDigit(min) == false) {
        continue;
      } else {
      return 'error';
      }
    }
    return array;
    } else if (checkRange(min, max) == false) {
      return 'Attention! The first number must be greater than the second';
    }
  }

/* -- END simple function -- */


console.log(simpleDigit(20));




// console.log(simple(65, 100));


// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:
// ucFirst("вася") == "Вася";
// ucFirst("") == ""; // нет ошибок при пустой строке
// P.S. В JavaScript нет встроенного метода для этого. Создайте функцию, используя toUpperCase() и charAt().

// function ucFirst(str = "") {
//
//   if (str == "") {
//     return ("Empty string.");
//   } else if (str == null) {
//     return ("Operation canceled.");
//   } else {
//     var lastPartWord = str.substr(1, str.length);
//     var firstLetter = str[0].toUpperCase();
//     var updWord = firstLetter;
//     updWord += lastPartWord;
//     return updWord;
//   }
// }
//
// function min(a, b) {
//   if (a > b) {
//     return b;
//   } else {
//     return a;
//   }
// }1000
// Повторять цикл, пока ввод неверен
// Напишите функцию в которой цикл предлагает prompt ввести число, большее заданного аргумента функции (например 100). Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
//
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC).
//
// Предполагается, что посетитель вводит только числа. Предусмотреть обработку нечисловых строк в этой задаче
//
//   function hundred(userNum) {
//
//     userNum = prompt('Enter number bigger than 100', '');
//
//     if (userNum == null) {
//       return 'Operation terminate';
//     } else if (userNum == '') {
//       while (userNum < 100) {
//       userNum = prompt('Please, enter something, maybe digit ;)', '');
//       }
//     } else {
//       if (parseInt(userNum) ) {
//
//       }
//       while (parseInt(userNum) < 100) {
//       userNum = prompt('Enter number bigger than 100', '');
//       }
//       return 'Your digit is more than 100! Our congratulations!';
//     }
//   }
//
//
// console.log(hundred('2223'));
  //   var funNum = 100;
  //   var userNum; = prompt('Enter number bigger than 100', '');
  //
  //   if (userNum > funNum) {
  //     return 'Your digit is more than 100';
  //   } else {
  //     do {
  //       userNum;
  //     } while (userNum > funNum);
  //   }
