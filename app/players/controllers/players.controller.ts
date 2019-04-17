module App.Players{
    class PlayersController implements App.Players.Models.PlayersModel{
        players:  App.Players.Models.Player[];
        constructor(){
            this.players = [
                {
                    name: 'ram',
                    age: 25,
                    gender: 'male',
                    likes:0,
                    dislikes:0
                },
                {
                    name: 'syam',
                    age: 24,
                    gender: 'male',
                    likes:0,
                    dislikes:0
                },
                {
                    name: 'babu',
                    age: 15,
                    gender: 'male',
                    likes:0,
                    dislikes:0
                },
                {
                    name: 'raju',
                    age: 20,
                    gender: 'male',
                    likes:0,
                    dislikes:0
                }
            ];
        }

        like(player:App.Players.Models.Player){
            player.likes+=1;
        }

        dislike(player:App.Players.Models.Player){
            player.dislikes+=1;
        }

    }

    angular.module('myApp').controller('playersCtrl', [PlayersController]);
}