import { Subject } from './Subject';
import { Observer } from './Observer';

export class Postagem extends Subject {
    private observers: Observer[] = [];
  
    public addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    public removeObserver(observer: Observer): void {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    public notifyObservers(): void {
      this.observers.forEach(obs => obs.update(this));
    }

      // Exemplo de mudança de estado que dispara notificações
    public newPost(content: string): void {
        console.log(`Nova postagem: ${content}`);
        this.notifyObservers();
    }
}