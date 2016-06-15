angular.module('artoo').controller('PageLoaderCtrl', function ($scope) {

    console.log("LOADING= " +   this.loading);
    console.log("PageLoader runs");
    $scope.$on('$stateChangeStart', function(){
        $scope.loading = true;
        console.log("StateChangeStart");
    });
    
    $scope.$on('$stateChangeSuccess', function(){
         $scope.loading = false;
         console.log("StateChangeSuccess");
    });
    
});