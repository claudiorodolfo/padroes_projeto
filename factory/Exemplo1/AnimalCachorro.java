public class AnimalCachorro extends Animal {
	public AnimalCachorro(String nome) {
		this.nome = nome;
		System.out.println("Sou o cachorro " + this.nome);
	}    

    public void falar() {
        System.out.println("au au!");
    }    
}
