//               01234567  <- indices
let umaString = "O rato roeu a roupa do rei de roma";
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString  + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);
console.log(umaString.search(/r/));
console.log(umaString.replace(/O/, 'peido'));
console.log(umaString.replace(/r/g, '#')); // para todos os "R" se transformarem em #
console.log(umaString.length); //contar quantos caracteres tem
console.log(umaString.split('r'));// tira todos os r da frase
console.log(umaString.toLowerCase());//Deixar todas as letras minusculas
console.log(umaString.toUpperCase());//Deixst todas as letras maiusculas
 