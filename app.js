var app = angular.module('moita', [
    'ngRoute',
    'ngResource',
    'ngCookies',
    //'toastr',
    //'angularScreenfull',
    //'ng-sortable',
    //'angularUtils.directives.dirPagination',
    //'ngCropper',
    //'angularFileUpload',
    //'ui.bootstrap',
    //'ngMask',
    'ngMap',
    'ngSanitize'
]);

app.config([
    '$routeProvider',
    '$httpProvider',
    function ($routeProvider, $httpProvider) {
        $httpProvider,
        $routeProvider
            //.when('/', { templateUrl: 'pages/about/views/list.html', title: ['Moita'] }) 
            .when('/poseia', { templateUrl: 'pages/about/views/poesia.html', title: [] })
            .when('/', { templateUrl: 'controllers/menuDeObras.html', title: [] })
    }
]);

app.controller('MenuObrasCrtl', ['$injector', '$scope', MenuObrasCrtl]);

app.service('About', About);