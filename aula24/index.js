const elementos = [
    { tag: 'p', texto: 'Salve' },
    { tag: 'div', texto: 'Olá'},
    { tag: 'section', texto: 'Oi mv'},
    { tag: 'header', texto: 'salve vida'}
]
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    let tagCriada = document.createAttribute(tag);
    textoCriado = document.createTextNode();

    div.appendChild(tagCriada);
}
container.appendChild(div);
