function AboutCtrl() {
    CoreCtrl.apply(this, arguments);
    this.service = this.inject('About');
    this.$scope.poesia = 0;
    this.$scope.aparece = false;

    
    this.init();
}

$.extend(AboutCtrl.prototype, CoreCtrl.prototype);

AboutCtrl.prototype.init =  function () {
    this.$scope.poesias = this.service.poesias;
};

AboutCtrl.prototype.opeen =  function (i) {
    this.$scope.aparece = true;
    this.$scope.poesia = this.$scope.poesias[i];
    this.$location.hash('' + i);
};

AboutCtrl.prototype.close =  function (i) {
    this.$scope.aparece = false;
    this.$location.hash('');
};

