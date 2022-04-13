//console.log('Meu nome é "Danielle". Estou aprendendo JavaScript às', 10,'da manhã.');

/*
Francisco Eduardo tem 20 anos, pesa 100kg
tem 1.9 de altura e seu IMC é de 23.925925925925
*/
const nome = 'Franscisco';
const sobrenome = 'Eduardo';
const idade = 20;
const peso = 100;
const alturaEmCm = 1.96;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 2001;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${alturaEmCm} e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${sobrenome} nasceu em ${anoNascimento}.`);



