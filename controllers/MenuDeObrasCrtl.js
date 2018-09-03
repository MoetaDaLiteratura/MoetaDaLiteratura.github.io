function MenuObrasCrtl() {
    CoreCtrl.apply(this, arguments);
    this.service = this.inject('About');
    this.$scope.poesia = 0;
    this.$scope.categoria = 'Selecione uma categoria acima :D';
    this.$scope.aparece = false;
    this.init();
}

$.extend(MenuObrasCrtl.prototype, CoreCtrl.prototype);

MenuObrasCrtl.prototype.init =  function () {
    this.$scope.poesias = [];
};

MenuObrasCrtl.prototype.openPoesia = function() {
    this.$scope.poesias = this.service.poesias.filter(it => it.foto === 'POESIAS.png');
    this.$scope.categoria = 'Poesias'
}

MenuObrasCrtl.prototype.openConto = function() {
    this.$scope.categoria = 'Contos';
    this.$scope.poesias = this.service.poesias.filter(it => it.foto === 'CONTOS.png');
}