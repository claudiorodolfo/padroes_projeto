import { Observer } from './Observer';

export abstract class Subject {
    attach(observer: Observer): void {}
    detach(observer: Observer): void {}
    notifyObservers(): void {}
  }