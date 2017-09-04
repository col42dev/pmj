var coordinates = [12, 7];
var [x, y] = coordinates;
console.log(x); // 12

var names = ['James', 'L.', 'Howlet'];
var [firstName, , lastName] = names;
console.log(lastName); // 'Howlet'

var names = ['James', 'L.'];
var [firstName = 'John', , lastName = 'Doe'] = names;
console.log(lastName); // 'Doe'

var left = 5;
var right = 7;
[left, right] = [right, left];
console.log(left + ', ' + right); // 7, 5
