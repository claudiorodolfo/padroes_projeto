class DecoradorConcreto1 extends Decorador {
    operacao(): void {
        super.operacao();
        operacaoDecorador1();
    }

    operacaoDecorador1(): void {

    }
}