function MenuObrasCrtl() {
    CoreCtrl.apply(this, arguments);
    this.service = this.inject('Obras');
    this.$scope.categoria = 'Selecione uma categoria acima :D';
    this.init();
}

$.extend(MenuObrasCrtl.prototype, CoreCtrl.prototype);

MenuObrasCrtl.prototype.init =  function () {
    this.$scope.obras = [];
};

MenuObrasCrtl.prototype.openPoesia = function() {
    this.$scope.obras = this.service.obras.filter(it => it.foto === 'POESIAS.png');
    this.$scope.categoria = 'Poesias'
}

MenuObrasCrtl.prototype.openConto = function() {
    this.$scope.categoria = 'Contos';
    this.$scope.obras = this.service.obras.filter(it => it.foto === 'CONTOS.png');
}
