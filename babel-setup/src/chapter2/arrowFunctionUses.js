[1, 2, 3, 4]
.map(value => value * 2)
.filter(value => value > 2)
.forEach(value => console.log(value));

var throwError = message => {
  throw new Error(message);
};

throwError('warn message');
