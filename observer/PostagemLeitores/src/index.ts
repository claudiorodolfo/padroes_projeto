import { Postagem } from './Postagem';
import { Leitor } from './Leitor';

function main(): void {
    const postagem = new Postagem();
    const joao = new Leitor('João');
    const maria = new Leitor('Maria');
    
    postagem.attach(joao);
    postagem.attach(maria);
    
    postagem.newPost("Olá mundo!"); // Notifica João e Maria
    postagem.detach(joao);
    postagem.newPost("Mais uma postagem!"); // Notifica apenas Maria

}

main();