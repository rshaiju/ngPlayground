module App.Arena {
    class ArenaController implements App.Arena.Models.ArenaModel {
        pageTitle: string;

        constructor(){
            this.pageTitle="Arena";
        }
    }
    angular.module('myApp').controller('arenaCtrl', [ArenaController]);
}

