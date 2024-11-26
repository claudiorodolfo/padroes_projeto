class TesteApp {
    public static main(): void {
        const fabCaes: AnimalFactory = new AnimalCachorroImpl();
        const fabGatos: AnimalFactory = new AnimalGatoImpl();

        let nome = "James";
        const dog: Animal = fabCaes.getAnimal(nome);
        dog.falar();

        nome = "Marvin";
        const cat: Animal = fabGatos.getAnimal(nome);
        cat.falar();
    }
}

// Executar o método main
TesteApp.main();
