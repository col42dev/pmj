'use strict';

[1, 2, 3, 4].map(function (value) {
  return value * 2;
}).filter(function (value) {
  return value > 2;
}).forEach(function (value) {
  return console.log(value);
});

var throwError = function throwError(message) {
  throw new Error(message);
};

throwError('warn message');