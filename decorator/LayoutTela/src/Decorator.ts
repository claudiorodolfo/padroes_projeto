import { VisualComponent } from './VisualComponent';

export abstract class Decorator extends VisualComponent {

    private component: VisualComponent;

    public constructor(decorates: VisualComponent) {
        super();
        this.component = decorates;
    }

    public draw(): void {
        this.component.draw();
    }
}