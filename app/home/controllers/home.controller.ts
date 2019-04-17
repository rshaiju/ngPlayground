
module App.Home {
    class HomeController implements HomeModel {

        static $inject=['$location'];
        constructor(private $location: any) {

        }

        login(): void {
            console.log('hello');
            this.$location.path('/arena/fgg');
        }
    }
    angular.module('myApp').controller('homeCtrl',  HomeController);
}

