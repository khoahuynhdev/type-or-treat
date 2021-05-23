// Element to visit 

class Paragraph {
    
}

class Picture {
    
}

class Table {
    
}
 function renderParagraph(paragraph: Paragraph) {
    console.log('render paragraph')
}
function renderPicture(picture: Picture) {
    console.log('render picture')
}
function renderTable(table: Table) {
        console.log('render table')
}

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

function visit<T1,T2,T3> (
    variant: Variant<T1, T2, T3>,
    func1: (value: T1) => void,
    func2: (value: T2) => void,
    func3: (value: T3) => void,
): void {
    switch(variant.index) {
        case 0:
            func1(variant.value as T1);
            break;
        case 1:
            func2(variant.value as T2);
            break;
        case 2:
            func3(variant.value as T3);
            break;
        default:
            throw new Error();
    }
}

function visitUI<T1,T2,T3, U1, U2, U3> (
    variant: Variant<T1, T2, T3>,
    func1: (value: T1) => U1,
    func2: (value: T2) => U2,
    func3: (value: T3) => U3,
): Variant<U1, U2, U3> {
    switch(variant.index) {
        case 0:
            return Variant.make1(func1(variant.value as T1));
        case 1:
            return Variant.make2(func2(variant.value as T2));
        case 2:
            return Variant.make3(func3(variant.value as T3));            
        default:
            throw new Error();
    }
}

type DocumentElement = Variant<Paragraph, Table, Picture>[];
const docs: DocumentElement = [
    Variant.make1(new Paragraph()),
    Variant.make2(new Table()),
    Variant.make3(new Picture()),
]
for (const doc of docs) {
    visit(doc,
    (paragraph) => renderParagraph(paragraph),
    (table) => renderTable(table),
    (picture) => renderPicture(picture),
    )
}

// easy to add new operation on element
// fully seperation of concern
