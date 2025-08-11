import { TextView } from './TextView';
import { ScrollDecorator } from './ScrollDecorator';
import { BorderDecorator } from './BorderDecorator';

function main(): void {
        const tv: TextView = new TextView();
        const sd: ScrollDecorator = new ScrollDecorator(tv);
        const bd: BorderDecorator = new BorderDecorator(sd);
        bd.draw();
}

main();