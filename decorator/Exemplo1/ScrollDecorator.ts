class ScrollDecorador extends Decorator {

    public constructor(decorates: VisualComponent){
        super(decorates);
    }

    public draw(): void {
        super.draw();
        scrollTo();
    }

    public scrollTo(): void {
        console.log("Executou o Scroll");
    }
}