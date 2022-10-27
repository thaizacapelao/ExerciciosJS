let num1 = 0.7; //number
let num2 = 0.1; //number

num1 += num2; // num1 = num1 + num2; // 0.8
num1 += num2; // num1 = num1 + num2; // 0.9
num1 += num2; // num1 = num1 + num2; // 1.0

num1 = num1.toFixed(2);

console.log(num1)

/*
console.log(num1.toString() + num2);
num1 = num1.toString()
console.log(typeof num1);
console.log(num1.toString(2)) // terei a representação binaria daquele número
console.log(num1.toFixed(2)) //sumir com algumas casas do número, para ele não ficar muito extenso (Ele vai arredondar para cima)
console.log(Number.isInteger(num1)); // para ver se esse número definido é inteiro
*/

// let temp = num1 * 'Ola';
//console.log(Number.isNaN(temp));

