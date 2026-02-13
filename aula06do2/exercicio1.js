const prompt = require('prompt-sync')();
let ponto1 = Number(prompt('Digite o primeiro ponto do aluno: '));
let ponto2 = Number(prompt('Digite o segundo ponto do aluno: '));

let divisao = (ponto1 + ponto2) /2
let div = divisao **2
console.log('O resultado dos pontos do aluno é: ' + div);