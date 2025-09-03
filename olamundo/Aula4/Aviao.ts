class Aviao {
    cor: String;
    velocidade: number;
    cia: String;
 
    constructor(cor: String, cia: String){
        this.cor = cor;
        this.cia = cia;       
    }
 
    // Métodos do avião
    acelerar(velocidade?: number) {
        if(velocidade === undefined){
            this.velocidade += 50;
        }
        else{
            this.velocidade = velocidade;
        }
    }
}

const aviao1 = new Aviao("Branco", "TAM");
console.log(aviao1);