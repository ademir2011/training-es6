"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Capítulo 15 - Desestruturamento de Arrays e Objetos

/*
Exercício 1 - Desestruturando a definição
De forma resumida, defina o que é o desestruturamento.
*/
// Uma forma simplificada de extrair valores de Arrays e Objetos

/*
Refatore o trecho de código a seguir para utilizar a técnica de desestruturamento.

const email = usuario.email;
const nome = usuario.nome;
const idade = usuario.idade
*/
var usuario = {
  email: "t@t.com",
  nome: "ademir",
  idade: 15
};
var email = usuario.email,
    nome = usuario.nome,
    idade = usuario.idade;
console.log(email, nome, idade);
/*
Exercício 3 - Não gostei desse nome não
Considere o objeto literal usuario e extraia as propriedades nome e email em variáveis com o nome nick e login, respectivamente.

const usuario = {
  nome: 'Toreto',
  email: 'velozesefuriososparasempre@gmail.com'
}
*/

var usuario2 = {
  nome: "Toreto",
  email: "velozesefuriososparasempre@gmail.com"
};
var nick = usuario2.nome,
    login = usuario2.email;
console.log(nick, login);
/*
Exercício 4 - Minha mãe mandou eu escolher esse daqui...
Considere a lista de contatos a seguir:

const contatos = [
  {
    nome: 'Mario Antonio',
    numero: '1234-5678'
  },
  {
    nome: 'Reinalda Silva',
    numero: '1234-6789'
  },
  {
    nome: 'Bárbara Lopes',
    numero: '1234-5567'
  }
];

Utilizando a técnica de desestruturamento de arrays, obtenha somente os dados do segundo contato.
*/

var contatos = [{
  nome: "Mario Antonio",
  numero: "1234-5678"
}, {
  nome: "Reinalda Silva",
  numero: "1234-6789"
}, {
  nome: "Bárbara Lopes",
  numero: "1234-5567"
}];
var contato = contatos[1];
console.log(contato);
/*
Exercício 5 - Cara-Crachá
Otimize o trecho de código a seguir utilizando o desestruturamento.

const profissional = {
  titulo: 'Engenheiro de Software',
  departamento: 'Engenharia'
};

function isEngenheiro(profissional) {
  const titulo = profissional.titulo;
  const departamento = profissional.departamento;

  return titulo.indexOf("Engenheiro") > -1 && departamento === 'Engenharia';
}

isEngenheiro(profissional); // true
profissional.titulo = 'Marketing';
isEngenheiro(profissional); // false
*/

var profissional = {
  titulo: "Engenheiro de Software",
  departamento: "Engenharia"
};

var isEngenheiro = function isEngenheiro(_ref) {
  var titulo = _ref.titulo,
      departamento = _ref.departamento;
  return titulo.indexOf("Engenheiro") > -1 && departamento === "Engenharia";
};

console.log(isEngenheiro(profissional)); // true

profissional.titulo = "Marketing";
console.log(isEngenheiro(profissional)); // false

/*
Exercício 6 - Mas o que são estes dados!?
O seu sistema escolar contém uma série de informações armazenadas em arrays no seguinte formato:

const corpoDocente = [
  [ 'Gramática', '9:00', 'Sueli' ],
  [ 'Matemática', '10:15', 'Amilton'],
  [ 'Educação Física', '11:30', 'Bruno' ]
];
Para o usuário final, é necessário que a informação seja apresentada de uma forma mais adequada, identificando o que significa cada um dos itens. 
Implemente o método mostraGradeProfessores() quer recebe um array de arrays no formato do objeto corpoDocente e devolve, 
para cada item, a seguinte mensagem no console:

"Aula de <matéria> às <hora> com professor(a) <nome>"
*/

var corpoDocente = [["Gramática", "9:00", "Sueli"], ["Matemática", "10:15", "Amilton"], ["Educação Física", "11:30", "Bruno"]];

var mostraGradeProfessores = function mostraGradeProfessores(corpoDocente) {
  return params.forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 3),
        disciplina = _ref3[0],
        horario = _ref3[1],
        nomeProfessor = _ref3[2];

    return console.log("aula de ".concat(disciplina, " \xE0s ").concat(horario, " com professor(a) ").concat(nomeProfessor));
  });
};

mostraGradeProfessores(corpoDocente);
/*
Exercício x - Converta do modelo 1 para o modelo 2 utilizando desestruturamento de objetos e arrays.
// modelo1
const pontos = [
  [1,2],
  [3,4],
  [5,6]
];

// modelo 2
const pontos = [
  {x:1, y:2},
  {x:3, y:4},
  {x:5, y:6},
]
*/