const titulo = document.querySelector('#titulo-principal');
const container = document.querySelector('#container-conteudo');
const botao = document.querySelector('#meu-botao');

document.body.style.backgroundColor = '#cd1a1a'; // Fundo cinza claro
titulo.style.color = 'darkblue';                 // Título em azul escuro
botao.style.padding = '10px 20px';               // Botão com preenchimento
botao.style.cursor = 'pointer';                  // Cursor de mãozinha
container.style.marginTop = '20px';              // Espaço acima da div


botao.addEventListener('click', function() {
   
    container.innerHTML = '<h2>Esse é o pernafina farmando aura maxima!</h2>';
    container.innerHTML += '<img src="https://www.google.com/imgres?q=pabllo&imgurl=https%3A%2F%2Fcdn-images.dzcdn.net%2Fimages%2Fcover%2F680bd75396e719020a7689cd15c6c645%2F0x1900-000000-80-0-0.jpg&imgrefurl=https%3A%2F%2Fwww.deezer.com%2Fbr%2Fartist%2F11301722&docid=pZwejI0GhLyzqM&tbnid=UFEIP7_lbTiLsM&vet=12ahUKEwiW3Iik8taSAxV4s5UCHV9xIeg4FBCc8A56BAgpEAE..i&w=1200&h=1200&hcb=2&ved=2ahUKEwiW3Iik8taSAxV4s5UCHV9xIeg4FBCc8A56BAgpEAE" alt="Imagem Legal" style="border: 5px solid white; box-shadow: 2px 2px 10px rgba(0,0,0,0.2);">';

    titulo.innerText = 'UHUHUHUHUHHUHUH VOCE CLICOU PARABENS!!';
    titulo.style.color = 'green';
});
