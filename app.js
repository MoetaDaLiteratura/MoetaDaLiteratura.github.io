var app = angular.module('moita', [
    'ngRoute',
    'ngResource',
    'ngCookies',
    'ngMap',
    'ngSanitize'
]);

app.config([
    '$routeProvider',
    '$httpProvider',
    function ($routeProvider, $httpProvider) {
        $httpProvider,
        $routeProvider
            .when('/', { templateUrl: 'controllers/menuDeObras.html', title: [] })
    }
]);

app.controller('MenuObrasCrtl', ['$injector', '$scope', MenuObrasCrtl]);

app.service('Obras', Obras);