class Variant<T1, T2, T3> {
    readonly value: T1 | T2 | T3;
    readonly index: number;
    private constructor(value: T1 | T2 | T3, index: number) {
        this.index = index;
        this.value = value;
    }

    static make1<T1, T2, T3>(value: T1): Variant<T1, T2, T3> {
        return new Variant<T1, T2, T3>(value, 0);
    }
    static make2<T1, T2, T3>(value: T2): Variant<T1, T2, T3> {
        return new Variant<T1, T2, T3>(value, 1);
    }
    static make3<T1, T2, T3>(value: T3): Variant<T1, T2, T3> {
        return new Variant<T1, T2, T3>(value, 2);
    }
}

class Circle {
    x: number = 0;
    y: number = 0;
    radius: number = 0;
}

class Point {
    x: number = 0;
    y: number = 0;
}

class Rectangle {
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;
}

type Shape = Variant<Circle, Point, Rectangle>;
// Variant will handle tagging for each shape

// calling Variant.make# without typing will give unknown value
const shapes: Array<Shape> = [
    Variant.make1(new Circle()),
    Variant.make2(new Point()),
    Variant.make3(new Rectangle)
]

shapes.forEach(shape => {
    switch(shape.index) {
        case 0:
            // union tag is clearly better here because the type come with the tag
            // here just arbitrarily mapping a number to a type
            const circle = shape.value as Circle; // still need typecasting
            console.log(JSON.stringify(circle));
            break;
        case 1:
            break;
        case 2:
            break;
        default:
            break;
    }
})


