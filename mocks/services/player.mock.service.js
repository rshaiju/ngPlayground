var App;
(function (App) {
    var Mock;
    (function (Mock) {
        var Service;
        (function (Service) {
            var playerMock = angular.module('playerService.mocks', ['ngMockE2E']);
            playerMock.run(mockRun);
            mockRun.$inject = ['$httpBackend'];
            function mockRun($httpBackend) {
                var players = [
                    {
                        name: 'ram',
                        age: 25,
                        gender: 'male',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'syam',
                        age: 24,
                        gender: 'male',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'babu',
                        age: 15,
                        gender: 'male',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'raju',
                        age: 20,
                        gender: 'male',
                        likes: 0,
                        dislikes: 0
                    }
                ];
                var playersUrl = "/api/players";
                $httpBackend.whenGET(playersUrl).respond(players);
                $httpBackend.whenGET('/api/').respond(function () {
                    return [200, players, {}];
                });
                $httpBackend.whenGET('app/').passThrough();
                //$httpBackend.flush();
            }
        })(Service = Mock.Service || (Mock.Service = {}));
    })(Mock = App.Mock || (App.Mock = {}));
})(App || (App = {}));
