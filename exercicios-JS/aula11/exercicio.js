// numero = '10';
// numero = Number(numero);
// console.log(numero);

//Exercicio:

let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número');

num1 = Number(num1);
num2 = Number(num2); // Foi utilizado para transformar o tipo string
// Para tipo Number e o resultado ser 525 e não 50025 (que seria se fosse string)

// const resultado = num1 + num2;

// console.log( num1 + num2);
// alert('O resultado da sua conta foi: ' + resultado)

alert(`O resultado da sua conta foi: ${num1 + num2}`); 
// É a melhor forma de ser escrito (template strings)
// ja que num1 + num2 vai ser usado somente ai, podemos trocar o resultado = num1 + num2
// num1 + num2 dentro do template string

