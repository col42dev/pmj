'use strict';

function join() {
  for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  return list.join(', ');
}

console.log(join('first', 'second', 'third'));

function join2(seperator) {
  for (var _len2 = arguments.length, list = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    list[_key2 - 1] = arguments[_key2];
  }

  return list.join(seperator);
}

console.log(join2(';', 'first', 'second', 'third'));

var sumAll = function sumAll() {
  for (var _len3 = arguments.length, numbers = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }

  return numbers.reduce(function (total, next) {
    return total + next;
  });
};

console.log(sumAll(1, 2, 5)); // 8