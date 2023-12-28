public class CriadorConcreto2 extends Criador {
    public Produto metodoFabrica() {
        return new ProdutoConcreto2();
    }      
}
