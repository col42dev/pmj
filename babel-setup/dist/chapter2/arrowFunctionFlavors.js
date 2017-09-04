'use strict'

var example = function example (paramaters) {}

// an arrow function with exactly one paraamter can omit the parnthesis
var double = function double (value) {
  return value * 2
}

var double2 = function double2 (value) {
  return value * 2
}

// Return object literals
var objectFactory = function objectFactory () {
  return { modular: 'es6' }
}
console.log(JSON.stringify(objectFactory(), null, 2))

var range = [1, 2, 3]
var mappedRange = range.map(function (value) {
  return { number: value, verified: true }
})
console.log(JSON.stringify(mappedRange, null, 2))
