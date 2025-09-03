class Carro {
    modelo;
    cor;    

    constructor(modelo, cor){
        this.modelo = modelo;
        this.cor = cor;
    }

}

// primeiro objeto
const meuCarro = new Carro("Branco", "Corolla");

console.log("Modelo 1:")
console.log(meuCarro.modelo);
console.log(meuCarro.cor);

console.log("");

// segundo objeto
const carroVizinho = new Carro("Preto", "Civic");

console.log("Modelo 2:")
console.log(carroVizinho.modelo);
console.log(carroVizinho.cor);