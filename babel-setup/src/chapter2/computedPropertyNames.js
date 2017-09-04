'use strict';

var expertise = 'journalism';
var person = {
  name: 'Sharon',
  age: 27,
  [expertise]: {
    years: 5,
    interests: ['international', 'politics', 'internet']
  }
};

console.log(JSON.stringify(person, null, 2));

function getEvenlope (type, description) {
  return {
    data: {},
    [type]: description
  };
}

console.log(JSON.stringify(getEvenlope('Manila', ' The Manila hemp is derived from a species of banana originally from the Philippines, whose fibers are tough. The hemp is then used during the paper making process, similar to how Kraft paper uses wood pulp.  So the mystery is solved, the manila envelope gets its name from the hemp in which it is made from.'), null, 2));
