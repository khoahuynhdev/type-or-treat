function extend<First extends Object, Second extends Object>(
  first: First,
  second: Second
): First & Second {
  const result: unknown = {};
  for (const key in first) {
    if (first.hasOwnProperty(key)) (result as First)[key] = first[key];
  }
  for (const key in second) {
    if (second.hasOwnProperty(key)) (result as Second)[key] = second[key];
  }

  return result as First & Second;
}

class MeowingPet {
  meow(): void {
    /* ... */
  }
}
class HunterBehavior {
  track(): void {
    /* ... */
  }
  stalk(): void {
    /* ... */
  }
  pounce(): void {
    /* ... */
  }
}

type Cat = MeowingPet & HunterBehavior;

const fluffy = extend(new MeowingPet(), new HunterBehavior());

// auto suggest
// fluffy.m
