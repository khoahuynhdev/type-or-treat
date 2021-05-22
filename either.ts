class Either<TLeft, TRight> {
    private readonly value: TLeft | TRight;
    private readonly left: boolean;
    private constructor (value: TLeft | TRight, left: boolean) {
        this.value = value;
        this.left = left;
    }
    isLeft() {
        return this.left;
    }
    isRight() {
        return !this.left;
    }

    getLeft() {
        if (!this.isLeft()) throw new Error();
        return this.value as TLeft;
    }
    getRight() {
        if (!this.isRight()) throw new Error("");        
        return this.value as TRight;
    }

    static makeLeft<TLeft, TRight>(value: TLeft) {
        return new Either<TLeft, TRight>(value, true);
    }
    static makeRight<TLeft, TRight>(value: TRight) {
        return new Either<TLeft, TRight>(value, false);
    }
}
enum InputError {
    NoInput = "NoInput",
    Invalid = "Invalid"
}

enum DayOfWeek {
 Sunday,
 Monday,
 Tuesday,
 Wednesday,
 Thursday,
 Friday,
 Saturday
}

type Result = Either<InputError, DayOfWeek>

function parseDayOfWeek(input: string): Result {
    if (input === "") return Either.makeLeft(InputError.NoInput)
    switch (input.toLocaleLowerCase()) {
        case "sunday":
            return Either.makeRight(DayOfWeek.Sunday);
        case "saturday":
            return Either.makeRight(DayOfWeek.Saturday);
        default:
            return Either.makeLeft(InputError.Invalid);
    }
}

const res = parseDayOfWeek("");
console.log(res.getLeft())
