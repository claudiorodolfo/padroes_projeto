import { Animal } from './Animal';

export class AnimalGato extends Animal {
    public constructor(nome: string) {
      super(nome);
      console.log(`Sou o gato ${this.getNome()}`);
    }
  
    public falar(): void {
      console.log("miaaau!");
    }
}