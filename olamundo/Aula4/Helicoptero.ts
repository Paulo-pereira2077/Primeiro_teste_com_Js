class Helicoptero{

     cor: String;
    modelo: String;
    velocidade: number = 0;
    altitude: number = 0;

    constructor(modelo: String, cor: String){
        this.cor = "Azul";
        this.modelo = "V550";
    }

    subir(){
        this.altitude += 30;
        console.log(`O helicóptero ${this.modelo} decolou ${this.altitude}m`);
    }

    descer(){
        this.altitude -= 30;
        console.log(`O helicóptero pousou próximo à Estátua da Liberdade`);
    }

    aumentarVelocidade(){
        this.velocidade += 150;
        console.log(`O helicóptero ${this.modelo} atingiu a velocidade de ${this.velocidade}km/h`)
    }
}

const helicoptero = new Helicoptero("Azul", "V550");
helicoptero.subir();
helicoptero.aumentarVelocidade();
helicoptero.descer();