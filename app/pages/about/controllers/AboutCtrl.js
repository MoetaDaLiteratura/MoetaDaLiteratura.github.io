function AboutCtrl() {
    CoreCtrl.apply(this, arguments);
    this.service = this.inject('About');
    this.init();
}

$.extend(AboutCtrl.prototype, CoreCtrl.prototype);

AboutCtrl.prototype.init =  function () {
    this.$scope.poesias = this.service.poesias;
};

