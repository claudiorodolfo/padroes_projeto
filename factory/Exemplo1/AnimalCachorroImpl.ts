class AnimalCachorroImpl extends AnimalFactory {
    public getAnimal(nome: String): Animal {
        return new AnimalCachorro(nome);
    }
}
