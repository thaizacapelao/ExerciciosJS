// const array = [1,2,3]; // const não é variavel, se fosse let eu poderia alterar la em baixo

// array.push(4);
// array[0] = 'Thaiza';
// console.log(array);

// array = 'NaN';

// const nome01 = 'Thaiza';
// const sobrenome01 = 'Capelão';
// const idade01 = 26;

// const nome02 = 'Gabriel';
// const sobrenome02 = 'Boos';
// const idade02 = 25;

// // como simplificar:

// const pessoa1 = {
//     nome: 'Thaiza',
//     sobrenome: 'Capelão',
//     idade: 26,
// };

// console.log(pessoa1)
// console.log(pessoa1.idade)
// console.log(pessoa1.sobrenome)
// console.log(pessoa1.nome)

// const pessoa2 = {
//     nome: 'Gabriel',
//     sobrenome: 'Boos',
//     idade: 25,
// };

// console.log(pessoa2)
// console.log(pessoa2.idade)
// console.log(pessoa2.sobrenome)
// console.log(pessoa2.nome)

// function CriaPessoa (nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// }

// const pessoa1 = CriaPessoa('Thaiza', 'Capelão', '26');
// const pessoa2 = CriaPessoa('Gabriel', 'Boos', '25');
// const pessoa3 = CriaPessoa('Amanda', 'Souza', '27');

// console.log(pessoa1)
// console.log(pessoa2)
// console.log(pessoa3)

const pessoa1 = {
    nome: 'Thaiza',
    sobrenome: 'Capelao',
    idade: 26,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrimentaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrimentaIdade();
pessoa1.fala();
pessoa1.incrimentaIdade();
pessoa1.fala();
pessoa1.incrimentaIdade();
pessoa1.fala();

// this = esse objeto nesse contexto;