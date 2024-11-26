class CriadorConcreto2 extends Criador {
    public metodoFabrica(): Produto {
        return new ProdutoConcreto2();
    }      
}