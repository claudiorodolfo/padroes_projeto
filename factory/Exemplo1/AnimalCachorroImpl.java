public class AnimalCachorroImpl extends AnimalFactory {
    public Animal getAnimal(String nome) {
        return new AnimalCachorro(nome);
    }
}
