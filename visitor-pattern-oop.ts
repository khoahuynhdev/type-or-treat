// This implementation of Visitor pattern in built on double dispatch principle

// Element to visit 
interface DocumentItem {
    accept: (visitor: Visitor) => void
}

class Paragraph implements DocumentItem {
    accept(visitor: Visitor) {
        visitor.renderParagraph(this)
    }
}

class Picture implements DocumentItem {
    accept(visitor: Visitor) {
        visitor.renderPicture(this)
    }
}

class Table implements DocumentItem {
    accept(visitor: Visitor) {
        visitor.renderTable(this)
    }
}

// visitors
interface Visitor {
    renderParagraph: (paragraph: Paragraph) => void;
    renderPicture: (picture: Picture) => void;
    renderTable: (table: Table) => void;
}

class Renderer implements Visitor {
    renderParagraph(paragraph: Paragraph) {
        console.log('render paragraph')
    }
    renderPicture(picture: Picture) {
        console.log('render picture')
    }
    renderTable(table: Table) {
        console.log('render table')
    }
}

class ScreenReader implements Visitor {
    renderParagraph(paragraph: Paragraph) {
        console.log('read paragraph')
    }
    renderPicture(picture: Picture) {
        console.log('read picture')
    }
    renderTable(table: Table) {
        console.log('read table')
    }
}
let docs: Array<DocumentItem> = [
    new Table(),
    new Paragraph(),
    new Picture(),
]

const visitor: Visitor = new ScreenReader();

for (let d of docs) {
    d.accept(visitor);
}
// m - visitors
// n - elements
// +1 n => update m
// +1 m => unchange n
// n must know about what process them => not seperation of concern
