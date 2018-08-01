function CoreCtrl($injector, $scope, $routeParams){

   this.$injector = $injector;
   this.$scope = $scope;
   this.$routeParams = $routeParams;
   this.toastr = null;

   var injected = [
      "$rootScope",
      "$cookies",
      "$location",
      "$routeParams",
      "$http",
      "$anchorScroll",
      "$timeout",
       "$parse"
    ];
    angular.forEach(injected, function(objectName){
      this[objectName] = this.inject(objectName)
    }.bind(this));

}

CoreCtrl.prototype.inject = function(name){
  return this.$injector.get(name);
};