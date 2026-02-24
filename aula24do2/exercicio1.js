class Livro {
titulo = 'Quinze dias';
    autor = 'Vitor Martins';
    ano = 2017;
    paginas = 208;
    editora = 'Intrínseca';
    genero = 'LGBT';
    tema = 'Amor e Superação';
    idioma = 'Português';

    abrir() {
        console.log('Você abriu o livro: ');
    }

    fechar() {
        console.log('Você fechou o livro: ');
    }
}
const meuLivro = new Livro();
meuLivro.abrir();
meuLivro.fechar();