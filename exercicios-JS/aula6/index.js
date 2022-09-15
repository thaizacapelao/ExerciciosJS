// let = É uma variável, algo que pode ser modificado ao longo do código;
// ou podemos usar o var;

let nome = "Thaiza";

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Gabriel.');
console.log(nome, 'casou-se com Gabriel em 2012.');
console.log('Gabriel teve 1 filho com', nome, 'em 2015.');
console.log('A Filho de', nome, 'se chama Mara.');

// Outra forma de ser feito:

let sobrenome;
sobrenome = 'Capelão';

console.log(sobrenome);

/* Não podemos criar variáveis com palavras reservadas, por exemplo 'let console';
Não posso começar o nome de uma variável com um número;
Não podem conter espaços ou traços;
Utilizamos camelCase/Case-sensitive
Não podemos redeclarar variáveis com let
*/

let nomeCompleto = 'Thaiza Capelão';

console.log(nomeCompleto);

let nomeCliente = 'Thaiza';
let nomecliente= 'Silva';

console.log(nomeCliente, nomecliente);

//modificando o valor do nomeCliente:

nomeCompleto = 'Gabriel';

console.log(nomeCompleto);
