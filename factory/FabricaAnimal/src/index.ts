import { AnimalFactory } from './AnimalFactory';
import { AnimalCachorroFactory } from './AnimalCachorroFactory';
import { AnimalGatoFactory } from './AnimalGatoFactory';
import { Animal } from './Animal';

function main(): void {
  const fabCaes: AnimalFactory = new AnimalCachorroFactory();
  const fabGatos: AnimalFactory = new AnimalGatoFactory();

  let nome = "James";
  const dog: Animal = fabCaes.getAnimal(nome);
  dog.falar();

  nome = "Marvin";
  const cat: Animal = fabGatos.getAnimal(nome);
  cat.falar();
}

main();