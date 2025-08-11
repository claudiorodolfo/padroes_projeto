class BorderDecorator extends Decorator {

    constructor(decorates: VisualComponent){
        super(decorates);
    }

    public draw(): void {
        super.draw();
        drawBorder();
    }

    public drawBorder(): void {
        console.log("Desenhou a Borda");
    }
}