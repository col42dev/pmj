'use strict';

var example = function example(paramaters) {
  // function body
};

var newExamplle = function newExamplle(paramaters) {
  // function body
};

// lexical scoping
var timer = {
  seconds: 0,
  start: function start() {
    var _this = this;

    setInterval(function () {
      _this.seconds += 1;
    }, 1000);
  }
};

timer.start();

setTimeout(function () {
  console.log(timer.seconds);
}, 3500);

// scope

function puzzle() {
  return function () {
    console.log(arguments);
  };
}

puzzle('a', 'b', 'c')('1', '2', '3');

function puzzle2() {
  var _arguments = arguments;

  return function () {
    return console.log(_arguments);
  };
}

puzzle2('a', 'b', 'c')('1', '2', '3');