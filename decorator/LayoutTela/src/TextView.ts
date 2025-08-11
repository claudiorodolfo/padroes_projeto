import { VisualComponent } from './VisualComponent';

export class TextView extends VisualComponent {
    draw(): void {
        console.log("Desenhou TextView");
    }
}