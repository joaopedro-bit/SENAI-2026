function saudacao(nome,sobrenome){
    console.log('ola, seja bem vindo ' + nome +'' + sobrenome);
}

saudacao('joão',' pedro'); //chamada da função

//função anoinima
const somar = function(num1,num2){
    console.log('a soma dos numeros é = ' + (num1+num2));
}
somar(25,35);

//arrow function
const subtrair = (num1,num2) => {
    console.log('a subtracao dos numeros é = ' + (num1-num2));
}
subtrair(30,50);

const subtrairComretorno = (num1,num2) => {
   return num1-num2;
}
console.log('a subtração com retorno dos numeros é = ' +
subtrairComretorno(30,50));
