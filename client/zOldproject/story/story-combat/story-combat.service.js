angular.module('artoo').service('StoryCombatSrv', function(PlayerSrv){
    
    this.enableCombat = false;
    
    //VARIABILE PER DARE L'ORDINE AL COMBATTIMENTO
    this.order = 0;
    //VARIABILE PER PRENDERE LA LUNGHEZZA MASSIMA
    // this.lengthPlayers = 
    
    this.startCombat = () => {
        this.enableCombat = true;
    }
    
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