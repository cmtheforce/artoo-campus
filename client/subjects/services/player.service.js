angular.module('artoo').service('PlayerSrv', function(){
    
    var player = {
        name: 'Buzzurro',
        hp : 100,
        exp: 17,
        level : 2,
        race : 'Gnome',
    }
    
    this.die = () => {
        player.hp = 0;
    };
    
    this.drinkPotion = () => {
        
    };

    this.gainExp = () => {
        
    };
    //SERVE PER PRENDERE I DATI RISERVANDO I DATI
    this.getHp= () => {
        return player.hp;
    };
    
    this.isDead = () => {
        //0 E' FALSE
        //!! PRENDE IL VALORE BOOLEAN
        return !(!!player.hp);
    };
    
    this.levelUp = () =>{
        
    };
    
    this.respawn = () => {
        
    };
   
    this.takeHit = () => {
        
    };
    
    
   
    
    
});