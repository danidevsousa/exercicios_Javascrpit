//Objetos
//function criarPessoa (nome, sobrenome, idade) {
//    return { nome, sobrenome, idade};
//}

 //const pessoa1 = criarPessoa ('Dejair', 'Sebastião', 40);
 //const pessoa2 = criarPessoa ('Danielle', 'Sousa', 20);
 //const pessoa3 = criarPessoa ('Gustavo', 'Nascimento', 24);
 //const pessoa4 = criarPessoa ('Regiane', 'Sousa', 40);
 //console.log(`O nome da pessoa 1 é: ${pessoa1.nome}`);

 const pessoal = {
     nome: 'Luiz', 
     sobrenome: 'Miranda',
     idade: 25,

     fala() {
         console.log(`A minha idade atual é: ${this.idade}.`);
     },

     incrementaIdade() {
         this.idade++;
     }
 };

 pessoal.fala();
 pessoal.incrementaIdade();
 pessoal.fala();