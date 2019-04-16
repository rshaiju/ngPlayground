///<reference path="./../../../lib/angular.min.js"/>

angular.module('myApp').controller('homeCtrl',['$location',function($location){
    this.login=function(){
        console.log('hello');
        $location.path('/arena/fgg');
    }  
}]);
