var App;
(function (App) {
    var Services;
    (function (Services) {
        var PlayerDataService = /** @class */ (function () {
            function PlayerDataService($resource) {
                this.$resource = $resource;
            }
            PlayerDataService.prototype.getPlayers = function () {
                return this.$resource('api/players/:playerId');
            };
            PlayerDataService.inject = ['$resource'];
            return PlayerDataService;
        }());
        angular.module('myApp.services').service('playerDataService', PlayerDataService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
