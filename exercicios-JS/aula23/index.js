/*
&& - Todas as expressoes precisam ser verdadeiras para que retorne "and" retorne verdadeiro
|| - Todas as expressoes precisam ser falsas para que o "or" retorne falso

&& -> false && true -> false (Entrou uma falsa ele para de checar)
|| -> true && false -> vai retornar "o valor verdadeiro"

Qualquer coisa diferente de:
0
' ' " " ` `
null / undefined
NaN

Será true.
*/


//Testando o &&:

// console.log ('Luiz' && 'Maria'); // verdadeiro
// console.log ('Luiz' && undefined && 'Maria'); // undefined


// function falaOi () {
//     return 'Oi';
// }
// let vaiExecutar = 'Joãozinho';

// console.log(vaiExecutar && falaOi());


//Testando o ||:

// Como Thaiza não é uma string vazia, e nenhum dos outros valores cai em "false"
// Ele vai retornar "Thaiza" porque =/= de string vazia = true

// console.log(0 || false || null || 'Thaiza' || true);

// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'preto';

// console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; // vai sair como "false", mão o valor de falso e sim a string false.
const d = false;
const e = NaN;

// console.log(a || b || c || d || e);

// Se eu colocar um 'Thaiza'

console.log(a || b || 'Thaiza' || c || d || e);

//Sera exibido Thaiza apenas, SE ESTE, ESTIVER ANTES DO VALOR DE "C".