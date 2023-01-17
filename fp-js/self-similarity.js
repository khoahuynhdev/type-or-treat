const isEmpty = ([first, ...rest]) => first === undefined;

// Javascript is weird
console.log(isEmpty([]));
console.log(isEmpty([0]));
console.log(isEmpty([[]]));

// A recursion length function

function length([first, ...rest]) {
  return first === undefined ? 0 : 1 + length(rest);
}

console.log(length([]));
console.log(length(["foo"]));
console.log(length(["foo", "bar", "baz"]));

// flatten array

function flatten([first, ...rest]) {
  if (first === undefined) return [];
  if (!Array.isArray(first)) return [first, ...flatten(rest)];
  return [...flatten(first), ...flatten(rest)];
}

console.log(flatten(["foo", [3, 4, ["yeah"]]]));
