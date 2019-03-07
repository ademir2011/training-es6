// Capítulo 19 - Operações assíncronas com promises

/*
Exercício 1 - Promessa verdadeira
Em poucas palavras, diga o que são as Promises.
*/

// Como o próprio nome diz são promossas, onde o método garante que um determinado
// trecho de código assincrono execute ou casho haja falha seja tratada

/*
Exercício 2 - E que tudo mais vá para o inferno
O que é callback hell e qual a sua relação com as Promises?
*/

// Quando se é executao diversas vezes callbacks tendo um descontrole e assim
// abrindo possibilidade de gerar error

/*
Exercício 3 - Você cumpre as suas promessas?
Implemente o método simulaPromise() que recebe um parâmetro chamado sucesso que é um Boolean 
que indicará se a Promise foi realizada com sucesso ou não. O método deve receber esta parâmetro 
e imprimir a mensagem: ok em caso de sucesso e not ok no caso contrário.

Exemplo:

simulaPromise(false); // not ok
simulaPromise(true); // ok
Não se esqueça de utilizar o resolve, reject, then e catch para resolver o exercício.
*/

const simulaPromise = (buleano, delay) => {
  let promessa = new Promise((resolve, reject) => {
    if (buleano) {
      setTimeout(() => {
        resolve("ok");
      }, delay);
    } else {
      setTimeout(() => {
        reject("not ok");
      }, delay);
    }
  });

  promessa
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

/*
Exercício 4 - Você cumpre as suas promessas em tempo?
Para melhorar a simulação de Promise criada no exercício anterior, faça com o método receba mais um argumento 
chamado delay que é um inteiro que representa os milisegundos que a solicitação demora para responder. 
Ao executar o método, ele deve demorar o tempo do delay para exibir a mensagem no console.

Exemplo:

simulaPromise(true, 2000); // ok
simulaPromise(false, 1000); // not ok

// ordem que aparece no console
// not ok
// ok
*/

simulaPromise(true, 2000); // ok
simulaPromise(false, 1000); // not ok
