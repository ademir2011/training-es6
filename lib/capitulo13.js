"use strict";

// Capítulo 13 - Parâmetros infinitos com operador Rest

/*
Exercício 1 - Gastando até o que não tem
Refatore o código a seguir para utilizar o operador Rest:

function calculaPrecoTotal(a, b, c, d, e) {
  let precos = [a,b,c,d,e];
  return precos.reduce(function(total, preco) {
    return total + preco;
  }, 0)
}

calculaPrecoTotal(1,2,3,4,5); // 15
*/
var calculaPrecoTotal = function calculaPrecoTotal() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, preco) {
    return total + preco;
  }, 0);
};

console.log(calculaPrecoTotal(1, 2, 3, 4, 5)); // 15

/*
Exercício 2 - Eu sou maior do que você, lero lero!
Utilize o operador Rest para criar uma função que recebe um parâmetro referência, 
que é obrigatório, e mais n parâmetros numéricos. O objetivo é que esta função calcule se todos os valores 
numéricos passados são maiores que a referência e retorne verdadeiro ou falso.

Exemplo: todosSaoMaioresQue(2,3,4,5,6,7); // resultado esperado: true

Outros exemplos de entradas: todosSaoMaioresQue(5,4,3,2,1); // resultado esperado: false 
todosSaoMaioresQue(1,2); // resultado esperado: true
*/

var todosSaoMaioresQue = function todosSaoMaioresQue(valor) {
  for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    params[_key2 - 1] = arguments[_key2];
  }

  return params.every(function (item) {
    return valor < item;
  });
};

console.log(todosSaoMaioresQue(5, 4, 3, 2, 1));
console.log(todosSaoMaioresQue(1, 2));
/*
Exercício 3 - Bingo!
Refatore o código abaixo para utilizar o operador Rest ao invés do arguments

function anunciaBolasSorteadas() {
  var nBolas = arguments.length;
  for(var i = 0; i < nBolas; i++) {
    console.log('A bola escolhida foi: ' + arguments[i]);
  }
}

anunciaBolasSorteadas(1,2,3);
// saída
// A bola escolhida foi: 1
// A bola escolhida foi: 2
// A bola escolhida foi: 3
*/

var anunciaBolasSorteadas = function anunciaBolasSorteadas() {
  for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    params[_key3] = arguments[_key3];
  }

  return params.forEach(function (item) {
    return console.log("A bola escolhida foi: ".concat(item));
  });
};

anunciaBolasSorteadas(1, 2, 3);
/*
Exercício 4 - Mas o professor que ensinou assim!
Um aluno de computação tentou utilizar o operador Rest para tratar números e letras, de quantidade indefinida, 
dentro do seu código, mas não conseguiu. Este foi o código que ele escreveu:

function numerosELetras(...numeros, ...letras){
  // corpo da função
}

Explique o porque este código não funciona.
*/
// O operador rest está sendo utilizado errado, pois não faz sentido utilizar
// o operador duas vezes pois apenas com um já basta para pegar todos os argumentos
// passados

/*
Exercício 5 - Este sim saber argumentar
O que é o objeto arguments?
*/
// É o objeto no formato de array-like que pega n elementos passados quando
// a função é chamado idependentemente da quantidade