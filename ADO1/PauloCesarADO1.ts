class Animal{

    nome: String;
    peso: number;
    especie: String;
    tempoCaca: number;

    constructor (nome: String, especie: String){
        this.nome = nome;
        this.peso = 37;
        this.especie = especie;
        this.tempoCaca = 30;
    }

    exibirEspecie(especie: String){
        console.log(`ADO1: ${this.especie}`);
    }

    mergulhar(){
         console.log(`O ${this.nome} mergulhou em baixo do gelo!`);
    }

    sair(){
        console.log(`O ${this.nome} retornou à superfície com os peixes!`);
    }
    
    // saiu para caçar peixes
    cacar(){        
        console.log(`O ${this.nome} saiu para caçar peixes por ${this.tempoCaca}min.`)
    }

    engordar(peso: number){
        this.peso += 10;
        console.log(`O ${this.nome} pesava 37kg, porém comeu demais e chegou a pesar ${this.peso}kg!`)
    }
}

const titulo = new Animal("Pinguim", "Pinguim-imperador");
titulo.exibirEspecie("Pinguim");

// pula uma linha
console.log("");

const ato1 = new Animal("Pinguim", "Pinguim-imperador");
ato1.cacar();
ato1.mergulhar();
ato1.sair();
ato1.engordar(10);