class Carro {
    modelo;
    cor;    

    constructor(modelo, cor){
        this.modelo = modelo;
        this.cor = cor;
    }

    exibirInfo(){
        console.log(`Modelo: ${this.modelo}, Cor: ${this.cor}`)
    }
}

// primeiro objeto
const meuCarro = new Carro("Branco", "Corolla");

console.log("Modelo 1:");
meuCarro.exibirInfo();

console.log("");

// segundo objeto
const carroVizinho = new Carro("Preto", "Civic");

console.log("Modelo 2:");
carroVizinho.exibirInfo();