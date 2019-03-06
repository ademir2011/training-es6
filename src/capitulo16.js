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

class VideoGame {
  constructor(marca, nControles, tipoMidia) {
    this.marca = marca;
    this.nControles = nControles;
    this.tipoMidia = tipoMidia;
  }
}

const playstation = new VideoGame("sony", "2", "dvd");
console.log(playstation);
// { marca: 'sony', nControles: '2', tipoMidia: 'dvd' }

/*
Exercício 2 - O meu videogame é muito melhor que o seu
Aproveitando a classe VideoGame criada no exercício anterior, implemente a classe PlayStation que contém todas as propriedades do VideoGame mais as seguintes proprieades:

nEntradasUSB: inteiro que representa a quantidade de entradas usb do console
voltagem: inteiro que representa a voltagem do console.
adicionais: array de strings que representam os nomes dos adicionais do videogame (ex: adicionais=['Controle sem fio', 'Volante'])

Não esqueça de invocar um objeto da classe.
*/

class PlayStation extends VideoGame {
  constructor(
    marca,
    nControles,
    tipoMidia,
    nEntradasUSB,
    voltagem,
    adicionais
  ) {
    super(marca, nControles, tipoMidia);
    this.nEntradasUSB = nEntradasUSB;
    this.voltagem = voltagem;
    this.adicionais = adicionais;
  }
}

const ps1 = new PlayStation("sony", 4, "cd", 4, 250, [
  "kinnect",
  "antena",
  "tv"
]);

console.log(ps1);

/*
Exercício 3 - Tem alguém ai?
Crie uma classe chamada Porta que contenha um método chamado toctoc que sempre responde no console a mensagem: 'Quem é?'. 
O método deve funcionar mesmo sem que exista uma instância da classe.
*/

class Porta {
  static toctoc() {
    console.log("quem é?");
  }
}

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

const Computador = class {
  // conteúdo da classe
};
