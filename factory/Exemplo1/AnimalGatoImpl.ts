class AnimalGatoImpl extends AnimalFactory {
    public Animal getAnimal(nome: String): Animal {
        return new AnimalGato(nome);
    }     
}
