// larg = left arg
const callFirst = (fn, larg) => {
  return function (...rest) {
    return fn.call(this, larg, ...rest);
  };
};

// rarg = right arg
const callLast = (fn, rarg) => {
  return function (...rest) {
    return fn.call(this, ...rest, rarg);
  };
};

const greet = (you, me) => `Hello ${you}, my name is ${me}!`;

const simonGreet = callLast(greet, "Simon");

const simonGreetJason = simonGreet("Jason");

console.log(simonGreetJason);

// what if we want more than 1 argument
const enhanceCallLeft =
  (fn, ...args) =>
  (...remainings) =>
    fn(...args, ...remainings);
