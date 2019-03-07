// Capítulo - Funções geradoras

/*
Exercício 1 - O que é isso?
Em termos simples, explique o que são funções geradoras e como podemos identificá-las.
*/

// Funções agregadoras serve para modificar o iterador da estrutura para que possa-mos
// definir quais serão os objetos iteráveis

/*
Exercício 2 - Sinal de parada
Considere o trecho de código a seguir:

function* testeDeGeradores() {
  console.log('passei aqui!');
  yield 'fim do método';
}
Ao executar o método, a frase "passei aqui!" não é exibida no console como esperado. Por quê? O que é necessário fazer para que a mensagem seja exibida?
*/

// A mensagem não é exibida pq não foi retornado o iterador para ser executado.
function* testeDeGeradores() {
  console.log("passei aqui!");
  yield "fim do método";
}

var teste = testeDeGeradores();
teste.next();

/*
Exercício 3 - Corre Bolt! Corre!
Implemente uma função geradora chamada 'correBolt' que retorna para cada parada um checkpoint. Em cada checkpoint, deve ser impresso a mensagem: 
Usain passou no Checkpoint X, onde "X" indica o número do checkpoint. A função deve ter quatro paradas. Não se esqueça de invocar o método next.
*/

function* correBolt() {
  yield "Usain passou no Checkpoint 1";
  yield "Usain passou no Checkpoint 2";
  yield "Usain passou no Checkpoint 3";
  yield "Usain passou no Checkpoint 4";
}

const it = correBolt();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

/*
Exercício 4 - Temos que pegar!
Refatore o trecho de código a seguir utilizando todas as melhorias propostas pelo ES6 até então. Use obrigatoriamente funções geradoras.

var pokemons = ['Pikachu', 'Charmander', 'Caterpie'];
for(var index = 0; index < pokemons.length; index++) {
	var pokemon = pokemons[index];
	console.log('Capturou o ' + pokemon + '!');
}
*/

const pokemons = ["Pikachu", "Charmander", "Caterpie"];

for (let pokemon of pokemons) console.log(`Capturou o ${pokemon} !`);

/*
Exercício 5 - Símbolos dizem até demais
Considere o seguinte objeto equipe representada pelo código que segue:

const equipe = {
  gerente: 'Gilberto',
  estagiario: 'Fernanda',
  senior: 'Paulo',
  pleno: 'Camila',
  junior: 'Adão'
}
Faça com que o objeto equipe se torne iterável em um laço de repetição do tipo for...of.

Exemplo:

for(let integrante of equipe) {
  console.log(integrante);
}

Gilberto
Fernanda
Paulo
Camila
Adão
*/

const equipe = {
  gerente: "Gilberto",
  estagiario: "Fernanda",
  senior: "Paulo",
  pleno: "Camila",
  junior: "Adão",
  [Symbol.iterator]: function*() {
    yield this.gerente;
    yield this.estagiario;
    yield this.senior;
    yield this.pleno;
    yield this.junior;
  }
};

for (let integrante of equipe) {
  console.log(integrante);
}
