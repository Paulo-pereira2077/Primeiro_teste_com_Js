class Drone {
    marca;
    modelo;
    cor;
    helices;
    altitude = 0;
    velocidade = 0;

    constructor(modelo){
        this.modelo = modelo;
        this.cor = "Rosa";
        this.marca = "Senac";
        this.helices = 4;
    }
    
    decolar(){
        this.altitude = 10;
        console.log(`${this.modelo} decolou! - altitude: ${this.altitude}m`);
    }

    pousar(){
        this.altitude = 0;
        console.log(`${this.modelo} pousou! - altitude: ${this.altitude}m`);
    }

    subir(){
        this.altitude += 5;
    }

    descer(){
        this.altitude -=5;
    }  

    acelerar(...args){
        if (args.length === 0){
            this.velocidade += 10;
            console.log(`Velocidade: ${this.velocidade}m/s`)
        }
        else if (args.length === 1){
            this.velocidade += args[0];
            console.log(`Velocidade: ${this.velocidade}m/s`)
        }
        else {
            console.log("Parâmetros inválidos");
        }
    
    }

}

const meuDrone = new Drone("A106");
meuDrone.modelo = "A106";
meuDrone.cor ="Laranja";
meuDrone.decolar();
meuDrone.pousar();
meuDrone.acelerar();

console.log(meuDrone.marca);
console.log(meuDrone.cor);


const meuDroneRodizio = new Drone("A105");
meuDroneRodizio.modelo = "A105";
meuDroneRodizio.decolar();
meuDroneRodizio.acelerar();
meuDroneRodizio.acelerar(15);
meuDroneRodizio.cor = "Azul";
console.log(`Drone do rodízio - ${meuDroneRodizio.cor}`);

