const prompt = require('prompt-sync')();
const idade = Number(prompt("Digite a sua idade: "));
if (idade >= 16) {
    console.log("você tem idade, pode pegar os livros.");
    if (idade >= 18) {
        console.log("você é adulto.");
    } else {
        console.log("você é menor de idade.");
    }
} else {
    console.log("você não pode pegar os livros.");
}