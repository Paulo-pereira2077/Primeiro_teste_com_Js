class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.peso = 37;
        this.especie = especie;
    }

    exibirEspecie() {
        console.log(`ADO1: ${this.especie}`);
    }

    mergulhar() {
        console.log(`O ${this.nome} mergulhou em baixo do gelo!`);
    }

    sair() {
        console.log(`O ${this.nome} retornou à superfície!`);
    }

    cacar() {
        this.tempoCaca = 30;
        console.log(`O ${this.nome} saiu para caçar peixes por ${this.tempoCaca}min.`);
    }

    engordar() {
        this.peso += 10;
        console.log(`O ${this.nome} pesava 37kg, porém comeu demais e chegou a pesar ${this.peso}kg!`);
    }
}

const titulo = new Animal("Pinguim", "Pinguim-imperador");
titulo.exibirEspecie();

// pula uma linha
console.log("");

const ato1 = new Animal("Pinguim", "Pinguim-imperador");
ato1.cacar();
ato1.mergulhar();
ato1.sair();
ato1.engordar();