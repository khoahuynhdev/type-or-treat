// challenge 1
// source: https://dev.to/typescript/type-treat-challenge-1-829

// Your kids have returned home with a whole bag
// full of halloween loot, and you've taken the time to
// make a description of all of them:

type SnackBars = {
  name: "Short Chocolate Bars"
  amount: 4
  candy: true
}

type Gumballs = {
  name: "Gooey Gumballs"
  color: "green" | "purples"
  candy: true
}

type Apples = {
  name: "Apples"
  candy: true
}

type Cookies = {
  name: "Cookies"
  candy: true
  peanuts: true
}

type SnickersBar = {
  name: "Snickers Bar"
  candy: true
  peanuts: true
}

type Toothpaste = {
  name: "Toothpaste"
  minty: true
  trick: true
}

type Pencil = {
  name: "Pencil"
  trick: true
}

// You create a single pile of all the results, and want to use
// this to share out the winnings among your kids.

type ResultsFromHalloween = SnackBars | Gumballs | Apples | SnickersBar | Cookies | Toothpaste | Pencil

// You're first going to need to separate out the candy from the treats,
// you can do that via conditional types.


// 1. A way to do it with built-in types:
type AllCandies = Extract<ResultsFromHalloween, { candy: true }>
type AllTricks = Extract<ResultsFromHalloween, { trick: true }>
type AllCandiesWithoutPeanuts = Exclude<AllCandies, { peanuts: true }>

// 2. A way to do it with conditional types:
type Candies<T> = T extends { candy: true } ? T : never;
type Tricks<T> = T extends { trick: true } ? T : never;
type WithoutPeanuts<T> =  T extends { peanuts: true } ? never : T

type AllCandies_ = Candies<ResultsFromHalloween>;
type AllTricks_ = Tricks<ResultsFromHalloween>;

type AllCandiesWithoutPeanuts_ = WithoutPeanuts<AllCandies_>

// 3. A way to do it with "future type safe" autocompletion. Instead of manually building
//    the { candy: true } type (etc.), this can be achieved by doing a bit of mapping.
//
type PropertiesInAny<T> = T extends Record<infer K, any> ? K : never
type Properties = PropertiesInAny<ResultsFromHalloween>

// - K must be a property in any of the halloween results.
// - M is the type that property must have
//
type WithProperty<T, K extends Properties, M = true> = T extends Record<K, M> ? T : never
type WithoutProperty<T, K extends Properties, M = true> = T extends Record<K, M> ? never : T

// These WithProperty functions do autocompletion!
type Candies_<T> = WithProperty<T, 'candy'>
type Tricks_<T> = WithProperty<T, 'trick'>
type WithoutPeanuts_<T> = WithoutProperty<T, 'peanuts'>

type AllCandies__ = Candies<ResultsFromHalloween>
type AllTricks__ = Tricks<ResultsFromHalloween>

// Almost there, but little 'Bobby Tables' cannot have peanuts. Can
// you make a list of candies just for him?

type AllCandiesWithoutPeanuts__ = WithoutPeanuts<AllCandies>

