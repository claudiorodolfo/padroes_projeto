import { AnimalFactory } from './AnimalFactory';
import { Animal } from './Animal';
import { AnimalCachorro } from './AnimalCachorro';

export class AnimalCachorroFactory extends AnimalFactory {
    getAnimal(nome: string): Animal {
        return new AnimalCachorro(nome);
    }
}
