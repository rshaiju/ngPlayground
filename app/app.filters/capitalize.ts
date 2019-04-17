
angular.module('myApp').filter('capitalize',[function(){
    return function(input){
        return input?input[0].toUpperCase()+ input.substring(1):'';
    }
}]);