var app = angular.module('moita', [
    'ngRoute',
    'ngResource',
    'ngCookies',
    'toastr',
    'angularScreenfull',
    'ng-sortable',
    'angularUtils.directives.dirPagination',
    'ngCropper',
    'angularFileUpload',
    'ui.bootstrap',
    'ngMask',
    'ngMap'
]);

app.config([
    '$routeProvider',
    '$httpProvider',
    function ($routeProvider, $httpProvider) {
        $httpProvider,
        $routeProvider
            .when('/', { templateUrl: 'pages/about/views/list.html', title: ['Moita'] }) 
            .when('/about/:status', { templateUrl: 'pages/about/views/maneging.html', title: [] })
    }
]);


app.controller('AboutCtrl', ['$injector', '$scope', AboutCtrl]);
app.controller('CreateAboutCtrl', ['$injector', '$scope', CreateAboutCtrl]);

app.service('About', About);