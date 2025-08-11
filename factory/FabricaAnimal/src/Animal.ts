export abstract class Animal {
    private nome: string;
    private sexo: string;
  
    public constructor(nome: string) {
      this.nome = nome;
      this.sexo = "";
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string) {
      this.nome = nome;
    }

    public getSexo(): string {
      return this.sexo;
    }

    public setSexo(sexo: string) {
      this.sexo = sexo;
    }

    abstract falar(): void;
  }