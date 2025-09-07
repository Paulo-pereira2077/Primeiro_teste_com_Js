const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 45
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade);

// para se referir a mesma variável porém com outro nome
const {nome: n, idade: i} = pessoa;
console.log(n, i);

// acessando os atributos de endereço
const {endereco: {logradouro, numero}} = pessoa;
console.log(logradouro, numero);