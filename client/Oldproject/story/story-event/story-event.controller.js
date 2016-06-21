angular.module('artoo').controller('StoryEventCtrl', function (StoryEventSrv, PlayerSrv, StorySrv){
    this.StoryEventSrv = StoryEventSrv;
    this.PlayerSrv = PlayerSrv;
    this.StorySrv = StorySrv;
});