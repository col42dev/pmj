// When we have defaults in an arraoe function we must wrap the paramter list in paranthesis

var double = (input = 0) => input * 2;
console.log(double(4)); // 8

function carFactory ({brand = 'Volkswagen', make = 1999}) {
  console.log(brand);
  console.log(make);
}

carFactory({make: 2000}); // {Volkswagen, 2000}

try {
  carFactory(); // error
} catch (err) {
  console.log(err);
}

function carFactory2 ({brand = 'Volkswagen', make = 1999} = {}) {
  console.log(brand);
  console.log(make);
}

carFactory2(); // {Volkswagen, 1999}
