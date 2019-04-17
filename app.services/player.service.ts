module App.Services {

    interface IPlayerDataService {
        getPlayers():ng.resource.IResourceClass<IPlayerResource>
    }

    interface IPlayerResource extends ng.resource.IResource<Players.Models.Player> {

    }

    
    class PlayerDataService implements IPlayerDataService {

        static inject = ['$resource'];
        constructor(private $resource:ng.resource.IResourceService) {

        }

        getPlayers():ng.resource.IResourceClass<IPlayerResource> {
            return this.$resource('api/players/:playerId');
        }
    }

    angular.module('myApp.services').service('playerDataService',PlayerDataService);
}