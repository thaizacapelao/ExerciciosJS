/* Não podemos criar variáveis com palavras reservadas, por exemplo 'let console';
Não posso começar o nome de uma variável com um número;
Não podem conter espaços ou traços;
Utilizamos camelCase/Case-sensitive
Não podemos redeclarar variáveis com let
*/

//Essas regras também se aplicam a variáveis:

const nome = 'Thaiza';
console.log(nome);

//Como é uma constante eu não poderei modifica-la, como é o caso da variável

// nome = 'Gabriel'; (exemplo)


// String = Text | Number = Número
const primeiroNumero = 5; //Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

/* 
* = Vezes  
/ = divisão
+ = soma
- = menos
*/

console.log (resultado);
//typeof = Usado para verificar se é uma string ou number
console.log(typeof primeiroNumero);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(typeof (primeiroNumero + segundoNumero));

