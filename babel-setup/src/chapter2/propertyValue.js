'use strict'

var store = {}
var storage = { getItem, setItem, clear }

function getItem (key) {
  return key in store ? store[key] : null
}

function setItem (key, value) {
  store[key] = value
}

function clear () {
  store = {}
}
