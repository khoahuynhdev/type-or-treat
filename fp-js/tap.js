// Tap or K combinator
//

const k = (x) => (y) => x;

// @eslint-disable-next-line
const tap = (value) => (fn) => (typeof fn === "function" && fn(value), value);

tap("Neovim")((val) => {
  console.log(`${val} is awesome!`);
});
