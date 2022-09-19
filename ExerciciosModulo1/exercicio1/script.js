//FizzBuzz
//Divisivel por 3 = Fizz
//Divisivel por 5 = Buzz
//Divisivel por 3 e 5 = FizzBuzz
//Se nao for número = N é um numero
//Se n for divisivel nem por 3 e 5 = Entrada

let resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada) {
    if(typeof entrada !== 'number')
        return "Não é um numero";
    if((entrada % 3 === 0) && (entrada % 5 === 0))
        return "FizzBuzz";
    if(entrada % 3 === 0)
        return "Fizz";
    if(entrada % 5 === 0){
        return "Buzz"
    } else
        return (entrada);   

}