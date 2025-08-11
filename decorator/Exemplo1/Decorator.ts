abstract class Decorator extends VisualComponent {

    private component: VisualComponent;

    constructor(decorates: VisualComponent) {
        component = decorates;
    }

    draw(): void {
        component.draw();
    }
}