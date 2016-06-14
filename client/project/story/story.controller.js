angular.module('artoo').controller('StoryCtrl', function (StorySrv, PlayerSrv, ForeingSrv){
    this.StorySrv = StorySrv;
    this.PlayerSrv = PlayerSrv;
    this.ForeingSrv = ForeingSrv;
});