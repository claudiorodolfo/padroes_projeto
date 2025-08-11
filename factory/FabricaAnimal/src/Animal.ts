export abstract class Animal {
    nome: string;
    sexo: string;
  
    constructor(nome: string) {
      this.nome = nome;
      this.sexo = "";
    }
  
    abstract falar(): void;
  }