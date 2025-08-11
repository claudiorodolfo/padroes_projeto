import { Animal } from './Animal';

export  abstract class AnimalFactory {
    abstract getAnimal(nome: string): Animal;
}