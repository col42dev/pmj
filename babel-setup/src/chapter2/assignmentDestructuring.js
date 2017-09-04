var character = {
  name: 'Bruce',
  pseudonym: 'Batman',
  metadata: {
    age: 34,
    gender: 'male'
  },
  batarang: [ 'gas pellet', 'bat-mobile control', 'bat-cuffs']
};

var pseudonym = character.pseudonym;

var {pseudonym, name} = character, two = 2;
console.log(pseudonym); // 'Batman'

// 'aliasing' destructuring syntaz
var {pseudonym: alias} = character;
console.log(alias); // 'Bruce'

var { metadata: { gender } } = character;
console.log(gender);  // 'male'

var { metadata: { gender: characterGender } } = character;
console.log(characterGender);  // 'male'

// value assignment
var { boots = {size: 10}} = character;
console.log(boots);  // {size: 10}

var { metadata: { enemy = 'Joker' } } = character;
console.log(enemy);  // 'Joker'

var { boots: footware = {size: 10}} = character;
console.log(footware);  // {size: 10}
