class Cidade {
    qntdHabitantes = 505000;
    estado = 'São Paulo';
    nome = 'São José do Rio Preto';
    pais = 'Brasil';

    mostrarDados() {
        console.log('Cidade: S.J.R.P');
        console.log('Estado: São Paulo');
        console.log('País: Brasil');
        console.log('População: 505000 habitantes');
    }
}

const ultimaCidade = new Cidade();
ultimaCidade.mostrarDados();
