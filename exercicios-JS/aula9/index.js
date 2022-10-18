//Tipos de dados primitivos: String, number, undefind, null, boolean e symbol

const nome = 'Luiz'; //String
const nome1 = "Luiz"; //String
const nome2 = `Luiz`; //String

const num = 10; //Number
const num2 = 10.52; //Number

let nomeAluno; // undefined = não aponta pra local nenhum da memória
const SobrenomeAluno = null; //Nulo = não aponta pra local nenhum da memória
// Quando for necessario não apontar para nenhum local, o ideal será utilizar Null
const aprovado = true; //boolean = true or false (lógico)

console.log(typeof num, num);

//tipo de dado primitivo =/= tipo de dado passado por referencia

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
// push serve parar acrescentar um valor em "b" neste caso.
// O valor adicionado em "b" também foi adicionado em "a"
// Esse é um tipo de dado passado por referencia
console.log(a, b);

let c = 2;
const d = c;
console.log(c, d); // 2, 2

c = 3;
console.log(c, d); // 3, 2
