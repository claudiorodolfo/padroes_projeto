class DecoradorConcreto2 extends Decorador {
    operacao(): void {
        super.operacao();
        operacaoDecorador2();
    }

    operacaoDecorador2(): void {
        
    }
}