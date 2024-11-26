class AnimalGato extends Animal {
    constructor(nome: string) {
        super();  // Chama o construtor da classe pai (Animal)
        this.nome = nome;
        console.log("Sou o gato " + this.nome);
    }

    falar(): void {
        console.log("miaaau!");
    }
}