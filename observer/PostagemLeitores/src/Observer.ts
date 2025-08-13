import { Subject } from './Subject';

export abstract class Observer {
  update(subject: Subject): void {}
}