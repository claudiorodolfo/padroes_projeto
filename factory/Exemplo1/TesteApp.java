public class TesteApp {
    public static void main(String[] args) {
        AnimalFactory fabCaes = new AnimalCachorroImpl();
		AnimalFactory fabGatos = new AnimalGatoImpl();

        String nome = "James";
		Animal dog = fabCaes.getAnimal(nome);
        dog.falar();
        
        nome = "Marvin";
        Animal cat = fabGatos.getAnimal(nome);
        cat.falar();
    }
}
