import { VisualComponent } from './VisualComponent';

export class TextView extends VisualComponent {
    public draw(): void {
        console.log("Desenhou TextView");
    }
}