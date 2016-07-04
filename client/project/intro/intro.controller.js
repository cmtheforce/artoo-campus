angular.module('artoo').controller('IntroCtrl', function(PlayerSrv, $state, StorySrv, MonsterSrv){
    
    var crediti = false;
    
    this.resetPlayers = () =>{
        PlayerSrv.remove();
        MonsterSrv.deleteAndCreate();
        
        $state.go("createCharacter");
    }
    
    this.continue = () => {
        StorySrv.getCurrentStep().then((storyStart) => {
            storyStart.typology === 'combat' ? $state.go("storyCombat") : $state.go("storyEvent");
        });
    }
    
    this.credits = () => {
        if (crediti === false) 
         return crediti = true; 
         else return crediti = false;
    }
    
    // this.checkPlayers = () => {
    //     var numeroPlayer = PlayerSrv.query().then((data) => {
    //         if(data.length > 0){
    //             return true;
    //         }
    //         return false;
    //     });
        
    // }
});