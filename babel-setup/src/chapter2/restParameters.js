
function join (...list) {
  return list.join(', ');
}

console.log(join('first', 'second', 'third'));

function join2 (seperator, ...list) {
  return list.join(seperator);
}

console.log(join2(';', 'first', 'second', 'third'));

var sumAll = (...numbers) => numbers.reduce(
  (total, next) => total + next
);

console.log(sumAll(1, 2, 5)); // 8
