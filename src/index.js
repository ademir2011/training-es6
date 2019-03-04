// Capítulo 08 - Declaração de variáveis com const e let

/*
Exercício 1 - Sei tudo sobre variáveis
Considere o trecho de código abaixo e responda as questões:

var arrayFuncoes = [];
for(var i = 0; i < 10; i++){
  arrayFuncoes.push(function(){
    console.log(i);
  });
}

arrayFuncoes.forEach(function(funcao){
  funcao();
});
a) Quais os valores são exibidos no console na execução desse código? b) Como podemos ajustar o comportamento desta função utilizando ES6?
*/

// RESPOSTA - Exercicio 1

// Ao executar no forEach será exibido o valor de 10 para todos os console.log, pois a variável i atribuido ao console.log
// para cada console.log em cada função é basicamente a referência do i que está sendo iterado no for.
// Para resolver isto precisamo usar o let

var arrayFuncoes = [];
for (let i = 0; i < 10; i++) {
  arrayFuncoes.push(() => {
    console.log(i);
  });
}

arrayFuncoes.forEach(item => item());

/*
Exercício 2 - ISSO_EH_UMA_CONSTANTE
Uma prática comum dos desenvolvedores é deixar o nome das variáveis que representam constantes em caixa alta. 
Como por exemplo, uma variável que armazena uma chave de API de um webservice. 
Com o ES6, temos uma maneira melhor de representar isso. Que maneira é essa?
*/

// RESPOSTA - Exercício 2
// usando o const podemos utilizar valores em variáves sem que elas sejam modificada, salvo excessões como objetos

/*
Exercício 3 - Eu estou mandando atribuir!
Um programador júnior de uma empresa de software está tentando executar o seguinte código:

function nomeCompleto(primeiroNome, segundoNome){
  const nomeCompleto = primeiroNome;
  nomeCompleto += ' ' + segundoNome;

  return nomeCompleto;
}
Ele não consegue entender o que está fazendo de errado. No que ele está errando?
*/

//RESPOSTA - Exercício 3
//Basicamente o programador não pode alterar o valor da variávels nomeCompleto, tendo em vista que a variável tem seu
//valor constante

/*
Exercício 4 - Não estou entendendo mais nada
Uma jovem programadora pensou que havia entendido como funcionava a declaração de variáveis com let e const até ver o seguinte trecho de código:

const jogador = {};
jogador.nome = 'Rodrigo';
jogador.idade = 33;

console.log(jogador.nome  + '_' +  jogador.idade); // saída: Rodrigo_33
Ela achou que este código não funcionaria, 
pois havia entendido que não era possível colocar novos valores em variáveis declaradas com const. 
Por que este código funciona sem problemas?
*/

//RESPOSTA - Exercício 4
//Por que o objeto constante jogador é mutável, para ser completamente imutável deve-se usar o método Objeto.freezer();

/*
Exercício 5 - Lá vem um temporal
O que significa o Temporal Dead Zone? Qual sua relação com o Hoisting?
*/

//RESPOSTA - Exercício 5
//No hoisting temos variáveis que mesmo sendo declarados após ser chamado ela ainda é executada com um valor undefined
//Já na TDZ isso não pode acontecer pois as variáveis devem ser declaradas antes de ser chamadas

/*
Exercício 6 - Tudo fora de escopo
Refatore o código a seguir utilizando o const e let.

var status = [
  { codigo: 'OK', resposta: 'Sucesso' },
  { codigo: 'FAILED', resposta: 'Erro' },
  { codigo: 'PENDING', resposta: 'Pendente' }
];
var mensagem = '';
var codigoAtual = 'OK';

for (var i = 0; i < status.length; i++) {
  if (status[i].codigo === codigoAtual) {
    mensagem = status[i].resposta;
  }
}

console.log(mensagem);
*/

//RESPOSTA - Exercício 6

const status2 = [
  { codigo: "OK", resposta: "Sucesso" },
  { codigo: "FAILED", resposta: "Erro" },
  { codigo: "PENDING", resposta: "Pendente" }
];
let mensagem = "";
const codigoAtual = "OK";

for (let i = 0; i < status2.length; i++) {
  if (status2[i].codigo === codigoAtual) {
    mensagem = status2[i].resposta;
  }
}

console.log(mensagem);
