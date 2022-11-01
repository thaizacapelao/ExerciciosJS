// function saudacao(nome) {
//     return `Bom dia ${nome}!`;
// }

// const variavel = saudacao('Thaiza');
// console.log(variavel);

// function soma(x, y) {
//     const resultado = x + y;
//     return resultado;
// }

// // console.log(soma(2, 2));
// // console.log(soma(3, 1));
// // console.log(soma(5, 10));

// // console.log(soma(2, 2));

// const resultado = soma(2, 2);
// console.log(resultado);

const raiz = n =>  n ** 0.5;

// outra forma de escrever menos simplificada:

const raiz2 = function(n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz2(16));

// function ou => (arrow function)