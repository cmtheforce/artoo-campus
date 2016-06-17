angular.module('artoo').service('StoryCombatSrv', function(PlayerSrv){
    
    //PRENDO L'ID DEL PLAYER
    this.useHealthPotion = (player) => {
        
        //TOLGO UNA POZIONE DALL'INVENTARIO
        //PlayerSrv.removeHealthPotion();
        
        //PRENDO L'INVENTARIO DI UN GIOCATORE
        // PlayerSrv.getInventoryById(player.id);
    };
    
    this.useManaPotion = () => {
        
    };
    
    this.doNormalAttack = () => {
        
    };
    
    this.doSpecialAttack = () => {
        
    };
    
});