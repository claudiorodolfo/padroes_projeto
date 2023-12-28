public class CriadorConcreto1 extends Criador {
    public Produto metodoFabrica() {
        return new ProdutoConcreto1();
    }    
}
