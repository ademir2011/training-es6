// Capítulo 14 - Expansão com o operador Spread

/*
Exercício 1 - Hora do ditado
Refatore o código a seguir para utilizar o operador Spread no método log do console.

console.log('e','c','m','a','s','c','r','i','p','t');
*/

const arr = ["e", "c", "m", "a", "s", "c", "r", "i", "p", "t"];

console.log(...arr);

/*
Exercício 2 - Não são só umas reticências?
Qual a diferença básica entre os operadores Rest e Spread?
*/

// O operador rest serve como alternativa do argument, recebendo n parâmetros
// e alocando-os em um array

// O Spread vai funcionar basicamente para expandir uma quantidade n de elementos
// da mesma forma que o método apply faz

/*
Exercício 3 - Contador de Vogais
Implemente o método contaQuantidadeVogaisNaoAcentuadas que recebe um número indeterminado de palavras 
e retorna para o usuário o número total de vogais não acentuadas encontradas. 
Para este exercício, Considere somente palavras em minúsculo.
*/

const contaQuantidadeVogaisNaoAcentuadas = (...params) =>
  params.forEach(word => console.log(String(word).match(/[aeiou]/g).length));

let arr2 = ["teste", "palavra", "decidido", "sagaz"];
contaQuantidadeVogaisNaoAcentuadas(...arr2);

arr2 = ["undefine", "adalberto", "justificativa"];
contaQuantidadeVogaisNaoAcentuadas(...arr2);

/*
Exercício 4 - Esse jeito é tão ultrapassado...
Como podemos refatorar o código a seguir sem utilizar os benefícios do ECMAScript 6?

var argumentos = [1,2,3];
console.log(argumentos[0], argumentos[1], argumentos[2]);
// 1, 2, 3
*/

const argumentos = [1, 2, 3];
console.log(...argumentos);

/*
Exercício 5 - A união faz a força
Refatore o código a seguir para utilizar o operador Spread ao invés do método concat.

const equipeMarketing = ['Joana', 'Marcela', 'Bruna'];
const equipeComercial = ['Talita', 'Luisa', 'Vitória'];

const timeCompleto = equipeMarketing.concat(equipeComercial);

realizaBrainstorm(timeCompleto);
*/

const equipeMarketing = ["Joana", "Marcela", "Bruna"];
const equipeComercial = ["Talita", "Luisa", "Vitória"];

const timeCompleto = equipeMarketing.concat(equipeComercial);

const realizaBrainstorm = timeCompleto => console.log(timeCompleto);

realizaBrainstorm([...equipeMarketing, ...equipeComercial]);
