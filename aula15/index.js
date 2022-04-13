//let num1 = 9;


//console.log(num1 ** 0.5); //raiz quadrada
//let num2 = Math.floor(num1); //arrendonda pra baixo ex: 9 let
//let num2 = Math.ceil(num1); //arrendonda para cima
//let num2 = Math.round(num1);//Arredonda para um numero mais proximo ex: 10
//num2 = (Math.max(1,2,3,4,5555,112));//Mostra o let  maior número
//num2 = (Math.min(1,2,3,4,5555,112));//Mostra o let  maior número
//const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // mostra um numero aleatorio entre 10 e 5
//console.log(Math.pow(2 , 10));//2 elvado a 10
//console.log(2 ** 10); // dois elevado a 10

//function comprimentarPessoa(pessoa){
//    console.log(`oi ${pessoa}`)
//}
//comprimentarPessoa("Jess");

//function comprimentar(){
 //   return 'Oi gente'
//}
//function comprimentarPessoa(pessoa){
//    console.log(`${comprimentar()}, meu nome é ${pessoa}`)
//}
//comprimentarPessoa('Joana')
function comParametro(param) {
    console.log(param)
}
comParametro()

const soma = function teste01(num1, num2, num3) {return num1 +num2 + num3}
console.log(soma(1 , 2, 3))