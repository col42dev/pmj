'use strict';

var coordinates = [12, 7];
var x = coordinates[0],
    y = coordinates[1];

console.log(x); // 12

var names = ['James', 'L.', 'Howlet'];
var firstName = names[0],
    lastName = names[2];

console.log(lastName); // 'Howlet'

var names = ['James', 'L.'];
var _names$ = names[0],
    firstName = _names$ === undefined ? 'John' : _names$,
    _names$2 = names[2],
    lastName = _names$2 === undefined ? 'Doe' : _names$2;

console.log(lastName); // 'Doe'

var left = 5;
var right = 7;
var _ref = [right, left];
left = _ref[0];
right = _ref[1];

console.log(left + ', ' + right); // 7, 5