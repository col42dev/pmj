'use strict';

// When we have defaults in an arraoe function we must wrap the paramter list in paranthesis

var double = function double() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return input * 2;
};
console.log(double(4)); // 8

function carFactory(_ref) {
  var _ref$brand = _ref.brand,
      brand = _ref$brand === undefined ? 'Volkswagen' : _ref$brand,
      _ref$make = _ref.make,
      make = _ref$make === undefined ? 1999 : _ref$make;

  console.log(brand);
  console.log(make);
}

carFactory({ make: 2000 }); // {Volkswagen, 2000}

try {
  carFactory(); // error
} catch (err) {
  console.log(err);
}

function carFactory2() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$brand = _ref2.brand,
      brand = _ref2$brand === undefined ? 'Volkswagen' : _ref2$brand,
      _ref2$make = _ref2.make,
      make = _ref2$make === undefined ? 1999 : _ref2$make;

  console.log(brand);
  console.log(make);
}

carFactory2(); // {Volkswagen, 1999}