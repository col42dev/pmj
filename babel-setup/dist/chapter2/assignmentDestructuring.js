'use strict';

var character = {
  name: 'Bruce',
  pseudonym: 'Batman',
  metadata: {
    age: 34,
    gender: 'male'
  },
  batarang: ['gas pellet', 'bat-mobile control', 'bat-cuffs']
};

var pseudonym = character.pseudonym;

var pseudonym = character.pseudonym,
    name = character.name,
    two = 2;

console.log(pseudonym); // 'Batman'

// 'aliasing' destructuring syntaz
var alias = character.pseudonym;

console.log(alias); // 'Bruce'

var gender = character.metadata.gender;

console.log(gender); // 'male'

var characterGender = character.metadata.gender;

console.log(characterGender); // 'male'

// value assignment
var _character$boots = character.boots,
    boots = _character$boots === undefined ? { size: 10 } : _character$boots;

console.log(boots); // {size: 10}

var _character$metadata$e = character.metadata.enemy,
    enemy = _character$metadata$e === undefined ? 'Joker' : _character$metadata$e;

console.log(enemy); // 'Joker'

var _character$boots2 = character.boots,
    footware = _character$boots2 === undefined ? { size: 10 } : _character$boots2;

console.log(footware); // {size: 10}