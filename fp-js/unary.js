// unary is a function decorator that modifies the number of arguments a function takes:
// In short: Unary take any function and turns it into a function taking exactly one argument

console.log(["1", "2", "3"].map(parseFloat));

// map in JS will call a function with 3 arguments (element, index, arr)
// so this will fail

console.log(["1", "2", "3"].map(parseInt)); // [1, NaN, NaN]

// solution

console.log(["1", "2", "3"].map((num) => parseInt(num)));

// or with Unary

function unary(fn) {
  return fn.length === 1
    ? fn
    : function (arg) {
        return fn.call(this, arg);
      };
}

console.log(["1", "2", "3"].map(unary(parseInt)));
