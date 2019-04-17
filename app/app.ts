module App {

    var app = angular.module('myApp', ['ngRoute','myApp.services']);

    app.config(['$routeProvider','$locationProvider',function ($routeProvider: ng.route.IRouteProvider, $locationProvider:ng.ILocationProvider):void {
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
            .when('/home', {
                controller: 'homeCtrl as homeCtrl',
                templateUrl: './app/home/views/home.view.html'
            })
            .when('/arena/:username', {
                controller: 'arenaCtrl as arenaCtrl',
                templateUrl: './app/arena/views/arena.view.html'
            })
            .when('/contact', {
                controller: 'contactCtrl as contactCtrl',
                templateUrl: './app/contact/views/contact.view.html'
            })
            .when('/players', {
                controller: 'playersCtrl as playersCtrl',
                templateUrl: './app/players/views/players.view.html'
            })
            .otherwise({ redirectTo: '/home' });
    }]);

}

