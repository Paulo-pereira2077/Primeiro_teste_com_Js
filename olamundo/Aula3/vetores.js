const marcas = ["BMW", "AUDI", "FERRARI"];
console.log(marcas[2]); 
console.log(marcas.at(1));

marcas.push("LAMBORGHINI");

for (let i = 0; i < marcas.length; i++){
    console.log(`Marca: ${marcas[i]} famosa`);
}

console.log(" ");// pula uma linha

// Remove a primeira posição do vetor
marcas.shift();
//Remove a última posição
marcas.pop();

for(item of marcas){
    console.log("Restou: " + item);
}