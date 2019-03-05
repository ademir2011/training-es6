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

const tag = (string, ...valores) =>
  valores[0]
    .split(",")
    .map(item => `<li>${item}</li>`)
    .join("");

const compras = `leite,feijão,arroz,mandioca`;
const elemento = tag`${compras}`;

console.log(elemento);

/*
Exercício 2 - Maçaroca de Strings
Implemente o método criaMacaroca que recebe como parâmetro uma lista de strings. O método deve retornar uma única string que é o resultado de todos os itens do array concatenados. É obrigatório a utilização de template string.

Exemplo: criaMacaroca(['a','b','c', 'd']) → abcd
*/

const criaMacaroca = list => `${list[0]}${list[1]}${list[2]}${list[3]}`;

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

const montaEnderecoCompleto = (...params) =>
  `${params[0]}, ${params[1]}, ${params[2]}, ${params[3]}`;

console.log(
  montaEnderecoCompleto("Rua dos infelizes", "zumbido", "69", "159159-555")
);

/*
Exercício 4 - Seja muito bem-vindo!
Refatore o código a seguir para utilizar template strings.

let nome = 'usuario';
console.log('Bem-vindo ' + usuário + '!');
*/

const nome = "usuario";
console.log(`Bem-vindo ${nome} !`);

/*
Exercício 5 - Cálculo interpolado
Faça a implementação da função 'soma' que recebe como parâmetro dois valores que devem ser somados. O resultado da soma deve ser exibido no console no seguinte formato:

+ =

Utilize template string para implementar este método.

Exemplo: soma(1,2) → 1 + 2 = 3
*/

const soma = (...params) =>
  `${params[0]} + ${params[1]} = ${params[0] + params[1]}`;

console.log(soma(1, 2));
