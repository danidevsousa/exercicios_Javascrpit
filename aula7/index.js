//Não podemos criar constantes com palavras reservadas
//exemplo: let if, ou, let let.

//Constantes precisam ter nomes significativos.
//exemplo: let nomeCliente = 'João';

//Não pode começar o nome de uma constante com um número.
//exemplo: let 1nome;

//Nome das constante não podem conter espaços ou traços
// exemplo: let nome-Cliente;

//Case-sensisive
//let nomeCliente = 'Luiz';
//let nomecliente = 'Otávio';
//os dois da duas variaveis diferentes.

//Não podemos modificar o valor de uma constante.

//NÃO ULTIZE VAR, ULTILIZE CONST.
///////////////////////////////////////

const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDulplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

//console.log(typeof(primeiroNumero + segundoNumero));