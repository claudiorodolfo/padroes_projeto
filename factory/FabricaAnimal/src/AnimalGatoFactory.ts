import { AnimalFactory } from './AnimalFactory';
import { Animal } from './Animal';
import { AnimalGato } from './AnimalGato';

export class AnimalGatoFactory extends AnimalFactory {
    getAnimal(nome: string): Animal {
        return new AnimalGato(nome);
    }     
}