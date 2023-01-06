/*
Operadores Lógicos
&& -> AND -> E (Todas as expressõs precisam ser verdadeiras para retornar verdadeiro)
|| -> OR -> OU
! -> NOT -> NÃO
*/

// const expressaoAnd = true && true && true && true;
const expressaoOr = true || false ;
// console.log(expressaoAnd);
console.log(expressaoOr);

const usuario = 'Thaiza'; // form usuário digitou
const senha = '123456'; //form usuário digitou


//                             True   E              True
const vaiLogar = usuario === 'Thaiza' && senha === '123456';
//Caso fosse utilizado esse operador: || (ou) O usuário poderia logar com uma das
//validações sendo verdadeira, se só o usuário estivesse correto ele logaria, ou
//se somente a senha estivesse corrta (Ou seja não usamos || e sim && = "E")
console.log(vaiLogar);