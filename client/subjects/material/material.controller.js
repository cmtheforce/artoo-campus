angular.module('artoo').controller('MaterialCtrl', function($scope){
    $scope.minDate = new Date(2016,5,17);
    
    $scope.filterPredicate = function (){
         var day = date.getDay();
         return day%2 == 1;
    }
});