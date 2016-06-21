angular.module('artoo').controller('IntroCtrl', function(PlayerSrv, $state){
    
    this.resetPlayers = () =>{
        PlayerSrv.remove();
        $state.go("createCharacter");
    }
});