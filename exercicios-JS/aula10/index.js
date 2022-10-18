/* Operadores Aritiméticos: 
    + (adição/concatenação)
    - 
    /
    *
    ** = Potenciação (Elevar um número a outro número)
    % Resto da divisão
    ++ = incremento
    -- = decremento
*/

// Concatenação = (união de dois valores) quando for uma string + number = Ele vai unir 
// esses dois valores, unindo se tem = 510
// Se não tiver a string, apenas acontecerá a soma = 15;

const num1 = '5';
const num2 = 10;
console.log(num1 + num2 + num1);

// Posso utilizar o mesmo valor mais de uma vez

let contador = 1;
contador++; //ele mesmo +1 (1+1 = 2)
contador++; // 3
contador++; // 4
contador++; // 5

console.log(contador++); //Não é uma boa pratica

const passo = 2;
let contador2 = 0;

// contador2 = contador2 + passo;
// console.log(contador2);
// contador2 = contador2 + passo;
// console.log(contador2);
// contador2 = contador2 + passo;
// console.log(contador2);

// Para fazer-mos o que está acima de uma maneira mais simples
// podemos utilizar dessa maneira:

let contador3
contador3 += 2; // += contador + contador + 2
contador3 += 2; // += contador + contador + 2
contador3 += 2; // += contador + contador + 2
contador3 += 2; // += contador + contador + 2

console.log(contador);

//NaN = not a number (caso use uma string)

const num4 = 10;
const num5 = 'L5'; //NaN - utilizamos parseFloat(para decimais) ou parseInt (p/ inteiros)
console.log(num4 * num5);
console.log(typeof num5);