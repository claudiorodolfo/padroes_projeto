import { Animal } from './Animal';

export class AnimalCachorro extends Animal {
    public constructor(nome: string) {
      super(nome);
      console.log(`Sou o cachorro ${this.getNome()}`);
    }
  
    public falar(): void {
      console.log("au au!");
    }
  }