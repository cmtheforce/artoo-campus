angular.module('artoo').controller('PlayerBarCtrl', function (PlayerSrv, $state) {
   this.PlayerSrv = PlayerSrv;
   this.$state = $state;
});