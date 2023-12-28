public class AnimalGatoImpl extends AnimalFactory {
    public Animal getAnimal(String nome) {
        return new AnimalGato(nome);
    }     
}
