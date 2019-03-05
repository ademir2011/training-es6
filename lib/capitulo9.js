"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Capítulo 09 - Manipulação de textos com template strings

/*
Exercício 1 - Lista de compras
Utilizando Templates Literais Marcadas, crie uma tag que transforma uma String que representa uma lista de compras (divididas por vírgula) em um elemento de lista HTML 
(<ul> com <li>).

Por exemplo:

const compras = ‘leite,feijão,arroz,mandioca’;
var elemento = tag`${compras}`;

console.log(elemento)
// <ul><li>leite<li><li>feijão<li><li>arroz<li><li>mandioca<li></ul>
*/
var tag = function tag(string) {
  for (var _len = arguments.length, valores = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    valores[_key - 1] = arguments[_key];
  }

  return valores[0].split(",").map(function (item) {
    return "<li>".concat(item, "</li>");
  }).join("");
};

var compras = "leite,feij\xE3o,arroz,mandioca";
var elemento = tag(_templateObject(), compras);
console.log(elemento);
/*
Exercício 2 - Maçaroca de Strings
Implemente o método criaMacaroca que recebe como parâmetro uma lista de strings. O método deve retornar uma única string que é o resultado de todos os itens do array concatenados. É obrigatório a utilização de template string.

Exemplo: criaMacaroca(['a','b','c', 'd']) → abcd
*/

var criaMacaroca = function criaMacaroca(list) {
  return "".concat(list[0]).concat(list[1]).concat(list[2]).concat(list[3]);
};
/*
Exercício 3 - Quero o seu endereço completo
Implemente o método montaEnderecoCompleto que recebe os seguites parâmetros:

rua: String que reprenta o nome de uma rua
cidade: String que representa o nome de uma cidade
numero: Inteiro que representa o número da casa
cep: String que representa o CEP de um endereço
O método deve retornar uma única string com esses dados no seguinte formato: , - ,

Lembre-se de respeitar as vírgulas e os espaços!
*/


var montaEnderecoCompleto = function montaEnderecoCompleto() {
  return "".concat(arguments.length <= 0 ? undefined : arguments[0], ", ").concat(arguments.length <= 1 ? undefined : arguments[1], ", ").concat(arguments.length <= 2 ? undefined : arguments[2], ", ").concat(arguments.length <= 3 ? undefined : arguments[3]);
};

console.log(montaEnderecoCompleto("Rua dos infelizes", "zumbido", "69", "159159-555"));
/*
Exercício 4 - Seja muito bem-vindo!
Refatore o código a seguir para utilizar template strings.

let nome = 'usuario';
console.log('Bem-vindo ' + usuário + '!');
*/

var nome = "usuario";
console.log("Bem-vindo ".concat(nome, " !"));
/*
Exercício 5 - Cálculo interpolado
Faça a implementação da função 'soma' que recebe como parâmetro dois valores que devem ser somados. O resultado da soma deve ser exibido no console no seguinte formato:

+ =

Utilize template string para implementar este método.

Exemplo: soma(1,2) → 1 + 2 = 3
*/

var soma = function soma() {
  return "".concat(arguments.length <= 0 ? undefined : arguments[0], " + ").concat(arguments.length <= 1 ? undefined : arguments[1], " = ").concat((arguments.length <= 0 ? undefined : arguments[0]) + (arguments.length <= 1 ? undefined : arguments[1]));
};

console.log(soma(1, 2));