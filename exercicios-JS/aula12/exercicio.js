let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// Fazer os respectivos valores apontar para as letras que estão na frente
/* Sem usar essa forma de solução:

varA = 'B';
varB = 'C';
varC = 'A';

ou essa que dará erro:

varA = varB; // B
varB = varC; // C
varC = varA; // B (Pois varA ja foi redefinido como 'B', n vai trazer o 
resultado 'A')
*/

// 1º maneira de resolução:

// const varATemp = varA;
// varA = varB; // = B
// varB = varC; // = C
// varC = varATemp; // = A

// 2º maneira maneira de resolução:

[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC);
