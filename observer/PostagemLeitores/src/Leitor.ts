import { Observer } from './Observer';

export class Leitor extends Observer {
    constructor(private name: string) {
      super();
    }
    
    update(subject: import('./Subject').Subject): void {
      console.log(`${this.name} foi notificado de uma nova postagem.`);
    }
  }