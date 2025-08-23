const fila = ["Enzo", "Valentina", "LucaS"];

// adicionando clientes na fila
fila.push("Ana", "Pedro");

// remove o primeiro cliente da fila e armazena quem foi atendido
const atendido = fila.shift();

fila.push("Mateus");

console.log(fila);
console.log(`O primeiro a ser atendido é ${atendido}`);

