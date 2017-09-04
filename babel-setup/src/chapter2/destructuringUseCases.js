function getCoordinates () {
  return { x: 10, y: 22, z: -1, type: '3d' };
}

var {x, y} = getCoordinates();

function random ({min = 1, max = 10} = {}) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(random());
console.log(random({max: 24}));

// RegEx

function splitDate (date) {
  var rdate = /(\d+).(\d+).(\d+)/;
  return rdate.exec(date);
}

var matches = splitDate('2015-11-06');
if (matches !== null) {
  var [, year, month, day] = matches;
  console.log([year, month, day]); // [ '2015', '11', '06' ]
}
