"use strict";

var _console, _console2;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Capítulo 14 - Expansão com o operador Spread

/*
Exercício 1 - Hora do ditado
Refatore o código a seguir para utilizar o operador Spread no método log do console.

console.log('e','c','m','a','s','c','r','i','p','t');
*/
var arr = ["e", "c", "m", "a", "s", "c", "r", "i", "p", "t"];

(_console = console).log.apply(_console, arr);
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


var contaQuantidadeVogaisNaoAcentuadas = function contaQuantidadeVogaisNaoAcentuadas() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.forEach(function (word) {
    return console.log(String(word).match(/[aeiou]/g).length);
  });
};

var arr2 = ["teste", "palavra", "decidido", "sagaz"];
contaQuantidadeVogaisNaoAcentuadas.apply(void 0, _toConsumableArray(arr2));
arr2 = ["undefine", "adalberto", "justificativa"];
contaQuantidadeVogaisNaoAcentuadas.apply(void 0, _toConsumableArray(arr2));
/*
Exercício 4 - Esse jeito é tão ultrapassado...
Como podemos refatorar o código a seguir sem utilizar os benefícios do ECMAScript 6?

var argumentos = [1,2,3];
console.log(argumentos[0], argumentos[1], argumentos[2]);
// 1, 2, 3
*/

var argumentos = [1, 2, 3];

(_console2 = console).log.apply(_console2, argumentos);
/*
Exercício 5 - A união faz a força
Refatore o código a seguir para utilizar o operador Spread ao invés do método concat.

const equipeMarketing = ['Joana', 'Marcela', 'Bruna'];
const equipeComercial = ['Talita', 'Luisa', 'Vitória'];

const timeCompleto = equipeMarketing.concat(equipeComercial);

realizaBrainstorm(timeCompleto);
*/


var equipeMarketing = ["Joana", "Marcela", "Bruna"];
var equipeComercial = ["Talita", "Luisa", "Vitória"];
var timeCompleto = equipeMarketing.concat(equipeComercial);

var realizaBrainstorm = function realizaBrainstorm(timeCompleto) {
  return console.log(timeCompleto);
};

realizaBrainstorm([].concat(equipeMarketing, equipeComercial));