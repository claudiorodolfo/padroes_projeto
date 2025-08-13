import { Postagem } from './Postagem';
import { Leitor } from './Leitor';

function main(): void {
    const postagem = new Postagem();
    const joao  = new Leitor('João');
    const maria = new Leitor('Maria');
    
    postagem.addObserver(joao);
    postagem.addObserver(maria);
    
    postagem.newPost("Olá mundo!"); // Notifica João e Maria
    postagem.removeObserver(joao);
    postagem.newPost("Mais uma postagem!"); // Notifica apenas Maria

}

main();