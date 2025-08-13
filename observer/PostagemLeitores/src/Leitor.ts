import { Observer } from './Observer';
import { Subject } from './Subject';

export class Leitor extends Observer {
    constructor(private name: string) {
      super();
    }
    
    update(subject: Subject): void {
      console.log(`${this.name} foi notificado de uma nova postagem.`);
    }
  }