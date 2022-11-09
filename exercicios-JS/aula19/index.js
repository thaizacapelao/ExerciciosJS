/*
Primitivos - string, number, boolean, undefined, null (bigint, symbol)
Null (bigint, symbol) - valores copiados

referência (mutável) - array, object, function - Valores passados por referência
*/

//          012345
// let nome = 'Thaiza';
// nome[0] = 'R';
// console.log(nome[0], nome);

// A string é imutável, então não podemos alterar o valor de 0

// let a = 'A';
// let b = a; // Cópiando o valor
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;

// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Thaiza');
// console.log(a, c);

const a = {
    nome: 'Thaiza',
    sobrenome: 'Capelão'
};

const b = a;

a.nome = 'Anna';
console.log(a);
console.log(b);
