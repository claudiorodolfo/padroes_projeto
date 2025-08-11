class CriadorConcreto1 extends Criador {
    public metodoFabrica(): Produto {
        return new ProdutoConcreto1();
    }      
}