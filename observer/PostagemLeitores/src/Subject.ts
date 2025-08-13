import { Observer } from './Observer';

export abstract class Subject {
    addObserver(observer: Observer): void {}
    removeObserver(observer: Observer): void {}
    notifyObservers(): void {}
  }