import { VisualComponent } from './VisualComponent';
import { Decorator } from './Decorator';

export class BorderDecorator extends Decorator {

    constructor(decorates: VisualComponent){
        super(decorates);
    }

    draw(): void {
        super.draw();
        this.drawBorder();
    }

    drawBorder(): void {
        console.log("Desenhou a Borda");
    }
}