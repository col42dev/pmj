'use strict'

function _defineProperty (obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }) } else { obj[key] = value } return obj }

var expertise = 'journalism'
var person = _defineProperty({
  name: 'Sharon',
  age: 27
}, expertise, {
  years: 5,
  interests: ['international', 'politics', 'internet']
})

console.log(JSON.stringify(person, null, 2))

function getEvenlope (type, description) {
  return _defineProperty({
    data: {}
  }, type, description)
}

console.log(JSON.stringify(getEvenlope('Manila', ' The Manila hemp is derived from a species of banana originally from the Philippines, whose fibers are tough. The hemp is then used during the paper making process, similar to how Kraft paper uses wood pulp.  So the mystery is solved, the manila envelope gets its name from the hemp in which it is made from.'), null, 2))
