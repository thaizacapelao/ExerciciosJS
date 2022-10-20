//               01234567 - indices indicados pelos caracteres da escrita;
let umaString = 'Um texto'; // se usar um valor inexistente tipo 8;
// dará como resultado undefined;

// console.log(umaString[4]); // vai ser exibido o "e" que esta em baixo do 4;
// é usado para pegar um elemento dentro da string;

// posso usar essa função charAt(4));

//concat = faz a mesma coisa que um sinal de + faz

console.log(umaString.concat(' ', 'em', ' ', 'um lindo dia.',));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

// 3 formas de concatenação;

console.log(umaString.indexOf('Texto'));

// colocando 'Texto' maiusculo e não minusculo como esta na variável;
// ele irá retornar como -1 pois não encontrou o objeto;
// 'texto' minusculo será encontrado no indice 3;

console.log(umaString.indexOf('Um'));
// indice 0

console.log(umaString.indexOf('o', 3));
// Ele irá mapear a partir do indice 3 até achar a letra o;

console.log(umaString.match(/[a-z]/g));

console.log(umaString.search(/x/));
// vai procurar em que indice esta a letra 'x';

console.log(umaString.replace('Um', 'Outra'));
// Será trocado um para Outra;

let outraString = "O rato roeu a roupa do rei de roma.";

console.log(outraString.replace(/r/g, '#'));
// Substitui o "r" do "rato" para "#";

// /r/ sem o 'g' é somente o primeiro r;
// /r/g = pega todos os 'r';

console.log(outraString.length);
// para ver o tamanho da string (35 caracteres);

//O Split (dividir) é usado para dividir uma string, se quero dividir pelo espaço é só colocar um espaço la dentro;
console.log(outraString.split(' '));

//toUpperCase deixa toda a escrita em maiusculo;
//toLowerCase tudo em minúsculo
console.log(outraString.toUpperCase(' '));