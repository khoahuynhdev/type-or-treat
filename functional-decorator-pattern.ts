class Widget {

}

type WidgetFactory = () => Widget;

function makeWidget() {
    return new Widget();
}

function singletonDecorator(factory: WidgetFactory): WidgetFactory {
    let instance: Widget | undefined = undefined;
    return (): Widget => {
        if (!instance) {
            instance = factory();
        }
        return instance;
    }
}

function use10Widgets(factory: WidgetFactory) {
    let widget: Widget | undefined = undefined;
    for (let i = 0; i < 10; i++) {
        const fromFactory = factory();
        if (widget) {
            console.log(widget === fromFactory ? "same" : "diff");
        } else {
            widget = fromFactory;
        }
    }
}

use10Widgets(singletonDecorator(makeWidget))
