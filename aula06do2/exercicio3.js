const prompt = require('prompt-sync')();
let cracha = prompt("tem crachá?: ")
let uniforme = prompt("ta de uniforme?: ")
let monitor = prompt("é monitor?: ")
let cadastro = prompt("tem cadastro?: ")
let permitido = (
    (cracha === 'sim' && uniforme === 'sim') ||
    monitor === 'sim'
) && cadastro === 'sim';
if (permitido) {
    console.log("LIBERADO");
} else {
    console.log("NEGADO");
}