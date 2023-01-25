// Tail-call optimization or TCO

// TCO version of len
// Sadly TCO is not supported in any JS engine
// references: https://world.hey.com/mgmarlow/what-happened-to-proper-tail-calls-in-javascript-5494c256
function len([first, ...rest], length = 0) {
  return first === undefined ? length : len(rest, 1 + length);
}

// there is a trick with trampoline effect
// instead of return a value, we return a function and it will trampolined

function tLen([first, ...rest], length = 0) {
  return first === undefined ? length : () => tLen(rest, 1 + length);
}

function trampoline(fn) {
  return function trampolined(...args) {
    let result = fn(...args);

    while (typeof result == "function") {
      result = result();
    }

    return result;
  };
}

let computeLen = trampoline(tLen);
// ref: https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch8.md#trampolines
console.log(computeLen([...Array(10000).keys()])); // shouldn't be stackoverflowed
