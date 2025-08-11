import { Animal } from './Animal';

export class AnimalCachorro extends Animal {
    constructor(nome: string) {
      super(nome);
      console.log(`Sou o cachorro ${this.nome}`);
    }
  
    falar(): void {
      console.log("au au!");
    }
  }