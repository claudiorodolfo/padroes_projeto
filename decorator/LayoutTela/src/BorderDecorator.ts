import { VisualComponent } from './VisualComponent';
import { Decorator } from './Decorator';

export class BorderDecorator extends Decorator {

    public constructor(decorates: VisualComponent){
        super(decorates);
    }

    public draw(): void {
        super.draw();
        this.drawBorder();
    }

    public drawBorder(): void {
        console.log("Desenhou a Borda");
    }
}