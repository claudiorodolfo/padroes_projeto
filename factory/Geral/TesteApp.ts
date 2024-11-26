class TesteApp {
    public static main(): void {
        const fabProduto1: Criador = new CriadorConcreto1();
        const fabProduto2: Criador = new CriadorConcreto2();

        const abc: Produto = fabProduto1.metodoFabrica();
        const def: Produto = fabProduto1.metodoFabrica();
        const ghi: Produto = fabProduto1.metodoFabrica();
        const jkl: Produto = fabProduto2.metodoFabrica();
    }
}

// Chama o método main para executar o código
TesteApp.main();
