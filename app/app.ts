var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider,$locationProvider) {
    $locationProvider.html5Mode({enabled:true});
    $routeProvider
        .when('/home', {
            controller: 'homeCtrl',
            templateUrl: './app/home/views/home.view.html'
        })
        .when('/arena/:username', {
            controller: 'arenaCtrl',
            templateUrl: './app/arena/views/arena.view.html'
        })
        .when('/contact', {
            controller: 'arenaCtrl',
            templateUrl: './app/contact/views/contact.view.html'
        })
        .when('/players', {
            controller: 'playersCtrl',
            templateUrl: './app/players/views/players.view.html'
        })
        .otherwise({ redirectTo: '/home' });
});


