var Animal = /** @class */ (function () {
    function Animal(nome, especie) {
        this.nome = nome;
        this.peso = 37;
        this.especie = especie;
    }
    Animal.prototype.exibirEspecie = function (especie) {
        console.log("ADO1: ".concat(this.especie));
    };
    Animal.prototype.mergulhar = function () {
        console.log("O ".concat(this.nome, " mergulhou em baixo do gelo!"));
    };
    Animal.prototype.sair = function () {
        console.log("O ".concat(this.nome, " retornou \u00E0 superf\u00EDcie!"));
    };
    // saiu para caçar peixes
    Animal.prototype.cacar = function () {
        this.tempoCaca = 30;
        console.log("O ".concat(this.nome, " saiu para ca\u00E7ar peixes por ").concat(this.tempoCaca, "min."));
    };
    Animal.prototype.engordar = function (peso) {
        this.peso += 10;
        console.log("O ".concat(this.nome, " pesava 37kg, por\u00E9m comeu demais e chegou a pesar ").concat(this.peso, "kg!"));
    };
    return Animal;
}());
var titulo = new Animal("Pinguim", "Pinguim-imperador");
titulo.exibirEspecie("Pinguim");
// pula uma linha
console.log("");
var ato1 = new Animal("Pinguim", "Pinguim-imperador");
ato1.cacar();
ato1.mergulhar();
ato1.sair();
ato1.engordar(10);
