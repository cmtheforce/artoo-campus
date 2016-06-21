angular.module('artoo').controller('InventoryCtrl', function (InventorySrv, $scope) {
   this.InventorySrv = InventorySrv;
   
    // $scope.close = function () {
    //     $mdSidenav('right').close()
    //         .then(function () {
    //         console.log("click")
    //     });
    // };
});