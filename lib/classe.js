"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Telefone = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Telefone = function Telefone(modelo, numero) {
  _classCallCheck(this, Telefone);

  this.modelo = modelo;
  this.numero = numero;
};

exports.Telefone = Telefone;