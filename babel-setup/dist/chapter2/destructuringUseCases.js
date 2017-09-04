'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function getCoordinates() {
  return { x: 10, y: 22, z: -1, type: '3d' };
}

var _getCoordinates = getCoordinates(),
    x = _getCoordinates.x,
    y = _getCoordinates.y;

function random() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$min = _ref.min,
      min = _ref$min === undefined ? 1 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === undefined ? 10 : _ref$max;

  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(random());
console.log(random({ max: 24 }));

// RegEx

function splitDate(date) {
  var rdate = /(\d+).(\d+).(\d+)/;
  return rdate.exec(date);
}

var matches = splitDate('2015-11-06');
if (matches !== null) {
  var _matches = _slicedToArray(matches, 4),
      year = _matches[1],
      month = _matches[2],
      day = _matches[3];

  console.log([year, month, day]); // [ '2015', '11', '06' ]
}