import { VisualComponent } from './VisualComponent';
import { Decorator } from './Decorator';

export class ScrollDecorator extends Decorator {

    public constructor(decorates: VisualComponent){
        super(decorates);
    }

    public draw(): void {
        super.draw();
        this.scrollTo();
    }

    public scrollTo(): void {
        console.log("Executou o Scroll");
    }
}