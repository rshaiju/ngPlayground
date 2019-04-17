
(function name() {
    angular.module('myApp').controller('playersCtrl', [function () {
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

        this.like=function(player){
            player.likes+=1;
        }

        this.dislike=function(player){
            player.dislikes+=1;
        }
    }]);
})();

