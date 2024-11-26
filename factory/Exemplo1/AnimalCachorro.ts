class AnimalCachorro extends Animal {
    constructor(nome: string) {
        super();  // Chama o construtor da classe base
        this.nome = nome;
        console.log("Sou o cachorro " + this.nome);
    }

    falar(): void {
        console.log("au au!");
    }    
}
