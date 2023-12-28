public class AnimalGato extends Animal {
    public AnimalGato(String nome) {
		this.nome = nome;
		System.out.println("Sou o gato " + this.nome);
	} 

    public void falar() {
        System.out.println("miaaau!");
    }        
}
