
var example = (paramaters) => {

}

// an arrow function with exactly one paraamter can omit the parnthesis
var double = value => {
  return value * 2
}

var double2 = value => value * 2

// Return object literals
var objectFactory = () => ({ modular: 'es6'})
console.log(JSON.stringify(objectFactory(), null, 2))

var range = [1, 2, 3]
var mappedRange = range.map(value => ({ number: value, verified: true}))
console.log(JSON.stringify(mappedRange, null, 2))
