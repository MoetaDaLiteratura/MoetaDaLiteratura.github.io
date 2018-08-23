function CreateAboutCtrl() {
    CoreCtrl.apply(this, arguments);
    this.service = this.inject('About');

    this.$scope.inputs = {
        txtHistory:'',
        txtMission:'',
        txtVision:'',
        txtValues :''
  };

    this.isEdit = false;
    this.url = this.$location.$$path;
    
    if(this.url.indexOf('edit') !== -1) {
        this.isEdit = true;
        this.getToEdit();
    }
}

$.extend(CreateAboutCtrl.prototype, CoreCtrl.prototype);

CreateAboutCtrl.prototype.getToEdit = function () {
    var id = localStorage.getItem('idAbout');

    loading.present();
    
    this.service.get(id).then(function (response) {
        this.$scope.list = response.data;

        this.$scope.inputs = {
            txtHistory:response.txtHistory,
            txtMission:response.txtMission,
            txtVision:response.txtVision,
            txtValues :response.txtValues
        };
        loading.dismiss();
    }.bind(this));
};

CreateAboutCtrl.prototype.save = function () {
  loading.present();
    var data = this.$scope.inputs;
    this.service.save(data)
        .then(this.saveSuccess.bind(this))
        .catch(this.errorCatch.bind(this));
};

CreateAboutCtrl.prototype.saveSuccess = function () {
  loading.dismiss();
  this.redirectToList(); 
};

CreateAboutCtrl.prototype.update = function () {
    var data = this.$scope.inputs;
    var id = localStorage.getItem('idAbout');
  
    this.service.edit(id, data)
        .then(this.updateSuccess.bind(this))
        .catch(this.errorCatch.bind(this));
};

CreateAboutCtrl.prototype.updateSuccess = function () {
  loading.dismiss();
  this.redirectToList();
};

CreateAboutCtrl.prototype.redirectToList = function (id) {
    this.$location.path('/about');
};

CreateAboutCtrl.prototype.submitForm = function (formStatus) {
  if (formStatus) {
    if(this.isEdit === true){
      this.update();
    }else{
      this.save();
    }
  } else {
      this.$scope.formIsValid = false;
  }
};