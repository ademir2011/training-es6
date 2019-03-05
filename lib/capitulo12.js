"use strict";

// Capítulo 12 - Parâmetros predefinidos em funções

/*
Exercício 1 - Quem é você?
O que acontece na execução do código a seguir?

function mostraNome(nome) {
    console.log(`Meu nome é: ${nome}`);
}

mostraNome(); // ??
*/
// O parâmetro nome da função recebe o valor undefiner, já que não foi passado
// quando a função foi executada

/*
Exercício 2 - Me passa uns parâmetros ae
Refatore o código a seguir utilizando parâmetros padrão de função.

function soma(a,b) {
  if(a === undefined) {
    a = 0;
  }
  if(b === undefined) {
    b = 0;
  }

  return a + b;
}
*/
var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
};
/*
Exercício 3 - Tá aqui a minha identidade
Refatore o código a seguir de modo a remover as variáveis sobrenomeTratado e nomeDoMeioTratado.

function imprimeNomeCompleto(nomeTratado, sobrenome, nomeDoMeio) {
  let nomeTratado = nomeTratado || '';
  let sobrenomeTratado = sobrenome || '';
  let nomeDoMeioTratado = nomeDoMeio || '';

  console.log(`${nomeTratado} ${nomeDoMeioTratado} ${sobrenomeTratado}`);
}

imprimeNomeCompleto('João'); // João
*/


var imprimeNomeCompleto = function imprimeNomeCompleto() {
  var nomeTratado = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var sobrenome = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var nomeDoMeio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  console.log("".concat(nomeTratado, " ").concat(sobrenome, " ").concat(nomeDoMeio));
};

imprimeNomeCompleto("João"); // João

/*
Exercício 4 - Adivinha em quem eu estou pensando?
Considere o código a seguir e responda: Qual o valor será mostrado? E por que?

const v = 'valor 1';
function funcao(x = v) {
  const v = 'valor 2';
  console.log(x);
}

funcao(); // qual valor será mostrado?
*/
// Será exibido valor 1, pois o v entre os parênteses corresponde ao contexto
// global

/*
Exercício 5 - Pare de me imitar!
Como podemos tornar o código abaixo menos repetitivo?

function subtrair(a = 0,b = 0) {
  return a + b;
}
*/

var subtrair = function subtrair() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
};