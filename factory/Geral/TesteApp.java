public class TesteApp {
    public static void main(String[] args) {
        Criador fabProduto1 = new CriadorConcreto1();
		Criador fabProduto2 = new CriadorConcreto2();


		Produto abc = fabProduto1.metodoFabrica();
        Produto def = fabProduto1.metodoFabrica();
        Produto ghi = fabProduto1.metodoFabrica();
        Produto jkl = fabProduto2.metodoFabrica();

    }
}
