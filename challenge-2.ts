// source: https://dev.to/typescript/type-treat-challenge-2-3n16

// It's been quite an evening, someone let out all
// the ghosts you've been catching for your first year in 
// business. That's not even the worst bit though, 
// it turns out gods and demons are also real 
// and are now all over Manhattan.

// The brains of your team has come up with an algorithm
// for dealing with the problem. They assert this algorithm 
// is the only way in which you can deal with the issue.

// They have set up a list of reported ghosts/demons/gods
// and have asked if you can fill in some of the details
// at the bottom but not change their code.

// Stay on your guard.

type Vigo = {
  name: "Vigo Von Homburg Deutschendorf",
  born: "Moldova"
  humanIsh: true
}

type Zuul = {
  name: "Zuul",
  demon: true
  sendBackToHell(): void
}

type Vinz = {
  name: "Vinz Clortho",
  demon: true
  sendBackToHell(): void
}

type Gizer = {
  name: "Vinz Clortho",
  god: true
  hijackStayPuffMan(): void
}

type Slimer =  {
  name: "Slimer",
  color: "Green-y see through",
  ectoplasmic: true
}

type Ghosts = Vigo | Zuul | Vinz

declare function shockAndTrap(ghosts: Array<{ ectoplasmic: true}>): void

/** @deprecated - this is bad advice */
declare function crossTheStreams(): void

function investigateReport(ghosts: Ghosts[]) {
  if (areGods(ghosts)) {
    // Unsure if is the right thing to do
    // but it could work
    crossTheStreams()
    return
  }

  // Tricky but something I think we can 
  // handle on a case-by-case basis
  if (areDemons(ghosts)) {
    for (const demon of ghosts) {
      demon.sendBackToHell()
    }
  }

  // We've done this a lot now,
  // shouldn't be too difficult
  if (areEctoPlasmic(ghosts)) {
    shockAndTrap(ghosts)
  }
}

// OK, this is the end of code which can't change. 
// Can you write functions below which will let the above 
// code compile? It's looking pretty serious out there. 

// Good luck. Stay on your guard.

type D = { areGods: { god: true }, areDemons: { demon: true }, areEctoPlasmic: { ectoplasmic: true } }
declare const { areGods, areDemons, areEctoPlasmic }: { [K in keyof D]: <T>(ghosts: T[]) => ghosts is Extract<T & (Ghosts | Gizer | Slimer), D[K]>[] }
