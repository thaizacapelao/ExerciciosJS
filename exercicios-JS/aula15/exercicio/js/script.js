const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

/* Exercício (Do número 55.1987555):
Raiz quadrada:
55.1987555 É inteiro: false (V)
É NaN: false  (V)
Arredondando para baixo: 55 (V)
Arredondando para cima: 56 (V)
Com duas casas decimais: 55.20 (V)
*/

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} É inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>${numero} É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;

// UTILIZANDO O += ELE N VAI RESETAR O VALOR E VAI PERMITIR APARECER TODAS AS LINHAS EM VEZ DE SÓ A ULTIMA
