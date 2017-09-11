

function s() {
  var min_digit = prompt('Enter first digit of range.');
  var max_digit = prompt('Enter second digit of range.');

  if (min_digit < 0 || max_digit < 0) {
    alert('You enter negative digit.');
  } else {
    if (rangeChecker(min_digit, max_digit) == true) {
      if (x = simpleDigit(min_digit, max_digit)) {
        y = arraySlicer(x, min_digit);
        alert('Simple digits at your range are: ' + y);
      } else if (rangeChecker(min_digit, max_digit) == false) {
        alert('Sorry. First digit must be greater than second');
      }
    }
  }
}

function arraySlicer(array, sliceStart){ // отрезает кусок ненужного массива до первого предела диапазона
  var c = [];
  c = array;

  for (var i = 0; i < c.length; i++) {
    if (array[i] >= sliceStart) {
      return array.slice(i);
    }
  }
}






function rangeChecker (min, max) { // проверяет, что б первый предел диапазона был меньше второго
  if (min > max) {
    return false;
  } else {
    return true;
  }
}






function simpleDigit(range_start, range_end) { // проверяет каждое число в диапазоне на "простоту"
  var array = [];
  var i = range_start;
  var x = range_start;
  var d = range_end;
    point:
    for (i = 2; i < d; i++) {
      for (x = 2; x < i; x++) {
        if (i % x == 0) {
          continue point;
        }
      }
        array.push(i);
    }
return array;
}

// function simpleDigit(range_start, range_end) {
//   var array = [];
//   var i;
//   var x;
//     point:
//     for (i = 2; i < d; i++) {
//       for (x = 2; x < i; x++) {
//         if (i % x == 0) {
//           continue point;
//         }
//       }
//         array.push(i);
//     }
// return array;
// }

 // console.log(s(10, 2100));


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
