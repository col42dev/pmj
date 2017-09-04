'use strict';

var store = {};
var storage = { getItem: getItem, setItem: setItem, clear: clear };

function getItem(key) {
  return key in store ? store[key] : null;
}

function setItem(key, value) {
  store[key] = value;
}

function clear() {
  store = {};
}