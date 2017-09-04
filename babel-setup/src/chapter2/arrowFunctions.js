var example = function (paramaters) {
    // function body
};

var newExamplle = (paramaters) => {
    // function body
};

// lexical scoping
var timer = {
  seconds: 0,
  start () {
    setInterval(() => {
      this.seconds += 1;
    }, 1000);
  }
};

timer.start();

setTimeout(function () {
  console.log(timer.seconds);
}, 3500);

// scope

function puzzle () {
  return function () {
    console.log(arguments);
  };
}

puzzle('a', 'b', 'c')('1', '2', '3');

function puzzle2 () {
  return () => console.log(arguments);
}

puzzle2('a', 'b', 'c')('1', '2', '3');
