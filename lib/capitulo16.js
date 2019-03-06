"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Capítulo 16 - Modelando com Classes

/*
Exercício 1 - Dando uma transformada nos objetos
Refatore o código a seguir para que declaração do objeto VideoGame seja uma classe de acordo com o ES6. Não se esqueça de criar o construtor e invocar um objeto desta classe.

function VideoGame(marca, nControles, tipoMidia) {
  this.marca = marca;
  this.nControles = nControles;
  this.tipoMidia = tipoMidia;
}

var playstation = new VideoGame('sony', '2', 'dvd');
console.log(playstation);
// { marca: 'sony', nControles: '2', tipoMidia: 'dvd' }
*/
var VideoGame = function VideoGame(marca, nControles, tipoMidia) {
  _classCallCheck(this, VideoGame);

  this.marca = marca;
  this.nControles = nControles;
  this.tipoMidia = tipoMidia;
};

var playstation = new VideoGame("sony", "2", "dvd");
console.log(playstation); // { marca: 'sony', nControles: '2', tipoMidia: 'dvd' }

/*
Exercício 2 - O meu videogame é muito melhor que o seu
Aproveitando a classe VideoGame criada no exercício anterior, implemente a classe PlayStation que contém todas as propriedades do VideoGame mais as seguintes proprieades:

nEntradasUSB: inteiro que representa a quantidade de entradas usb do console
voltagem: inteiro que representa a voltagem do console.
adicionais: array de strings que representam os nomes dos adicionais do videogame (ex: adicionais=['Controle sem fio', 'Volante'])

Não esqueça de invocar um objeto da classe.
*/

var PlayStation =
/*#__PURE__*/
function (_VideoGame) {
  _inherits(PlayStation, _VideoGame);

  function PlayStation(marca, nControles, tipoMidia, nEntradasUSB, voltagem, adicionais) {
    var _this;

    _classCallCheck(this, PlayStation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlayStation).call(this, marca, nControles, tipoMidia));
    _this.nEntradasUSB = nEntradasUSB;
    _this.voltagem = voltagem;
    _this.adicionais = adicionais;
    return _this;
  }

  return PlayStation;
}(VideoGame);

var ps1 = new PlayStation("sony", 4, "cd", 4, 250, ["kinnect", "antena", "tv"]);
console.log(ps1);
/*
Exercício 3 - Tem alguém ai?
Crie uma classe chamada Porta que contenha um método chamado toctoc que sempre responde no console a mensagem: 'Quem é?'. 
O método deve funcionar mesmo sem que exista uma instância da classe.
*/

var Porta =
/*#__PURE__*/
function () {
  function Porta() {
    _classCallCheck(this, Porta);
  }

  _createClass(Porta, null, [{
    key: "toctoc",
    value: function toctoc() {
      console.log("quem é?");
    }
  }]);

  return Porta;
}();

Porta.toctoc();
/*
Exercício 4 - Qual é o jeito certo de fazer isso então?
Um programador codificou o seguinte trecho:

const comida = new Comida('Feijão');
class Comida {
  constructor(nome) {
    this.nome = nome;
  }
}
Ao tentar executar, ele recebeu o seguinte erro:

ReferenceError: Comida is not defined
Por que aconteceu este erro? O que é preciso modificar para que o código funcione corretamente?
*/
// Por que a classe foi declarada depois de ter sido chamada. Para resolver o erro, basta
// Colocar a classe antes da sua invocação.

/*
Exercício 5 - Declarações anônimas
Refatore o código a seguir para trocar a declaração da classe para que seja anônima:

class Computador {
  // conteúdo da classe
}
*/

var Computador = function Computador() {
  _classCallCheck(this, Computador);
};