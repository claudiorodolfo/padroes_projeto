import { VisualComponent } from './VisualComponent';

export abstract class Decorator extends VisualComponent {

    component: VisualComponent;

    constructor(decorates: VisualComponent) {
        super();
        this.component = decorates;
    }

    draw(): void {
        this.component.draw();
    }
}