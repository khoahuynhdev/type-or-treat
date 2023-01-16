const once = (fn) => {
  let done = false;
  return function () {
    return done ? void 0 : ((done = true), fn.apply(this, arguments));
  };
};

const askOnBlindDate = once(() => "sure, why not?");
// the function only run once
console.log(askOnBlindDate());
console.log(askOnBlindDate());
console.log(askOnBlindDate());
