var Aviao = /** @class */ (function () {
    function Aviao(cor, cia) {
        this.cor = cor;
        this.cia = cia;
    }
    // Métodos do avião
    Aviao.prototype.acelerar = function (velocidade) {
        if (velocidade === undefined) {
            this.velocidade += 50;
        }
        else {
            this.velocidade = velocidade;
        }
    };
    return Aviao;
}());
var aviao1 = new Aviao("Branco", "TAM");
console.log(aviao1);
