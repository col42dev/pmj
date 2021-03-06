"use strict";

var emitter = {
  events: {},

  on: function on(type, fn) {
    if (this.events[type] === undefined) {
      this.events[type] = [];
    }

    this.events[type].push(fn);
  },

  emit: function emit(type, event) {
    if (this.events[type] === undefined) {
      return;
    }

    this.events[type].array.forEach(function (fn) {
      fn(event);
    }, this);
  }
};

console.log(JSON.stringify(emitter, null, 2));

var newEmitter = {
  events: {},

  on: function on(type, fn) {
    if (this.events[type] === undefined) {
      this.events[type] = [];
    }

    this.events[type].push(fn);
  },
  emit: function emit(type, event) {
    if (this.events[type] === undefined) {
      return;
    }

    this.events[type].array.forEach(function (fn) {
      fn(event);
    }, this);
  }
};

console.log(JSON.stringify(newEmitter, null, 2));