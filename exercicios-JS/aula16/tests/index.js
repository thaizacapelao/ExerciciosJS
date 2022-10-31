//            012345678910
const nome = "Luiz Otávio";

// No Array o index é diferente, é indexado por ELEMENTO
//                0        1       2          3       4
const alunos = ['Luiz', 'Maria', 'João']; // Otavio, Gabriel
// console.log(alunos[0]);

// alunos[alunos.length] = 'Luiza';
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';

// Função que faz exatamente a mesma coisa que acima
// Adiciona um elemento no final do Array =

// alunos.push('Otávio');
// alunos.push('Gabriel'); //PUSH É O MAIS UTILIZADO

// "fatiar" retira os indices que eu apontar=

// console.log(alunos.slice(0, -1));

// Para adicionar no começo ao inves do final=

// alunos.unshift('Milena');

// Para remover o ultimo elemento=

// const removido = alunos.pop();

// remove o primeiro item=

// const removido = alunos.shift();

// console.log(alunos);
// console.log(removido) // ele aponta o nome de quem foi removido

console.log(typeof alunos); // vai considerar o array como objeto (object);