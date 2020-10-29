function Animacao() {
    this.sprite = [];
    this.ligado = false;
}

Animacao.prototype = {
    novoSprite: function(sprite) {
        this.sprite.push(sprite);
    },
    ligar: function() {
        this.ligado = true;
        this.proximoFrame();
    },

    desligar: function() {
        this.ligado = false;
    }
}