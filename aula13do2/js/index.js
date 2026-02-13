const corpo= document.querySelector('body')
const titulo=document.querySelector('.titulo')
const paragrafo=document.querySelector('#texto')
const container=document.querySelector('#container')

corpo.style.backgroundColor='#d649e9'
corpo.style.color="white";

titulo.textContent='manipulando o dom de novo!'

let subtitulo='<h2>manipular o dom é very simple!</h2>'
container.innerHTML=subtitulo