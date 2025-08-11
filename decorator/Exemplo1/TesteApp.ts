class TesteApp {
    public static main(): void {
        tv: TextView = new TextView();
        sd: ScrollDecorator = new ScrollDecorator(tv);
        bd: BorderDecorator = new BorderDecorator(sd);
        bd.draw();
    }
}

// Chama o método main para executar o código
TesteApp.main();