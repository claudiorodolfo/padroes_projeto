import { VisualComponent } from './VisualComponent';
import { Decorator } from './Decorator';

export class ScrollDecorator extends Decorator {

    constructor(decorates: VisualComponent){
        super(decorates);
    }

    draw(): void {
        super.draw();
        this.scrollTo();
    }

    scrollTo(): void {
        console.log("Executou o Scroll");
    }
}