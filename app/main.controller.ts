module App{

    class MainController{
        appTitle:string;
        constructor(){
            this.appTitle = 'Play Arena...';
        }

    }

    angular.module('myApp').controller('mainCtrl', [MainController]);
}