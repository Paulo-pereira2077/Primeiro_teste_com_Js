const quadrado = (num) => num ** 2;

function solicitarNumero(){
    let numero = prompt("Digite um número:");

if(numero !== null){
    let num = parseInt(numero);
    if(!isNaN(num)){            
        alert(`O quadrado de ${numero} é ${quadrado(num)}`);
    } 
    else {
        alert("Por favor, digite um número válido.");
    }
} else {
    alert("Você cancelou a operação.");
}
}