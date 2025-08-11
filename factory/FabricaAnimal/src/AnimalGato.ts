import { Animal } from './Animal';

export class AnimalGato extends Animal {
    constructor(nome: string) {
      super(nome);
      console.log(`Sou o gato ${this.nome}`);
    }
  
    falar(): void {
      console.log("miaaau!");
    }
}