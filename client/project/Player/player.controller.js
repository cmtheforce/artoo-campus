angular.module('artoo').controller('PlayerCtrl', ($scope, PlayerSrv, RoleSrv ) =>{
    $scope.PlayerSrv = PlayerSrv;
    $scope.RoleSrv = RoleSrv;
});